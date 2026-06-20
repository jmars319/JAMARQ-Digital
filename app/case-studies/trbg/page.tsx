import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import { CaseStudyScreenshotTabs } from "@/components/CaseStudyScreenshotTabs";
import type { ScreenshotTab } from "@/components/CaseStudyScreenshotTabs";
import { trbgCaseStudyContent } from "@/lib/trbgCaseStudyContent";
import { getTRBGScreenshotGroups } from "@/lib/trbgScreenshots";
import { buildPageSpeedReportUrl } from "@/lib/pageSpeed";
import { ContactModalTrigger } from "@/components/contact/ContactModalTrigger";
import { Reveal } from "@/components/Reveal";
import { ScrollProgressBar } from "@/components/ScrollProgressBar";

const heroDescription =
  trbgCaseStudyContent.hero.summary[0] ?? trbgCaseStudyContent.hero.subtitle ?? "Thunder Road Bar & Grill project summary.";

export const metadata: Metadata = {
  title: "Thunder Road Bar & Grill Case Study",
  description: heroDescription,
  alternates: {
    canonical: "https://jamarq.digital/case-studies/trbg"
  },
  openGraph: {
    title: "Thunder Road Bar & Grill Case Study",
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
    title: "Thunder Road Bar & Grill Case Study",
    description: heroDescription,
    images: [
      {
        url: "https://jamarq.digital/case-studies/trbg/og-thunder-road-bar-and-grill.jpg",
        width: 1200,
        height: 630,
        alt: "Thunder Road Bar & Grill case study cover image"
      }
    ],
    creator: "@jamarqdigital",
    site: "@jamarqdigital"
  }
};

export default function TRBGCaseStudyPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Thunder Road Bar & Grill Case Study",
    "description": heroDescription,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://jamarq.digital/case-studies/trbg"
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
    "image": "https://jamarq.digital/case-studies/trbg/og-thunder-road-bar-and-grill.jpg",
    "datePublished": "2025-11-01",
    "dateModified": "2025-11-01"
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
        "name": trbgCaseStudyContent.hero.title,
        "item": "https://jamarq.digital/case-studies/trbg"
      }
    ]
  };

  const screenshotGroups = getTRBGScreenshotGroups();
  const screenshotTabs: ScreenshotTab[] = [
    {
      id: "pagespeed",
      label: "PageSpeed results",
      description:
        "Live Lighthouse captures before and after the rebuild, showing the impact of responsive media, caching, and code cleanup.",
      items: screenshotGroups.pagespeed
    },
    {
      id: "public",
      label: "Public views",
      description:
        "Customer-facing menu, reservations, and hiring flows that reflect the bar’s identity while keeping information clear.",
      items: screenshotGroups.public
    },
    {
      id: "mobile",
      label: "Mobile views",
      description:
        "Mobile parity checks that mirror desktop behavior without exposing private staff or submission records.",
      items: screenshotGroups.mobile
    }
  ];

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

      <section
        className="min-h-[60vh] flex items-center justify-center px-5 md:px-10 pt-32 md:pt-40 pb-24"
        aria-label="Case study hero"
      >
        <Reveal className="w-full">
          <div className="text-center max-w-4xl mx-auto space-y-4">
            <p className="text-sm text-jamarq-cyan uppercase tracking-wider">Case Study</p>
            <h1 className="text-4xl md:text-5xl font-semibold">{trbgCaseStudyContent.hero.title}</h1>
            <p className="text-lg md:text-xl text-jamarq-gray">{trbgCaseStudyContent.hero.subtitle}</p>
            {trbgCaseStudyContent.hero.summary.map((paragraph) => (
              <p key={paragraph} className="text-lg md:text-xl text-mist leading-relaxed">
                {paragraph}
              </p>
            ))}
            <div className="flex flex-col md:flex-row md:justify-center md:items-center gap-2 text-sm text-jamarq-gray">
              <span className="font-semibold text-jamarq-cyan">{trbgCaseStudyContent.hero.stack}</span>
              <span className="hidden md:inline text-jamarq-gray">|</span>
              <span>{trbgCaseStudyContent.hero.launch}</span>
            </div>
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

      <section className="py-24 md:py-32 bg-steel" aria-label="Project overview">
        <div className="max-w-5xl mx-auto px-5 md:px-10 space-y-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Reveal className="space-y-4">
              <h2 className="text-3xl font-semibold">{trbgCaseStudyContent.projectOverview.heading}</h2>
              <div className="space-y-3 text-lg text-jamarq-gray">
                {trbgCaseStudyContent.projectOverview.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </Reveal>
            <Reveal delay={150} className="grid grid-cols-1 gap-4">
              {trbgCaseStudyContent.projectOverview.facts.map((fact, index) => (
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

      <section className="py-24 md:py-32" aria-label="Screenshots and technical proof">
        <div className="max-w-6xl mx-auto px-5 md:px-10">
          <Reveal className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <p className="text-sm uppercase tracking-wider text-jamarq-cyan mb-2">Screenshots</p>
              <h2 className="text-3xl md:text-4xl font-semibold">Operational Coverage</h2>
            </div>
            <p className="text-jamarq-gray max-w-2xl">
              Screenshots covering PageSpeed, public menu/reservation/careers flows, and mobile layouts. Authenticated admin workflows are summarized without public screenshots.
            </p>
          </Reveal>
          <Reveal delay={150}>
            <CaseStudyScreenshotTabs tabs={screenshotTabs} defaultTabId="pagespeed" />
          </Reveal>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-steel" aria-label="Challenges and objectives">
        <div className="max-w-5xl mx-auto px-5 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-12">
          <Reveal>
            <h2 className="text-3xl font-semibold mb-6">{trbgCaseStudyContent.challenge.heading}</h2>
            <p className="text-jamarq-gray text-lg mb-6 leading-relaxed">
              {trbgCaseStudyContent.challenge.intro}
            </p>
            <ul className="space-y-3 text-jamarq-gray">
              {trbgCaseStudyContent.challenge.bullets.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="text-jamarq-cyan">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-jamarq-gray text-lg mt-6">{trbgCaseStudyContent.challenge.closing}</p>
          </Reveal>
          <Reveal delay={150}>
            <h2 className="text-3xl font-semibold mb-6">{trbgCaseStudyContent.objectives.heading}</h2>
            <ul className="space-y-3 text-jamarq-gray">
              {trbgCaseStudyContent.objectives.bullets.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="text-jamarq-cyan">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="py-24 md:py-32" aria-label="Approach">
        <Reveal className="max-w-4xl mx-auto px-5 md:px-10">
          <h2 className="text-3xl md:text-4xl font-semibold mb-8">{trbgCaseStudyContent.approach.heading}</h2>
          <div className="space-y-6 text-lg text-jamarq-gray leading-relaxed">
            {trbgCaseStudyContent.approach.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="py-24 md:py-32 bg-steel" aria-label="Solution details">
        <div className="max-w-6xl mx-auto px-5 md:px-10">
          <Reveal className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold">{trbgCaseStudyContent.solution.heading}</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {trbgCaseStudyContent.solution.sections.map((section, index) => (
              <Reveal
                key={section.title}
                delay={index * 120}
                className="p-6 rounded-xl border border-slate bg-jamarq-black/40 space-y-4"
              >
                <h3 className="text-2xl font-semibold text-mist">{section.title}</h3>
                <ul className="space-y-3 text-jamarq-gray">
                  {section.items.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="text-jamarq-cyan">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32" aria-label="Results">
        <div className="max-w-5xl mx-auto px-5 md:px-10">
          <Reveal className="mb-10">
            <h2 className="text-3xl md:text-4xl font-semibold">{trbgCaseStudyContent.results.heading}</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {trbgCaseStudyContent.results.categories.map((category, index) => (
              <Reveal
                key={category.title}
                delay={index * 120}
                className="p-6 border border-slate rounded-xl bg-jamarq-black/40"
              >
                <h3 className="text-2xl font-semibold text-mist mb-4">{category.title}</h3>
                <ul className="space-y-3 text-jamarq-gray text-base">
                  {category.items.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="text-jamarq-cyan">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-steel" aria-label="Key takeaways">
        <Reveal className="max-w-4xl mx-auto px-5 md:px-10">
          <h2 className="text-3xl md:text-4xl font-semibold mb-8">{trbgCaseStudyContent.keyTakeaways.heading}</h2>
          <ul className="space-y-4 text-lg text-jamarq-gray leading-relaxed">
            {trbgCaseStudyContent.keyTakeaways.bullets.map((item) => (
              <li key={item} className="flex gap-4">
                <span className="text-jamarq-cyan">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      <section className="py-24 md:py-32" aria-label="Full case study">
        <Reveal className="max-w-4xl mx-auto text-center px-5 md:px-10">
          <h3 className="text-2xl md:text-3xl font-semibold mb-6">Want the full technical breakdown?</h3>
          <p className="text-lg text-jamarq-gray leading-relaxed mb-8 max-w-2xl mx-auto">
            A detailed breakdown of the architecture, admin workflows, and implementation is available on request.
          </p>
          <ContactModalTrigger
            prefill={{
              subject: "TRBG full case study request",
              source: "trbg-full-case-study",
              initialMessage: "I'd like to see the full Thunder Road Bar & Grill case study."
            }}
            className="inline-block bg-jamarq-cyan text-jamarq-black px-8 py-3 rounded-md font-semibold text-lg hover:bg-opacity-90 transition-all focus:outline-none focus:ring-2 focus:ring-jamarq-cyan focus:ring-offset-2 focus:ring-offset-jamarq-black"
          >
            Request Full Case Study
          </ContactModalTrigger>
        </Reveal>
      </section>

      <section className="py-16" aria-label="Navigation">
        <Reveal className="max-w-4xl mx-auto px-5 md:px-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 border-t border-slate pt-8">
            <Link
              href="/case-studies/mmh"
              className="text-jamarq-cyan hover:text-jamarq-magenta transition-colors font-semibold"
            >
              ← Previous: Midway Music Hall
            </Link>
            <Link
              href="/case-studies/mms"
              className="text-jamarq-cyan hover:text-jamarq-magenta transition-colors font-semibold"
            >
              Next: Midway Mobile Storage →
            </Link>
          </div>
        </Reveal>
      </section>

      <Footer />
    </main>
  );
}
