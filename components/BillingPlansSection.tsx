import { SectionLabel } from "@/components/SectionLabel";

const monthlyPlans = [
  { name: "Smart", monthlyPrice: 65_000 },
  { name: "Pro", monthlyPrice: 85_000 },
  { name: "IA Premium", monthlyPrice: 120_000 },
] as const;

const billingOptions = [
  {
    id: "semestral",
    name: "Plan semestral",
    durationMonths: 6,
    paidMonths: 5,
    freeMonths: 1,
    benefit: "1 mes gratis",
    description: "Pagá 5 meses y usá Smartock durante 6.",
    recommended: false,
  },
  {
    id: "anual",
    name: "Plan anual",
    durationMonths: 12,
    paidMonths: 8,
    freeMonths: 4,
    benefit: "4 meses gratis",
    description: "Pagá 8 meses y usá Smartock durante 12.",
    recommended: true,
  },
] as const;

function formatPrice(amount: number) {
  return `$${amount.toLocaleString("es-AR")}`;
}

function CalendarIcon({ className }: { className?: string }) {
  return (
    <svg aria-hidden="true" className={className} fill="none" viewBox="0 0 24 24">
      <path
        d="M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.75"
      />
    </svg>
  );
}

function BillingOptionCard({
  option,
}: {
  option: (typeof billingOptions)[number];
}) {
  const isRecommended = option.recommended;

  return (
    <article
      className={[
        "relative flex h-full flex-col rounded-[22px] border p-6 sm:p-7",
        isRecommended
          ? "border-[#7209b7] bg-linear-to-br from-[#520088] to-[#7209b7] text-white shadow-[0_24px_56px_rgba(82,0,136,0.24)]"
          : "border-[#d0c2d5]/55 bg-white shadow-[0_16px_36px_rgba(26,26,40,0.05)]",
      ].join(" ")}
    >
      {isRecommended ? (
        <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-white px-3.5 py-1 text-[11px] font-extrabold tracking-[0.04em] text-[#520088] uppercase shadow-[0_8px_20px_rgba(26,26,40,0.12)]">
          Mejor valor
        </span>
      ) : null}

      <div className="mb-5 space-y-3">
        <span
          className={[
            "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-extrabold tracking-[0.04em] uppercase",
            isRecommended
              ? "bg-white/15 text-[#5ed8ff]"
              : "bg-[#520088]/8 text-[#520088]",
          ].join(" ")}
        >
          <CalendarIcon className="h-3.5 w-3.5" />
          {option.benefit}
        </span>

        <h3
          className={[
            "text-balance text-xl font-extrabold tracking-[-0.03em]",
            isRecommended ? "text-white" : "text-[#1a1a28]",
          ].join(" ")}
        >
          {option.name}
        </h3>

        <p
          className={[
            "text-sm leading-relaxed",
            isRecommended ? "text-white/85" : "text-[#4d4353]",
          ].join(" ")}
        >
          {option.description}
        </p>
      </div>

      <div
        className={[
          "overflow-hidden rounded-xl border",
          isRecommended ? "border-white/15 bg-white/8" : "border-[#d0c2d5]/50 bg-[#faf8fc]/80",
        ].join(" ")}
      >
        {monthlyPlans.map((plan, index) => {
          const total = plan.monthlyPrice * option.paidMonths;
          const effectiveMonthly = Math.round(total / option.durationMonths);

          return (
            <div
              className={[
                "flex items-center justify-between gap-3 px-3.5 py-3 sm:px-4",
                index > 0
                  ? isRecommended
                    ? "border-t border-white/12"
                    : "border-t border-[#d0c2d5]/45"
                  : "",
                isRecommended ? "bg-white/4" : index === 0 ? "bg-white/70" : "",
              ].join(" ")}
              key={plan.name}
            >
              <div className="min-w-0">
                <p
                  className={[
                    "text-sm font-bold",
                    isRecommended ? "text-white" : "text-[#1a1a28]",
                  ].join(" ")}
                >
                  Plan {plan.name}
                </p>
                <p
                  className={[
                    "text-[11px] font-medium",
                    isRecommended ? "text-white/65" : "text-[#9a8da3]",
                  ].join(" ")}
                >
                  1 sucursal · {formatPrice(effectiveMonthly)}/mes efectivo
                </p>
              </div>
              <div className="text-right">
                <p
                  className={[
                    "text-base font-black tracking-[-0.03em] sm:text-lg",
                    isRecommended ? "text-white" : "text-[#520088]",
                  ].join(" ")}
                >
                  {formatPrice(total)}
                </p>
                <p
                  className={[
                    "text-[11px] font-semibold",
                    isRecommended ? "text-white/65" : "text-[#9a8da3]",
                  ].join(" ")}
                >
                  por {option.durationMonths} meses
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <p
        className={[
          "mt-3 text-[11px] font-medium",
          isRecommended ? "text-white/60" : "text-[#9a8da3]",
        ].join(" ")}
      >
        Aplicable a cualquier plan · precio de referencia para 1 sucursal
      </p>

      <a
        className={[
          "mt-5 inline-flex min-h-11 w-full items-center justify-center rounded-[14px] px-5 text-sm font-extrabold transition-all duration-200 ease-out",
          isRecommended
            ? "bg-white !text-[#520088] shadow-[0_10px_24px_rgba(26,26,40,0.14)] hover:bg-[#f2daff] hover:!text-[#520088]"
            : "border border-[#520088]/25 bg-white !text-[#520088] hover:border-[#520088] hover:bg-[#fcf8ff] hover:!text-[#520088]",
        ].join(" ")}
        href="#agenda"
      >
        Elegir {option.name.toLowerCase()}
      </a>
    </article>
  );
}

export function BillingPlansSection() {
  return (
    <section
      className="scroll-mt-[78px] bg-linear-to-b from-white via-[#fcf8ff] to-white py-14 md:py-16 lg:py-20"
      id="planes-anuales"
      aria-labelledby="billing-plans-heading"
    >
      <div className="container">
        <SectionLabel>Ahorro</SectionLabel>

        <div className="mx-auto mb-8 max-w-2xl text-center md:mb-10">
          <h2
            className="text-balance text-[clamp(1.875rem,3.6vw,2.625rem)] leading-[1.12] font-extrabold tracking-[-0.04em] text-[#1a1a28]"
            id="billing-plans-heading"
          >
            Planes semestral y anual con meses bonificados
          </h2>
          <p className="text-balance mt-3 text-base leading-relaxed text-[#4d4353] md:text-[17px]">
            Comprometete por más tiempo y ahorrá. El beneficio aplica sobre el plan mensual que
            elijas.
          </p>
        </div>

        <div className="grid items-stretch gap-5 lg:grid-cols-2 lg:gap-6 lg:pt-2">
          {billingOptions.map((option) => (
            <BillingOptionCard key={option.id} option={option} />
          ))}
        </div>

        <ul className="mx-auto mt-8 grid max-w-3xl gap-2 sm:grid-cols-2">
          {[
            "Los valores se calculan según la cantidad de sucursales.",
            "Para más de 3 sucursales, armamos una propuesta personalizada.",
            "El plan semestral incluye 1 mes bonificado.",
            "El plan anual incluye 4 meses bonificados.",
          ].map((item) => (
            <li
              className="flex items-start gap-2 text-left text-sm leading-relaxed text-[#4d4353]"
              key={item}
            >
              <span
                aria-hidden="true"
                className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-[#520088]/50"
              />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
