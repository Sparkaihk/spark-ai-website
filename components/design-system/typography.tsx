import * as React from "react";

import { cn } from "@/lib/utils";

export function Display({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h1
      className={cn(
        "text-5xl font-semibold leading-none tracking-normal text-foreground sm:text-7xl lg:text-8xl",
        className,
      )}
      {...props}
    />
  );
}

export function Heading({
  className,
  as: Comp = "h2",
  ...props
}: React.HTMLAttributes<HTMLHeadingElement> & {
  as?: "h1" | "h2" | "h3" | "h4";
}) {
  return (
    <Comp
      className={cn(
        "text-3xl font-semibold leading-tight tracking-normal text-foreground sm:text-5xl",
        className,
      )}
      {...props}
    />
  );
}

export function Lead({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn("max-w-3xl text-lg leading-8 text-muted-foreground", className)}
      {...props}
    />
  );
}

export function Eyebrow({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn(
        "text-sm font-medium uppercase tracking-[0.14em] text-accent",
        className,
      )}
      {...props}
    />
  );
}
