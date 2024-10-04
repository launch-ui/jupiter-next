import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRightIcon } from "lucide-react";
import { Section } from "@/components/ui/section";
import Placeholder from "@/components/ui/placeholder";

export default function Hero() {
  return (
    <Section>
      <div className="max-w-container flex flex-col gap-12 sm:gap-24 mx-auto">
        <div className="text-center flex flex-col items-center gap-6 sm:gap-12">
          <Badge variant="outline" className="animate-appear">
            <span className="text-muted-foreground">
              New version of Jupiter is out!
            </span>
            <a href="#" className="flex items-center gap-1">
              Read more
              <ArrowRightIcon className="w-3 h-3" />
            </a>
          </Badge>
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-semibold bg-gradient-to-r from-foreground to-muted-foreground inline-block text-transparent bg-clip-text drop-shadow-2xl  leading-tight sm:leading-tight md:leading-tight animate-appear">
            Give your big idea the website it deserves
          </h1>
          <p className="text-md sm:text-xl font-medium text-muted-foreground max-w-[550px] animate-appear opacity-0 delay-100">
            Landing page kit built with React, Shadcn and Tailwind that you can
            copy/paste into your project.
          </p>
          <div className="flex justify-center gap-4 relative z-10 animate-appear opacity-0 delay-300">
            <Button variant="default" size="lg">
              Get Started
            </Button>
            <Button variant="glow" size="lg">
              Github
            </Button>
          </div>
        </div>
        <Placeholder />
      </div>
    </Section>
  );
}
