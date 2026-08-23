import { MantineProvider } from "@mantine/core";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import { PageBreadcrumbs } from "./page-breadcrumbs";

describe("PageBreadcrumbs", () => {
  it("links to the home page and marks the current page", () => {
    const markup = renderToStaticMarkup(
      <MantineProvider>
        <PageBreadcrumbs currentPage="Kontakt" />
      </MantineProvider>,
    );

    expect(markup).toContain('aria-label="Brotkrümelnavigation"');
    expect(markup).toContain('href="/"');
    expect(markup).toContain("Home");
    expect(markup).toContain('aria-current="page"');
    expect(markup).toContain("Kontakt");
  });

  it("supports a custom parent link for product pages", () => {
    const markup = renderToStaticMarkup(
      <MantineProvider>
        <PageBreadcrumbs
          currentPage="Ferrari Uhr"
          parent={{ href: "/#produkte", label: "Produkte" }}
        />
      </MantineProvider>,
    );

    expect(markup).toContain('href="/#produkte"');
    expect(markup).toContain("Produkte");
    expect(markup).toContain("Ferrari Uhr");
  });
});
