"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import type * as React from "react";
import { useEffect, useState } from "react";

import { LanguageSwitcher } from "@/components/site/language-switcher";
import { LocalizedText } from "@/components/site/localized-text";
import { investorRoutes, siteRoutes, type SiteRoute } from "@/components/site/navigation.config";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

function scrollToHash(event: React.MouseEvent<HTMLAnchorElement>, href: string) {
  if (!href.startsWith("#")) return;

  event.preventDefault();
  document.querySelector(href)?.scrollIntoView({ behavior: "smooth", block: "start" });
  window.history.replaceState(null, "", href);
}

function HeaderNavLink({ route, onNavigate, className }: { route: SiteRoute; onNavigate?: () => void; className?: string }) {
  return (
    <a
      href={route.href}
      onClick={(event) => {
        scrollToHash(event, route.href);
        onNavigate?.();
      }}
      className={className}
    >
      <LocalizedText zh={route.labelZh} en={route.label} />
    </a>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const routes = pathname?.startsWith("/investors") ? investorRoutes : siteRoutes;

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
    <motion.header initial={false} animate={{ y: 0, opacity: 1 }} className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto w-full max-w-[94rem] px-3 py-3 sm:px-5 lg:px-6">
        <motion.div
          className={cn(
            "flex h-16 items-center justify-between rounded-[20px] border px-3 backdrop-blur-xl transition-all duration-300 lg:px-4",
            isScrolled ? "border-sky-100 bg-white/94 shadow-[0_16px_50px_rgba(37,99,235,0.12)]" : "border-sky-100/80 bg-white/80 shadow-sm",
          )}
        >
          <a
            href="#home"
            aria-label="Spark AI home"
            className="group flex min-w-0 shrink-0 items-center gap-2.5 whitespace-nowrap lg:basis-[10rem] xl:basis-[12rem]"
            onClick={(event) => {
              scrollToHash(event, "#home");
              setIsOpen(false);
            }}
          >
            <span className="flex size-9 shrink-0 items-center justify-center rounded-[16px] bg-primary text-sm font-semibold text-white shadow-spark-sm">S</span>
            <span className="hidden min-w-0 sm:block">
              <span className="block truncate text-sm font-semibold leading-4 text-foreground">Spark AI</span>
              <span className="block max-w-[10rem] truncate text-[0.62rem] font-medium uppercase leading-4 tracking-[0.08em] text-muted-foreground">
                AI Cold Data Platform
              </span>
            </span>
          </a>

          <nav aria-label="Main navigation" className="hidden min-w-0 flex-1 items-center justify-center gap-0.5 lg:flex">
            {routes.map((route) => (
              <HeaderNavLink
                key={route.href}
                route={route}
                className="whitespace-nowrap rounded-[16px] px-1.5 py-2 text-[0.66rem] font-medium leading-none text-muted-foreground transition-colors duration-200 hover:bg-sky-50 hover:text-primary xl:px-2 xl:text-[0.75rem] 2xl:px-2.5 2xl:text-[0.82rem]"
              />
            ))}
          </nav>

          <div className="hidden shrink-0 basis-[10.75rem] items-center justify-end gap-1.5 whitespace-nowrap lg:flex xl:basis-[12rem] xl:gap-2">
            <LanguageSwitcher />
            <Button asChild variant="spark" size="sm" className="rounded-[16px] px-2.5 xl:px-3">
              <a href="#contact-us" onClick={(event) => scrollToHash(event, "#contact-us")}>
                <LocalizedText zh="聯絡我們" en="Contact" />
                <ArrowUpRight aria-hidden="true" />
              </a>
            </Button>
          </div>

          <button
            type="button"
            aria-label={isOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((value) => !value)}
            className="inline-flex size-10 items-center justify-center rounded-[16px] border border-sky-100 bg-white text-foreground transition-colors hover:bg-sky-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring lg:hidden"
          >
            {isOpen ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
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
            className="fixed inset-x-0 bottom-0 top-[5.5rem] z-40 bg-white/96 backdrop-blur-xl lg:hidden"
          >
            <motion.nav
              aria-label="Mobile navigation"
              initial={{ y: -12, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -12, opacity: 0 }}
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
              className="mx-auto flex w-full max-w-7xl flex-col gap-1 px-6 pb-8 pt-4"
            >
              {routes.map((route) => (
                <HeaderNavLink
                  key={route.href}
                  route={route}
                  onNavigate={() => setIsOpen(false)}
                  className="flex items-center gap-3 rounded-[16px] px-3 py-3 text-base font-medium text-foreground transition-colors hover:bg-sky-50"
                />
              ))}
              <div className="mt-4">
                <LanguageSwitcher compact />
              </div>
              <Button asChild variant="spark" className="mt-4 w-full rounded-[16px]">
                <a
                  href="#contact-us"
                  onClick={(event) => {
                    scrollToHash(event, "#contact-us");
                    setIsOpen(false);
                  }}
                >
                  <LocalizedText zh="聯絡我們" en="Contact Us" />
                  <ArrowUpRight aria-hidden="true" />
                </a>
              </Button>
            </motion.nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}
