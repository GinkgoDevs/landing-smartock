'use client'
import { useState } from "react"
import { Container, Eyebrow, SectionHeading } from "./ui"

const FAQS = [
  {
    q: "¿Puedo importar la información de mi sistema actual?",
    a: "Sí. Durante la implementación migramos tus productos, precios, proveedores y la información que necesités para arrancar sin cargar todo de nuevo.",
  },
  {
    q: "¿Smartock funciona si tengo más de una sucursal?",
    a: "Sí. Podés gestionar múltiples puntos de venta desde una misma cuenta, con inventario y caja independientes o consolidados según cómo opera tu negocio.",
  },
  {
    q: "¿Qué pasa si se corta internet?",
    a: "Smartock está diseñado para seguir registrando operaciones críticas de forma local. Cuando la conexión se recupera, la información se sincroniza automáticamente.",
  },
  {
    q: "¿Smartock se integra con ARCA y Mercado Pago?",
    a: "Sí. Podés emitir facturas electrónicas directamente desde el punto de venta y registrar cobros con Mercado Pago que impactan automáticamente en caja.",
  },
  {
    q: "¿Cómo es la implementación?",
    a: "Nuestro equipo te acompaña en la configuración inicial: relevamos tu operación, configuramos el sistema, migramos tus datos y capacitamos a tu equipo.",
  },
  {
    q: "¿Qué soporte tengo después de empezar?",
    a: "Tenés soporte continuo por chat y videollamada. Además, actualizamos el sistema regularmente con mejoras basadas en lo que necesitan los comercios que lo usan.",
  },
]

export function Faq() {
  const [open, setOpen] = useState(0)

  return (
    <section id="recursos" className="bg-white py-16 md:py-24">
      <Container>
        <Eyebrow>PREGUNTAS FRECUENTES</Eyebrow>
        <SectionHeading className="mt-3 max-w-[640px]">
          ¿Tenés dudas?
          <br />
          Acá van algunas respuestas.
        </SectionHeading>

        <div className="mt-10 divide-y divide-line border-y border-line">
          {FAQS.map((item, i) => {
            const expanded = open === i
            return (
              <div key={item.q}>
                <button
                  type="button"
                  className="flex min-h-14 w-full cursor-pointer items-center justify-between gap-4 py-4 text-left text-base font-semibold text-ink"
                  aria-expanded={expanded}
                  onClick={() => setOpen(expanded ? -1 : i)}
                >
                  {item.q}
                  <span
                    className={`grid h-8 w-8 shrink-0 place-items-center rounded-full text-lg text-muted transition-transform duration-200 ${
                      expanded ? "rotate-45 bg-brand-soft text-brand" : ""
                    }`}
                  >
                    +
                  </span>
                </button>
                <div
                  className="grid transition-[grid-template-rows] duration-300 ease-out"
                  style={{ gridTemplateRows: expanded ? "1fr" : "0fr" }}
                >
                  <p className="overflow-hidden text-[15px] leading-relaxed text-muted">
                    <span className="block pb-5">{item.a}</span>
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
