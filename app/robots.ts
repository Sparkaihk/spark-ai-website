import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/test", "/investors"],
    },
    sitemap: "https://sparkai.hk/sitemap.xml",
    host: "https://sparkai.hk",
  };
}
