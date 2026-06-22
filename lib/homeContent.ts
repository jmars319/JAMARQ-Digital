type ProofCard = {
  label: string;
  value: string;
  copy: string;
};

type ReasonCard = {
  title: string;
  copy: string;
};

type ProcessStep = {
  title: string;
  copy: string;
};

// Proof card surface
export const recentProof: ProofCard[] = [
  {
    label: "Midway Music Hall",
    value: "First reserved seating request in 2 days",
    copy: "Custom venue site, seating workflow, and admin system built around live operations."
  },
  {
    label: "Thunder Road Bar & Grill",
    value: "Load times cut to under 1.5 seconds",
    copy: "Restaurant rebuild with clearer menus, better mobile performance, and simpler weekly updates."
  },
  {
    label: "Midway Mobile Storage",
    value: "First online quote in 16 days",
    copy: "Full rebuild with inventory controls, quote workflow, and owner-friendly admin tools."
  }
];

// Service track contract
export const whatWeDo = [
  {
    title: "Custom websites",
    copy: "Business websites with clear service pages, strong mobile performance, SEO-ready structure, and calls to action visitors can understand quickly."
  },
  {
    title: "Website rebuilds",
    copy: "Replacing slow, outdated, hard-to-update, or vendor-locked sites with cleaner systems that owners can actually run."
  },
  {
    title: "Web systems",
    copy: "Quote forms, booking paths, admin tools, content workflows, and integrations built around how the business operates."
  }
];

// Task routing surface
export const taskRoutes = [
  {
    task: "I need a better business website",
    fit: "JAMARQ plans the pages, copy structure, mobile experience, SEO basics, and conversion paths together.",
    action: "Start with a website build"
  },
  {
    task: "My current site is slow, stale, or hard to update",
    fit: "JAMARQ audits the current setup, keeps what is useful, and rebuilds the parts that are blocking performance or trust.",
    action: "Start with a rebuild"
  },
  {
    task: "The site needs forms, admin tools, or workflows",
    fit: "JAMARQ treats the public site and the operational system as one project so the handoff is usable.",
    action: "Start with a web system"
  },
  {
    task: "I need custom software beyond a website",
    fit: "Tenra.dev is the software development division for internal tools, local-first apps, and controlled automation.",
    action: "Check Tenra instead",
    href: "https://tenra.dev"
  }
];

// Audience fit surface
export const whoWeWorkWith = [
  {
    title: "Independent businesses",
    points: [
      "Need customers to understand services quickly",
      "Want a site that loads fast and earns trust",
      "Prefer direct communication and clear ownership"
    ]
  },
  {
    title: "Established teams",
    points: [
      "Need structured rebuilds or workflow-aware web systems",
      "Have real content, admin, or integration requirements",
      "Need maintainable code, documentation, and launch support"
    ]
  }
];

// Positioning rationale surface
export const whyJamarq: ReasonCard[] = [
  {
    title: "Built to stay manageable",
    copy: "You should understand the site, the hosting, the content model, and the support path after launch."
  },
  {
    title: "Complexity is used carefully",
    copy: "If a simpler stack will do the job well, that is usually the better choice."
  },
  {
    title: "Rebuilds are treated like system work",
    copy: "Slow or broken sites usually point to structure, content, workflow, or ownership problems, not just design issues."
  },
  {
    title: "Direct communication",
    copy: "You talk directly to the person doing the work, so scope, tradeoffs, and updates stay clear."
  },
  {
    title: "Process without theater",
    copy: "Enough structure to reduce risk, without unnecessary ceremony."
  },
  {
    title: "Ownership stays clear",
    copy: "Code, hosting, content, and responsibilities are defined plainly before handoff."
  }
];

// Pricing signal surface
export const pricingTiers = [
  {
    title: "Foundational Work",
    description: "Simple builds and smaller rebuilds",
    price: "$2,500 – $5,000"
  },
  {
    title: "Structured Builds",
    description: "Multi-page sites and moderate complexity",
    price: "$5,000 – $12,000"
  },
  {
    title: "Rebuilds & Systems",
    description: "Complex rebuilds, admin systems, migrations",
    price: "$10,000 – $25,000+"
  },
  {
    title: "Ongoing Work",
    description: "Maintenance and long-term support",
    price: "Starts at $250/mo"
  }
];

// Process phase contract
export const processSteps: ProcessStep[] = [
  {
    title: "Understand the problem",
    copy: "Review the current setup, requirements, and constraints before promising a solution."
  },
  {
    title: "Define the scope",
    copy: "Set the deliverables, timeline, and responsibilities clearly before build work starts."
  },
  {
    title: "Build and verify",
    copy: "Ship the work carefully and test the details that affect reliability, performance, and usability."
  },
  {
    title: "Launch",
    copy: "Move the site live in a controlled way with the right checks in place."
  },
  {
    title: "Support if needed",
    copy: "Stay available for follow-up fixes, maintenance, or longer-term support."
  }
];

// Homepage metadata contract
export const structuredData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "JAMARQ Digital",
  url: "https://jamarq.digital/",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Winston-Salem",
    addressRegion: "NC",
    addressCountry: "US"
  },
  areaServed: [
    {
      "@type": "City",
      name: "Winston-Salem"
    },
    {
      "@type": "State",
      name: "North Carolina"
    },
    {
      "@type": "Country",
      name: "United States"
    }
  ],
  serviceType: [
    "Custom website development",
    "Website rebuilds",
    "Conversion-focused websites",
    "Web systems",
    "Website performance improvement"
  ]
};

export const breadcrumbStructuredData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://jamarq.digital/"
    }
  ]
};
