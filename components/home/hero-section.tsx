import { Image } from "@mantine/core";
import clock from "@/img/clock.png";
import styles from "./home-page.module.css";

export function HeroSection() {
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.heroContent}>
        <p className={styles.eyebrow}>Handgefertigte Unikate aus Bayern</p>
        <h1 id="hero-title" className={styles.heroTitle}>
          Aus Autoteilen <span>wird Charakter.</span>
        </h1>
        <p className={styles.heroText}>
          Wir verwandeln echte Fahrzeugteile in außergewöhnliche Wohnobjekte –
          mit sichtbarer Geschichte und von Hand gefertigt.
        </p>
        <a className={styles.primaryLink} href="#produkte">
          Produkte entdecken
        </a>
      </div>

      <div className={styles.heroVisual} aria-label="Bremsen-Uhr von Auto Deko">
        <Image
          className={styles.heroImage}
          src={clock.src}
          alt="Uhr aus einer Bremsscheibe mit rotem Bremssattel"
          fit="contain"
        />
        <span className={styles.heroIndex}>Objekt 01 / Bremsen-Uhr</span>
      </div>
    </section>
  );
}
