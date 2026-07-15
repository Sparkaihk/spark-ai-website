import type * as React from "react";

import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="site-ambient" aria-hidden="true">
        <span className="floating-particle left-[9%] top-[18%]" />
        <span className="floating-particle left-[78%] top-[24%] [animation-delay:1.8s]" />
        <span className="floating-particle left-[18%] top-[68%] [animation-delay:3.1s]" />
        <span className="floating-particle left-[86%] top-[72%] [animation-delay:4.6s]" />
      </div>
      <SiteHeader />
      {children}
      <SiteFooter />
    </>
  );
}
