import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import { CaseStudyScreenshotTabs } from "@/components/CaseStudyScreenshotTabs";
import type { ScreenshotTab } from "@/components/CaseStudyScreenshotTabs";
import { webpScreenshot } from "@/lib/caseStudyImageAssets";
import { ContactModalTrigger } from "@/components/contact/ContactModalTrigger";
import { Reveal } from "@/components/Reveal";
import { ScrollProgressBar } from "@/components/ScrollProgressBar";
import { buildPageSpeedReportUrl } from "@/lib/pageSpeed";

const liveSiteUrl = "https://midway-junk-removal.com";
const caseStudyUrl = "https://jamarq.digital/case-studies/mjr";
const ogImageUrl = "https://jamarq.digital/case-studies/mjr/og-midway-junk-removal.jpg";

const heroSummary = [
  "Midway Junk Removal needed a practical online presence for homeowners, contractors, and property managers looking for junk removal, demolition, moving help, and hauling across the Triad.",
  "JAMARQ built a static-first service website with direct phone CTAs, clear service-area copy, LocalBusiness schema, a privacy page, and a SendGrid quote form that routes requests to the owner.",
  "The result is a fast, owner-controlled lead path: visitors can confirm fit, call quickly, or submit a quote request without forcing the business into a heavy CMS."
];

const heroDescription = heroSummary[0];
const heroStack = "Stack: Next.js App Router, TypeScript, Tailwind, SendGrid";
const heroScope = "Scope: Local service website + quote intake";

const projectFacts = [
  { label: "Business type", value: "Junk removal, demolition, hauling, and moving help" },
  { label: "Service area", value: "Greensboro, Winston-Salem, High Point, and the greater Triad" },
  { label: "Primary action", value: "Call or submit a quote request" },
  { label: "Ops model", value: "Client-owned domain, hosting, inbox, and update path" }
];

const challengeBullets = [
  "The business needed service coverage that was easy to scan on mobile before a customer made a call.",
  "The contact flow needed to support phone-first leads while still collecting structured quote details.",
  "The site needed enough SEO foundation for a local service business without adding unnecessary operational weight.",
  "Content updates had to stay simple enough for a small business handoff."
];

const solutionBullets = [
  "Mobile-first single-page layout with sticky calling, direct quote CTAs, and short service sections.",
  "Editable content modules for services, service area, FAQs, reviews, and project media.",
  "LocalBusiness JSON-LD, canonical URL handling, robots, sitemap, and OpenGraph/Twitter metadata.",
  "SendGrid-powered quote form with Zod validation, honeypot protection, rate limiting, and a minimum submit delay.",
  "Optimized logos, photos, review screenshots, and responsive image output generated from source assets.",
  "Deployment notes and environment-variable documentation for owner-managed hosting."
];

const serviceHighlights = [
  "Junk removal and room-by-room clean outs",
  "Appliance removal and bulky pickups",
  "Construction debris and job-site cleanup",
  "Selective demolition for sheds, decks, and small rooms",
  "Premium moving help and heavy lifting",
  "Clutter cleanup and ongoing support"
];

const outcomeBullets = [
  "Customers can understand services, coverage, hours, and quote options without hunting through the site.",
  "The owner receives quote requests by email with name, phone, service, city, message, timestamp, client IP, and user agent context.",
  "The stack avoids a runtime database and avoids third-party embeds, keeping the public site lean.",
  "Future copy updates can happen in small content files instead of forcing layout changes."
];

const screenshotTabs: ScreenshotTab[] = [
  {
    id: "pagespeed",
    label: "PageSpeed results",
    description:
      "Current live Lighthouse/PageSpeed evidence for the production service site.",
    items: [
      webpScreenshot({
        id: "mjr-pagespeed-current",
        basePath: "/case-studies/mjr/PageSpeed/mjr-pagespeed-current",
        caption:
          "Current live Lighthouse/PageSpeed evidence captured June 3, 2026: 100 desktop performance, 100 mobile performance, 95 accessibility, and 100 best-practices/SEO scores.",
        alt: "Current Lighthouse score card for Midway Junk Removal",
        technicalNote:
          "Measured locally with Lighthouse against the live production URL. Scores can vary by network and runtime conditions."
      })
    ]
  },
  {
    id: "public",
    label: "Public views",
    description:
      "Current public routes showing the homepage, service structure, and quote path without submitted customer data.",
    items: [
      webpScreenshot({
        id: "mjr-public-current-homepage",
        basePath: "/case-studies/mjr/Public%20Views/mjr-public-current-homepage",
        caption:
          "Current homepage with phone-first CTAs and a compact service-business message.",
        alt: "Current Midway Junk Removal homepage"
      }),
      webpScreenshot({
        id: "mjr-public-current-services",
        basePath: "/case-studies/mjr/Public%20Views/mjr-public-current-services",
        caption:
          "Current services route showing the searchable service-line structure.",
        alt: "Current Midway Junk Removal services route"
      }),
      webpScreenshot({
        id: "mjr-public-current-contact",
        basePath: "/case-studies/mjr/Public%20Views/mjr-public-current-contact",
        caption:
          "Current quote/contact route shown before submission; no customer records are displayed.",
        alt: "Current Midway Junk Removal quote and contact route"
      })
    ]
  },
  {
    id: "field",
    label: "Project media",
    description:
      "Optimized field photography from the Midway Junk Removal site, used to show real equipment, project types, and service proof.",
    items: [
      {
        id: "mjr-field-trailer",
        caption: "Hero image showing the Midway Junk Removal trailer staged for a residential clean out.",
        fallbackSrc: "/case-studies/mjr/Project%20Photos/mjr-field-trailer.webp",
        webpSrcSet: "/case-studies/mjr/Project%20Photos/mjr-field-trailer.webp 1370w",
        width: 1370,
        height: 640,
        alt: "Midway Junk Removal trailer staged for a residential clean out"
      },
      {
        id: "mjr-utility-trailer",
        caption: "Smaller utility trailer staged with furniture ready to be secured for hauling.",
        fallbackSrc: "/case-studies/mjr/Project%20Photos/mjr-utility-trailer.webp",
        webpSrcSet: "/case-studies/mjr/Project%20Photos/mjr-utility-trailer.webp 960w",
        width: 960,
        height: 723,
        alt: "Utility trailer staged with furniture for junk removal"
      },
      {
        id: "mjr-renovation-debris",
        caption: "Crew loading renovation debris into the dump trailer during a job-site cleanup.",
        fallbackSrc: "/case-studies/mjr/Project%20Photos/mjr-renovation-debris.webp",
        webpSrcSet: "/case-studies/mjr/Project%20Photos/mjr-renovation-debris.webp 960w",
        width: 960,
        height: 723,
        alt: "Crew loading renovation debris into a dump trailer"
      },
      {
        id: "mjr-house-cleanout",
        caption: "House cleanout media showing stacked chairs, totes, and mixed household items.",
        fallbackSrc: "/case-studies/mjr/Project%20Photos/mjr-house-cleanout.webp",
        webpSrcSet: "/case-studies/mjr/Project%20Photos/mjr-house-cleanout.webp 723w",
        width: 723,
        height: 960,
        alt: "House cleanout with chairs, totes, and mixed household items"
      },
      {
        id: "mjr-bulky-haul",
        caption: "Bulky pickup example with mattresses, appliances, and bed frames stacked for transport.",
        fallbackSrc: "/case-studies/mjr/Project%20Photos/mjr-bulky-haul.webp",
        webpSrcSet: "/case-studies/mjr/Project%20Photos/mjr-bulky-haul.webp 960w",
        width: 960,
        height: 723,
        alt: "Mattresses, appliances, and bed frames stacked on a dump trailer"
      }
    ]
  },
  {
    id: "mobile",
    label: "Mobile views",
    description: "Current mobile homepage capture showing the service flow on a narrow viewport.",
    items: [
      webpScreenshot({
        id: "mjr-public-current-homepage-mobile",
        basePath: "/case-studies/mjr/Mobile%20Views/mjr-public-current-homepage-mobile",
        caption: "Current mobile homepage with phone-first service CTAs.",
        alt: "Current Midway Junk Removal mobile homepage"
      })
    ]
  }
];

export const metadata: Metadata = {
  title: "Midway Junk Removal Case Study",
  description: heroDescription,
  alternates: {
    canonical: caseStudyUrl
  },
  openGraph: {
    title: "Midway Junk Removal Case Study",
    description: heroDescription,
    url: caseStudyUrl,
    type: "article",
    images: [
      {
        url: ogImageUrl,
        width: 1200,
        height: 630,
        alt: "Midway Junk Removal case study cover image"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Midway Junk Removal Case Study",
    description: heroDescription,
    images: [
      {
        url: ogImageUrl,
        width: 1200,
        height: 630,
        alt: "Midway Junk Removal case study cover image"
      }
    ],
    creator: "@jamarqdigital",
    site: "@jamarqdigital"
  }
};

export default function MJRCaseStudyPage() {
  // Case study metadata contract
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Midway Junk Removal Case Study",
    "description": heroDescription,
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
    "datePublished": "2026-05-04",
    "dateModified": "2026-05-04"
  };

  const breadcrumbStructuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://jamarq.digital/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Case Studies",
        "item": "https://jamarq.digital/case-studies"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Midway Junk Removal Case Study",
        "item": caseStudyUrl
      }
    ]
  };

  return (
    <main id="main-content" className="min-h-screen bg-jamarq-black text-jamarq-white">
      <ScrollProgressBar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }}
      />

      {/* Case study hero surface */}
      <section
        className="min-h-[60vh] flex items-center justify-center px-5 md:px-10 pt-32 md:pt-40 pb-24"
        aria-label="Case study hero"
      >
        <Reveal className="w-full">
          <div className="text-center max-w-4xl mx-auto space-y-4">
            <p className="text-sm text-jamarq-cyan uppercase tracking-wider">Case Study</p>
            <h1 className="text-4xl md:text-5xl font-semibold">Midway Junk Removal</h1>
            {heroSummary.map((paragraph) => (
              <p key={paragraph} className="text-lg md:text-xl text-mist leading-relaxed">
                {paragraph}
              </p>
            ))}
            <div className="flex flex-col md:flex-row md:justify-center md:items-center gap-2 text-sm text-jamarq-gray">
              <span className="font-semibold text-jamarq-cyan">{heroStack}</span>
              <span className="hidden md:inline text-jamarq-gray">|</span>
              <span>{heroScope}</span>
            </div>
            <div className="space-y-3">
              <div className="flex flex-col md:flex-row md:justify-center md:items-center gap-2 text-sm text-jamarq-cyan">
                <Link
                  href={liveSiteUrl}
                  className="hover:text-jamarq-magenta transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit live site ↗
                </Link>
                <span className="text-jamarq-gray">|</span>
                <Link
                  href={buildPageSpeedReportUrl(liveSiteUrl)}
                  className="hover:text-jamarq-magenta transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  PageSpeed Live check ↗
                </Link>
              </div>
              <div className="space-x-4">
                <Link
                  href="/work"
                  className="text-sm text-jamarq-cyan hover:text-jamarq-magenta transition-colors"
                >
                  ← Back to Work
                </Link>
                <span className="text-jamarq-gray">|</span>
                <Link
                  href="/"
                  className="text-sm text-jamarq-cyan hover:text-jamarq-magenta transition-colors"
                >
                  Home
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Project overview surface */}
      <section className="py-24 md:py-32 bg-steel" aria-label="Project overview">
        <div className="max-w-5xl mx-auto px-5 md:px-10 space-y-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Reveal className="space-y-4">
              <h2 className="text-3xl font-semibold">Online Presence For A Service Business</h2>
              <div className="space-y-3 text-lg text-jamarq-gray leading-relaxed">
                <p>
                  Midway Junk Removal is a local service business where speed and clarity matter. Most visitors need
                  to know whether the company handles their job type, whether they serve the visitor&apos;s area, and
                  how quickly they can call or request a quote.
                </p>
                <p>
                  JAMARQ treated the project as an online presence build instead of an application build. The site is
                  lightweight, direct, and built around the owner&apos;s real workflow: phone calls first, structured
                  quote requests second, and no unnecessary CMS or database layer.
                </p>
              </div>
            </Reveal>
            <Reveal delay={150} className="grid grid-cols-1 gap-4">
              {projectFacts.map((fact, index) => (
                <Reveal
                  key={fact.label}
                  delay={index * 80}
                  className="p-4 rounded-lg border border-slate bg-jamarq-black/40"
                >
                  <p className="text-xs uppercase tracking-widest text-jamarq-cyan">{fact.label}</p>
                  <p className="text-lg text-mist font-semibold">{fact.value}</p>
                </Reveal>
              ))}
            </Reveal>
          </div>
        </div>
      </section>

      {/* Technical proof surface */}
      <section className="py-24 md:py-32" aria-label="Project media and technical proof">
        <div className="max-w-6xl mx-auto px-5 md:px-10">
          <Reveal className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <p className="text-sm uppercase tracking-wider text-jamarq-cyan mb-2">Project Proof</p>
              <h2 className="text-3xl md:text-4xl font-semibold">Current Public Proof</h2>
            </div>
            <p className="text-jamarq-gray max-w-2xl">
              Current live screenshots, performance evidence, and actual field photography. Quote/contact views are
              shown before submission so customer records stay private.
            </p>
          </Reveal>
          <Reveal delay={150}>
            <CaseStudyScreenshotTabs tabs={screenshotTabs} defaultTabId="pagespeed" />
          </Reveal>
        </div>
      </section>

      {/* Challenge solution surface */}
      <section className="py-24 md:py-32 bg-steel" aria-label="Challenge and solution">
        <div className="max-w-5xl mx-auto px-5 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-12">
          <Reveal>
            <h2 className="text-3xl font-semibold mb-6">The Challenge</h2>
            <p className="text-jamarq-gray text-lg mb-6 leading-relaxed">
              The site needed to make a small local operator look established, reachable, and trustworthy without
              burying customers in content.
            </p>
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

      {/* Service coverage surface */}
      <section className="py-24 md:py-32" aria-label="Service coverage">
        <div className="max-w-5xl mx-auto px-5 md:px-10">
          <Reveal className="mb-10">
            <p className="text-sm uppercase tracking-wider text-jamarq-cyan mb-2">Content Structure</p>
            <h2 className="text-3xl md:text-4xl font-semibold">Service Lines Are Plain And Searchable</h2>
            <p className="text-lg text-jamarq-gray mt-4 max-w-3xl">
              For this kind of site, the service list is both a user-experience tool and an SEO foundation. Customers
              should recognize their job type immediately.
            </p>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {serviceHighlights.map((service, index) => (
              <Reveal
                key={service}
                delay={index * 80}
                className="p-5 rounded-lg border border-slate/60 bg-jamarq-black/50"
              >
                <p className="text-mist font-semibold">{service}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Results proof surface */}
      <section className="py-24 md:py-32 bg-steel" aria-label="The results">
        <div className="max-w-5xl mx-auto px-5 md:px-10">
          <Reveal className="mb-10">
            <h2 className="text-3xl md:text-4xl font-semibold">The Result</h2>
            <p className="text-lg text-jamarq-gray mt-4 max-w-3xl leading-relaxed">
              The final site gives Midway Junk Removal a clearer public presence and a durable quote path, while
              staying small enough for the owner to maintain without changing how the business operates.
            </p>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-lg text-jamarq-gray leading-relaxed">
            <Reveal className="space-y-5 bg-jamarq-black rounded-lg border border-slate/60 p-6">
              <h3 className="text-2xl font-semibold text-mist mb-2">Customer Flow</h3>
              <ul className="space-y-4">
                {outcomeBullets.slice(0, 2).map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="text-jamarq-cyan">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={150} className="space-y-5 bg-jamarq-black rounded-lg border border-slate/60 p-6">
              <h3 className="text-2xl font-semibold text-mist mb-2">Operational Fit</h3>
              <ul className="space-y-4">
                {outcomeBullets.slice(2).map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="text-jamarq-cyan">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
          <Reveal delay={150} className="text-xl text-mist font-semibold pt-10">
            This is the kind of small-business web presence JAMARQ should own: clear positioning, fast paths to
            contact, credible media, and enough technical foundation to keep search and handoff clean.
          </Reveal>
        </div>
      </section>

      {/* Full narrative surface */}
      <section className="py-24 md:py-32" aria-label="Full case study">
        <Reveal className="max-w-4xl mx-auto text-center px-5 md:px-10">
          <h3 className="text-2xl md:text-3xl font-semibold mb-6">
            Want the full technical breakdown?
          </h3>
          <p className="text-lg text-jamarq-gray leading-relaxed mb-8 max-w-2xl mx-auto">
            A deeper walkthrough of the content model, contact route, validation, asset pipeline, and deployment
            handoff is available on request.
          </p>
          <ContactModalTrigger
            prefill={{
              subject: "MJR full case study request",
              source: "mjr-full-case-study",
              initialMessage: "I'd like a full walkthrough of the Midway Junk Removal build."
            }}
            className="inline-block bg-jamarq-cyan text-jamarq-black px-8 py-3 rounded-md font-semibold text-lg hover:bg-opacity-90 transition-all focus:outline-none focus:ring-2 focus:ring-jamarq-cyan focus:ring-offset-2 focus:ring-offset-jamarq-black"
          >
            Request Full Case Study
          </ContactModalTrigger>
        </Reveal>
      </section>

      {/* Case study navigation boundary */}
      <section className="py-16 bg-steel" aria-label="Navigation">
        <Reveal className="max-w-4xl mx-auto px-5 md:px-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 border-t border-slate pt-8">
            <Link
              href="/case-studies/mms"
              className="text-jamarq-cyan hover:text-jamarq-magenta transition-colors font-semibold"
            >
              ← Previous: Midway Mobile Storage
            </Link>
            <Link
              href="/work"
              className="text-jamarq-cyan hover:text-jamarq-magenta transition-colors font-semibold"
            >
              Back to All Work
            </Link>
            <Link
              href="/case-studies/surplus"
              className="text-jamarq-cyan hover:text-jamarq-magenta transition-colors font-semibold"
            >
              Next: Surplus Containers →
            </Link>
          </div>
        </Reveal>
      </section>

      <Footer />
    </main>
  );
}
