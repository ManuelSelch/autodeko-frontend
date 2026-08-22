export type ContactInput = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  privacyAccepted: boolean;
};

export type ContactField = keyof ContactInput;
export type ContactErrors = Partial<Record<ContactField, string>>;

export type ContactFormState = {
  status: "idle" | "success" | "error";
  message: string;
  errors: ContactErrors;
};

export const contactSubjects = [
  "Produktanfrage",
  "Eigenes Autoteil",
  "Sonderanfertigung",
  "Sonstiges",
] as const;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateContactInput(input: ContactInput): ContactErrors {
  const errors: ContactErrors = {};

  if (!input.name) {
    errors.name = "Bitte gib deinen Namen ein.";
  } else if (input.name.length > 100) {
    errors.name = "Der Name darf höchstens 100 Zeichen enthalten.";
  }

  if (!input.email) {
    errors.email = "Bitte gib deine E-Mail-Adresse ein.";
  } else if (input.email.length > 254 || !emailPattern.test(input.email)) {
    errors.email = "Bitte gib eine gültige E-Mail-Adresse ein.";
  }

  if (input.phone.length > 50) {
    errors.phone = "Die Telefonnummer darf höchstens 50 Zeichen enthalten.";
  }

  if (!input.subject) {
    errors.subject = "Bitte wähle ein Anliegen aus.";
  } else if (!contactSubjects.some((subject) => subject === input.subject)) {
    errors.subject = "Bitte wähle ein gültiges Anliegen aus.";
  }

  if (!input.message) {
    errors.message = "Bitte beschreibe dein Anliegen.";
  } else if (input.message.length < 10) {
    errors.message = "Deine Nachricht muss mindestens 10 Zeichen enthalten.";
  } else if (input.message.length > 5000) {
    errors.message = "Deine Nachricht darf höchstens 5.000 Zeichen enthalten.";
  }

  if (!input.privacyAccepted) {
    errors.privacyAccepted = "Bitte bestätige die Verarbeitung deiner Angaben.";
  }

  return errors;
}
