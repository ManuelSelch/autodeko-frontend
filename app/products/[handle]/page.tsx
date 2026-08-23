import type { Metadata } from "next";
import {
  Box,
  Button,
  Divider,
  Grid,
  GridCol,
  Group,
  Text,
  Title,
} from "@mantine/core";
import { notFound } from "next/navigation";
import { PageBreadcrumbs } from "@/components/page-breadcrumbs";
import autoFass from "@/img/auto-fass.png";
import api from "@/lib/api";
import { buildProductInquiryHref } from "@/lib/contact/product-inquiry";
import { formatMoney } from "@/lib/shopify/format-money";
import { splitProductTitle } from "@/lib/shopify/split-product-title";
import type { ProductImage } from "@/lib/shopify/types";
import { ProductGallery } from "./product-gallery";

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
  const { firstWord, remainingTitle } = splitProductTitle(product.title);
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
      <PageBreadcrumbs
        currentPage={product.title}
        parent={{ href: "/#produkte", label: "Produkte" }}
      />

      <Grid gutter="clamp(3rem, 7vw, 8rem)" align="flex-start" maw="92rem" mx="auto">
        <GridCol span={{ base: 12, md: 7 }}>
          <ProductGallery
            images={images}
            productTitle={product.title}
            fallbackImage={autoFass.src}
          />
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
              fw={400}
              lh={1}
              lts="-0.035em"
            >
              <Box component="span" display="block">
                {firstWord}
              </Box>
              {remainingTitle && (
                <Box component="span" display="block">
                  {remainingTitle}
                </Box>
              )}
            </Title>

            <Box mt={24}>
              <Text fz="lg" fw={600}>
                {formatMoney(product.price)}
              </Text>
              <Text c="var(--color-muted)" fz="sm" fw={400} mt={4}>
                inklusive Meherwertsteuer, exklusive Versandkosten
              </Text>
            </Box>

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
              href={buildProductInquiryHref(product.handle)}
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
              Dieses Produkt anfragen
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
