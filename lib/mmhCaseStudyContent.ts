export const mmhCaseStudyContent = {
  hero: {
    title: "Midway Music Hall",
    subtitle: "Custom Website and Seating System",
    summary: [
      "Midway Music Hall required a modern website that could support live event operations without relying on third-party ticketing platforms.",
      "JAMARQ rebuilt the site from the ground up, delivering a fast public-facing experience paired with a secure admin system for staff. The platform includes event scheduling, interactive seating layouts, reservation request handling, media management, and automated notifications, all deployed on shared hosting and validated under real use.",
      "The system replaces manual workflows with clear, auditable processes while preserving full ownership of code and data."
    ],
    stack: "Stack: React, PHP, MySQL, Tailwind, Cloudflare",
    launch: "Launch: December 2025"
  },
  projectOverview: {
    heading: "Project Overview",
    facts: [
      { label: "Client", value: "Midway Music Hall, Midway NC" },
      { label: "Project Type", value: "Full website rebuild and custom venue operations system" },
      { label: "Timeline", value: "November to December 2025" },
      { label: "Launch", value: "December 1, 2025" }
    ],
    paragraphs: [
      "Midway Music Hall needed a modern website that could support real event operations without relying on third-party ticketing platforms or recurring software fees. The goal was not just a visual redesign, but a dependable system that reflected how the venue actually runs shows, manages seating, and communicates with customers.",
      "JAMARQ delivered a fully custom platform combining a public-facing website with a secure admin workspace for staff. The system supports event scheduling, interactive seating layouts, reservation requests, media management, and automated notifications, all deployed on shared hosting and validated under live use."
    ]
  },
  challenge: {
    heading: "The Challenge",
    intro: "The venue’s previous website was informational only. As show volume increased, several operational gaps became clear:",
    bullets: [
      "No centralized event management",
      "No digital representation of reserved seating",
      "Manual handling of seat requests via phone and email",
      "No admin interface for staff",
      "No audit trail or request history",
      "Limited performance and accessibility safeguards"
    ],
    closing: "These constraints created unnecessary risk and overhead for staff and made it difficult for customers to understand availability before reaching out."
  },
  objectives: {
    heading: "Objectives",
    bullets: [
      "Create a clear, modern public website",
      "Centralize event scheduling and visibility",
      "Introduce an intuitive reserved seating request flow",
      "Prevent seat conflicts through enforceable logic",
      "Automate staff notifications",
      "Provide a secure admin interface for daily operations",
      "Optimize performance for shared hosting",
      "Establish a clean SEO and accessibility foundation",
      "Maintain full ownership of code and data"
    ]
  },
  approach: {
    heading: "Approach",
    paragraphs: [
      "The project was designed around real venue workflows rather than generic ticketing assumptions.",
      "The system mirrors how events are scheduled, how seating is actually managed, and how staff respond to requests. Every feature was built with shared-hosting constraints in mind, favoring reliability and clarity over unnecessary complexity.",
      "Operational safeguards such as seat holds, expiration logic, layout versioning, and audit logging were treated as core requirements, not add-ons."
    ]
  },
  solution: {
    heading: "The Solution",
    sections: [
      {
        title: "Public Website",
        items: [
          "React-based single-page application",
          "Mobile-first layout with accessible navigation",
          "Event listings with upcoming, archived, and venue-filtered views",
          "Event detail pages with optional interactive seating layouts",
          "Progressive enhancement with static fallbacks for bots and no-JavaScript clients"
        ]
      },
      {
        title: "Custom Seating System",
        items: [
          "Reusable seating layout templates",
          "Versioned layout snapshots per event",
          "Interactive seat selection with availability indicators",
          "Time-limited seat holds to prevent conflicts",
          "Automatic expiration and release of unconfirmed seats",
          "Admin approval, denial, and manual reservation tools"
        ]
      },
      {
        title: "Admin Platform",
        items: [
          "Secure staff login with idle and hard session timeouts",
          "Event creation and management tools",
          "Seating layout editor and version history",
          "Reservation request queue with conflict detection",
          "Media upload and management system",
          "Full audit logging of all admin actions"
        ]
      },
      {
        title: "Email Automation",
        items: [
          "Automated staff notifications for seat requests and submissions",
          "Production-only safeguards to prevent test spam",
          "Domain-authenticated delivery via SendGrid",
          "Reply-to support for direct staff responses"
        ]
      },
      {
        title: "Technical Stack",
        items: [
          "React 18 with Tailwind CSS",
          "PHP 8.1 backend with JSON APIs",
          "MySQL database with transactional reservation logic",
          "Cloudflare and Apache deployment on shared hosting"
        ]
      }
    ]
  },
  results: {
    heading: "Results",
    categories: [
      {
        title: "Live Validation",
        items: [
          "First live seat request processed on launch day",
          "Automated notifications delivered successfully",
          "Seat conflict prevention confirmed in production",
          "Admin workflows validated by staff usage"
        ]
      },
      {
        title: "Performance",
        items: [
          "Fast load times on shared hosting",
          "Stable layouts with no visual shifting",
          "Strong desktop and mobile performance",
          "Clean Lighthouse scores across key categories"
        ]
      },
      {
        title: "Reliability",
        items: [
          "No missed notifications",
          "Predictable seat handling under concurrency",
          "Graceful fallbacks for missing media or API downtime"
        ]
      }
    ]
  },
  keyTakeaways: {
    heading: "Key Takeaways",
    bullets: [
      "Custom systems can outperform generic platforms when aligned to real workflows",
      "Seating logic must reflect time, holds, and human approval",
      "Admin tooling reduces error more than automation alone",
      "Performance discipline matters even at small scale",
      "Ownership eliminates long-term platform risk"
    ]
  }
} as const;

export type MMHCaseStudyContent = typeof mmhCaseStudyContent;
