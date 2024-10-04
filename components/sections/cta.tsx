import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

export default function CTA() {
  return (
    <Section>
      <div className="max-w-container text-center flex flex-col items-center gap-6 sm:gap-8 mx-auto">
        <h2 className="text-3xl sm:text-5xl font-semibold">Start building</h2>
        <Button variant="default" size="lg" asChild>
          <a href={siteConfig.url}>Get Started</a>
        </Button>
      </div>
    </Section>
  );
}
