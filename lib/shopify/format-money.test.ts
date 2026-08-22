import { describe, expect, it } from "vitest";
import { formatMoney } from "./format-money";

describe("formatMoney", () => {
  it("formats Shopify amounts for the German storefront", () => {
    expect(formatMoney({ amount: "129.90", currencyCode: "EUR" })).toBe("129,90 €");
  });

  it("keeps the currency supplied by Shopify", () => {
    expect(formatMoney({ amount: "42", currencyCode: "USD" })).toContain("$");
  });
});
