import Navbar from "@/components/sections/navbar/navbar";
import Hero from "@/components/sections/hero/hero";
import Logos from "@/components/sections/logos/logos";
import FeatureTiles from "@/components/sections/feature-tiles/feature-tiles";

export default function Home() {
  return (
    <main className="bg-background text-foreground">
      <Navbar />
      <Hero />
      <Logos />
      <FeatureTiles />
    </main>
  );
}
