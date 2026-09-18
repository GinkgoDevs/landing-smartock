'use client'
import { useState } from "react"
import { Fx, useInView } from "../lib/motion"
import { Container, Eyebrow, Lead, SectionHeading } from "./ui"

const TABS = ["Administración", "Punto de venta", "Stock"] as const

const TAB_PILL = {
  Administración: { left: 4, width: 151 },
  "Punto de venta": { left: 163, width: 150 },
  Stock: { left: 321, width: 87 },
} as const

const COPY = {
  Administración: {
    title: "Tu negocio, claro de un vistazo.",
    body: "Ventas, caja, inventario y resultados para entender qué está pasando sin recorrer todo el sistema.",
  },
  "Punto de venta": {
    title: "Menos sistema. Más venta.",
    body: "Una experiencia enfocada en encontrar productos, cobrar y seguir atendiendo con la menor fricción posible.",
  },
  Stock: {
    title: "Cada movimiento, bajo control.",
    body: "Ingresos, ajustes y trazabilidad para saber qué tenés, qué cambió y de dónde provino.",
  },
} as const

export function Experience() {
  const [tab, setTab] = useState<(typeof TABS)[number]>("Administración")
  const pill = TAB_PILL[tab]

  return (
    <section className="bg-brand-soft py-16 md:py-24">
      <Container>
        <div className="text-center">
          <Eyebrow>Una misma operación. Diferentes necesidades.</Eyebrow>
          <SectionHeading className="mx-auto mt-3 max-w-[720px]">
            Un sistema.
            <br />
            Distintas formas de trabajar.
          </SectionHeading>
          <Lead className="mx-auto mt-5 max-w-[720px]">
            Quien administra, quien vende y quien controla stock trabajan sobre el mismo negocio. Pero no necesitan la misma información ni la misma experiencia.
          </Lead>
        </div>

        <div className="relative mx-auto mt-8 hidden w-fit max-w-full gap-2 rounded-[10px] bg-[#f4f4f5] p-1 ring-1 ring-[#520088]/30 md:flex">
          <span
            aria-hidden
            className="experience-tab-pill pointer-events-none absolute top-1 h-11 rounded-lg bg-brand"
            style={{ left: pill.left, width: pill.width }}
          />
          {TABS.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setTab(item)}
              className={`relative z-10 h-11 shrink-0 cursor-pointer rounded-lg px-4 text-sm transition-colors duration-300 ${
                tab === item ? "font-semibold text-white" : "font-medium text-muted hover:text-ink"
              }`}
              style={{ width: TAB_PILL[item].width }}
            >
              {item}
            </button>
          ))}
        </div>

        <div key={tab} className="tab-panel mt-8 hidden text-left md:block">
          <h3 className="text-2xl font-bold text-ink">{COPY[tab].title}</h3>
          <p className="mt-2 max-w-full text-base leading-relaxed text-muted">{COPY[tab].body}</p>
          <div className="mt-6 overflow-hidden rounded-xl border border-line bg-white shadow-[0_16px_40px_rgba(82,0,136,0.06)]">
            {tab === "Administración" && <AdminMock />}
            {tab === "Punto de venta" && <PosMock />}
            {tab === "Stock" && <StockMock />}
          </div>
        </div>

        <div className="mt-8 grid gap-4 md:hidden">
          {(Object.keys(COPY) as Array<keyof typeof COPY>).map((key) => (
            <article key={key} className="rounded-2xl bg-white p-5 text-left">
              <span className="inline-flex rounded-full bg-violet-50 px-3 py-1 text-[13px] font-semibold text-brand">
                {key}
              </span>
              <h3 className="mt-4 text-[22px] font-bold leading-snug text-ink">{COPY[key].title}</h3>
              <p className="mt-3 text-[15px] leading-[1.55] text-muted">{COPY[key].body}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}

const ADMIN_KPIS = [
  { hold: 0.06, inn: 0.26, k: "Ventas Totales (Mes)", v: "$2.840.500", s: "Metas cumplidas" },
  { hold: 0.1, inn: 0.3, k: "Cuentas por Cobrar", v: "$450.000", s: "12 facturas" },
  { hold: 0.14, inn: 0.34, k: "Valor de Inventario", v: "$12.400.900", s: "Costo reposición" },
  { hold: 0.18, inn: 0.38, k: "Punto de Equilibrio", v: "Alcanzado", s: "Día 18 del mes" },
] as const

const ADMIN_BARS = [
  { h: 70, on: true, hold: 0.24, inn: 0.44 },
  { h: 92, on: true, hold: 0.272, inn: 0.472 },
  { h: 78, on: false, hold: 0.304, inn: 0.504 },
  { h: 110, on: true, hold: 0.336, inn: 0.536 },
  { h: 96, on: false, hold: 0.368, inn: 0.568 },
  { h: 130, on: true, hold: 0.4, inn: 0.6 },
  { h: 118, on: false, hold: 0.432, inn: 0.632 },
] as const

function AdminMock() {
  const { ref, inView } = useInView(0.2)

  return (
    <div ref={ref} className="p-5 text-left md:p-8">
      <Fx play={inView} inn={0.2} from={{ opacity: 0, y: 10 }} className="flex items-center justify-between">
        <div>
          <p className="text-lg font-bold">Panel de Control</p>
          <p className="text-xs text-zinc-500">Resumen gerencial de la empresa</p>
        </div>
        <div className="flex gap-2 text-[11px] font-medium text-[#4d4d61]">
          <span className="rounded-md bg-zinc-100 px-2 py-1">Admin</span>
          <span className="rounded-md bg-zinc-100 px-2 py-1">Sep 2026</span>
        </div>
      </Fx>
      <div className="mt-5 grid gap-4 lg:grid-cols-[200px_1fr]">
        <Fx
          as="aside"
          play={inView}
          hold={0.08}
          inn={0.28}
          from={{ opacity: 0, x: -25 }}
          className="hidden rounded-[10px] border border-line bg-[#fafafa] p-3 lg:block"
        >
          <p className="text-[11px] font-bold uppercase tracking-wide text-zinc-500">Menú</p>
          {["Panel", "Ventas", "Stock", "Caja", "Reportes"].map((item, i) => (
            <p
              key={item}
              className={`mt-1 rounded-md px-2 py-1.5 text-[13px] ${
                i === 0 ? "bg-brand-soft font-semibold text-brand" : "text-muted"
              }`}
            >
              {item}
            </p>
          ))}
        </Fx>
        <div>
          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {ADMIN_KPIS.map((kpi) => (
              <Fx
                key={kpi.k}
                play={inView}
                hold={kpi.hold}
                inn={kpi.inn}
                from={{ opacity: 0, y: 15 }}
                className="rounded-xl border border-line p-3"
              >
                <p className="text-[11px] font-semibold text-zinc-500">{kpi.k}</p>
                <p className="mt-1 text-[22px] font-bold">{kpi.v}</p>
                <p className="text-[10px] text-muted">{kpi.s}</p>
              </Fx>
            ))}
          </div>
          <div className="mt-4 grid gap-4 lg:grid-cols-2">
            <div className="rounded-xl border border-line p-4">
              <div className="flex items-center justify-between">
                <p className="text-[13px] font-bold">Ventas por día</p>
                <p className="rounded-full bg-[#f1f1f4] px-2 py-0.5 text-[11px] font-semibold text-muted">Últimos 7 días</p>
              </div>
              <div className="mt-4 flex h-[140px] items-end gap-2 rounded-lg border border-line-soft bg-hero px-3 pt-3">
                {ADMIN_BARS.map((bar) => (
                  <Fx
                    key={bar.hold}
                    play={inView}
                    hold={bar.hold}
                    inn={bar.inn}
                    from={{ scaleY: 0 }}
                    origin="bottom"
                    className={`min-w-0 flex-1 rounded-t ${bar.on ? "bg-brand" : "bg-[#e4e4e7]"}`}
                    style={{ height: `${(bar.h / 130) * 100}%` }}
                  />
                ))}
              </div>
            </div>
            <Fx
              play={inView}
              hold={0.28}
              inn={0.48}
              from={{ opacity: 0, y: 15 }}
              className="rounded-xl border border-line p-4"
            >
              <p className="font-bold">Productos más vendidos</p>
              {[
                ["Pantalón Denim Clásico", "142 uds", "$852.000"],
                ["Remera Algodón Premium", "98 uds", "$245.000"],
                ["Zapatilla Urbana", "41 uds", "$1.230.000"],
              ].map(([n, u, p]) => (
                <div key={n} className="mt-3 flex items-center justify-between text-sm">
                  <div>
                    <p>{n}</p>
                    <p className="text-[11px] text-muted">{u}</p>
                  </div>
                  <p className="font-semibold">{p}</p>
                </div>
              ))}
            </Fx>
          </div>
          <Fx
            play={inView}
            hold={0.36}
            inn={0.56}
            from={{ opacity: 0, y: 15 }}
            className="mt-4 rounded-xl border border-line p-4"
          >
            <p className="font-bold">Estado de Caja consolidado</p>
            <div className="mt-3 grid gap-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted">Ingresos</span>
                <span className="font-semibold text-green-700">+$2.840.500</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted">Costo de Mercadería</span>
                <span className="font-semibold text-red-600">-$1.420.250</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted">Gastos Operativos</span>
                <span className="font-semibold text-red-600">-$450.000</span>
              </div>
              <div className="flex justify-between border-t border-line pt-2 font-bold">
                <span>Resultado Neto (EBITDA)</span>
                <span className="text-brand">+$970.250</span>
              </div>
            </div>
          </Fx>
        </div>
      </div>
    </div>
  )
}

const POS_ITEMS = [
  { name: "Remera Algodón Premium", sku: "SKU: RE-ALG-01 • Talla: M", price: "$12.500", hold: 0.16, inn: 0.3 },
  { name: "Pantalón Denim Clásico", sku: "SKU: PA-DEN-01 • Talla: 32", price: "$28.900", hold: 0.22, inn: 0.36 },
  { name: "Zapatilla Urbana", sku: "SKU: ZA-URB-01 • Talla: 42", price: "$45.000", hold: 0.28, inn: 0.42 },
  { name: "Campera Polar", sku: "SKU: CA-POL-01 • Talla: L", price: "$62.500", hold: 0.34, inn: 0.48 },
  { name: "Caja Arcor Variado", sku: "SKU: CA-ARC-01 • x12", price: "$8.900", hold: 0.4, inn: 0.54 },
]

function PosMock() {
  const { ref, inView } = useInView(0.2)
  const [method, setMethod] = useState("Efectivo")
  const [paid, setPaid] = useState(false)

  return (
    <div ref={ref} className="grid gap-0 text-left lg:grid-cols-[1.3fr_0.9fr]">
      <div className="p-5 md:p-6">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <Fx play={inView} inn={0.16} from={{ opacity: 0 }}>
            <p className="text-lg font-bold">Punto de venta</p>
            <p className="text-xs text-zinc-500">Mostrador Palermo • 14:32</p>
          </Fx>
          <Fx play={inView} hold={0.04} inn={0.2} from={{ opacity: 0 }} className="flex gap-2 text-[11px] font-semibold text-muted">
            <span className="rounded-md bg-zinc-100 px-2 py-1">Ticket #A-1042</span>
            <span className="rounded-md bg-zinc-100 px-2 py-1">{method}</span>
          </Fx>
        </div>
        <Fx
          play={inView}
          hold={0.08}
          inn={0.24}
          from={{ opacity: 0, x: -15 }}
        >
          <input
            readOnly
            value="Buscar producto..."
            className="mt-4 h-11 w-full rounded-lg border border-line bg-zinc-50 px-3 text-sm text-subtle"
          />
        </Fx>
        <div className="mt-4 divide-y divide-line">
          {POS_ITEMS.map((item) => (
            <Fx
              key={item.name}
              play={inView}
              hold={item.hold}
              inn={item.inn}
              from={{ opacity: 0, x: -30 }}
              className="flex items-center justify-between gap-3 py-3"
            >
              <div>
                <p className="text-sm font-semibold">{item.name}</p>
                <p className="text-[11px] text-zinc-500">{item.sku}</p>
              </div>
              <p className="text-sm font-bold">{item.price}</p>
            </Fx>
          ))}
        </div>
      </div>
      <div className="border-t border-line bg-[#fafafa] p-5 md:border-l md:border-t-0 md:p-6">
        <Fx play={inView} hold={0.48} inn={0.64} from={{ opacity: 0, y: 10 }} className="flex justify-between text-sm">
          <span className="text-muted">Subtotal</span>
          <span className="font-bold">$200.200</span>
        </Fx>
        <Fx play={inView} hold={0.24} inn={0.4} from={{ opacity: 0 }}>
          <p className="mt-5 text-[11px] font-bold uppercase tracking-wide text-muted">Método de pago</p>
          <div className="mt-2 grid grid-cols-3 gap-2">
            {["Efectivo", "Tarjeta", "QR"].map((m) => (
              <button
                key={m}
                type="button"
                onClick={() => {
                  setMethod(m)
                  setPaid(false)
                }}
                className={`min-h-11 cursor-pointer rounded-lg px-2 py-2 text-center text-xs font-semibold transition-colors ${
                  method === m ? "bg-brand text-white" : "bg-white text-muted ring-1 ring-line hover:text-ink"
                }`}
              >
                {m}
              </button>
            ))}
          </div>
        </Fx>
        <Fx
          play={inView}
          keyframes={[
            { opacity: 0, transform: "scale(0.9)", offset: 0 },
            { opacity: 0, transform: "scale(0.9)", offset: 0.6, easing: "cubic-bezier(0.16, 1, 0.3, 1)" },
            { opacity: 1, transform: "scale(1)", offset: 0.76 },
            { opacity: 1, transform: "scale(1)", offset: 1 },
          ]}
        >
          <button
            type="button"
            onClick={() => setPaid(true)}
            className={`mt-6 flex h-12 w-full cursor-pointer items-center justify-center rounded-lg text-sm font-bold text-white transition-colors ${
              paid ? "bg-emerald-600" : "bg-brand hover:bg-brand-deep"
            }`}
          >
            {paid ? `Cobrado con ${method}` : "Cobrar $200.200"}
          </button>
        </Fx>
      </div>
    </div>
  )
}

const STOCK_ROWS = [
  { sku: "RE-ALG-01", name: "Remera Algodón Premium", stock: "14 uds", move: "Venta • 14:32", status: "Normal", hold: 0.14, inn: 0.28, stripe: false },
  { sku: "PA-DEN-01", name: "Pantalón Denim Clásico", stock: "142 uds", move: "Ingreso • 09:10", status: "Normal", hold: 0.18, inn: 0.32, stripe: true },
  { sku: "ZA-URB-01", name: "Zapatilla Urbana", stock: "41 uds", move: "Ajuste • 08:45", status: "Normal", hold: 0.22, inn: 0.36, stripe: false },
  { sku: "CA-ARC-01", name: "Caja Arcor Variado", stock: "8 uds", move: "Venta • 13:20", status: "Stock crítico", hold: 0.26, inn: 0.4, stripe: true, pulse: { hold: 0.52, peak: 0.64, settle: 0.76, dim: 0.88 } },
  { sku: "CA-POL-01", name: "Campera Polar", stock: "23 uds", move: "Ingreso • Ayer", status: "Normal", hold: 0.3, inn: 0.44, stripe: false },
  { sku: "BU-CAN-01", name: "Buzo Canguro", stock: "67 uds", move: "Ingreso • 08:15", status: "Normal", hold: 0.34, inn: 0.48, stripe: true },
  { sku: "GO-DEP-01", name: "Gorra Deportiva", stock: "3 uds", move: "Venta • 11:40", status: "Stock crítico", hold: 0.38, inn: 0.52, stripe: false, pulse: { hold: 0.58, peak: 0.7, settle: 0.82 } },
  { sku: "CI-CUE-01", name: "Cinturón Cuero", stock: "28 uds", move: "Ajuste • Ayer", status: "Normal", hold: 0.42, inn: 0.56, stripe: true },
] as const

function StockBadge({
  play,
  pulse,
}: {
  play: boolean
  pulse: { hold: number; peak: number; settle: number; dim?: number }
}) {
  const frames: Keyframe[] = pulse.dim
    ? [
        { opacity: 0.3, transform: "scale(0.8)", offset: 0 },
        { opacity: 0.3, transform: "scale(0.8)", offset: pulse.hold, easing: "cubic-bezier(0.16, 1, 0.3, 1)" },
        { opacity: 1, transform: "scale(1.05)", offset: pulse.peak, easing: "cubic-bezier(0.16, 1, 0.3, 1)" },
        { opacity: 0.5, transform: "scale(1)", offset: pulse.settle, easing: "cubic-bezier(0.16, 1, 0.3, 1)" },
        { opacity: 0.95, transform: "scale(1)", offset: pulse.dim },
        { opacity: 0.95, transform: "scale(1)", offset: 1 },
      ]
    : [
        { opacity: 0.3, transform: "scale(0.8)", offset: 0 },
        { opacity: 0.3, transform: "scale(0.8)", offset: pulse.hold, easing: "cubic-bezier(0.16, 1, 0.3, 1)" },
        { opacity: 1, transform: "scale(1.05)", offset: pulse.peak, easing: "cubic-bezier(0.16, 1, 0.3, 1)" },
        { opacity: 0.5, transform: "scale(1)", offset: pulse.settle },
        { opacity: 0.5, transform: "scale(1)", offset: 1 },
      ]

  return (
    <Fx play={play} loop origin="center" keyframes={frames}>
      <span className="rounded-full bg-[#fee2e2] px-2.5 py-1 text-[11px] font-extrabold text-[#dc2626]">Stock crítico</span>
    </Fx>
  )
}

function StockMock() {
  const { ref, inView } = useInView(0.2)

  return (
    <div ref={ref} className="grid text-left lg:grid-cols-[180px_1fr]">
      <Fx
        as="aside"
        play={inView}
        inn={0.2}
        from={{ opacity: 0, x: -25 }}
        className="hidden border-r border-line bg-[#fafafa] p-4 lg:block"
      >
        <p className="text-[11px] font-bold uppercase tracking-wide text-zinc-500">Menú</p>
        {["Inventario", "Ingresos", "Ajustes", "Alertas", "Movimientos", "Proveedores"].map((item, i) => (
          <p
            key={item}
            className={`mt-1 rounded-md px-2 py-1.5 text-[13px] ${
              i === 0 ? "bg-brand-soft font-semibold text-brand" : "text-muted"
            }`}
          >
            {item}
          </p>
        ))}
      </Fx>
      <div className="overflow-x-auto p-5 md:p-6">
        <Fx play={inView} hold={0.06} inn={0.2} from={{ opacity: 0 }} className="flex flex-wrap gap-2">
          {["Todos", "Bajo stock", "Sin stock"].map((f, i) => (
            <span
              key={f}
              className={`rounded-full px-3 py-1 text-xs font-semibold ${
                i === 0 ? "bg-brand text-white" : "bg-zinc-100 text-muted"
              }`}
            >
              {f}
            </span>
          ))}
        </Fx>
        <div className="mt-4 min-w-[640px] text-sm">
          <Fx
            play={inView}
            hold={0.1}
            inn={0.22}
            from={{ opacity: 0 }}
            className="grid grid-cols-[110px_1fr_90px_160px_90px] gap-3 bg-[#fafafa] px-3 py-2.5 text-[11px] font-bold uppercase text-zinc-500"
          >
            {["SKU", "Producto", "Stock", "Último movimiento", "Estado"].map((h) => (
              <span key={h}>{h}</span>
            ))}
          </Fx>
          {STOCK_ROWS.map((row) => (
            <Fx
              key={row.sku}
              play={inView}
              hold={row.hold}
              inn={row.inn}
              from={{ opacity: 0, x: 15 }}
              className={`grid grid-cols-[110px_1fr_90px_160px_90px] items-center gap-3 border-t border-line px-3 py-2.5 ${
                row.stripe ? "bg-[#fafafa]" : "bg-white"
              }`}
            >
              <span className="text-zinc-500">{row.sku}</span>
              <span className="font-semibold">{row.name}</span>
              <span className="font-bold">{row.stock}</span>
              <span className="text-muted">{row.move}</span>
              {"pulse" in row && row.pulse ? (
                <StockBadge play={inView} pulse={row.pulse} />
              ) : (
                <span className="font-bold text-muted">{row.status}</span>
              )}
            </Fx>
          ))}
        </div>
      </div>
    </div>
  )
}
