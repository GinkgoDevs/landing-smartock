import type { ReactNode } from "react"
import Image from "next/image"

const NAV = [
  { label: "Dashboard", active: true },
  { label: "Inventario" },
  { label: "Importar" },
  { label: "Administración" },
  { label: "Facturación" },
  { label: "Reportes" },
  { label: "Configuración" },
]

const ACTIONS = [
  {
    title: "Punto de venta",
    desc: "Cobrar al cliente con escáner o búsqueda rápida.",
    icon: "pos",
  },
  {
    title: "Caja",
    desc: "Aperturas, cierres y arqueo de jornada.",
    icon: "cash",
  },
  {
    title: "Reporte de venta",
    desc: "Resumen de ventas al cerrar la jornada.",
    icon: "report",
  },
]

const METRICS = [
  { label: "Productos activos", value: "1.284", icon: "box" },
  { label: "Valor del inventario", value: "$12.400.900", icon: "safe" },
  { label: "Comprobantes (mes)", value: "847", icon: "file" },
  { label: "Ventas del mes", value: "$2.840.500", icon: "chart" },
]

export function HeroDashboard() {
  return (
    <div className="overflow-hidden bg-white text-left">
      <div className="flex min-h-[220px] md:min-h-[540px]">
        <aside className="hidden w-[228px] shrink-0 flex-col bg-brand-deep p-4 text-white md:flex">
          <div className="flex flex-col items-center px-2 pt-3 text-center">
            <Image
              src="/logo-octopus.png"
              alt=""
              draggable={false}
              width={40}
              height={40}
              className="h-10 w-10 object-contain brightness-0 invert"
            />
            <p className="mt-2 text-[12px] font-black tracking-[0.12em]">SMARTOCK</p>
            <p className="text-[8px] font-medium tracking-[0.14em] text-white/70">GESTIÓN INTELIGENTE</p>
          </div>
          <nav className="mt-6 grid gap-0.5 text-[13px]">
            {NAV.map((item) => (
              <div
                key={item.label}
                className={`flex items-center justify-between rounded-lg px-3 py-2.5 ${
                  item.active ? "bg-white font-semibold text-brand" : "text-white/85"
                }`}
              >
                <span className="flex items-center gap-2.5">
                  <NavGlyph />
                  {item.label}
                </span>
                {!item.active && <span className="text-white/40">›</span>}
              </div>
            ))}
          </nav>
          <div className="mt-auto flex items-center justify-between px-3 pb-2 text-xs text-white/70">
            <span>Manual de uso</span>
            <span>«</span>
          </div>
        </aside>

        <div className="min-w-0 flex-1 bg-[#f7f7f8] p-4 md:p-6">
          <div className="mb-5 flex items-center justify-end gap-2 text-xs text-muted">
            <IconBtn>
              <Bell />
            </IconBtn>
            <IconBtn>
              <Moon />
            </IconBtn>
            <span className="rounded-md border border-line bg-white px-2.5 py-1.5">Cerrar sesión</span>
          </div>
          <h3 className="text-lg font-bold text-ink md:text-[26px]">Ferreteria Pablito · Sucursal principal</h3>
          <p className="mt-1 text-sm text-muted">Operando en Sucursal principal. Todo al día por ahora.</p>

          <p className="mt-6 text-xs font-semibold uppercase tracking-wide text-subtle">Acciones rápidas</p>
          <div className="mt-2 grid gap-3 sm:grid-cols-3">
            {ACTIONS.map((item) => (
              <div key={item.title} className="flex flex-col rounded-xl border border-line bg-white p-3.5">
                <ActionIcon name={item.icon} />
                <p className="mt-2 text-sm font-semibold text-ink">{item.title}</p>
                <p className="mt-1 flex-1 text-xs leading-snug text-muted">{item.desc}</p>
                <span className="mt-3 inline-flex h-8 w-full items-center justify-center rounded-md bg-brand text-xs font-semibold text-white">
                  Abrir
                </span>
              </div>
            ))}
          </div>

          <p className="mt-6 text-xs font-semibold uppercase tracking-wide text-subtle">Alertas</p>
          <div className="mt-2 rounded-xl border border-dashed border-line bg-white/60 px-4 py-6 text-center text-sm text-subtle">
            Sin alertas por ahora
          </div>

          <p className="mt-6 text-xs font-semibold uppercase tracking-wide text-subtle">Métricas</p>
          <div className="mt-2 grid grid-cols-2 gap-3 lg:grid-cols-4">
            {METRICS.map((m) => (
              <div key={m.label} className="flex items-center gap-3 rounded-xl border border-line bg-white p-3">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-brand-soft text-brand">
                  <MetricIcon name={m.icon} />
                </span>
                <div className="min-w-0">
                  <p className="truncate text-[11px] text-muted">{m.label}</p>
                  <p className="text-base font-bold text-ink md:text-lg">{m.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function IconBtn({ children }: { children: ReactNode }) {
  return (
    <span className="grid h-8 w-8 place-items-center rounded-md border border-line bg-white text-ink">
      {children}
    </span>
  )
}

function NavGlyph() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <rect x="2" y="2" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.4" />
      <rect x="9" y="2" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.4" />
      <rect x="2" y="9" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.4" />
      <rect x="9" y="9" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  )
}

function Bell() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
      <path d="M6 9a6 6 0 1 1 12 0c0 7 3 8 3 8H3s3-1 3-8Z" stroke="currentColor" strokeWidth="1.7" />
      <path d="M10 20a2 2 0 0 0 4 0" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  )
}

function Moon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
      <path d="M16 3.3A8.5 8.5 0 1 0 20.7 14 7 7 0 0 1 16 3.3Z" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  )
}

function ActionIcon({ name }: { name: string }) {
  const d =
    name === "pos"
      ? "M4 7h16v12H4V7Zm3-3h10v3H7V4Z"
      : name === "cash"
        ? "M3 7h18v10H3V7Zm3 5h3m5 0h4"
        : "M5 19V5h10l4 4v10H5Zm4-4h6M9 11h6"
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-brand">
      <path d={d} stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  )
}

function MetricIcon({ name }: { name: string }) {
  if (name === "box") {
    return (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
        <path d="M3 8l9-5 9 5v8l-9 5-9-5V8Z" stroke="currentColor" strokeWidth="1.6" />
        <path d="M12 13V3M3 8l9 5 9-5" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    )
  }
  if (name === "safe") {
    return (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    )
  }
  if (name === "file") {
    return (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
        <path d="M7 3h8l4 4v14H7V3Z" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    )
  }
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <path d="M4 19V9m6 10V5m6 14v-7m4 7H3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}
