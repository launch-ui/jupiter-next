import React from "react";
import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";

const glowVariants = cva("absolute w-full", {
  variants: {
    variant: {
      top: "top-0",
      above: "-top-[128px]",
      bottom: "bottom-0",
      below: "-bottom-[128px]",
      center: "top-[50%]",
    },
  },
  defaultVariants: {
    variant: "top",
  },
});

const Glow = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof glowVariants>
>(({ className, variant, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(glowVariants({ variant }), className)}
    {...props}
  >
    <div
      className={cn(
        "absolute left-1/2 h-[256px] w-[80%] -translate-x-1/2 rounded-[50%] bg-brand-foreground blur-[256px]",
        variant === "center" && "h-[512px] w-[100%] -translate-y-1/2",
      )}
    />
    <div
      className={cn(
        "absolute left-1/2 top-[32px] h-[128px] w-[60%] -translate-x-1/2 rounded-[50%] bg-brand blur-[64px]",
        variant === "center" && "h-[256px] w-[80%] -translate-y-1/2",
      )}
    />
  </div>
));
Glow.displayName = "Glow";

export default Glow;
