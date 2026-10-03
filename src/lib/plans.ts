/** The Premium plans of the API contract: the `plan` a checkout names,
    the days it adds, and the standard price in euro. One place for the
    figures, read by the pages when the site is built and by the checkout
    script in the browser. The server charges the same prices; the
    checkout answer carries the amount, and the key panel shows it. */
export const plans = [
  { id: "month", name: "1 month", months: 1, days: 31, price: 5 },
  { id: "half_year", name: "6 months", months: 6, days: 183, price: 24 },
  { id: "year", name: "1 year", months: 12, days: 366, price: 36 },
] as const;

export type Plan = (typeof plans)[number];

/** What a plan comes to each month, at the standard price. */
export const perMonth = (plan: Plan): number => plan.price / plan.months;

/** The lowest monthly figure, as in "From 3 € a month". */
export const fromPerMonth = Math.min(...plans.map(perMonth));
