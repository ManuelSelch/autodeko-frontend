import { Image } from "@mantine/core";
import autoFass from "@/img/auto-fass.png";
import { formatMoney } from "@/lib/shopify/format-money";
import type { Product } from "@/lib/shopify/types";
import styles from "./home-page.module.css";

export default function ProductShowcase({ products }: { products: Product[] }) {
  return (
    <section className={styles.products} id="produkte" aria-labelledby="products-title">
      <header className={styles.sectionHeader}>
        <h2 id="products-title" className={styles.sectionTitle}>
          Ausgewählte Einzelstücke
        </h2>
        <p className={styles.sectionIntro}>
          Echte Fahrzeugteile, in Handarbeit neu interpretiert. Kein Objekt gleicht
          dem anderen – und genau das ist der Punkt.
        </p>
      </header>

      {products.length === 0 ? (
        <div className={styles.emptyState}>
          <strong>Neue Einzelstücke sind in Arbeit.</strong>
          <p>Schau bald wieder vorbei – die nächsten Produkte entstehen bereits.</p>
        </div>
      ) : (
        <div className={styles.productGrid}>
          {products.map((product) => (
            <article className={styles.productCard} key={product.id}>
              <div className={styles.productImageWrap}>
                <Image
                  className={styles.productImage}
                  src={product.featuredImage?.url ?? autoFass.src}
                  alt={product.featuredImage?.altText ?? product.title}
                  fit="contain"
                  loading="lazy"
                />
                {!product.availableForSale && (
                  <span className={styles.productStatus}>Ausverkauft</span>
                )}
              </div>
              <div className={styles.productInfo}>
                <h3 className={styles.productName}>{product.title}</h3>
                <p className={styles.productPrice}>{formatMoney(product.price)}</p>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
