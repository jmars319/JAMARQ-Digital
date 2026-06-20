export const caseStudySummaries = {
  trbg: {
    title: "Thunder Road Bar & Grill",
    micro: "Custom rebuild of a neighborhood restaurant's site and admin system. Clearer menu structure, faster mobile performance, and a simpler weekly update workflow.",
    hoverShort: "Custom website and admin system for a local bar and grill. Clearer menus, faster load times, and a five-minute weekly update workflow.",
    hoverUltraShort: "Custom site + admin panel. Fast, clear, easy to update.",
    slug: "trbg",
    category: "Web Development"
  },
  mms: {
    title: "Midway Mobile Storage",
    micro: "Complete rebuild of a storage company's site with custom unit inventory, an online quote workflow, and owner-friendly admin tools. Built in November 2025, with the first online quote 16 days later.",
    hoverShort: "Custom site with unit inventory, quote workflow, and strong performance on shared hosting. First online quote within 16 days.",
    hoverUltraShort: "Custom site + inventory + quote workflow + strong performance.",
    slug: "mms",
    category: "Web Development"
  },
  mmh: {
    title: "Midway Music Hall",
    micro: "Custom event website and seating system built with React and PHP. Includes interactive seating, admin tools, and automated notifications. Launched December 2025.",
    hoverShort: "Midway Music Hall required a modern website that could support live event operations without relying on third-party ticketing platforms.",
    hoverUltraShort: "Custom Website, Seating System, and Admin Platform.",
    slug: "mmh",
    category: "Web Development"
  },
  mjr: {
    title: "Midway Junk Removal",
    micro: "Phone-first local service website for junk removal, demolition, and hauling across the Triad, with clear service coverage and lightweight contact intake.",
    hoverShort: "Static service site with plain service coverage, phone-first intake, and documented owner handoff for a local junk removal business.",
    hoverUltraShort: "Local service site + phone-first intake + owner handoff.",
    slug: "mjr",
    category: "Web Development"
  },
  surplus: {
    title: "Surplus Containers",
    micro: "Public inventory and contact site backed by private campaign and inventory operations, documented with confidential records omitted.",
    hoverShort: "Public container availability surface with contact intake, private operations behind authentication, and current Lighthouse proof.",
    hoverUltraShort: "Public inventory surface + private ops + current performance proof.",
    slug: "surplus",
    category: "Web Development"
  }
};

export type CaseStudyKey = keyof typeof caseStudySummaries;

export const caseStudyDisplayOrder: CaseStudyKey[] = ["mmh", "trbg", "mms", "mjr", "surplus"];
