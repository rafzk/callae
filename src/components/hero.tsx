import { siteConfig } from "@/lib/content";
import { ArchitecturalVisual } from "./architectural-visual";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-line"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 px-6 py-20 sm:px-8 sm:py-28 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10 lg:py-32">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-green">
            Governance &middot; ServiceNow &middot; Digital transformation
          </p>
          <h1 className="font-display mt-6 max-w-2xl text-4xl leading-[1.08] font-medium tracking-tight text-ink sm:text-5xl lg:text-[3.4rem]">
            {siteConfig.tagline}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
            CALLAE is an independent consultancy bringing senior governance
            expertise and hands-on ServiceNow delivery together. We help
            organisations strengthen how they govern, run their digital
            operations, and prepare, deliberately, for automation and AI.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-ink px-7 py-3.5 text-sm font-medium text-paper transition-colors hover:bg-green"
            >
              Let&rsquo;s talk
            </a>
            <a
              href="#advisory"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-line px-7 py-3.5 text-sm font-medium text-ink transition-colors hover:border-ink"
            >
              Explore our expertise
            </a>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <ArchitecturalVisual />
        </div>
      </div>
    </section>
  );
}
