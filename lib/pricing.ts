export const branchVolumeDiscounts = {
  second: 0.15,
  third: 0.2,
} as const;

export const planPricing = [
  {
    name: "Smart",
    listMonthlyPrice: 65_000,
    launchDiscountPercent: 10,
    recommended: false,
    premium: false,
  },
  {
    name: "Pro",
    listMonthlyPrice: 85_000,
    launchDiscountPercent: 15,
    recommended: true,
    premium: false,
  },
  {
    name: "IA Premium",
    listMonthlyPrice: 120_000,
    launchDiscountPercent: 30,
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

export function roundMoney(amount: number) {
  return Math.round(amount * 100) / 100;
}

export function formatArs(amount: number) {
  const value = roundMoney(amount);
  const hasDecimals = !Number.isInteger(value);

  return `$${value.toLocaleString("es-AR", {
    minimumFractionDigits: hasDecimals ? 2 : 0,
    maximumFractionDigits: 2,
  })}`;
}

export function getPromotionalUnitPrice(
  listMonthlyPrice: number,
  launchDiscountPercent: number,
) {
  return roundMoney(listMonthlyPrice * (1 - launchDiscountPercent / 100));
}

export function getBranchMonthlyTotals(promotionalUnitPrice: number) {
  const second = roundMoney(
    promotionalUnitPrice * (1 - branchVolumeDiscounts.second),
  );
  const third = roundMoney(
    promotionalUnitPrice * (1 - branchVolumeDiscounts.third),
  );

  return [
    promotionalUnitPrice,
    roundMoney(promotionalUnitPrice + second),
    roundMoney(promotionalUnitPrice + second + third),
  ] as const;
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
  const total = roundMoney(monthlyPrice * billingMode.paidMonths);
  const effectiveMonthly =
    mode === "mensual"
      ? monthlyPrice
      : roundMoney(total / billingMode.durationMonths);

  return {
    total,
    effectiveMonthly,
    formatted: formatArs(total),
    effectiveFormatted: formatArs(effectiveMonthly),
  };
}

export function getPlanPricing(planIndex: number) {
  const plan = planPricing[planIndex];
  const promotionalUnitPrice = getPromotionalUnitPrice(
    plan.listMonthlyPrice,
    plan.launchDiscountPercent,
  );
  const monthlyPrices = getBranchMonthlyTotals(promotionalUnitPrice);

  return {
    ...plan,
    promotionalUnitPrice,
    monthlyPrices,
    listFormatted: formatArs(plan.listMonthlyPrice),
    promotionalFormatted: formatArs(promotionalUnitPrice),
  };
}

export function getPlanBranchPricing(planIndex: number, mode: BillingModeId) {
  const { monthlyPrices } = getPlanPricing(planIndex);

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
      footnote:
        "1ª al precio promo · 2ª con 15% OFF · 3ª con 20% OFF · valores mensuales",
      headlineSuffix: "/ mes",
      referenceLabel: "Precio promocional para 1 sucursal",
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
