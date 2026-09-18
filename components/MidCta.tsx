import { AGENDA_URL } from "@/lib/links"

export function MidCta() {
  return (
    <section className="border-y border-[#e5e5eb] bg-white">
      <div className="mx-auto flex max-w-[1296px] flex-col items-stretch justify-between gap-6 px-6 py-12 text-center md:h-[120px] md:flex-row md:items-center md:px-8 md:py-0 md:text-left">
        <h2 className="text-xl font-bold leading-snug text-ink md:text-2xl md:font-semibold">
          ¿Listo para simplificar tu operación?
        </h2>
        <a
          href={AGENDA_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-11 cursor-pointer items-center justify-center rounded-lg bg-brand px-5 text-[15px] font-semibold text-white transition-colors hover:bg-brand-deep md:h-[47px] md:text-base md:font-bold"
        >
          <span className="md:hidden">Solicitar demo</span>
          <span className="hidden md:inline">Solicitar demo →</span>
        </a>
      </div>
    </section>
  )
}
