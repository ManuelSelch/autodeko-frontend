import { MantineProvider } from "@mantine/core";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import ImprintPage, { metadata } from "./page";

describe("ImprintPage", () => {
  it("provides page metadata", () => {
    expect(metadata.title).toBe("Impressum | Auto Deko");
  });

  it("shows the provider details and a contact link", () => {
    const markup = renderToStaticMarkup(
      <MantineProvider>
        <ImprintPage />
      </MantineProvider>,
    );

    expect(markup).toContain("Impressum");
    expect(markup).toContain("Angaben gemäß § 5 DDG");
    expect(markup).toContain("Auto Deko");
    expect(markup).toContain("Marco Selch");
    expect(markup).toContain("David Kokai");
    expect(markup).toContain("Wolfsbacherstraße 26");
    expect(markup).toContain("95458 Bayreuth");
    expect(markup).toContain('href="/contact"');
  });
});
