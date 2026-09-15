export const siteConfig = {
  name: "CALLAE",
  domain: "callae.eu",
  url: "https://callae.eu",
  tagline: "We build the foundations for what comes next.",
  supportingLine: "Govern with confidence. Transform with purpose.",
  description:
    "CALLAE is a consultancy specialising in governance, ServiceNow and digital transformation. We help organisations strengthen governance, improve digital operations and build the foundations for responsible AI adoption.",
  // Contact details are intentionally configurable in one place rather than
  // hard-coded across the site. Update before launch.
  email: "hello@callae.eu",
  linkedinUrl: "",
  // Web3Forms (https://web3forms.com) access key. Leave empty until you've
  // created one — the contact form detects this and tells visitors honestly
  // that online submission isn't connected yet, instead of pretending to
  // send their message. See README for setup steps.
  web3FormsAccessKey: "",
} as const;

export type HeroStat = {
  value: string;
  countTo?: number;
  prefix?: string;
  suffix?: string;
  label: string;
};

export const heroStats: HeroStat[] = [
  { value: "10+", countTo: 10, suffix: "+", label: "Years in IT" },
  { value: "2015", countTo: 2015, label: "ServiceNow since" },
  { value: "2019", countTo: 2019, label: "IRM & GRC specialism since" },
  { value: "MVP", label: "Multi-year ServiceNow MVP" },
];

export const navLinks = [
  { label: "Advisory", href: "#advisory" },
  { label: "Delivery", href: "#delivery" },
  { label: "Labs", href: "#labs" },
  { label: "About", href: "#about" },
] as const;

export type Pillar = {
  id: string;
  name: string;
  kicker: string;
  description: string;
  examples: string[];
};

export const pillars: Pillar[] = [
  {
    id: "advisory",
    name: "Advisory",
    kicker: "01",
    description:
      "Independent, senior-level advice on governance, risk and platform direction — for organisations that need clear thinking before they commit resources.",
    examples: [
      "Governance, risk and compliance strategy and target operating models",
      "ServiceNow platform direction and roadmap prioritisation",
      "Solution architecture reviews and technical due diligence",
      "Interim technical leadership for platform and transformation programmes",
    ],
  },
  {
    id: "delivery",
    name: "Delivery",
    kicker: "02",
    description:
      "ServiceNow delivery, from workflow design to integration — built to be maintained by your team, not just handed over.",
    examples: [
      "Integrated Risk Management implementation and configuration",
      "Workflow design and process automation across GRC and ITSM",
      "Integrations between ServiceNow and surrounding enterprise systems",
      "Platform health checks, technical debt reduction and upgrade readiness",
    ],
  },
  {
    id: "labs",
    name: "Labs",
    kicker: "03",
    description:
      "Focused, time-boxed experiments that test where AI and emerging technology can responsibly earn a place in your operations.",
    examples: [
      "Small, scoped prototypes tied to a specific business problem",
      "Evaluation of AI-assisted workflows against real governance requirements",
      "Data and process readiness assessments ahead of automation",
    ],
  },
];

export type ApproachStep = {
  step: string;
  title: string;
  description: string;
};

export const approachSteps: ApproachStep[] = [
  {
    step: "01",
    title: "Understand the context",
    description:
      "Every organisation carries its own history, constraints and priorities. We start by listening — to the people who use the systems, not just the ones who commission them.",
  },
  {
    step: "02",
    title: "Design the foundations",
    description:
      "Governance models, data structures and process design come before configuration. Decisions made here are the hardest to unpick later, so we take the time to get them right.",
  },
  {
    step: "03",
    title: "Build with purpose",
    description:
      "Delivery is hands-on and senior throughout. Solutions are built to be maintainable — clear, documented and no more complex than the problem requires.",
  },
  {
    step: "04",
    title: "Enable the team",
    description:
      "A programme should leave an organisation more capable than it found it. We transfer knowledge as we go, so your team can own what we build together.",
  },
];

export const founder = {
  name: "Rafael Cardoso",
  facts: [
    "10+ years working in IT",
    "Working with ServiceNow since 2015",
    "Specialising in Integrated Risk Management and GRC since 2019",
    "Multi-year ServiceNow MVP",
  ],
  bio: "Rafael founded CALLAE to bring senior, hands-on expertise to governance and ServiceNow engagements from day one. His background spans enterprise programmes, technical leadership, solution architecture and hands-on implementation — with a particular focus on governance, risk and compliance on the ServiceNow platform.",
};

export type ExperienceItem = {
  title: string;
  description: string;
};

export const experienceItems: ExperienceItem[] = [
  {
    title: "Enterprise operational risk and compliance transformation",
    description:
      "Leading the design and delivery of operational risk and compliance capabilities for large, regulated organisations, from target operating model through to platform configuration.",
  },
  {
    title: "Entity modelling and governance workflows",
    description:
      "Designing entity and hierarchy models and the governance workflows built on top of them, to give risk and compliance processes a structure they can scale with.",
  },
  {
    title: "Customer service and portal modernisation",
    description:
      "Modernising customer service platforms and self-service portals, improving how employees and customers interact with underlying systems and processes.",
  },
];

export const perspective = {
  heading: "Built for governance. Ready for AI.",
  body: [
    "AI adoption is often discussed as a technology decision. In practice, it's a governance decision first. Systems that automate decisions or surface recommendations are only as dependable as the accountability, data and processes underneath them.",
    "That means clear ownership of decisions, data that's structured and trustworthy enough to act on, and processes designed with enough rigour to support automation rather than just tolerate it.",
    "We don't sell AI products. We help organisations put those foundations in place, so that when they do adopt AI — on their own terms and timeline — it's built on something solid.",
  ],
};

export const contactCopy = {
  heading: "What are you building next?",
  body: "Whether it's a governance programme, a platform challenge or an early-stage idea, we're glad to talk it through — no obligation, no sales process.",
};
