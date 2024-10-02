import * as React from "react";

import { cn } from "@/lib/utils";

const Item = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("p-4 text-foreground flex flex-col gap-4", className)}
    {...props}
  />
));
Item.displayName = "Item";

const ItemTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-md font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
));
ItemTitle.displayName = "ItemTitle";

const ItemDescription = React.forwardRef<
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
ItemDescription.displayName = "ItemDescription";

const ItemIcon = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("self-start flex items-center", className)}
    {...props}
  />
));
ItemIcon.displayName = "ItemIcon";

export { Item, ItemIcon, ItemTitle, ItemDescription };
