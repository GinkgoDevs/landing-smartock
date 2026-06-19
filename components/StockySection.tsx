import Image from "next/image";

const highlights = [
  {
    title: "Consultá tu negocio",
    description: "Stock, ventas, clientes y cuentas corrientes desde WhatsApp.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
        <path
          d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.75"
        />
      </svg>
    ),
  },
  {
    title: "Cargá desde el chat",
    description: "Facturas y listas de precios en PDF, procesadas con IA.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
        <path
          d="M12 3v12m0 0 4-4m-4 4-4-4M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.75"
        />
      </svg>
    ),
  },
];

const benefits = [
  {
    label: "Consultá stock, ventas y productos",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-[18px] w-[18px]" aria-hidden="true">
        <path
          d="M3 3v18h18M7 16l4-4 4 4 5-6"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.75"
        />
      </svg>
    ),
  },
  {
    label: "Revisá clientes, cuentas corrientes y proveedores",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-[18px] w-[18px]" aria-hidden="true">
        <path
          d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm12 10v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.75"
        />
      </svg>
    ),
  },
  {
    label: "Cargá facturas desde WhatsApp",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-[18px] w-[18px]" aria-hidden="true">
        <path
          d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.75"
        />
        <path
          d="M14 2v6h6M16 13H8M16 17H8M10 9H8"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.75"
        />
      </svg>
    ),
  },
  {
    label: "Procesá listas de precios en PDF",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-[18px] w-[18px]" aria-hidden="true">
        <path
          d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.75"
        />
        <path
          d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.75"
        />
      </svg>
    ),
  },
];

export function StockySection() {
  return (
    <section
      id="stocky"
      className="relative scroll-mt-[78px] overflow-hidden bg-linear-to-b from-white via-[#fcf8ff] to-white py-10 md:py-16 lg:py-20"
      aria-labelledby="stocky-heading"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-1/2 h-64 w-[min(100%,720px)] -translate-x-1/2 rounded-full bg-[#520088]/4 blur-3xl"
      />

      <div className="container relative">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)] lg:gap-12 xl:gap-14">
          <div className="flex min-w-0 flex-col gap-5 lg:gap-6">
            <span className="inline-flex w-fit items-center rounded-full border border-[#520088]/12 bg-[#520088]/6 px-3.5 py-1.5 text-xs font-bold tracking-[0.06em] text-[#520088] uppercase">
              Asistente por WhatsApp
            </span>

            <div className="space-y-3">
              <h2
                className="text-[clamp(1.875rem,3.6vw,2.625rem)] leading-[1.1] font-extrabold tracking-[-0.04em] text-[#1a1a28]"
                id="stocky-heading"
              >
                Conocé a Stocky, tu asistente inteligente
              </h2>
              <p className="max-w-[54ch] text-base leading-relaxed text-[#4d4353] md:text-[17px]">
                Consultá y gestioná información de tu negocio directamente desde WhatsApp. Stocky te
                ayuda a revisar datos clave y también a cargar información sin salir del chat.
              </p>
            </div>

            <div className="grid gap-2.5 sm:grid-cols-2">
              {highlights.map((item) => (
                <article
                  className="group rounded-2xl border border-[#d0c2d5]/50 bg-white p-4 shadow-[0_8px_24px_rgba(26,26,40,0.04)] transition-all duration-200 ease-out hover:border-[#520088]/18 hover:shadow-[0_14px_32px_rgba(82,0,136,0.07)]"
                  key={item.title}
                >
                  <span className="mb-2.5 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-[#520088]/8 text-[#520088] transition-colors group-hover:bg-[#520088] group-hover:text-white">
                    {item.icon}
                  </span>
                  <h3 className="text-[15px] leading-snug font-extrabold text-[#1a1a28]">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-[#4d4353]">{item.description}</p>
                </article>
              ))}
            </div>

            <div className="grid gap-2.5 sm:grid-cols-2">
              {benefits.map((item) => (
                <div
                  className="flex items-start gap-3 rounded-xl border border-[#d0c2d5]/45 bg-white/90 px-3.5 py-3 transition-colors duration-200 hover:border-[#520088]/16 hover:bg-white"
                  key={item.label}
                >
                  <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#fcf8ff] text-[#520088] ring-1 ring-[#520088]/8">
                    {item.icon}
                  </span>
                  <p className="text-sm leading-snug font-semibold text-[#1a1a28]">{item.label}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-4 border-t border-[#d0c2d5]/40 pt-5 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm leading-relaxed font-bold text-[#1a1a28] md:text-[15px]">
                Menos carga manual, más agilidad para tu negocio.
              </p>
              <a
                className="inline-flex min-h-11 shrink-0 items-center justify-center rounded-[14px] bg-[#520088] px-6 text-sm font-extrabold !text-white shadow-[0_12px_28px_rgba(82,0,136,0.2)] transition-all duration-200 ease-out hover:bg-[#7209b7] hover:!text-white hover:shadow-[0_16px_34px_rgba(82,0,136,0.26)]"
                href="#agenda"
              >
                Agendá tu llamada
              </a>
            </div>
          </div>

          <div className="relative mx-auto flex w-full max-w-[400px] items-center justify-center lg:mx-0 lg:ml-auto lg:max-w-[420px]">
            <Image
              alt="Stocky, el asistente inteligente de Smartock, saludando"
              className="h-auto w-full max-h-[300px] object-contain lg:max-h-[460px]"
              height={600}
              priority={false}
              src="/brand/stocky-saludo.png"
              width={600}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
