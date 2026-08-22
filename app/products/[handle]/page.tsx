import type { Metadata } from "next";
import {
  Anchor,
  AspectRatio,
  Box,
  Button,
  Center,
  Divider,
  Grid,
  GridCol,
  Group,
  Image,
  Text,
  Title,
} from "@mantine/core";
import { notFound } from "next/navigation";
import autoFass from "@/img/auto-fass.png";
import api from "@/lib/api";
import { formatMoney } from "@/lib/shopify/format-money";
import type { ProductImage } from "@/lib/shopify/types";

interface ProductPageProps {
  params: Promise<{ handle: string }>;
}

function productImages(images: ProductImage[], featuredImage: ProductImage | null) {
  if (images.length > 0) {
    return images;
  }

  return featuredImage ? [featuredImage] : [];
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { handle } = await params;
  const product = await api.getProduct(handle);

  if (!product) {
    return { title: "Produkt nicht gefunden | Auto Deko" };
  }

  return {
    title: `${product.title} | Auto Deko`,
    description: product.description || `Handgefertigtes Auto-Deko-Unikat: ${product.title}`,
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { handle } = await params;
  const product = await api.getProduct(handle);

  if (!product) {
    notFound();
  }

  const images = productImages(product.images, product.featuredImage);
  const visibleVariants = product.variants.filter(
    (variant) => variant.title !== "Default Title",
  );

  return (
    <Box
      component="main"
      mih="100vh"
      bg="var(--color-paper)"
      px="clamp(1.25rem, 5vw, 5rem)"
      pt="clamp(2rem, 5vw, 5rem)"
      pb="clamp(5rem, 9vw, 9rem)"
    >
      <Group
        component="nav"
        aria-label="Brotkrümelnavigation"
        gap="sm"
        maw="92rem"
        mx="auto"
        mb="clamp(2rem, 4vw, 4rem)"
      >
        <Anchor
          component="a"
          href="/#produkte"
          c="var(--color-ink)"
          fz="xs"
          fw={600}
          lts="0.07em"
          tt="uppercase"
          underline="hover"
        >
          Produkte
        </Anchor>
        <Text c="var(--color-muted)" fz="xs" aria-hidden="true">
          /
        </Text>
        <Text
          c="var(--color-muted)"
          fz="xs"
          fw={600}
          lts="0.07em"
          tt="uppercase"
        >
          {product.title}
        </Text>
      </Group>

      <Grid gutter="clamp(3rem, 7vw, 8rem)" align="flex-start" maw="92rem" mx="auto">
        <GridCol span={{ base: 12, md: 7 }}>
          <Grid gutter={16} aria-label={`Produktbilder von ${product.title}`}>
            {images.length > 0 ? (
              images.map((image, index) => (
                <GridCol
                  span={index === 0 ? 12 : { base: 12, sm: 6 }}
                  key={`${image.url}-${index}`}
                >
                  <AspectRatio
                    ratio={index === 0 ? 1 : 4 / 5}
                    bg="var(--color-canvas)"
                    style={{ overflow: "hidden" }}
                  >
                    <Center>
                      <Image
                        src={image.url}
                        alt={image.altText ?? `${product.title}, Ansicht ${index + 1}`}
                        fit="contain"
                        h="84%"
                        w="84%"
                        loading={index === 0 ? "eager" : "lazy"}
                      />
                    </Center>
                  </AspectRatio>
                </GridCol>
              ))
            ) : (
              <GridCol span={12}>
                <AspectRatio ratio={1} bg="var(--color-canvas)" style={{ overflow: "hidden" }}>
                  <Center>
                    <Image
                      src={autoFass.src}
                      alt={product.title}
                      fit="contain"
                      h="84%"
                      w="84%"
                    />
                  </Center>
                </AspectRatio>
              </GridCol>
            )}
          </Grid>
        </GridCol>

        <GridCol span={{ base: 12, md: 5 }}>
          <Box
            component="section"
            aria-labelledby="product-title"
            pos={{ base: "static", md: "sticky" }}
            top={{ base: 0, md: 128 }}
          >
            <Text
              c="var(--color-accent)"
              fz="xs"
              fw={600}
              lts="0.12em"
              mb={20}
              tt="uppercase"
            >
              Handgefertigtes Einzelstück
            </Text>

            <Title
              id="product-title"
              order={1}
              ff="var(--font-display)"
              fz="clamp(2.5rem, 4vw, 4rem)"
              fw={500}
              lh={1}
              lts="-0.035em"
              maw="11ch"
              tt="uppercase"
            >
              {product.title}
            </Title>

            <Text fz="lg" fw={600} mt={24}>
              {formatMoney(product.price)}
            </Text>

            <Group gap={10} mt={16}>
              <Box
                w={8}
                h={8}
                bg={product.availableForSale ? "#458254" : "var(--color-muted)"}
                style={{ borderRadius: "50%" }}
              />
              <Text c="var(--color-muted)" fz="sm" fw={600}>
                {product.availableForSale ? "Verfügbar" : "Aktuell ausverkauft"}
              </Text>
            </Group>

            {product.description && (
              <Text
                c="var(--color-muted)"
                fz="1.02rem"
                lh={1.75}
                mt={32}
                style={{ whiteSpace: "pre-line" }}
              >
                {product.description}
              </Text>
            )}

            {visibleVariants.length > 0 && (
              <Box mt={32}>
                <Divider color="var(--color-line)" mb={24} />
                <Text
                  c="var(--color-muted)"
                  fz="0.68rem"
                  fw={600}
                  lts="0.1em"
                  mb={12}
                  tt="uppercase"
                >
                  Ausführungen
                </Text>
                <Group component="ul" gap={10} m={0} p={0} style={{ listStyle: "none" }}>
                  {visibleVariants.map((variant) => (
                    <Box
                      component="li"
                      key={variant.id}
                      bd="1px solid var(--color-line)"
                      px={12}
                      py={10}
                    >
                      <Text fz="sm">
                        {variant.title} · {formatMoney(variant.price)}
                        {!variant.availableForSale && " · Ausverkauft"}
                      </Text>
                    </Box>
                  ))}
                </Group>
              </Box>
            )}

            <Button
              component="a"
              href="/#kontakt"
              color="dark"
              radius={0}
              size="lg"
              fullWidth
              mt={32}
              fz="xs"
              fw={700}
              lts="0.09em"
              tt="uppercase"
            >
              Produkt anfragen
            </Button>

            <Box mt={40}>
              <Divider color="var(--color-line)" mb={24} />
              <Text
                c="var(--color-muted)"
                fz="0.68rem"
                fw={600}
                lts="0.1em"
                mb={12}
                tt="uppercase"
              >
                Über dieses Objekt
              </Text>
              <Text c="var(--color-muted)" lh={1.6}>
                Aus einem echten Fahrzeugteil gefertigt. Kleine Spuren und
                Abweichungen gehören zur Geschichte des Materials und machen jedes
                Objekt einzigartig.
              </Text>
            </Box>
          </Box>
        </GridCol>
      </Grid>
    </Box>
  );
}

export const revalidate = 300;
