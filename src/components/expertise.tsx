import { pillars } from "@/lib/content";
import { AdvisoryIcon, DeliveryIcon, LabsIcon } from "./pillar-icons";
import { SectionHeading } from "./section-heading";

const icons = {
  advisory: AdvisoryIcon,
  delivery: DeliveryIcon,
  labs: LabsIcon,
} as const;

export function Expertise() {
  return (
    <section id="expertise" className="border-b border-line bg-paper">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 sm:py-28">
        <SectionHeading
          eyebrow="What we do"
          title="Three ways we help"
          description="Complementary areas of work — engaged together on a programme, or on their own for a focused piece of advice or delivery."
        />

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {pillars.map((pillar) => {
            const Icon = icons[pillar.id as keyof typeof icons];
            return (
            <div
              key={pillar.id}
              id={pillar.id}
              className="scroll-mt-24 rounded-2xl border border-line bg-paper p-8 transition-all duration-300 hover:-translate-y-1 hover:border-blue/40 hover:shadow-[0_20px_40px_-24px_rgba(53,80,158,0.35)]"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-soft">
                  {Icon ? <Icon className="h-5 w-5 text-blue" /> : null}
                </div>
                <span className="font-display text-sm text-ink-faint">
                  {pillar.kicker}
                </span>
              </div>
              <h3 className="font-display mt-5 text-xl font-medium text-ink">
                {pillar.name}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-ink-soft">
                {pillar.description}
              </p>
              <ul className="mt-5 space-y-2.5">
                {pillar.examples.map((example) => (
                  <li
                    key={example}
                    className="flex gap-2.5 text-sm leading-relaxed text-ink-soft"
                  >
                    <span
                      aria-hidden
                      className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-blue"
                    />
                    {example}
                  </li>
                ))}
              </ul>
            </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
