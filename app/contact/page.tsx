import type { Metadata } from "next";
import {
  Anchor,
  AspectRatio,
  Box,
  Grid,
  GridCol,
  Group,
  Image,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { PageBreadcrumbs } from "@/components/page-breadcrumbs";
import autoFass from "@/img/auto-fass.png";
import api from "@/lib/api";
import { parseProductHandle } from "@/lib/contact/product-inquiry";
import { formatMoney } from "@/lib/shopify/format-money";
import { ContactForm } from "./contact-form";

type ContactPageProps = {
  searchParams: Promise<{ product?: string | string[] }>;
};

export const metadata: Metadata = {
  title: "Kontakt | Auto Deko",
  description:
    "Kontaktiere Auto Deko für Produktanfragen, individuelle Autoteile und handgefertigte Sonderanfertigungen.",
};

export default async function ContactPage({ searchParams }: ContactPageProps) {
  const productHandle = parseProductHandle((await searchParams).product);
  const product = productHandle ? await api.getProduct(productHandle) : null;

  return (
    <Box
      component="main"
      bg="var(--color-canvas)"
      c="var(--color-ink)"
      mih="100vh"
      px="clamp(1.25rem, 5vw, 5.5rem)"
      py="clamp(4rem, 8vw, 8rem)"
    >
      <PageBreadcrumbs currentPage="Kontakt" />

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
              Beschreibe uns kurz deine Anfrage zu diesem Produkt
            </Text>

            <Text c="var(--color-muted)" fz="sm" lh={1.6} mt={24}>
              In der Regel beantworten wir Anfragen innerhalb weniger Werktage.
            </Text>
          </Stack>
        </GridCol>

        <GridCol span={{ base: 12, md: 7 }}>
          <Box bg="var(--color-paper)" p="clamp(1.5rem, 4vw, 4rem)">
            {product && (
              <Box
                component="section"
                aria-label="Ausgewähltes Produkt"
                pb={28}
                mb={32}
                style={{ borderBottom: "1px solid var(--color-line)" }}
              >
                <Group gap="lg" wrap="nowrap" align="center">
                  <AspectRatio ratio={1} w={96} miw={96}>
                    <Image
                      src={product.featuredImage?.url ?? autoFass.src}
                      alt={product.featuredImage?.altText ?? product.title}
                      fit="contain"
                      h="100%"
                      w="100%"
                    />
                  </AspectRatio>

                  <Stack gap={4} miw={0}>
                    <Text
                      c="var(--color-accent)"
                      fz="0.68rem"
                      fw={700}
                      lts="0.1em"
                      tt="uppercase"
                    >
                      Produktanfrage
                    </Text>
                    <Text fw={700} lineClamp={2}>
                      {product.title}
                    </Text>
                    <Text c="var(--color-muted)" fz="sm">
                      {formatMoney(product.price)}
                    </Text>
                    <Anchor
                      component="a"
                      href={`/products/${product.handle}`}
                      c="var(--color-ink)"
                      fz="xs"
                      fw={600}
                      underline="hover"
                    >
                      Produkt ansehen
                    </Anchor>
                  </Stack>
                </Group>
              </Box>
            )}

            <ContactForm
              product={
                product
                  ? { handle: product.handle, title: product.title }
                  : undefined
              }
            />
          </Box>
        </GridCol>
      </Grid>
    </Box>
  );
}
