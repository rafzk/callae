export function LegalPageHeader({
  title,
  lastUpdated,
}: {
  title: string;
  lastUpdated: string;
}) {
  return (
    <header className="mb-10">
      <p className="text-sm font-medium uppercase tracking-[0.18em] text-blue">
        Legal
      </p>
      <h1 className="font-display mt-3 text-3xl font-medium text-ink sm:text-4xl">
        {title}
      </h1>
      <p className="mt-3 text-sm text-ink-faint">Last updated {lastUpdated}</p>
    </header>
  );
}
