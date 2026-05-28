export type ServicePageContent = {
  slug: string;
  title: string;
  navLabel: string;
  metaTitle: string;
  description: string;
  h1: string;
  intro: string;
  primaryAction: string;
  sections: {
    title: string;
    body: string;
    bullets: string[];
  }[];
  outcomes: string[];
};

export type NoteContent = {
  slug: string;
  title: string;
  metaTitle: string;
  description: string;
  date: string;
  intro: string;
  sections: {
    title: string;
    body: string[];
  }[];
};

export const servicePages: ServicePageContent[] = [
  {
    slug: "website-systems",
    title: "Website Systems",
    navLabel: "Website Systems",
    metaTitle: "Website Systems for Small Businesses",
    description:
      "Small business website systems from JAMARQ Digital: service pages, forms, hosting, DNS, analytics, admin workflows, and maintainable launch support.",
    h1: "Website systems for businesses that need clarity, not clutter.",
    intro:
      "A useful website is more than a design file. It has a clear offer, stable hosting, working forms, analytics, search-friendly structure, and a handoff that makes sense after launch.",
    primaryAction: "Ask about a website system",
    sections: [
      {
        title: "Public pages that explain the business quickly",
        body:
          "Visitors should understand what you do, where you work, what happens next, and how to contact you without decoding your internal process.",
        bullets: [
          "Homepage and service-page structure",
          "Mobile-first contact paths",
          "Clear navigation and calls to action",
          "Page-specific metadata and sitemap coverage",
        ],
      },
      {
        title: "Operational pieces that do not get ignored",
        body:
          "Forms, notifications, redirects, analytics, DNS, and admin workflows are planned with the site instead of treated as last-minute setup chores.",
        bullets: [
          "Contact and quote forms",
          "Email notification routing",
          "Analytics and conversion checks",
          "Documentation for ownership and support",
        ],
      },
      {
        title: "A launch path the owner can understand",
        body:
          "The goal is a system you can explain: where the domain lives, how the site deploys, who owns the accounts, and what to check when something changes.",
        bullets: [
          "Domain, DNS, and hosting notes",
          "Pre-launch checklist",
          "Post-launch validation",
          "Maintenance recommendations",
        ],
      },
    ],
    outcomes: [
      "A clearer first impression for customers.",
      "A better path from interest to contact.",
      "Less mystery around hosting, domains, and ownership.",
      "A site that is easier to maintain after launch.",
    ],
  },
  {
    slug: "dns-hosting-cleanup",
    title: "DNS, Domain, and Hosting Cleanup",
    navLabel: "DNS Cleanup",
    metaTitle: "DNS, Domain, and Hosting Cleanup",
    description:
      "Cleanup help for domains, DNS records, redirects, SSL, hosting, email records, Cloudflare, GoDaddy, Vercel, and cPanel website setups.",
    h1: "Domain, DNS, and hosting cleanup for websites with too many loose ends.",
    intro:
      "A website can look simple while the system behind it is tangled. JAMARQ helps identify what you own, what points where, and what should be simplified before the next launch or rebuild.",
    primaryAction: "Untangle a setup",
    sections: [
      {
        title: "Account and ownership review",
        body:
          "Cleanup starts by separating the domain, DNS, hosting, email, analytics, and deployment responsibilities so the business knows what each account controls.",
        bullets: [
          "Domain registrar review",
          "DNS provider review",
          "Hosting and deployment inventory",
          "Owner-access and handoff notes",
        ],
      },
      {
        title: "Records, redirects, and SSL",
        body:
          "Small DNS mistakes can break email, redirects, SSL, or launch timing. The cleanup path documents the current state before changing anything.",
        bullets: [
          "A, CNAME, MX, TXT, and verification records",
          "Redirect and canonical URL behavior",
          "SSL and HTTPS checks",
          "Email sender authentication notes",
        ],
      },
      {
        title: "A cleaner launch surface",
        body:
          "When the setup is understood, the next launch becomes less fragile. The result is not more tooling. It is clearer ownership and fewer hidden dependencies.",
        bullets: [
          "Cloudflare, GoDaddy, Vercel, and cPanel coordination",
          "Environment and deployment notes",
          "Rollback and recovery reminders",
          "Plain-language documentation",
        ],
      },
    ],
    outcomes: [
      "A clearer map of domains, hosting, DNS, and email.",
      "Fewer surprise failures during launch.",
      "Better documentation for future vendors or staff.",
      "Safer decisions before rebuilding or migrating.",
    ],
  },
  {
    slug: "maintenance",
    title: "Maintenance and Support",
    navLabel: "Maintenance",
    metaTitle: "Website Maintenance and Web Systems Support",
    description:
      "Ongoing website maintenance, support, dependency updates, analytics checks, small fixes, and practical guidance from JAMARQ Digital.",
    h1: "Maintenance for websites that should keep working after launch.",
    intro:
      "A launch is not the finish line for a business website. JAMARQ supports the practical work that keeps pages accurate, forms working, dependencies current, and owners informed.",
    primaryAction: "Ask about support",
    sections: [
      {
        title: "Routine care",
        body:
          "Maintenance covers the small recurring checks that keep a site from becoming a mystery again six months after launch.",
        bullets: [
          "Dependency and security updates",
          "Form and notification checks",
          "Analytics and search visibility review",
          "Performance and accessibility spot checks",
        ],
      },
      {
        title: "Small improvements",
        body:
          "Not every change needs to become a new project. The right support path makes room for copy edits, page updates, workflow tweaks, and measured improvements.",
        bullets: [
          "Content and service updates",
          "New page or section additions",
          "CTA and navigation refinement",
          "Minor integration adjustments",
        ],
      },
      {
        title: "Practical guidance",
        body:
          "Support also means helping the owner understand what changed, what matters, and when a bigger rebuild or migration is actually justified.",
        bullets: [
          "Quarterly review notes",
          "Launch and recovery documentation",
          "Vendor and account guidance",
          "Plain-language recommendations",
        ],
      },
    ],
    outcomes: [
      "A site that does not quietly decay.",
      "A clear support path for small changes.",
      "Better confidence in forms, pages, and hosting.",
      "Fewer emergency fixes caused by ignored maintenance.",
    ],
  },
];

export const notes: NoteContent[] = [
  {
    slug: "what-small-businesses-should-own-before-launching-a-website",
    title: "What Small Businesses Should Own Before Launching a Website",
    metaTitle: "What Small Businesses Should Own Before Launching a Website",
    description:
      "A plain-language checklist for small businesses before launching a website: domain, DNS, hosting, analytics, email, content, and access ownership.",
    date: "2026-05-28",
    intro:
      "A website launch is easier to maintain when ownership is clear before the site goes live. The most expensive confusion usually starts with accounts nobody can explain later.",
    sections: [
      {
        title: "Own the domain account",
        body: [
          "The domain is the address everything else depends on. The business should know where it is registered, who can log in, when it renews, and what payment method keeps it active.",
          "If an old vendor, employee, or personal email owns the domain, fix that before launch. A beautiful site does not help if the business cannot control the address.",
        ],
      },
      {
        title: "Understand where DNS lives",
        body: [
          "DNS records tell traffic where to go. They affect the website, email, verification records, and sometimes third-party services.",
          "The owner does not need to memorize every record, but there should be a plain-language note explaining who manages DNS and what each important record supports.",
        ],
      },
      {
        title: "Keep hosting and email separate in your head",
        body: [
          "Hosting runs the website. Email runs communication. They can live under related accounts, but they are not the same thing.",
          "Before launch, make sure the site can move or deploy without accidentally breaking business email.",
        ],
      },
      {
        title: "Document forms, analytics, and access",
        body: [
          "Contact forms need a destination inbox, spam protection, and a test path. Analytics need access that belongs to the business, not just the builder.",
          "A short ownership note is enough: domain, DNS, hosting, analytics, email sender, form destination, repository, and support contact.",
        ],
      },
    ],
  },
  {
    slug: "plain-language-guide-to-dns-records",
    title: "A Plain-Language Guide to DNS Records",
    metaTitle: "A Plain-Language Guide to DNS Records",
    description:
      "A practical explanation of common DNS records for small business websites: A, CNAME, MX, TXT, SPF, DKIM, DMARC, redirects, and verification records.",
    date: "2026-05-28",
    intro:
      "DNS looks more intimidating than it is. Most small business website setups depend on a small set of records that decide where the site loads, how email works, and which services are allowed to verify the domain.",
    sections: [
      {
        title: "A and CNAME records point web traffic",
        body: [
          "An A record usually points a domain or subdomain to an IP address. A CNAME points one name to another name.",
          "For a website, these records decide whether visitors reach the right hosting provider. A bad record can make the site vanish even when the code is fine.",
        ],
      },
      {
        title: "MX and TXT records protect email",
        body: [
          "MX records tell the internet which service receives email for the domain. TXT records often hold verification and email-authentication values.",
          "SPF, DKIM, and DMARC are TXT-based email protections that help prevent spoofing and improve trust when the business sends mail.",
        ],
      },
      {
        title: "Verification records prove ownership",
        body: [
          "Google Search Console, email providers, analytics tools, and hosting platforms may ask for verification records.",
          "These records should be documented. Random verification records with no notes become hard to evaluate later.",
        ],
      },
      {
        title: "Redirects are not the same as DNS",
        body: [
          "DNS gets visitors to a destination. Redirects tell browsers that one URL should move to another URL.",
          "A clean launch usually needs both: correct DNS and a redirect plan for old URLs, alternate domains, and the preferred canonical version of the site.",
        ],
      },
    ],
  },
  {
    slug: "how-to-tell-if-your-website-setup-is-fragile",
    title: "How to Tell If Your Website Setup Is Fragile",
    metaTitle: "How to Tell If Your Website Setup Is Fragile",
    description:
      "Signs a small business website setup is fragile, including unclear domain ownership, brittle forms, slow pages, mystery hosting, and undocumented redirects.",
    date: "2026-05-28",
    intro:
      "Fragile website setups usually work until they suddenly do not. The warning signs are visible before the outage, migration panic, or broken form makes the problem obvious.",
    sections: [
      {
        title: "Nobody can explain the accounts",
        body: [
          "If the team cannot say where the domain, DNS, hosting, email, analytics, and form submissions live, the setup is fragile.",
          "The fix is not necessarily a rebuild. Sometimes the first step is an inventory and a cleanup note.",
        ],
      },
      {
        title: "Forms work only when nobody touches them",
        body: [
          "A contact form should have a known destination, validation, spam protection, and a test path.",
          "If changing copy, email addresses, or hosting could silently break lead delivery, the form is too brittle for a business-critical site.",
        ],
      },
      {
        title: "The site is slow and hard to update",
        body: [
          "Slow pages, oversized media, mystery plugins, vendor lock-in, and unclear update paths are practical warning signs.",
          "A site can look modern and still be fragile if nobody can safely update it or explain how it deploys.",
        ],
      },
      {
        title: "There is no rollback story",
        body: [
          "Every important site should have a basic answer to: what happens if a deploy goes wrong, a form breaks, or a domain record changes?",
          "The answer can be simple. The problem is having no answer at all.",
        ],
      },
    ],
  },
];

export function getServicePage(slug: string) {
  return servicePages.find((page) => page.slug === slug);
}

export function getNote(slug: string) {
  return notes.find((note) => note.slug === slug);
}
