'use client'
import { useState } from "react"
import { FragmentationVisual } from "./FragmentationVisual"
import { Container, Eyebrow, Lead, SectionHeading } from "./ui"

export function Problem() {
  const [open, setOpen] = useState(false)

  return (
    <section id="producto" className="bg-white py-16 md:py-24">
      <Container className="text-center">
        <Eyebrow>Cuando el negocio crece</Eyebrow>
        <SectionHeading className="mx-auto mt-3 max-w-[820px]">
          Tu operación creció.
          <br />
          Tus herramientas quedaron atrás.
        </SectionHeading>
        <Lead className="mx-auto mt-5 max-w-[760px] text-base md:text-lg">
          Una planilla para el stock. WhatsApp para consultar. Mercado Pago para cobrar. ARCA para facturar. Papel para registrar lo que todavía no entró al sistema.
        </Lead>
        <Lead className="mx-auto mt-3 max-w-[760px] text-base md:text-lg">
          Por separado funcionan. El problema aparece cuando necesitás entender todo junto.
        </Lead>

        <div
          className="papers-hit relative mx-auto mt-12 w-full max-w-[1100px] cursor-default overflow-hidden rounded-xl bg-white"
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
          onClick={() => {
            if (window.matchMedia("(hover: hover)").matches) return
            setOpen((v) => !v)
          }}
        >
          <FragmentationVisual open={open} />
        </div>

        <p className="mx-auto mt-10 max-w-[760px] text-sm font-medium text-ink md:text-base md:font-semibold">
          Cuanto más crece la operación, más difícil se vuelve reconstruir qué está pasando.
        </p>
      </Container>
    </section>
  )
}
