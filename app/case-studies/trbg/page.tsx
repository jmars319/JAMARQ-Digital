import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import { CaseStudyScreenshotTabs } from "@/components/CaseStudyScreenshotTabs";
import type { ScreenshotTab } from "@/components/CaseStudyScreenshotTabs";
import { buildPageSpeedReportUrl } from "@/lib/pageSpeed";
import { ContactModalTrigger } from "@/components/contact/ContactModalTrigger";
import { FadeIn } from "@/components/FadeIn";
import { ScrollProgressBar } from "@/components/ScrollProgressBar";

const screenshotTabs: ScreenshotTab[] = [
  {
    id: "pagespeed",
    label: "PageSpeed results",
    description: "Live Lighthouse validation for the bar’s rebuilt website. Desktop and mobile captures will land here as they are documented.",
    items: []
  },
  {
    id: "public",
    label: "Public views",
    description: "Customer-facing pages for menus, weekly specials, and events. Gallery updates will slot into this tab without layout changes.",
    items: []
  },
  {
    id: "admin",
    label: "Admin views",
    description: "Owner tooling for menu edits and weekly updates will be published here as screenshots become available.",
    items: []
  },
  {
    id: "mobile",
    label: "Mobile views",
    description: "Mobile parity checks that mirror the desktop experience. Assets will be added once photography is staged.",
    items: []
  }
];

const heroDescription =
  "A complete rebuild of a neighborhood bar's digital system. Custom React website with improved load times, clean menu design, and simple admin workflow.";

export const metadata: Metadata = {
  title: "Thunder Road Bar & Grill Case Study — JAMARQ Digital",
  description: heroDescription,
  alternates: {
    canonical: "https://jamarq.digital/case-studies/trbg"
  },
  openGraph: {
    title: "Thunder Road Bar & Grill Case Study — JAMARQ Digital",
    description: heroDescription,
    url: "https://jamarq.digital/case-studies/trbg",
    type: "article",
    images: [
      {
        url: "https://jamarq.digital/case-studies/trbg/og-thunder-road-bar-and-grill.jpg",
        width: 1200,
        height: 630,
        alt: "Thunder Road Bar & Grill case study cover image"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Thunder Road Bar & Grill Case Study — JAMARQ Digital",
    description: heroDescription,
    images: [
      {
        url: "https://jamarq.digital/case-studies/trbg/og-thunder-road-bar-and-grill.jpg",
        width: 1200,
        height: 630,
        alt: "Thunder Road Bar & Grill case study cover image"
      }
    ]
  }
};

export default function TRBGCaseStudyPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Thunder Road Bar & Grill Case Study",
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
    "image": "https://jamarq.digital/case-studies/trbg/og-thunder-road-bar-and-grill.jpg",
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
            Thunder Road Bar & Grill
          </h1>
          <p className="text-xl md:text-2xl text-mist mb-6">
            {heroDescription}
          </p>
          <div className="space-y-3">
            <div className="flex flex-col md:flex-row md:justify-center md:items-center gap-2 text-sm text-jamarq-cyan">
              <Link
                href="https://trbgmidway.com"
                className="hover:text-jamarq-magenta transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit live site ↗
              </Link>
              <span className="text-jamarq-gray">|</span>
              <Link
                href={buildPageSpeedReportUrl("https://trbgmidway.com")}
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
              Thunder Road Bar & Grill needed a website that matched the energy and clarity of their restaurant, but their old vendor-run system was slow, restrictive, and expensive. JAMARQ rebuilt the entire platform from the ground up — a custom, fast, intentional digital system the owners fully control.
            </p>
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
              Structured space for PageSpeed captures, menu flows, admin tooling, and mobile coverage. Assets will be added without additional engineering.
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
            <p>
              TRBG&rsquo;s previous website was locked behind a subscription service with rigid templates, unclear menu layout, and slow load speeds. Weekly specials took too long to update, and nothing truly reflected the restaurant&rsquo;s authentic identity.
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
              JAMARQ created a custom React website with a focused design system, mobile-first performance, and a dead-simple admin panel built around the owners&rsquo; workflow. The result is a modern, high-clarity menu experience and a reliable platform they fully own.
            </p>
          </div>
        </FadeIn>
      </section>

      {/* The Results Section */}
      <section className="py-24 md:py-32" aria-label="The results">
        <div className="max-w-4xl mx-auto px-5 md:px-10">
          <FadeIn className="mb-8">
            <h2 className="text-3xl md:text-4xl font-semibold">
              The Results
            </h2>
          </FadeIn>
          <div className="space-y-6 text-lg text-jamarq-gray leading-relaxed">
            <FadeIn>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <span className="text-jamarq-cyan">•</span>
                  <span>Load time reduced from ~4–6s to &lt;1.5s</span>
                </li>
              <li className="flex gap-3">
                <span className="text-jamarq-cyan">•</span>
                <span>Clean, intuitive menu browsing</span>
              </li>
              <li className="flex gap-3">
                <span className="text-jamarq-cyan">•</span>
                <span>Weekly specials updated in under 5 minutes</span>
              </li>
                <li className="flex gap-3">
                  <span className="text-jamarq-cyan">•</span>
                  <span>No subscriptions, no vendor lock-in, full ownership</span>
                </li>
              </ul>
            </FadeIn>
            <FadeIn delay={150} className="text-xl text-mist font-semibold pt-6">
              A fast, intentional system built to match the way TRBG actually works.
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Full Case Study CTA */}
      <section className="py-24 md:py-32 bg-steel" aria-label="Full case study">
        <FadeIn className="max-w-4xl mx-auto text-center px-5 md:px-10">
          <h3 className="text-2xl md:text-3xl font-semibold mb-6">
            Want the Full Technical Deep Dive?
          </h3>
          <p className="text-lg text-jamarq-gray leading-relaxed mb-8 max-w-2xl mx-auto">
            A detailed breakdown including architecture decisions, admin panel features, and technical implementation is available upon request.
          </p>
          <ContactModalTrigger
            prefill={{
              subject: "TRBG full case study request",
              source: "trbg-full-case-study",
              initialMessage: "I'd like to see the full Thunder Road Bar & Grill case study."
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
              href="/work"
              className="text-jamarq-cyan hover:text-jamarq-magenta transition-colors font-semibold"
            >
              ← Back to All Work
            </Link>
            <Link
              href="/case-studies/mms"
              className="text-jamarq-cyan hover:text-jamarq-magenta transition-colors font-semibold"
            >
              Next: Midway Mobile Storage →
            </Link>
          </div>
        </FadeIn>
      </section>

      <Footer />
    </main>
  );
}
