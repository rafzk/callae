import Link from "next/link";
import { legalPages } from "@/lib/content";

export function LegalNav() {
  return (
    <nav
      aria-label="Legal pages"
      className="mb-10 flex flex-wrap gap-x-5 gap-y-2 border-b border-line pb-8 text-sm"
    >
      {legalPages.map((page) => (
        <Link
          key={page.href}
          href={page.href}
          className="link-underline font-medium text-ink-soft transition-colors hover:text-ink"
        >
          {page.title}
        </Link>
      ))}
    </nav>
  );
}
