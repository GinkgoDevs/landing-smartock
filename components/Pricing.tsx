'use client'
import { useState } from "react"
import Image from "next/image"
import { CheckIcon, Container, Eyebrow, Lead, SectionHeading } from "./ui"
import { AGENDA_URL } from "@/lib/links"
import {
  billingModeOptions,
  billingModes,
  branchVolumeDiscounts,
  getBranchPriceDisplay,
  getPlanBranchPricing,
  getPlanPricing,
  getPricingTableCopy,
  type BillingModeId,
} from "@/lib/pricing"

// Copy (descs/features) follows the source layout; plan names, prices,
// discounts and billing periods come from @/lib/pricing.
const PLAN_COPY = [
  {
    desc: "Para comercios que arrancan a digitalizar su operación.",
    features: ["Punto de venta", "Inventario básico", "Caja", "Facturación ARCA", "1 usuario"],
  },
  {
    desc: "Para negocios que necesitan control completo de su operación.",
    features: [
      "Todo lo de Smart",
      "Stock avanzado con trazabilidad",
      "Dashboard y reportes",
      "Stocky (asistente inteligente)",
      "Mercado Pago integrado",
      "Hasta 3 usuarios",
    ],
  },
  {
    desc: "Para operaciones con workflows especializados.",
    features: [
      "Todo lo de Pro",
      "Despiece y workflows",
      "Multi-sucursal",
      "Usuarios ilimitados",
      "Soporte prioritario",
    ],
  },
]

type PricingProps = {
  className?: string
}

export function Pricing({ className = "" }: PricingProps) {
  const [billingMode, setBillingMode] = useState<BillingModeId>("mensual")
  const copy = getPricingTableCopy(billingMode)

  return (
    <section id="precios" className={`relative bg-white py-16 md:py-24 ${className}`}>
      <Container>
        <div className="text-center">
          <Eyebrow>PLANES</Eyebrow>
          <SectionHeading className="mt-3">Elegí cuánto necesita tu operación.</SectionHeading>
          <Lead className="mx-auto mt-4 max-w-[560px]">
            Todos los planes incluyen soporte e implementación acompañada.
          </Lead>
        </div>

        <div className="mx-auto mt-8 grid max-w-xl grid-cols-3 gap-1 rounded-2xl border border-line bg-[#faf8fc] p-1">
          {billingModeOptions.map((option) => {
            const isActive = option.value === billingMode
            return (
              <button
                key={option.value}
                type="button"
                onClick={() => setBillingMode(option.value)}
                aria-pressed={isActive}
                className={`min-h-11 cursor-pointer rounded-xl px-3 py-2 text-center transition-colors ${
                  isActive ? "bg-brand text-white shadow" : "text-muted hover:bg-white hover:text-ink"
                }`}
              >
                <span className="block text-sm font-bold">{option.label}</span>
                {option.hint ? (
                  <span
                    className={`mt-0.5 block text-[10px] font-semibold ${
                      isActive ? "text-white/75" : "text-muted"
                    }`}
                  >
                    {option.hint}
                  </span>
                ) : null}
              </button>
            )
          })}
        </div>
        <p className="mt-3 text-center text-[13px] text-muted">
          {billingModes[billingMode].description}
        </p>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {PLAN_COPY.map((planCopy, i) => {
            const plan = getPlanPricing(i)
            const pricing = getPlanBranchPricing(i, billingMode)
            const featured = plan.recommended
            const listDisplay = getBranchPriceDisplay(plan.listMonthlyPrice, billingMode)
            const rows = [
              {
                label: "1 sucursal",
                price: pricing.one,
                hint: null as string | null,
              },
              {
                label: "2 sucursales",
                price: pricing.two,
                hint: `2ª con ${Math.round(branchVolumeDiscounts.second * 100)}% OFF`,
              },
              {
                label: "3 sucursales",
                price: pricing.three,
                hint: `3ª con ${Math.round(branchVolumeDiscounts.third * 100)}% OFF`,
              },
            ]
            return (
              <article
                key={plan.name}
                className={`relative flex flex-col rounded-xl border bg-white p-6 ${
                  featured ? "border-brand shadow-[0_18px_50px_rgba(107,33,168,0.12)]" : "border-line"
                }`}
              >
                {featured && (
                  <span className="absolute -top-2.5 right-5 rounded-full bg-brand px-2 py-0.5 text-[10px] font-bold text-white">
                    MÁS ELEGIDO
                  </span>
                )}
                <h3 className="text-xl font-extrabold">{plan.name}</h3>
                <p className="mt-1 text-[13px] text-muted">{planCopy.desc}</p>
                <p className="mt-2 inline-flex w-fit items-center rounded-full bg-brand-soft px-2.5 py-0.5 text-[11px] font-bold text-brand">
                  {plan.launchDiscountPercent}% OFF lanzamiento
                </p>
                <p className="mt-4 text-4xl font-extrabold tracking-tight">
                  {pricing.one.formatted}
                  <span className="ml-1 align-baseline text-sm font-semibold text-muted">
                    {copy.headlineSuffix}
                  </span>
                </p>
                <p className="mt-1 text-[13px] text-muted">
                  <span className="line-through">{listDisplay.formatted}</span> precio original
                  {billingMode !== "mensual" && (
                    <> · {pricing.one.effectiveFormatted}/mes efectivo</>
                  )}
                </p>
                <div className="my-5 h-px bg-line" />
                <ul className="grid gap-2">
                  {rows.map((row) => (
                    <li key={row.label} className="flex items-baseline justify-between gap-2 text-sm">
                      <span className="text-muted">
                        {row.label}
                        {row.hint ? (
                          <span className="ml-1.5 text-[11px] font-semibold text-brand">
                            {row.hint}
                          </span>
                        ) : null}
                      </span>
                      <span className="font-bold text-ink">
                        {row.price.formatted}
                        {copy.rowSuffix ? (
                          <span className="ml-1 text-[11px] font-medium text-muted">
                            {copy.rowSuffix}
                          </span>
                        ) : null}
                      </span>
                    </li>
                  ))}
                </ul>
                <p className="mt-3 text-[12px] text-muted">{copy.footnote}</p>
                <div className="my-5 h-px bg-line" />
                <ul className="grid flex-1 gap-2.5">
                  {planCopy.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-muted">
                      <CheckIcon />
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href={AGENDA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-6 inline-flex min-h-11 w-full items-center justify-center rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                    featured
                      ? "bg-brand-bright text-white hover:bg-[#6d28d9]"
                      : "bg-zinc-100 text-ink ring-1 ring-black/10 hover:bg-zinc-200"
                  }`}
                >
                  Solicitar demo
                </a>
              </article>
            )
          })}
        </div>

        <p className="mt-6 text-center text-[13px] text-[#1a1a28]">
          Precios expresados en pesos argentinos. Consultá condiciones vigentes.
        </p>
      </Container>
      <OctopusAccent />
    </section>
  )
}

function OctopusAccent() {
  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 mx-auto hidden h-full max-w-[1536px] lg:block">
      <Image
        src="/stocky.png"
        alt=""
        draggable={false}
        width={290}
        height={290}
        className="absolute right-0 bottom-[-72px] h-[290px] w-[290px] object-contain"
      />
    </div>
  )
}
