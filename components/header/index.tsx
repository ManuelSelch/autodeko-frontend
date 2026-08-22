const navigation = [
  { href: "#startseite", label: "Startseite" },
  { href: "#produkte", label: "Produkte" },
  { href: "#ueber-uns", label: "Über uns" },
  { href: "#kontakt", label: "Kontakt" },
];

const navLinkClass =
  "relative text-[0.74rem] font-semibold tracking-[0.09em] text-ink uppercase no-underline after:absolute after:right-0 after:-bottom-2 after:left-0 after:h-0.5 after:origin-left after:scale-x-0 after:bg-accent after:transition-transform hover:after:scale-x-100 focus-visible:after:scale-x-100 motion-reduce:after:transition-none";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/95 backdrop-blur-md">
      <div className="mx-auto grid min-h-[82px] max-w-[100rem] grid-cols-[1fr_auto] items-center gap-8 px-[clamp(1.25rem,4vw,4rem)] md:grid-cols-[1fr_auto_1fr]">
        <a
          className="w-max font-display text-xl leading-[0.9] font-bold tracking-[0.03em] text-ink uppercase no-underline"
          href="#startseite"
          aria-label="Auto Deko Startseite"
        >
          Auto <span className="block text-accent">Deko</span>
        </a>

        <nav className="hidden items-center gap-[clamp(1.5rem,3vw,3.25rem)] md:flex" aria-label="Hauptnavigation">
          {navigation.map((item) => (
            <a className={navLinkClass} href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <span className="hidden justify-self-end text-[0.74rem] font-semibold tracking-[0.09em] text-muted uppercase md:block">
          Automotive Objects
        </span>

        <details className="relative justify-self-end md:hidden">
          <summary className="cursor-pointer list-none text-[0.74rem] font-semibold tracking-[0.09em] uppercase [&::-webkit-details-marker]:hidden">
            Menü
          </summary>
          <nav
            className="absolute top-8 right-0 grid w-[min(17rem,calc(100vw-2.5rem))] gap-4 border border-line bg-paper p-5 shadow-xl"
            aria-label="Mobile Navigation"
          >
            {navigation.map((item) => (
              <a className="font-semibold text-ink no-underline" href={item.href} key={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
        </details>
      </div>
    </header>
  );
}
