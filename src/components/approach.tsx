import { approachSteps } from "@/lib/content";
import { SectionHeading } from "./section-heading";

export function Approach() {
  return (
    <section className="border-b border-line bg-paper-deep">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 sm:py-28">
        <SectionHeading
          eyebrow="How we work"
          title="A practical approach, built on foundations"
          description="Hands-on, senior expertise from first conversation to handover — with the aim of leaving your team more capable than we found it."
        />

        <ol className="mt-16 grid grid-cols-1 gap-x-10 gap-y-12 sm:grid-cols-2">
          {approachSteps.map((item) => (
            <li key={item.step} className="border-t border-line pt-6">
              <span className="font-display text-sm text-ink-faint">
                {item.step}
              </span>
              <h3 className="font-display mt-2 text-xl font-medium text-ink">
                {item.title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-ink-soft">
                {item.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
