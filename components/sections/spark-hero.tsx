"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDownToLine, ArrowUpRight } from "lucide-react";

import { Container } from "@/components/design-system/container";
import { Button } from "@/components/ui/button";
import { ParticleNetwork } from "@/components/visuals/particle-network";
import { easeOutExpo } from "@/lib/animations";

export function SparkHero() {
  return (
    <section className="relative isolate min-h-screen overflow-hidden bg-background">
      <ParticleNetwork />

      <div className="absolute inset-0 bg-[linear-gradient(90deg,hsl(var(--background))_0%,hsl(var(--background)/0.88)_32%,hsl(var(--background)/0.46)_68%,hsl(var(--background)/0.9)_100%)]" />
      <div className="absolute inset-0 spark-grid opacity-35" />
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-background to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-background to-transparent" />

      <Container className="relative z-10 flex min-h-screen items-center pb-20 pt-32 lg:pb-24 lg:pt-36">
        <div className="max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: easeOutExpo }}
            className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/[0.04] px-3 py-2 text-sm font-medium text-accent backdrop-blur-xl"
          >
            Building the Infrastructure Layer of the Data Asset Economy
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08, duration: 0.82, ease: easeOutExpo }}
            className="mt-8 max-w-5xl text-5xl font-semibold leading-none tracking-normal text-foreground sm:text-7xl lg:text-8xl"
          >
            AI-Era Data Asset Infrastructure
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.16, duration: 0.78, ease: easeOutExpo }}
            className="mt-7 max-w-3xl text-2xl font-medium leading-tight text-muted-foreground sm:text-4xl"
          >
            Connecting Storage,
            <br />
            Knowledge and Value
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.24, duration: 0.7, ease: easeOutExpo }}
            className="mt-10 flex flex-col gap-3 sm:flex-row"
          >
            <Button asChild variant="spark" size="lg">
              <Link href="/contact">
                Book a Demo
                <ArrowUpRight aria-hidden="true" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/whitepaper">
                Download Whitepaper
                <ArrowDownToLine aria-hidden="true" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
