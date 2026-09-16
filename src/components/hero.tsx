import { siteConfig } from "@/lib/content";
import { ArchitecturalVisual } from "./architectural-visual";
import { Reveal } from "./reveal";

export function Hero() {
  return (
    <section
      id="top"
      className="full-viewport relative flex flex-col overflow-hidden border-b border-line"
    >
      {/* Soft, slowly-pulsing colour glow for atmosphere behind the
          content — the brand lime, at low opacity. */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/4 top-1/4 h-96 w-96 animate-pulse rounded-full bg-lime/10 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-1/4 right-1/4 h-96 w-96 animate-pulse rounded-full bg-lime/[0.07] blur-3xl"
        style={{ animationDelay: "1s" }}
      />

      <div className="relative mx-auto flex w-full max-w-3xl flex-1 flex-col items-center justify-center px-6 py-20 text-center sm:px-8 sm:py-28">
        <Reveal className="flex flex-col items-center">
          <ArchitecturalVisual className="h-auto w-full max-w-[220px] text-ink sm:max-w-[260px]" />

          <p className="mt-10 text-sm font-medium uppercase tracking-[0.18em] text-lime">
            Governance &middot; ServiceNow &middot; Digital transformation
          </p>
          <h1 className="font-display mt-6 text-4xl leading-[1.1] font-medium tracking-tight text-ink sm:text-5xl lg:text-6xl">
            Transforming complexity{" "}
            <span className="text-lime">into value</span>.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
            {siteConfig.supportingLine}
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="#contact"
              className="btn-lift inline-flex items-center justify-center gap-2 rounded-full bg-lime px-7 py-3.5 text-sm font-medium text-paper"
            >
              Let&rsquo;s work together
              <span aria-hidden>&rarr;</span>
            </a>
            <a
              href="#expertise"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-ink/35 px-7 py-3.5 text-sm font-medium text-ink transition-colors hover:border-ink hover:bg-ink hover:text-paper"
            >
              Explore our services
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
