"use client";

import { motion } from "framer-motion";

import { Section, SectionHeader } from "@/components/design-system/section";
import { strategicFlow } from "@/lib/homepage-content";

const nodes = strategicFlow.map((title, index) => ({
  title,
  subtitle:
    [
      "冷数据底座",
      "蓝光安全归档",
      "企业检索增强生成",
      "AI知识云",
      "企业应用入口",
    ][index] ?? "",
  x: 92 + index * 194,
  y: index % 2 === 0 ? 198 : 108,
}));

const paths = [
  "M128 184 C188 128 224 108 286 108",
  "M322 120 C388 176 424 198 480 198",
  "M516 184 C576 128 612 108 674 108",
  "M710 120 C776 176 812 198 868 198",
];

export function InvestorArchitecture() {
  return (
    <Section tone="panel" className="overflow-hidden">
      <SectionHeader
        eyebrow="Digital Asset Infrastructure Architecture / 数字资产基础设施架构图"
        title="From cold data preservation to enterprise AI applications."
        description="Spark AI turns dormant enterprise data into governed knowledge services through BlueSafe Archive, RAG Engine, AI Knowledge Cloud, and application delivery. Spark AI将沉睡数据转化为可治理、可检索、可应用的数据资产基础设施。"
      />

      <div className="mt-12 overflow-hidden rounded-lg border border-white/10 bg-background shadow-spark-md">
        <div className="relative min-h-[48rem] p-5 sm:p-8 lg:min-h-[31rem]">
          <div className="absolute inset-0 spark-grid opacity-20" />
          <div className="absolute left-1/2 top-1/2 size-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute inset-x-8 top-20 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
          <svg
            viewBox="0 0 960 320"
            className="absolute inset-x-0 top-10 hidden h-[24rem] w-full lg:block"
            role="img"
            aria-label="Spark AI digital asset infrastructure architecture"
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
              <filter id="architectureLineGlow">
                <feGaussianBlur stdDeviation="3.5" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {paths.map((path, index) => (
              <motion.path
                key={path}
                d={path}
                fill="none"
                stroke="url(#architectureLine)"
                strokeLinecap="round"
                strokeWidth="3.5"
                filter="url(#architectureLineGlow)"
                initial={false}
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
                initial={false}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: index * 0.12, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              >
                <motion.circle
                  cx={node.x}
                  cy={node.y}
                  r="58"
                  fill="url(#architectureGlow)"
                  animate={{ opacity: [0.45, 0.85, 0.45], scale: [0.96, 1.05, 0.96] }}
                  transition={{ duration: 3.2, repeat: Infinity, delay: index * 0.22 }}
                />
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

          <div className="relative z-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5 lg:pt-[19rem]">
            {nodes.map((node, index) => (
              <motion.div
                key={node.title}
                initial={false}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: index * 0.1, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                className="rounded-lg border border-white/10 bg-white/[0.045] p-5 shadow-[0_18px_70px_hsl(var(--primary)/0.12)] backdrop-blur-xl lg:min-h-36 lg:p-4"
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
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {node.subtitle}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
