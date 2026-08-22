import { MantineProvider } from "@mantine/core";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import Footer from "./index";

describe("Footer", () => {
  it("shows only the logo and accessible Instagram and contact links", () => {
    const markup = renderToStaticMarkup(
      <MantineProvider>
        <Footer />
      </MantineProvider>,
    );

    expect(markup).toContain('alt="Auto Deko Handmade"');
    expect(markup).toContain('aria-label="Auto Deko auf Instagram"');
    expect(markup).toContain('aria-label="Kontaktformular öffnen"');
    expect(markup).toContain('href="/contact"');
    expect(markup.match(/<a\b/g)).toHaveLength(2);
    expect(markup).not.toContain("Individuelle Anfragen");
    expect(markup).not.toContain("Handgefertigte Einzelstücke");
  });
});
