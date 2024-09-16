import Navbar from "@/app/sections/navbar";
import Hero from "@/app/sections/hero";
import Logos from "@/app/sections/logos";
import Tiles from "@/app/sections/tiles";
import Items from "@/app/sections/items";

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
