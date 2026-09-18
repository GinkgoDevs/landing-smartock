'use client'
import { useState } from "react"
import { usePrefersReducedMotion } from "../lib/motion"
import { Container, Eyebrow, Lead, SectionHeading } from "./ui"

const UPDATES = [
  {
    n: "1",
    label: "Stock",
    idle: "Remera Algodón - Stock: 15 uds",
    done: "Remera Algodón - Stock: 15 → 14 uds",
    dot: "bg-[#10b981]",
    ring: "ring-[#10b981]",
  },
  {
    n: "2",
    label: "Caja",
    idle: "Caja Palermo",
    done: "Caja Palermo - Ingreso +$12.500",
    dot: "bg-[#6d28d9]",
    ring: "ring-[#6d28d9]",
  },
  {
    n: "3",
    label: "Estadísticas",
    idle: "Margen bruto",
    done: "Margen bruto actualizado: 31.2%",
    dot: "bg-[#3b82f6]",
    ring: "ring-[#3b82f6]",
  },
] as const

export function Connect() {
  return (
    <section id="conectado" className="bg-white py-16 md:py-24">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[560px_1fr] lg:gap-16">
          <div>
            <Eyebrow>Una sola operación</Eyebrow>
            <SectionHeading className="mt-3 md:text-[42px]">
              Todo lo que pasa en tu negocio, conectado.
            </SectionHeading>
            <Lead className="mt-5 hidden md:block">
              Una venta actualiza stock. Un cobro impacta en caja. Una compra modifica costos. Una factura queda registrada. Smartock conecta esos movimientos para que no tengas que reconstruirlos después.
            </Lead>
            <p className="mt-5 text-base leading-relaxed text-muted md:hidden">
              Una venta actualiza stock. Un cobro impacta en caja. Una compra modifica costos. Una factura queda registrada.
            </p>
            <p className="mt-3 text-base font-medium text-ink md:hidden">
              Smartock conecta esos movimientos para que no tengas que reconstruirlos después.
            </p>
          </div>
          <ConnectDemo />
        </div>
      </Container>
    </section>
  )
}

function ConnectDemo() {
  const reduce = usePrefersReducedMotion()
  const [confirmed, setConfirmed] = useState(false)
  const [runId, setRunId] = useState(0)

  // Reduced motion: snap to the final state, no animation.
  if (reduce && !confirmed) setConfirmed(true)

  // The sequence only starts when the user presses the button.
  const confirm = () => {
    if (reduce) return
    setConfirmed(true)
    setRunId((n) => n + 1)
  }

  return (
    <div className="relative max-w-[700px]">
      <div className="rounded-xl border border-line bg-white p-5 shadow-[0_12px_28px_rgba(17,17,19,0.05)]">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-[10px] font-bold text-ink md:text-lg">Confirmar venta</p>
            <p className="mt-0.5 text-[8px] text-[#6b7280] md:text-xs">Mostrador Palermo • 14:32</p>
          </div>
          <div className="flex gap-1.5">
            {["Ticket #A-1042", "Efectivo"].map((chip) => (
              <span
                key={chip}
                className="rounded-full bg-[#f4f4f5] px-2.5 py-1 text-[8px] font-semibold text-muted md:text-[11px]"
              >
                {chip}
              </span>
            ))}
          </div>
        </div>

        <div className="my-4 h-px bg-line-soft" />

        <div className="grid gap-4 sm:grid-cols-[1fr_220px]">
          <div>
            <p className="text-[10px] font-bold text-ink md:text-sm">Remera Algodón Premium</p>
            <p className="mt-1 text-[8px] text-[#6b7280] md:text-xs">SKU: RE-ALG-01 • Talla: M</p>
            <p className="text-xs text-[#6b7280]">Cantidad: 1</p>
            <div className="mt-3 rounded-[10px] border border-line bg-[#f4f4f5] px-3 py-3">
              <p className="text-[9px] font-bold text-[#6b7280] md:text-[11px]">Cliente</p>
              <p className="mt-1 text-[10px] font-semibold text-ink md:text-sm">María Pérez</p>
              <p className="text-[10px] text-muted md:text-xs">maria.perez@email.com</p>
            </div>
          </div>

          <div>
            <div className="rounded-[10px] border border-line-soft bg-hero px-3 py-3">
              <p className="text-[10px] font-bold text-[#6b7280] md:text-[11px]">Total</p>
              <p className="mt-1 text-[15px] font-bold leading-none text-ink md:text-2xl">$12.500</p>
              <p className="mt-1.5 text-[8px] text-muted md:text-xs">Impuestos incluidos</p>
            </div>
            <button
              type="button"
              key={runId}
              onClick={confirm}
              className={`connect-btn mt-3 inline-flex h-11 w-full cursor-pointer items-center justify-center rounded-lg bg-brand text-[11px] font-bold text-white md:h-12 md:text-sm ${
                confirmed && !reduce ? "is-pressed" : ""
              }`}
            >
              {confirmed ? "Venta confirmada" : "Confirmar venta"}
            </button>
          </div>
        </div>
      </div>

      {confirmed && (
      <div key={runId} className="connect-flow relative mt-3" data-play={confirmed} data-reduce={reduce}>
        <svg
          className="pointer-events-none absolute inset-x-0 top-[-14px] hidden h-10 w-full sm:block"
          viewBox="0 0 700 56"
          preserveAspectRatio="none"
          fill="none"
          aria-hidden="true"
        >
          <path className="connect-stroke" pathLength="1" d="M 570 0 C 570 24 117 30 117 56" />
          <path className="connect-stroke" pathLength="1" d="M 570 0 C 570 20 350 28 350 56" />
          <path className="connect-stroke" pathLength="1" d="M 570 0 C 570 16 583 28 583 56" />
        </svg>

        <div className="grid gap-4 sm:grid-cols-3 sm:gap-3">
          {UPDATES.map((item) => (
            <div key={item.label} className="relative text-left">
              <span className="connect-step absolute -top-3 left-1/2 z-10 grid size-6 place-items-center rounded-full bg-brand text-[10px] font-extrabold text-white">
                {item.n}
              </span>
              <div className={`connect-card rounded-lg bg-white p-4 ring-1 sm:p-3 ${item.ring}`}>
                <p className="flex items-center gap-2 text-[11px] font-semibold text-muted md:text-xs">
                  <span className={`h-2 w-2 rounded-[4px] ${item.dot}`} />
                  {item.label}
                </p>
                <p className="connect-body mt-1 text-sm font-semibold leading-snug text-ink md:text-base">
                  {confirmed ? item.done : item.idle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      )}
    </div>
  )
}
