"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { navLinks } from "@/lib/content";
import { Wordmark } from "./wordmark";

export function SiteHeader({ forceSolid = false }: { forceSolid?: boolean } = {}) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // The hero is the only dark section and always sits at the top of the
  // page, so "not scrolled yet" reliably means "still over the dark hero" —
  // that's what lets the header go transparent/light there and solid once
  // past it, without tracking the hero's position separately. Pages with no
  // dark hero (e.g. the legal pages) pass forceSolid so it never goes
  // transparent-over-light.
  const solid = forceSolid || scrolled || open;

  useEffect(() => {
    if (!open) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b backdrop-blur transition-[background-color,box-shadow,border-color] duration-300 ${
        solid
          ? "border-line bg-paper/90 shadow-[0_8px_24px_-16px_rgba(16,25,43,0.35)]"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-8">
        <Link
          href="/#top"
          className={`rounded-sm ${solid ? "" : "text-white"}`}
          onClick={() => setOpen(false)}
          aria-label={`${"CALLAE"} — back to top`}
        >
          <Wordmark
            underlineClassName={solid ? "bg-blue" : "bg-white/70"}
            animated
          />
        </Link>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-9 md:flex"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`link-underline text-sm font-medium transition-colors ${
                solid
                  ? "text-ink-soft hover:text-ink"
                  : "text-white/85 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/#contact"
            className={`btn-lift inline-flex items-center rounded-full px-5 py-2.5 text-sm font-medium transition-colors ${
              solid ? "bg-blue text-paper" : "bg-paper text-blue-deep"
            }`}
          >
            Let&rsquo;s talk
          </Link>
        </nav>

        <button
          type="button"
          className={`inline-flex h-10 w-10 items-center justify-center rounded-full border md:hidden ${
            solid ? "border-line text-ink" : "border-white/40 text-white"
          }`}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="relative block h-3.5 w-4.5" aria-hidden>
            <span
              className={`absolute left-0 top-0 h-px w-4.5 transition-transform ${
                solid ? "bg-ink" : "bg-white"
              } ${open ? "translate-y-[7px] rotate-45" : ""}`}
            />
            <span
              className={`absolute left-0 top-1.5 h-px w-4.5 transition-opacity ${
                solid ? "bg-ink" : "bg-white"
              } ${open ? "opacity-0" : "opacity-100"}`}
            />
            <span
              className={`absolute left-0 top-3 h-px w-4.5 transition-transform ${
                solid ? "bg-ink" : "bg-white"
              } ${open ? "-translate-y-[7px] -rotate-45" : ""}`}
            />
          </span>
        </button>
      </div>

      <div
        id="mobile-nav"
        className={`overflow-hidden border-t border-line bg-paper transition-[max-height] duration-300 ease-out md:hidden ${
          open ? "max-h-96" : "max-h-0 border-t-0"
        }`}
      >
        <nav
          aria-label="Mobile"
          className="flex flex-col gap-1 px-6 py-4 sm:px-8"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-md px-2 py-3 text-base font-medium text-ink-soft hover:bg-paper-deep hover:text-ink"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/#contact"
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex items-center justify-center rounded-full bg-blue px-5 py-3 text-sm font-medium text-paper"
          >
            Let&rsquo;s talk
          </Link>
        </nav>
      </div>
    </header>
  );
}
