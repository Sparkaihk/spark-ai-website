import type { Metadata } from "next";
import type * as React from "react";
import "./globals.css";

const brandTitle = "Spark AI | Knowledge Infrastructure for the AI Era";
const brandDescription =
  "Spark AI helps organizations preserve, activate and continuously create value from their knowledge.";

export const metadata: Metadata = {
  metadataBase: new URL("https://sparkai.hk"),
  title: {
    default: brandTitle,
    template: "%s | Spark AI",
  },
  description: brandDescription,
  openGraph: {
    title: brandTitle,
    description: brandDescription,
    url: "https://sparkai.hk",
    siteName: "Spark AI",
    locale: "en_US",
    alternateLocale: ["zh_CN"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: brandTitle,
    description: brandDescription,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-language="en" className="dark">
      <body>{children}</body>
    </html>
  );
}
