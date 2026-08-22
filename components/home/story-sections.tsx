import { Image } from "@mantine/core";
import bestseller from "@/img/bestseller.jpg";
import clock from "@/img/clock.png";
import { displayTitleClass, eyebrowClass } from "./tailwind-styles";

const visualClass =
  "grid min-h-[280px] place-items-center overflow-hidden bg-sand md:min-h-[540px]";
const imageClass =
  "max-h-[560px] w-[min(66%,510px)] object-contain drop-shadow-2xl";
const bestsellerVisualClass =
  "min-h-[280px] overflow-hidden md:min-h-[540px]";
const bestsellerImageClass =
  "block h-full min-h-[280px] w-full object-cover md:min-h-[540px]";
const copyClass =
  "flex min-h-[280px] flex-col items-start justify-center bg-paper p-[clamp(3rem,8vw,9rem)]";
const titleClass = `${displayTitleClass} max-w-[9ch] text-[clamp(2.1rem,3.2vw,3rem)] leading-[1.05]`;

export function StorySections() {
  return (
    <div id="handwerk">
      <section
        className="grid min-h-[180px] grid-cols-1 md:grid-cols-2"
        aria-labelledby="story-authenticity"
      >
        <div className={bestsellerVisualClass}>
          <Image
            className={bestsellerImageClass}
            src={bestseller.src}
            alt="Uhr aus Bremsscheibe und rotem Audi-RS-Bremssattel vor einem roten Sportwagen"
            fit="cover"
          />
        </div>
        <div className={copyClass}>
          <p className={eyebrowClass}>Unser Bestseller</p>
          <h2 id="story-authenticity" className={titleClass}>
            Zeit, die Geschichte trägt.
          </h2>
          <p className="mt-7 max-w-[32rem] text-[1.05rem] leading-[1.75] text-muted">
            Aus einer originalen Bremsscheibe und ihrem Bremssattel entsteht unser
            gefragtestes Einzelstück. Jede Uhr bewahrt die Spuren ihres früheren
            Lebens und bringt echte Automobilgeschichte in dein Zuhause.
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
