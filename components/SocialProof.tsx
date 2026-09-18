import Image from "next/image"
import { Container, Eyebrow } from "./ui"

export function SocialProof({ className = "" }: { className?: string }) {
  return (
    <section className={`bg-brand-soft py-16 md:py-24 ${className}`}>
      <Container>
        <Eyebrow>NEGOCIOS QUE YA OPERAN CON SMARTOCK</Eyebrow>
        <h2 className="mt-3 max-w-[900px] text-[32px] font-bold leading-[1.15] tracking-tight text-ink md:text-[56px] md:font-black md:leading-[1.1]">
          No lo decimos nosotros.
        </h2>

        <div className="mt-10 flex flex-wrap gap-x-16 gap-y-8">
          {[
            ["50+", "Negocios activos"],
            ["98%", "Satisfacción"],
            ["4.8★", "Valoración promedio"],
          ].map(([n, l]) => (
            <div key={l}>
              <p className="text-[44px] font-extrabold leading-none text-brand">{n}</p>
              <p className="mt-1 text-sm text-muted">{l}</p>
            </div>
          ))}
        </div>

        <blockquote className="mt-14 grid gap-6 md:grid-cols-[auto_1fr] md:items-start">
          <p className="text-[80px] font-bold leading-none text-brand" aria-hidden="true">
            “
          </p>
          <div>
            <p className="max-w-[700px] text-xl font-normal leading-relaxed text-ink md:text-[22px]">
              “Antes necesitábamos tres planillas y un grupo de WhatsApp para saber qué teníamos en stock. Ahora lo consultamos en tiempo real y sin vueltas.”
            </p>
            <footer className="mt-6 flex items-center gap-3">
              <Image
                src="/martin-r.png"
                alt="Martín R."
                width={40}
                height={40}
                className="h-10 w-10 rounded-full bg-[#e5e5eb] object-cover"
              />
              <div>
                <p className="text-base font-semibold text-ink">Martín R.</p>
                <p className="text-sm text-muted">Dueño · Almacén y distribuidora</p>
              </div>
            </footer>
          </div>
        </blockquote>
      </Container>
    </section>
  )
}
