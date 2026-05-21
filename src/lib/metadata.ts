import type { Metadata } from "next";
import { siteConfig } from "@/config/site.config";

type PageMetadataOptions = {
  title?: string;
  description?: string;
  path?: string;
};

export function createPageMetadata({
  title,
  description = siteConfig.description,
  path = "",
}: PageMetadataOptions = {}): Metadata {
  const pageTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.name;

  return {
    title: pageTitle,
    description,
    openGraph: {
      title: pageTitle,
      description,
      url: `${siteConfig.url}${path}`,
      siteName: siteConfig.name,
      type: "website",
    },
  };
}
