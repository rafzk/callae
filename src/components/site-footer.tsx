import Link from "next/link";
import { legalPages, navLinks, siteConfig } from "@/lib/content";
import { Wordmark } from "./wordmark";

function LinkedInIcon({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.446-2.136 2.94v5.666H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286ZM5.337 7.433a2.064 2.064 0 1 1 0-4.128 2.064 2.064 0 0 1 0 4.128ZM7.119 20.452H3.555V9h3.564v11.452Z" />
    </svg>
  );
}

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-paper">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:px-8">
        <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-sm">
            <Link href="/#top" className="inline-block rounded-sm">
              <Wordmark />
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-paper/65">
              {siteConfig.supportingLine}
            </p>
          </div>

          <nav aria-label="Footer" className="flex flex-col gap-3 sm:items-end">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-paper/75 transition-colors hover:text-paper"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-12 border-t border-paper/15 pt-6">
          <div className="flex flex-col gap-4 text-sm text-paper/55 sm:flex-row sm:items-center sm:justify-between">
            <p>
              &copy; {year} {siteConfig.name}. All rights reserved.
            </p>
            <div className="flex items-center gap-5">
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
                  aria-label={`${siteConfig.name} on LinkedIn`}
                  className="text-paper/75 transition-colors hover:text-paper"
                >
                  <LinkedInIcon className="h-4 w-4" />
                </a>
              ) : null}
            </div>
          </div>

          <nav
            aria-label="Legal"
            className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-xs text-paper/50"
          >
            {legalPages.map((page) => (
              <Link
                key={page.href}
                href={page.href}
                className="transition-colors hover:text-paper/80"
              >
                {page.title}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
