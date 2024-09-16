import { Section } from "@/components/ui/section";

export default function Feature() {
  return (
    <Section>
      <div className="max-w-[1280px] text-center flex flex-col items-center gap-8 mx-auto">
        <h1 className="text-6xl font-semibold">
          The ultimate performance and SEO solution
        </h1>
        <p className="text-xl font-medium text-muted-foreground max-w-[600px]">
          Quality landing page built with React, Shadcn and Tailwind that you
          can copy/paste into your project.
        </p>
      </div>
    </Section>
  );
}
