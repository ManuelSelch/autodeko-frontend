import type { Money } from "./types";

export function formatMoney({ amount, currencyCode }: Money): string {
  return new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: currencyCode,
  }).format(Number(amount));
}
