import type { Metadata } from "next";
import type * as React from "react";
import "./globals.css";

const titleZh = "Spark AI | AI 冷數據基礎設施平台";
const titleEn = "Spark AI | AI Cold Data Infrastructure Platform";
const descriptionZh =
  "Spark AI 建構面向投資人、政府與企業的 AI 冷數據基礎設施，結合光碟冷儲存、BlueSafe RAG Cloud 與 Data Asset Bank，釋放沉睡數據價值。";

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
