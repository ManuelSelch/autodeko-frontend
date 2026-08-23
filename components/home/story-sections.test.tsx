import { MantineProvider } from "@mantine/core";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import { StorySections } from "./story-sections";

describe("StorySections", () => {
  it("shows contact button on the second story (clock_woman)", () => {
    const markup = renderToStaticMarkup(
      <MantineProvider>
        <StorySections />
      </MantineProvider>,
    );

    expect(markup).toContain("Kontaktmöglichkeiten");
    expect(markup).toContain('href="/contact"');
  });

  it("shows inquiry button on the first story (bestseller)", () => {
    const markup = renderToStaticMarkup(
      <MantineProvider>
        <StorySections />
      </MantineProvider>,
    );

    expect(markup).toContain("Anfragen");
    expect(markup).toContain(
      'href="/products/asset-pack-101507563522-example-product-2',
    );
  });
});
