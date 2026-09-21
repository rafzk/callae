import type { MetadataRoute } from "next";
import { legalPages, siteConfig } from "@/lib/content";

// Matches the "Last updated" date shown on each legal page (LegalPageHeader).
// Keep these in sync — a sitemap lastmod that doesn't match the page's own
// stated update date is a signal search engines discount.
const LEGAL_LAST_UPDATED = new Date("2026-09-17");

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteConfig.url,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    ...legalPages.map((page) => ({
      url: `${siteConfig.url}${page.href}`,
      lastModified: LEGAL_LAST_UPDATED,
      changeFrequency: "yearly" as const,
      priority: 0.3,
    })),
  ];
}
