import {
  Anchor,
  AspectRatio,
  Box,
  Grid,
  GridCol,
  Group,
  Image,
  ScrollArea,
  SimpleGrid,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import autoFass from "@/img/auto-fass.png";
import { curateProducts } from "@/lib/shopify/curate-products";
import { formatMoney } from "@/lib/shopify/format-money";
import type { Product } from "@/lib/shopify/types";

function ProductCard({ product }: { product: Product }) {
  return (
    <Anchor
      href={`/products/${product.handle}`}
      c="inherit"
      display="block"
      underline="never"
    >
      <Box component="article" miw={0}>
        <AspectRatio ratio={4 / 5}>
          <Box pos="relative" style={{ overflow: "hidden" }}>
            <Image
              src={product.featuredImage?.url ?? autoFass.src}
              alt={product.featuredImage?.altText ?? product.title}
              fit="contain"
              h="100%"
              w="100%"
              loading="lazy"
            />

            {!product.availableForSale && (
              <Box
                pos="absolute"
                top={{ base: 10, sm: 14 }}
                left={{ base: 10, sm: 14 }}
                bg="var(--color-ink)"
                c="var(--color-paper)"
                px={{ base: 10, sm: 12 }}
                py={{ base: 6, sm: 8 }}
              >
                <Text
                  fz={{ base: "0.62rem", sm: "0.68rem" }}
                  fw={700}
                  lts="0.07em"
                  tt="uppercase"
                >
                  Ausverkauft
                </Text>
              </Box>
            )}
          </Box>
        </AspectRatio>

        <Stack hiddenFrom="sm" gap={4} pt={14}>
          <Text component="h3" fz="0.9rem" fw={600} lineClamp={2}>
            {product.title}
          </Text>
          <Text c="var(--color-muted)" fz="0.9rem" style={{ whiteSpace: "nowrap" }}>
            {formatMoney(product.price)}
          </Text>
        </Stack>

        <Group
          visibleFrom="sm"
          justify="space-between"
          align="flex-start"
          gap={16}
          pt={16}
          wrap="nowrap"
        >
          <Text component="h3" fz="0.93rem" fw={600}>
            {product.title}
          </Text>
          <Text c="var(--color-muted)" fz="0.93rem" style={{ whiteSpace: "nowrap" }}>
            {formatMoney(product.price)}
          </Text>
        </Group>
      </Box>
    </Anchor>
  );
}

export default function ProductShowcase({ products }: { products: Product[] }) {
  const featuredProducts = curateProducts(products);

  return (
    <Box
      component="section"
      id="produkte"
      aria-labelledby="products-title"
      bg="var(--color-paper)"
      px="clamp(1.25rem, 5vw, 5.5rem)"
      py="clamp(5rem, 9vw, 9rem)"
    >
      <Box maw="92rem" mx="auto">
        <Box component="header" mb="clamp(2.5rem, 5vw, 4.5rem)">
          <Grid gutter={32} align="flex-end">
            <GridCol span={{ base: 12, sm: 7 }}>
              <Title
                id="products-title"
                order={2}
                ff="var(--font-display)"
                fz="clamp(2.25rem, 3.5vw, 3.25rem)"
                fw={500}
                lh={1.05}
                lts="-0.035em"
                maw="12ch"
                tt="uppercase"
              >
                Ausgewählte Einzelstücke
              </Title>
            </GridCol>

            <GridCol span={{ base: 12, sm: 5 }}>
              <Text c="var(--color-muted)" lh={1.7} maw="31rem" ml={{ base: 0, sm: "auto" }}>
                Echte Fahrzeugteile, in Handarbeit neu interpretiert. Kein Objekt
                gleicht dem anderen – und genau das ist der Punkt.
              </Text>
            </GridCol>
          </Grid>
        </Box>

        {featuredProducts.length === 0 ? (
          <Stack
            align="center"
            gap={8}
            bd="1px solid var(--color-line)"
            px={24}
            py={64}
            ta="center"
          >
            <Text fw={700}>Neue Einzelstücke sind in Arbeit.</Text>
            <Text c="var(--color-muted)">
              Schau bald wieder vorbei – die nächsten Produkte entstehen bereits.
            </Text>
          </Stack>
        ) : (
          <>
            <ScrollArea
              hiddenFrom="sm"
              type="never"
              scrollbars="x"
              viewportProps={{
                "aria-label": "Produkte horizontal durchscrollen",
                tabIndex: 0,
                style: { scrollSnapType: "x mandatory" },
              }}
            >
              <Group gap={16} wrap="nowrap" align="flex-start" pb={12}>
                {featuredProducts.map((product) => (
                  <Box
                    key={product.id}
                    w="calc(40vw - 1.8rem)"
                    miw="calc(40vw - 1.8rem)"
                    style={{ scrollSnapAlign: "start" }}
                  >
                    <ProductCard product={product} />
                  </Box>
                ))}
              </Group>
            </ScrollArea>

            <SimpleGrid
              visibleFrom="sm"
              cols={4}
              spacing="clamp(1rem, 2.5vw, 2.5rem)"
            >
              {featuredProducts.map((product) => (
                <ProductCard product={product} key={product.id} />
              ))}
            </SimpleGrid>
          </>
        )}
      </Box>
    </Box>
  );
}
