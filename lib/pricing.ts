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

export const branchOptions: { value: BranchCount; label: string }[] = [
  { value: 1, label: "1 sucursal" },
  { value: 2, label: "2 sucursales" },
  { value: 3, label: "3 sucursales" },
];

export function formatArs(amount: number) {
  return `$${amount.toLocaleString("es-AR")}`;
}

export function getMonthlyPrice(planIndex: number, branches: BranchCount) {
  return planPricing[planIndex].monthlyPrices[branches - 1];
}

export function getBillingTotals(monthlyPrice: number, mode: BillingModeId) {
  const billingMode = billingModes[mode];
  const total = monthlyPrice * billingMode.paidMonths;
  const effectiveMonthly = Math.round(total / billingMode.durationMonths);

  return {
    total,
    effectiveMonthly,
    durationMonths: billingMode.durationMonths,
    paidMonths: billingMode.paidMonths,
    freeMonths: billingMode.freeMonths,
  };
}
