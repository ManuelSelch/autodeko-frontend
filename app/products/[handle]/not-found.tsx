import Link from "next/link";
import styles from "./product-page.module.css";

export default function ProductNotFound() {
  return (
    <main className={styles.page}>
      <section className={styles.info}>
        <p className={styles.eyebrow}>404 / Auto Deko</p>
        <h1 className={styles.title}>Produkt nicht gefunden.</h1>
        <p className={styles.description}>
          Dieses Einzelstück ist nicht mehr verfügbar oder wurde verschoben.
        </p>
        <Link className={styles.contactLink} href="/#produkte">
          Zurück zu den Produkten
        </Link>
      </section>
    </main>
  );
}
