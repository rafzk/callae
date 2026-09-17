import type { Metadata } from "next";
import Link from "next/link";
import { LegalPageHeader } from "@/components/legal-page-header";
import { legalConfig, siteConfig } from "@/lib/content";
import { legalProse } from "@/lib/legal-prose";

export const metadata: Metadata = {
  title: "GDPR",
  description: `Your rights under the GDPR and how ${siteConfig.name} handles them.`,
};

const { h2, p, ul, link } = legalProse;

export default function GdprPage() {
  return (
    <>
      <LegalPageHeader title="GDPR" lastUpdated="17 September 2026" />

      <p className={p}>
        This page summarises your rights under the General Data Protection
        Regulation (GDPR) and how to exercise them with {siteConfig.name}. It
        should be read alongside our{" "}
        <Link href="/legal/privacy" className={link}>
          Privacy Statement
        </Link>
        , which explains what data we collect and why.
      </p>

      <h2 className={h2}>Data controller</h2>
      <p className={p}>
        {legalConfig.entityName}, trading as {legalConfig.tradingAs}, is the
        data controller for personal data processed through this site. As a
        sole trader, we&rsquo;re not required to appoint a Data Protection
        Officer. For any data protection matter, contact us directly at{" "}
        <a href={`mailto:${siteConfig.email}`} className={link}>
          {siteConfig.email}
        </a>
        .
      </p>

      <h2 className={h2}>Your rights</h2>
      <p className={p}>You have the right to:</p>
      <ul className={ul}>
        <li>
          <strong className="font-medium text-ink">Access:</strong> ask for a
          copy of the personal data we hold about you.
        </li>
        <li>
          <strong className="font-medium text-ink">Rectification:</strong>{" "}
          ask us to correct inaccurate or incomplete data.
        </li>
        <li>
          <strong className="font-medium text-ink">Erasure:</strong> ask us
          to delete your data, where there&rsquo;s no legal reason for us to
          keep it.
        </li>
        <li>
          <strong className="font-medium text-ink">
            Restriction of processing:
          </strong>{" "}
          ask us to limit how we use your data in certain circumstances.
        </li>
        <li>
          <strong className="font-medium text-ink">Data portability:</strong>{" "}
          ask for your data in a structured, commonly used format, to move it
          elsewhere.
        </li>
        <li>
          <strong className="font-medium text-ink">Objection:</strong> object
          to us processing your data where we rely on legitimate interest.
        </li>
        <li>
          <strong className="font-medium text-ink">Withdraw consent:</strong>{" "}
          where we rely on your consent for something, withdraw it at any
          time.
        </li>
      </ul>

      <h2 className={h2}>How to exercise a right</h2>
      <p className={p}>
        Email{" "}
        <a href={`mailto:${siteConfig.email}`} className={link}>
          {siteConfig.email}
        </a>{" "}
        telling us which right you&rsquo;d like to exercise. We&rsquo;ll
        respond within one month, and may need to verify your identity first.
        There&rsquo;s no charge for a reasonable request.
      </p>

      <h2 className={h2}>Complaints</h2>
      <p className={p}>
        If you&rsquo;re unhappy with how we&rsquo;ve handled your data,
        please contact us first so we can try to put it right. You also have
        the right to lodge a complaint with the{" "}
        <a
          href={legalConfig.supervisoryAuthority.url}
          target="_blank"
          rel="noopener noreferrer"
          className={link}
        >
          {legalConfig.supervisoryAuthority.name}
        </a>
        , the data protection supervisory authority for {legalConfig.country},
        or with the supervisory authority in your own country of residence.
      </p>
    </>
  );
}
