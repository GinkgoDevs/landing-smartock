import { Container } from "./ui"
import { Logo } from "./Logo"
import { EMAIL, WHATSAPP_URL } from "@/lib/contact"

const COLS = [
  {
    title: "Producto",
    links: [
      ["Características", "#producto"],
      ["Soluciones", "#soluciones"],
      ["Integraciones", "#conectado"],
      ["Precios", "#precios"],
    ],
  },
  {
    title: "Recursos",
    links: [
      ["Centro de ayuda", "#recursos"],
      ["Preguntas frecuentes", "#recursos"],
      ["Blog", "#recursos"],
      ["Guía de implementación", "#recursos"],
    ],
  },
  {
    title: "Empresa",
    links: [
      ["Sobre nosotros", "#inicio"],
      ["Contacto", `mailto:${EMAIL}`],
      ["Trabaja con nosotros", `mailto:${EMAIL}`],
    ],
  },
  {
    title: "Legal",
    links: [
      ["Términos y condiciones", "/terminos-y-condiciones"],
      ["Política de privacidad", "/politica-de-privacidad"],
      ["Política de cancelación", "/politica-de-cancelacion"],
    ],
  },
]

export function Footer() {
  return (
    <footer className="bg-ink py-14 text-white">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1.3fr_2fr]">
          <div>
            <Logo />
            <p className="mt-3 text-sm text-[#a1a1aa]">Sistema de gestión para comercios y PyMEs</p>
            <p className="mt-2 max-w-xs text-[13px] text-[#71717a]">
              Controlá ventas, stock, caja y facturación desde un solo lugar.
            </p>
            <p className="mt-4 text-[13px] text-[#a1a1aa]">
              <a href={WHATSAPP_URL} className="hover:text-white">
                WhatsApp
              </a>
              <span className="px-2">·</span>
              <a href={`mailto:${EMAIL}`} className="hover:text-white">
                {EMAIL}
              </a>
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {COLS.map((col) => (
              <div key={col.title}>
                <p className="text-sm font-semibold">{col.title}</p>
                <ul className="mt-3 grid gap-2">
                  {col.links.map(([label, href]) => (
                    <li key={label}>
                      <a href={href} className="text-sm text-[#a1a1aa] transition-colors hover:text-white">
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-10 flex flex-col justify-between gap-2 border-t border-white/10 pt-4 text-[13px] text-zinc-500 sm:flex-row">
          <p>© 2026 Smartock. Todos los derechos reservados.</p>
          <p>Hecho con dedicación en Argentina 🇦🇷</p>
        </div>
      </Container>
    </footer>
  )
}
