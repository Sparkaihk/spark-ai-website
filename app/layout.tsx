import type { Metadata } from "next";
import type * as React from "react";
import "./globals.css";

const titleZh = "海量冷數據是 AI 應用的藍海 | Spark AI";
const titleEn = "Spark AI | AI Cold Data Platform";
const descriptionZh = "Spark AI 建設 AI 冷數據中心、藍光存儲系統、BlueSafe RAG Cloud 與 Data Asset Bank，釋放冷數據的智能與資產價值。";

export const metadata: Metadata = {
  metadataBase: new URL("https://sparkai.hk"),
  title: {
    default: titleZh,
    template: `%s | ${titleEn}`,
  },
  description: descriptionZh,
  openGraph: {
    title: titleZh,
    description: descriptionZh,
    url: "https://sparkai.hk",
    siteName: "Spark AI",
    locale: "zh_HK",
    alternateLocale: ["en_US"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: titleZh,
    description: descriptionZh,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-Hant" data-language="zh" className="dark">
      <body>{children}</body>
    </html>
  );
}
