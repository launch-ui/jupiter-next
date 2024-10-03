import { Section } from "@/components/ui/section";
import Testimonial from "@/components/ui/testimonial";

export default function Testimonials() {
  return (
    <Section>
      <div className="max-w-container text-center flex flex-col items-center gap-4 sm:gap-16 mx-auto overflow-hidden">
        <div className="flex flex-col gap-4 sm:gap-8 items-center">
          <h2 className="text-3xl sm:text-5xl font-semibold max-w-[720px] leading-tight sm:leading-tight">
            Loved by designers and developers across the planet
          </h2>
          <p className="text-md sm:text-xl font-medium text-muted-foreground max-w-[600px]">
            Here&apos;s what people are saying about Jupiter
          </p>
        </div>
        <div className="overflow-hidden w-full fade-x">
          <div className="flex flex-col gap-4 -mx-48 items-center">
            <div className="flex gap-4 items-center justify-center">
              <Testimonial
                className="w-[420px]"
                name="Ryan Dick"
                username="ryandick"
                text="Jupiter is the best template I used so far. I really like it and it already help my business make a lot of money."
              />
              <Testimonial
                className="w-[420px]"
                name="Ryan Dick"
                username="ryandick"
                text="Jupiter is the best template I used so far. I really like it and it already help my business make a lot of money."
              />
              <Testimonial
                className="w-[420px]"
                name="Ryan Dick"
                username="ryandick"
                text="Jupiter is the best template I used so far. I really like it and it already help my business make a lot of money."
              />
              <Testimonial
                className="w-[420px]"
                name="Ryan Dick"
                username="ryandick"
                text="Jupiter is the best template I used so far. I really like it and it already help my business make a lot of money."
              />
            </div>
            <div className="flex gap-4 items-center justify-center">
              <Testimonial
                className="w-[420px]"
                name="Ryan Dick"
                username="ryandick"
                text="Jupiter is the best template I used so far. I really like it and it already help my business make a lot of money."
              />
              <Testimonial
                className="w-[420px]"
                name="Ryan Dick"
                username="ryandick"
                text="Jupiter is the best template I used so far. I really like it and it already help my business make a lot of money."
              />
              <Testimonial
                className="w-[420px]"
                name="Ryan Dick"
                username="ryandick"
                text="Jupiter is the best template I used so far. I really like it and it already help my business make a lot of money."
              />
            </div>
            <div className="flex gap-4 items-center justify-center">
              <Testimonial
                className="w-[420px]"
                name="Ryan Dick"
                username="ryandick"
                text="Jupiter is the best template I used so far. I really like it and it already help my business make a lot of money."
              />
              <Testimonial
                className="w-[420px]"
                name="Ryan Dick"
                username="ryandick"
                text="Jupiter is the best template I used so far. I really like it and it already help my business make a lot of money."
              />
              <Testimonial
                className="w-[420px]"
                name="Ryan Dick"
                username="ryandick"
                text="Jupiter is the best template I used so far. I really like it and it already help my business make a lot of money."
              />
              <Testimonial
                className="w-[420px]"
                name="Ryan Dick"
                username="ryandick"
                text="Jupiter is the best template I used so far. I really like it and it already help my business make a lot of money."
              />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
