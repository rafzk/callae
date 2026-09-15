import { ArchitecturalVisual } from "./architectural-visual";
import { Reveal } from "./reveal";

export function Hero() {
  return (
    <section id="top" className="border-b border-line">
      <div className="mx-auto flex max-w-3xl flex-col items-center px-6 py-24 text-center sm:px-8 sm:py-32">
        <Reveal className="flex flex-col items-center">
          <ArchitecturalVisual className="h-auto w-full max-w-[180px] text-ink sm:max-w-[220px]" />

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
        </Reveal>
      </div>
    </section>
  );
}
