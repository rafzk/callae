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
  linkedinUrl: "https://www.linkedin.com/company/136994117",
  // Web3Forms (https://web3forms.com) access key. Leave empty until you've
  // created one — the contact form detects this and tells visitors honestly
  // that online submission isn't connected yet, instead of pretending to
  // send their message. See README for setup steps.
  web3FormsAccessKey: "",
} as const;

// Root-prefixed so these still resolve correctly from pages other than "/"
// (e.g. the legal pages) — same-document fragment navigation when already
// on "/", a normal navigation-then-scroll from anywhere else.
export const navLinks = [
  { label: "Advisory", href: "/#advisory" },
  { label: "Delivery", href: "/#delivery" },
  { label: "Labs", href: "/#labs" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
] as const;

export type LegalPage = {
  title: string;
  href: string;
  // One line describing the page, used on the sitemap.
  description: string;
};

export const legalPages: LegalPage[] = [
  {
    title: "Cookie Policy",
    href: "/legal/cookies",
    description: "What cookies this site does, and doesn't, use.",
  },
  {
    title: "GDPR",
    href: "/legal/gdpr",
    description: "Your rights under the GDPR and how to exercise them.",
  },
  {
    title: "Privacy Statement",
    href: "/legal/privacy",
    description:
      "What personal data we collect, how we use it, and the choices you have.",
  },
  {
    title: "Site Terms",
    href: "/legal/terms",
    description: "The terms that govern use of this website.",
  },
  {
    title: "Sitemap",
    href: "/legal/sitemap",
    description: "Every page on this site, in one place.",
  },
];

// CALLAE trades as a sole proprietorship — there is no separate registered
// company. Fill in taxId before launch; everything else here is accurate.
export const legalConfig = {
  entityName: "Rafael Cardoso",
  tradingAs: "CALLAE",
  country: "Portugal",
  taxId: "[Add NIF before launch]",
  supervisoryAuthority: {
    name: "Comissão Nacional de Proteção de Dados (CNPD)",
    url: "https://www.cnpd.pt",
  },
} as const;

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
      "Independent, senior-level advice on governance, risk and platform direction, for organisations that need clear thinking before they commit resources.",
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
      "ServiceNow delivery, from workflow design to integration, built to be maintained by your team, not just handed over.",
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
      "Every organisation carries its own history, constraints and priorities. We start by listening to the people who use the systems, not just the ones who commission them.",
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
      "Delivery is hands-on and senior throughout. Solutions are built to be maintainable: clear, documented and no more complex than the problem requires.",
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
  ],
  bio: "Rafael founded CALLAE to bring senior, hands-on expertise to governance and ServiceNow engagements from day one. His background spans enterprise programmes, technical leadership, solution architecture and implementation, with a particular focus on governance, risk and compliance on the ServiceNow platform.",
};

export type ClientLogo = {
  name: string;
  // Optional: a real logo file under public/logos/. Until one's provided,
  // the name renders as a plain text wordmark instead — never a
  // placeholder image or a guessed/scraped logo.
  logoSrc?: string;
};

// Names CALLAE wants associated with it in this "trusted by" strip — not
// necessarily clients or formal partners. Never add a placeholder or
// invented name here — the component that reads this renders nothing
// while it's empty.
export const clientLogos: ClientLogo[] = [
  { name: "ServiceNow", logoSrc: "/logos/servicenow.svg" },
];

export type Testimonial = {
  quote: string;
  name: string;
  // Job title if given; falls back to just the company when it isn't, so
  // the site never invents a title that wasn't actually provided.
  role: string;
};

// Real client quotes only, given with permission. Never invent a quote, a
// name or a role.
export const testimonials: Testimonial[] = [
  {
    quote:
      "Rafael brought a rare combination of hands-on technical skill and genuine business judgement. Our platform is more coherent today because of the foundation he insisted on.",
    name: "Axel",
    role: "LambWeston",
  },
];

export type Recognition = {
  name: string;
  description: string;
};

// Real, currently-held recognitions only — add to this list as new ones are
// actually earned (e.g. a future ServiceNow partner tier). Never add a
// badge here that isn't true yet.
export const recognitions: Recognition[] = [
  {
    name: "ServiceNow MVP",
    description:
      "Multi-year Most Valuable Professional, ServiceNow's recognition for community contribution and platform expertise.",
  },
];

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
    "We don't sell AI products. We help organisations put those foundations in place, so that when they do adopt AI, on their own terms and timeline, it's built on something solid.",
  ],
};

export const contactCopy = {
  heading: "What are you building next?",
  body: "Whether it's a governance programme, a platform challenge or an early-stage idea, we're glad to talk it through: no obligation, no sales process.",
};
