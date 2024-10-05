import React from "react";
import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";

const glowVariants = cva("absolute w-full opacity-0", {
  variants: {
    variant: {
      top: "top-0",
      bottom: "-bottom-[128px]",
    },
  },
  defaultVariants: {
    variant: "top",
  },
});

export interface GlowProps extends React.HTMLAttributes<HTMLDivElement> {
  variant: "top" | "bottom";
}

const Glow = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof glowVariants>
>(({ className, variant, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(glowVariants({ variant }), className)}
    {...props}
  >
    <div className="w-[80%] absolute h-[256px] bg-brand-foreground rounded-[50%] blur-[256px] left-1/2 -translate-x-1/2" />
    <div className="w-[60%] absolute h-[128px] bg-brand rounded-[50%] blur-[64px] left-1/2 -translate-x-1/2 top-[32px]" />
  </div>
));
Glow.displayName = "Glow";

export default Glow;
