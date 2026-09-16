import { navLinks, siteConfig } from "@/lib/content";
import { Wordmark } from "./wordmark";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-paper">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:px-8">
        <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-sm">
            <a href="#top" className="inline-block rounded-sm">
              <Wordmark />
            </a>
            <p className="mt-4 text-sm leading-relaxed text-paper/65">
              {siteConfig.supportingLine}
            </p>
          </div>

          <nav aria-label="Footer" className="flex flex-col gap-3 sm:items-end">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-paper/75 transition-colors hover:text-paper"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-paper/15 pt-6 text-sm text-paper/55 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {year} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex gap-5">
            <a
              href={`mailto:${siteConfig.email}`}
              className="transition-colors hover:text-paper"
            >
              {siteConfig.email}
            </a>
            {siteConfig.linkedinUrl ? (
              <a
                href={siteConfig.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-paper"
              >
                LinkedIn
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </footer>
  );
}
