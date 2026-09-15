import Image from "next/image";
import { clientLogos } from "@/lib/content";

// Renders nothing until clientLogos actually has entries — see the comment
// in content.ts. Not a section that's "coming soon"; it simply doesn't
// exist on the page yet.
export function ClientLogos() {
  if (clientLogos.length === 0) return null;

  return (
    <section className="border-b border-line bg-paper">
      <div className="mx-auto max-w-5xl px-6 py-14 text-center sm:px-8">
        <p className="text-sm font-medium uppercase tracking-[0.18em] text-ink-faint">
          Trusted by
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {clientLogos.map((logo) => (
            <Image
              key={logo.name}
              src={logo.logoSrc}
              alt={logo.name}
              width={140}
              height={32}
              className="h-8 w-auto opacity-70 grayscale"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
