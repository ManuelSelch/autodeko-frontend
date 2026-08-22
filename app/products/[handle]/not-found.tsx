import Link from "next/link";
import {
  productButtonClass,
  productEyebrowClass,
  productPageClass,
  productTitleClass,
} from "./tailwind-styles";

export default function ProductNotFound() {
  return (
    <main className={productPageClass}>
      <section className="mx-auto max-w-2xl py-[clamp(4rem,10vw,10rem)]">
        <p className={productEyebrowClass}>404 / Auto Deko</p>
        <h1 className={productTitleClass}>Produkt nicht gefunden.</h1>
        <p className="mt-8 whitespace-pre-line text-[1.02rem] leading-[1.75] text-muted">
          Dieses Einzelstück ist nicht mehr verfügbar oder wurde verschoben.
        </p>
        <Link className={`${productButtonClass} sm:w-auto`} href="/#produkte">
          Zurück zu den Produkten
        </Link>
      </section>
    </main>
  );
}
