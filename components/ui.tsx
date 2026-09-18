'use client'
import type { ReactNode } from "react"

export function Eyebrow({
  children,
  light = false,
  className = "",
}: {
  children: ReactNode
  light?: boolean
  className?: string
}) {
  return (
    <p
      className={`text-xs font-semibold ${
        light ? "text-[#e9d5f5]" : "text-brand"
      } ${className}`}
    >
      {children}
    </p>
  )
}

export function SectionHeading({
  children,
  light = false,
  className = "",
}: {
  children: ReactNode
  light?: boolean
  className?: string
}) {
  return (
    <h2
      className={`text-[32px] font-bold leading-[1.1] tracking-tight md:text-[46px] md:font-black ${
        light ? "text-white" : "text-ink"
      } ${className}`}
    >
      {children}
    </h2>
  )
}

export function Lead({
  children,
  light = false,
  className = "",
}: {
  children: ReactNode
  light?: boolean
  className?: string
}) {
  return (
    <p
      className={`text-lg leading-relaxed ${light ? "text-white/90" : "text-muted"} ${className}`}
    >
      {children}
    </p>
  )
}

type ButtonProps = {
  children: ReactNode
  href?: string
  target?: string
  rel?: string
  onClick?: () => void
  variant?: "primary" | "secondary" | "ghost" | "soft"
  className?: string
  type?: "button" | "submit"
}

export function Button({
  children,
  href,
  target,
  rel,
  onClick,
  variant = "primary",
  className = "",
  type = "button",
}: ButtonProps) {
  const styles = {
    primary:
      "bg-brand-bright text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.18)] hover:bg-[#6d28d9] hover:brightness-[1.03]",
    secondary:
      "bg-[#f4f4f5] text-[#131313] ring-1 ring-inset ring-black/12 hover:bg-zinc-200",
    ghost: "bg-transparent text-brand-bright hover:bg-violet-50",
    soft: "bg-zinc-100 text-ink ring-1 ring-inset ring-black/10 hover:bg-zinc-200",
  }[variant]

  const cls = `inline-flex h-12 cursor-pointer items-center justify-center gap-2 rounded-lg px-5 text-base font-semibold transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand ${styles} ${className}`

  if (href) {
    return (
      <a href={href} target={target} rel={rel} className={cls} onClick={onClick}>
        {children}
      </a>
    )
  }

  return (
    <button type={type} className={cls} onClick={onClick}>
      {children}
    </button>
  )
}

export function Container({
  children,
  className = "",
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div className={`mx-auto w-full max-w-[1200px] px-6 md:px-8 ${className}`}>
      {children}
    </div>
  )
}

export function CheckIcon({ className = "text-brand" }: { className?: string }) {
  return (
    <svg className={`h-4 w-4 shrink-0 ${className}`} viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M3.5 8.2 6.4 11l6.1-6.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

