"use client";

import { useState } from "react";
import { SectionLabel } from "@/components/SectionLabel";
import {
  billingModes,
  branchOptions,
  formatArs,
  getBillingTotals,
  getMonthlyPrice,
  planPricing,
  type BillingModeId,
  type BranchCount,
} from "@/lib/pricing";

function SegmentedControl<T extends string | number>({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: T;
  options: { value: T; label: string; hint?: string }[];
  onChange: (value: T) => void;
}) {
  return (
    <div className="space-y-2">
      <p className="text-[11px] font-extrabold tracking-[0.08em] text-[#520088] uppercase">
        {label}
      </p>
      <div
        className="grid gap-1 rounded-2xl border border-[#d0c2d5]/55 bg-[#faf8fc]/90 p-1"
        style={{ gridTemplateColumns: `repeat(${options.length}, minmax(0, 1fr))` }}
      >
        {options.map((option) => {
          const isActive = option.value === value;

          return (
            <button
              className={[
                "min-h-11 rounded-[14px] px-3 py-2 text-center transition-all duration-200 ease-out",
                isActive
                  ? "bg-[#520088] text-white shadow-[0_8px_20px_rgba(82,0,136,0.22)]"
                  : "text-[#4d4353] hover:bg-white/80 hover:text-[#1a1a28]",
              ].join(" ")}
              key={String(option.value)}
              onClick={() => onChange(option.value)}
              type="button"
            >
              <span className="block text-sm font-extrabold">{option.label}</span>
              {option.hint ? (
                <span
                  className={[
                    "mt-0.5 block text-[10px] font-semibold",
                    isActive ? "text-white/75" : "text-[#9a8da3]",
                  ].join(" ")}
                >
                  {option.hint}
                </span>
              ) : null}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export function BillingPlansSection() {
  const [billingMode, setBillingMode] = useState<BillingModeId>("anual");
  const [branches, setBranches] = useState<BranchCount>(1);

  const selectedMode = billingModes[billingMode];
  const branchLabel = branchOptions.find((option) => option.value === branches)?.label ?? "";

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
            Calculá tu plan semestral o anual
          </h2>
          <p className="text-balance mt-3 text-base leading-relaxed text-[#4d4353] md:text-[17px]">
            Elegí el período, la cantidad de sucursales y compará el precio de cada plan con meses
            bonificados incluidos.
          </p>
        </div>

        <div className="mx-auto max-w-4xl rounded-[24px] border border-[#d0c2d5]/55 bg-white/90 p-5 shadow-[0_20px_48px_rgba(26,26,40,0.06)] sm:p-6 lg:p-7">
          <div className="grid gap-4 md:grid-cols-2">
            <SegmentedControl
              label="Período de facturación"
              onChange={setBillingMode}
              options={[
                {
                  value: "semestral" as const,
                  label: "Semestral",
                  hint: "1 mes gratis",
                },
                {
                  value: "anual" as const,
                  label: "Anual",
                  hint: "4 meses gratis",
                },
              ]}
              value={billingMode}
            />

            <SegmentedControl
              label="Cantidad de sucursales"
              onChange={setBranches}
              options={branchOptions.map((option) => ({
                value: option.value,
                label: option.label,
              }))}
              value={branches}
            />
          </div>

          <div className="mt-5 rounded-2xl border border-[#520088]/12 bg-linear-to-r from-[#fcf8ff] via-white to-[#f2e8ff] px-4 py-4 sm:px-5">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-[11px] font-extrabold tracking-[0.08em] text-[#520088] uppercase">
                  Plan {selectedMode.label.toLowerCase()}
                </p>
                <p className="mt-1 text-sm font-bold text-[#1a1a28]">{selectedMode.description}</p>
              </div>
              <span className="inline-flex w-fit items-center rounded-full bg-[#520088] px-3 py-1 text-[11px] font-extrabold tracking-[0.04em] text-white uppercase">
                {selectedMode.benefit}
              </span>
            </div>
          </div>

          <div className="mt-5 overflow-hidden rounded-2xl border border-[#d0c2d5]/50">
            {planPricing.map((plan, index) => {
              const monthlyPrice = getMonthlyPrice(index, branches);
              const totals = getBillingTotals(monthlyPrice, billingMode);
              const isRecommended = plan.recommended;

              return (
                <article
                  className={[
                    "flex flex-col gap-3 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-5",
                    index > 0 ? "border-t border-[#d0c2d5]/45" : "",
                    isRecommended ? "bg-[#520088]/4" : "bg-white/80",
                  ].join(" ")}
                  key={plan.name}
                >
                  <div className="min-w-0 space-y-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-base font-extrabold text-[#1a1a28]">Plan {plan.name}</h3>
                      {isRecommended ? (
                        <span className="rounded-full bg-[#520088] px-2.5 py-0.5 text-[10px] font-extrabold tracking-[0.04em] text-white uppercase">
                          Recomendado
                        </span>
                      ) : null}
                      {plan.premium ? (
                        <span className="rounded-full border border-[#520088]/15 bg-[#520088]/6 px-2.5 py-0.5 text-[10px] font-extrabold tracking-[0.04em] text-[#520088] uppercase">
                          Más potente
                        </span>
                      ) : null}
                    </div>
                    <p className="text-sm text-[#6b5f72]">
                      {branchLabel} · {formatArs(totals.effectiveMonthly)}/mes efectivo
                    </p>
                    <p className="text-[11px] font-medium text-[#9a8da3]">
                      Pagás {totals.paidMonths} meses y usás Smartock durante {totals.durationMonths}
                    </p>
                  </div>

                  <div className="text-left sm:text-right">
                    <p className="text-[clamp(1.25rem,3vw,1.625rem)] font-black tracking-[-0.04em] text-[#520088]">
                      {formatArs(totals.total)}
                    </p>
                    <p className="text-[11px] font-semibold text-[#9a8da3]">
                      total por {totals.durationMonths} meses
                    </p>
                  </div>
                </article>
              );
            })}
          </div>

          <p className="mt-4 text-center text-[11px] font-medium text-[#9a8da3]">
            Referencia mensual para {branchLabel.toLowerCase()}: Smart{" "}
            {formatArs(getMonthlyPrice(0, branches))} · Pro {formatArs(getMonthlyPrice(1, branches))}{" "}
            · IA Premium {formatArs(getMonthlyPrice(2, branches))}
          </p>

          <a
            className="mt-5 inline-flex min-h-11 w-full items-center justify-center rounded-[14px] bg-[#520088] px-5 text-sm font-extrabold !text-white shadow-[0_12px_28px_rgba(82,0,136,0.2)] transition-all duration-200 ease-out hover:bg-[#7209b7] hover:!text-white"
            href="#agenda"
          >
            Quiero el plan {selectedMode.label.toLowerCase()} para {branchLabel.toLowerCase()}
          </a>
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
