import * as React from "react";

import { cn } from "@/lib/utils";

const Tile = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "p-6 rounded-xl border bg-card text-card-foreground flex flex-col gap-6 shadow-glow-lg overflow-hidden",
      className
    )}
    {...props}
  />
));
Tile.displayName = "Tile";

const TileTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-2xl font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
));
TileTitle.displayName = "TileTitle";

const TileDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "text-md text-muted-foreground flex flex-col gap-2",
      className
    )}
    {...props}
  />
));
TileDescription.displayName = "TileDescription";

const TileContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("flex flex-col gap-4", className)} {...props} />
));
TileContent.displayName = "TileContent";

const TileVisual = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-end justify-center grow", className)}
    {...props}
  />
));
TileVisual.displayName = "TileVisual";

export { Tile, TileVisual, TileTitle, TileDescription, TileContent };
