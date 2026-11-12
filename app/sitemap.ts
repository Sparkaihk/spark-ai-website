import type { MetadataRoute } from "next";

const baseUrl = "https://sparkai.hk";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "/",
    "/knowledge-services",
    "/platform/ai-cold-data",
    "/products/spark-ai-appliance",
    "/products",
    "/technology",
    "/knowledge",
    "/solutions",
    "/principles",
    "/about",
    "/contact",
    "/resources",
    "/architecture",
    "/industries",
  ];

  return routes.map((route) => ({
    url: new URL(route, baseUrl).toString(),
    changeFrequency: (route === "/" || route === "/knowledge-services" ? "weekly" : "monthly") as "weekly" | "monthly",
    priority: route === "/" ? 1 : route === "/knowledge-services" ? 0.9 : 0.7,
  }));
}
