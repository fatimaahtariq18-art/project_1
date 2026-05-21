import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site.config";
import { ROUTES } from "@/lib/constants";
import { getAllServiceSlugs } from "@/content/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const servicePages = getAllServiceSlugs().map((slug) => ({
    url: `${siteConfig.url}${ROUTES.service(slug)}`,
    lastModified: new Date(),
  }));

  const staticPages = [
    ROUTES.home,
    ROUTES.about,
    ROUTES.services,
    ROUTES.product,
    ROUTES.contact,
  ].map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: new Date(),
  }));

  return [...staticPages, ...servicePages];
}
