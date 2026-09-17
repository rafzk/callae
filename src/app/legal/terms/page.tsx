import type { Metadata } from "next";
import { LegalPageHeader } from "@/components/legal-page-header";
import { legalConfig, siteConfig } from "@/lib/content";
import { legalProse } from "@/lib/legal-prose";

export const metadata: Metadata = {
  title: "Site Terms",
  description: `The terms that govern use of the ${siteConfig.name} website.`,
};

const { h2, p, link } = legalProse;

export default function TermsPage() {
  return (
    <>
      <LegalPageHeader title="Site Terms" lastUpdated="17 September 2026" />

      <p className={p}>
        These terms govern your use of {siteConfig.url} (the &ldquo;site&rdquo;),
        operated by {legalConfig.entityName}, trading as {legalConfig.tradingAs}, a
        sole trader based in {legalConfig.country} (&ldquo;{siteConfig.name}
        &rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;). By using the site, you
        accept these terms. If you don&rsquo;t agree with them, please don&rsquo;t
        use the site.
      </p>
      <p className={p}>
        These terms cover the website only. They don&rsquo;t govern any
        advisory, delivery or other services engagement: those are covered by
        a separate, signed agreement with each client.
      </p>

      <h2 className={h2}>Use of the site</h2>
      <p className={p}>
        You may view and browse the site for your own personal or business
        information. You may not copy, reproduce, republish or otherwise
        exploit its content for commercial purposes without our prior written
        permission, other than sharing links to it.
      </p>

      <h2 className={h2}>Intellectual property</h2>
      <p className={p}>
        The site&rsquo;s content (text, design, graphics and the{" "}
        {siteConfig.name} name and mark) belongs to us or our licensors and
        is protected by copyright and other intellectual property laws.
        Nothing on the site grants you a licence to use it beyond browsing.
      </p>

      <h2 className={h2}>No professional advice</h2>
      <p className={p}>
        Content on this site is general information about {siteConfig.name}
        and its work. It isn&rsquo;t professional or legal advice, and
        shouldn&rsquo;t be relied on as such. Any advice specific to your
        organisation is given only under a formal engagement.
      </p>

      <h2 className={h2}>Third-party links</h2>
      <p className={p}>
        The site may link to third-party websites we don&rsquo;t control.
        We&rsquo;re not responsible for their content or practices, and
        including a link isn&rsquo;t an endorsement.
      </p>

      <h2 className={h2}>Availability and changes</h2>
      <p className={p}>
        We aim to keep the site available and accurate, but we don&rsquo;t
        guarantee uninterrupted access or that it&rsquo;s free of errors. We
        may change, suspend or withdraw all or part of the site at any time.
      </p>

      <h2 className={h2}>Limitation of liability</h2>
      <p className={p}>
        The site is provided &ldquo;as is&rdquo;. To the extent permitted by
        law, we exclude liability for any loss or damage arising from your
        use of the site, except where that liability can&rsquo;t be excluded
        by law (for example, liability for fraud).
      </p>

      <h2 className={h2}>Governing law</h2>
      <p className={p}>
        These terms are governed by the laws of {legalConfig.country}, and
        any dispute relating to them is subject to the exclusive jurisdiction
        of the Portuguese courts.
      </p>

      <h2 className={h2}>Changes to these terms</h2>
      <p className={p}>
        We may update these terms from time to time. The &ldquo;last
        updated&rdquo; date at the top of this page tells you when it was
        last revised.
      </p>

      <h2 className={h2}>Contact</h2>
      <p className={p}>
        Questions about these terms? Email{" "}
        <a href={`mailto:${siteConfig.email}`} className={link}>
          {siteConfig.email}
        </a>
        .
      </p>
    </>
  );
}
