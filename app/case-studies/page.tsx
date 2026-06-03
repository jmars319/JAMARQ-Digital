import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import { listCaseStudySummaries } from "@/lib/content-repository";
import { ContactModalTrigger } from "@/components/contact/ContactModalTrigger";
import { Reveal } from "@/components/Reveal";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Case Studies",
  description: "Public case studies documenting the problem, build, and outcome across JAMARQ websites, rebuilds, and web systems.",
  alternates: {
    canonical: "https://jamarq.digital/case-studies"
  },
  openGraph: {
    title: "Case Studies",
    description: "Detailed breakdowns of JAMARQ websites, rebuilds, and web systems with screenshots and technical notes.",
    url: "https://jamarq.digital/case-studies",
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
    title: "Case Studies",
    description: "Detailed breakdowns of JAMARQ websites, rebuilds, and web systems with screenshots and technical notes.",
    images: ["https://jamarq.digital/og.jpg"],
    creator: "@jamarqdigital",
    site: "@jamarqdigital"
  }
};

export default async function CaseStudiesPage() {
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
      }
    ]
  };

  const orderedCaseStudies = await listCaseStudySummaries();

  const proofPoints = [
    { label: "Screenshots", value: "Full galleries per project" },
    { label: "Performance", value: "PageSpeed + Lighthouse data" },
    { label: "Private ops", value: "Summarized without exposed records" },
    { label: "Launch notes", value: "Handoff + support details" }
  ];

  return (
    <main id="main-content" className="min-h-screen bg-jamarq-black text-jamarq-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }}
      />
      {/* Hero */}
      <section className="pt-32 pb-24" aria-label="Case studies hero">
        <div className="max-w-6xl mx-auto px-5 md:px-10 space-y-8">
          <div className="space-y-4 max-w-4xl">
            <p className="text-xs uppercase tracking-[0.35em] text-jamarq-gray">Case studies</p>
            <h1 className="text-4xl md:text-5xl font-semibold leading-tight">Documentation of real websites, rebuilds, and web systems.</h1>
            <p className="text-lg text-jamarq-gray leading-relaxed">
              Each case study covers the challenge, the build, and the technical details: public screenshots where available, PageSpeed checks, privacy-safe operational summaries, and handoff notes. No fluff, no missing steps.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {proofPoints.map((point, index) => (
              <Reveal key={point.label} delay={index * 100}>
                <div className="p-4 rounded-2xl border border-slate/60 bg-jamarq-black/30">
                  <p className="text-xs uppercase tracking-[0.3em] text-jamarq-gray">{point.label}</p>
                  <p className="text-base text-mist font-semibold">{point.value}</p>
                </div>
              </Reveal>
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
                These are public excerpts. If you need architecture notes, admin flows, or QA details, ask and JAMARQ can walk you through them.
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
              <Reveal key={study.slug} delay={index * 120} className="h-full">
                <Link
                  href={`/case-studies/${study.slug}`}
                  aria-label={`${study.title} case study`}
                  className="group block h-full p-8 rounded-3xl border border-slate/60 bg-jamarq-black/30 hover:border-jamarq-cyan transition-all duration-300"
                >
                  <h3 className="text-2xl font-semibold mb-3 group-hover:text-jamarq-cyan transition-colors">{study.title}</h3>
                  <p className="text-jamarq-gray text-sm leading-relaxed mb-6">{study.micro}</p>
                  <div className="flex items-center text-jamarq-cyan group-hover:text-jamarq-magenta transition-colors font-semibold">
                    View case study →
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Private previews + CTA */}
      <section className="py-24 md:py-32" aria-label="Additional docs">
        <Reveal className="max-w-5xl mx-auto px-5 md:px-10 rounded-3xl border border-slate/60 bg-jamarq-black/30 p-10 space-y-4">
          <p className="text-xs uppercase tracking-[0.3em] text-jamarq-gray">Private previews</p>
          <h2 className="text-3xl md:text-4xl font-semibold">Private previews available.</h2>
          <p className="text-lg text-jamarq-gray leading-relaxed">
            Some work is under NDA or still rolling out. We can share private screenshots, admin flows, and technical walkthroughs on a call.
          </p>
          <ContactModalTrigger
            prefill={{ subject: "Private case study preview", source: "case-studies-preview" }}
            className="inline-flex items-center bg-jamarq-cyan text-jamarq-black px-8 py-3 rounded-md font-semibold text-base hover:bg-opacity-90 transition-all focus:outline-none focus:ring-2 focus:ring-jamarq-cyan focus:ring-offset-2 focus:ring-offset-jamarq-black"
          >
            Request a private preview
          </ContactModalTrigger>
        </Reveal>
      </section>

      <Footer />
    </main>
  );
}
