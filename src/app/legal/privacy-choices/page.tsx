import type { Metadata } from "next";
import Link from "next/link";
import { LegalPageHeader } from "@/components/legal-page-header";
import { siteConfig } from "@/lib/content";
import { legalProse } from "@/lib/legal-prose";

export const metadata: Metadata = {
  title: "Your Privacy Choices",
  description: "The choices you have over your personal data on this site.",
};

const { h2, p, ul, link } = legalProse;

export default function PrivacyChoicesPage() {
  return (
    <>
      <LegalPageHeader
        title="Your Privacy Choices"
        lastUpdated="17 September 2026"
      />

      <p className={p}>
        This page pulls together the choices you have over your data on{" "}
        {siteConfig.url} in one place. For the full picture, see our{" "}
        <Link href="/legal/privacy" className={link}>
          Privacy Statement
        </Link>{" "}
        and{" "}
        <Link href="/legal/gdpr" className={link}>
          GDPR
        </Link>{" "}
        page.
      </p>

      <h2 className={h2}>We don&rsquo;t sell or share your data</h2>
      <p className={p}>
        {siteConfig.name} doesn&rsquo;t sell personal data, and doesn&rsquo;t
        share it with third parties for their own advertising or marketing
        purposes. There&rsquo;s no ad-tracking on this site, so there&rsquo;s
        nothing to opt out of on that front.
      </p>

      <h2 className={h2}>Cookies</h2>
      <p className={p}>
        This site doesn&rsquo;t set analytics or advertising cookies. See our{" "}
        <Link href="/legal/cookies" className={link}>
          Cookie Policy
        </Link>{" "}
        for details, and{" "}
        <Link href="/legal/cookie-preferences" className={link}>
          Cookie Preferences
        </Link>{" "}
        for the current status of each cookie category.
      </p>

      <h2 className={h2}>Marketing communications</h2>
      <p className={p}>
        We don&rsquo;t currently run an email newsletter or marketing list.
        If you contact us, we&rsquo;ll only use your details to respond and,
        where relevant, discuss a possible engagement — never to add you to a
        marketing list without asking first.
      </p>

      <h2 className={h2}>Your data rights</h2>
      <ul className={ul}>
        <li>
          Access, correct, delete, restrict, or ask us to export the data we
          hold about you — see the full list on our{" "}
          <Link href="/legal/gdpr" className={link}>
            GDPR
          </Link>{" "}
          page.
        </li>
        <li>
          Object to how we process your data, or withdraw consent where we
          rely on it.
        </li>
        <li>
          Complain to a data protection supervisory authority if you&rsquo;re
          unhappy with how we&rsquo;ve handled a request.
        </li>
      </ul>
      <p className={p}>
        To exercise any of these, email{" "}
        <a href={`mailto:${siteConfig.email}`} className={link}>
          {siteConfig.email}
        </a>
        .
      </p>
    </>
  );
}
