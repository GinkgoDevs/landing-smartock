import { SectionLabel } from "@/components/SectionLabel";

type FeatureGroup = {
  label: string;
  items: string[];
};

type BranchPricing = {
  one: string;
  two: string;
  three: string;
};

type Plan = {
  name: string;
  pricing: BranchPricing;
  description: string;
  recommended?: boolean;
  premium?: boolean;
  cta: string;
  groups: FeatureGroup[];
};

const plans: Plan[] = [
  {
    name: "Smart",
    pricing: {
      one: "$65.000",
      two: "$117.000",
      three: "$166.000",
    },
    description:
      "Gestión base para comercios que necesitan ordenar stock, ventas y cuentas básicas.",
    cta: "Solicitar demo",
    groups: [
      {
        label: "Límites incluidos",
        items: ["Hasta 5.000 productos", "1 usuario"],
      },
      {
        label: "Funciones principales",
        items: [
          "Gestión de stock",
          "Productos y precios",
          "Punto de venta (POS)",
          "Clientes",
          "Cuentas corrientes básicas",
        ],
      },
    ],
  },
  {
    name: "Pro",
    pricing: {
      one: "$85.000",
      two: "$153.000",
      three: "$217.000",
    },
    description:
      "Gestión completa con facturación, reportes y Stocky consultivo por WhatsApp.",
    recommended: true,
    cta: "Solicitar demo",
    groups: [
      {
        label: "Límites incluidos",
        items: ["Hasta 30.000 productos", "5 usuarios"],
      },
      {
        label: "Funciones principales",
        items: [
          "Todo lo del plan Smart",
          "Facturación electrónica",
          "Gestión de proveedores",
          "Reportes de ventas",
          "Cuentas corrientes avanzadas",
        ],
      },
      {
        label: "WhatsApp",
        items: ["Stocky consultivo por WhatsApp"],
      },
    ],
  },
  {
    name: "IA Premium",
    pricing: {
      one: "$120.000",
      two: "$216.000",
      three: "$306.000",
    },
    description:
      "Automatización con IA y Stocky operativo para comercios que quieren escalar sin carga manual.",
    premium: true,
    cta: "Consultar plan",
    groups: [
      {
        label: "Límites incluidos",
        items: ["Hasta 50.000 productos", "15 usuarios"],
      },
      {
        label: "Funciones principales",
        items: ["Todo lo del plan Pro"],
      },
      {
        label: "IA",
        items: [
          "Cargas con IA de facturas",
          "Cargas con IA de listas de precios",
          "Actualización automática de precios y stock",
        ],
      },
      {
        label: "IA / WhatsApp",
        items: [
          "Stocky consultivo y operativo",
          "50 extracciones IA mensuales incluidas",
        ],
      },
    ],
  },
];

const disclaimers = [
  "Precios mensuales + IVA.",
  "Los valores se calculan según la cantidad de sucursales.",
  "Para más de 3 sucursales, armamos una propuesta personalizada.",
  "Las extracciones IA incluyen procesamiento de facturas o listas de precios.",
];

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        d="M20 6 9 17l-5-5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.25"
      />
    </svg>
  );
}

function GiftIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        d="M20 12v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8M2 7h20v5H2zM12 22V7M12 7H7.5a2.5 2.5 0 1 1 0-5C11 2 12 7 12 7zM12 7h4.5a2.5 2.5 0 1 0 0-5C13 2 12 7 12 7z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.75"
      />
    </svg>
  );
}

function BranchPricingTable({
  pricing,
  isRecommended,
  isPremium,
}: {
  pricing: BranchPricing;
  isRecommended: boolean;
  isPremium: boolean;
}) {
  const rowBase = isRecommended
    ? "border-white/12"
    : isPremium
      ? "border-[#520088]/10"
      : "border-[#d0c2d5]/45";

  const labelMuted = isRecommended ? "text-white/55" : "text-[#9a8da3]";
  const labelDefault = isRecommended ? "text-white/75" : "text-[#6b5f72]";
  const valueDefault = isRecommended ? "text-white/90" : "text-[#1a1a28]";
  const valueHighlight = isRecommended ? "text-white" : "text-[#520088]";

  const rows = [
    { branches: "1 sucursal", price: pricing.one, highlight: true },
    { branches: "2 sucursales", price: pricing.two, highlight: false },
    { branches: "3 sucursales", price: pricing.three, highlight: false },
  ] as const;

  return (
    <div className="space-y-2">
      <p className={`text-[10px] font-extrabold tracking-[0.1em] uppercase ${labelMuted}`}>
        Precio mensual por cantidad de sucursales
      </p>

      <div
        className={[
          "overflow-hidden rounded-xl border",
          isRecommended
            ? "border-white/15 bg-white/8"
            : isPremium
              ? "border-[#520088]/12 bg-[#520088]/3"
              : "border-[#d0c2d5]/50 bg-[#faf8fc]/80",
        ].join(" ")}
      >
        {rows.map((row, index) => (
          <div
            className={[
              "flex items-center justify-between gap-3 px-3.5 py-2.5 sm:px-4",
              index > 0 ? `border-t ${rowBase}` : "",
              row.highlight ? (isRecommended ? "bg-white/6" : "bg-white/70") : "",
            ].join(" ")}
            key={row.branches}
          >
            <span
              className={[
                "text-[12px] sm:text-[13px]",
                row.highlight ? "font-bold" : "font-medium",
                row.highlight ? valueHighlight : labelDefault,
              ].join(" ")}
            >
              {row.branches}
            </span>
            <div className="text-right">
              <span
                className={[
                  row.highlight
                    ? "text-[clamp(1.25rem,3vw,1.5rem)] font-black tracking-[-0.04em]"
                    : "text-sm font-extrabold tracking-[-0.02em]",
                  row.highlight ? valueHighlight : valueDefault,
                ].join(" ")}
              >
                {row.price}
              </span>
              <span
                className={[
                  "ml-1 text-[11px] font-semibold",
                  isRecommended ? "text-white/65" : "text-[#9a8da3]",
                ].join(" ")}
              >
                + IVA
              </span>
            </div>
          </div>
        ))}

        <div
          className={[
            "flex items-center justify-between gap-3 border-t px-3.5 py-2.5 sm:px-4",
            rowBase,
            isRecommended ? "bg-white/4" : "bg-white/50",
          ].join(" ")}
        >
          <span
            className={[
              "text-[12px] font-medium sm:text-[13px]",
              isRecommended ? "text-white/70" : "text-[#6b5f72]",
            ].join(" ")}
          >
            Más de 3 sucursales
          </span>
          <span
            className={[
              "text-right text-[12px] font-bold sm:text-[13px]",
              isRecommended ? "text-[#5ed8ff]" : "text-[#520088]",
            ].join(" ")}
          >
            Precio personalizado
          </span>
        </div>
      </div>

      <p
        className={[
          "text-[11px] font-medium",
          isRecommended ? "text-white/60" : "text-[#9a8da3]",
        ].join(" ")}
      >
        Smartock se cobra por sucursal · valores mensuales + IVA
      </p>
    </div>
  );
}

function PlanCard({ plan }: { plan: Plan }) {
  const isRecommended = Boolean(plan.recommended);
  const isPremium = Boolean(plan.premium);

  return (
    <article
      className={[
        "relative flex h-full flex-col rounded-[22px] border p-6 sm:p-7 lg:p-8",
        isRecommended ? "pt-8 lg:pt-9" : "",
        isRecommended
          ? "z-10 border-[#7209b7] bg-linear-to-br from-[#520088] to-[#7209b7] text-white shadow-[0_28px_64px_rgba(82,0,136,0.28)]"
          : isPremium
            ? "border-[#1a1a28]/12 bg-linear-to-b from-[#faf8fc] to-white shadow-[0_18px_40px_rgba(26,26,40,0.07)] ring-1 ring-[#520088]/10"
            : "border-[#d0c2d5]/55 bg-white/80 shadow-[0_16px_36px_rgba(26,26,40,0.05)]",
      ].join(" ")}
    >
      {isRecommended ? (
        <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-white px-3.5 py-1 text-[11px] font-extrabold tracking-[0.04em] text-[#520088] uppercase shadow-[0_8px_20px_rgba(26,26,40,0.12)]">
          Recomendado
        </span>
      ) : null}

      <div className={isPremium ? "mb-3 min-h-[26px]" : "min-h-[26px]"}>
        {isPremium ? (
          <span className="inline-flex w-fit items-center gap-1.5 rounded-full border border-[#520088]/15 bg-[#520088]/6 px-3 py-1 text-[11px] font-extrabold tracking-[0.04em] text-[#520088] uppercase">
            <svg aria-hidden="true" className="h-3 w-3" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l2.4 7.4H22l-6 4.6 2.3 7-6.3-4.6L5.7 21 8 14 2 9.4h7.6z" />
            </svg>
            Más potente
          </span>
        ) : null}
      </div>

      <div className="mb-5 space-y-3">
        <h3
          className={[
            "text-balance text-xl font-extrabold tracking-[-0.03em]",
            isRecommended ? "text-white" : "text-[#1a1a28]",
          ].join(" ")}
        >
          Plan {plan.name}
        </h3>

        <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
          <p
            className={[
              "text-[clamp(1.875rem,4vw,2.375rem)] leading-none font-black tracking-[-0.05em]",
              isRecommended ? "text-white" : "text-[#520088]",
            ].join(" ")}
          >
            {plan.pricing.one}
          </p>
          <span
            className={[
              "text-sm font-bold",
              isRecommended ? "text-white/85" : "text-[#520088]/80",
            ].join(" ")}
          >
            + IVA
          </span>
          <span
            className={[
              "text-sm font-semibold",
              isRecommended ? "text-white/75" : "text-[#6b5f72]",
            ].join(" ")}
          >
            / mes
          </span>
        </div>

        <p
          className={[
            "text-[12px] font-semibold",
            isRecommended ? "text-white/70" : "text-[#6b5f72]",
          ].join(" ")}
        >
          Precio de referencia para 1 sucursal
        </p>

        <p
          className={[
            "text-pretty text-sm leading-relaxed",
            isRecommended ? "text-white/85" : "text-[#4d4353]",
          ].join(" ")}
        >
          {plan.description}
        </p>
      </div>

      <BranchPricingTable
        isPremium={isPremium}
        isRecommended={isRecommended}
        pricing={plan.pricing}
      />

      <div className="mt-5 flex flex-1 flex-col gap-5">
        {plan.groups.map((group) => (
          <div key={group.label}>
            <p
              className={[
                "mb-2 text-[10px] font-extrabold tracking-[0.1em] uppercase",
                isRecommended ? "text-white/55" : "text-[#9a8da3]",
              ].join(" ")}
            >
              {group.label}
            </p>
            <ul className="space-y-2">
              {group.items.map((item) => (
                <li className="flex items-start gap-2.5" key={item}>
                  <span
                    className={[
                      "mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full",
                      isRecommended
                        ? "bg-white/15 text-[#5ed8ff]"
                        : "bg-[#520088]/8 text-[#520088]",
                    ].join(" ")}
                  >
                    <CheckIcon className="h-3 w-3" />
                  </span>
                  <span
                    className={[
                      "text-pretty text-[13px] leading-snug",
                      isRecommended ? "text-white/92" : "text-[#1a1a28]",
                      item.startsWith("Todo lo del plan") ? "font-bold" : "font-medium",
                    ].join(" ")}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <a
        className={[
          "mt-6 inline-flex min-h-11 w-full shrink-0 items-center justify-center rounded-[14px] px-5 text-sm font-extrabold transition-all duration-200 ease-out",
          isRecommended
            ? "bg-white !text-[#520088] shadow-[0_10px_24px_rgba(26,26,40,0.14)] hover:bg-[#f2daff] hover:!text-[#520088] hover:shadow-[0_14px_30px_rgba(26,26,40,0.18)]"
            : isPremium
              ? "bg-[#1a1a28] !text-white shadow-[0_12px_28px_rgba(26,26,40,0.18)] hover:bg-[#520088] hover:!text-white"
              : "border border-[#520088]/25 bg-white !text-[#520088] hover:border-[#520088] hover:bg-[#fcf8ff] hover:!text-[#520088]",
        ].join(" ")}
        href="#agenda"
      >
        {plan.cta}
      </a>
    </article>
  );
}

export function PricingSection() {
  return (
    <section
      className="scroll-mt-[78px] bg-white py-14 md:py-16 lg:py-20"
      id="planes"
      aria-labelledby="pricing-heading"
    >
      <div className="mx-auto w-[min(calc(100%-clamp(24px,5vw,72px)),1180px)]">
        <SectionLabel>Precios</SectionLabel>

        <div className="mx-auto mb-8 max-w-2xl text-center md:mb-10">
          <p className="mb-3 text-xs font-extrabold tracking-[0.08em] text-[#520088] uppercase md:hidden">
            Planes y precios
          </p>
          <h2
            className="text-balance text-[clamp(1.875rem,3.6vw,2.625rem)] leading-[1.12] font-extrabold tracking-[-0.04em] text-[#1a1a28]"
            id="pricing-heading"
          >
            Planes pensados para el crecimiento de tu comercio
          </h2>
          <p className="text-balance mt-3 text-base leading-relaxed text-[#4d4353] md:text-[17px]">
            Precios mensuales por sucursal. Elegí el plan que mejor se adapte a tu operación.
          </p>
        </div>

        <div className="mb-6 flex justify-center md:mb-8">
          <div className="inline-flex items-center gap-2.5 rounded-full border border-[#520088]/20 bg-linear-to-r from-[#fcf8ff] via-white to-[#f2e8ff] px-4 py-2 shadow-[0_8px_24px_rgba(82,0,136,0.1)] sm:gap-3 sm:px-5 sm:py-2.5">
            <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#520088] text-white">
              <GiftIcon className="h-4 w-4" />
            </span>
            <p className="text-balance text-left text-sm font-bold text-[#1a1a28] sm:text-[15px]">
              Primer mes bonificado
              <span className="block text-xs font-semibold text-[#6b5f72] sm:inline sm:font-bold sm:text-[#520088]">
                {" "}
                · para nuevos clientes
              </span>
            </p>
          </div>
        </div>

        <div className="grid items-stretch gap-5 max-lg:grid-cols-1 lg:grid-cols-3 lg:gap-6 lg:pt-2">
          {plans.map((plan) => (
            <PlanCard key={plan.name} plan={plan} />
          ))}
        </div>

        <div className="mt-8 space-y-5">
          <div className="flex flex-col items-center gap-3 rounded-2xl border border-[#520088]/15 bg-linear-to-r from-[#fcf8ff] via-white to-[#fcf8ff] px-5 py-5 text-center shadow-[0_12px_32px_rgba(82,0,136,0.06)] sm:flex-row sm:items-center sm:justify-center sm:gap-4 sm:px-8 sm:text-left">
            <span
              aria-hidden="true"
              className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#520088]/10 text-[#520088]"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24">
                <path
                  d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.75"
                />
                <path
                  d="M9 22V12h6v10"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.75"
                />
              </svg>
            </span>
            <div className="max-w-xl space-y-0.5">
              <p className="text-balance text-sm leading-relaxed font-bold text-[#1a1a28] md:text-[15px]">
                ¿Tenés más de 3 sucursales? Solicitá presupuesto personalizado.
              </p>
              <p className="text-balance text-xs leading-relaxed text-[#6b5f72] md:text-sm">
                Armamos una propuesta a medida según la cantidad de locales y el plan que elijas.
              </p>
            </div>
          </div>

          <ul className="mx-auto grid max-w-3xl gap-2 sm:grid-cols-2">
            {disclaimers.map((item) => (
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
      </div>
    </section>
  );
}
