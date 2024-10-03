import { Section } from "@/components/ui/section";
import Placeholder from "../ui/placeholder";

export default function Feature() {
  return (
    <Section>
      <div className="max-w-container flex flex-col gap-8 sm:gap-24 mx-auto">
        <div className="text-center flex flex-col items-center gap-4 sm:gap-8">
          <h1 className="text-3xl sm:text-7xl font-semibold max-w-[840px] bg-gradient-to-r from-foreground to-muted-foreground inline-block text-transparent bg-clip-text drop-shadow-2xl sm:leading-tight">
            Quality you can trust. And build on.
          </h1>
          <p className="text-md sm:text-xl font-medium text-muted-foreground max-w-[600px]">
            Quality landing page built with React, Shadcn and Tailwind that you
            can copy/paste into your project.
          </p>
        </div>
        <Placeholder />
      </div>
    </Section>
  );
}
