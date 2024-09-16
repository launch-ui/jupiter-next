import { Section } from "@/components/ui/section";
import Testimonial from "@/components/ui/testimonial";

export default function Testimonials() {
  return (
    <Section>
      <div className="max-w-[1280px] text-center flex flex-col items-center gap-8 mx-auto">
        <h2 className="text-5xl font-semibold">
          Loved by designers and developers across the planet
        </h2>
        <p className="text-xl font-medium text-muted-foreground max-w-[600px]">
          Here&apos;s what people are saying about Mercury
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <Testimonial
            name="Ryan Dick"
            username="ryandick"
            text="Mercury is the best template I used so far. I really like it and it already help my business make a lot of money."
          />
          <Testimonial
            name="Ryan Dick"
            username="ryandick"
            text="Mercury is the best template I used so far. I really like it and it already help my business make a lot of money."
          />
          <Testimonial
            name="Ryan Dick"
            username="ryandick"
            text="Mercury is the best template I used so far. I really like it and it already help my business make a lot of money."
          />
          <Testimonial
            name="Ryan Dick"
            username="ryandick"
            text="Mercury is the best template I used so far. I really like it and it already help my business make a lot of money."
          />
        </div>
      </div>
    </Section>
  );
}
