import React from "react";
import { cn } from "@/lib/utils";

export interface LogoProps extends React.HTMLAttributes<HTMLDivElement> {
  image: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  name: string;
  version?: string;
}

export default function Logo({
  className,
  image: SvgImage,
  name,
  version,
  ...props
}: LogoProps) {
  return (
    <div
      className={cn("flex items-center gap-2 text-sm font-medium", className)}
      {...props}
    >
      <SvgImage width={24} height={24} />
      <span>{name}</span>
      {version && <span className="text-muted-foreground">{version}</span>}
    </div>
  );
}
