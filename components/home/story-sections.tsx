import type { ReactNode } from "react";
import { Box, Center, Grid, GridCol, Group, Image, Stack, Text, Title } from "@mantine/core";
import bestseller from "@/img/bestseller.jpg";
import clock from "@/img/clock.png";

type StoryCopyProps = {
  children: ReactNode;
  eyebrow: string;
  id: string;
  title: string;
};

function StoryCopy({ children, eyebrow, id, title }: StoryCopyProps) {
  return (
    <Stack
      align="flex-start"
      justify="center"
      gap={0}
      h="100%"
      mih={{ base: 280, sm: 540 }}
      bg="var(--color-paper)"
      p="clamp(3rem, 8vw, 9rem)"
    >
      <Group gap="sm" mb={24}>
        <Box w={44} h={2} bg="var(--color-accent)" />
        <Text
          c="var(--color-muted)"
          fz="xs"
          fw={600}
          lts="0.14em"
          tt="uppercase"
        >
          {eyebrow}
        </Text>
      </Group>

      <Title
        id={id}
        order={2}
        c="var(--color-ink)"
        ff="var(--font-display)"
        fz="clamp(2.1rem, 3.2vw, 3rem)"
        fw={500}
        lh={1.05}
        lts="-0.035em"
        maw="9ch"
        tt="uppercase"
      >
        {title}
      </Title>

      <Text
        c="var(--color-muted)"
        fz="1.05rem"
        lh={1.75}
        maw="32rem"
        mt={28}
      >
        {children}
      </Text>
    </Stack>
  );
}

export function StorySections() {
  return (
    <Box id="handwerk">
      <Box component="section" aria-labelledby="story-bestseller">
        <Grid gutter={0} align="stretch">
          <GridCol span={{ base: 12, sm: 6 }}>
            <Box h="100%" mih={{ base: 280, sm: 540 }} style={{ overflow: "hidden" }}>
              <Image
                src={bestseller.src}
                alt="Uhr aus Bremsscheibe und rotem Audi-RS-Bremssattel vor einem roten Sportwagen"
                fit="cover"
                h="100%"
                mih={{ base: 280, sm: 540 }}
              />
            </Box>
          </GridCol>

          <GridCol span={{ base: 12, sm: 6 }}>
            <StoryCopy
              eyebrow="Unser Bestseller"
              id="story-bestseller"
              title="Zeit, die Geschichte trägt."
            >
              Aus einer originalen Bremsscheibe und ihrem Bremssattel entsteht unser
              gefragtestes Einzelstück. Jede Uhr bewahrt die Spuren ihres früheren
              Lebens und bringt echte Automobilgeschichte in dein Zuhause.
            </StoryCopy>
          </GridCol>
        </Grid>
      </Box>

      <Box component="section" aria-labelledby="story-craft">
        <Grid gutter={0} align="stretch">
          <GridCol span={{ base: 12, sm: 6 }} order={{ base: 1, sm: 2 }}>
            <Center
              h="100%"
              mih={{ base: 280, sm: 540 }}
              bg="#d7d5cc"
              style={{ overflow: "hidden" }}
            >
              <Image
                src={clock.src}
                alt="Handgefertigte Uhr aus einer Porsche-Bremsscheibe"
                fit="contain"
                mah={560}
                w="min(66%, 510px)"
                style={{ filter: "drop-shadow(0 25px 25px rgb(0 0 0 / 0.2))" }}
              />
            </Center>
          </GridCol>

          <GridCol span={{ base: 12, sm: 6 }} order={{ base: 2, sm: 1 }}>
            <StoryCopy
              eyebrow="Echte Handarbeit"
              id="story-craft"
              title="Vom Bauteil zum Blickfang."
            >
              Ausgewählt, gereinigt und neu gedacht: Jeder Arbeitsschritt verbindet
              technische Präzision mit einem Gespür für Form und Material.
            </StoryCopy>
          </GridCol>
        </Grid>
      </Box>
    </Box>
  );
}
