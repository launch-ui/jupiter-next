import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRightIcon } from "lucide-react";
import { Section } from "@/components/ui/section";

export default function Hero() {
  return (
    <Section>
      <div className="max-w-container text-center flex flex-col items-center gap-6 sm:gap-12 mx-auto">
        <Badge variant="outline">
          <span className="text-muted-foreground">
            New version of Jupiter is out!
          </span>
          <a href="#" className="flex items-center gap-1">
            Read more
            <ArrowRightIcon className="w-3 h-3" />
          </a>
        </Badge>
        <h1 className="text-4xl sm:text-6xl md:text-8xl font-semibold bg-gradient-to-r from-foreground to-muted-foreground inline-block text-transparent bg-clip-text drop-shadow-2xl">
          Give your big idea the website it deserves
        </h1>
        <p className="text-sm sm:text-xl font-medium text-muted-foreground max-w-[400px]">
          A modern, responsive landing page that you can copy/paste into your
          project.
        </p>
        <div className="flex justify-center gap-4">
          <Button variant="default" size="lg">
            Get Started
          </Button>
          <Button variant="outline" size="lg">
            Github
          </Button>
        </div>
      </div>
    </Section>
  );
}
