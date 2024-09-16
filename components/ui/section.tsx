import * as React from "react";

import { cn } from "@/lib/utils";

const Section = React.forwardRef<
  HTMLElement,
  React.HTMLAttributes<HTMLElement>
>(({ className, ...props }, ref) => (
  <section
    ref={ref}
    className={cn("bg-background text-foreground py-32 px-4", className)}
    {...props}
  />
));
Section.displayName = "Section";

export { Section };
