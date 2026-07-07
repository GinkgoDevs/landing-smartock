import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
UPDATED = "7 de julio de 2026"
W = "{http://schemas.openxmlformats.org/wordprocessingml/2006/main}"


def extract_docx(path: Path) -> list[str]:
    import zipfile
    import xml.etree.ElementTree as ET

    with zipfile.ZipFile(path) as archive:
        root = ET.fromstring(archive.read("word/document.xml"))

    paragraphs: list[str] = []
    for paragraph in root.iter(f"{W}p"):
        texts = [node.text for node in paragraph.iter(f"{W}t") if node.text]
        if texts:
            paragraphs.append("".join(texts))
    return paragraphs


def write_text(slug: str, paragraphs: list[str]) -> None:
    (ROOT / "content" / f"{slug}.txt").write_text(
        "\n\n".join(paragraphs),
        encoding="utf-8",
    )


def is_list_item(paragraph: str) -> bool:
    text = paragraph.strip()
    if text.endswith(";"):
        return True
    if text.endswith(".") and len(text) < 140 and text.count(".") == 1:
        return True
    return False


def normalize_contact(paragraph: str) -> str:
    paragraph = re.sub(
        r"ginkgodevs@gmail\.com\s*WhatsApp",
        "ginkgodevs@gmail.com\nWhatsApp",
        paragraph,
    )

    if "Ginkgo Devs / Smartock" in paragraph:
        return (
            "Ginkgo Devs / Smartock\n"
            "Responsable actual: Nicolás Alonso\n"
            "CUIT: 20-41950666-5\n"
            "Correo electrónico: ginkgodevs@gmail.com\n"
            "WhatsApp / teléfono: +54 9 381 566-7690"
        )

    if "ginkgodevs@gmail.com" in paragraph and "\n" not in paragraph:
        return (
            "Correo electrónico: ginkgodevs@gmail.com\n"
            "WhatsApp / teléfono: +54 9 381 566-7690"
        )

    return paragraph


def move_last_item_to_trailing(section: dict) -> None:
    if section.get("items"):
        section["trailingParagraphs"] = [section["items"].pop()]


def post_process_sections(slug: str, sections: list[dict]) -> list[dict]:
    for section in sections:
        trailing_starts = (
            "En casos graves",
            "En todos los casos",
            "Toda devolución",
            "La aprobación",
            "Smartock analizará",
        )

        if section.get("items") and section["items"][-1].startswith(trailing_starts):
            move_last_item_to_trailing(section)

        if slug == "terminos-y-condiciones" and section["id"] == 26 and len(section["paragraphs"]) > 1:
            section["trailingParagraphs"] = [section["paragraphs"].pop()]
        elif slug == "politica-de-cancelacion" and section["id"] == 12:
            approval = [p for p in section["paragraphs"] if p.startswith("La aprobación")]
            section["paragraphs"] = [
                paragraph for paragraph in section["paragraphs"] if not paragraph.startswith("La aprobación")
            ]
            section["trailingParagraphs"] = [
                *(section.get("trailingParagraphs") or []),
                *approval,
            ]
        elif "trailingParagraphs" not in section:
            section["trailingParagraphs"] = []

    return sections


def finalize_section(raw_paragraphs: list[str]) -> dict:
    paragraphs: list[str] = []
    list_intro: str | None = None
    items: list[str] = []
    index = 0

    while index < len(raw_paragraphs):
        paragraph = normalize_contact(raw_paragraphs[index])

        if paragraph.rstrip().endswith(":") and index + 1 < len(raw_paragraphs):
            collected: list[str] = []
            cursor = index + 1
            while cursor < len(raw_paragraphs) and is_list_item(raw_paragraphs[cursor]):
                item = raw_paragraphs[cursor].strip().rstrip(";").strip()
                if item.endswith("."):
                    item = item[:-1]
                collected.append(item)
                cursor += 1

            if len(collected) >= 2:
                list_intro = paragraph
                items = collected
                index = cursor
                continue

        paragraphs.append(paragraph)
        index += 1

    return {
        "paragraphs": paragraphs,
        "listIntro": list_intro,
        "items": items,
    }


def parse_document(paragraphs: list[str]) -> tuple[str, list[str], list[dict]]:
    title = paragraphs[0]
    intro: list[str] = []
    body_start = 1

    if len(paragraphs) > 1 and paragraphs[1].startswith("Última actualización"):
        body_start = 2

    section_start = body_start
    for index, paragraph in enumerate(paragraphs[body_start:], body_start):
        if re.match(r"^\d+\.\s+", paragraph):
            intro = [normalize_contact(item) for item in paragraphs[body_start:index]]
            section_start = index
            break

    sections: list[dict] = []
    current: dict | None = None

    for paragraph in paragraphs[section_start:]:
        match = re.match(r"^(\d+)\.\s+(.+)$", paragraph)
        if match:
            if current:
                finalized = finalize_section(current["raw"])
                sections.append(
                    {
                        "id": current["id"],
                        "title": current["title"],
                        **finalized,
                    }
                )
            current = {
                "id": int(match.group(1)),
                "title": match.group(2).strip(),
                "raw": [],
            }
        elif current:
            current["raw"].append(paragraph)

    if current:
        finalized = finalize_section(current["raw"])
        sections.append(
            {
                "id": current["id"],
                "title": current["title"],
                **finalized,
            }
        )

    intro = [normalize_contact(item) for item in intro]
    return title, intro, sections


def quote(value: str) -> str:
    return "`" + value.replace("`", "\\`") + "`"


def write_ts(slug: str, prefix: str, title: str, intro: list[str], sections: list[dict]) -> None:
    lines = [
        "export type LegalSection = {",
        "  id: number;",
        "  title: string;",
        "  paragraphs: string[];",
        "  listIntro?: string;",
        "  items?: string[];",
        "  trailingParagraphs?: string[];",
        "};",
        "",
        f"export const {prefix}Title = {quote(title)};",
        "",
        f"export const {prefix}Updated = {quote(UPDATED)};",
        "",
        f"export const {prefix}Intro = [",
    ]

    for paragraph in intro:
        lines.append(f"  {quote(paragraph)},")

    lines.extend(["] as const;", "", f"export const {prefix}Sections: LegalSection[] = ["])

    for section in sections:
        lines.append("  {")
        lines.append(f"    id: {section['id']},")
        lines.append(f"    title: {quote(section['title'])},")
        lines.append("    paragraphs: [")
        for paragraph in section["paragraphs"]:
            lines.append(f"      {quote(paragraph)},")
        lines.append("    ],")
        if section.get("listIntro"):
            lines.append(f"    listIntro: {quote(section['listIntro'])},")
            lines.append("    items: [")
            for item in section["items"]:
                lines.append(f"      {quote(item)},")
            lines.append("    ],")
        trailing = section.get("trailingParagraphs") or []
        if trailing:
            lines.append("    trailingParagraphs: [")
            for paragraph in trailing:
                lines.append(f"      {quote(paragraph)},")
            lines.append("    ],")
        lines.append("  },")

    lines.append("];")
    (ROOT / "content" / f"{slug}.ts").write_text("\n".join(lines) + "\n", encoding="utf-8")


DOCUMENTS = [
    {
        "slug": "terminos-y-condiciones",
        "prefix": "terms",
        "docx": None,
        "txt": ROOT / "content/terminos-y-condiciones.txt",
    },
    {
        "slug": "politica-de-privacidad",
        "prefix": "privacy",
        "docx": Path(r"c:\Users\nicoa\Downloads\Política de Privacidad de Smartock.docx"),
        "txt": None,
    },
    {
        "slug": "politica-de-cancelacion",
        "prefix": "cancellation",
        "docx": Path(
            r"c:\Users\nicoa\Downloads\Política de Cancelación, Renovación y Devoluciones de Smartock.docx"
        ),
        "txt": None,
    },
]


def main() -> None:
    for document in DOCUMENTS:
        if document["docx"]:
            paragraphs = extract_docx(document["docx"])
            write_text(document["slug"], paragraphs)
            source = ROOT / "content" / f"{document['slug']}.txt"
        else:
            source = document["txt"]

        text = source.read_text(encoding="utf-8")
        title, intro, sections = parse_document([p.strip() for p in text.split("\n\n") if p.strip()])
        sections = post_process_sections(document["slug"], sections)
        write_ts(document["slug"], document["prefix"], title, intro, sections)
        print(f"{document['slug']}: {len(sections)} sections")


if __name__ == "__main__":
    main()
