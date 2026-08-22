import { Image } from "@mantine/core";
import autoFass from "@/img/auto-fass.png";
import clock from "@/img/clock.png";
import styles from "./home-page.module.css";

export function StorySections() {
  return (
    <div id="handwerk">
      <section className={styles.storySection} aria-labelledby="story-authenticity">
        <div className={styles.storyVisual}>
          <Image
            className={styles.storyImage}
            src={autoFass.src}
            alt="Beleuchtetes Regal aus einem schwarzen Ölfass"
            fit="contain"
          />
        </div>
        <div className={styles.storyCopy}>
          <p className={styles.eyebrow}>Ungezähmte Authentizität</p>
          <h2 id="story-authenticity" className={styles.storyTitle}>
            Ecken, Kanten, Vergangenheit.
          </h2>
          <p className={styles.storyText}>
            Gebrauchsspuren werden nicht versteckt. Sie erzählen, woher ein Teil
            kommt, und machen jedes neue Objekt unverwechselbar.
          </p>
        </div>
      </section>

      <section
        className={`${styles.storySection} ${styles.storySectionReverse}`}
        aria-labelledby="story-craft"
      >
        <div className={styles.storyVisual}>
          <Image
            className={styles.storyImage}
            src={clock.src}
            alt="Handgefertigte Uhr aus einer Porsche-Bremsscheibe"
            fit="contain"
          />
        </div>
        <div className={styles.storyCopy}>
          <p className={styles.eyebrow}>Echte Handarbeit</p>
          <h2 id="story-craft" className={styles.storyTitle}>
            Vom Bauteil zum Blickfang.
          </h2>
          <p className={styles.storyText}>
            Ausgewählt, gereinigt und neu gedacht: Jeder Arbeitsschritt verbindet
            technische Präzision mit einem Gespür für Form und Material.
          </p>
        </div>
      </section>
    </div>
  );
}
