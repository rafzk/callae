import { testimonials } from "@/lib/content";

// Renders nothing until testimonials actually has entries — see the
// comment in content.ts. Not a placeholder; it simply doesn't exist yet.
export function Testimonials() {
  if (testimonials.length === 0) return null;

  return (
    <section className="border-b border-line bg-paper">
      <div className="mx-auto max-w-3xl space-y-20 px-6 py-24 sm:px-8 sm:py-32">
        {testimonials.map((item) => (
          <blockquote key={item.name} className="text-center">
            <svg
              aria-hidden
              viewBox="0 0 32 24"
              className="mx-auto h-8 w-auto text-blue"
              fill="currentColor"
            >
              <path d="M13.3 0 6.4 12.6C4.5 16 3.5 18.8 3.5 21c0 1.8 1.4 3 3.2 3 1.9 0 3.3-1.4 3.3-3.4 0-1.7-1.1-3-2.6-3.3.4-1.9 1.6-4.3 3.5-7.2L13.3 0Zm14.8 0-6.9 12.6c-1.9 3.4-2.9 6.2-2.9 8.4 0 1.8 1.4 3 3.2 3 1.9 0 3.3-1.4 3.3-3.4 0-1.7-1.1-3-2.6-3.3.4-1.9 1.6-4.3 3.5-7.2L28.1 0Z" />
            </svg>
            <p className="font-display mt-6 text-2xl leading-snug text-ink sm:text-3xl">
              {item.quote}
            </p>
            <footer className="mt-8 text-sm text-ink-faint">
              <span className="font-medium text-ink">{item.name}</span>,{" "}
              {item.role}
            </footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
}
