import type { Metadata } from "next";
import { Image } from "@mantine/core";
import Link from "next/link";
import { notFound } from "next/navigation";
import autoFass from "@/img/auto-fass.png";
import api from "@/lib/api";
import { formatMoney } from "@/lib/shopify/format-money";
import type { ProductImage } from "@/lib/shopify/types";
import {
  productButtonClass,
  productEyebrowClass,
  productPageClass,
  productTitleClass,
} from "./tailwind-styles";

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
    <main className={productPageClass}>
      <nav
        className="mx-auto mb-[clamp(2rem,4vw,4rem)] flex max-w-[92rem] items-center gap-3 text-xs font-semibold tracking-[0.07em] text-muted uppercase"
        aria-label="Brotkrümelnavigation"
      >
        <Link className="text-ink no-underline hover:underline hover:underline-offset-4" href="/#produkte">
          Produkte
        </Link>
        <span aria-hidden="true">/</span>
        <span>{product.title}</span>
      </nav>

      <div className="mx-auto grid max-w-[92rem] grid-cols-1 items-start gap-[clamp(3rem,7vw,8rem)] lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)]">
        <div
          className="grid grid-cols-1 gap-4 sm:grid-cols-2"
          aria-label={`Produktbilder von ${product.title}`}
        >
          {images.length > 0 ? (
            images.map((image, index) => (
              <div
                className={`grid place-items-center overflow-hidden bg-canvas ${
                  index === 0
                    ? "aspect-[4/5] sm:col-span-full sm:aspect-square"
                    : "aspect-[4/5]"
                }`}
                key={`${image.url}-${index}`}
              >
                <Image
                  className="h-[84%] w-[84%] object-contain"
                  src={image.url}
                  alt={image.altText ?? `${product.title}, Ansicht ${index + 1}`}
                  fit="contain"
                  loading={index === 0 ? "eager" : "lazy"}
                />
              </div>
            ))
          ) : (
            <div className="grid aspect-[4/5] place-items-center overflow-hidden bg-canvas sm:col-span-full sm:aspect-square">
              <Image
                className="h-[84%] w-[84%] object-contain"
                src={autoFass.src}
                alt={product.title}
                fit="contain"
              />
            </div>
          )}
        </div>

        <section className="lg:sticky lg:top-32" aria-labelledby="product-title">
          <p className={productEyebrowClass}>Handgefertigtes Einzelstück</p>
          <h1 className={productTitleClass} id="product-title">{product.title}</h1>
          <p className="mt-6 text-lg font-semibold">{formatMoney(product.price)}</p>
          <p
            className={`mt-4 flex items-center gap-2.5 text-sm font-semibold text-muted before:h-2 before:w-2 before:rounded-full before:content-[''] ${
              product.availableForSale ? "before:bg-[#458254]" : "before:bg-muted"
            }`}
          >
            {product.availableForSale ? "Verfügbar" : "Aktuell ausverkauft"}
          </p>

          {product.description && (
            <p className="mt-8 whitespace-pre-line text-[1.02rem] leading-[1.75] text-muted">
              {product.description}
            </p>
          )}

          {visibleVariants.length > 0 && (
            <div className="mt-8 border-t border-line pt-6">
              <p className="mb-3 text-[0.68rem] font-semibold tracking-[0.1em] text-muted uppercase">
                Ausführungen
              </p>
              <ul className="m-0 flex list-none flex-wrap gap-2.5 p-0">
                {visibleVariants.map((variant) => (
                  <li className="border border-line px-3 py-2.5 text-sm" key={variant.id}>
                    {variant.title} · {formatMoney(variant.price)}
                    {!variant.availableForSale && " · Ausverkauft"}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <Link className={productButtonClass} href="/#kontakt">
            Produkt anfragen
          </Link>

          <div className="mt-10 border-t border-line pt-6">
            <p className="mb-3 text-[0.68rem] font-semibold tracking-[0.1em] text-muted uppercase">
              Über dieses Objekt
            </p>
            <p className="m-0 leading-[1.6] text-muted">
              Aus einem echten Fahrzeugteil gefertigt. Kleine Spuren und
              Abweichungen gehören zur Geschichte des Materials und machen jedes
              Objekt einzigartig.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}

export const revalidate = 300;
