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
    micro: "A complete rebuild of a storage company's digital platform with a custom unit inventory system and automated quote workflow. Clearer information, faster performance, and an owner-friendly admin panel for managing units and customer requests.",
    hoverShort: "Custom-built site with storage unit inventory, quote workflow, and simple owner-managed admin tools.",
    hoverUltraShort: "Custom site + inventory + quote workflow.",
    slug: "mms",
    category: "Web Development"
  }
};

export type CaseStudyKey = keyof typeof caseStudySummaries;
