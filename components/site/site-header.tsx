"use client";

import { ArrowUpRight, Menu, Sparkles, X } from "lucide-react";
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

function isActiveRoute(pathname: string | null, href: string) {
  if (href === "/") return pathname === "/";
  return Boolean(pathname?.startsWith(href));
}

function HeaderNavLink({
  route,
  active,
  onNavigate,
  className,
  showIcon = false,
}: {
  route: SiteRoute;
  active?: boolean;
  onNavigate?: () => void;
  className?: string;
  showIcon?: boolean;
}) {
  const Icon = route.icon;

  return (
    <a
      href={route.href}
      onClick={(event) => {
        scrollToHash(event, route.href);
        onNavigate?.();
      }}
      className={cn(
        className,
        active && "bg-white/72 text-primary shadow-[0_12px_34px_rgba(37,99,235,0.12)] ring-1 ring-sky-100/80 data-[active=true]:after:scale-x-100"
      )}
      data-active={active ? "true" : undefined}
    >
      {showIcon ? <Icon className="size-4 shrink-0" aria-hidden="true" /> : null}
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
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto w-full max-w-[94rem] px-3 py-3 sm:px-5 lg:px-6">
        <div
          className={cn(
            "flex h-[72px] items-center justify-between rounded-full border px-4 backdrop-blur-2xl transition-all duration-300 lg:px-5",
            isScrolled
              ? "border-sky-100/80 bg-white/88 shadow-[0_16px_50px_rgba(37,99,235,0.12)]"
              : "border-white/70 bg-white/68 shadow-[0_10px_34px_rgba(37,99,235,0.08)]",
          )}
        >
          <a
            href="/"
            aria-label="Spark AI home"
            className="group flex min-w-0 shrink-0 items-center gap-3 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 lg:basis-[11rem] xl:basis-[13rem]"
            onClick={() => setIsOpen(false)}
          >
            <span className="flex size-10 shrink-0 items-center justify-center rounded-[16px] bg-[linear-gradient(135deg,hsl(var(--primary)),hsl(var(--accent)))] text-white shadow-spark-sm transition-transform duration-300 group-hover:rotate-[2deg]">
              <Sparkles className="size-5" aria-hidden="true" />
            </span>
            <span className="hidden min-w-0 sm:block">
              <span className="block truncate text-[0.95rem] font-semibold leading-4 text-foreground">Spark AI</span>
              <span className="block max-w-[10rem] truncate text-[0.62rem] font-medium uppercase leading-4 tracking-[0.08em] text-muted-foreground">
                Knowledge Infrastructure for the AI Era
              </span>
            </span>
          </a>

          <nav aria-label="Main navigation" className="hidden min-w-0 flex-1 items-center justify-center gap-2 lg:flex">
            {routes.map((route) => (
              <HeaderNavLink
                key={route.href}
                route={route}
                active={isActiveRoute(pathname, route.href)}
                className="relative inline-flex items-center gap-1.5 whitespace-nowrap rounded-full px-2.5 py-2 text-[0.68rem] font-medium leading-none text-muted-foreground transition-[color,background,box-shadow,transform] duration-300 ease-out after:absolute after:bottom-0 after:left-3 after:right-3 after:h-px after:origin-center after:scale-x-0 after:bg-[linear-gradient(90deg,#2563eb,#22d3ee)] after:transition-transform after:duration-300 hover:-translate-y-px hover:bg-white/72 hover:text-transparent hover:bg-clip-text hover:bg-[linear-gradient(90deg,#2563eb,#0284c7)] hover:shadow-[0_14px_38px_rgba(14,165,233,0.16)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 data-[active=true]:after:scale-x-100 xl:px-3 xl:text-[0.76rem] 2xl:px-3.5 2xl:text-[0.82rem]"
              />
            ))}
          </nav>

          <div className="hidden shrink-0 basis-[12.5rem] items-center justify-end gap-2 whitespace-nowrap lg:flex xl:basis-[14rem] xl:gap-2.5">
            <LanguageSwitcher />
            <Button asChild variant="spark" size="sm" className="h-10 rounded-full px-3 shadow-[0_14px_38px_rgba(37,99,235,0.20)] hover:shadow-[0_22px_56px_rgba(37,99,235,0.32)] xl:px-4">
              <a href="/contact">
                <LocalizedText zh={"\u9884\u7ea6\u6f14\u793a"} en="Book Demo" />
                <ArrowUpRight aria-hidden="true" />
              </a>
            </Button>
          </div>

          <button
            type="button"
            aria-label={isOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((value) => !value)}
            className="inline-flex size-10 items-center justify-center rounded-[16px] border border-sky-100 bg-white/82 text-foreground shadow-sm backdrop-blur-xl transition-colors hover:bg-sky-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring lg:hidden"
          >
            {isOpen ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
          </button>
        </div>
      </div>

      {isOpen ? (
        <div className="fixed inset-x-0 bottom-0 top-[5.5rem] z-40 overflow-y-auto bg-[linear-gradient(180deg,rgba(248,251,255,0.96)_0%,rgba(224,242,254,0.9)_100%)] backdrop-blur-2xl lg:hidden">
          <div className="pointer-events-none absolute inset-0 spark-grid opacity-35" aria-hidden="true" />
          <div className="pointer-events-none absolute -right-20 top-10 h-64 w-64 rounded-full bg-sky-200/50 blur-3xl" aria-hidden="true" />
          <nav aria-label="Mobile navigation" className="relative mx-auto flex w-full max-w-7xl flex-col gap-2 px-6 pb-8 pt-4">
            {routes.map((route) => (
              <HeaderNavLink
                key={route.href}
                route={route}
                active={isActiveRoute(pathname, route.href)}
                onNavigate={() => setIsOpen(false)}
                showIcon
                className="flex items-center gap-3 rounded-[18px] border border-white/70 bg-white/58 px-4 py-3 text-base font-semibold text-foreground shadow-sm backdrop-blur-xl transition-all hover:bg-white"
              />
            ))}
            <div className="mt-4">
              <LanguageSwitcher compact />
            </div>
            <Button asChild variant="spark" className="mt-4 w-full rounded-[16px]">
              <a href="/contact" onClick={() => setIsOpen(false)}>
                <LocalizedText zh={"\u9884\u7ea6\u6f14\u793a"} en="Book Demo" />
                <ArrowUpRight aria-hidden="true" />
              </a>
            </Button>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
