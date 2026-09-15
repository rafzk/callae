import { founder } from "@/lib/content";
import { SectionHeading } from "./section-heading";

export function About() {
  return (
    <section id="about" className="scroll-mt-24 border-b border-line bg-paper">
      <div className="mx-auto max-w-3xl px-6 py-20 sm:px-8 sm:py-28">
        <SectionHeading eyebrow="About" title="About CALLAE" />

        <div className="mt-14 flex flex-col items-center text-center">
          <div
            aria-hidden
            className="flex h-20 w-20 flex-shrink-0 items-center justify-center border border-ink font-display text-xl text-ink"
          >
            RC
          </div>
          <p className="font-display mt-5 text-xl font-medium text-ink">
            {founder.name}
          </p>
          <p className="text-sm text-ink-faint">Founder, CALLAE</p>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">
            {founder.bio}
          </p>

          <ul className="mt-8 grid w-full grid-cols-1 gap-x-8 gap-y-3 border-t border-line pt-6 text-left sm:grid-cols-2">
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
    </section>
  );
}
