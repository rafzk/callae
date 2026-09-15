import { perspective } from "@/lib/content";

export function Perspective() {
  return (
    <section className="border-b border-line-deep bg-green-deep text-paper">
      <div className="mx-auto max-w-4xl px-6 py-20 sm:px-8 sm:py-28">
        <p className="text-sm font-medium uppercase tracking-[0.18em] text-paper/60">
          Perspective
        </p>
        <h2 className="font-display mt-4 max-w-2xl text-3xl font-medium tracking-tight sm:text-4xl">
          {perspective.heading}
        </h2>
        <div className="mt-8 space-y-5">
          {perspective.body.map((paragraph) => (
            <p key={paragraph} className="max-w-2xl text-lg leading-relaxed text-paper/80">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
