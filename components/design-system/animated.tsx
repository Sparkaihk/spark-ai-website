"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

type AnimatedBlockProps = React.HTMLAttributes<HTMLDivElement> & {
  delay?: number;
};

export function AnimatedBlock({
  className,
  delay: _delay,
  ...props
}: AnimatedBlockProps) {
  return <div className={cn(className)} {...props} />;
}

export function AnimatedStagger({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn(className)} {...props} />;
}
