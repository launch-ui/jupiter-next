import Navbar from "@/app/sections/navbar";
import Hero from "@/app/sections/hero";
import Logos from "@/app/sections/logos";
import Tiles from "@/app/sections/tiles";
import Items from "@/app/sections/items";
import Feature from "@/app/sections/feature";
import Testimonials from "@/app/sections/testimonials";
import FAQ from "@/app/sections/faq";
import CTA from "@/app/sections/cta";
import Footer from "@/app/sections/footer";

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
