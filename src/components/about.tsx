import { founder } from "@/lib/content";
import { SectionHeading } from "./section-heading";

export function About() {
  return (
    <section id="about" className="scroll-mt-24 border-b border-line bg-paper">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 sm:py-28">
        <SectionHeading eyebrow="About" title="An independent consultancy" />

        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,220px)_1fr] lg:gap-12">
          <div className="flex items-start gap-5 lg:flex-col lg:gap-6">
            <div
              aria-hidden
              className="flex h-20 w-20 flex-shrink-0 items-center justify-center border border-ink font-display text-xl text-ink"
            >
              RC
            </div>
            <div>
              <p className="font-display text-xl font-medium text-ink">
                {founder.name}
              </p>
              <p className="text-sm text-ink-faint">Founder, CALLAE</p>
            </div>
          </div>

          <div className="max-w-2xl">
            <p className="text-lg leading-relaxed text-ink-soft">
              {founder.bio}
            </p>
            <ul className="mt-8 grid grid-cols-1 gap-x-8 gap-y-3 border-t border-line pt-6 sm:grid-cols-2">
              {founder.facts.map((fact) => (
                <li
                  key={fact}
                  className="flex gap-3 text-sm leading-relaxed text-ink-soft"
                >
                  <span
                    aria-hidden
                    className="mt-2 h-1.5 w-1.5 flex-shrink-0 bg-blue"
                  />
                  {fact}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
