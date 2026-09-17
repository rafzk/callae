import type { Metadata } from "next";
import Link from "next/link";
import { LegalPageHeader } from "@/components/legal-page-header";
import { siteConfig } from "@/lib/content";
import { legalProse } from "@/lib/legal-prose";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: `What cookies ${siteConfig.name}'s website does — and doesn't — use.`,
};

const { h2, p, ul, link } = legalProse;

export default function CookiesPage() {
  return (
    <>
      <LegalPageHeader title="Cookie Policy" lastUpdated="17 September 2026" />

      <p className={p}>
        A cookie is a small file a website can store on your device to
        remember information between visits. This page explains what this
        site does — and, just as importantly, doesn&rsquo;t — use them for.
      </p>

      <h2 className={h2}>This site doesn&rsquo;t use tracking cookies</h2>
      <p className={p}>
        {siteConfig.url} doesn&rsquo;t run analytics, advertising or
        social-media tracking scripts, and doesn&rsquo;t set any cookies to
        recognise you across visits or build a profile of your browsing.
        There&rsquo;s currently no cookie banner on this site because
        there&rsquo;s nothing non-essential to ask your consent for.
      </p>

      <h2 className={h2}>What is set</h2>
      <ul className={ul}>
        <li>
          <strong className="font-medium text-ink">Hosting infrastructure.</strong>{" "}
          Our hosting provider, Vercel, may use strictly necessary technical
          mechanisms to route requests and keep the site reliable. These
          aren&rsquo;t tracking cookies and fall under the
          &ldquo;strictly necessary&rdquo; exemption from consent
          requirements.
        </li>
        <li>
          <strong className="font-medium text-ink">Contact form.</strong> If
          you submit the contact form, our form processor, Web3Forms, handles
          that submission — see their own{" "}
          <a
            href="https://web3forms.com/privacy-policy"
            target="_blank"
            rel="noopener noreferrer"
            className={link}
          >
            privacy policy
          </a>{" "}
          for whether and how they use cookies.
        </li>
      </ul>

      <h2 className={h2}>Managing cookies in your browser</h2>
      <p className={p}>
        Since this site doesn&rsquo;t set tracking cookies, there&rsquo;s
        nothing to opt out of here. If you&rsquo;d still like to control or
        clear cookies generally, you can do so through your browser&rsquo;s
        settings at any time.
      </p>
      <p className={p}>
        See our{" "}
        <Link href="/legal/cookie-preferences" className={link}>
          Cookie Preferences
        </Link>{" "}
        page for a category-by-category breakdown, and our{" "}
        <Link href="/legal/privacy" className={link}>
          Privacy Statement
        </Link>{" "}
        for how we handle personal data more broadly.
      </p>

      <h2 className={h2}>Changes to this policy</h2>
      <p className={p}>
        If we ever add analytics or other non-essential cookies, this page
        and our Cookie Preferences page will be updated first, and a consent
        banner will be added before any such cookie is set.
      </p>
    </>
  );
}
