import * as React from "react";
import { cn } from "@/lib/utils";

const Footer = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <footer
    ref={ref}
    className={cn("bg-background text-foreground py-12", className)}
    {...props}
  />
));
Footer.displayName = "Footer";

const FooterColumn = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("flex flex-col gap-4", className)} {...props} />
));
FooterColumn.displayName = "FooterColumn";

const FooterBottom = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex flex-col items-center justify-between gap-4 border-t border-muted-foreground pt-4 mt-8 sm:flex-row",
      className
    )}
    {...props}
  />
));
FooterBottom.displayName = "FooterBottom";

export { Footer, FooterColumn, FooterBottom };
