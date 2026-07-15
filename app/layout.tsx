import type { Metadata } from "next";
import type * as React from "react";
import "./globals.css";

const titleZh = "Spark AI | AI 冷数据基础设施平台";
const titleEn = "Spark AI | Knowledge Infrastructure for the AI Era Platform";
const descriptionZh =
  "Spark AI 构建可信赖的 AI 冷数据基础设施，连接长期保存、知识治理、企业检索、AI Agent 与可信安全。";
const descriptionEn =
  "Spark AI builds trusted Knowledge Infrastructure for the AI Era to preserve, govern, retrieve and activate enterprise knowledge.";

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
    locale: "zh_CN",
    alternateLocale: ["en_US"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: titleZh,
    description: descriptionEn,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" data-language="zh" className="dark">
      <body>{children}</body>
    </html>
  );
}
