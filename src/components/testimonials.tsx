"use client";

import { useState } from "react";
import { testimonials } from "@/lib/content";

function ArrowIcon({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden viewBox="0 0 20 20" fill="none" className={className}>
      <path
        d="M8 4l6 6-6 6"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Renders nothing until testimonials actually has entries — see the
// comment in content.ts. Not a placeholder; it simply doesn't exist yet.
export function Testimonials() {
  const [index, setIndex] = useState(0);

  if (testimonials.length === 0) return null;

  const item = testimonials[index];
  const hasMultiple = testimonials.length > 1;

  function go(delta: number) {
    setIndex((prev) => (prev + delta + testimonials.length) % testimonials.length);
  }

  return (
    <section className="border-b border-line bg-paper">
      <div className="mx-auto max-w-3xl px-6 py-24 sm:px-8 sm:py-32">
        <div className="relative">
          {hasMultiple ? (
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Previous testimonial"
              className="absolute top-1/2 left-0 hidden -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-paper p-2.5 text-ink-soft transition-colors hover:border-ink hover:text-ink sm:flex md:-left-6 lg:-left-14"
            >
              <ArrowIcon className="h-4 w-4 rotate-180" />
            </button>
          ) : null}

          <blockquote className="text-center">
            <svg
              aria-hidden
              viewBox="0 0 32 24"
              className="mx-auto h-8 w-auto text-blue"
              fill="currentColor"
            >
              <path d="M13.3 0 6.4 12.6C4.5 16 3.5 18.8 3.5 21c0 1.8 1.4 3 3.2 3 1.9 0 3.3-1.4 3.3-3.4 0-1.7-1.1-3-2.6-3.3.4-1.9 1.6-4.3 3.5-7.2L13.3 0Zm14.8 0-6.9 12.6c-1.9 3.4-2.9 6.2-2.9 8.4 0 1.8 1.4 3 3.2 3 1.9 0 3.3-1.4 3.3-3.4 0-1.7-1.1-3-2.6-3.3.4-1.9 1.6-4.3 3.5-7.2L28.1 0Z" />
            </svg>
            <div key={index} className="testimonial-enter">
              <p className="font-display mt-6 text-2xl leading-snug text-ink sm:text-3xl">
                {item.quote}
              </p>
              <footer className="mt-8 text-sm text-ink-faint">
                <span className="font-medium text-ink">{item.name}</span>,{" "}
                {item.role}
              </footer>
            </div>
          </blockquote>

          {hasMultiple ? (
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Next testimonial"
              className="absolute top-1/2 right-0 hidden translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-paper p-2.5 text-ink-soft transition-colors hover:border-ink hover:text-ink sm:flex md:-right-6 lg:-right-14"
            >
              <ArrowIcon className="h-4 w-4" />
            </button>
          ) : null}
        </div>

        {hasMultiple ? (
          <div className="mt-10 flex items-center justify-center gap-2">
            {testimonials.map((t, i) => (
              <button
                key={`${t.name}-${i}`}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Show testimonial ${i + 1} of ${testimonials.length}`}
                aria-current={i === index}
                className={`h-2 rounded-full transition-all ${
                  i === index ? "w-6 bg-blue" : "w-2 bg-line hover:bg-ink-faint"
                }`}
              />
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}
