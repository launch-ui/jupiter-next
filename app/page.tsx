import Navbar from "@/components/sections/navbar/navbar";
import Hero from "@/components/sections/hero/hero";
import Logos from "@/components/sections/logos/logos";
import Tiles from "@/components/sections/tiles/tiles";
import Items from "@/components/sections/items/items";

export default function Home() {
  return (
    <main className="bg-background text-foreground">
      <Navbar />
      <Hero />
      <Logos />
      <Tiles />
      <Items />
    </main>
  );
}
