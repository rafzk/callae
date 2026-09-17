import { experienceItems } from "@/lib/content";
import { SectionHeading } from "./section-heading";

export function Experience() {
  return (
    <section className="border-b border-line bg-paper-deep">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 sm:py-28">
        <SectionHeading
          eyebrow="Selected experience"
          title="Where that expertise was built"
          description="Areas of Rafael's own experience, gained in roles and engagements prior to founding CALLAE: not previous CALLAE client work."
        />

        <div className="mt-16 grid grid-cols-1 gap-x-10 gap-y-10 border-t border-line pt-10 sm:grid-cols-3">
          {experienceItems.map((item) => (
            <div key={item.title}>
              <h3 className="font-display text-lg font-medium text-ink">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
