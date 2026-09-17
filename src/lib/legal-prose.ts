// Shared Tailwind classes for legal-page prose, so the seven /legal/* pages
// read as one consistent document set instead of drifting independently.
export const legalProse = {
  h2: "font-display mt-10 mb-3 text-xl font-medium text-ink first:mt-0",
  p: "mb-4 text-base leading-relaxed text-ink-soft",
  ul: "mb-4 list-disc space-y-2 pl-5 text-base leading-relaxed text-ink-soft",
  link: "font-medium text-ink underline decoration-line underline-offset-4 hover:text-blue",
} as const;
