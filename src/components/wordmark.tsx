export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-flex flex-col leading-none select-none ${className}`}
    >
      <span className="font-sans font-semibold tracking-[0.22em] text-[15px] sm:text-base">
        CALLAE
      </span>
      <span
        aria-hidden
        className="mt-1.5 h-[3px] w-[68%] bg-blue"
      />
    </span>
  );
}
