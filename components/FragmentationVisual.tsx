'use client'
import { useEffect, useRef, useState, type ReactNode } from "react"
import { usePrefersReducedMotion } from "../lib/motion"

// Base canvas size (matches the CSS keyframe layout in globals.css).
const BASE_W = 1100
const BASE_H = 415
const OPEN_H = 556

type Paper = {
  id: string
  z: number
  clustered: { x: number; y: number; r: number }
  hover: { x: number; y: number; r: number }
  w: number
  h: number
  radius: string
  className: string
  content: ReactNode
}

export function FragmentationVisual({ open }: { open: boolean }) {
  const reduceMotion = usePrefersReducedMotion()
  const wrapRef = useRef<HTMLDivElement>(null)
  const [scale, setScale] = useState(1)

  // Scale the fixed-size canvas to the wrapper width. ResizeObserver also
  // fires once on observe, so no synchronous setState is needed.
  useEffect(() => {
    const el = wrapRef.current
    if (!el) return
    const ro = new ResizeObserver((entries) => {
      setScale(entries[0].contentRect.width / BASE_W)
    })
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  const expanded = open || reduceMotion

  return (
    <div
      ref={wrapRef}
      className="papers-wrap mx-auto w-full max-w-[1100px]"
      data-open={expanded}
      aria-hidden="true"
      style={{ height: (expanded ? OPEN_H : BASE_H) * scale }}
    >
      <div
        className="papers-canvas"
        style={{ transform: `scale(${scale})` }}
      >
        {PAPERS.map((paper, i) => {
          const from = paper.clustered
          const to = paper.hover
          const dx = to.x - from.x
          const dy = to.y - from.y
          return (
            <div
              key={paper.id}
              className={`paper ${paper.className}`}
              style={{
                left: from.x,
                top: from.y,
                width: paper.w,
                height: paper.h,
                borderRadius: paper.radius,
                zIndex: paper.z,
                transform: expanded
                  ? `translate(${dx}px, ${dy}px) rotate(${to.r}deg)`
                  : `translate(0px, 0px) rotate(${from.r}deg)`,
                transitionDelay: reduceMotion ? "0ms" : `${i * 35}ms`,
              }}
            >
              {paper.content}
            </div>
          )
        })}
      </div>
    </div>
  )
}

function Spreadsheet() {
  return (
    <div className="flex h-full flex-col p-3 text-left">
      <div className="flex items-start justify-between gap-3">
        <p className="text-[12px] font-extrabold text-ink">Stock · Sucursal Palermo</p>
        <p className="text-[10px] text-[#8e8e93]">Actualizado: hoy 09:12</p>
      </div>
      <table className="mt-2 w-full text-left text-[11px]">
        <thead className="text-muted">
          <tr>
            <th className="pb-1.5 font-normal">SKU</th>
            <th className="pb-1.5 font-normal">Descripción</th>
            <th className="pb-1.5 text-right font-normal">Stock</th>
            <th className="pb-1.5 text-right font-normal">Min</th>
          </tr>
        </thead>
        <tbody className="text-ink">
          <tr>
            <td>REM-L-01</td>
            <td>Remera L</td>
            <td className="text-right">12</td>
            <td className="text-right">8</td>
          </tr>
          <tr>
            <td>REM-M-01</td>
            <td>Remera M</td>
            <td className="text-right text-[#dc2626]">3</td>
            <td className="text-right">8</td>
          </tr>
          <tr>
            <td>ARC-12P</td>
            <td>Caja Arcor</td>
            <td className="text-right text-[#dc2626]">0</td>
            <td className="text-right">4</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

const PAPERS: Paper[] = [
  {
    id: "spreadsheet",
    z: 1,
    clustered: { x: 328, y: 61, r: -8 },
    hover: { x: 340, y: 168, r: 0 },
    w: 420,
    h: 220,
    radius: "8px",
    className: "bg-[#f0fdf4] ring-1 ring-[#e4e4e7]",
    content: <Spreadsheet />,
  },
  {
    id: "whatsapp",
    z: 2,
    clustered: { x: 420, y: 162, r: 6 },
    hover: { x: 749, y: 49, r: 15 },
    w: 264,
    h: 88,
    radius: "12px",
    className: "bg-[#dcfce7]",
    content: (
      <p className="p-3 text-left text-[11px] leading-[14px] text-[#1b5e20]">
        ¿Queda stock de la remera talle L en depósito?
      </p>
    ),
  },
  {
    id: "mercado-pago",
    z: 3,
    clustered: { x: 458, y: 170, r: -10 },
    hover: { x: 128, y: 352, r: -10 },
    w: 190,
    h: 102,
    radius: "8px",
    className: "bg-[#eff6ff] ring-1 ring-[#e4e4e7]",
    content: (
      <div className="flex h-full flex-col justify-center p-3.5 text-left">
        <p className="text-[9px] font-bold text-[#2563eb]">Mercado Pago</p>
        <p className="mt-0.5 text-[14px] font-extrabold text-ink">+$18.200</p>
        <p className="text-[10px] text-muted">Aprobado</p>
      </div>
    ),
  },
  {
    id: "arca",
    z: 4,
    clustered: { x: 361, y: 252, r: 4 },
    hover: { x: 384, y: 410, r: 4 },
    w: 225,
    h: 100,
    radius: "4px",
    className: "bg-[#fffbeb] ring-1 ring-[#e4e4e7]",
    content: (
      <div className="flex h-full flex-col justify-center p-3.5 text-left">
        <p className="text-[8px] font-bold tracking-wide text-muted">ARCA - FACTURA B</p>
        <div className="my-1.5 h-px bg-[#e5e5eb]" />
        <div className="flex items-center justify-between text-[10px]">
          <span className="text-muted">C.U.I.T. Nro:</span>
          <span className="font-semibold text-ink">30-74838201-9</span>
        </div>
        <div className="my-1.5 h-px bg-[#e5e5eb]" />
        <p className="text-[12px] font-bold text-ink">TOTAL: $24.500</p>
      </div>
    ),
  },
  {
    id: "sticky",
    z: 5,
    clustered: { x: 338, y: 135, r: -12 },
    hover: { x: 190, y: 67, r: -12 },
    w: 150,
    h: 93,
    radius: "2px",
    className: "bg-[#fef2f2] ring-1 ring-[#e4e4e7]",
    content: (
      <div className="flex h-full flex-col p-3 text-left italic text-[#854d0e]">
        <p className="text-[10px] not-italic">3 Cajas Arcor</p>
        <p className="text-[10px]">- Pendiente recibir</p>
        <p className="mt-auto text-right text-[11px] font-bold not-italic">Ok ✓</p>
      </div>
    ),
  },
  {
    id: "calculator",
    z: 6,
    clustered: { x: 431, y: 90, r: -6 },
    hover: { x: 724, y: 423, r: -6 },
    w: 167,
    h: 96,
    radius: "8px",
    className: "bg-[#f3f4f6] ring-1 ring-[#e4e4e7]",
    content: (
      <div className="flex h-full flex-col justify-center gap-1 px-3.5 py-2 text-[10px]">
        <div className="flex justify-between">
          <span className="text-muted">Caja</span>
          <span className="text-ink">$ 18.200</span>
        </div>
        <div className="h-px bg-[#e5e5eb]" />
        <div className="flex justify-between">
          <span className="text-muted">Gastos</span>
          <span className="text-ink">-$ 1.200</span>
        </div>
        <div className="h-px bg-[#e5e5eb]" />
        <div className="flex justify-between font-bold">
          <span>Total</span>
          <span>$ 17.000</span>
        </div>
      </div>
    ),
  },
  {
    id: "chat-2",
    z: 7,
    clustered: { x: 389, y: 215, r: 12 },
    hover: { x: 92, y: 214, r: -11.75 },
    w: 226,
    h: 96,
    radius: "12px",
    className: "bg-[#dcfce7]",
    content: (
      <p className="p-3.5 text-left text-[11px] leading-[14px] text-[#1b5e20]">
        El proveedor dice que llega mañana. Confirmo por mail.
      </p>
    ),
  },
  {
    id: "receipt",
    z: 8,
    clustered: { x: 518, y: 226, r: -4 },
    hover: { x: 826, y: 241, r: -4 },
    w: 166,
    h: 98,
    radius: "6px",
    className: "bg-[#eff6ff] ring-1 ring-[#e4e4e7]",
    content: (
      <div className="flex h-full flex-col justify-center px-3 py-2 text-[10px]">
        <p className="font-extrabold tracking-wide">TICKET</p>
        <div className="my-1 h-px bg-[#e5e5eb]" />
        <div className="flex justify-between">
          <span className="text-muted">Venta</span>
          <span>$14.200</span>
        </div>
        <div className="mt-0.5 flex justify-between">
          <span className="text-muted">Cobro</span>
          <span>Cobrado</span>
        </div>
        <div className="my-1 h-px bg-[#e5e5eb]" />
        <p className="text-[9px] text-[#8e8e93]">Nro: 1984</p>
      </div>
    ),
  },
  {
    id: "paper-list",
    z: 9,
    clustered: { x: 520, y: 100, r: 10 },
    hover: { x: 428, y: 18, r: 10 },
    w: 195,
    h: 134,
    radius: "6px",
    className: "bg-[#fef2f2] ring-1 ring-[#e4e4e7]",
    content: (
      <div className="p-3 text-left text-[10px]">
        <p className="font-bold text-ink">Pendientes</p>
        <ul className="mt-2 space-y-1.5 text-muted">
          <li>✓ Revisar stock crítico</li>
          <li>✓ Confirmar proveedor</li>
          <li>✓ Cobrar Mercado Pago</li>
          <li className="text-ink">• Facturar ARCA</li>
        </ul>
      </div>
    ),
  },
]
