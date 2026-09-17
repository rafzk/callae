// A quiet constellation of connected nodes in the hero's periphery — a
// literal nod to "connections" that stays out of the way of the headline,
// which sits in the empty middle band. Opacity and motion are kept low on
// purpose; this is atmosphere, not a focal point.
const nodes = [
  { x: 100, y: 150 },
  { x: 230, y: 300 },
  { x: 150, y: 480 },
  { x: 290, y: 630 },
  { x: 650, y: 90 },
  { x: 950, y: 130 },
  { x: 1300, y: 180 },
  { x: 1180, y: 340 },
  { x: 1340, y: 520 },
  { x: 1200, y: 680 },
  { x: 610, y: 790 },
  { x: 950, y: 760 },
];

const edges: [number, number][] = [
  [0, 1],
  [1, 2],
  [2, 3],
  [1, 4],
  [4, 5],
  [5, 7],
  [6, 7],
  [7, 8],
  [8, 9],
  [3, 10],
  [10, 11],
  [9, 11],
];

export function HeroNetwork() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 1440 900"
      preserveAspectRatio="xMidYMid slice"
      className="pointer-events-none absolute inset-0 h-full w-full text-ink"
    >
      {edges.map(([a, b], i) => {
        const from = nodes[a];
        const to = nodes[b];
        return (
          <line
            key={`${a}-${b}`}
            x1={from.x}
            y1={from.y}
            x2={to.x}
            y2={to.y}
            stroke="currentColor"
            strokeWidth="1"
            className="hero-network-line"
            style={{ animationDelay: `${(i % 6) * 1.1}s` }}
          />
        );
      })}
      {nodes.map((node, i) => (
        <circle
          key={i}
          cx={node.x}
          cy={node.y}
          r="3"
          fill="currentColor"
          className="hero-network-node"
          style={{ animationDelay: `${(i % 5) * 1.3}s` }}
        />
      ))}
    </svg>
  );
}
