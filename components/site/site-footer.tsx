import Link from "next/link";

import { LocalizedText } from "@/components/site/localized-text";
import { siteRoutes } from "@/components/site/navigation.config";

export function SiteFooter() {
  return (
    <footer className="border-t border-sky-100 bg-white">
      <div className="mx-auto w-full max-w-7xl px-5 py-12 sm:px-8 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr_0.8fr]">
          <div>
            <Link href="/" className="inline-flex items-center gap-3">
              <span className="flex size-10 items-center justify-center rounded-[20px] bg-primary text-sm font-semibold text-white shadow-spark-sm">S</span>
              <span>
                <span className="block text-base font-semibold text-foreground">Spark AI Technology Limited</span>
                <span className="block text-sm text-muted-foreground">AI Cold Data Platform</span>
              </span>
            </Link>
          </div>

          <div>
            <h2 className="text-sm font-medium text-foreground">
              <LocalizedText zh="導航" en="Navigation" />
            </h2>
            <div className="mt-4 grid grid-cols-2 gap-3">
              {siteRoutes.map((route) => (
                <Link key={route.href} href={`/${route.href}`} className="text-sm leading-6 text-muted-foreground transition-colors hover:text-primary">
                  <LocalizedText zh={route.labelZh} en={route.label} />
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-sm font-medium text-foreground">
              <LocalizedText zh="聯絡我們" en="Contact" />
            </h2>
            <div className="mt-4 space-y-3 text-sm leading-6 text-muted-foreground">
              <Link href="mailto:info@sparkai.hk" className="block text-accent transition-colors hover:text-primary">
                info@sparkai.hk
              </Link>
              <p>Hong Kong</p>
              <Link href="mailto:info@sparkai.hk?subject=Book%20a%20Meeting%20with%20Spark%20AI" className="block text-primary transition-colors hover:text-accent">
                Book a Meeting
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-sky-100 pt-6 text-xs text-muted-foreground">
          <p>2026 All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}
