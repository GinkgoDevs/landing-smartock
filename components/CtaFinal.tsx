import { Container } from "./ui"
import { WHATSAPP_URL } from "@/lib/contact"
import { AGENDA_URL } from "@/lib/links"

export function CtaFinal() {
  return (
    <section className="bg-brand py-16 md:py-24">
      <Container className="text-center">
        <h2 className="mx-auto max-w-[900px] text-[28px] font-bold leading-[1.2] tracking-tight text-white md:text-[56px] md:font-black md:leading-[1.1]">
          Tu negocio puede seguir creciendo.
          <br />
          La complejidad no tiene por qué hacerlo.
        </h2>
        <p className="mx-auto mt-5 max-w-[520px] text-[15px] leading-relaxed text-white/80 md:text-lg md:text-white/[0.92]">
          <span className="md:hidden">
            Agendá una demo de 20 minutos.
            <br />
            Sin compromiso, sin tarjeta.
          </span>
          <span className="hidden md:inline">Agendá una demo de 20 minutos. Sin compromiso, sin tarjeta.</span>
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-5">
          <a
            href={AGENDA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 w-full max-w-[342px] cursor-pointer items-center justify-center gap-2 rounded-lg bg-white px-5 text-base font-semibold text-brand transition-colors duration-200 hover:bg-violet-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white md:w-auto md:bg-brand-bright md:text-white md:hover:bg-[#6d28d9]"
          >
            Solicitar demo gratuita
          </a>
          <a
            href={WHATSAPP_URL}
            className="text-sm font-medium text-white/70 md:text-base md:font-semibold md:text-white/[0.92]"
          >
            O escribinos por WhatsApp
          </a>
        </div>
        <div className="mt-8 flex flex-col items-center gap-2 text-[13px] font-normal text-white md:flex-row md:flex-wrap md:justify-center md:gap-x-3 md:text-sm md:font-semibold md:text-white/[0.92]">
          <span>✓ Implementación acompañada</span>
          <span className="hidden md:inline">•</span>
          <span>✓ Soporte incluido</span>
          <span className="hidden md:inline">•</span>
          <span>✓ Sin permanencia mínima</span>
        </div>
      </Container>
    </section>
  )
}
