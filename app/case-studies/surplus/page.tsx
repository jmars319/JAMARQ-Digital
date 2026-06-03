import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import { CaseStudyScreenshotTabs } from "@/components/CaseStudyScreenshotTabs";
import type { ScreenshotTab } from "@/components/CaseStudyScreenshotTabs";
import { ContactModalTrigger } from "@/components/contact/ContactModalTrigger";
import { Reveal } from "@/components/Reveal";
import { ScrollProgressBar } from "@/components/ScrollProgressBar";
import { webpScreenshot } from "@/lib/caseStudyImageAssets";
import { buildPageSpeedReportUrl } from "@/lib/pageSpeed";

const liveSiteUrl = "https://surpluscontainers.com";
const caseStudyUrl = "https://jamarq.digital/case-studies/surplus";
const ogImageUrl = "https://jamarq.digital/og.jpg";

const heroSummary = [
  "Surplus Containers needed a lean public inventory and contact surface that could run on shared hosting while supporting a private operational campaign workflow behind it.",
  "JAMARQ built a public React/PHP site with inventory preview controls, contact intake, crawler-safe SEO basics, and a separate authenticated admin workspace for campaigns and inventory operations.",
  "The public case study intentionally excludes campaign records, contact lists, private inventory rows, and admin screenshots; confidential workflow details are summarized only."
];

const projectFacts = [
  { label: "Business type", value: "Shipping container availability and sales" },
  { label: "Public surface", value: "Inventory preview, contact intake, legal pages, sitemap, robots" },
  { label: "Private surface", value: "Authenticated admin workflow omitted from public screenshots" },
  { label: "Stack", value: "React, Vite, PHP API, MySQL, SendGrid" }
];

const challengeBullets = [
  "The public site needed to communicate availability without exposing private customer or campaign data.",
  "The operator needed a predictable way to handle inventory-driven contact and campaign workflows on shared hosting.",
  "The deploy package needed to keep public files, admin files, backend routes, and production environment handling separate.",
  "SEO and crawler rules needed to index the public site while keeping admin and API surfaces out of public search."
];

const solutionBullets = [
  "Built separate public and admin React apps so the customer-facing route stays small and the operator tools stay authenticated.",
  "Added a public inventory preview with access-token-aware copy and a contact path for full inventory requests.",
  "Kept private campaign, contact, inventory, and delivery-tracking workflows out of public screenshots and case-study assets.",
  "Added cPanel deploy packaging, archive checks, branded error pages, sitemap, robots, and route verification.",
  "Kept server-side guardrails for campaign caps, kill switches, validation, and delivery tracking."
];

const outcomeBullets = [
  "The public site returns a fast, simple inventory and contact experience without a heavy CMS.",
  "The current live Lighthouse check measures 100 desktop performance and 96 mobile performance.",
  "The public proof can be shared without revealing contact lists, campaign recipients, or private row-level inventory data.",
  "The private admin workflow remains available for walkthroughs when confidentiality is covered."
];

const screenshotTabs: ScreenshotTab[] = [
  {
    id: "pagespeed",
    label: "PageSpeed results",
    description: "Current live Lighthouse/PageSpeed evidence for the production public site.",
    items: [
      webpScreenshot({
        id: "surplus-pagespeed-current",
        basePath: "/case-studies/surplus/PageSpeed/surplus-pagespeed-current",
        caption:
          "Current live Lighthouse/PageSpeed evidence captured June 3, 2026: 100 desktop performance, 96 mobile performance, and 100 accessibility, best-practices, and SEO scores.",
        alt: "Current Lighthouse score card for Surplus Containers",
        technicalNote:
          "Measured locally with Lighthouse against the live production URL. Scores can vary by network and runtime conditions."
      })
    ]
  },
  {
    id: "public",
    label: "Public views",
    description:
      "Public-only captures. Inventory rows are masked where needed so private operational details stay out of the case study.",
    items: [
      webpScreenshot({
        id: "surplus-public-current-homepage",
        basePath: "/case-studies/surplus/Public%20Views/surplus-public-current-homepage",
        caption:
          "Current public homepage with a direct inventory-and-contact positioning statement.",
        alt: "Current Surplus Containers homepage"
      }),
      webpScreenshot({
        id: "surplus-public-current-inventory-masked",
        basePath: "/case-studies/surplus/Public%20Views/surplus-public-current-inventory-masked",
        caption:
          "Current inventory preview area with row-level inventory details intentionally masked for confidentiality.",
        alt: "Masked Surplus Containers inventory preview"
      }),
      webpScreenshot({
        id: "surplus-public-current-contact",
        basePath: "/case-studies/surplus/Public%20Views/surplus-public-current-contact",
        caption:
          "Current contact form shown before submission; no customer inquiry records are displayed.",
        alt: "Current Surplus Containers contact form"
      })
    ]
  },
  {
    id: "mobile",
    label: "Mobile views",
    description: "Current mobile capture of the public surface.",
    items: [
      webpScreenshot({
        id: "surplus-public-current-homepage-mobile",
        basePath: "/case-studies/surplus/Mobile%20Views/surplus-public-current-homepage-mobile",
        caption: "Current mobile homepage capture with public-only content.",
        alt: "Current Surplus Containers mobile homepage"
      })
    ]
  }
];

export const metadata: Metadata = {
  title: "Surplus Containers Case Study",
  description: heroSummary[0],
  alternates: {
    canonical: caseStudyUrl
  },
  openGraph: {
    title: "Surplus Containers Case Study",
    description: heroSummary[0],
    url: caseStudyUrl,
    type: "article",
    images: [
      {
        url: ogImageUrl,
        width: 1200,
        height: 630,
        alt: "JAMARQ Digital"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Surplus Containers Case Study",
    description: heroSummary[0],
    images: [ogImageUrl],
    creator: "@jamarqdigital",
    site: "@jamarqdigital"
  }
};

export default function SurplusCaseStudyPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Surplus Containers Case Study",
    "description": heroSummary[0],
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": caseStudyUrl
    },
    "author": {
      "@type": "Person",
      "name": "Jason Marshall"
    },
    "publisher": {
      "@type": "Organization",
      "name": "JAMARQ Digital",
      "logo": {
        "@type": "ImageObject",
        "url": "https://jamarq.digital/brand/jamarq/mark.svg"
      }
    },
    "image": ogImageUrl,
    "datePublished": "2026-06-03",
    "dateModified": "2026-06-03"
  };

  const breadcrumbStructuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://jamarq.digital/" },
      { "@type": "ListItem", "position": 2, "name": "Case Studies", "item": "https://jamarq.digital/case-studies" },
      { "@type": "ListItem", "position": 3, "name": "Surplus Containers Case Study", "item": caseStudyUrl }
    ]
  };

  return (
    <main id="main-content" className="min-h-screen bg-jamarq-black text-jamarq-white">
      <ScrollProgressBar />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }} />

      <section className="min-h-[60vh] flex items-center justify-center px-5 md:px-10 pt-32 md:pt-40 pb-24" aria-label="Case study hero">
        <Reveal className="w-full">
          <div className="text-center max-w-4xl mx-auto space-y-4">
            <p className="text-sm text-jamarq-cyan uppercase tracking-wider">Case Study</p>
            <h1 className="text-4xl md:text-5xl font-semibold">Surplus Containers</h1>
            {heroSummary.map((paragraph) => (
              <p key={paragraph} className="text-lg md:text-xl text-mist leading-relaxed">
                {paragraph}
              </p>
            ))}
            <div className="flex flex-col md:flex-row md:justify-center md:items-center gap-2 text-sm text-jamarq-cyan">
              <Link href={liveSiteUrl} className="hover:text-jamarq-magenta transition-colors" target="_blank" rel="noopener noreferrer">
                Visit live site ↗
              </Link>
              <span className="text-jamarq-gray">|</span>
              <Link href={buildPageSpeedReportUrl(liveSiteUrl)} className="hover:text-jamarq-magenta transition-colors" target="_blank" rel="noopener noreferrer">
                PageSpeed Live check ↗
              </Link>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="py-24 md:py-32 bg-steel" aria-label="Project overview">
        <div className="max-w-5xl mx-auto px-5 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          <Reveal className="space-y-4">
            <h2 className="text-3xl font-semibold">Public Inventory Surface With Private Operations Behind It</h2>
            <p className="text-lg text-jamarq-gray leading-relaxed">
              Surplus Containers is not just a landing page. The public site supports inventory visibility and contact intake, while private campaign and inventory operations stay behind authentication. The public case study documents the shareable surface without exposing operational records.
            </p>
          </Reveal>
          <Reveal delay={150} className="grid grid-cols-1 gap-4">
            {projectFacts.map((fact, index) => (
              <Reveal key={fact.label} delay={index * 80} className="p-4 rounded-lg border border-slate bg-jamarq-black/40">
                <p className="text-xs uppercase tracking-widest text-jamarq-cyan">{fact.label}</p>
                <p className="text-lg text-mist font-semibold">{fact.value}</p>
              </Reveal>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="py-24 md:py-32" aria-label="Screenshots and technical proof">
        <div className="max-w-6xl mx-auto px-5 md:px-10">
          <Reveal className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <p className="text-sm uppercase tracking-wider text-jamarq-cyan mb-2">Screenshots</p>
              <h2 className="text-3xl md:text-4xl font-semibold">Public Proof, Confidential Records Omitted</h2>
            </div>
            <p className="text-jamarq-gray max-w-2xl">
              Screenshots show only public pages and masked inventory proof. Admin campaign data, contact lists, private rows, and credentials are intentionally excluded.
            </p>
          </Reveal>
          <Reveal delay={150}>
            <CaseStudyScreenshotTabs tabs={screenshotTabs} defaultTabId="pagespeed" />
          </Reveal>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-steel" aria-label="Challenge and solution">
        <div className="max-w-5xl mx-auto px-5 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-12">
          <Reveal>
            <h2 className="text-3xl font-semibold mb-6">The Challenge</h2>
            <ul className="space-y-3 text-jamarq-gray">
              {challengeBullets.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="text-jamarq-cyan">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={150}>
            <h2 className="text-3xl font-semibold mb-6">The Solution</h2>
            <ul className="space-y-3 text-jamarq-gray">
              {solutionBullets.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="text-jamarq-cyan">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="py-24 md:py-32" aria-label="The results">
        <div className="max-w-5xl mx-auto px-5 md:px-10">
          <Reveal className="mb-10">
            <h2 className="text-3xl md:text-4xl font-semibold">The Result</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {outcomeBullets.map((item, index) => (
              <Reveal key={item} delay={index * 80} className="p-6 rounded-lg border border-slate/60 bg-jamarq-black/50 text-jamarq-gray leading-relaxed">
                {item}
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-steel" aria-label="Full case study">
        <Reveal className="max-w-4xl mx-auto text-center px-5 md:px-10">
          <h3 className="text-2xl md:text-3xl font-semibold mb-6">Want the private operational walkthrough?</h3>
          <p className="text-lg text-jamarq-gray leading-relaxed mb-8 max-w-2xl mx-auto">
            A deeper walkthrough can cover campaign, contact, inventory, and delivery workflows privately. Those records are not published in this public case study.
          </p>
          <ContactModalTrigger
            prefill={{
              subject: "Surplus Containers private walkthrough request",
              source: "surplus-full-case-study",
              initialMessage: "I'd like a private walkthrough of the Surplus Containers build."
            }}
            className="inline-block bg-jamarq-cyan text-jamarq-black px-8 py-3 rounded-md font-semibold text-lg hover:bg-opacity-90 transition-all focus:outline-none focus:ring-2 focus:ring-jamarq-cyan focus:ring-offset-2 focus:ring-offset-steel"
          >
            Request Private Walkthrough
          </ContactModalTrigger>
        </Reveal>
      </section>

      <section className="py-16" aria-label="Navigation">
        <Reveal className="max-w-4xl mx-auto px-5 md:px-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 border-t border-slate pt-8">
            <Link href="/case-studies/mjr" className="text-jamarq-cyan hover:text-jamarq-magenta transition-colors font-semibold">
              ← Previous: Midway Junk Removal
            </Link>
            <Link href="/work" className="text-jamarq-cyan hover:text-jamarq-magenta transition-colors font-semibold">
              Back to All Work
            </Link>
            <Link href="/case-studies/mmh" className="text-jamarq-cyan hover:text-jamarq-magenta transition-colors font-semibold">
              Next: Midway Music Hall →
            </Link>
          </div>
        </Reveal>
      </section>

      <Footer />
    </main>
  );
}
