import { MantineProvider } from "@mantine/core";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import PrivacyPage, { metadata } from "./page";

describe("PrivacyPage", () => {
  it("provides German privacy metadata", () => {
    expect(metadata.title).toBe("Datenschutz | Auto Deko");
  });

  it("explains the relevant processing and data-subject rights", () => {
    const markup = renderToStaticMarkup(
      <MantineProvider>
        <PrivacyPage />
      </MantineProvider>,
    );

    expect(markup).toContain("Datenschutzerklärung");
    expect(markup).toContain("font-size:clamp(2.25rem, 4vw, 4rem)");
    expect(markup).toContain("Verantwortlicher");
    expect(markup).toContain("Marco Selch");
    expect(markup).toContain("David Kokai");
    expect(markup).toContain("Wolfsbacherstraße 26");
    expect(markup).toContain("Kontaktformular");
    expect(markup).toContain("Resend");
    expect(markup).toContain("Server-Logfiles");
    expect(markup).toContain("Deine Rechte");
    expect(markup).toContain('href="/contact"');
  });
});
