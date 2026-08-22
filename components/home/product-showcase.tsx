import { Image } from "@mantine/core";
import Link from "next/link";
import autoFass from "@/img/auto-fass.png";
import { formatMoney } from "@/lib/shopify/format-money";
import type { Product } from "@/lib/shopify/types";
import { displayTitleClass } from "./tailwind-styles";

export default function ProductShowcase({ products }: { products: Product[] }) {
  return (
    <section
      className="bg-paper px-[clamp(1.25rem,5vw,5.5rem)] py-[clamp(5rem,9vw,9rem)]"
      id="produkte"
      aria-labelledby="products-title"
    >
      <header className="mx-auto mb-[clamp(2.5rem,5vw,4.5rem)] flex max-w-[92rem] flex-col items-start justify-between gap-8 md:flex-row md:items-end">
        <h2
          id="products-title"
          className={`${displayTitleClass} max-w-[10ch] text-[clamp(2.75rem,5vw,5rem)] leading-[0.98]`}
        >
          Ausgewählte Einzelstücke
        </h2>
        <p className="m-0 max-w-[31rem] leading-[1.7] text-muted">
          Echte Fahrzeugteile, in Handarbeit neu interpretiert. Kein Objekt gleicht
          dem anderen – und genau das ist der Punkt.
        </p>
      </header>

      {products.length === 0 ? (
        <div className="mx-auto max-w-[92rem] border border-line px-6 py-16 text-center">
          <strong>Neue Einzelstücke sind in Arbeit.</strong>
          <p className="mt-2 text-muted">
            Schau bald wieder vorbei – die nächsten Produkte entstehen bereits.
          </p>
        </div>
      ) : (
        <div className="mx-auto grid max-w-[92rem] grid-cols-1 gap-[clamp(1rem,2.5vw,2.5rem)] md:grid-cols-2 xl:grid-cols-4">
          {products.map((product) => (
            <Link
              className="group min-w-0 text-inherit no-underline outline-offset-4 focus-visible:outline-2 focus-visible:outline-accent"
              href={`/products/${product.handle}`}
              key={product.id}
            >
              <article className="min-w-0">
                <div className="relative grid aspect-[4/5] place-items-center overflow-hidden bg-canvas">
                  <Image
                    className="h-[82%] w-[82%] object-contain transition-transform duration-300 group-hover:scale-[1.035] motion-reduce:transition-none"
                    src={product.featuredImage?.url ?? autoFass.src}
                    alt={product.featuredImage?.altText ?? product.title}
                    fit="contain"
                    loading="lazy"
                  />
                  {!product.availableForSale && (
                    <span className="absolute top-3.5 left-3.5 bg-ink px-3 py-2 text-[0.68rem] font-bold tracking-[0.07em] text-paper uppercase">
                      Ausverkauft
                    </span>
                  )}
                </div>
                <div className="flex justify-between gap-4 pt-4">
                  <h3 className="m-0 text-[0.93rem] font-semibold">{product.title}</h3>
                  <p className="m-0 text-[0.93rem] whitespace-nowrap text-muted">
                    {formatMoney(product.price)}
                  </p>
                </div>
              </article>
            </Link>
          ))}
        </div>
      )}
    </section>
  );
}
