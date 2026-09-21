import type { Metadata } from "next";
import Link from "next/link";
import { LegalPageHeader } from "@/components/legal-page-header";
import { legalConfig, siteConfig } from "@/lib/content";
import { legalProse } from "@/lib/legal-prose";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Privacy Statement",
  description: `What personal data ${siteConfig.name} collects and how it's used.`,
  path: "/legal/privacy",
});

const { h2, p, ul, link } = legalProse;

export default function PrivacyPage() {
  return (
    <>
      <LegalPageHeader title="Privacy Statement" lastUpdated="17 September 2026" />

      <p className={p}>
        This statement explains what personal data {siteConfig.name} collects
        through {siteConfig.url}, why, and what rights you have over it.
        {" "}{siteConfig.name} is a trading name of {legalConfig.entityName}, a
        sole trader based in {legalConfig.country}, who is the data
        controller for the purposes of the General Data Protection Regulation
        (GDPR).
      </p>

      <h2 className={h2}>Data we collect</h2>
      <p className={p}>
        We collect personal data in two ways:
      </p>
      <ul className={ul}>
        <li>
          <strong className="font-medium text-ink">Contact form.</strong> When
          you use the contact form or email us, we receive the name, email
          address, company (optional) and message you provide.
        </li>
        <li>
          <strong className="font-medium text-ink">Technical data.</strong>{" "}
          Our hosting provider processes standard server logs (such as IP
          address, browser type and request timestamps) needed to serve the
          site securely and reliably. We don&rsquo;t use this data for
          analytics or tracking, and this site doesn&rsquo;t set any
          analytics or advertising cookies. See our{" "}
          <Link href="/legal/cookies" className={link}>
            Cookie Policy
          </Link>
          .
        </li>
      </ul>

      <h2 className={h2}>Why we use it, and our legal basis</h2>
      <ul className={ul}>
        <li>
          To respond to enquiries you send us, and to discuss a possible
          engagement (legal basis: our legitimate interest in responding to
          people who contact us, and taking pre-contractual steps at your
          request).
        </li>
        <li>
          To keep the site secure and working (legal basis: our legitimate
          interest in the security and reliability of the site).
        </li>
        <li>
          To meet legal obligations, such as retaining business records
          (legal basis: legal obligation).
        </li>
      </ul>
      <p className={p}>
        We don&rsquo;t use your data for automated decision-making or
        profiling.
      </p>

      <h2 className={h2}>Who we share it with</h2>
      <p className={p}>
        We use a small number of service providers who process data on our
        behalf, strictly to run the site and handle enquiries:
      </p>
      <ul className={ul}>
        <li>
          <strong className="font-medium text-ink">Web3Forms</strong>, to
          deliver contact form submissions to our inbox. See{" "}
          <a
            href="https://web3forms.com/privacy-policy"
            target="_blank"
            rel="noopener noreferrer"
            className={link}
          >
            Web3Forms&rsquo; own privacy policy
          </a>
          {" "}for how it processes that data.
        </li>
        <li>
          <strong className="font-medium text-ink">Vercel Inc.</strong>, who
          host the site and process the technical data described above.
        </li>
      </ul>
      <p className={p}>
        These providers may process data outside the European Economic Area.
        Where they do, they&rsquo;re required to provide appropriate
        safeguards, such as the European Commission&rsquo;s Standard
        Contractual Clauses.
      </p>

      <h2 className={h2}>How long we keep it</h2>
      <p className={p}>
        We keep enquiry data for as long as needed to respond to you and, if
        an engagement follows, for the duration of that relationship and any
        period required afterwards for legal, accounting or tax purposes. We
        don&rsquo;t keep enquiry data indefinitely, and we delete it once
        it&rsquo;s no longer needed for these purposes.
      </p>

      <h2 className={h2}>Your privacy choices</h2>
      <p className={p}>
        {siteConfig.name} doesn&rsquo;t sell personal data, and doesn&rsquo;t
        share it with third parties for their own advertising or marketing
        purposes. There&rsquo;s no ad-tracking on this site, so there&rsquo;s
        nothing to opt out of on that front.
      </p>
      <p className={p}>
        We don&rsquo;t currently run an email newsletter or marketing list.
        If you contact us, we&rsquo;ll only use your details to respond and,
        where relevant, discuss a possible engagement, never to add you to a
        marketing list without asking first.
      </p>
      <p className={p}>
        This site doesn&rsquo;t set analytics or advertising cookies. See
        our{" "}
        <Link href="/legal/cookies" className={link}>
          Cookie Policy
        </Link>{" "}
        for the full breakdown.
      </p>

      <h2 className={h2}>Your rights</h2>
      <p className={p}>
        Under the GDPR, you have the right to access, correct, delete or
        restrict the personal data we hold about you, to object to our
        processing of it, to receive it in a portable format, and to lodge a
        complaint with a supervisory authority. See our{" "}
        <Link href="/legal/gdpr" className={link}>
          GDPR
        </Link>{" "}
        page for details on each right and how to exercise it.
      </p>

      <h2 className={h2}>Children</h2>
      <p className={p}>
        This site is intended for businesses and professionals, and isn&rsquo;t
        directed at children. We don&rsquo;t knowingly collect personal data
        from children.
      </p>

      <h2 className={h2}>Changes to this statement</h2>
      <p className={p}>
        We may update this statement from time to time. The &ldquo;last
        updated&rdquo; date at the top of this page tells you when it was
        last revised.
      </p>

      <h2 className={h2}>Contact us</h2>
      <p className={p}>
        For any question about this statement, or to exercise your rights,
        email{" "}
        <a href={`mailto:${siteConfig.email}`} className={link}>
          {siteConfig.email}
        </a>
        .
      </p>
    </>
  );
}
