"use server";

import { Resend } from "resend";
import api from "@/lib/api";
import { parseProductHandle } from "@/lib/contact/product-inquiry";
import {
  type ContactFormState,
  type ContactInput,
  validateContactInput,
} from "@/lib/contact/validate-contact";

function formValue(formData: FormData, key: string) {
  return String(formData.get(key) ?? "").trim();
}

export async function sendContactMessage(
  _previousState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const productHandle = parseProductHandle(formValue(formData, "productHandle"));
  const input: ContactInput = {
    name: formValue(formData, "name"),
    email: formValue(formData, "email").toLowerCase(),
    phone: formValue(formData, "phone"),
    subject: formValue(formData, "subject"),
    message: formValue(formData, "message"),
    privacyAccepted: formData.get("privacy") === "on",
  };

  // Honeypot fields are invisible to people but commonly filled by bots.
  if (formValue(formData, "website")) {
    return {
      status: "success",
      message: "Vielen Dank. Deine Nachricht wurde übermittelt.",
      errors: {},
    };
  }

  const errors = validateContactInput(input);
  if (Object.keys(errors).length > 0) {
    return {
      status: "error",
      message: "Bitte überprüfe die markierten Felder.",
      errors,
    };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.RESEND_FROM_EMAIL;
  const toEmail = process.env.CONTACT_TO_EMAIL;

  if (!apiKey || !fromEmail || !toEmail) {
    console.error("Contact form is missing Resend environment variables.");
    return {
      status: "error",
      message: "Der Nachrichtenversand ist derzeit nicht verfügbar. Bitte versuche es später erneut.",
      errors: {},
    };
  }

  try {
    const product = productHandle ? await api.getProduct(productHandle) : null;
    const productUrl = productHandle
      ? `https://autodeko.shop/products/${encodeURIComponent(productHandle)}`
      : null;
    const productLines = productHandle
      ? [
          `Produkt: ${product?.title ?? productHandle}`,
          `Produkt-Handle: ${productHandle}`,
          `Produkt-URL: ${productUrl}`,
        ]
      : [];
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: input.email,
      subject: productHandle
        ? `Auto Deko Produktanfrage: ${product?.title ?? productHandle}`
        : `Auto Deko Kontakt: ${input.subject}`,
      text: [
        `Name: ${input.name}`,
        `E-Mail: ${input.email}`,
        `Telefon: ${input.phone || "Nicht angegeben"}`,
        `Anliegen: ${input.subject}`,
        ...productLines,
        "",
        input.message,
      ].join("\n"),
    });

    if (error) {
      console.error("Resend contact form error:", error);
      return {
        status: "error",
        message: "Die Nachricht konnte nicht gesendet werden. Bitte versuche es später erneut.",
        errors: {},
      };
    }

    return {
      status: "success",
      message: "Vielen Dank. Deine Nachricht wurde erfolgreich übermittelt.",
      errors: {},
    };
  } catch (error) {
    console.error("Unexpected contact form error:", error);
    return {
      status: "error",
      message: "Die Nachricht konnte nicht gesendet werden. Bitte versuche es später erneut.",
      errors: {},
    };
  }
}
