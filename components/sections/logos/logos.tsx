import Figma from "@/components/logos/figma";
import React from "@/components/logos/react";
import Shadcn from "@/components/logos/shadcn";
import Tailwind from "@/components/logos/tailwind";
import TypeScript from "@/components/logos/typescript";
import Logo from "./logo";

export default function Logos() {
  return (
    <section className="bg-background text-foreground py-32">
      <div className="max-w-[1280px] text-center flex flex-col items-center gap-8 mx-auto">
        <h2 className="text-sm font-semibold">Built with the best tools</h2>
        <div className="flex flex-wrap items-center justify-center gap-8">
          <Logo image={React} name="React" version="18.3.1" />
          <Logo image={Tailwind} name="Tailwind" version="3.3.0" />
          <Logo image={Figma} name="Figma" version="3.3.0" />
          <Logo image={Shadcn} name="Shadcn" version="1.0.0" />
          <Logo image={TypeScript} name="TypeScript" version="5.0.4" />
        </div>
      </div>
    </section>
  );
}
