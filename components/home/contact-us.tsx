import { Box, Button, Grid, GridCol, Group, Stack, Text, Title } from "@mantine/core";

export function ContactUs() {
  return (
    <Box
      component="section"
      id="kontakt"
      aria-labelledby="contact-title"
      bg="var(--color-canvas)"
      c="var(--color-ink)"
      px="clamp(1.25rem, 5vw, 5.5rem)"
      py="clamp(5rem, 9vw, 9rem)"
    >
      <Grid gutter={48} align="flex-end">
        <GridCol span={{ base: 12, sm: 7 }}>
          <Stack gap={0} align="flex-start">
            <Group gap="sm" mb={24}>
              <Box w={44} h={2} bg="var(--color-accent)" />
              <Text
                c="var(--color-muted)"
                fz="xs"
                fw={600}
                lts="0.14em"
                tt="uppercase"
              >
                Deine Idee. Unser nächstes Unikat.
              </Text>
            </Group>

            <Title
              id="contact-title"
              order={2}
              ff="var(--font-display)"
              fz="clamp(2.25rem, 3.5vw, 3.25rem)"
              fw={500}
              lh={1.05}
              lts="-0.035em"
              maw="11ch"
              tt="uppercase"
            >
              Du hast ein besonderes Teil?
            </Title>
          </Stack>
        </GridCol>

        <GridCol span={{ base: 12, sm: 5 }}>
          <Box maw="26rem" ml={{ base: 0, sm: "auto" }}>
            <Text lh={1.7}>
              Individuelle Anfragen sind willkommen. Gemeinsam finden wir heraus,
              welches neue Leben in deinem Autoteil steckt.
            </Text>

            <Button
              component="a"
              href="#footer-contact"
              color="dark"
              radius={0}
              size="md"
              mt={32}
              px={24}
              fz="xs"
              fw={700}
              lts="0.09em"
              tt="uppercase"
            >
              Kontaktmöglichkeiten
            </Button>
          </Box>
        </GridCol>
      </Grid>
    </Box>
  );
}
