import { describe, expect, it } from "vitest";
import { curateProducts } from "./curate-products";
import type { Product } from "./types";

function product(id: string): Product {
  return {
    id,
    handle: id,
    title: id,
    description: "",
    availableForSale: true,
    featuredImage: null,
    price: { amount: "1", currencyCode: "EUR" },
    variants: [],
  };
}

describe("curateProducts", () => {
  it("limits the homepage selection to four products", () => {
    const products = ["1", "2", "3", "4", "5", "6"].map(product);

    expect(curateProducts(products).map(({ id }) => id)).toEqual(["1", "2", "3", "4"]);
  });

  it("keeps smaller selections unchanged", () => {
    const products = ["1", "2", "3"].map(product);

    expect(curateProducts(products)).toEqual(products);
  });
});
