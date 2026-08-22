import { Anchor, Box, Divider, Grid, GridCol, Group, Image, Stack, Text } from "@mantine/core";
import logo from "@/img/logo.png";

export default function Footer() {
  return (
    <Box
      component="footer"
      id="footer-contact"
      bg="var(--color-paper)"
      c="var(--color-ink)"
      style={{ borderTop: "1px solid var(--color-line)" }}
    >
      <Box
        maw="100rem"
        mih={230}
        mx="auto"
        px="clamp(1.25rem, 4vw, 4rem)"
        pt={56}
        pb={32}
      >
        <Grid gutter={48} align="flex-start">
          <GridCol span={{ base: 12, sm: 7 }}>
            <Image
              src={logo.src}
              alt="Auto Deko Handmade"
              fit="contain"
              h={144}
              w={144}
            />
          </GridCol>

          <GridCol span={{ base: 12, sm: 5 }}>
            <Stack gap={10} align="flex-start">
              <Text
                c="var(--color-muted)"
                fz="0.7rem"
                fw={600}
                lts="0.11em"
                mb={6}
                tt="uppercase"
              >
                Kontakt
              </Text>
              <Text>Individuelle Anfragen und Auftragsarbeiten</Text>
              <Anchor
                href="/contact"
                c="var(--color-ink)"
                fw={600}
                underline="hover"
              >
                Zum Kontaktformular
              </Anchor>
            </Stack>
          </GridCol>
        </Grid>
      </Box>

      <Box maw="100rem" mx="auto" px="clamp(1.25rem, 4vw, 4rem)" py={20}>
        <Divider color="var(--color-line)" mb={20} />
        <Group justify="space-between" gap={16} wrap="wrap">
          <Text c="var(--color-muted)" fz="xs">
            © {new Date().getFullYear()} Auto Deko
          </Text>
          <Text c="var(--color-muted)" fz="xs">
            Handgefertigte Einzelstücke aus Autoteilen
          </Text>
        </Group>
      </Box>
    </Box>
  );
}
