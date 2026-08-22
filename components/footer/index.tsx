import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer} id="footer-contact">
      <div className={styles.inner}>
        <p className={styles.brand}>Auto <span>Deko</span></p>

        <div>
          <p className={styles.label}>Navigation</p>
          <nav className={styles.links} aria-label="Fußzeilennavigation">
            <a href="#produkte">Produkte</a>
            <a href="#ueber-uns">Über uns</a>
            <a href="#kontakt">Kontakt</a>
          </nav>
        </div>

        <div>
          <p className={styles.label}>Kontakt</p>
          <p>Individuelle Anfragen und Auftragsarbeiten</p>
          <p>Kontaktdaten werden ergänzt.</p>
        </div>
      </div>

      <div className={styles.bottom}>
        <span>© {new Date().getFullYear()} Auto Deko</span>
        <span>Handgefertigte Einzelstücke aus Autoteilen</span>
      </div>
    </footer>
  );
}
