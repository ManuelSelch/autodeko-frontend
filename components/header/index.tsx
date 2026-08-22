import styles from "./header.module.css";

const navigation = [
  { href: "#startseite", label: "Startseite" },
  { href: "#produkte", label: "Produkte" },
  { href: "#ueber-uns", label: "Über uns" },
  { href: "#kontakt", label: "Kontakt" },
];

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <a className={styles.brand} href="#startseite" aria-label="Auto Deko Startseite">
          Auto <span>Deko</span>
        </a>

        <nav className={styles.nav} aria-label="Hauptnavigation">
          {navigation.map((item) => (
            <a href={item.href} key={item.href}>{item.label}</a>
          ))}
        </nav>

        <span className={styles.headerNote}>Automotive Objects</span>

        <details className={styles.mobileMenu}>
          <summary>Menü</summary>
          <nav className={styles.mobileNav} aria-label="Mobile Navigation">
            {navigation.map((item) => (
              <a href={item.href} key={item.href}>{item.label}</a>
            ))}
          </nav>
        </details>
      </div>
    </header>
  );
}
