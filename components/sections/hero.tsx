import { Button } from "@/components/ui/button";
import { Badge } from "../ui/badge";
import { ArrowRightIcon } from "lucide-react";

export default function Hero() {
  return (
    <section className="bg-background text-foreground py-20">
      <div className="max-w-[1280px] text-center flex flex-col items-center gap-12 mx-auto">
        <Badge variant="outline">
          <span className="text-muted-foreground">
            New version of Mercury is out!
          </span>
          <a href="#" className="flex items-center gap-1">
            Read more
            <ArrowRightIcon className="w-3 h-3" />
          </a>
        </Badge>
        <h1 className="text-8xl font-semibold">
          Give your big idea the website it deserves
        </h1>
        <p className="text-xl font-medium text-muted-foreground max-w-[580px]">
          Quality landing page built with React, Shadcn and Tailwind that you
          can copy/paste into your project.
        </p>
        <div className="flex justify-center gap-4">
          <Button variant="default">Get Started</Button>
          <Button variant="outline">Github</Button>
        </div>
      </div>
    </section>
  );
}
