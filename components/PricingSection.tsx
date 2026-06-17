type FeatureGroup = {
  label: string;
  items: string[];
};

type Plan = {
  name: string;
  price: string;
  description: string;
  recommended?: boolean;
  premium?: boolean;
  cta: string;
  groups: FeatureGroup[];
};

const plans: Plan[] = [
  {
    name: "Smart",
    price: "$65.000",
    description:
      "Ideal para comercios chicos que necesitan ordenar stock, ventas y cuentas básicas.",
    cta: "Solicitar demo",
    groups: [
      {
        label: "Gestión",
        items: [
          "Gestión de stock",
          "Punto de venta",
          "Productos y precios",
          "Clientes y cuentas corrientes básicas",
        ],
      },
      {
        label: "Límites",
        items: [
          "1 sucursal incluida",
          "Hasta 2 usuarios",
          "Hasta 1.500 productos",
          "Soporte estándar",
        ],
      },
    ],
  },
  {
    name: "Pro",
    price: "$85.000",
    description:
      "Para comercios en crecimiento que necesitan facturación, reportes y asistencia por WhatsApp.",
    recommended: true,
    cta: "Comenzar",
    groups: [
      {
        label: "Gestión",
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
      {
        label: "Límites",
        items: [
          "Hasta 5 usuarios",
          "Hasta 5.000 productos",
          "Soporte prioritario",
        ],
      },
    ],
  },
  {
    name: "IA Premium",
    price: "$120.000",
    description:
      "Para comercios que quieren automatizar carga de facturas, listas de precios y tareas operativas con IA.",
    premium: true,
    cta: "Solicitar demo",
    groups: [
      {
        label: "Gestión",
        items: [
          "Todo lo del plan Pro",
          "Carga de facturas con inteligencia artificial",
          "Carga de listas de precios en PDF con IA",
          "Automatización de actualización de precios y stock",
        ],
      },
      {
        label: "IA / WhatsApp",
        items: [
          "Stocky consultivo y operativo",
          "50 extracciones IA mensuales incluidas",
        ],
      },
      {
        label: "Límites",
        items: [
          "Hasta 10 usuarios",
          "Hasta 15.000 productos",
          "Soporte prioritario",
        ],
      },
    ],
  },
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

function PlanCard({ plan }: { plan: Plan }) {
  const isRecommended = plan.recommended;
  const isPremium = plan.premium;

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

      <div className="mb-5 space-y-2.5">
        <h3
          className={[
            "text-balance text-xl font-extrabold tracking-[-0.03em]",
            isRecommended ? "text-white" : "text-[#1a1a28]",
          ].join(" ")}
        >
          {plan.name}
        </h3>

        <div className="flex flex-wrap items-end gap-x-2 gap-y-1.5">
          <p
            className={[
              "text-[clamp(1.875rem,4vw,2.375rem)] leading-none font-black tracking-[-0.05em]",
              isRecommended ? "text-white" : "text-[#520088]",
            ].join(" ")}
          >
            {plan.price}
          </p>
          <span
            className={[
              "pb-0.5 text-sm font-semibold",
              isRecommended ? "text-white/80" : "text-[#6b5f72]",
            ].join(" ")}
          >
            / mes
          </span>
          <span
            className={[
              "mb-0.5 rounded-full px-2 py-0.5 text-[10px] font-bold tracking-wide uppercase",
              isRecommended
                ? "bg-white/14 text-white/90"
                : "bg-[#520088]/6 text-[#520088]/80",
            ].join(" ")}
          >
            por sucursal
          </span>
        </div>

        <p
          className={[
            "text-pretty text-sm leading-relaxed",
            isRecommended ? "text-white/85" : "text-[#4d4353]",
          ].join(" ")}
        >
          {plan.description}
        </p>
      </div>

      <div className="flex flex-1 flex-col gap-4">
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
        <div className="mx-auto mb-10 max-w-2xl text-center md:mb-12">
          <p className="mb-3 text-xs font-extrabold tracking-[0.08em] text-[#520088] uppercase">
            Planes y precios
          </p>
          <h2
            className="text-balance text-[clamp(1.875rem,3.6vw,2.625rem)] leading-[1.12] font-extrabold tracking-[-0.04em] text-[#1a1a28]"
            id="pricing-heading"
          >
            Planes diseñados para crecer
          </h2>
          <p className="text-balance mt-3 text-base leading-relaxed text-[#4d4353] md:text-[17px]">
            Planes mensuales por sucursal, pensados para acompañar el crecimiento de tu comercio.
          </p>
        </div>

        <div className="grid items-stretch gap-5 lg:grid-cols-3 lg:gap-6 lg:pt-2">
          {plans.map((plan) => (
            <PlanCard key={plan.name} plan={plan} />
          ))}
        </div>

        <div className="mt-8 space-y-4">
          <div className="flex flex-col items-center gap-3 rounded-2xl border border-[#520088]/12 bg-[#fcf8ff] px-5 py-4 text-center sm:flex-row sm:items-center sm:justify-center sm:gap-4 sm:px-6 sm:text-left">
            <span
              aria-hidden="true"
              className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#520088]/10 text-[#520088]"
            >
              <svg className="h-[18px] w-[18px]" fill="none" viewBox="0 0 24 24">
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
            <p className="text-balance max-w-xl text-sm leading-relaxed font-semibold text-[#1a1a28] md:text-[15px]">
              ¿Tenés más de una sucursal? Te armamos una propuesta con descuento por volumen.
            </p>
          </div>

          <div className="mx-auto max-w-3xl space-y-2 text-center">
            <p className="text-balance text-sm leading-relaxed text-[#4d4353]">
              Los precios son por sucursal. Sucursales adicionales tienen descuento. Para más de 3
              sucursales, solicitá un presupuesto personalizado.
            </p>
            <p className="text-balance text-xs leading-relaxed text-[#9a8da3]">
              Las extracciones IA incluyen procesamiento de facturas o listas de precios. Los
              consumos adicionales pueden cotizarse aparte.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
