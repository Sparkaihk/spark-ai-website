"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowDownToLine,
  ArrowUpRight,
  BarChart3,
  Database,
  Layers3,
  Network,
  Sparkles,
} from "lucide-react";

import { Container } from "@/components/design-system/container";
import { Button } from "@/components/ui/button";
import { ParticleNetwork } from "@/components/visuals/particle-network";
import { easeOutExpo } from "@/lib/animations";

const economyFlow = [
  { label: "Cold Data", icon: Database, x: "7%", y: "58%" },
  { label: "Knowledge", icon: Network, x: "25%", y: "32%" },
  { label: "Compute", icon: Sparkles, x: "48%", y: "50%" },
  { label: "Data Asset", icon: Layers3, x: "68%", y: "26%" },
  { label: "Value", icon: BarChart3, x: "82%", y: "60%" },
];

export function SparkHero() {
  return (
    <section className="relative isolate min-h-screen overflow-hidden bg-background">
      <ParticleNetwork />

      <div className="absolute inset-0 bg-[linear-gradient(90deg,hsl(var(--background))_0%,hsl(var(--background)/0.9)_34%,hsl(var(--background)/0.38)_70%,hsl(var(--background)/0.78)_100%)]" />
      <div className="absolute inset-0 spark-grid opacity-35" />
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-background to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-background to-transparent" />

      <Container className="relative z-10 flex min-h-screen items-center pb-24 pt-32 lg:pb-28 lg:pt-40">
        <div className="grid w-full items-center gap-16 lg:grid-cols-[minmax(0,0.96fr)_minmax(24rem,0.9fr)] xl:gap-20">
          <div className="max-w-4xl">
            <motion.div
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: easeOutExpo }}
              className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/[0.04] px-3 py-2 text-xs font-medium uppercase tracking-[0.16em] text-accent backdrop-blur-xl sm:text-sm"
            >
              Spark AI Technology Limited
            </motion.div>

            <motion.h1
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08, duration: 0.82, ease: easeOutExpo }}
              className="mt-9 max-w-5xl text-[2.2rem] font-semibold leading-[1.02] tracking-normal text-foreground sm:text-[3.6rem] lg:text-[4.7rem]"
            >
              AI Data Infrastructure for the AI Era
            </motion.h1>

            <motion.p
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.16, duration: 0.78, ease: easeOutExpo }}
              className="mt-8 max-w-2xl text-xl font-medium leading-[1.35] text-muted-foreground sm:text-3xl"
            >
              Data Asset Infrastructure Operator
              <span className="mt-3 block text-base leading-7 text-accent sm:text-xl">
                AI时代数据资产基础设施运营商
              </span>
            </motion.p>

            <motion.p
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.74, ease: easeOutExpo }}
              className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg"
            >
              Spark AI builds the infrastructure layer that preserves cold data,
              activates enterprise knowledge, deploys edge compute, and turns
              governed data into investable digital assets.
              <span className="mt-4 block text-sm leading-7 text-muted-foreground/85 sm:text-base">
                Spark AI构建覆盖冷数据保存、企业知识激活、边缘算力部署与数据资产化运营的基础设施平台。
              </span>
            </motion.p>

            <motion.div
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.24, duration: 0.7, ease: easeOutExpo }}
              className="mt-11 flex flex-col gap-3 sm:flex-row"
            >
              <Button asChild variant="spark" size="lg">
                <Link href="/contact">
                  Investor Inquiry
                  <ArrowUpRight aria-hidden="true" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/products">
                  Explore Platform
                  <ArrowDownToLine aria-hidden="true" />
                </Link>
              </Button>
            </motion.div>
          </div>

          <motion.div
            initial={false}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ delay: 0.18, duration: 0.9, ease: easeOutExpo }}
            className="relative hidden min-h-[30rem] w-full max-w-[38rem] justify-self-end lg:block"
            aria-hidden="true"
          >
            <div className="absolute inset-0 rounded-lg border border-white/10 bg-[radial-gradient(circle_at_48%_44%,hsl(var(--accent)/0.18),transparent_34%),linear-gradient(135deg,hsl(var(--surface-1)/0.86),hsl(var(--background)/0.42))] shadow-[0_0_100px_hsl(var(--primary)/0.18)] backdrop-blur" />
            <div className="absolute inset-0 spark-grid rounded-lg opacity-20" />
            <div className="absolute inset-x-10 top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
            <div className="absolute left-1/2 top-8 h-[78%] w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-primary/40 to-transparent" />

            <svg className="absolute inset-0 h-full w-full" viewBox="0 0 608 480">
              <defs>
                <linearGradient id="heroEconomyLine" x1="0" x2="1" y1="0" y2="0">
                  <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.05" />
                  <stop offset="50%" stopColor="hsl(var(--accent))" stopOpacity="0.95" />
                  <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.12" />
                </linearGradient>
              </defs>
              <motion.path
                d="M76 288 C148 178 206 124 292 238 C360 328 414 120 518 282"
                fill="none"
                stroke="url(#heroEconomyLine)"
                strokeLinecap="round"
                strokeWidth="2.5"
                initial={false}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ delay: 0.55, duration: 1.3, ease: easeOutExpo }}
              />
              <motion.circle r="5" fill="hsl(var(--accent))">
                <animateMotion
                  dur="4s"
                  repeatCount="indefinite"
                  path="M76 288 C148 178 206 124 292 238 C360 328 414 120 518 282"
                />
              </motion.circle>
            </svg>

            {economyFlow.map((item, index) => (
              <motion.div
                key={item.label}
                initial={false}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 0.36 + index * 0.12, duration: 0.55, ease: easeOutExpo }}
                className="absolute flex -translate-x-1/2 -translate-y-1/2 items-center gap-3 rounded-md border border-white/10 bg-background/78 px-4 py-3 text-sm font-semibold text-foreground shadow-[0_18px_60px_hsl(var(--primary)/0.16)] backdrop-blur-xl"
                style={{ left: item.x, top: item.y }}
              >
                <span className="flex size-9 items-center justify-center rounded-md border border-accent/35 bg-accent/10 text-accent">
                  <item.icon className="size-4" />
                </span>
                {item.label}
              </motion.div>
            ))}

            <motion.div
              animate={{ opacity: [0.35, 0.8, 0.35], scale: [1, 1.05, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute left-[46%] top-[44%] size-28 rounded-full border border-accent/25 bg-accent/10 blur-xl"
            />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
