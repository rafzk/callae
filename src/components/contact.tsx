import { contactCopy } from "@/lib/content";
import { ContactForm } from "./contact-form";

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 bg-paper">
      <div className="mx-auto max-w-3xl px-6 py-20 sm:px-8 sm:py-28">
        <p className="text-sm font-medium uppercase tracking-[0.18em] text-green">
          Contact
        </p>
        <h2 className="font-display mt-4 text-3xl font-medium tracking-tight text-ink sm:text-4xl">
          {contactCopy.heading}
        </h2>
        <p className="mt-4 max-w-xl text-lg leading-relaxed text-ink-soft">
          {contactCopy.body}
        </p>

        <ContactForm />
      </div>
    </section>
  );
}
