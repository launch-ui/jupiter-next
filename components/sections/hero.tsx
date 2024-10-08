"use client";

import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { ArrowRightIcon } from "lucide-react";
import { Section } from "../ui/section";
import { Mockup, MockupFrame } from "../ui/mockup";
import Glow from "../ui/glow";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { useTheme } from "next-themes";

export default function Hero() {
  const { resolvedTheme } = useTheme();
  let src;

  switch (resolvedTheme) {
    case "light":
      src = "/app-light.png";
      break;
    case "dark":
      src = "/app-dark.png";
      break;
    default:
      src =
        "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";
      break;
  }

  return (
    <Section className="fade-bottom pb-0 sm:pb-0 md:pb-0">
      <div className="mx-auto flex max-w-container flex-col gap-12 sm:gap-24">
        <div className="flex flex-col items-center gap-6 text-center sm:gap-12">
          <Badge variant="outline" className="animate-appear">
            <span className="text-muted-foreground">
              New version of Jupiter is out!
            </span>
            <a href={siteConfig.url} className="flex items-center gap-1">
              Read more
              <ArrowRightIcon className="h-3 w-3" />
            </a>
          </Badge>
          <h1 className="inline-block animate-appear bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-4xl font-semibold leading-tight text-transparent drop-shadow-2xl sm:text-6xl sm:leading-tight md:text-8xl md:leading-tight">
            Give your big idea the website it deserves
          </h1>
          <p className="text-md max-w-[550px] animate-appear font-medium text-muted-foreground opacity-0 delay-100 sm:text-xl">
            Landing page template built with React, Shadcn/ui and Tailwind that
            you can copy/paste into your project.
          </p>
          <div className="relative z-10 flex animate-appear justify-center gap-4 opacity-0 delay-300">
            <div className="relative z-10 flex animate-appear justify-center gap-4 opacity-0 delay-300">
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
                src={src}
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
