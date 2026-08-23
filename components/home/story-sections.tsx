import type { ReactNode } from "react";
import { Anchor, Box, Grid, GridCol, Group, Image, Stack, Text, Title } from "@mantine/core";
import bestseller from "@/img/bestseller.jpg";
import clockWoman from "@/img/clock_woman.png";
import styles from "./story-sections.module.css";

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
      mih={{ base: "auto", sm: 540 }}
      bg="var(--color-paper)"
      px={{ base: 24, sm: "clamp(3rem, 8vw, 9rem)" }}
      py={{ base: 44, sm: "clamp(3rem, 8vw, 9rem)" }}
    >
      <Group gap="sm" mb={{ base: 18, sm: 24 }}>
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
        fz={{
          base: "clamp(1.8rem, 8vw, 2.25rem)",
          sm: "clamp(2.1rem, 3.2vw, 3rem)",
        }}
        fw={500}
        lh={1.05}
        lts="-0.035em"
        maw={{ base: "12ch", sm: "9ch" }}
        tt="uppercase"
      >
        {title}
      </Title>

      <Text
        c="var(--color-muted)"
        fz={{ base: "0.95rem", sm: "1.05rem" }}
        lh={1.75}
        maw="32rem"
        mt={{ base: 20, sm: 28 }}
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
            <Box
              className={styles.bestsellerContainer}
              h={{ base: "clamp(15rem, 70vw, 25rem)", sm: "100%" }}
              mih={{ base: 0, sm: 540 }}
              pos="relative"
            >
              <Anchor
                href="/products/asset-pack-101507563522-example-product-2"
                className={styles.bestsellerLink}
                display="block"
                h="100%"
              >
                <Image
                  className={styles.bestsellerImage}
                  src={bestseller.src}
                  alt="Uhr aus Bremsscheibe und rotem Audi-RS-Bremssattel vor einem roten Sportwagen"
                  fit="cover"
                  h="100%"
                  style={{ objectPosition: "50% 30%" }}
                />
              </Anchor>
              <Anchor
                href="/products/asset-pack-101507563522-example-product-2"
                className={styles.inquireButton}
              >
                Anfragen
              </Anchor>
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
            <Box
              className={styles.craftContainer}
              h={{ base: "clamp(15rem, 70vw, 25rem)", sm: "100%" }}
              mih={{ base: 0, sm: 540 }}
              pos="relative"
              bg="#d7d5cc"
              style={{ overflow: "hidden" }}
            >
              <Image
                className={styles.craftImage}
                src={clockWoman.src}
                alt="Handgefertigte Uhr aus einer Porsche-Bremsscheibe"
                fit="cover"
                h="100%"
                style={{
                  filter: "drop-shadow(0 25px 25px rgb(0 0 0 / 0.2))",
                  objectPosition: "50% 30%",
                }}
              />
              <Anchor
                href="/contact"
                className={styles.contactButton}
              >
                Kontaktmöglichkeiten
              </Anchor>
            </Box>
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
