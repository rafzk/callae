// A faint neural network across the hero's periphery: root/dendrite
// clusters growing in from the corners and upper/lower edges, linked by
// long connector arcs that a soft ball of light travels along. Everything
// stays out of the middle band where the headline sits, and opacity is
// intentionally very low — this is atmosphere, not a focal point.
const clusters = [
  {
    id: "tl",
    trunk: "M -20,40 C 60,60 90,120 140,160",
    branches: [
      "M 60,60 C 40,110 20,140 10,190",
      "M 90,120 C 130,170 110,210 150,250",
      "M 140,160 C 190,175 210,150 250,160",
    ],
    tips: [
      { x: 140, y: 160 },
      { x: 10, y: 190 },
      { x: 150, y: 250 },
      { x: 250, y: 160 },
    ],
  },
  {
    id: "tr",
    trunk: "M 1460,60 C 1380,80 1350,140 1300,180",
    branches: [
      "M 1380,80 C 1400,130 1420,160 1430,210",
      "M 1350,140 C 1310,190 1330,230 1290,270",
      "M 1300,180 C 1250,195 1230,170 1190,180",
    ],
    tips: [
      { x: 1300, y: 180 },
      { x: 1430, y: 210 },
      { x: 1290, y: 270 },
      { x: 1190, y: 180 },
    ],
  },
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
    id: "tcl",
    trunk: "M 500,-20 C 520,40 480,80 510,130",
    branches: [
      "M 520,40 C 570,55 590,30 630,45",
      "M 480,80 C 440,95 415,75 375,90",
    ],
    tips: [
      { x: 510, y: 130 },
      { x: 630, y: 45 },
      { x: 375, y: 90 },
    ],
  },
  {
    id: "tcr",
    trunk: "M 940,-20 C 920,40 960,80 930,130",
    branches: [
      "M 920,40 C 870,55 850,30 810,45",
      "M 960,80 C 1000,95 1025,75 1065,90",
    ],
    tips: [
      { x: 930, y: 130 },
      { x: 810, y: 45 },
      { x: 1065, y: 90 },
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

// Long arcs linking neighbouring clusters into one loose network — also
// the paths the travelling light dots follow.
const connectors = [
  { id: "conn-top-left", d: "M 250,160 C 350,140 420,150 510,130" },
  { id: "conn-top-right", d: "M 930,130 C 1020,150 1100,160 1190,180" },
  { id: "conn-bottom-left", d: "M 250,740 C 350,760 420,750 510,770" },
  { id: "conn-bottom-right", d: "M 930,770 C 1020,760 1100,740 1190,720" },
];

const lights = [
  { path: "conn-top-left", duration: 16, begin: 0 },
  { path: "conn-top-right", duration: 19, begin: 4 },
  { path: "conn-bottom-left", duration: 18, begin: 8 },
  { path: "conn-bottom-right", duration: 21, begin: 2 },
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

      {clusters.map((cluster) => (
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
            begin={`${light.begin}s`}
            repeatCount="indefinite"
          >
            <mpath href={`#${light.path}`} />
          </animateMotion>
        </g>
      ))}
    </svg>
  );
}
