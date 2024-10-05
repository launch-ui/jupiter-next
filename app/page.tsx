import Navbar from "@/components/sections/navbar";
import Hero from "@/components/sections/hero";
import Logos from "@/components/sections/logos";
import Items from "@/components/sections/items";
import FAQ from "@/components/sections/faq";
import CTA from "@/components/sections/cta";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <main className="bg-background text-foreground">
      <Navbar />
      <Hero />
      <Logos />
      <Items />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
