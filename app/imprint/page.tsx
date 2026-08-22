import type { Metadata } from "next";
import { Anchor, Box, Divider, Stack, Text, Title } from "@mantine/core";

export const metadata: Metadata = {
  title: "Impressum | Auto Deko",
  description: "Anbieterkennzeichnung und Kontaktinformationen von Auto Deko.",
};

export default function ImprintPage() {
  return (
    <Box
      component="main"
      bg="var(--color-canvas)"
      c="var(--color-ink)"
      mih="100vh"
      px="clamp(1.25rem, 5vw, 5.5rem)"
      py="clamp(4rem, 8vw, 8rem)"
    >
      <Box maw="52rem" mx="auto">
        <Text
          c="var(--color-accent)"
          fz="xs"
          fw={700}
          lts="0.12em"
          mb={20}
          tt="uppercase"
        >
          Rechtliches
        </Text>

        <Title
          order={1}
          ff="var(--font-display)"
          fz="clamp(2.75rem, 6vw, 5.5rem)"
          fw={500}
          lh={0.98}
          lts="-0.04em"
          tt="uppercase"
        >
          Impressum
        </Title>

        <Box bg="var(--color-paper)" mt="clamp(2.5rem, 6vw, 5rem)" p="clamp(1.5rem, 4vw, 4rem)">
          <Stack gap={32}>
            <Box component="section" aria-labelledby="provider-heading">
              <Title id="provider-heading" order={2} fz="lg" mb={12}>
                Angaben gemäß § 5 DDG
              </Title>
              <Text lh={1.75}>
                Auto Deko
                <br />
                Inhaber: Marco Selch und David Kokai
                <br />
                Wolfsbacherstraße 26
                <br />
                95458 Bayreuth
              </Text>
            </Box>

            <Divider color="var(--color-line)" />

            <Box component="section" aria-labelledby="contact-heading">
              <Title id="contact-heading" order={2} fz="lg" mb={12}>
                Kontakt
              </Title>
              <Text c="var(--color-muted)" lh={1.75}>
                Für Fragen und Anliegen nutze bitte unser{" "}
                <Anchor
                  component="a"
                  href="/contact"
                  c="var(--color-ink)"
                  fw={600}
                  underline="always"
                >
                  Kontaktformular
                </Anchor>
                .
              </Text>
            </Box>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}
