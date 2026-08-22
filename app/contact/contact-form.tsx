"use client";

import { useActionState, useEffect, useRef } from "react";
import { useFormStatus } from "react-dom";
import {
  Alert,
  Box,
  Button,
  Checkbox,
  Grid,
  GridCol,
  NativeSelect,
  Stack,
  Textarea,
  TextInput,
} from "@mantine/core";
import { IconAlertCircle, IconCheck } from "@tabler/icons-react";
import {
  contactSubjects,
  type ContactFormState,
} from "@/lib/contact/validate-contact";
import { sendContactMessage } from "./actions";

const initialState: ContactFormState = {
  status: "idle",
  message: "",
  errors: {},
};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      color="dark"
      radius={0}
      size="lg"
      loading={pending}
      disabled={pending}
      fz="xs"
      fw={700}
      lts="0.09em"
      tt="uppercase"
    >
      {pending ? "Wird gesendet" : "Nachricht senden"}
    </Button>
  );
}

export function ContactForm() {
  const [state, formAction] = useActionState(sendContactMessage, initialState);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.status === "success") {
      formRef.current?.reset();
    }
  }, [state.status]);

  return (
    <Box component="form" action={formAction} ref={formRef} noValidate>
      <Stack gap="lg">
        <Grid gutter="md">
          <GridCol span={{ base: 12, sm: 6 }}>
            <TextInput
              name="name"
              label="Name"
              placeholder="Vor- und Nachname"
              autoComplete="name"
              required
              error={state.errors.name}
              radius={0}
              size="md"
              maxLength={100}
            />
          </GridCol>

          <GridCol span={{ base: 12, sm: 6 }}>
            <TextInput
              name="email"
              type="email"
              label="E-Mail"
              placeholder="name@beispiel.de"
              autoComplete="email"
              required
              error={state.errors.email}
              radius={0}
              size="md"
              maxLength={254}
            />
          </GridCol>
        </Grid>

        <Grid gutter="md">
          <GridCol span={{ base: 12, sm: 6 }}>
            <TextInput
              name="phone"
              type="tel"
              label="Telefon (optional)"
              placeholder="+49 …"
              autoComplete="tel"
              error={state.errors.phone}
              radius={0}
              size="md"
              maxLength={50}
            />
          </GridCol>

          <GridCol span={{ base: 12, sm: 6 }}>
            <NativeSelect
              name="subject"
              label="Anliegen"
              required
              error={state.errors.subject}
              radius={0}
              size="md"
              data={[
                { value: "", label: "Bitte auswählen" },
                ...contactSubjects.map((subject) => ({ value: subject, label: subject })),
              ]}
            />
          </GridCol>
        </Grid>

        <Textarea
          name="message"
          label="Nachricht"
          placeholder="Erzähl uns von deinem Autoteil oder deiner Idee."
          required
          error={state.errors.message}
          radius={0}
          size="md"
          minRows={7}
          maxLength={5000}
          autosize
        />

        <Checkbox
          name="privacy"
          label="Ich stimme zu, dass meine Angaben zur Bearbeitung der Anfrage verarbeitet werden."
          required
          error={state.errors.privacyAccepted}
          radius={0}
          value="on"
        />

        <Box
          pos="absolute"
          w={1}
          h={1}
          style={{ overflow: "hidden", clipPath: "inset(50%)" }}
          aria-hidden="true"
        >
          <TextInput
            name="website"
            label="Website"
            tabIndex={-1}
            autoComplete="off"
          />
        </Box>

        {state.status !== "idle" && (
          <Alert
            color={state.status === "success" ? "green" : "red"}
            icon={
              state.status === "success" ? (
                <IconCheck size={18} />
              ) : (
                <IconAlertCircle size={18} />
              )
            }
            radius={0}
            role="status"
            aria-live="polite"
          >
            {state.message}
          </Alert>
        )}

        <Box>
          <SubmitButton />
        </Box>
      </Stack>
    </Box>
  );
}
