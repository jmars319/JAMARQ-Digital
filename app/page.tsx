import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import {
  caseStudySummaries,
  caseStudyDisplayOrder,
  type CaseStudyKey
} from "@/lib/caseStudySummaries";
import { Reveal } from "@/components/Reveal";
import { ContactModalTrigger } from "@/components/contact/ContactModalTrigger";

export const metadata: Metadata = {
  title: { absolute: "JAMARQ Digital | Websites, Rebuilds & Web Systems | Winston-Salem" },
  description:
    "JAMARQ Digital builds websites that work, fixes the ones that do not, and creates the systems behind them. Based in Winston-Salem, serving independent businesses and established teams.",
  alternates: {
    canonical: "https://jamarq.digital/"
  },
  openGraph: {
    title: "JAMARQ Digital | Websites, Rebuilds & Web Systems | Winston-Salem",
    description:
      "JAMARQ Digital builds websites that work, fixes the ones that do not, and creates the systems behind them. Based in Winston-Salem, serving independent businesses and established teams.",
    url: "https://jamarq.digital/",
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
    title: "JAMARQ Digital | Websites, Rebuilds & Web Systems | Winston-Salem",
    description:
      "JAMARQ Digital builds websites that work, fixes the ones that do not, and creates the systems behind them. Based in Winston-Salem, serving independent businesses and established teams.",
    images: ["https://jamarq.digital/og.jpg"],
    creator: "@jamarqdigital",
    site: "@jamarqdigital"
  }
};

type WorkCardContent = {
  problem: string;
  completed: string;
  outcome: string;
};

type ProofCard = {
  label: string;
  value: string;
  copy: string;
};

type ReasonCard = {
  title: string;
  copy: string;
};

type ProcessStep = {
  title: string;
  copy: string;
};

const recentProof: ProofCard[] = [
  {
    label: "Midway Music Hall",
    value: "First reserved seating request in 2 days",
    copy: "Custom venue site, seating workflow, and admin system built around live operations."
  },
  {
    label: "Thunder Road Bar & Grill",
    value: "Load times cut to under 1.5 seconds",
    copy: "Restaurant rebuild with clearer menus, better mobile performance, and simpler weekly updates."
  },
  {
    label: "Midway Mobile Storage",
    value: "First online quote in 16 days",
    copy: "Full rebuild with inventory controls, quote workflow, and owner-friendly admin tools."
  }
];

const whatWeDo = [
  {
    title: "Websites",
    copy: "New builds with clear structure, strong performance, and code that stays maintainable."
  },
  {
    title: "Rebuilds",
    copy: "Replacing outdated sites, vendor lock-in, or unstable setups with something cleaner."
  },
  {
    title: "Systems",
    copy: "Admin tools, workflows, and the systems behind the site."
  }
];

const whoWeWorkWith = [
  {
    title: "Independent businesses",
    points: [
      "Need something that works",
      "Want clarity and reliability",
      "Prefer minimal complexity"
    ]
  },
  {
    title: "Established teams",
    points: [
      "Need structured builds or rebuilds",
      "Have real operational requirements",
      "Need systems that scale and hold up"
    ]
  }
];

const whyJamarq: ReasonCard[] = [
  {
    title: "Built to stay manageable",
    copy: "The work should still make sense when you are running it later."
  },
  {
    title: "Complexity is used carefully",
    copy: "If a simpler stack will do the job well, that is usually the better choice."
  },
  {
    title: "Rebuilds are treated like system work",
    copy: "Broken sites usually point to deeper structural problems, not just design issues."
  },
  {
    title: "Direct communication",
    copy: "You talk directly to the person doing the work, so scope, tradeoffs, and updates stay clear."
  },
  {
    title: "Process without theater",
    copy: "Enough structure to reduce risk, without unnecessary ceremony."
  },
  {
    title: "Ownership stays clear",
    copy: "Code, hosting, content, and responsibilities are defined plainly before handoff."
  }
];

const pricingTiers = [
  {
    title: "Foundational Work",
    description: "Simple builds and smaller rebuilds",
    price: "$2,000 – $5,000"
  },
  {
    title: "Structured Builds",
    description: "Multi-page sites and moderate complexity",
    price: "$5,000 – $12,000"
  },
  {
    title: "Rebuilds & Systems",
    description: "Complex rebuilds, admin systems, migrations",
    price: "$10,000 – $25,000+"
  },
  {
    title: "Ongoing Work",
    description: "Maintenance and long-term support",
    price: "Scoped or monthly"
  }
];

const processSteps: ProcessStep[] = [
  {
    title: "Understand the problem",
    copy: "Review the current setup, requirements, and constraints before promising a solution."
  },
  {
    title: "Define the scope",
    copy: "Set the deliverables, timeline, and responsibilities clearly before build work starts."
  },
  {
    title: "Build and verify",
    copy: "Ship the work carefully and test the details that affect reliability, performance, and usability."
  },
  {
    title: "Launch",
    copy: "Move the site live in a controlled way with the right checks in place."
  },
  {
    title: "Support if needed",
    copy: "Stay available for follow-up fixes, maintenance, or longer-term support."
  }
];

const workCardContent: Record<CaseStudyKey, WorkCardContent> = {
  mmh: {
    problem:
      "The venue needed a modern public site and seating workflow without relying on third-party ticketing software.",
    completed:
      "Built a custom website, secure admin workspace, seating layouts, reservation flow, and automated notifications.",
    outcome:
      "The system now matches venue operations, and the first reserved seating request came in two days after launch."
  },
  trbg: {
    problem:
      "The restaurant's previous vendor-run site was slow, restrictive, and hard to update week to week.",
    completed:
      "Rebuilt the site with a clearer menu experience, stronger mobile performance, and a simple admin workflow for ongoing updates.",
    outcome:
      "The owners can manage content directly, and load times dropped from roughly 4 to 6 seconds to under 1.5 seconds."
  },
  mms: {
    problem:
      "The old site was barebones, slow, and could not collect quote requests without a phone call.",
    completed:
      "Built a full rebuild with inventory controls, a custom quote workflow, and owner-friendly admin tools.",
    outcome:
      "Customers can request quotes online, the site reached a 98/100 desktop PageSpeed score, and the first online quote arrived 16 days after launch."
  }
};

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "JAMARQ Digital",
    url: "https://jamarq.digital/",
    email: "hello@jamarq.digital",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Winston-Salem",
      addressRegion: "NC",
      addressCountry: "US"
    },
    areaServed: [
      {
        "@type": "City",
        name: "Winston-Salem"
      },
      {
        "@type": "State",
        name: "North Carolina"
      },
      {
        "@type": "Country",
        name: "United States"
      }
    ],
    serviceType: ["Websites", "Website rebuilds", "Web systems"]
  };

  const breadcrumbStructuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://jamarq.digital/"
      }
    ]
  };

  const orderedWork = caseStudyDisplayOrder.map((key) => ({
    ...caseStudySummaries[key],
    ...workCardContent[key]
  }));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }}
      />
      <main id="main-content" className="min-h-screen bg-jamarq-black text-jamarq-white">
        <section className="pt-32 pb-24 md:pb-32" aria-label="Hero">
          <div className="max-w-6xl mx-auto px-5 md:px-10 grid gap-10 md:gap-12 md:grid-cols-[minmax(0,1fr)_340px] items-start">
            <div className="space-y-6">
              <p className="text-xs uppercase tracking-[0.4em] text-jamarq-gray">JAMARQ Digital</p>
              <h1 className="text-4xl md:text-5xl font-semibold leading-tight max-w-4xl">
                We build websites that work, fix the ones that don&apos;t, and create the systems behind them.
              </h1>
              <p className="text-lg md:text-xl text-mist leading-relaxed max-w-3xl">
                JAMARQ Digital works with independent businesses and established teams, building
                websites, rebuilds, and web systems to match the actual complexity of the work.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <ContactModalTrigger
                  prefill={{ subject: "New project inquiry", source: "home-hero" }}
                  className="inline-flex items-center justify-center bg-jamarq-cyan text-jamarq-black px-8 py-3 rounded-md font-semibold text-base hover:bg-opacity-90 transition-all focus:outline-none focus:ring-2 focus:ring-jamarq-cyan focus:ring-offset-2 focus:ring-offset-jamarq-black"
                >
                  Start a Project
                </ContactModalTrigger>
                <Link
                  href="#work"
                  className="inline-flex items-center justify-center border border-slate px-8 py-3 rounded-md font-semibold text-base text-jamarq-white hover:border-jamarq-cyan hover:text-jamarq-cyan transition-colors"
                >
                  View Work
                </Link>
              </div>
              <p className="text-sm text-jamarq-gray">
                No inflated packages. No unnecessary complexity. Just systems that hold up.
              </p>
            </div>
            <aside className="bg-jamarq-black/40 border border-slate/60 rounded-3xl p-6 space-y-5">
              <div className="space-y-2">
                <p className="text-xs uppercase tracking-[0.3em] text-jamarq-gray">Recent proof</p>
                <p className="text-sm text-jamarq-gray leading-relaxed">
                  Real outcomes from current client work.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-3 md:grid-cols-1">
                {recentProof.map((item, index) => (
                  <Reveal key={item.label} delay={index * 100} className="h-full">
                    <div className="h-full rounded-2xl border border-slate/60 bg-jamarq-black/20 p-4 space-y-2">
                      <p className="text-xs uppercase tracking-[0.2em] text-jamarq-gray">
                        {item.label}
                      </p>
                      <p className="text-base font-semibold text-mist leading-snug">{item.value}</p>
                      <p className="text-sm text-jamarq-gray leading-relaxed">{item.copy}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
              <Link
                href="/case-studies"
                className="inline-flex items-center text-sm font-semibold text-jamarq-cyan hover:text-jamarq-magenta transition-colors"
              >
                Read the case studies →
              </Link>
            </aside>
          </div>
        </section>

        <section className="py-24 md:py-32 bg-steel" aria-labelledby="what-we-do-heading">
          <div className="max-w-6xl mx-auto px-5 md:px-10 space-y-10">
            <div className="max-w-3xl space-y-3">
              <p className="text-xs uppercase tracking-[0.3em] text-jamarq-gray">What we do</p>
              <h2 id="what-we-do-heading" className="text-3xl md:text-4xl font-semibold">
                Website builds, rebuilds, and the systems behind them.
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {whatWeDo.map((item, index) => (
                <Reveal key={item.title} delay={index * 120} className="h-full">
                  <div className="h-full p-6 rounded-2xl border border-slate/60 bg-jamarq-black/30 space-y-3">
                    <h3 className="text-2xl font-semibold">{item.title}</h3>
                    <p className="text-jamarq-gray leading-relaxed">{item.copy}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 md:py-32" aria-labelledby="who-we-work-with-heading">
          <div className="max-w-6xl mx-auto px-5 md:px-10 space-y-10">
            <div className="max-w-3xl space-y-3">
              <p className="text-xs uppercase tracking-[0.3em] text-jamarq-gray">
                Who we work with
              </p>
              <h2
                id="who-we-work-with-heading"
                className="text-3xl md:text-4xl font-semibold"
              >
                Different projects, same need for clarity.
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {whoWeWorkWith.map((group, index) => (
                <Reveal key={group.title} delay={index * 120} className="h-full">
                  <article className="h-full p-6 rounded-2xl border border-slate/60 bg-jamarq-black/20 space-y-5">
                    <h3 className="text-2xl font-semibold">{group.title}</h3>
                    <ul className="space-y-3 text-jamarq-gray">
                      {group.points.map((point) => (
                        <li key={point} className="flex gap-3">
                          <span className="text-jamarq-cyan">•</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 md:py-32 bg-steel" aria-labelledby="why-jamarq-heading">
          <div className="max-w-6xl mx-auto px-5 md:px-10 space-y-10">
            <div className="max-w-3xl space-y-3">
              <p className="text-xs uppercase tracking-[0.3em] text-jamarq-gray">Why JAMARQ</p>
              <h2 id="why-jamarq-heading" className="text-3xl md:text-4xl font-semibold">
                Built to hold up after launch.
              </h2>
            </div>
            <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {whyJamarq.map((point, index) => (
                <li key={point.title} className="h-full">
                  <Reveal delay={index * 90} className="h-full">
                    <div className="h-full p-5 rounded-2xl border border-slate/60 bg-jamarq-black/30 space-y-3">
                      <h3 className="text-xl font-semibold">{point.title}</h3>
                      <p className="text-jamarq-gray leading-relaxed">{point.copy}</p>
                    </div>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="work" className="scroll-mt-28 py-24 md:py-32" aria-labelledby="work-heading">
          <div className="max-w-6xl mx-auto px-5 md:px-10 space-y-12">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <div className="max-w-3xl space-y-3">
                <p className="text-xs uppercase tracking-[0.3em] text-jamarq-gray">Work</p>
                <h2 id="work-heading" className="text-3xl md:text-4xl font-semibold">
                  Recent projects
                </h2>
                <p className="text-jamarq-gray leading-relaxed">
                  Selected work across business sites, rebuilds, and more operational systems.
                  Each card covers the problem, the build, and the outcome.
                </p>
              </div>
              <Link
                href="/case-studies"
                className="link-underline text-sm font-semibold text-jamarq-cyan"
              >
                View all case studies
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {orderedWork.map((study, index) => (
                <Reveal key={study.slug} delay={index * 120} className="h-full">
                  <article className="h-full p-6 rounded-3xl border border-slate/60 bg-jamarq-black/30 hover:border-jamarq-cyan transition-colors flex flex-col gap-5">
                    <div className="space-y-3">
                      <h3 className="text-2xl font-semibold">{study.title}</h3>
                    </div>
                    <div className="space-y-4 text-sm leading-relaxed">
                      <div className="space-y-1 border-t border-slate/60 pt-4">
                        <p className="text-xs uppercase tracking-[0.25em] text-jamarq-gray">
                          Problem
                        </p>
                        <p className="text-jamarq-gray">{study.problem}</p>
                      </div>
                      <div className="space-y-1 border-t border-slate/60 pt-4">
                        <p className="text-xs uppercase tracking-[0.25em] text-jamarq-gray">
                          What was done
                        </p>
                        <p className="text-jamarq-gray">{study.completed}</p>
                      </div>
                      <div className="rounded-2xl border border-slate/60 bg-jamarq-black/20 px-4 py-4 space-y-1">
                        <p className="text-xs uppercase tracking-[0.25em] text-jamarq-gray">
                          Outcome
                        </p>
                        <p className="text-mist">{study.outcome}</p>
                      </div>
                    </div>
                    <Link
                      href={`/case-studies/${study.slug}`}
                      className="mt-auto inline-flex items-center text-sm font-semibold text-jamarq-cyan hover:text-jamarq-magenta transition-colors"
                    >
                      View case study →
                    </Link>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="pricing" className="scroll-mt-28 py-24 md:py-32 bg-steel" aria-labelledby="pricing-heading">
          <div className="max-w-6xl mx-auto px-5 md:px-10 space-y-10">
            <div className="max-w-3xl space-y-3">
              <p className="text-xs uppercase tracking-[0.3em] text-jamarq-gray">Pricing</p>
              <h2 id="pricing-heading" className="text-3xl md:text-4xl font-semibold">
                Pricing
              </h2>
              <p className="text-jamarq-gray leading-relaxed">
                Every project is scoped based on real complexity. These ranges reflect where most
                work falls.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {pricingTiers.map((tier, index) => (
                <Reveal key={tier.title} delay={index * 100} className="h-full">
                  <article className="h-full p-6 rounded-2xl border border-slate/60 bg-jamarq-black/30 space-y-3">
                    <h3 className="text-2xl font-semibold">{tier.title}</h3>
                    <p className="text-jamarq-gray leading-relaxed">{tier.description}</p>
                    <p className="text-xl font-semibold text-mist">{tier.price}</p>
                  </article>
                </Reveal>
              ))}
            </div>
            <p className="text-sm text-jamarq-gray">
              Pricing depends on scope, content, integrations, and whether the work is new or a
              rebuild.
            </p>
          </div>
        </section>

        <section id="process" className="scroll-mt-28 py-24 md:py-32" aria-labelledby="process-heading">
          <div className="max-w-6xl mx-auto px-5 md:px-10 space-y-10">
            <div className="max-w-3xl space-y-3">
              <p className="text-xs uppercase tracking-[0.3em] text-jamarq-gray">Process</p>
              <h2 id="process-heading" className="text-3xl md:text-4xl font-semibold">
                Lean enough to stay readable. Structured enough to reduce risk.
              </h2>
            </div>
            <ol className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-6">
              {processSteps.map((step, index) => (
                <li key={step.title} className="h-full">
                  <Reveal delay={index * 90} className="h-full">
                    <div className="h-full p-5 rounded-2xl border border-slate/60 bg-jamarq-black/20">
                      <div className="grid grid-cols-[48px_1fr] gap-4 xl:grid-cols-1 xl:gap-3">
                        <p className="text-3xl font-semibold text-jamarq-cyan">
                          {String(index + 1).padStart(2, "0")}
                        </p>
                        <div className="space-y-2">
                          <h3 className="text-lg font-semibold">{step.title}</h3>
                          <p className="text-jamarq-gray leading-relaxed text-sm">{step.copy}</p>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="py-24 md:py-32 bg-steel" aria-labelledby="final-cta-heading">
          <div className="max-w-5xl mx-auto px-5 md:px-10 rounded-3xl border border-slate/60 bg-jamarq-black/30 p-10 md:p-16 space-y-4">
            <p className="text-xs uppercase tracking-[0.3em] text-jamarq-gray">Start a Project</p>
            <h2 id="final-cta-heading" className="text-3xl md:text-4xl font-semibold">
              Start a Project
            </h2>
            <p className="text-lg text-jamarq-gray leading-relaxed max-w-3xl">
              If you know what you need or just know something isn&apos;t working, we can figure it
              out.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <ContactModalTrigger
                prefill={{ subject: "Project inquiry", source: "home-cta" }}
                className="inline-flex items-center justify-center bg-jamarq-cyan text-jamarq-black px-8 py-3 rounded-md font-semibold text-base hover:bg-opacity-90 transition-all focus:outline-none focus:ring-2 focus:ring-jamarq-cyan focus:ring-offset-2 focus:ring-offset-steel"
              >
                Start a Project
              </ContactModalTrigger>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center border border-slate px-8 py-3 rounded-md font-semibold text-base text-jamarq-white hover:border-jamarq-cyan hover:text-jamarq-cyan transition-colors"
              >
                Contact Options
              </Link>
            </div>
            <p className="text-sm text-jamarq-gray">A rough brief is fine. Clear next steps are part of the job.</p>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
