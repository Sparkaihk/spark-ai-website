"use client";

import { animate, motion, useInView, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useMemo, useRef } from "react";

import { Section, SectionHeader } from "@/components/design-system/section";
import { cn } from "@/lib/utils";

export type MetricItem = {
  value: string;
  label: string;
};

function parseMetricValue(value: string) {
  const match = value.match(/^([\d,]+(?:\.\d+)?)(.*)$/);

  if (!match) {
    return null;
  }

  const rawNumber = match[1];
  const decimals = rawNumber.includes(".") ? rawNumber.split(".")[1].length : 0;

  return {
    number: Number(rawNumber.replaceAll(",", "")),
    decimals,
    suffix: match[2],
  };
}

function AnimatedMetricValue({ value }: { value: string }) {
  const parsed = useMemo(() => parseMetricValue(value), [value]);
  const ref = useRef<HTMLParagraphElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const count = useMotionValue(0);
  const display = useTransform(count, (latest) =>
    latest.toLocaleString("en-US", {
      maximumFractionDigits: parsed?.decimals ?? 0,
      minimumFractionDigits: parsed?.decimals ?? 0,
    }),
  );

  useEffect(() => {
    if (!isInView || !parsed) {
      return;
    }

    const controls = animate(count, parsed.number, {
      duration: parsed.decimals > 0 ? 1.85 : 1.45,
      ease: [0.16, 1, 0.3, 1],
    });

    return () => controls.stop();
  }, [count, isInView, parsed]);

  if (!parsed) {
    return (
      <motion.p
        ref={ref}
        initial={false}
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
      className="text-3xl font-semibold tracking-normal text-accent drop-shadow-[0_0_22px_hsl(var(--accent)/0.72)] sm:text-4xl"
    >
      <motion.span>{display}</motion.span>
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
    <Section tone="inset" className={cn("py-16 sm:py-20", className)}>
      <SectionHeader
        eyebrow="Key Metrics"
        title="關鍵指標"
        description="以可驗證的基礎設施規模、節點網絡與數據可靠性，支撐企業級AI數據資產運營。"
      />
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric, index) => (
          <motion.div
            key={metric.label}
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
              delay: index * 0.08,
              duration: 0.62,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="group relative overflow-hidden rounded-lg border border-white/10 bg-white/[0.045] p-6 shadow-[0_22px_90px_hsl(var(--primary)/0.16)] backdrop-blur-xl"
          >
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/80 to-transparent" />
            <div className="absolute -right-12 -top-12 size-32 rounded-full bg-accent/15 blur-3xl transition-opacity duration-300 group-hover:opacity-90" />
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.07] via-transparent to-primary/[0.06]" />
            <div className="relative z-10">
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.16em] text-accent/80">
                0{index + 1}
              </p>
              <AnimatedMetricValue value={metric.value} />
              <p className="mt-3 max-w-[13rem] text-sm leading-6 text-muted-foreground">
                {metric.label}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
