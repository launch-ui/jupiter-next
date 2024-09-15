import Navbar from "@/components/sections/navbar/navbar";
import Hero from "@/components/sections/hero/hero";

export default function Home() {
  return (
    <main className="bg-background text-foreground">
      <Navbar />
      <Hero />
    </main>
  );
}
