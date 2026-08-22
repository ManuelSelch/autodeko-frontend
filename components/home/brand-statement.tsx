import styles from "./home-page.module.css";

export function BrandStatement() {
  return (
    <section className={styles.statement} id="ueber-uns" aria-labelledby="statement-title">
      <p className={styles.eyebrow}>Unser Antrieb</p>
      <h2 id="statement-title" className={styles.statementTitle}>
        Wir geben ausgedienten Autoteilen ein zweites Leben –
        <span className={styles.statementAccent}> als Objekte mit Geschichte.</span>
      </h2>
      <a className={styles.textLink} href="#handwerk">
        Unser Handwerk entdecken
      </a>
    </section>
  );
}
