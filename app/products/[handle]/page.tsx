import type { Metadata } from "next";
import { Image } from "@mantine/core";
import Link from "next/link";
import { notFound } from "next/navigation";
import autoFass from "@/img/auto-fass.png";
import api from "@/lib/api";
import { formatMoney } from "@/lib/shopify/format-money";
import type { ProductImage } from "@/lib/shopify/types";
import styles from "./product-page.module.css";

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
    <main className={styles.page}>
      <nav className={styles.breadcrumb} aria-label="Brotkrümelnavigation">
        <Link href="/#produkte">Produkte</Link>
        <span aria-hidden="true">/</span>
        <span>{product.title}</span>
      </nav>

      <div className={styles.layout}>
        <div className={styles.gallery} aria-label={`Produktbilder von ${product.title}`}>
          {images.length > 0 ? (
            images.map((image, index) => (
              <div className={styles.imageWrap} key={`${image.url}-${index}`}>
                <Image
                  className={styles.image}
                  src={image.url}
                  alt={image.altText ?? `${product.title}, Ansicht ${index + 1}`}
                  fit="contain"
                  loading={index === 0 ? "eager" : "lazy"}
                />
              </div>
            ))
          ) : (
            <div className={styles.imageWrap}>
              <Image
                className={styles.image}
                src={autoFass.src}
                alt={product.title}
                fit="contain"
              />
            </div>
          )}
        </div>

        <section className={styles.info} aria-labelledby="product-title">
          <p className={styles.eyebrow}>Handgefertigtes Einzelstück</p>
          <h1 className={styles.title} id="product-title">{product.title}</h1>
          <p className={styles.price}>{formatMoney(product.price)}</p>
          <p
            className={`${styles.availability} ${
              product.availableForSale ? "" : styles.soldOut
            }`}
          >
            {product.availableForSale ? "Verfügbar" : "Aktuell ausverkauft"}
          </p>

          {product.description && (
            <p className={styles.description}>{product.description}</p>
          )}

          {visibleVariants.length > 0 && (
            <div className={styles.variants}>
              <p className={styles.variantLabel}>Ausführungen</p>
              <ul className={styles.variantList}>
                {visibleVariants.map((variant) => (
                  <li className={styles.variant} key={variant.id}>
                    {variant.title} · {formatMoney(variant.price)}
                    {!variant.availableForSale && " · Ausverkauft"}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <Link className={styles.contactLink} href="/#kontakt">
            Produkt anfragen
          </Link>

          <div className={styles.details}>
            <p className={styles.detailLabel}>Über dieses Objekt</p>
            <p>
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
