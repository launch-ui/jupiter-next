import { Section } from "../ui/section";
import { Button } from "../ui/button";
import { siteConfig } from "@/config/site";

export default function CTA() {
  return (
    <Section className="relative overflow-hidden">
      <div className="mx-auto flex max-w-container flex-col items-center gap-6 text-center sm:gap-8">
        <h2 className="text-3xl font-semibold sm:text-5xl">Start building</h2>
        <Button variant="default" size="lg" asChild>
          <a href={siteConfig.url}>Get Started</a>
        </Button>
      </div>
      <div className="absolute left-0 top-0 h-full w-full animate-pulse-hover">
        <div className="absolute -bottom-[128px] left-1/2 h-[128px] w-[80%] max-w-[960px] -translate-x-1/2 rounded-[50%] bg-brand-foreground/70 blur-[96px]" />
        <div className="absolute -bottom-[72px] left-1/2 h-[64px] w-[60%] max-w-[640px] -translate-x-1/2 rounded-[50%] bg-brand/70 blur-[32px]" />
      </div>
    </Section>
  );
}
