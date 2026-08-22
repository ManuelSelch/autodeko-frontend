import { displayTitleClass, eyebrowClass } from "./tailwind-styles";

export function BrandStatement() {
  return (
    <section
      className="grid justify-items-center bg-canvas px-[clamp(1.25rem,5vw,5.5rem)] py-[clamp(5rem,9vw,9rem)] text-center"
      id="ueber-uns"
      aria-labelledby="statement-title"
    >
      <p className={eyebrowClass}>Unser Antrieb</p>
      <h2
        id="statement-title"
        className={`${displayTitleClass} max-w-[15ch] text-[clamp(2.25rem,3.5vw,3.5rem)] leading-[1.05]`}
      >
        Wir geben ausgedienten Autoteilen ein zweites Leben –
        <span className="text-accent"> als Objekte mit Geschichte.</span>
      </h2>
      <a
        className="mt-8 inline-flex border-b border-current pb-1 text-xs font-bold tracking-[0.09em] text-ink uppercase no-underline"
        href="#handwerk"
      >
        Unser Handwerk entdecken
      </a>
    </section>
  );
}
