export function Wordmark({
  className = "",
  underlineClassName = "bg-blue",
  animated = false,
}: {
  className?: string;
  underlineClassName?: string;
  animated?: boolean;
}) {
  return (
    <span className={`inline-flex items-center gap-2 select-none ${className}`}>
      <svg
        aria-hidden
        viewBox="0 0 18 14"
        className={`h-[13px] w-[16px] shrink-0 sm:h-[14px] sm:w-[18px] ${
          animated ? "wordmark-icon" : ""
        }`}
      >
        <rect x="1" y="10.4" width="16" height="2.6" fill="currentColor" />
        <rect x="3" y="6" width="12" height="2.6" fill="currentColor" opacity="0.72" />
        <rect x="5.5" y="1.6" width="7" height="2.6" fill="var(--color-accent)" />
      </svg>
      <span className="inline-flex flex-col leading-none">
        <span className="font-sans font-semibold tracking-[0.22em] text-[15px] sm:text-base">
          CALLAE
        </span>
        <span
          aria-hidden
          className={`mt-1.5 h-[3px] w-[68%] ${underlineClassName}`}
        />
      </span>
    </span>
  );
}
