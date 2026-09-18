'use client'
import { useEffect, useRef, useState } from "react"
import { Logo } from "./Logo"
import { Button } from "./ui"
import { AGENDA_URL, APP_URL } from "@/lib/links"

const LINKS = [
  { href: "#producto", label: "Producto" },
  { href: "#soluciones", label: "Soluciones" },
  { href: "#precios", label: "Precios" },
  { href: "#recursos", label: "Recursos" },
]

export function Navbar() {
  const [active, setActive] = useState("#producto")
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const lastY = useRef(0)

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      const goingDown = y > lastY.current
      lastY.current = y
      setScrolled(y > 12)
      setHidden(goingDown && y > 140)
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    if (!menuOpen) return
    const prev = document.body.style.overflow
    document.body.style.overflow = "hidden"
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false)
    }
    window.addEventListener("keydown", onKey)
    return () => {
      document.body.style.overflow = prev
      window.removeEventListener("keydown", onKey)
    }
  }, [menuOpen])

  useEffect(() => {
    const ids = LINKS.map((l) => l.href.slice(1))
    const els = ids.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[]
    if (!els.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible?.target.id) setActive(`#${visible.target.id}`)
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: [0.1, 0.25, 0.5] },
    )
    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <header
      className={`pointer-events-none fixed inset-x-0 top-0 z-50 transition-transform duration-300 ease-out motion-reduce:transition-none md:p-4 ${
        hidden ? "-translate-y-[110%]" : "translate-y-0"
      }`}
    >
      <nav
        className={`pointer-events-auto mx-auto flex h-14 max-w-[1472px] items-center justify-between border bg-white/95 px-4 backdrop-blur transition-shadow duration-200 md:h-[73px] md:rounded-full md:px-5 ${
          scrolled
            ? "border-[#e5e7eb] shadow-[0_12px_40px_rgba(17,17,19,0.12)] md:border-[#e5e5ea]"
            : "border-[#e5e7eb] shadow-[0_8px_30px_rgba(17,17,19,0.06)] md:border-[#e5e5ea]"
        }`}
      >
        <Logo compact />

        <div className="hidden items-center gap-7 lg:flex">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-brand ${
                active === link.href ? "text-brand" : "text-muted"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-2 lg:flex">
          <a
            href={APP_URL}
            className="inline-flex h-12 cursor-pointer items-center justify-center rounded-lg px-5 text-sm font-medium text-brand-bright ring-1 ring-inset ring-black/[0.08] transition-colors hover:bg-violet-50"
          >
            Ingresar
          </a>
          <Button href={AGENDA_URL} target="_blank" rel="noopener noreferrer">
            Solicitar demo
            <ArrowRight />
          </Button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <a
            href={AGENDA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 cursor-pointer items-center rounded-lg bg-brand px-4 text-sm font-semibold text-white"
          >
            Demo
          </a>
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            className="grid h-11 w-11 cursor-pointer place-items-center rounded-lg text-ink ring-1 ring-inset ring-black/[0.08] transition-colors hover:bg-violet-50"
          >
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </nav>
      {menuOpen && (
        <div className="pointer-events-auto mx-auto mt-2 max-w-[1472px] rounded-2xl border border-[#e5e7eb] bg-white/95 px-3 py-3 shadow-[0_12px_40px_rgba(17,17,19,0.12)] backdrop-blur lg:hidden">
          <nav aria-label="Menú" className="grid">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`flex min-h-11 items-center rounded-lg px-3 text-[15px] font-medium transition-colors hover:bg-violet-50 ${
                  active === link.href ? "text-brand" : "text-ink"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="mt-2 grid gap-2 border-t border-line-soft pt-3">
            <a
              href={APP_URL}
              className="inline-flex min-h-11 cursor-pointer items-center justify-center rounded-lg px-5 text-sm font-semibold text-brand-bright ring-1 ring-inset ring-black/[0.08] transition-colors hover:bg-violet-50"
            >
              Ingresar
            </a>
            <Button href={AGENDA_URL} target="_blank" rel="noopener noreferrer" className="w-full">
              Solicitar demo
              <ArrowRight />
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}

function MenuIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M3 5.5h14M3 10h14M3 14.5h14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}

function CloseIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path d="M4 4l10 10M14 4L4 14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}

function ArrowRight() {
  return (
    <svg width="19" height="19" viewBox="0 0 19 19" fill="none" aria-hidden="true">
      <path d="M4 9.5h11M10.5 5l4.5 4.5L10.5 14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
