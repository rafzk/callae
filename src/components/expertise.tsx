import { pillars } from "@/lib/content";
import { SectionHeading } from "./section-heading";

export function Expertise() {
  return (
    <section id="expertise" className="border-b border-line bg-paper">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 sm:py-28">
        <SectionHeading
          eyebrow="What we do"
          title="Three ways we help"
          description="Complementary areas of work — engaged together on a programme, or on their own for a focused piece of advice or delivery."
        />

        <div className="mt-16 divide-y divide-line border-t border-line">
          {pillars.map((pillar) => (
            <div
              key={pillar.id}
              id={pillar.id}
              className="group relative grid scroll-mt-24 grid-cols-1 gap-6 py-12 pl-0 transition-[padding] duration-300 hover:pl-6 lg:grid-cols-[minmax(0,220px)_1fr] lg:gap-12"
            >
              <span
                aria-hidden
                className="absolute top-0 left-0 h-full w-0.5 origin-top scale-y-0 bg-blue transition-transform duration-300 ease-out group-hover:scale-y-100"
              />
              <div>
                <span className="font-display text-sm text-ink-faint transition-colors duration-300 group-hover:text-blue">
                  {pillar.kicker}
                </span>
                <h3 className="font-display mt-2 text-2xl font-medium text-ink">
                  {pillar.name}
                </h3>
              </div>

              <div className="max-w-2xl">
                <p className="text-lg leading-relaxed text-ink-soft">
                  {pillar.description}
                </p>
                <ul className="mt-6 space-y-2.5">
                  {pillar.examples.map((example) => (
                    <li
                      key={example}
                      className="flex gap-3 text-sm leading-relaxed text-ink-soft"
                    >
                      <span
                        aria-hidden
                        className="mt-2 h-1.5 w-1.5 flex-shrink-0 bg-blue"
                      />
                      {example}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
