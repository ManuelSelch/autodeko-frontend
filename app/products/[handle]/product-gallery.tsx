"use client";

import { useState } from "react";
import { AspectRatio, Box, Image, Stack, UnstyledButton } from "@mantine/core";
import type { ProductImage } from "@/lib/shopify/types";

type ProductGalleryProps = {
  fallbackImage: string;
  images: ProductImage[];
  productTitle: string;
};

const thumbnailWidth = "clamp(4rem, 10vw, 7rem)";

export function ProductGallery({
  fallbackImage,
  images,
  productTitle,
}: ProductGalleryProps) {
  const galleryImages: ProductImage[] =
    images.length > 0
      ? images
      : [
          {
            url: fallbackImage,
            altText: productTitle,
            width: null,
            height: null,
          },
        ];
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedImage = galleryImages[selectedIndex] ?? galleryImages[0];

  return (
    <Box
      pos="relative"
      pr={`calc(${thumbnailWidth} + 1rem)`}
      aria-label={`Produktbilder von ${productTitle}`}
    >
      <AspectRatio ratio={1} style={{ overflow: "hidden" }}>
        <Image
          src={selectedImage.url}
          alt={selectedImage.altText ?? `${productTitle}, Ansicht ${selectedIndex + 1}`}
          fit="contain"
          h="100%"
          w="100%"
          loading="eager"
        />
      </AspectRatio>

      <Stack
        gap={12}
        pos="absolute"
        top={0}
        right={0}
        bottom={0}
        w={thumbnailWidth}
        style={{ overflowY: "auto", scrollbarWidth: "thin" }}
      >
        {galleryImages.map((image, index) => {
          const isSelected = index === selectedIndex;

          return (
            <UnstyledButton
              key={`${image.url}-${index}`}
              type="button"
              onClick={() => setSelectedIndex(index)}
              aria-label={`Ansicht ${index + 1} von ${productTitle} anzeigen`}
              aria-pressed={isSelected}
              style={{
                display: "block",
                flex: "0 0 auto",
                opacity: isSelected ? 1 : 0.55,
                transition: "opacity 150ms ease",
              }}
            >
              <AspectRatio ratio={1} style={{ overflow: "hidden" }}>
                <Image
                  src={image.url}
                  alt=""
                  fit="contain"
                  h="100%"
                  w="100%"
                  loading={index === 0 ? "eager" : "lazy"}
                />
              </AspectRatio>
            </UnstyledButton>
          );
        })}
      </Stack>
    </Box>
  );
}
