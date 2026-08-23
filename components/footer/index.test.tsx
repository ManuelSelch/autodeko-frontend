import { MantineProvider } from "@mantine/core";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import Footer from "./index";

describe("Footer", () => {
  it("shows the logo and accessible social, contact, and legal links", () => {
    const markup = renderToStaticMarkup(
      <MantineProvider>
        <Footer />
      </MantineProvider>,
    );

    expect(markup).toContain('alt="Auto Deko Handmade"');
    expect(markup).toContain('aria-label="Auto Deko auf Instagram"');
    expect(markup).toContain('aria-label="Kontaktformular öffnen"');
    expect(markup).toContain('href="/contact"');
    expect(markup).toContain('href="/imprint"');
    expect(markup).toContain("Impressum");
    expect(markup).toContain('href="/privacy"');
    expect(markup).toContain("Datenschutz");
    expect(markup.match(/font-weight:400/g)).toHaveLength(2);
    expect(markup.match(/<a\b/g)).toHaveLength(4);
    expect(markup).not.toContain("Individuelle Anfragen");
    expect(markup).not.toContain("Handgefertigte Einzelstücke");
  });
});
