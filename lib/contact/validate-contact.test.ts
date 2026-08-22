import { describe, expect, it } from "vitest";
import { validateContactInput } from "./validate-contact";

const validInput = {
  name: "Max Mustermann",
  email: "max@example.com",
  phone: "",
  subject: "Produktanfrage",
  message: "Ich interessiere mich für eine individuelle Bremsscheibenuhr.",
  privacyAccepted: true,
};

describe("validateContactInput", () => {
  it("accepts a complete contact request", () => {
    expect(validateContactInput(validInput)).toEqual({});
  });

  it("rejects empty required fields and missing consent", () => {
    expect(
      validateContactInput({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        privacyAccepted: false,
      }),
    ).toEqual({
      name: "Bitte gib deinen Namen ein.",
      email: "Bitte gib deine E-Mail-Adresse ein.",
      subject: "Bitte wähle ein Anliegen aus.",
      message: "Bitte beschreibe dein Anliegen.",
      privacyAccepted: "Bitte bestätige die Verarbeitung deiner Angaben.",
    });
  });

  it("rejects malformed email addresses", () => {
    expect(validateContactInput({ ...validInput, email: "keine-email" })).toMatchObject({
      email: "Bitte gib eine gültige E-Mail-Adresse ein.",
    });
  });

  it("rejects fields that exceed their limits", () => {
    const errors = validateContactInput({
      ...validInput,
      name: "a".repeat(101),
      email: `${"a".repeat(245)}@example.com`,
      phone: "1".repeat(51),
      message: "a".repeat(5001),
    });

    expect(errors.name).toBeDefined();
    expect(errors.email).toBeDefined();
    expect(errors.phone).toBeDefined();
    expect(errors.message).toBeDefined();
  });
});
