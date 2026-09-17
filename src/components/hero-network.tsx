// A faint brain silhouette across the top of the hero — nested arcs (its
// folds) split by a central fissure — with root/dendrite clusters trailing
// down from it into the lower corners, like a brain's roots. A soft ball
// of light drifts along a few of the paths. Everything stays out of the
// middle band where the headline sits, and opacity is intentionally very
// low — this is atmosphere, not a focal point.

const fissure = "M 720,12 C 716,90 724,180 718,260";

// Nested dome arcs, outermost (lowest, widest) to innermost (highest,
// narrowest) — reads as the folded surface of a brain in silhouette.
const domeArcs = [
  { d: "M 200,220 A 700,230 0 0 1 1240,220", tip: { l: { x: 200, y: 220 }, r: { x: 1240, y: 220 } } },
  { d: "M 250,175 A 650,200 0 0 1 1190,175", tip: { l: { x: 250, y: 175 }, r: { x: 1190, y: 175 } } },
  { d: "M 300,135 A 600,170 0 0 1 1140,135", tip: { l: { x: 300, y: 135 }, r: { x: 1140, y: 135 } } },
  { d: "M 350,100 A 550,145 0 0 1 1090,100", tip: { l: { x: 350, y: 100 }, r: { x: 1090, y: 100 } } },
  { d: "M 400,70 A 500,120 0 0 1 1040,70", tip: { l: { x: 400, y: 70 }, r: { x: 1040, y: 70 } } },
];

// Root clusters trailing down from the brain into the lower corners.
const rootClusters = [
  {
    id: "bl",
    trunk: "M -20,860 C 60,840 90,780 140,740",
    branches: [
      "M 60,840 C 40,790 20,760 10,710",
      "M 90,780 C 130,730 110,690 150,650",
      "M 140,740 C 190,725 210,750 250,740",
    ],
    tips: [
      { x: 140, y: 740 },
      { x: 10, y: 710 },
      { x: 150, y: 650 },
      { x: 250, y: 740 },
    ],
  },
  {
    id: "br",
    trunk: "M 1460,840 C 1380,820 1350,760 1300,720",
    branches: [
      "M 1380,820 C 1400,770 1420,740 1430,690",
      "M 1350,760 C 1310,710 1330,670 1290,630",
      "M 1300,720 C 1250,705 1230,730 1190,720",
    ],
    tips: [
      { x: 1300, y: 720 },
      { x: 1430, y: 690 },
      { x: 1290, y: 630 },
      { x: 1190, y: 720 },
    ],
  },
  {
    id: "bcl",
    trunk: "M 500,920 C 520,860 480,820 510,770",
    branches: [
      "M 520,860 C 570,845 590,870 630,855",
      "M 480,820 C 440,805 415,825 375,810",
    ],
    tips: [
      { x: 510, y: 770 },
      { x: 630, y: 855 },
      { x: 375, y: 810 },
    ],
  },
  {
    id: "bcr",
    trunk: "M 940,920 C 920,860 960,820 930,770",
    branches: [
      "M 920,860 C 870,845 850,870 810,855",
      "M 960,820 C 1000,805 1025,825 1065,810",
    ],
    tips: [
      { x: 930, y: 770 },
      { x: 810, y: 855 },
      { x: 1065, y: 810 },
    ],
  },
];

// Long arcs linking the lower root clusters — also the paths some of the
// travelling light dots follow.
const connectors = [
  { id: "conn-bottom-left", d: "M 250,740 C 350,760 420,750 510,770" },
  { id: "conn-bottom-right", d: "M 930,770 C 1020,760 1100,740 1190,720" },
];

const lights = [
  { path: "dome-1", duration: 19 },
  { path: "dome-3", duration: 22 },
  { path: "conn-bottom-left", duration: 18 },
  { path: "conn-bottom-right", duration: 21 },
];

export function HeroNetwork() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 1440 900"
      preserveAspectRatio="xMidYMid slice"
      className="pointer-events-none absolute inset-0 h-full w-full text-ink"
    >
      <defs>
        <radialGradient id="hero-light-glow">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.9" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
        </radialGradient>
      </defs>

      <path
        d={fissure}
        stroke="currentColor"
        strokeWidth="1"
        fill="none"
        className="hero-root-line"
      />

      {domeArcs.map((arc, i) => (
        <g key={i}>
          <path
            id={`dome-${i}`}
            d={arc.d}
            stroke="currentColor"
            strokeWidth="0.75"
            fill="none"
            className="hero-root-line"
            style={{ animationDelay: `${i * 0.6}s` }}
          />
          <circle
            cx={arc.tip.l.x}
            cy={arc.tip.l.y}
            r="2"
            fill="currentColor"
            className="hero-root-node"
            style={{ animationDelay: `${i * 0.5}s` }}
          />
          <circle
            cx={arc.tip.r.x}
            cy={arc.tip.r.y}
            r="2"
            fill="currentColor"
            className="hero-root-node"
            style={{ animationDelay: `${i * 0.5 + 0.3}s` }}
          />
        </g>
      ))}

      {rootClusters.map((cluster) => (
        <g key={cluster.id}>
          <path
            d={cluster.trunk}
            stroke="currentColor"
            strokeWidth="1"
            fill="none"
            className="hero-root-line"
          />
          {cluster.branches.map((branch, bi) => (
            <path
              key={bi}
              d={branch}
              stroke="currentColor"
              strokeWidth="0.75"
              fill="none"
              className="hero-root-line"
              style={{ animationDelay: `${bi * 0.9 + 0.5}s` }}
            />
          ))}
          {cluster.tips.map((tip, ti) => (
            <circle
              key={ti}
              cx={tip.x}
              cy={tip.y}
              r="2"
              fill="currentColor"
              className="hero-root-node"
              style={{ animationDelay: `${ti * 0.7}s` }}
            />
          ))}
        </g>
      ))}

      {connectors.map((connector) => (
        <path
          key={connector.id}
          id={connector.id}
          d={connector.d}
          stroke="currentColor"
          strokeWidth="0.75"
          fill="none"
          className="hero-root-line"
        />
      ))}

      {lights.map((light, i) => (
        <g key={i} className="hero-light text-accent">
          <circle r="7" fill="url(#hero-light-glow)" />
          <circle r="1.4" fill="currentColor" />
          <animateMotion
            dur={`${light.duration}s`}
            begin={`${i * 3}s`}
            repeatCount="indefinite"
          >
            <mpath href={`#${light.path}`} />
          </animateMotion>
        </g>
      ))}
    </svg>
  );
}
