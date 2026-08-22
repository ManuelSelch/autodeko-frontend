import { darkButtonClass, displayTitleClass, eyebrowClass } from "./tailwind-styles";

export function ContactUs() {
  return (
    <section
      className="grid grid-cols-1 items-end gap-12 bg-accent-soft px-[clamp(1.25rem,5vw,5.5rem)] py-[clamp(5rem,9vw,9rem)] text-ink md:grid-cols-[minmax(0,1.2fr)_minmax(250px,0.8fr)]"
      id="kontakt"
      aria-labelledby="contact-title"
    >
      <div>
        <p className={eyebrowClass}>Deine Idee. Unser nächstes Unikat.</p>
        <h2
          id="contact-title"
          className={`${displayTitleClass} max-w-[11ch] text-[clamp(2.25rem,3.5vw,3.25rem)] leading-[1.05]`}
        >
          Du hast ein besonderes Teil?
        </h2>
      </div>
      <div className="max-w-[26rem] md:justify-self-end">
        <p className="m-0 leading-[1.7]">
          Individuelle Anfragen sind willkommen. Gemeinsam finden wir heraus,
          welches neue Leben in deinem Autoteil steckt.
        </p>
        <a className={darkButtonClass} href="#footer-contact">
          Kontaktmöglichkeiten
        </a>
      </div>
    </section>
  );
}
