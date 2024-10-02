import Navbar from "@/components/sections/navbar";
import Hero from "@/components/sections/hero";
import Logos from "@/components/sections/logos";
import Tiles from "@/components/sections/bento-grid";
import Items from "@/components/sections/items";
import Feature from "@/components/sections/feature";
import Testimonials from "@/components/sections/testimonials";
import FAQ from "@/components/sections/faq";
import CTA from "@/components/sections/cta";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <main className="bg-background text-foreground">
      <Navbar />
      <Hero />
      <Logos />
      <Tiles />
      <Items />
      <Feature />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
