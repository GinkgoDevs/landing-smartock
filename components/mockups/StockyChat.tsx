'use client'
import { useEffect, useState, type ReactNode } from "react"
import Image from "next/image"
import { useInView, usePrefersReducedMotion } from "../../lib/motion"

const MESSAGES: Array<{ id: string; side: "user" | "bot"; text: ReactNode }> = [
  { id: "q1", side: "user", text: "¿Cuánto vendí esta semana?" },
  {
    id: "a1",
    side: "bot",
    text: (
      <>
        Esta semana se registraron <strong>847 ventas</strong> por un total de <strong>$2.340.500</strong>. El ticket promedio fue de <strong>$2.763</strong>.
      </>
    ),
  },
  { id: "q2", side: "user", text: "¿Cuál fue el producto más vendido?" },
  {
    id: "a2",
    side: "bot",
    text: (
      <>
        El artículo más vendido fue <strong>Pantalón Denim Clásico</strong> con <strong>142 unidades</strong> despachadas.
      </>
    ),
  },
]

/** Figma StockyMockupFrame: Propiedad 1=vacío → 5=conversación completa. */
const VARIANT_AT_MS = [0, 900, 1700, 2600, 3400]
const LOOP_MS = 6200

export function StockyChat() {
  const { ref, inView } = useInView(0.45)
  const reduceMotion = usePrefersReducedMotion()
  const [step, setStep] = useState(1)

  // Snap to the full conversation with reduced motion; reset while off-screen.
  if (reduceMotion && step !== 5) setStep(5)
  else if (!reduceMotion && !inView && step !== 1) setStep(1)

  useEffect(() => {
    if (reduceMotion || !inView) return

    let cancelled = false
    const ids: number[] = []

    const play = () => {
      if (cancelled) return
      VARIANT_AT_MS.forEach((at, i) => {
        ids.push(
          window.setTimeout(() => {
            if (!cancelled) setStep(i + 1)
          }, at),
        )
      })
      ids.push(window.setTimeout(play, LOOP_MS))
    }

    play()
    return () => {
      cancelled = true
      ids.forEach(clearTimeout)
    }
  }, [inView, reduceMotion])

  const count = Math.max(0, step - 1)

  return (
    <div
      ref={ref}
      className="flex flex-col overflow-hidden rounded-xl border border-line bg-white shadow-[0_12px_32px_rgba(17,17,19,0.05)] md:h-[402px]"
    >
      <div className="flex items-center gap-2 px-4 py-3">
        <Image
          src="/stocky.png"
          alt=""
          draggable={false}
          width={28}
          height={28}
          className="h-7 w-7 rounded-full object-cover object-top"
        />
        <div>
          <p className="text-[13px] font-bold leading-none">Stocky</p>
          <p className="mt-1 flex items-center gap-1.5 text-[10px] text-zinc-500">
            <span className="live-dot h-1.5 w-1.5 rounded-full bg-green-700" />
            Asistente Smartock en línea
          </p>
        </div>
      </div>
      <div className="h-px bg-line-soft" />
      <div className="grid flex-1 content-start gap-3 overflow-hidden px-4 py-4">
        {MESSAGES.slice(0, count).map((msg) => (
          <Bubble key={msg.id} side={msg.side}>
            {msg.text}
          </Bubble>
        ))}
      </div>
    </div>
  )
}

function Bubble({ children, side }: { children: ReactNode; side: "user" | "bot" }) {
  const user = side === "user"
  return (
    <div className={`bubble-in flex flex-col ${user ? "items-end" : "items-start"}`}>
      <div
        className={`max-w-[85%] rounded-lg px-3 py-2.5 text-[13px] leading-snug ${
          user ? "border border-line bg-zinc-100 text-ink" : "border border-brand bg-white text-brand"
        }`}
      >
        {children}
      </div>
      <p className="mt-1 text-[10px] text-zinc-500">Hace un momento</p>
    </div>
  )
}
