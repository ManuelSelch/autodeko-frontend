import { readFileSync } from "node:fs";
import { MantineProvider } from "@mantine/core";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import type { Product } from "@/lib/shopify/types";
import { ProductCard } from "./product-showcase";

const styles = readFileSync(
  new URL("./product-showcase.module.css", import.meta.url),
  "utf8",
);

const product: Product = {
  id: "gid://shopify/Product/1",
  handle: "ferrari-carbon-keramik-gelb",
  title: "Ferrari Carbon Keramik Gelb",
  description: "",
  availableForSale: true,
  featuredImage: null,
  price: { amount: "249.00", currencyCode: "EUR" },
  variants: [],
};

describe("ProductCard", () => {
  it("reveals the details action only while a touch card is active", () => {
    expect(styles).toContain("@media (hover: none), (pointer: coarse)");
    expect(styles).toContain(".productCard:active .detailsButton");
  });

  it("offers a details action that links to the product page", () => {
    const markup = renderToStaticMarkup(
      <MantineProvider>
        <ProductCard product={product} />
      </MantineProvider>,
    );

    expect(markup).toContain('href="/products/ferrari-carbon-keramik-gelb"');
    expect(markup).toContain("Details");
    expect(markup).toContain(
      'aria-label="Details zu Ferrari Carbon Keramik Gelb"',
    );
    expect(markup).not.toContain("/contact?product=");
    expect(markup).not.toContain("Anfragen");
  });
});
