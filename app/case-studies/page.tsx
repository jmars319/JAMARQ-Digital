import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import { caseStudySummaries, caseStudyDisplayOrder } from "@/lib/caseStudySummaries";
import { ContactModalTrigger } from "@/components/contact/ContactModalTrigger";
import { FadeIn } from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Case Studies — JAMARQ Digital",
  description: "Public documentation of JAMARQ Digital builds: challenges, architecture decisions, performance proof, and ownership plans.",
  alternates: {
    canonical: "https://www.jamarq.digital/case-studies"
  },
  openGraph: {
    title: "Case Studies — JAMARQ Digital",
    description: "Detailed breakdowns of custom web systems with screenshots, PageSpeed data, and technical notes.",
    url: "https://www.jamarq.digital/case-studies",
    type: "website"
  }
};

export default function CaseStudiesPage() {
  const orderedCaseStudies = caseStudyDisplayOrder.map((key) => ({
    key,
    ...caseStudySummaries[key]
  }));

  const proofPoints = [
    { label: "Screenshots", value: "Full galleries per project" },
    { label: "Performance", value: "PageSpeed + Lighthouse data" },
    { label: "Ownership", value: "Infra + handoff documented" },
    { label: "Support", value: "Launch + maintenance details" }
  ];

  return (
    <main id="main-content" className="min-h-screen bg-jamarq-black text-jamarq-white">
      {/* Hero */}
      <section className="pt-32 pb-24" aria-label="Case studies hero">
        <div className="max-w-6xl mx-auto px-5 md:px-10 space-y-8">
          <div className="space-y-4 max-w-4xl">
            <p className="text-xs uppercase tracking-[0.35em] text-jamarq-gray">Case studies</p>
            <h1 className="text-4xl md:text-5xl font-semibold leading-tight">Documentation of real, shipped systems.</h1>
            <p className="text-lg text-jamarq-gray leading-relaxed">
              Each case study includes the challenge, approach, technical stack, and proofs—screenshots, PageSpeed reports, admin flows, and ownership notes. No fluff.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {proofPoints.map((point, index) => (
              <FadeIn key={point.label} delay={index * 100}>
                <div className="p-4 rounded-2xl border border-slate/60 bg-jamarq-black/30">
                  <p className="text-xs uppercase tracking-[0.3em] text-jamarq-gray">{point.label}</p>
                  <p className="text-base text-mist font-semibold">{point.value}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Case study grid */}
      <section className="py-24 md:py-32 bg-steel" aria-label="Case study grid">
        <div className="max-w-6xl mx-auto px-5 md:px-10 space-y-12">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-jamarq-gray mb-3">Live documentation</p>
              <h2 className="text-3xl md:text-4xl font-semibold">Explore the builds</h2>
              <p className="text-jamarq-gray max-w-3xl">
                These are public excerpts. If you need deeper architecture diagrams, admin flows, or QA notes, just ask—I have the full decks ready.
              </p>
            </div>
            <ContactModalTrigger
              prefill={{ subject: "Request deeper case study", source: "case-studies-hero" }}
              className="self-start inline-flex items-center text-sm font-semibold text-jamarq-cyan hover:text-jamarq-magenta transition-colors link-underline"
            >
              Request additional documentation →
            </ContactModalTrigger>
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
                  <h3 className="text-2xl font-semibold mb-3 group-hover:text-jamarq-cyan transition-colors">{study.title}</h3>
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

      {/* Private previews + CTA */}
      <section className="py-24 md:py-32" aria-label="Additional docs">
        <FadeIn className="max-w-5xl mx-auto px-5 md:px-10 rounded-3xl border border-slate/60 bg-jamarq-black/30 p-10 space-y-4">
          <p className="text-xs uppercase tracking-[0.3em] text-jamarq-gray">Need more?</p>
          <h2 className="text-3xl md:text-4xl font-semibold">Private previews and deeper dives.</h2>
          <p className="text-lg text-jamarq-gray leading-relaxed">
            Some work is NDA-restricted or still launching. I can share private screenshots, admin flows, monitoring dashboards, and technical breakdowns on a call.
          </p>
          <ContactModalTrigger
            prefill={{ subject: "Private case study preview", source: "case-studies-preview" }}
            className="inline-flex items-center bg-jamarq-cyan text-jamarq-black px-8 py-3 rounded-md font-semibold text-base hover:bg-opacity-90 transition-all focus:outline-none focus:ring-2 focus:ring-jamarq-cyan focus:ring-offset-2 focus:ring-offset-jamarq-black"
          >
            Request a private preview
          </ContactModalTrigger>
        </FadeIn>
      </section>

      <Footer />
    </main>
  );
}
