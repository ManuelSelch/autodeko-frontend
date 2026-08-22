import { BrandStatement } from "@/components/home/brand-statement";
import { BrandTicker } from "@/components/home/brand-ticker";
import { ContactUs } from "@/components/home/contact-us";
import { HeroSection } from "@/components/home/hero-section";
import ProductShowcase from "@/components/home/product-showcase";
import { StorySections } from "@/components/home/story-sections";
import api from "@/lib/api";

export const revalidate = 300;

export default async function Home() {
  const products = await api.getProducts();

  return (
    <main id="startseite">
      <HeroSection />
      <ProductShowcase products={products} />
      <BrandStatement />
      <StorySections />
      <ContactUs />
    </main>
  );
}
