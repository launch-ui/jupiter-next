import { Section } from "@/components/ui/section";
import Testimonial from "@/components/ui/testimonial";
import Marquee from "@/components/ui/marquee";
import React from "react";
import { siteConfig } from "@/config/site";

const testimonials = [
  {
    name: "Fabrizio Fernandez",
    username: "fab3304",
    text: (
      <>
        Playing around with{" "}
        <a href={siteConfig.url} className="text-brand">
          @jupiter
        </a>{" "}
        suddenly made me feeling inspired to launch that side project.
      </>
    ),
    image: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Darius Flynn",
    username: "flynnn",
    text: (
      <>
        Exploring{" "}
        <a href={siteConfig.url} className="text-brand">
          @jupiter
        </a>
        &apos;s sleek UI. It&apos;s like a dark mode enthusiast&apos;s
        playground.
      </>
    ),
    image: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Felix B.",
    username: "felixbs",
    text: (
      <>
        Digging into{" "}
        <a href={siteConfig.url} className="text-brand">
          @jupiter
        </a>
        . Those shadows are giving me serious design envy.
      </>
    ),
    image: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Olivia Blackwood",
    username: "olivia1992",
    text: (
      <>
        <a href={siteConfig.url} className="text-brand">
          @jupiter
        </a>{" "}
        is not messing around with its component library game.
      </>
    ),
    image: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Esme Rothschild",
    username: "EmeRothArt",
    text: (
      <>
        <a href={siteConfig.url} className="text-brand">
          @jupiter
        </a>{" "}
        is slick. That globe graphic though. Making me feel like I&apos;m
        building websites for a sci-fi movie.
      </>
    ),
    image: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Kai Nakamura",
    username: "KaiNakWaves",
    text: (
      <>
        Just made my first website with{" "}
        <a href={siteConfig.url} className="text-brand">
          @jupiter
        </a>
        . Its flexibility is speaking my language. No drama, just seamless
        integration.
      </>
    ),
    image: "https://avatar.vercel.sh/jack",
  },
];

const firstRow = testimonials.slice(0, testimonials.length / 2);
const secondRow = testimonials.slice(testimonials.length / 2);

export default function Testimonials() {
  return (
    <Section className="px-0">
      <div className="max-w-container text-center flex flex-col items-center gap-4 sm:gap-16 mx-auto">
        <div className="flex flex-col gap-4 sm:gap-8 items-center px-4">
          <h2 className="text-3xl sm:text-5xl font-semibold max-w-[720px] leading-tight sm:leading-tight">
            Loved by designers and developers across the planet
          </h2>
          <p className="text-md sm:text-xl font-medium text-muted-foreground max-w-[600px]">
            Here&apos;s what people are saying about Jupiter
          </p>
        </div>
        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
          <Marquee pauseOnHover className="[--duration:20s]">
            {firstRow.map((testimonial) => (
              <Testimonial key={testimonial.username} {...testimonial} />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover className="[--duration:20s]">
            {secondRow.map((testimonial) => (
              <Testimonial key={testimonial.username} {...testimonial} />
            ))}
          </Marquee>
          <div className="hidden sm:block pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-background"></div>
          <div className="hidden sm:block pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-background"></div>
        </div>
      </div>
    </Section>
  );
}
