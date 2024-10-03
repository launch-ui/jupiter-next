import { Section } from "@/components/ui/section";

export default function Feature() {
  return (
    <Section>
      <div className="max-w-container text-center flex flex-col items-center gap-4 sm:gap-8 mx-auto">
        <h1 className="text-3xl sm:text-6xl font-semibold">
          The ultimate performance and SEO solution
        </h1>
        <p className="text-md sm:text-xl font-medium text-muted-foreground max-w-[600px]">
          Quality landing page built with React, Shadcn and Tailwind that you
          can copy/paste into your project.
        </p>
      </div>
    </Section>
  );
}
