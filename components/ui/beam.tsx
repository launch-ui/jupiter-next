import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const beamVariants = cva(
  "relative after:content-[''] after:absolute after:inset-0 after:rounded-full",
  {
    variants: {
      tone: {
        default: "after:bg-foreground/40",
        brand: "after:bg-brand",
      },
      size: {
        default: "after:blur-lg",
        large: "after:blur-xl",
      },
    },
    defaultVariants: {
      tone: "default",
      size: "default",
    },
  }
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
  }
);

Beam.displayName = "Beam";

export { Beam, beamVariants };
