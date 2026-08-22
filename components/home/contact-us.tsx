import styles from "./home-page.module.css";

export function ContactUs() {
  return (
    <section className={styles.contact} id="kontakt" aria-labelledby="contact-title">
      <div>
        <p className={styles.eyebrow}>Deine Idee. Unser nächstes Unikat.</p>
        <h2 id="contact-title" className={styles.contactTitle}>
          Du hast ein besonderes Teil?
        </h2>
      </div>
      <div className={styles.contactAside}>
        <p className={styles.contactText}>
          Individuelle Anfragen sind willkommen. Gemeinsam finden wir heraus,
          welches neue Leben in deinem Autoteil steckt.
        </p>
        <a className={styles.contactLink} href="#footer-contact">
          Kontaktmöglichkeiten
        </a>
      </div>
    </section>
  );
}
