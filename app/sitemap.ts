import type { MetadataRoute } from "next";

const baseUrl = "https://sparkai.hk";

const routes = [
  "/",
  "/about",
  "/architecture",
  "/cases",
  "/contact",
  "/industries",
  "/knowledge",
  "/knowledge/knowledge-infrastructure-appliance",
  "/platform/ai-cold-data",
  "/principles",
  "/products",
  "/products/spark-ai-appliance",
  "/products/spark-ai-edge-appliance",
  "/products/storage",
  "/resources",
  "/solutions",
  "/solutions/100pb-ai-cold-data-platform",
  "/solutions/ai-cold-data",
  "/solutions/ai-data-asset-bank",
  "/solutions/data-bank",
  "/solutions/edge-ai",
  "/solutions/enterprise-rag-platform",
  "/solutions/optical-storage",
  "/solutions/rag",
  "/technology",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority:
      route === "/"
        ? 1
        : route === "/knowledge/knowledge-infrastructure-appliance" ||
            route === "/products/spark-ai-appliance"
          ? 0.9
          : 0.7,
  }));
}
