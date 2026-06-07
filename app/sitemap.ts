import type { MetadataRoute } from "next";

const siteUrl = "https://perdana-jurutera-perunding.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/projects"];

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
