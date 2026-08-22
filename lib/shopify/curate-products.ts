import type { Product } from "./types";

const HOMEPAGE_PRODUCT_LIMIT = 4;

export function curateProducts(products: Product[]): Product[] {
  return products.slice(0, HOMEPAGE_PRODUCT_LIMIT);
}
