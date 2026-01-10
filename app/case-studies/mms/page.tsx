import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import { CaseStudyScreenshotTabs } from "@/components/CaseStudyScreenshotTabs";
import type { ScreenshotTab } from "@/components/CaseStudyScreenshotTabs";
import { buildPageSpeedReportUrl } from "@/lib/pageSpeed";
import { ContactModalTrigger } from "@/components/contact/ContactModalTrigger";
import { FadeIn } from "@/components/FadeIn";
import { ScrollProgressBar } from "@/components/ScrollProgressBar";

const heroSummary = [
  "Midway Mobile Storage needed a trustworthy web presence and quote workflow—the previous site was barebones, slow, and unable to collect leads without a phone call.",
  "JAMARQ rebuilt the entire stack with custom inventory controls, automated quote requests, streamlined admin workflows, and performance optimization that landed 98/100 desktop and 89/100 mobile scores on shared hosting.",
  "Proof arrived quickly: the first online quote hit the system just 16 days after launch, validating the whole build."
];

const heroDescription = heroSummary[0];
const heroStack = "Stack: Next.js, React, PHP API, Tailwind";
const heroLaunch = "Launch: November 25, 2025";

const screenshotTabs: ScreenshotTab[] = [
  {
    id: "pagespeed",
    label: "PageSpeed results",
    description: "Desktop and mobile Lighthouse proof that documents the 98/100 (desktop) and 89/100 (mobile) scores achieved on shared GoDaddy hosting.",
    items: [
      {
        id: "mms-pagespeed-desktop",
        caption: "Desktop PageSpeed score at 98/100 on shared hosting.",
        fallbackSrc: "/case-studies/mms/PageSpeed/pagespeed-desktop.webp",
        webpSrcSet: "/case-studies/mms/PageSpeed/pagespeed-desktop.webp 1600w",
        width: 1600,
        height: 1000,
        alt: "PageSpeed Insights desktop score showing 98 out of 100"
      },
      {
        id: "mms-pagespeed-mobile",
        caption: "Mobile PageSpeed score boosted to 89/100 with code-level optimizations.",
        fallbackSrc: "/case-studies/mms/PageSpeed/pagespeed-mobile.webp",
        webpSrcSet: "/case-studies/mms/PageSpeed/pagespeed-mobile.webp 1600w",
        width: 1600,
        height: 1000,
        alt: "PageSpeed Insights mobile score showing 89 out of 100"
      }
    ]
  },
  {
    id: "public",
    label: "Public views",
    description: "Customer-facing site experience that helped the business capture its first online quote within 16 days.",
    items: [
      {
        id: "mms-public-home",
        caption: "Home page redesign with clear CTAs, trust signals, and real inventory messaging.",
        fallbackSrc: "/case-studies/mms/Public Views/home-page.webp",
        webpSrcSet: "/case-studies/mms/Public Views/home-page.webp 1600w",
        width: 1600,
        height: 1000,
        alt: "Midway Mobile Storage home page hero and CTA design"
      }
    ]
  },
  {
    id: "admin",
    label: "Admin views",
    description: "Screens and tooling used by ownership to manage units, quotes, and messaging without a vendor lock-in.",
    items: [
      {
        id: "mms-admin-inventory",
        caption: "Custom unit inventory system with filters and owner-ready controls.",
        fallbackSrc: "/case-studies/mms/Admin Views/admin-inventory-system.webp",
        webpSrcSet: "/case-studies/mms/Admin Views/admin-inventory-system.webp 1600w",
        width: 1600,
        height: 1000,
        alt: "Admin dashboard showing Midway Mobile Storage inventory controls"
      }
    ]
  },
  {
    id: "mobile",
    label: "Mobile views",
    description: "Mobile-first flows that keep quote requests and conversions moving even after hours.",
    items: [
      {
        id: "mms-quote-mobile",
        caption: "Quote workflow on mobile lets customers submit requests 24/7 without calling.",
        fallbackSrc: "/case-studies/mms/Mobile Views/quote-form-mobile.webp",
        webpSrcSet: "/case-studies/mms/Mobile Views/quote-form-mobile.webp 775w",
        width: 775,
        height: 1600,
        alt: "Quote request form on a mobile phone for Midway Mobile Storage"
      }
    ]
  }
];

export const metadata: Metadata = {
  title: "Midway Mobile Storage Case Study",
  description: heroDescription,
  alternates: {
    canonical: "https://jamarq.digital/case-studies/mms"
  },
  openGraph: {
    title: "Midway Mobile Storage Case Study",
    description: heroDescription,
    url: "https://jamarq.digital/case-studies/mms",
    type: "article",
    images: [
      {
        url: "https://jamarq.digital/case-studies/mms/og-midway-mobile-storage.jpg",
        width: 1200,
        height: 630,
        alt: "Midway Mobile Storage case study cover image"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Midway Mobile Storage Case Study",
    description: heroDescription,
    images: [
      {
        url: "https://jamarq.digital/case-studies/mms/og-midway-mobile-storage.jpg",
        width: 1200,
        height: 630,
        alt: "Midway Mobile Storage case study cover image"
      }
    ],
    creator: "@jamarqdigital",
    site: "@jamarqdigital"
  }
};

export default function MMSCaseStudyPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Midway Mobile Storage Case Study",
    "description": heroDescription,
    "author": {
      "@type": "Person",
      "name": "Jason Marshall",
      "email": "jason@jamarq.digital"
    },
    "publisher": {
      "@type": "Organization",
      "name": "JAMARQ Digital",
      "logo": {
        "@type": "ImageObject",
        "url": "https://jamarq.digital/assets/logos/wordmark-dark.png"
      }
    },
    "image": "https://jamarq.digital/case-studies/mms/og-midway-mobile-storage.jpg",
    "datePublished": "2025-12-09",
    "dateModified": "2025-12-09"
  };

  return (
    <main id="main-content" className="min-h-screen bg-jamarq-black text-jamarq-white">
      <ScrollProgressBar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      {/* Hero Section */}
      <section
        className="min-h-[60vh] flex items-center justify-center px-5 md:px-10 pt-32 md:pt-40 pb-24"
        aria-label="Case study hero"
      >
        <FadeIn className="w-full">
          <div className="text-center max-w-4xl mx-auto space-y-4">
          <p className="text-sm text-jamarq-cyan mb-4 uppercase tracking-wider">Case Study</p>
          <h1 className="text-4xl md:text-5xl font-semibold mb-6">
            Midway Mobile Storage
          </h1>
          {heroSummary.map((paragraph) => (
            <p key={paragraph} className="text-lg md:text-xl text-mist leading-relaxed">
              {paragraph}
            </p>
          ))}
          <div className="flex flex-col md:flex-row md:justify-center md:items-center gap-2 text-sm text-jamarq-gray">
            <span className="font-semibold text-jamarq-cyan">{heroStack}</span>
            <span className="hidden md:inline text-jamarq-gray">|</span>
            <span>{heroLaunch}</span>
          </div>
          <div className="space-y-3">
            <div className="flex flex-col md:flex-row md:justify-center md:items-center gap-2 text-sm text-jamarq-cyan">
              <Link
                href="https://midwaymobilestorage.com"
                className="hover:text-jamarq-magenta transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit live site ↗
              </Link>
              <span className="text-jamarq-gray">|</span>
              <Link
                href={buildPageSpeedReportUrl("https://midwaymobilestorage.com")}
                className="hover:text-jamarq-magenta transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                PageSpeed Live check ↗
              </Link>
            </div>
            <div className="space-x-4">
              <Link href="/work" className="text-sm text-jamarq-cyan hover:text-jamarq-magenta transition-colors">
                ← Back to Work
              </Link>
              <span className="text-jamarq-gray">|</span>
              <Link href="/" className="text-sm text-jamarq-cyan hover:text-jamarq-magenta transition-colors">
                Home
              </Link>
            </div>
          </div>
          </div>
        </FadeIn>
      </section>

      {/* Overview Section */}
      <section className="py-24 md:py-32 bg-steel" aria-label="Project overview">
        <FadeIn className="max-w-4xl mx-auto px-5 md:px-10">
          <div className="space-y-6 text-lg text-jamarq-gray leading-relaxed">
            <p className="text-xl text-mist">
              Midway Mobile Storage needed a website that actually worked. Their old site was barebones, slow, and lacked the tools customers needed to request quotes or understand inventory. JAMARQ rebuilt the entire platform into a modern, intentional system with inventory controls, a custom quote form, streamlined admin workflow, and aggressive performance optimization that achieved a <span className="text-jamarq-cyan font-semibold">98/100 desktop score</span>—faster than 95% of websites globally.
            </p>
            <p>
              The rebuild launched November 25, 2025 with a focus on clarity, speed, and owner-friendly controls. Customers could finally browse inventory, request quotes without calling, and trust the legitimacy of the brand thanks to consistent design and messaging.
            </p>
            <div className="mt-8 p-6 rounded-lg border border-slate bg-jamarq-black/40">
              <p className="text-sm uppercase tracking-wider text-jamarq-cyan mb-2">Timeline Highlight</p>
              <p className="text-2xl font-semibold text-mist mb-2">
                Launched November 25, 2025
              </p>
              <p className="text-lg text-jamarq-gray">
                First online quote received December 11, 2025 — just <span className="font-semibold text-jamarq-white">16 days after launch</span>.
              </p>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Screenshots Section */}
      <section className="py-24 md:py-32" aria-label="Screenshots and technical proof">
        <div className="max-w-6xl mx-auto px-5 md:px-10">
          <FadeIn className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <p className="text-sm uppercase tracking-wider text-jamarq-cyan mb-2">Screenshots</p>
              <h2 className="text-3xl md:text-4xl font-semibold">Operational Coverage</h2>
            </div>
            <p className="text-jamarq-gray max-w-2xl">
              Documentation of performance proof, customer-facing flows, and owner tooling using the same structure as every JAMARQ case study.
            </p>
          </FadeIn>
          <FadeIn delay={150}>
            <CaseStudyScreenshotTabs tabs={screenshotTabs} defaultTabId="pagespeed" />
          </FadeIn>
        </div>
      </section>

      {/* The Challenge Section */}
      <section className="py-24 md:py-32" aria-label="The challenge">
        <FadeIn className="max-w-4xl mx-auto px-5 md:px-10">
          <h2 className="text-3xl md:text-4xl font-semibold mb-8">
            The Challenge
          </h2>
          <div className="space-y-6 text-lg text-jamarq-gray leading-relaxed">
            <p className="mb-4">
              Their previous website was essentially unusable:
            </p>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <span className="text-jamarq-cyan">•</span>
                <span>No functioning forms</span>
              </li>
              <li className="flex gap-3">
                <span className="text-jamarq-cyan">•</span>
                <span>No real storage unit information</span>
              </li>
              <li className="flex gap-3">
                <span className="text-jamarq-cyan">•</span>
                <span>No brand consistency</span>
              </li>
              <li className="flex gap-3">
                <span className="text-jamarq-cyan">•</span>
                <span>No mobile optimization (74/100 mobile score)</span>
              </li>
              <li className="flex gap-3">
                <span className="text-jamarq-cyan">•</span>
                <span>Extremely slow load times (3.5+ seconds)</span>
              </li>
              <li className="flex gap-3">
                <span className="text-jamarq-cyan">•</span>
                <span>No way for customers to request quotes without calling</span>
              </li>
              <li className="flex gap-3">
                <span className="text-jamarq-cyan">•</span>
                <span>All inquiries required phone calls during business hours</span>
              </li>
            </ul>
            <p className="pt-4">
              The lack of structure made it difficult for customers to trust the business or understand what was available.
            </p>
          </div>
        </FadeIn>
      </section>

      {/* The Solution Section */}
      <section className="py-24 md:py-32 bg-steel" aria-label="The solution">
        <FadeIn className="max-w-4xl mx-auto px-5 md:px-10">
          <h2 className="text-3xl md:text-4xl font-semibold mb-8">
            The Solution
          </h2>
          <div className="space-y-6 text-lg text-jamarq-gray leading-relaxed">
            <p>
              JAMARQ designed and built a fully custom website with clear structure, a modern design system, functional tools, and elite performance optimization built around the owner&rsquo;s actual workflow.
            </p>
            <p className="text-mist font-semibold pt-4">
              Delivered features include:
            </p>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <span className="text-jamarq-cyan">•</span>
                <span>Clean, trustworthy visual identity and layout</span>
              </li>
              <li className="flex gap-3">
                <span className="text-jamarq-cyan">•</span>
                <span>Custom unit inventory system</span>
              </li>
              <li className="flex gap-3">
                <span className="text-jamarq-cyan">•</span>
                <span>Quote request form with database integration</span>
              </li>
              <li className="flex gap-3">
                <span className="text-jamarq-cyan">•</span>
                <span>Job application form</span>
              </li>
              <li className="flex gap-3">
                <span className="text-jamarq-cyan">•</span>
                <span>Admin tools for updating key information</span>
              </li>
              <li className="flex gap-3">
                <span className="text-jamarq-cyan">•</span>
                <span> <span className="font-semibold text-jamarq-white">Aggressive performance optimization</span> (98/100 desktop, 89/100 mobile)</span>
              </li>
              <li className="flex gap-3">
                <span className="text-jamarq-cyan">•</span>
                <span>Mobile-first responsive design</span>
              </li>
              <li className="flex gap-3">
                <span className="text-jamarq-cyan">•</span>
                <span>SEO foundations + deployment</span>
              </li>
              <li className="flex gap-3">
                <span className="text-jamarq-cyan">•</span>
                <span>A flexible system ready for future advertising</span>
              </li>
            </ul>
            <p className="text-xl text-mist font-semibold pt-6">
              The result is a professional platform built around clarity, control, speed, and long-term sustainability.
            </p>
          </div>
        </FadeIn>
      </section>

      {/* The Results Section */}
      <section className="py-24 md:py-32" aria-label="The results">
        <div className="max-w-5xl mx-auto px-5 md:px-10">
          <FadeIn className="mb-10">
            <h2 className="text-3xl md:text-4xl font-semibold">
              The Results
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-lg text-jamarq-gray leading-relaxed">
            <FadeIn className="space-y-5 bg-jamarq-black rounded-lg border border-slate/60 p-6">
              <h3 className="text-2xl font-semibold text-mist mb-2">Performance</h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <span className="text-jamarq-cyan">•</span>
                  <span><span className="font-semibold text-jamarq-white">Desktop: 98/100 PageSpeed score</span> (top 5% globally)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-jamarq-cyan">•</span>
                  <span><span className="font-semibold text-jamarq-white">Mobile: 89/100</span> (+20% improvement from 74)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-jamarq-cyan">•</span>
                  <span>Load time: <span className="font-semibold text-jamarq-white">0.9 seconds</span> on desktop (down from 3.5s)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-jamarq-cyan">•</span>
                  <span>Zero layout shift with instant interactivity</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-jamarq-cyan">•</span>
                  <span>Faster than most Vercel-hosted sites despite shared GoDaddy hosting</span>
                </li>
              </ul>
            </FadeIn>
            <FadeIn delay={150} className="space-y-5 bg-jamarq-black rounded-lg border border-slate/60 p-6">
              <h3 className="text-2xl font-semibold text-mist mb-2">Business Impact</h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <span className="text-jamarq-cyan">•</span>
                  <span><span className="font-semibold text-jamarq-white">First online quote received within 16 days of launch</span> (December 11, 2025)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-jamarq-cyan">•</span>
                  <span>Customers now submit quote requests 24/7 without calling</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-jamarq-cyan">•</span>
                  <span>Structured data collection improves quote follow-up</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-jamarq-cyan">•</span>
                  <span>Inventory is easy to access and understand</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-jamarq-cyan">•</span>
                  <span>Admin updates are simplified and owner-led</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-jamarq-cyan">•</span>
                  <span>The brand finally reads as legitimate, modern, and trustworthy</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-jamarq-cyan">•</span>
                  <span>Fast load times increase trust while supporting future advertising</span>
                </li>
              </ul>
            </FadeIn>
          </div>
          <FadeIn delay={150} className="text-xl text-mist font-semibold pt-10">
            Timeline to first conversion: <span className="text-jamarq-cyan">16 days</span>. Clarity, performance, and workflow alignment created measurable business results.
          </FadeIn>
        </div>
      </section>

      {/* Full Case Study CTA */}
      <section className="py-24 md:py-32 bg-steel" aria-label="Full case study">
        <FadeIn className="max-w-4xl mx-auto text-center px-5 md:px-10">
          <h3 className="text-2xl md:text-3xl font-semibold mb-6">
            Want the Full Technical Deep Dive?
          </h3>
          <p className="text-lg text-jamarq-gray leading-relaxed mb-8 max-w-2xl mx-auto">
            A detailed breakdown including architecture decisions, database design, content modeling, and front-end performance techniques is available upon request.
          </p>
          <ContactModalTrigger
            prefill={{
              subject: "MMS full case study request",
              source: "mms-full-case-study",
              initialMessage: "I'd like a full walkthrough of the Midway Mobile Storage build."
            }}
            className="inline-block bg-jamarq-cyan text-jamarq-black px-8 py-3 rounded-md font-semibold text-lg hover:bg-opacity-90 transition-all focus:outline-none focus:ring-2 focus:ring-jamarq-cyan focus:ring-offset-2 focus:ring-offset-steel"
          >
            Request Full Case Study
          </ContactModalTrigger>
        </FadeIn>
      </section>

      {/* Navigation CTA */}
      <section className="py-16" aria-label="Navigation">
        <FadeIn className="max-w-4xl mx-auto px-5 md:px-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 border-t border-slate pt-8">
            <Link
              href="/case-studies/trbg"
              className="text-jamarq-cyan hover:text-jamarq-magenta transition-colors font-semibold"
            >
              ← Previous: Thunder Road Bar & Grill
            </Link>
            <Link
              href="/work"
              className="text-jamarq-cyan hover:text-jamarq-magenta transition-colors font-semibold"
            >
              Back to All Work
            </Link>
            <Link
              href="/case-studies/mmh"
              className="text-jamarq-cyan hover:text-jamarq-magenta transition-colors font-semibold"
            >
              Next: Midway Music Hall →
            </Link>
          </div>
        </FadeIn>
      </section>

      <Footer />
    </main>
  );
}
