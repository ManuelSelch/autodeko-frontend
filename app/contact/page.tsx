import type { Metadata } from "next";
import { Box, Grid, GridCol, Group, Stack, Text, Title } from "@mantine/core";
import { ContactForm } from "./contact-form";

export const metadata: Metadata = {
  title: "Kontakt | Auto Deko",
  description:
    "Kontaktiere Auto Deko für Produktanfragen, individuelle Autoteile und handgefertigte Sonderanfertigungen.",
};

export default function ContactPage() {
  return (
    <Box
      component="main"
      bg="var(--color-canvas)"
      c="var(--color-ink)"
      mih="100vh"
      px="clamp(1.25rem, 5vw, 5.5rem)"
      py="clamp(4rem, 8vw, 8rem)"
    >
      <Grid gutter="clamp(3rem, 7vw, 8rem)" maw="92rem" mx="auto" align="flex-start">
        <GridCol span={{ base: 12, md: 5 }}>
          <Stack gap={0} maw="34rem">
            <Group gap="sm" mb={24}>
              <Box w={44} h={2} bg="var(--color-accent)" />
              <Text
                c="var(--color-muted)"
                fz="xs"
                fw={600}
                lts="0.14em"
                tt="uppercase"
              >
                Kontakt
              </Text>
            </Group>

            <Title
              order={1}
              ff="var(--font-display)"
              fz="clamp(2.75rem, 5vw, 5rem)"
              fw={500}
              lh={0.98}
              lts="-0.04em"
              maw="10ch"
              tt="uppercase"
            >
              Lass uns etwas Einzigartiges bauen.
            </Title>

            <Text c="var(--color-muted)" fz="1.05rem" lh={1.75} maw="31rem" mt={32}>
              Du hast ein besonderes Fahrzeugteil, eine Produktfrage oder eine Idee
              für eine Sonderanfertigung? Beschreibe uns dein Projekt – wir melden
              uns persönlich bei dir.
            </Text>

            <Text c="var(--color-muted)" fz="sm" lh={1.6} mt={24}>
              In der Regel beantworten wir Anfragen innerhalb weniger Werktage.
            </Text>
          </Stack>
        </GridCol>

        <GridCol span={{ base: 12, md: 7 }}>
          <Box bg="var(--color-paper)" p="clamp(1.5rem, 4vw, 4rem)">
            <ContactForm />
          </Box>
        </GridCol>
      </Grid>
    </Box>
  );
}
