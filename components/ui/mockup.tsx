import React from "react";
import { cn } from "@/lib/utils";

const Mockup = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("flex relative", className)} {...props} />
));
Mockup.displayName = "Mockup";

const MockupFrame = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "relative z-10 border overflow-hidden rounded-xl shadow-2xl",
      className
    )}
    {...props}
  />
));
MockupFrame.displayName = "MockupFrame";

export { Mockup, MockupFrame };
