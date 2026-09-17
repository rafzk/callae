// Barely-there root/dendrite clusters growing in from each corner — reads
// as neural roots more than a geometric mesh, and stays out of the way of
// the headline in the middle. Opacity is intentionally very low; this is
// atmosphere, not a focal point.
const clusters = [
  {
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
];

export function HeroNetwork() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 1440 900"
      preserveAspectRatio="xMidYMid slice"
      className="pointer-events-none absolute inset-0 h-full w-full text-ink"
    >
      {clusters.map((cluster, ci) => (
        <g key={ci}>
          <path
            d={cluster.trunk}
            stroke="currentColor"
            strokeWidth="1"
            fill="none"
            className="hero-root-line"
            style={{ animationDelay: `${ci * 1.4}s` }}
          />
          {cluster.branches.map((branch, bi) => (
            <path
              key={bi}
              d={branch}
              stroke="currentColor"
              strokeWidth="0.75"
              fill="none"
              className="hero-root-line"
              style={{ animationDelay: `${ci * 1.4 + bi * 0.9 + 0.5}s` }}
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
              style={{ animationDelay: `${ci * 1.4 + ti * 0.7}s` }}
            />
          ))}
        </g>
      ))}
    </svg>
  );
}
