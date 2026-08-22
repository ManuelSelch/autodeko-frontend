import "server-only";
import { createStorefrontClient } from "./storefront";

function requiredEnvironmentVariable(name: string): string {
  const value = process.env[name];

  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }

  return value;
}

export function getShopifyStorefront() {
  return createStorefrontClient({
    storeDomain: requiredEnvironmentVariable("SHOPIFY_STORE_DOMAIN"),
    privateToken: requiredEnvironmentVariable("SHOPIFY_STOREFRONT_PRIVATE_TOKEN"),
    apiVersion: process.env.SHOPIFY_STOREFRONT_API_VERSION ?? "2026-04",
  });
}

export type {
  Money,
  Product,
  ProductDetails,
  ProductImage,
  ProductVariant,
} from "./types";
