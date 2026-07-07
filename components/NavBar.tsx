import Image from "next/image";
import { AGENDA_URL } from "@/lib/links";

const navLinks = [
  { href: "/#funciones", label: "Funciones" },
  { href: "/#integraciones", label: "Integraciones" },
  { href: "/#planes", label: "Planes" },
  { href: AGENDA_URL, label: "Contacto", external: true },
];

function Logo() {
  return (
    <a className="logo" href="/" aria-label="Smartock">
      <span className="logoMark">
        <Image
          alt=""
          aria-hidden="true"
          height={500}
          priority
          src="/brand/smartock-isotype-violet.png"
          width={500}
        />
      </span>
      <span className="logoWordmark">Smartock</span>
    </a>
  );
}

export function NavBar() {
  return (
    <>
      <div className="navShell">
        <nav className="nav" aria-label="Navegacion principal">
          <div className="navInner">
            <Logo />
            <div className="navLinks">
              {navLinks.map((link) => (
                <a
                  href={link.href}
                  key={link.href}
                  {...(link.external
                    ? { rel: "noopener noreferrer", target: "_blank" }
                    : {})}
                >
                  {link.label}
                </a>
              ))}
            </div>
            <a
              className="navCta navCtaPill"
              href={AGENDA_URL}
              rel="noopener noreferrer"
              target="_blank"
            >
              Comenzar
            </a>
          </div>
        </nav>
      </div>
      <div aria-hidden="true" className="navSpacer" />
    </>
  );
}
