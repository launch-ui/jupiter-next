import Navbar from "@/components/sections/navbar/navbar";
import Hero from "@/components/sections/hero/hero";
import Logos from "@/components/sections/logos/logos";

export default function Home() {
  return (
    <main className="bg-background text-foreground">
      <Navbar />
      <Hero />
      <Logos />
    </main>
  );
}
