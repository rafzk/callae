// Hand-built glyphs matching the CALLAE brand mark: the A's are a plain
// chevron/peak (no crossbar — the same shape as the standalone "elevation"
// icon), and the E is three stacked bars with no spine. Built as SVG paths
// rather than a font since no such typeface exists.
const STROKE = 15;

function Chevron({ x }: { x: number }) {
  return <path d={`M${x + 6},96 L${x + 45},4 L${x + 84},96`} />;
}

function LetterL({ x }: { x: number }) {
  return <path d={`M${x + 14},4 L${x + 14},96 L${x + 74},96`} />;
}

export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-[0.14em] ${className}`}>
      <svg
        viewBox="-8 -8 612 116"
        className="h-[0.85em] w-auto"
        fill="none"
        stroke="currentColor"
        strokeWidth={STROKE}
        strokeLinecap="round"
        strokeLinejoin="round"
        role="img"
        aria-label="CALLAE"
      >
        {/* C */}
        <path d="M77.2,23 A42,42 0 1 0 77.2,77" />
        {/* A */}
        <g transform="translate(108,0)">
          <Chevron x={0} />
        </g>
        {/* L */}
        <g transform="translate(216,0)">
          <LetterL x={0} />
        </g>
        {/* L */}
        <g transform="translate(310,0)">
          <LetterL x={0} />
        </g>
        {/* A */}
        <g transform="translate(408,0)">
          <Chevron x={0} />
        </g>
        {/* E — three bars, no spine */}
        <g transform="translate(516,0)">
          <line x1="6" y1="8" x2="74" y2="8" />
          <line x1="6" y1="50" x2="74" y2="50" />
          <line x1="6" y1="92" x2="74" y2="92" />
        </g>
      </svg>
      <sup className="-translate-y-1 text-[0.32em] font-medium leading-none">
        &reg;
      </sup>
    </span>
  );
}
