import type { CSSProperties } from "react";
import { ArchitecturalVisual } from "./architectural-visual";
import { Reveal } from "./reveal";

// Scopes the brand tokens to their on-dark equivalents for this section only:
// --color-blue becomes a lighter tint of the same cobalt hue (not a second,
// unrelated blue) so it keeps enough contrast against the gradient, and the
// ink/line tokens flip to light so every existing utility class (text-ink,
// border-line, etc.) works unchanged inside this subtree.
const darkScope = {
  background: "radial-gradient(120% 90% at 50% 0%, #16234a 0%, #05070c 65%)",
  "--color-ink": "#f5f7fb",
  "--color-ink-soft": "#b7c0d6",
  "--color-ink-faint": "#8894b3",
  "--color-blue": "#7c9bfa",
  "--color-line": "rgba(255, 255, 255, 0.18)",
} as CSSProperties;

export function Hero() {
  return (
    <section
      id="top"
      className="full-viewport relative flex flex-col overflow-hidden"
      style={darkScope}
    >
      {/* Soft, slowly-pulsing colour glow for atmosphere behind the
          content — same blue as the rest of the brand, not a new hue. */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/4 top-1/4 h-96 w-96 animate-pulse rounded-full bg-blue/20 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-1/4 right-1/4 h-96 w-96 animate-pulse rounded-full bg-blue/15 blur-3xl"
        style={{ animationDelay: "1s" }}
      />

      <div className="relative mx-auto flex w-full max-w-3xl flex-1 flex-col items-center justify-center px-6 py-20 text-center sm:px-8 sm:py-28">
        <Reveal className="flex flex-col items-center">
          <ArchitecturalVisual className="h-auto w-full max-w-[220px] text-ink sm:max-w-[260px]" />

          <p className="mt-10 text-sm font-medium uppercase tracking-[0.18em] text-blue">
            Governance &middot; ServiceNow &middot; Digital transformation
          </p>
          <h1 className="font-display mt-6 text-4xl leading-[1.1] font-medium tracking-tight text-ink sm:text-5xl lg:text-6xl">
            We build the <span className="text-blue">foundations</span> for
            what comes next.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
            CALLAE is a consultancy bringing senior governance expertise and
            hands-on ServiceNow delivery together. We help organisations
            strengthen how they govern, run their digital operations, and
            prepare, deliberately, for automation and AI.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="#contact"
              className="btn-lift inline-flex items-center justify-center rounded-full bg-paper px-7 py-3.5 text-sm font-medium text-blue-deep"
            >
              Let&rsquo;s talk
            </a>
            <a
              href="#advisory"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-ink/35 px-7 py-3.5 text-sm font-medium text-ink transition-colors hover:border-ink hover:bg-ink hover:text-blue-deep"
            >
              Explore our expertise
            </a>
          </div>
        </Reveal>
      </div>

      {/* Dissolves the gradient into the page background instead of cutting
          straight to white, so the dark hero and light content read as one
          continuous page rather than two stitched-together sections. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-28 sm:h-36"
        style={{
          background: "linear-gradient(to bottom, transparent, var(--color-paper))",
        }}
      />
    </section>
  );
}
