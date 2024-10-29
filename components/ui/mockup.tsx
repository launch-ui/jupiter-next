import React from "react";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const mockupVariants = cva("flex relative z-10 overflow-hidden shadow-2xl", {
  variants: {
    variant: {
      default: "bg-background border rounded-xl",
      frame: "bg-background/50 p-4 backdrop-blur-lg rounded-2xl",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export interface MockupProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof mockupVariants> {}

const Mockup = React.forwardRef<HTMLDivElement, MockupProps>(
  ({ className, variant, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(mockupVariants({ variant, className }))}
      {...props}
    />
  ),
);
Mockup.displayName = "Mockup";

export { Mockup };
