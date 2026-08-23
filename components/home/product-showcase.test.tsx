import { MantineProvider } from "@mantine/core";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import type { Product } from "@/lib/shopify/types";
import { ProductCard } from "./product-showcase";

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
  it("offers a contextual inquiry action in addition to the product link", () => {
    const markup = renderToStaticMarkup(
      <MantineProvider>
        <ProductCard product={product} />
      </MantineProvider>,
    );

    expect(markup).toContain('href="/products/ferrari-carbon-keramik-gelb"');
    expect(markup).toContain(
      'href="/contact?product=ferrari-carbon-keramik-gelb"',
    );
    expect(markup).toContain("Anfragen");
    expect(markup).toContain(
      'aria-label="Ferrari Carbon Keramik Gelb anfragen"',
    );
  });
});
