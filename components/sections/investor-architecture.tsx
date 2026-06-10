"use client";

import { motion } from "framer-motion";

import { Section, SectionHeader } from "@/components/design-system/section";
import { strategicFlow } from "@/lib/homepage-content";

const nodes = strategicFlow.map((title, index) => ({
  title,
  x: 88 + index * 128,
  y: index % 2 === 0 ? 190 : 106,
}));

const paths = [
  "M126 178 C168 122 196 104 216 106",
  "M250 118 C298 156 316 188 344 190",
  "M382 178 C424 122 452 104 472 106",
  "M506 118 C554 156 572 188 600 190",
  "M638 178 C680 122 708 104 728 106",
  "M762 118 C810 156 828 188 856 190",
];

export function InvestorArchitecture() {
  return (
    <Section tone="panel" className="overflow-hidden">
      <SectionHeader
        eyebrow="Strategic Architecture"
        title="One Infrastructure. Infinite Intelligence."
        description="From Data Preservation to Value Creation."
      />

      <div className="mt-12 overflow-hidden rounded-lg border border-white/10 bg-background shadow-spark-md">
        <div className="relative min-h-[48rem] p-5 sm:p-8 lg:min-h-[31rem]">
          <div className="absolute inset-0 spark-grid opacity-20" />
          <div className="absolute left-1/2 top-1/2 size-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl" />
          <svg
            viewBox="0 0 960 320"
            className="absolute inset-x-0 top-10 hidden h-[24rem] w-full lg:block"
            role="img"
            aria-label="Spark AI platform architecture flow"
          >
            <defs>
              <radialGradient id="architectureGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="hsl(var(--accent))" stopOpacity="0.52" />
                <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0" />
              </radialGradient>
              <linearGradient id="architectureLine" x1="0" x2="1" y1="0" y2="0">
                <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.2" />
                <stop offset="50%" stopColor="hsl(var(--accent))" stopOpacity="0.9" />
                <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.2" />
              </linearGradient>
            </defs>

            {paths.map((path, index) => (
              <motion.path
                key={path}
                d={path}
                fill="none"
                stroke="url(#architectureLine)"
                strokeLinecap="round"
                strokeWidth="3"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: 0.25 + index * 0.18, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              />
            ))}

            {paths.map((path, index) => (
              <motion.circle
                key={`${path}-pulse`}
                r="5"
                fill="hsl(var(--accent))"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0] }}
                transition={{
                  delay: index * 0.35,
                  duration: 2.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <animateMotion dur="2.8s" repeatCount="indefinite" path={path} />
              </motion.circle>
            ))}

            {nodes.map((node, index) => (
              <motion.g
                key={node.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: index * 0.12, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              >
                <circle cx={node.x} cy={node.y} r="54" fill="url(#architectureGlow)" />
                <circle
                  cx={node.x}
                  cy={node.y}
                  r="34"
                  fill="hsl(var(--surface-1))"
                  stroke="hsl(var(--accent) / 0.7)"
                  strokeWidth="1.5"
                />
                <circle cx={node.x} cy={node.y} r="13" fill="hsl(var(--primary))" />
              </motion.g>
            ))}
          </svg>

          <div className="relative z-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-7 lg:pt-[19rem]">
            {nodes.map((node, index) => (
              <motion.div
                key={node.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: index * 0.1, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                className="rounded-lg border border-white/10 bg-spark-surface-1/80 p-5 backdrop-blur lg:min-h-36 lg:p-4"
              >
                <div className="mb-4 flex items-center gap-3 lg:hidden">
                  <span className="flex size-9 items-center justify-center rounded-md bg-primary text-sm font-semibold text-primary-foreground">
                    {index + 1}
                  </span>
                  {index < nodes.length - 1 ? (
                    <span className="h-px flex-1 bg-accent/40" />
                  ) : null}
                </div>
                <p className="text-xs font-medium uppercase tracking-[0.16em] text-accent">
                  0{index + 1}
                </p>
                <h2 className="mt-3 text-base font-semibold leading-snug text-foreground">
                  {node.title}
                </h2>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
