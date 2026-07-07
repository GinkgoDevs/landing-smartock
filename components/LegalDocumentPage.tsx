import Link from "next/link";
import { NavBar } from "@/components/NavBar";
import type { LegalSection } from "@/content/legal-types";

type LegalDocumentPageProps = {
  title: string;
  updated: string;
  intro: readonly string[];
  sections: LegalSection[];
  tocLabel: string;
  sectionIdPrefix: string;
};

function renderParagraph(paragraph: string) {
  if (paragraph.includes("\n")) {
    return paragraph.split("\n").map((line) => (
      <span className="legalContactLine" key={line}>
        {line}
      </span>
    ));
  }

  return paragraph;
}

export function LegalDocumentPage({
  title,
  updated,
  intro,
  sections,
  tocLabel,
  sectionIdPrefix,
}: LegalDocumentPageProps) {
  return (
    <>
      <NavBar />

      <main className="legalPage">
        <div className="container legalPageInner">
          <header className="legalHero">
            <Link className="legalBackLink" href="/">
              ← Volver al inicio
            </Link>
            <p className="legalEyebrow">Documento legal</p>
            <h1>{title}</h1>
            <p className="legalUpdated">Última actualización: {updated}</p>
            <div className="legalIntro">
              {intro.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </header>

          <div className="legalLayout">
            <nav aria-label={tocLabel} className="legalToc">
              <p className="legalTocTitle">Índice</p>
              <ol>
                {sections.map((section) => (
                  <li key={section.id}>
                    <a href={`#${sectionIdPrefix}-${section.id}`}>
                      {section.id}. {section.title}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>

            <article className="legalContent">
              {sections.map((section) => (
                <section
                  className="legalSection"
                  id={`${sectionIdPrefix}-${section.id}`}
                  key={section.id}
                >
                  <h2>
                    {section.id}. {section.title}
                  </h2>

                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{renderParagraph(paragraph)}</p>
                  ))}

                  {section.listIntro ? <p>{section.listIntro}</p> : null}

                  {section.items?.length ? (
                    <ul>
                      {section.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  ) : null}

                  {section.trailingParagraphs?.map((paragraph) => (
                    <p key={paragraph}>{renderParagraph(paragraph)}</p>
                  ))}
                </section>
              ))}
            </article>
          </div>
        </div>
      </main>

      <footer className="legalFooter">
        <div className="container legalFooterInner">
          <p>© 2026 Smartock. Gestión inteligente para PyMEs argentinas.</p>
          <Link href="/#agenda">Contacto</Link>
        </div>
      </footer>
    </>
  );
}
