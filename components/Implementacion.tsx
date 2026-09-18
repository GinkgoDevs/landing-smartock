import { Container, Eyebrow, Lead, SectionHeading } from "./ui"

const STEPS = [
  {
    n: "01",
    title: "Conocemos tu operación",
    body: "Analizamos cómo funciona tu negocio, qué sistemas usás y qué información necesitás migrar.",
  },
  {
    n: "02",
    title: "Configuramos Smartock",
    body: "Adaptamos el sistema a tus productos, categorías, impuestos, medios de pago y permisos de equipo.",
  },
  {
    n: "03",
    title: "Preparamos la información",
    body: "Migramos tus datos existentes — productos, precios, proveedores — para que arranques sin empezar de cero.",
  },
  {
    n: "04",
    title: "Empezás a operar",
    body: "Capacitación para tu equipo y soporte durante los primeros días de uso real.",
  },
]

export function Implementacion() {
  return (
    <section className="bg-white py-16 md:py-24">
      <Container>
        <Eyebrow>EMPEZAR SIN EMPEZAR DE CERO</Eyebrow>
        <SectionHeading className="mt-3 max-w-[800px]">
          Cambiar de sistema no debería ser otro problema.
        </SectionHeading>
        <Lead className="mt-4 max-w-[640px]">
          Te acompañamos en la puesta en marcha para configurar Smartock alrededor de la operación de tu negocio.
        </Lead>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {STEPS.map((step) => (
            <article key={step.n} className="h-full rounded-xl border border-line bg-white p-8">
              <p className="text-4xl font-extrabold text-brand">{step.n}</p>
              <h3 className="mt-4 text-lg font-bold leading-snug text-ink">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{step.body}</p>
            </article>
          ))}
        </div>

        <p className="mt-10 inline-flex max-w-[760px] items-center gap-2 rounded-2xl bg-[#f5f3ff] px-4 py-3 text-left text-[13px] font-medium leading-relaxed text-[#6d28d9] sm:rounded-full sm:py-2 sm:text-center">
          <InfoIcon />
          El proceso de implementación se adapta a las necesidades de cada negocio. Consultá detalles durante la demo.
        </p>
      </Container>
    </section>
  )
}

function InfoIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="shrink-0">
      <circle cx="8" cy="8" r="6.2" stroke="currentColor" strokeWidth="1.4" />
      <path d="M8 7.2v4M8 5.2h.01" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}
