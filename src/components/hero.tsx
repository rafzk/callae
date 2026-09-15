import { ArchitecturalVisual } from "./architectural-visual";
import { Reveal } from "./reveal";
import { StatStrip } from "./stat-strip";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-line"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--color-line) 1px, transparent 1px), linear-gradient(to bottom, var(--color-line) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)",
        }}
      />

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 px-6 py-20 sm:px-8 sm:py-28 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10 lg:py-32">
        <Reveal>
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-blue">
            Governance &middot; ServiceNow &middot; Digital transformation
          </p>
          <h1 className="font-display mt-6 max-w-2xl text-4xl leading-[1.08] font-medium tracking-tight text-ink sm:text-5xl lg:text-[3.6rem]">
            We build the <span className="text-blue">foundations</span> for
            what comes next.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
            CALLAE is a consultancy bringing senior governance
            expertise and hands-on ServiceNow delivery together. We help
            organisations strengthen how they govern, run their digital
            operations, and prepare, deliberately, for automation and AI.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="#contact"
              className="btn-lift inline-flex items-center justify-center rounded-full bg-blue px-7 py-3.5 text-sm font-medium text-paper"
            >
              Let&rsquo;s talk
            </a>
            <a
              href="#advisory"
              className="btn-lift inline-flex items-center justify-center gap-2 rounded-full border border-ink/70 px-7 py-3.5 text-sm font-medium text-ink transition-colors hover:border-ink hover:bg-ink hover:text-paper"
            >
              Explore our expertise
            </a>
          </div>

          <div className="mt-14 max-w-xl">
            <StatStrip />
          </div>
        </Reveal>

        <Reveal delay={150} className="flex justify-center lg:justify-end">
          <ArchitecturalVisual />
        </Reveal>
      </div>
    </section>
  );
}
