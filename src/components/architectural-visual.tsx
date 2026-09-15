const strata = [
  { y: 32, width: 1, opacity: 0.16 },
  { y: 84, width: 0.88, opacity: 0.14 },
  { y: 136, width: 0.74, opacity: 0.12 },
  { y: 188, width: 0.6, opacity: 0.1 },
];

const blocks = [
  { x: 50, y: 372, width: 420, height: 36 },
  { x: 92, y: 318, width: 336, height: 36 },
  { x: 136, y: 264, width: 248, height: 36 },
  { x: 180, y: 210, width: 160, height: 36 },
];

export function ArchitecturalVisual() {
  return (
    <svg
      viewBox="0 0 520 460"
      role="img"
      aria-label="Abstract illustration of stacked geometric forms narrowing upward, suggesting a structure built on solid foundations"
      className="h-auto w-full max-w-lg text-ink sm:max-w-xl"
    >
      <g stroke="currentColor" strokeOpacity="0.5" strokeWidth="1">
        {strata.map((line, i) => (
          <line
            key={line.y}
            x1={260 - 260 * line.width}
            x2={260 + 260 * line.width}
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
        y1="22"
        x2="260"
        y2="210"
        stroke="var(--color-blue)"
        strokeWidth="1.5"
        pathLength={1}
        strokeDasharray={1}
        strokeDashoffset={1}
        style={{ animation: "arch-draw 0.9s ease-out forwards", animationDelay: "0.4s" }}
      />

      <g
        className="arch-float"
        style={{ transformBox: "fill-box", transformOrigin: "center", animationDelay: "1.4s" }}
      >
        <circle
          cx="260"
          cy="18"
          r="10"
          fill="none"
          stroke="var(--color-blue)"
          strokeOpacity="0.35"
          style={{
            animation: "arch-fade-in 0.6s ease-out forwards",
            animationDelay: "1.2s",
            opacity: 0,
          }}
        />
        <circle
          cx="260"
          cy="18"
          r="4.5"
          fill="var(--color-blue)"
          style={{
            animation: "arch-fade-in 0.5s ease-out forwards",
            animationDelay: "1.2s",
            opacity: 0,
          }}
        />
      </g>

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
            fill={i === blocks.length - 1 ? "var(--color-blue)" : "var(--color-paper-deep)"}
            stroke="var(--color-ink)"
            strokeOpacity="0.65"
          />
        </g>
      ))}

      <rect
        x="10"
        y="406"
        width="500"
        height="1.5"
        fill="var(--color-ink)"
        fillOpacity="0.28"
      />
    </svg>
  );
}
