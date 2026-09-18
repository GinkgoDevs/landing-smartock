'use client'
import {
  useEffect,
  useRef,
  useState,
  useSyncExternalStore,
  type CSSProperties,
  type ElementType,
  type ReactNode,
} from "react"

export const FIGMA_LOOP_MS = 2500
export const FIGMA_EASE = "cubic-bezier(0.16, 1, 0.3, 1)"

function subscribeReduceMotion(callback: () => void) {
  const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
  mq.addEventListener("change", callback)
  return () => mq.removeEventListener("change", callback)
}

export function usePrefersReducedMotion() {
  return useSyncExternalStore(
    subscribeReduceMotion,
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    () => false,
  )
}

export function useInView<T extends HTMLElement = HTMLDivElement>(threshold = 0.4) {
  const ref = useRef<T>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), {
      threshold,
      rootMargin: "0px 0px -8% 0px",
    })
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])

  return { ref, inView }
}

export type FxFrom = {
  opacity?: number
  x?: number
  y?: number
  scale?: number
  scaleY?: number
}

type FxTag = "div" | "tr" | "aside" | "span" | "p" | "button"

type FxProps = {
  as?: FxTag
  children?: ReactNode
  className?: string
  style?: CSSProperties
  play: boolean
  loop?: boolean
  hold?: number
  inn?: number
  from?: FxFrom
  origin?: string
  keyframes?: Keyframe[]
}

function fxStyles(from: FxFrom, rest: boolean): Keyframe {
  const opacity = rest ? 1 : (from.opacity ?? 1)
  const x = rest ? 0 : (from.x ?? 0)
  const y = rest ? 0 : (from.y ?? 0)
  const scale = rest ? 1 : (from.scale ?? 1)
  const scaleY = rest ? 1 : (from.scaleY ?? 1)
  const parts: string[] = []
  if (x !== 0 || y !== 0) parts.push(`translate(${x}px, ${y}px)`)
  if (from.scaleY != null) parts.push(`scaleY(${scaleY})`)
  else if (from.scale != null) parts.push(`scale(${scale})`)
  return {
    opacity,
    transform: parts.length ? parts.join(" ") : "none",
  }
}

function holdFrames(from: FxFrom, hold: number, inn: number): Keyframe[] {
  const hidden = fxStyles(from, false)
  const shown = fxStyles(from, true)
  if (hold > 0) {
    return [
      { ...hidden, offset: 0 },
      { ...hidden, offset: hold, easing: FIGMA_EASE },
      { ...shown, offset: inn },
      { ...shown, offset: 1 },
    ]
  }
  return [
    { ...hidden, offset: 0, easing: FIGMA_EASE },
    { ...shown, offset: inn },
    { ...shown, offset: 1 },
  ]
}

/** Figma Frame 2: 2.5s once, ease [0.16, 1, 0.3, 1], HOLD then appear. */
export function Fx({
  as = "div",
  children,
  className,
  style,
  play,
  loop = false,
  hold = 0,
  inn = 0.2,
  from = { opacity: 0, y: 15 },
  origin,
  keyframes,
}: FxProps) {
  const reduce = usePrefersReducedMotion()
  const ref = useRef<HTMLElement>(null)
  const played = useRef(false)
  const animRef = useRef<Animation | null>(null)
  const [done, setDone] = useState(false)
  const frames = keyframes ?? holdFrames(from, hold, inn)
  const rest = frames[frames.length - 1]
  const start = frames[0]
  const framesKey = JSON.stringify(frames)

  useEffect(() => {
    if (reduce) return
    const el = ref.current
    if (!el || !play) return
    if (!loop && played.current) return

    played.current = true
    const anim = el.animate(JSON.parse(framesKey) as Keyframe[], {
      duration: FIGMA_LOOP_MS,
      iterations: loop ? Infinity : 1,
      fill: loop ? "none" : "forwards",
    })
    animRef.current = anim
    if (!loop) {
      anim.finished.then(() => setDone(true)).catch(() => {})
    }

    return () => {
      if (loop) anim.cancel()
    }
  }, [play, reduce, framesKey, loop])

  useEffect(() => {
    if (loop) return
    return () => animRef.current?.cancel()
  }, [loop])

  const applied = reduce || done ? rest : start
  const Tag = as as ElementType

  return (
    <Tag
      ref={ref}
      className={className}
      style={{
        ...style,
        opacity: applied.opacity as number | undefined,
        transform: (applied.transform as string | undefined) ?? undefined,
        transformOrigin: origin,
      }}
    >
      {children}
    </Tag>
  )
}
