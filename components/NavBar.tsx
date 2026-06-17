import Image from "next/image";

const navLinks = [
  { href: "#funciones", label: "Funciones" },
  { href: "#integraciones", label: "Integraciones" },
  { href: "#planes", label: "Planes" },
  { href: "#agenda", label: "Contacto" },
];

function Logo() {
  return (
    <a className="logo" href="#inicio" aria-label="Smartock">
      <span className="logoMark logoMarkFull">
        <Image
          alt=""
          aria-hidden="true"
          height={500}
          priority
          src="/brand/smartock-logo-violet.png"
          width={500}
        />
      </span>
      <span className="logoMark logoMarkIcon">
        <Image
          alt=""
          aria-hidden="true"
          height={500}
          priority
          src="/brand/smartock-isotype-violet.png"
          width={500}
        />
      </span>
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
                <a href={link.href} key={link.href}>
                  {link.label}
                </a>
              ))}
            </div>
            <a className="navCta navCtaPill" href="#agenda">
              Comenzar
            </a>
          </div>
        </nav>
      </div>
      <div aria-hidden="true" className="navSpacer" />
    </>
  );
}
