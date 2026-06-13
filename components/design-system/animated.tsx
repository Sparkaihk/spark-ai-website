"use client";

import * as React from "react";
import { motion, type HTMLMotionProps } from "framer-motion";

import { fadeUp, staggerContainer } from "@/lib/animations";
import { cn } from "@/lib/utils";

type AnimatedBlockProps = HTMLMotionProps<"div"> & {
  delay?: number;
};

export function AnimatedBlock({
  className,
  delay = 0,
  ...props
}: AnimatedBlockProps) {
  return (
    <motion.div
      className={cn(className)}
      initial={false}
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={fadeUp(delay)}
      {...props}
    />
  );
}

export function AnimatedStagger({
  className,
  ...props
}: HTMLMotionProps<"div">) {
  return (
    <motion.div
      className={cn(className)}
      initial={false}
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={staggerContainer}
      {...props}
    />
  );
}
