"use client";

import { Carousel, CarouselSlide } from "@mantine/carousel";
import { Badge, Box, Image, Stack, Text, Title } from "@mantine/core";
import autoFass from "@/img/auto-fass.png";
import type { Product } from "@/lib/shopify/types";
import { useState } from "react";

function formatPrice(amount: string, currencyCode: string) {
  return new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: currencyCode,
  }).format(Number(amount));
}

export default function ProductShowcase({ products }: { products: Product[] }) {
  const [active, setActive] = useState(0);

  if (products.length === 0) {
    return (
      <Stack align="center" py="xl">
        <Title order={2}>Unsere Produkte</Title>
        <Text c="dimmed">Aktuell sind keine Produkte verfügbar.</Text>
      </Stack>
    );
  }

  return (
    <Stack c="white" align="center" className="relative">
      <Title order={2}>Unsere Produkte</Title>
      <Box
        style={{
          position: "relative",
          width: "100%",
          paddingTop: 80,
        }}
      >
        <Box
          style={{
            position: "absolute",
            top: 0,
            left: "50%",
            transform: "translateX(-50%)",
            width: 300,
            height: 200,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(255,255,255,0.45), rgba(0,0,0,0))",
            filter: "blur(40px)",
            pointerEvents: "none",
          }}
        />

        <Box
          style={{
            position: "absolute",
            bottom: 90,
            left: "50%",
            transform: "translateX(-50%)",
            width: 200,
            height: 60,
            background: "linear-gradient(to top, #333, #555)",
            borderRadius: "50%",
            boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
          }}
        />

        <Carousel
          withIndicators
          height={460}
          slideSize={{ base: "100%", sm: "70%", md: "50%" }}
          onSlideChange={setActive}
          emblaOptions={{
            loop: products.length > 1,
            dragFree: false,
            align: "center",
          }}
        >
          {products.map((product, index) => (
            <CarouselSlide key={product.id}>
              <Stack
                align="center"
                gap="xs"
                style={{
                  height: 410,
                  justifyContent: "center",
                  transition: "transform 300ms ease-in-out, opacity 300ms ease-in-out",
                  transform: active === index ? "scale(1.05)" : "scale(0.8)",
                  opacity: active === index ? 1 : 0.55,
                }}
              >
                <Image
                  src={product.featuredImage?.url ?? autoFass.src}
                  alt={product.featuredImage?.altText ?? product.title}
                  h={300}
                  fit="contain"
                />
                <Text fw={700} fz="xl">{product.title}</Text>
                <Text c="gold" fw={700}>
                  {formatPrice(product.price.amount, product.price.currencyCode)}
                </Text>
                {!product.availableForSale && <Badge color="gray">Ausverkauft</Badge>}
              </Stack>
            </CarouselSlide>
          ))}
        </Carousel>
      </Box>
    </Stack>
  );
}
