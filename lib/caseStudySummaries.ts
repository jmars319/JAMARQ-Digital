// Case Study Micro Summaries
// Used for preview cards and hover descriptions

export const caseStudySummaries = {
  trbg: {
    title: "Thunder Road Bar & Grill",
    micro: "A custom rebuild of a neighborhood restaurant's digital system. Fast, intentional React architecture with a clean menu experience and a simple admin workflow for weekly specials. Load times improved from 4–6 seconds to under 1.5 seconds.",
    hoverShort: "Custom-built website and admin system for a local bar & grill. Faster load times, clearer menus, and a 5-minute weekly update workflow.",
    hoverUltraShort: "Custom site + admin panel. Fast, clear, easy to update.",
    slug: "trbg",
    category: "Web Development"
  },
  mms: {
    title: "Midway Mobile Storage",
    micro: "A complete rebuild of a storage company's digital platform with a custom unit inventory system, automated quote workflow, and a 98/100 performance score. Built November 2025 with the first online quote 16 days later. Clearer information, blazing-fast load times, and an owner-friendly admin panel.",
    hoverShort: "Custom-built site with storage unit inventory, quote workflow, and 98/100 performance. First online quote within 16 days.",
    hoverUltraShort: "Custom site + inventory + quote workflow + elite performance + proven results.",
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
  }
};

export type CaseStudyKey = keyof typeof caseStudySummaries;

export const caseStudyDisplayOrder: CaseStudyKey[] = ["mmh", "trbg", "mms"];
