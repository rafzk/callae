import type { Metadata } from "next";
import Link from "next/link";
import { LegalPageHeader } from "@/components/legal-page-header";
import { siteConfig } from "@/lib/content";
import { legalProse } from "@/lib/legal-prose";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: `What cookies ${siteConfig.name}'s website does, and doesn't, use.`,
};

const { h2, p, ul, link } = legalProse;

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

export default function CookiesPage() {
  return (
    <>
      <LegalPageHeader title="Cookie Policy" lastUpdated="17 September 2026" />

      <p className={p}>
        A cookie is a small file a website can store on your device to
        remember information between visits. This page explains what this
        site does, and just as importantly doesn&rsquo;t, use them for.
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
          that submission. See their own{" "}
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

      <h2 className={h2}>Cookie categories</h2>
      <p className={p}>
        Shown for transparency, and reflecting the actual state of the site
        today. There&rsquo;s nothing for you to switch on or off yet; if
        that ever changes, this section will let you choose which categories
        to allow, and a consent banner will ask before any non-essential
        cookie is set.
      </p>
      <ul className="mb-4 space-y-4">
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

      <h2 className={h2}>Managing cookies in your browser</h2>
      <p className={p}>
        Since this site doesn&rsquo;t set tracking cookies, there&rsquo;s
        nothing to opt out of here. If you&rsquo;d still like to control or
        clear cookies generally, you can do so through your browser&rsquo;s
        settings at any time. See our{" "}
        <Link href="/legal/privacy" className={link}>
          Privacy Statement
        </Link>{" "}
        for how we handle personal data more broadly.
      </p>

      <h2 className={h2}>Changes to this policy</h2>
      <p className={p}>
        If we ever add analytics or other non-essential cookies, this page
        will be updated first, and a consent banner will be added before any
        such cookie is set.
      </p>
    </>
  );
}
