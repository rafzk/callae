import { perspective } from "@/lib/content";

export function Perspective() {
  return (
    <section className="border-b border-line bg-paper-deep">
      <div className="mx-auto max-w-3xl px-6 py-20 text-center sm:px-8 sm:py-28">
        <p className="text-sm font-medium uppercase tracking-[0.18em] text-lime">
          Perspective
        </p>
        <h2 className="font-display mx-auto mt-4 max-w-2xl text-3xl font-medium tracking-tight text-ink sm:text-4xl">
          {perspective.heading}
        </h2>
        <div className="mx-auto mt-8 max-w-2xl space-y-5">
          {perspective.body.map((paragraph) => (
            <p key={paragraph} className="text-lg leading-relaxed text-ink-soft">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
