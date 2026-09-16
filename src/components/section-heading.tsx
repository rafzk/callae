export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow ? (
        <p className="text-sm font-medium uppercase tracking-[0.18em] text-blue">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-display mt-4 text-3xl font-medium tracking-tight text-ink sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-lg leading-relaxed text-ink-soft">
          {description}
        </p>
      ) : null}
    </div>
  );
}
