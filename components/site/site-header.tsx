"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";

import { LanguageSwitcher } from "@/components/site/language-switcher";
import { siteRoutes } from "@/components/site/navigation.config";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const brandName = "Spark AI Technology Limited";
const brandSubtitle = "AI data infrastructure operator";

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 12);

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <motion.header
      initial={false}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div className="mx-auto w-full max-w-[92rem] px-4 py-3 sm:px-6 lg:px-8">
        <motion.div
          className={cn(
            "flex h-16 items-center justify-between rounded-lg border px-4 backdrop-blur-xl transition-all duration-300 ease-out lg:px-5",
            isScrolled
              ? "border-border/70 bg-background/85 shadow-[0_18px_60px_hsl(var(--deep-space-black)/0.38)] supports-[backdrop-filter]:bg-background/80"
              : "border-transparent bg-background/0 shadow-none",
          )}
        >
          <Link
            href="/"
            aria-label={`${brandName} home`}
            className="group flex min-w-0 shrink-0 items-center gap-3.5 whitespace-nowrap lg:basis-[19rem]"
            onClick={() => setIsOpen(false)}
          >
            <span className="relative flex size-9 shrink-0 items-center justify-center rounded-md border border-white/10 bg-primary text-sm font-semibold text-primary-foreground shadow-spark-sm">
              S
              <span className="absolute inset-0 rounded-md ring-1 ring-inset ring-white/20" />
            </span>
            <span className="hidden min-w-0 sm:block">
              <span className="block text-sm font-semibold leading-4 tracking-normal text-foreground">
                {brandName}
              </span>
              <span className="block max-w-[15rem] truncate text-[0.67rem] font-medium uppercase leading-4 tracking-[0.12em] text-muted-foreground">
                {brandSubtitle}
              </span>
            </span>
          </Link>

          <nav aria-label="Main navigation" className="hidden min-w-0 flex-1 items-center justify-center gap-1.5 lg:flex">
            {siteRoutes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className="whitespace-nowrap rounded-md px-2.5 py-2 text-[0.9rem] font-medium leading-none text-muted-foreground transition-colors duration-200 hover:bg-white/5 hover:text-foreground xl:px-3.5 xl:text-[0.95rem]"
              >
                {route.label}
              </Link>
            ))}
          </nav>

          <div className="hidden shrink-0 basis-[19rem] items-center justify-end gap-2.5 whitespace-nowrap lg:flex">
            <LanguageSwitcher />
            <Button asChild variant="spark" size="sm">
              <Link href="/contact">
                Contact
                <ArrowUpRight aria-hidden="true" />
              </Link>
            </Button>
          </div>

          <button
            type="button"
            aria-label={isOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((value) => !value)}
            className="inline-flex size-10 items-center justify-center rounded-md border border-white/10 bg-white/5 text-foreground transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring lg:hidden"
          >
            {isOpen ? (
              <X className="size-5" aria-hidden="true" />
            ) : (
              <Menu className="size-5" aria-hidden="true" />
            )}
          </button>
        </motion.div>
      </div>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 bottom-0 top-[5.5rem] z-40 bg-background/96 backdrop-blur-xl lg:hidden"
          >
            <motion.nav
              aria-label="Mobile navigation"
              initial={{ y: -12, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -12, opacity: 0 }}
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
              className="mx-auto flex w-full max-w-7xl flex-col gap-1 px-6 pb-8 pt-4"
            >
              {siteRoutes.map((route) => (
                <Link
                  key={route.href}
                  href={route.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-3 rounded-md px-3 py-3 text-base font-medium text-foreground transition-colors hover:bg-white/[0.06]"
                >
                  <route.icon className="size-4 text-accent" aria-hidden="true" />
                  {route.label}
                </Link>
              ))}
              <div className="mt-4">
                <LanguageSwitcher compact />
              </div>
              <Button asChild variant="spark" className="mt-4 w-full">
                <Link href="/contact" onClick={() => setIsOpen(false)}>
                  Contact
                  <ArrowUpRight aria-hidden="true" />
                </Link>
              </Button>
            </motion.nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}
