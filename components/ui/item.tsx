import * as React from "react";

import { cn } from "@/lib/utils";

const Item = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col gap-4 p-4 text-foreground", className)}
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
      className,
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
      "text-md flex max-w-[300px] flex-col gap-2 text-balance text-muted-foreground",
      className,
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
    className={cn("flex items-center self-start", className)}
    {...props}
  />
));
ItemIcon.displayName = "ItemIcon";

export { Item, ItemIcon, ItemTitle, ItemDescription };
