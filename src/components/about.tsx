import { founder, recognitions } from "@/lib/content";
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
                  className="mt-2 h-1.5 w-1.5 flex-shrink-0 bg-lime"
                />
                {fact}
              </li>
            ))}
          </ul>

          {recognitions.length > 0 ? (
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3 border-t border-line pt-8">
              {recognitions.map((item) => (
                <div
                  key={item.name}
                  className="flex max-w-xs flex-col items-start gap-1.5 rounded-xl border border-line bg-paper-deep px-5 py-4 text-left sm:max-w-none sm:flex-row sm:items-center sm:gap-3"
                >
                  <span className="font-display shrink-0 text-sm font-medium text-lime">
                    {item.name}
                  </span>
                  <span
                    aria-hidden
                    className="hidden h-4 w-px shrink-0 bg-line sm:block"
                  />
                  <span className="text-xs leading-snug text-ink-faint sm:max-w-[220px]">
                    {item.description}
                  </span>
                </div>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
