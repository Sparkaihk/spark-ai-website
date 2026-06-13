import Link from "next/link";
import type * as React from "react";
import { Linkedin, Youtube } from "lucide-react";

import { cn } from "@/lib/utils";

const products = [
  { label: "BlueSafe Archive", href: "/products/bluesafe-archive" },
  { label: "BlueSafe Vault", href: "/products/bluesafe-vault" },
  { label: "BlueSafe RAG Cloud", href: "/products/bluesafe-rag-cloud" },
  { label: "BlueSafe Data Bank", href: "/products/bluesafe-data-bank" },
];

const company = [
  { label: "About", href: "/about" },
  { label: "Investors", href: "/investors" },
  { label: "News", href: "/news" },
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
        <div className="grid gap-12 lg:grid-cols-[1.25fr_0.75fr_0.7fr_0.55fr]">
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
              AI-Era Data Asset Infrastructure Operator
            </p>
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

          <FooterColumn title="Social">
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
            Built for secure enterprise data infrastructure.
          </p>
        </div>
      </div>
    </footer>
  );
}
