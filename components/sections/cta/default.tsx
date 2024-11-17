import { Section } from "../../ui/section";
import { Button } from "../../ui/button";
import { siteConfig } from "@/config/site";
import Glow from "../../ui/glow";

export default function CTA() {
  return (
    <Section className="group relative overflow-hidden">
      <div className="relative z-10 mx-auto flex max-w-container flex-col items-center gap-6 text-center sm:gap-8">
        <h2 className="text-3xl font-semibold sm:text-5xl">Start building</h2>
        <Button variant="default" size="lg" asChild>
          <a href={siteConfig.getStartedUrl}>Get Started</a>
        </Button>
      </div>
      <div className="absolute left-0 top-0 h-full w-full translate-y-[1rem] opacity-80 transition-all duration-500 ease-in-out group-hover:translate-y-[-2rem] group-hover:opacity-100">
        <Glow variant="bottom" />
      </div>
    </Section>
  );
}
