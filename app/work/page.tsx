import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import { caseStudySummaries, caseStudyDisplayOrder } from "@/lib/caseStudySummaries";
import { ContactModalTrigger } from "@/components/contact/ContactModalTrigger";
import { FadeIn } from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Work",
  description: "Selected work: custom websites, digital systems, and operational tooling built with proof-of-performance and owner-first infrastructure.",
  alternates: {
    canonical: "https://jamarq.digital/work"
  },
  openGraph: {
    title: "Work",
    description: "Selected work: custom websites, digital systems, and operational tooling built with proof-of-performance and owner-first infrastructure.",
    url: "https://jamarq.digital/work",
    type: "website",
    images: [
      {
        url: "https://jamarq.digital/og.jpg",
        width: 1200,
        height: 630,
        alt: "JAMARQ Digital"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Work",
    description: "Selected work: custom websites, digital systems, and operational tooling built with proof-of-performance and owner-first infrastructure.",
    images: ["https://jamarq.digital/og.jpg"],
    creator: "@jamarqdigital",
    site: "@jamarqdigital"
  }
};

export default function WorkPage() {
  const orderedCaseStudies = caseStudyDisplayOrder.map((key) => ({
    key,
    ...caseStudySummaries[key]
  }));

  const heroStats = [
    { label: "PageSpeed receipts", value: "Avg 97/100 desktop, 89/100 mobile (MMH, TRBG, MMS)" },
    { label: "Launch-to-first result", value: "Day 2 (MMH), Week 1 (TRBG), Day 16 (MMS)" },
    { label: "Scope", value: "Custom websites, owner-ready admin systems, mobile parity" },
    { label: "Stack", value: "Next.js, React, PHP APIs, Tailwind, SendGrid" }
  ];

  const highlights = [
    {
      title: "Proof on every project",
      copy: "Each case study includes screenshots, performance data, and technical notes—no vague promises."
    },
    {
      title: "Owner-first builds",
      copy: "You keep the stack, repo, hosting, and content. No subscriptions required to keep things running."
    },
    {
      title: "Operational focus",
      copy: "Public site, admin workflow, and supporting automations are designed together so decisions stay visible."
    }
  ];

  return (
    <main id="main-content" className="min-h-screen bg-jamarq-black text-jamarq-white">
      {/* Hero Section */}
      <section className="pt-32 pb-24" aria-label="Work hero">
        <div className="max-w-6xl mx-auto px-5 md:px-10 grid gap-12 md:grid-cols-[minmax(0,1fr)_320px] items-start">
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.35em] text-jamarq-gray">Selected work</p>
            <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
              Systems built for teams that want proof, not hype.
            </h1>
            <p className="text-lg text-jamarq-gray leading-relaxed">
              These projects combine custom UI, clean code, and operational tooling. Every build ships with PageSpeed data, accessibility checks, and a clear handoff so you stay in control.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <ContactModalTrigger
                prefill={{ subject: "Work inquiry", source: "work-hero" }}
                className="inline-flex items-center justify-center bg-jamarq-cyan text-jamarq-black px-8 py-3 rounded-md font-semibold text-base hover:bg-opacity-90 transition-all focus:outline-none focus:ring-2 focus:ring-jamarq-cyan focus:ring-offset-2 focus:ring-offset-jamarq-black"
              >
                Start a project
              </ContactModalTrigger>
              <Link
                href="/case-studies"
                className="inline-flex items-center justify-center border border-slate px-8 py-3 rounded-md font-semibold text-base text-jamarq-white hover:border-jamarq-cyan hover:text-jamarq-cyan transition-colors"
              >
                Browse all case studies →
              </Link>
            </div>
          </div>
          <div className="bg-jamarq-black/40 border border-slate/60 rounded-3xl p-6 space-y-5">
            <p className="text-xs uppercase tracking-[0.3em] text-jamarq-gray">Snapshot</p>
            <ul className="space-y-4">
              {heroStats.map((stat, index) => (
                <FadeIn key={stat.label} delay={index * 120}>
                  <li>
                    <p className="text-xs uppercase tracking-[0.2em] text-jamarq-gray">{stat.label}</p>
                    <p className="text-lg font-semibold text-mist">{stat.value}</p>
                  </li>
                </FadeIn>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Case Study Grid */}
      <section className="py-24 md:py-32 bg-steel" aria-label="Case study grid">
        <div className="max-w-6xl mx-auto px-5 md:px-10 space-y-12">
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.3em] text-jamarq-gray">Featured work</p>
            <h2 className="text-3xl md:text-4xl font-semibold">Recent builds</h2>
            <p className="text-jamarq-gray max-w-3xl">
              Every case study includes the problem, system design, performance proof, and ownership plan. Tap into the full write-ups for screenshots and technical notes.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {orderedCaseStudies.map((study, index) => (
              <FadeIn key={study.slug} delay={index * 120} className="h-full">
                <Link
                  href={`/case-studies/${study.slug}`}
                  aria-label={`${study.title} case study`}
                  className="group block h-full p-8 rounded-3xl border border-slate/60 bg-jamarq-black/30 hover:border-jamarq-cyan transition-all duration-300"
                >
                  <p className="text-xs uppercase tracking-[0.3em] text-jamarq-gray mb-3">{study.category}</p>
                  <h3 className="text-2xl font-semibold mb-4 group-hover:text-jamarq-cyan transition-colors">{study.title}</h3>
                  <p className="text-jamarq-gray text-sm leading-relaxed mb-6">{study.micro}</p>
                  <div className="flex items-center text-jamarq-cyan group-hover:text-jamarq-magenta transition-colors font-semibold">
                    View case study →
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-24 md:py-32" aria-label="Approach highlights">
        <div className="max-w-6xl mx-auto px-5 md:px-10 space-y-10">
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.3em] text-jamarq-gray">Approach</p>
            <h2 className="text-3xl md:text-4xl font-semibold">What every engagement includes</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlights.map((item, index) => (
              <FadeIn key={item.title} delay={index * 120}>
                <div className="p-6 rounded-2xl border border-slate/60 bg-jamarq-black/20 space-y-3">
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="text-jamarq-gray leading-relaxed">{item.copy}</p>
                </div>
              </FadeIn>
            ))}
          </div>
          <div className="rounded-3xl border border-slate/60 bg-jamarq-black/30 p-8 space-y-4">
            <h3 className="text-2xl font-semibold">Need private previews?</h3>
            <p className="text-jamarq-gray leading-relaxed">
              Some work is under NDA or still in rollout. If you need to see more, I’m happy to walk through private screenshots and architecture notes.
            </p>
            <ContactModalTrigger
              prefill={{ subject: "Private preview request", source: "work-previews" }}
              className="inline-flex items-center text-sm font-semibold text-jamarq-cyan hover:text-jamarq-magenta transition-colors"
            >
              Request a walkthrough →
            </ContactModalTrigger>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-steel" aria-label="Work CTA">
        <div className="max-w-5xl mx-auto px-5 md:px-10 rounded-3xl border border-slate/60 bg-jamarq-black/30 p-10 space-y-4">
          <p className="text-xs uppercase tracking-[0.3em] text-jamarq-gray">Next build</p>
          <h2 className="text-3xl md:text-4xl font-semibold">Let’s plan your project.</h2>
          <p className="text-lg text-jamarq-gray leading-relaxed">
            Tell me about the system you need. I’ll map the scope, timeline, and proof plan within one business day.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <ContactModalTrigger
              prefill={{ subject: "Work page inquiry", source: "work-cta" }}
              className="inline-flex items-center justify-center bg-jamarq-cyan text-jamarq-black px-8 py-3 rounded-md font-semibold text-base hover:bg-opacity-90 transition-all focus:outline-none focus:ring-2 focus:ring-jamarq-cyan focus:ring-offset-2 focus:ring-offset-steel"
            >
              Get in touch
            </ContactModalTrigger>
            <Link
              href="/process"
              className="link-underline inline-flex items-center justify-center border border-slate px-8 py-3 rounded-md font-semibold text-base text-jamarq-white hover:border-jamarq-cyan hover:text-jamarq-cyan transition-colors"
            >
              View the process
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
