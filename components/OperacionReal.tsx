import { Container, Eyebrow, Lead, SectionHeading } from "./ui"

const BLOCKS = [
  {
    title: "Facturación dentro del mismo flujo de trabajo.",
    body: "Generá facturas electrónicas directamente desde cada venta, sin salir del sistema ni duplicar datos.",
    icon: "invoice",
  },
  {
    title: "Cobros conectados con tu operación.",
    body: "Cada cobro con Mercado Pago se registra automáticamente en caja. Sin conciliar a mano.",
    icon: "card",
  },
  {
    title: "Tu negocio no se detiene.",
    body: "Smartock funciona sin conexión. Seguí vendiendo, registrando movimientos y operando incluso cuando internet falla. Todo se sincroniza cuando vuelve la conexión.",
    icon: "offline",
  },
]

export function OperacionReal() {
  return (
    <section className="bg-brand py-16 md:py-24">
      <Container>
        <Eyebrow light>PREPARADO PARA LA OPERACIÓN REAL</Eyebrow>
        <SectionHeading light className="mt-3 max-w-none">
          Smartock trabaja con las herramientas que ya forman parte de tu operación.
        </SectionHeading>
        <Lead light className="mt-4 max-w-none text-white">
          Facturación, cobros, continuidad y las herramientas que tu negocio ya utiliza. Integrados en un mismo flujo de trabajo.
        </Lead>

        <div className="mt-10 grid gap-[18px]">
          {BLOCKS.map((block) => (
            <article key={block.title} className="rounded-xl bg-white p-8">
              <div className="flex items-start gap-3">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-line bg-[#f4f4f5]">
                  <BlockIcon name={block.icon} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold leading-snug text-ink">{block.title}</h3>
                  <p className="mt-3 text-base leading-relaxed text-muted">{block.body}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}

function BlockIcon({ name }: { name: string }) {
  if (name === "invoice") {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M7 3h8l4 4v14H7V3Z" stroke="#111113" strokeWidth="1.6" />
        <path d="M15 3v4h4M9 12h6M9 16h6" stroke="#111113" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    )
  }
  if (name === "card") {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="3" y="6" width="18" height="12" rx="2" stroke="#111113" strokeWidth="1.6" />
        <path d="M3 10h18" stroke="#111113" strokeWidth="1.6" />
      </svg>
    )
  }
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 8c0-3 2.5-5 7-5s7 2 7 5" stroke="#111113" strokeWidth="1.6" />
      <path d="M4 16.5 8 12l3 3 5-6 4 4" stroke="#111113" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4 20h16" stroke="#111113" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}
