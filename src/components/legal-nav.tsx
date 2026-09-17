"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { legalPages } from "@/lib/content";

export function LegalNav() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Legal pages"
      className="mb-10 flex flex-wrap gap-2 border-b border-line pb-8"
    >
      {legalPages.map((page) => {
        const active = pathname === page.href;
        return (
          <Link
            key={page.href}
            href={page.href}
            aria-current={active ? "page" : undefined}
            className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
              active
                ? "border-blue bg-blue text-paper"
                : "border-line text-ink-soft hover:border-ink hover:text-ink"
            }`}
          >
            {page.title}
          </Link>
        );
      })}
    </nav>
  );
}
