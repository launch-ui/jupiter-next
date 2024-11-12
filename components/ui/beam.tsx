import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const beamVariants = cva(
  "relative after:content-[''] after:absolute after:inset-0 after:rounded-full after:scale-[2]",
  {
    variants: {
      tone: {
        default:
          "after:bg-[radial-gradient(ellipse_at_center,_hsla(var(--foreground)/.3)_10%,_hsla(var(--foreground)/0)_60%)]",
        brand:
          "after:bg-[radial-gradient(ellipse_at_center,_hsla(var(--brand)/.3)_10%,_hsla(var(--brand)/0)_60%)]",
        brandLight:
          "after:bg-[radial-gradient(ellipse_at_center,_hsla(var(--brand-foreground)/.3)_10%,_hsla(var(--brand-foreground)/0)_60%)]",
      },
      size: {
        default: "after:-lg",
        large: "after:-xl",
      },
    },
    defaultVariants: {
      tone: "default",
      size: "default",
    },
  },
);

export interface BeamProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof beamVariants> {}

const Beam = React.forwardRef<HTMLDivElement, BeamProps>(
  ({ className, tone, size, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(beamVariants({ tone, size, className }))}
        {...props}
      />
    );
  },
);

Beam.displayName = "Beam";

export { Beam, beamVariants };
