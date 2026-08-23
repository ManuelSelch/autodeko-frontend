import { ActionIcon, Anchor, Box, Group, Image } from "@mantine/core";
import { IconBrandInstagram, IconMail } from "@tabler/icons-react";
import logo from "@/img/logo.png";

export default function Footer() {
  return (
    <Box
      component="footer"
      bg="var(--color-paper)"
      c="var(--color-ink)"
      style={{ borderTop: "1px solid var(--color-line)" }}
    >
      <Group
        justify="space-between"
        wrap="nowrap"
        maw="100rem"
        mx="auto"
        px="clamp(1.25rem, 4vw, 4rem)"
        py={{ base: 14, sm: 20 }}
      >
        <Image
          src={logo.src}
          alt="Auto Deko Handmade"
          fit="contain"
          h={{ base: 64, sm: 80 }}
          w={{ base: 64, sm: 80 }}
        />

        <Group gap={8} wrap="nowrap">
          <Anchor
            component="a"
            href="/imprint"
            c="var(--color-ink)"
            fz="xs"
            lts="0.06em"
            style={{ fontWeight: 400 }}
            tt="uppercase"
            underline="hover"
          >
            Impressum
          </Anchor>
          <Anchor
            component="a"
            href="/privacy"
            c="var(--color-ink)"
            fz="xs"
            lts="0.06em"
            style={{ fontWeight: 400 }}
            tt="uppercase"
            underline="hover"
          >
            Datenschutz
          </Anchor>
          <ActionIcon
            component="a"
            href="https://www.instagram.com/auto_deko"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Auto Deko auf Instagram"
            variant="subtle"
            color="dark"
            radius="xl"
            size={44}
          >
            <IconBrandInstagram size={24} stroke={1.7} aria-hidden="true" />
          </ActionIcon>
          <ActionIcon
            component="a"
            href="/contact"
            aria-label="Kontaktformular öffnen"
            variant="subtle"
            color="dark"
            radius="xl"
            size={44}
          >
            <IconMail size={24} stroke={1.7} aria-hidden="true" />
          </ActionIcon>
        </Group>
      </Group>
    </Box>
  );
}
