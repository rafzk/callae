import type { Metadata } from "next";
import Link from "next/link";
import { LegalPageHeader } from "@/components/legal-page-header";
import { legalPages, siteConfig } from "@/lib/content";
import { legalProse } from "@/lib/legal-prose";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Sitemap",
  description: `Every page on the ${siteConfig.name} website, in one place.`,
  path: "/legal/sitemap",
});

const { h2, link } = legalProse;

const homeSections = [
  { label: "Home", href: "/#top" },
  { label: "What We Do", href: "/#expertise" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
] as const;

export default function SitemapPage() {
  return (
    <>
      <LegalPageHeader title="Sitemap" lastUpdated="17 September 2026" />

      <h2 className={h2}>Site</h2>
      <ul className="mb-4 space-y-2">
        {homeSections.map((section) => (
          <li key={section.href}>
            <Link href={section.href} className={link}>
              {section.label}
            </Link>
          </li>
        ))}
      </ul>

      <h2 className={h2}>Legal</h2>
      <ul className="space-y-2">
        {legalPages.map((page) => (
          <li key={page.href}>
            <Link href={page.href} className={link}>
              {page.title}
            </Link>
            <span className="block text-sm text-ink-faint">
              {page.description}
            </span>
          </li>
        ))}
      </ul>
    </>
  );
}
