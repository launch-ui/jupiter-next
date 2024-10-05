import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRightIcon } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Mockup, MockupFrame } from "@/components/ui/mockup";
import Glow from "@/components/ui/glow";
import Image from "next/image";
import { siteConfig } from "@/config/site";

export default function Hero() {
  return (
    <Section className="pb-0 sm:pb-0 md:pb-0 fade-bottom">
      <div className="max-w-container flex flex-col gap-12 sm:gap-24 mx-auto">
        <div className="text-center flex flex-col items-center gap-6 sm:gap-12">
          <Badge variant="outline" className="animate-appear">
            <span className="text-muted-foreground">
              New version of Jupiter is out!
            </span>
            <a href={siteConfig.url} className="flex items-center gap-1">
              Read more
              <ArrowRightIcon className="w-3 h-3" />
            </a>
          </Badge>
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-semibold bg-gradient-to-r from-foreground to-muted-foreground inline-block text-transparent bg-clip-text drop-shadow-2xl  leading-tight sm:leading-tight md:leading-tight animate-appear">
            Give your big idea the website it deserves
          </h1>
          <p className="text-md sm:text-xl font-medium text-muted-foreground max-w-[550px] animate-appear opacity-0 delay-100">
            Landing page kit built with React, Shadcn/ui and Tailwind that you
            can copy/paste into your project.
          </p>
          <div className="flex justify-center gap-4 relative z-10 animate-appear opacity-0 delay-300">
            <div className="flex justify-center gap-4 relative z-10 animate-appear opacity-0 delay-300">
              <Button variant="default" size="lg" asChild>
                <a href={siteConfig.url}>Get Started</a>
              </Button>
              <Button variant="glow" size="lg" asChild>
                <a href={siteConfig.links.github}>Github</a>
              </Button>
            </div>
          </div>
          <Mockup>
            <MockupFrame className="animate-appear opacity-0 delay-700">
              <Image
                src="/app-dark.png"
                alt="Jupiter app screenshot"
                width={1248}
                height={765}
              />
            </MockupFrame>
            <Glow variant="top" className="animate-appear-zoom delay-1000" />
          </Mockup>
        </div>
      </div>
    </Section>
  );
}
