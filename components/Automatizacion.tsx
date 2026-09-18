import { Container, Lead, SectionHeading } from "./ui"
import { StockyChat } from "./mockups/StockyChat"

export function Automatizacion() {
  return (
    <section className="bg-white py-16 md:py-24">
      <Container>
        <div className="text-center">
          <p className="text-xs font-medium text-brand md:hidden">Menos carga manual</p>
          <p className="hidden text-xs font-semibold text-subtle md:block">MENOS CARGA MANUAL</p>
          <SectionHeading className="mx-auto mt-3 max-w-[900px]">
            Hay tareas que Smartock puede hacer por vos.
          </SectionHeading>
        </div>

        <div className="mt-14 grid items-center gap-10 lg:grid-cols-[460px_1fr]">
          <div>
            <h3 className="text-[22px] font-bold text-ink md:text-2xl">Cargá una factura sin cargar cada dato.</h3>
            <Lead className="mt-3 text-[15px] md:text-base">
              <span className="md:hidden">
                Subí una imagen o PDF y Smartock interpreta la información para ayudarte a incorporarla al sistema.
              </span>
              <span className="hidden md:inline">
                Subí una imagen o PDF y Smartock interpreta la información para ayudarte a incorporarla al sistema automáticamente.
              </span>
            </Lead>
          </div>
          <InvoiceOcr />
        </div>

        <div className="mt-16 grid items-center gap-10 lg:grid-cols-[1fr_460px]">
          <StockyChat />
          <div className="order-first lg:order-none">
            <h3 className="text-[22px] font-bold text-ink md:text-2xl md:font-extrabold">Preguntale a tu negocio.</h3>
            <Lead className="mt-3 text-[15px] md:text-base">
              <span className="md:hidden">
                Consultá información de tu operación usando lenguaje natural, sin tener que buscarla módulo por módulo.
              </span>
              <span className="hidden md:inline">
                Consultá información de tu operación usando lenguaje natural, sin tener que buscarla módulo por módulo o cruzar planillas a mano.
              </span>
            </Lead>
          </div>
        </div>
      </Container>
    </section>
  )
}

function InvoiceOcr() {
  return (
    <div className="flex flex-col items-center gap-3 rounded-xl border border-line bg-white p-4 shadow-[0_12px_32px_rgba(17,17,19,0.05)] sm:flex-row sm:items-stretch">
      <div className="relative w-full overflow-hidden rounded-[10px] border border-line p-3 sm:w-[240px]">
        <p className="text-[9px] font-extrabold tracking-wide text-muted">FACTURA ORIGINAL</p>
        <div className="my-2 h-px bg-line-soft" />
        <p className="text-[11px] font-bold">La Campagnola S.A.</p>
        <p className="text-[8px] text-zinc-500">C.U.I.T. 30-50012456-9</p>
        <div className="mt-4 space-y-1 text-[9px] text-zinc-400">
          <p>Tomate triturado x24 .............. $36.000</p>
          <p>Aceite girasol 1.5L ............... $3.366</p>
        </div>
        <div className="mt-6 flex justify-between text-[10px] font-bold">
          <span>TOTAL</span>
          <span>$112.400</span>
        </div>
        <div className="scan-line pointer-events-none absolute inset-x-0 h-[3px] rounded-full bg-[#6d28d9]" />
      </div>
      <div className="hidden flex-col items-center justify-center text-[#6d28d9] sm:flex">
        <span className="text-lg">→</span>
        <span className="rounded bg-violet-50 px-1.5 py-0.5 text-[9px] font-bold">OCR</span>
      </div>
      <div className="w-full rounded-[10px] border border-line p-3 sm:flex-1">
        <div className="flex items-center justify-between">
          <p className="text-[10px] font-bold text-[#6d28d9]">DATOS EXTRAÍDOS</p>
          <p className="text-[8px] font-bold text-green-800">98% Coincidencia</p>
        </div>
        <div className="my-2 h-px bg-line-soft" />
        <p className="text-[9px] font-bold text-zinc-500">Proveedor</p>
        <p className="text-xs font-semibold">La Campagnola S.A.</p>
        <p className="mt-3 text-[9px] font-bold text-zinc-500">Artículos detectados</p>
        <div className="mt-1 flex justify-between text-[11px]">
          <span>Tomate Triturado x24</span>
          <span className="font-semibold">x2 Cajas</span>
          <span className="font-bold text-[#6d28d9]">$72.000</span>
        </div>
        <div className="mt-1 flex justify-between text-[11px]">
          <span>Aceite de Girasol 1.5L</span>
          <span className="font-semibold">x12 Uds</span>
          <span className="font-bold text-[#6d28d9]">$40.400</span>
        </div>
        <div className="mt-4 flex items-end justify-between border-t border-line-soft pt-2">
          <span className="text-[11px] font-bold">Total Procesado</span>
          <span className="text-[13px] font-black">$112.400</span>
        </div>
      </div>
    </div>
  )
}
