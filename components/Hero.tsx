'use client'
import { Button, Container, Eyebrow } from "./ui"
import { HeroDashboard } from "./mockups/HeroDashboard"
import { AGENDA_URL } from "@/lib/links"

type HeroProps = {
  onVideo: () => void
}

export function Hero({ onVideo }: HeroProps) {
  return (
    <section id="inicio" className="relative overflow-hidden bg-hero pt-28 md:pt-32">
      <Container className="relative flex flex-col items-center pb-0 text-center">
        <Eyebrow className="font-medium md:font-semibold">Sistema de gestión para comercios y PyMEs</Eyebrow>
        <h1 className="mt-4 max-w-[1100px] text-[36px] font-bold leading-[1.1] tracking-[-0.04em] text-ink md:text-[54px] md:font-black md:leading-[1.1]">
          Tu negocio puede ser complejo.
          <br />
          Tu sistema no debería serlo.
        </h1>
        <p className="mt-4 max-w-[640px] text-base leading-relaxed text-muted md:text-lg md:leading-[1.6]">
          Controlá ventas, stock, caja y facturación desde un sistema que se adapta a cómo realmente funciona tu negocio.
        </p>
        <div className="mt-8 flex w-full flex-col items-stretch justify-center gap-3 md:w-auto md:flex-row md:items-center">
          <a href={AGENDA_URL} target="_blank" rel="noopener noreferrer" className="inline-flex h-12 cursor-pointer items-center justify-center gap-2 rounded-lg bg-brand px-5 text-base font-semibold text-white transition-colors duration-200 hover:bg-brand-deep focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand w-full md:w-auto md:bg-brand-bright md:hover:bg-[#6d28d9]">
            <span className="md:hidden">Solicitar una demo</span>
            <span className="hidden md:inline">Solicitar demo</span>
            <svg className="hidden md:block" width="19" height="19" viewBox="0 0 19 19" fill="none" aria-hidden="true">
              <path d="M4 9.5h11M10.5 5l4.5 4.5L10.5 14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <Button variant="secondary" onClick={onVideo} className="w-full font-medium text-muted ring-[#d1d5db] md:w-auto md:font-semibold md:text-[#131313]">
            <svg className="hidden md:block" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <circle cx="8" cy="8" r="6.2" stroke="currentColor" strokeWidth="1.4" />
              <path d="M1.5 8h13M8 3.2c2.2 2.1 3.6 3.4 4.8 4.8C10.6 9.4 9.2 10.8 8 12.8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
            </svg>
            Ver cómo funciona
          </Button>
        </div>

        <div className="relative mt-10 w-full max-w-[1200px]">
          <div className="overflow-hidden rounded-t-2xl border border-b-0 border-line bg-white shadow-[0_28px_80px_rgba(82,0,136,0.16)]">
            <HeroDashboard />
          </div>
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 hero-fade md:h-32" />
        </div>
      </Container>
    </section>
  )
}
