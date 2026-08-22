import { Image } from "@mantine/core";
import clock from "@/img/clock.png";
import { darkButtonClass, displayTitleClass, eyebrowClass } from "./tailwind-styles";

export function HeroSection() {
  return (
    <section
      className="grid min-h-[calc(100svh-82px)] overflow-hidden bg-canvas md:grid-cols-[minmax(0,1.05fr)_minmax(420px,0.95fr)]"
      aria-labelledby="hero-title"
    >
      <div className="relative z-10 flex flex-col items-start justify-center px-[clamp(1.25rem,6vw,7.5rem)] py-[clamp(4rem,8vw,9rem)]">
        <p className={eyebrowClass}>Handgefertigte Unikate aus Bayern</p>
        <h1
          id="hero-title"
          className={`${displayTitleClass} max-w-[9ch] text-[clamp(2.5rem,4vw,4rem)] leading-[1.02] text-ink`}
        >
          Aus Autoteilen <span className="block text-accent">wird Charakter.</span>
        </h1>
        <p className="mt-8 max-w-[34rem] text-[clamp(1rem,1.2vw,1.1rem)] leading-[1.65] text-muted">
          Wir verwandeln echte Fahrzeugteile in außergewöhnliche Wohnobjekte –
          mit sichtbarer Geschichte und von Hand gefertigt.
        </p>
        <a className={darkButtonClass} href="#produkte">
          Produkte entdecken
        </a>
      </div>

      <div
        className="relative isolate grid min-h-[500px] place-items-center overflow-hidden bg-sand md:min-h-[620px]"
        aria-label="Bremsen-Uhr von Auto Deko"
      >
        <span
          className="pointer-events-none absolute top-1/2 left-1/2 -z-10 -translate-x-1/2 -translate-y-1/2 font-serif text-[min(38vw,40rem)] leading-none text-white/30"
          aria-hidden="true"
        >
          A
        </span>
        <Image
          className="max-h-[76vh] w-[min(74%,620px)] -rotate-3 object-contain drop-shadow-2xl"
          src={clock.src}
          alt="Uhr aus einer Bremsscheibe mit rotem Bremssattel"
          fit="contain"
        />
        <span className="absolute right-[clamp(1.25rem,3vw,3rem)] bottom-[clamp(1.25rem,3vw,3rem)] text-[0.72rem] font-semibold tracking-[0.12em] text-ink/55 uppercase">
          Objekt 01 / Bremsen-Uhr
        </span>
      </div>
    </section>
  );
}
