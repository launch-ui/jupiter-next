import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";

export default function CTA() {
  return (
    <Section>
      <div className="max-w-container text-center flex flex-col items-center gap-8 mx-auto">
        <h2 className="text-5xl font-semibold">Start building</h2>
        <Button variant="default" size="lg">
          Get started
        </Button>
      </div>
    </Section>
  );
}
