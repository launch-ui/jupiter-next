import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

export default function CTA() {
  return (
    <Section className="relative overflow-hidden">
      <div className="max-w-container text-center flex flex-col items-center gap-6 sm:gap-8 mx-auto">
        <h2 className="text-3xl sm:text-5xl font-semibold">Start building</h2>
        <Button variant="default" size="lg" asChild>
          <a href={siteConfig.url}>Get Started</a>
        </Button>
      </div>
      <div className="absolute top-0 left-0 w-full h-full animate-pulse-hover">
        <div className="absolute -bottom-[128px] w-[80%] max-w-[960px] h-[128px] bg-brand-foreground/70 rounded-[50%] blur-[96px] left-1/2 -translate-x-1/2" />
        <div className="absolute -bottom-[72px] w-[60%] max-w-[640px] h-[64px] bg-brand/70 rounded-[50%] blur-[32px] left-1/2 -translate-x-1/2" />
      </div>
    </Section>
  );
}
