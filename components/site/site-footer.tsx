import Link from "next/link";
import type * as React from "react";
import { Linkedin, Youtube } from "lucide-react";

import { cn } from "@/lib/utils";

const products = [
  { label: "RTX Spark AI Storage Appliance", href: "/products" },
  { label: "BlueSafe Cold Data Storage", href: "/products/bluesafe" },
  { label: "Spark RAG Cloud", href: "/products/rag-cloud" },
  { label: "Data Asset Bank", href: "/products/data-bank" },
];

const company = [
  { label: "About", href: "/about" },
  { label: "Investors", href: "/investors" },
  { label: "Products", href: "/products" },
  { label: "Contact", href: "/contact" },
];

const social = [
  { label: "LinkedIn", href: "https://www.linkedin.com", icon: Linkedin },
  { label: "YouTube", href: "https://www.youtube.com", icon: Youtube },
];

const copyrightYear = 2026;

function FooterLink({
  href,
  children,
  external = false,
}: {
  href: string;
  children: React.ReactNode;
  external?: boolean;
}) {
  return (
    <Link
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className="text-sm leading-6 text-muted-foreground transition-colors duration-200 hover:text-foreground"
    >
      {children}
    </Link>
  );
}

function FooterColumn({
  title,
  children,
  className,
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("min-w-0", className)}>
      <h2 className="text-sm font-medium text-foreground">{title}</h2>
      <div className="mt-4 flex flex-col gap-3">{children}</div>
    </div>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-spark-black">
      <div className="mx-auto w-full max-w-7xl px-5 py-14 sm:px-8 lg:px-10 lg:py-16">
        <div className="grid gap-12 lg:grid-cols-[1.28fr_0.72fr_0.68fr_0.52fr]">
          <div className="max-w-md">
            <Link href="/" className="inline-flex items-center gap-3">
              <span className="relative flex size-10 items-center justify-center rounded-md border border-white/10 bg-primary text-sm font-semibold text-primary-foreground shadow-spark-sm">
                S
                <span className="absolute inset-0 rounded-md ring-1 ring-inset ring-white/20" />
              </span>
              <span className="text-base font-medium text-foreground">
                Spark AI Technology Limited
              </span>
            </Link>
            <p className="mt-5 text-sm leading-7 text-muted-foreground">
              AI data infrastructure company based in Hong Kong SAR.
            </p>
            <div className="mt-5 space-y-2 text-sm leading-6 text-muted-foreground">
              <p>Hong Kong SAR</p>
              <Link
                href="mailto:info@sparkai.hk"
                className="inline-flex text-accent transition-colors hover:text-foreground"
              >
                info@sparkai.hk
              </Link>
              <p>Business Partnership · Investor Relations · Technology Cooperation</p>
            </div>
          </div>

          <FooterColumn title="Products">
            {products.map((item) => (
              <FooterLink key={item.href} href={item.href}>
                {item.label}
              </FooterLink>
            ))}
          </FooterColumn>

          <FooterColumn title="Company">
            {company.map((item) => (
              <FooterLink key={item.href} href={item.href}>
                {item.label}
              </FooterLink>
            ))}
          </FooterColumn>

          <FooterColumn title="Connect">
            {social.map((item) => (
              <FooterLink key={item.label} href={item.href} external>
                <span className="inline-flex items-center gap-2">
                  <item.icon className="size-4 text-accent" aria-hidden="true" />
                  {item.label}
                </span>
              </FooterLink>
            ))}
          </FooterColumn>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-muted-foreground">
            Copyright (c) {copyrightYear} Spark AI Technology Limited. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Business Partnership · Investor Relations · Technology Cooperation
          </p>
        </div>
      </div>
    </footer>
  );
}
