import { testimonials } from "@/lib/content";

// Renders nothing until testimonials actually has entries — see the
// comment in content.ts. Not a placeholder; it simply doesn't exist yet.
export function Testimonials() {
  if (testimonials.length === 0) return null;

  return (
    <section className="border-b border-line bg-paper-deep">
      <div className="mx-auto max-w-2xl space-y-16 px-6 py-20 sm:px-8 sm:py-28">
        {testimonials.map((item) => (
          <blockquote key={item.name} className="text-center">
            <p className="font-display text-2xl leading-snug text-ink sm:text-3xl">
              &ldquo;{item.quote}&rdquo;
            </p>
            <footer className="mt-6 text-sm text-ink-faint">
              {item.name} — {item.role}
            </footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
}
