type IconProps = { className?: string };

const shared = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

// Advisory: a compass — direction and judgement before commitment.
export function AdvisoryIcon({ className }: IconProps) {
  return (
    <svg {...shared} className={className} aria-hidden>
      <circle cx="12" cy="12" r="8.25" />
      <path d="M14.6 9.4 13 13l-3.6 1.6L11 11l3.6-1.6Z" />
    </svg>
  );
}

// Delivery: work handed into a tray — built, finished, maintainable.
export function DeliveryIcon({ className }: IconProps) {
  return (
    <svg {...shared} className={className} aria-hidden>
      <path d="M4.5 12h3.8l1.4 2.2h4.6l1.4-2.2h3.8" />
      <path d="M6.3 12 7.2 6h9.6l.9 6" />
      <path d="M4.5 12v4.5a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1V12" />
    </svg>
  );
}

// Labs: a flask — small, contained experiments.
export function LabsIcon({ className }: IconProps) {
  return (
    <svg {...shared} className={className} aria-hidden>
      <path d="M9.75 3h4.5" />
      <path d="M10.5 3v6.2l-4.6 8.4a1.4 1.4 0 0 0 1.23 2.08h9.74a1.4 1.4 0 0 0 1.23-2.08L13.5 9.2V3" />
      <path d="M8.4 15.5h7.2" />
    </svg>
  );
}
