const strata = [
  { y: 40, width: 1, opacity: 0.16 },
  { y: 96, width: 0.86, opacity: 0.14 },
  { y: 152, width: 0.72, opacity: 0.12 },
];

const blocks = [
  { x: 60, y: 372, width: 400, height: 34 },
  { x: 100, y: 320, width: 320, height: 34 },
  { x: 140, y: 268, width: 240, height: 34 },
  { x: 182, y: 216, width: 156, height: 34 },
];

export function ArchitecturalVisual() {
  return (
    <svg
      viewBox="0 0 520 460"
      role="img"
      aria-label="Abstract illustration of stacked geometric forms narrowing upward, suggesting a structure built on solid foundations"
      className="h-auto w-full max-w-md text-ink"
    >
      <g stroke="currentColor" strokeOpacity="0.5" strokeWidth="1">
        {strata.map((line, i) => (
          <line
            key={line.y}
            x1={260 - (260 * line.width)}
            x2={260 + (260 * line.width)}
            y1={line.y}
            y2={line.y}
            pathLength={1}
            strokeDasharray={1}
            strokeDashoffset={1}
            style={{
              animation: "arch-draw 1.1s ease-out forwards",
              animationDelay: `${i * 0.12}s`,
              opacity: line.opacity,
            }}
          />
        ))}
      </g>

      <line
        x1="260"
        y1="30"
        x2="260"
        y2="216"
        stroke="var(--color-green)"
        strokeWidth="1.5"
        pathLength={1}
        strokeDasharray={1}
        strokeDashoffset={1}
        style={{ animation: "arch-draw 0.9s ease-out forwards", animationDelay: "0.4s" }}
      />
      <circle
        cx="260"
        cy="26"
        r="4"
        fill="var(--color-green)"
        style={{
          animation: "arch-fade-in 0.5s ease-out forwards",
          animationDelay: "1.2s",
          opacity: 0,
        }}
      />

      {blocks.map((block, i) => (
        <g
          key={block.y}
          style={{
            animation: "arch-rise-in 0.7s cubic-bezier(0.16,1,0.3,1) forwards",
            animationDelay: `${0.5 + i * 0.12}s`,
            opacity: 0,
            transformBox: "fill-box",
            transformOrigin: "center",
          }}
        >
          <rect
            x={block.x}
            y={block.y}
            width={block.width}
            height={block.height}
            fill={i === blocks.length - 1 ? "var(--color-green)" : "var(--color-paper-deep)"}
            stroke="var(--color-ink)"
            strokeOpacity="0.65"
          />
        </g>
      ))}

      <rect
        x="20"
        y="406"
        width="480"
        height="1"
        fill="var(--color-ink)"
        fillOpacity="0.25"
      />
    </svg>
  );
}
