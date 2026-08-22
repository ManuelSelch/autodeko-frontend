import { Image } from "@mantine/core";
import autoFass from "@/img/auto-fass.png";
import clock from "@/img/clock.png";
import { displayTitleClass, eyebrowClass } from "./tailwind-styles";

const visualClass =
  "grid min-h-[480px] place-items-center overflow-hidden bg-sand md:min-h-[540px]";
const imageClass =
  "max-h-[560px] w-[min(66%,510px)] object-contain drop-shadow-2xl";
const copyClass =
  "flex min-h-[480px] flex-col items-start justify-center bg-paper p-[clamp(3rem,8vw,9rem)]";
const titleClass = `${displayTitleClass} max-w-[9ch] text-[clamp(2.5rem,4.5vw,4.75rem)] leading-[0.98]`;

export function StorySections() {
  return (
    <div id="handwerk">
      <section
        className="grid min-h-[680px] grid-cols-1 md:grid-cols-2"
        aria-labelledby="story-authenticity"
      >
        <div className={visualClass}>
          <Image
            className={imageClass}
            src={autoFass.src}
            alt="Beleuchtetes Regal aus einem schwarzen Ölfass"
            fit="contain"
          />
        </div>
        <div className={copyClass}>
          <p className={eyebrowClass}>Ungezähmte Authentizität</p>
          <h2 id="story-authenticity" className={titleClass}>
            Ecken, Kanten, Vergangenheit.
          </h2>
          <p className="mt-7 max-w-[32rem] text-[1.05rem] leading-[1.75] text-muted">
            Gebrauchsspuren werden nicht versteckt. Sie erzählen, woher ein Teil
            kommt, und machen jedes neue Objekt unverwechselbar.
          </p>
        </div>
      </section>

      <section
        className="grid min-h-[680px] grid-cols-1 md:grid-cols-2"
        aria-labelledby="story-craft"
      >
        <div className={`${visualClass} bg-[#d7d5cc] md:order-2`}>
          <Image
            className={imageClass}
            src={clock.src}
            alt="Handgefertigte Uhr aus einer Porsche-Bremsscheibe"
            fit="contain"
          />
        </div>
        <div className={`${copyClass} md:order-1`}>
          <p className={eyebrowClass}>Echte Handarbeit</p>
          <h2 id="story-craft" className={titleClass}>
            Vom Bauteil zum Blickfang.
          </h2>
          <p className="mt-7 max-w-[32rem] text-[1.05rem] leading-[1.75] text-muted">
            Ausgewählt, gereinigt und neu gedacht: Jeder Arbeitsschritt verbindet
            technische Präzision mit einem Gespür für Form und Material.
          </p>
        </div>
      </section>
    </div>
  );
}
