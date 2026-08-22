import { Box, Button, Text, Title } from "@mantine/core";

export default function ProductNotFound() {
  return (
    <Box
      component="main"
      mih="100vh"
      bg="var(--color-paper)"
      px="clamp(1.25rem, 5vw, 5rem)"
      pt="clamp(2rem, 5vw, 5rem)"
      pb="clamp(5rem, 9vw, 9rem)"
    >
      <Box component="section" maw="42rem" mx="auto" py="clamp(4rem, 10vw, 10rem)">
        <Text
          c="var(--color-accent)"
          fz="xs"
          fw={600}
          lts="0.12em"
          mb={20}
          tt="uppercase"
        >
          404 / Auto Deko
        </Text>

        <Title
          order={1}
          ff="var(--font-display)"
          fz="clamp(2.5rem, 4vw, 4rem)"
          fw={500}
          lh={1}
          lts="-0.035em"
          maw="11ch"
          tt="uppercase"
        >
          Produkt nicht gefunden.
        </Title>

        <Text c="var(--color-muted)" fz="1.02rem" lh={1.75} mt={32}>
          Dieses Einzelstück ist nicht mehr verfügbar oder wurde verschoben.
        </Text>

        <Button
          component="a"
          href="/#produkte"
          color="dark"
          radius={0}
          size="lg"
          mt={32}
          w={{ base: "100%", sm: "auto" }}
          fz="xs"
          fw={700}
          lts="0.09em"
          tt="uppercase"
        >
          Zurück zu den Produkten
        </Button>
      </Box>
    </Box>
  );
}
