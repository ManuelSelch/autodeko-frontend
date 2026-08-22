const footerLinkClass =
  "w-max text-ink no-underline hover:underline hover:underline-offset-4 focus-visible:underline focus-visible:underline-offset-4";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-paper text-ink" id="footer-contact">
      <div className="mx-auto grid min-h-[230px] max-w-[100rem] grid-cols-1 items-start gap-12 px-[clamp(1.25rem,4vw,4rem)] pt-14 pb-8 md:grid-cols-[1.4fr_1fr_1fr]">
        <p className="m-0 font-display text-[clamp(2rem,3.5vw,3.5rem)] leading-[0.95] font-semibold tracking-[-0.035em] uppercase">
          Auto <span className="text-accent">Deko</span>
        </p>

        <div>
          <p className="mb-4 text-[0.7rem] font-semibold tracking-[0.11em] text-muted uppercase">
            Navigation
          </p>
          <nav className="grid gap-2.5" aria-label="Fußzeilennavigation">
            <a className={footerLinkClass} href="#produkte">Produkte</a>
            <a className={footerLinkClass} href="#ueber-uns">Über uns</a>
            <a className={footerLinkClass} href="#kontakt">Kontakt</a>
          </nav>
        </div>

        <div>
          <p className="mb-4 text-[0.7rem] font-semibold tracking-[0.11em] text-muted uppercase">
            Kontakt
          </p>
          <p>Individuelle Anfragen und Auftragsarbeiten</p>
          <p>Kontaktdaten werden ergänzt.</p>
        </div>
      </div>

      <div className="mx-auto flex max-w-[100rem] flex-col justify-between gap-4 border-t border-line px-[clamp(1.25rem,4vw,4rem)] py-5 text-xs text-muted md:flex-row">
        <span>© {new Date().getFullYear()} Auto Deko</span>
        <span>Handgefertigte Einzelstücke aus Autoteilen</span>
      </div>
    </footer>
  );
}
