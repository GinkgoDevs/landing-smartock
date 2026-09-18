import { Container, Eyebrow, Lead, SectionHeading } from "./ui"

const ROWS = [
  ["Asado de Tira", "24 kg", "20%", "$4.200 / kg", "text-[#047857]"],
  ["Vacío", "12 kg", "10%", "$5.800 / kg", "text-[#047857]"],
  ["Nalga", "18 kg", "15%", "$6.100 / kg", "text-[#047857]"],
  ["Hueso / Grasa (Descarte)", "38 kg", "30%", "$0 / kg", "text-[#dc2626]"],
]

const SIMPLE = ["Compra", "Stock", "Venta"]
const COMPLEX = ["Ingreso", "Media res", "Despiece", "Cortes", "Stock", "Venta"]

export function Adaptability() {
  return (
    <section id="soluciones" className="bg-brand-wash py-16 md:py-24">
      <Container>
        <div className="text-left md:text-center">
          <Eyebrow>
            <span className="md:hidden">Diseñado alrededor de la operación</span>
            <span className="hidden md:inline">DISEÑADO ALREDEDOR DE LA OPERACIÓN</span>
          </Eyebrow>
          <SectionHeading className="mx-auto mt-3 max-w-[960px] text-[30px] md:text-[48px]">
            No todos los negocios funcionan igual.
            <br />
            Su sistema tampoco debería hacerlo.
          </SectionHeading>
          <Lead className="mx-auto mt-4 max-w-[640px] text-[16px] md:text-center">
            <span className="md:hidden">
              Smartock puede acompañar operaciones específicas sin obligarlas a encajar en un flujo genérico.
            </span>
            <span className="hidden md:inline">
              Smartock se adapta a operaciones específicas sin obligarlas a encajar en un flujo genérico.
            </span>
          </Lead>
        </div>

        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:hidden">
          <FlowCard title="Comercio" steps={SIMPLE} accent={false} />
          <FlowCard title="Carnicería" steps={COMPLEX} accent />
        </div>

        <div className="mt-8 lg:hidden">
          <h3 className="text-[22px] font-bold text-ink">Despiece</h3>
          <p className="mt-2 text-[15px] leading-relaxed text-muted">
            Una media res no es simplemente stock: se transforma en múltiples productos antes de venderse.
          </p>
          <p className="mt-4 text-sm font-medium text-ink">
            Smartock se adapta al proceso. El proceso no tiene que adaptarse al sistema.
          </p>
        </div>

        <div className="mt-12 hidden items-start gap-10 lg:grid lg:grid-cols-[480px_1fr]">
          <div>
            <div className="flex items-center gap-2">
              <p className="text-[13px] font-semibold text-muted">Comercio estándar</p>
              <span className="rounded bg-[#f5f3ff] px-2 py-0.5 text-[11px] font-semibold text-brand">Simple</span>
            </div>
            <p className="mt-2 text-[15px] text-muted">Compra → Stock → Venta</p>

            <div className="mt-8 flex items-center gap-2">
              <p className="text-[13px] font-semibold text-brand">Carnicería / Frigorífico</p>
              <span className="rounded bg-[#f5f3ff] px-2 py-0.5 text-[11px] font-semibold text-brand">Complejo</span>
            </div>
            <p className="mt-2 text-[15px] text-muted">
              Ingreso → Media Res → Despiece → Cortes → Stock → Venta
            </p>

            <div className="my-8 h-px bg-line-soft" />
            <p className="text-sm text-muted">Un inventario que entiende transformaciones.</p>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Una media res entra como una unidad. Después del desposte, Smartock registra los cortes resultantes y conserva la trazabilidad de su origen.
            </p>
            <p className="mt-6 text-sm font-semibold italic text-muted">
              Smartock se adapta al proceso. El proceso no tiene que adaptarse al sistema.
            </p>
          </div>

          <DespieceTable />
        </div>
      </Container>
    </section>
  )
}

function FlowCard({
  title,
  steps,
  accent,
}: {
  title: string
  steps: string[]
  accent: boolean
}) {
  return (
    <div className="rounded-xl bg-white p-4">
      <p className="text-sm font-bold text-ink">{title}</p>
      <div className="mt-3 grid gap-2">
        {steps.map((step) => (
          <p
            key={step}
            className={`rounded-lg px-3 py-2 text-center text-[13px] font-medium ${
              accent ? "bg-violet-50 text-brand" : "bg-[#f9fafb] text-muted"
            }`}
          >
            {step}
          </p>
        ))}
      </div>
    </div>
  )
}

function DespieceTable() {
  return (
    <div className="rounded-2xl border border-line-soft bg-white p-6">
      <div className="flex items-center justify-between gap-3">
        <p className="text-base font-bold text-ink">Transformación de Lote #MRES-402</p>
        <span className="rounded-full border border-[#e9d5ff] bg-[#f3e8ff] px-2.5 py-0.5 text-xs font-bold text-brand">
          Trazado
        </span>
      </div>
      <p className="mt-1.5 text-[13px] text-muted">
        Origen: Media Res Vacuna · 120 kg · Proveedor: Frigorífico Del Sur
      </p>
      <div className="mt-4 overflow-x-auto rounded-[10px] border border-line-soft">
        <table className="w-full min-w-[520px] text-left text-sm">
          <thead>
            <tr className="border-b border-line-soft">
              {["Corte obtenido", "Peso estimado", "% Rendimiento", "Costo unit. derivado"].map((h) => (
                <th key={h} className="px-3 py-3 text-[13px] font-bold text-muted">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {ROWS.map((row, i) => (
              <tr key={row[0]} className={i % 2 === 0 ? "bg-hero" : "bg-white"}>
                <td className="px-3 py-3 font-semibold">{row[0]}</td>
                <td className="px-3 py-3 text-muted">{row[1]}</td>
                <td className="px-3 py-3 text-muted">{row[2]}</td>
                <td className={`px-3 py-3 font-bold ${row[4]}`}>{row[3]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-4 rounded-lg border border-[#bbf7d0] bg-[#f0fdf4] px-4 py-3 text-sm font-bold text-[#166534]">
        4 cortes generados → incorporados al inventario · Rendimiento total: 70%
      </div>
    </div>
  )
}
