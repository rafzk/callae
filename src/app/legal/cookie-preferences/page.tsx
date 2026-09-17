import type { Metadata } from "next";
import Link from "next/link";
import { LegalPageHeader } from "@/components/legal-page-header";
import { siteConfig } from "@/lib/content";
import { legalProse } from "@/lib/legal-prose";

export const metadata: Metadata = {
  title: "Cookie Preferences",
  description: "The cookie categories this site uses, and their current status.",
};

const { p, link } = legalProse;

const categories = [
  {
    name: "Strictly necessary",
    status: "Always on",
    description:
      "Technical mechanisms required to serve the site reliably and securely. Not used for tracking, and can't be switched off.",
  },
  {
    name: "Analytics",
    status: "Not in use",
    description:
      "Would measure how visitors use the site. This site doesn't currently run analytics of any kind.",
  },
  {
    name: "Marketing",
    status: "Not in use",
    description:
      "Would support advertising or retargeting. This site doesn't run any marketing or advertising cookies.",
  },
] as const;

export default function CookiePreferencesPage() {
  return (
    <>
      <LegalPageHeader
        title="Cookie Preferences"
        lastUpdated="17 September 2026"
      />

      <p className={p}>
        {siteConfig.name} doesn&rsquo;t currently set any non-essential
        cookies, so there&rsquo;s nothing for you to switch on or off yet.
        The categories below are shown for transparency, and reflect the
        actual state of the site today — see our{" "}
        <Link href="/legal/cookies" className={link}>
          Cookie Policy
        </Link>{" "}
        for the full explanation. If that ever changes, this page will let
        you choose which categories to allow, and a consent banner will ask
        before any non-essential cookie is set.
      </p>

      <ul className="mt-8 space-y-4">
        {categories.map((category) => (
          <li
            key={category.name}
            className="border border-line bg-paper-deep px-5 py-4"
          >
            <div className="flex items-center justify-between gap-4">
              <span className="font-medium text-ink">{category.name}</span>
              <span className="shrink-0 rounded-full border border-line px-3 py-1 text-xs font-medium uppercase tracking-[0.08em] text-ink-soft">
                {category.status}
              </span>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">
              {category.description}
            </p>
          </li>
        ))}
      </ul>
    </>
  );
}
