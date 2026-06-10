"use client";

import { animate, motion, useInView, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useMemo, useRef } from "react";

import { Section } from "@/components/design-system/section";
import { cn } from "@/lib/utils";

export type MetricItem = {
  value: string;
  label: string;
};

function parseMetricValue(value: string) {
  const match = value.match(/^(\d+)(.*)$/);

  if (!match) {
    return null;
  }

  return {
    number: Number(match[1]),
    suffix: match[2],
  };
}

function AnimatedMetricValue({ value }: { value: string }) {
  const parsed = useMemo(() => parseMetricValue(value), [value]);
  const ref = useRef<HTMLParagraphElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    if (!isInView || !parsed) {
      return;
    }

    const controls = animate(count, parsed.number, {
      duration: 1.45,
      ease: [0.16, 1, 0.3, 1],
    });

    return () => controls.stop();
  }, [count, isInView, parsed]);

  if (!parsed) {
    return (
      <motion.p
        ref={ref}
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        className="text-2xl font-semibold tracking-normal text-foreground sm:text-3xl"
      >
        {value}
      </motion.p>
    );
  }

  return (
    <p
      ref={ref}
      className="text-3xl font-semibold tracking-normal text-foreground sm:text-4xl"
    >
      <motion.span>{rounded}</motion.span>
      <span>{parsed.suffix}</span>
    </p>
  );
}

export function MetricStrip({
  metrics,
  className,
}: {
  metrics: MetricItem[];
  className?: string;
}) {
  return (
    <Section tone="inset" className={cn("py-12 sm:py-14", className)}>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric, index) => (
          <motion.div
            key={metric.label}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
              delay: index * 0.08,
              duration: 0.62,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="relative overflow-hidden rounded-lg border border-white/10 bg-spark-surface-1 p-6 shadow-[0_18px_70px_hsl(var(--primary)/0.1)]"
          >
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/70 to-transparent" />
            <div className="absolute -right-10 -top-10 size-28 rounded-full bg-accent/10 blur-2xl" />
            <AnimatedMetricValue value={metric.value} />
            <p className="mt-3 max-w-[13rem] text-sm leading-6 text-muted-foreground">
              {metric.label}
            </p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
