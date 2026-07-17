import { Mail } from "lucide-react";
import Link from "next/link";

import { T } from "@/components/site/translated-text";
import type { TranslationKey } from "@/i18n/dictionary";

const footerGroups: Array<{ title: TranslationKey; links: Array<{ label: TranslationKey; href: string }> }> = [
  {
    title: "footer.platform",
    links: [
      { label: "footer.knowledgeInfrastructure", href: "/platform/ai-cold-data" },
      { label: "footer.architecture", href: "/architecture" },
      { label: "footer.technology", href: "/technology" },
    ],
  },
  {
    title: "footer.products",
    links: [
      { label: "footer.appliance", href: "/products/spark-ai-appliance" },
      { label: "footer.productPortfolio", href: "/products" },
      { label: "footer.resources", href: "/resources" },
    ],
  },
  {
    title: "footer.knowledge",
    links: [
      { label: "footer.knowledgeCenter", href: "/knowledge" },
      { label: "footer.principles", href: "/principles" },
      { label: "footer.solutions", href: "/solutions" },
    ],
  },
  {
    title: "footer.company",
    links: [
      { label: "footer.about", href: "/about" },
      { label: "footer.contact", href: "/contact" },
      { label: "footer.cases", href: "/cases" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-sky-100 bg-[linear-gradient(180deg,#f7f9fc_0%,#ffffff_100%)]">
      <div className="mx-auto w-full max-w-7xl px-5 py-12 sm:px-8 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_2fr_0.8fr]">
          <div>
            <Link href="/" className="inline-flex items-center gap-3">
              <span className="flex size-10 items-center justify-center rounded-[18px] bg-[linear-gradient(135deg,hsl(var(--primary)),hsl(var(--accent)))] text-sm font-semibold text-white shadow-spark-sm">S</span>
              <span>
                <span className="block text-lg font-semibold text-foreground">Spark AI</span>
                <T id="brand.tagline" as="span" className="block text-xs font-medium text-muted-foreground" />
              </span>
            </Link>
            <p className="mt-4 text-sm font-semibold leading-6 text-foreground"><T id="brand.promiseLine1" /><br /><T id="brand.promiseLine2" /></p>
            <T id="brand.description" as="p" className="mt-4 max-w-sm text-sm leading-6 text-muted-foreground" />
          </div>
          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {footerGroups.map((group) => (
              <div key={group.title}>
                <T id={group.title} as="h2" className="text-sm font-semibold text-foreground" />
                <div className="mt-4 space-y-3">
                  {group.links.map((link) => (
                    <Link key={link.href} href={link.href} className="block text-sm leading-5 text-muted-foreground transition-colors hover:text-primary"><T id={link.label} /></Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div>
            <T id="footer.contact" as="h2" className="text-sm font-semibold text-foreground" />
            <div className="mt-4 space-y-3 text-sm leading-6 text-muted-foreground">
              <Link href="mailto:info@sparkai.hk" className="flex items-center gap-2 text-primary transition-colors hover:text-accent"><Mail className="size-4" aria-hidden="true" />info@sparkai.hk</Link>
              <T id="footer.companyName" as="p" />
              <T id="footer.location" as="p" />
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-3 border-t border-sky-100 pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <T id="footer.copyright" as="p" />
          <p><Link href="/contact" className="hover:text-primary"><T id="footer.privacy" /></Link> · <Link href="/contact" className="hover:text-primary"><T id="footer.terms" /></Link> · <Link href="/contact" className="hover:text-primary"><T id="footer.contact" /></Link></p>
        </div>
      </div>
    </footer>
  );
}
