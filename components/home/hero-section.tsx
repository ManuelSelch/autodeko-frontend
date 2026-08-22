import Image from "next/image";
import hero from "@/img/hero.jpg";
import { displayTitleClass } from "./tailwind-styles";

export function HeroSection() {
  return (
    <section
      className="relative flex min-h-[calc(100svh-82px)] items-end overflow-hidden bg-ink"
      aria-labelledby="hero-title"
    >
      <Image
        className="object-cover object-[center_40%]"
        src={hero}
        alt="Automotive-Szene mit Sportwagen und einer Uhr aus einer Bremsscheibe"
        fill
        priority
        sizes="100vw"
      />
      <div
        className="absolute inset-0 bg-linear-to-t from-black/75 via-black/15 to-black/10"
        aria-hidden="true"
      />

      <div className="relative z-10 w-full px-[clamp(1.25rem,6vw,7.5rem)] py-[clamp(3rem,7vw,6rem)]">
        <h1
          id="hero-title"
          className={`${displayTitleClass} max-w-[12ch] text-[clamp(2.5rem,4vw,4rem)] leading-[1.02] text-white drop-shadow-lg`}
        >
          Autoteile. Neu gedacht.
        </h1>
        <a
          className="mt-7 inline-flex min-h-12 items-center justify-center border border-white bg-white px-5 text-xs font-semibold tracking-[0.08em] text-ink uppercase no-underline transition-colors hover:bg-transparent hover:text-white focus-visible:bg-transparent focus-visible:text-white motion-reduce:transition-none"
          href="#produkte"
        >
          Produkte entdecken
        </a>
      </div>
    </section>
  );
}
