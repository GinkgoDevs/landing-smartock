export const planPricing = [
  {
    name: "Smart",
    monthlyPrices: [65_000, 117_000, 166_000],
    recommended: false,
    premium: false,
  },
  {
    name: "Pro",
    monthlyPrices: [85_000, 153_000, 217_000],
    recommended: true,
    premium: false,
  },
  {
    name: "IA Premium",
    monthlyPrices: [120_000, 216_000, 306_000],
    recommended: false,
    premium: true,
  },
] as const;

export const billingModes = {
  mensual: {
    id: "mensual",
    label: "Mensual",
    durationMonths: 1,
    paidMonths: 1,
    freeMonths: 0,
    benefit: null,
    description: "Pagá mes a mes por sucursal.",
  },
  semestral: {
    id: "semestral",
    label: "Semestral",
    durationMonths: 6,
    paidMonths: 5,
    freeMonths: 1,
    benefit: "1 mes gratis",
    description: "Pagá 5 meses y usá Smartock durante 6.",
  },
  anual: {
    id: "anual",
    label: "Anual",
    durationMonths: 12,
    paidMonths: 8,
    freeMonths: 4,
    benefit: "4 meses gratis",
    description: "Pagá 8 meses y usá Smartock durante 12.",
    recommended: true,
  },
} as const;

export type BillingModeId = keyof typeof billingModes;
export type BranchCount = 1 | 2 | 3;

export const billingModeOptions = [
  { value: "mensual" as const, label: "Mensual" },
  { value: "semestral" as const, label: "Semestral", hint: "1 mes gratis" },
  { value: "anual" as const, label: "Anual", hint: "4 meses gratis" },
];

export function formatArs(amount: number) {
  return `$${amount.toLocaleString("es-AR")}`;
}

export type BranchPriceDisplay = {
  total: number;
  effectiveMonthly: number;
  formatted: string;
  effectiveFormatted: string;
};

export function getBranchPriceDisplay(
  monthlyPrice: number,
  mode: BillingModeId,
): BranchPriceDisplay {
  const billingMode = billingModes[mode];
  const total = monthlyPrice * billingMode.paidMonths;
  const effectiveMonthly =
    mode === "mensual" ? monthlyPrice : Math.round(total / billingMode.durationMonths);

  return {
    total,
    effectiveMonthly,
    formatted: formatArs(total),
    effectiveFormatted: formatArs(effectiveMonthly),
  };
}

export function getPlanBranchPricing(planIndex: number, mode: BillingModeId) {
  const monthlyPrices = planPricing[planIndex].monthlyPrices;

  return {
    one: getBranchPriceDisplay(monthlyPrices[0], mode),
    two: getBranchPriceDisplay(monthlyPrices[1], mode),
    three: getBranchPriceDisplay(monthlyPrices[2], mode),
  };
}

export function getPricingTableCopy(mode: BillingModeId) {
  const billingMode = billingModes[mode];

  if (mode === "mensual") {
    return {
      title: "Precio mensual por cantidad de sucursales",
      footnote: "Smartock se cobra por sucursal · valores mensuales",
      headlineSuffix: "/ mes",
      referenceLabel: "Precio de referencia para 1 sucursal",
      rowSuffix: null as string | null,
    };
  }

  return {
    title: `Precio ${billingMode.label.toLowerCase()} por cantidad de sucursales`,
    footnote: `Pagás ${billingMode.paidMonths} meses y usás Smartock durante ${billingMode.durationMonths} · ${billingMode.benefit}`,
    headlineSuffix: `por ${billingMode.durationMonths} meses`,
    referenceLabel: "Total de referencia para 1 sucursal",
    rowSuffix: `por ${billingMode.durationMonths} meses`,
  };
}
