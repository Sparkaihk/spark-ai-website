import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Spark AI",
    template: "%s | Spark AI",
  },
  description:
    "Spark AI digital platform architecture for enterprise AI products, capabilities, industries, ecosystem, investors, news, and contact experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
