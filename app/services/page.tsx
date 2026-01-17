import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import { ContactModalTrigger } from "@/components/contact/ContactModalTrigger";
import { FadeIn } from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Services",
  description: "Custom websites, operational web systems, and ongoing support for teams based in Winston-Salem and working nationwide.",
  alternates: {
    canonical: "https://jamarq.digital/services"
  },
  openGraph: {
    title: "Services",
    description: "Custom websites, operational web systems, and ongoing support for teams based in Winston-Salem and working nationwide.",
    url: "https://jamarq.digital/services",
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
    title: "Services",
    description: "Custom websites, operational web systems, and ongoing support for teams based in Winston-Salem and working nationwide.",
    images: ["https://jamarq.digital/og.jpg"],
    creator: "@jamarqdigital",
    site: "@jamarqdigital"
  }
};

export default function ServicesPage() {
  const serviceStructuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Custom Websites and Digital Systems",
    provider: {
      "@type": "Organization",
      name: "JAMARQ Digital",
      url: "https://jamarq.digital"
    },
    areaServed: {
      "@type": "Place",
      name: "Winston-Salem, NC"
    },
    serviceType: [
      "Custom websites",
      "Digital systems",
      "Operational tooling",
      "Ongoing support"
    ]
  };

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What’s included in a typical build?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Discovery, architecture, design, development, performance and accessibility validation, plus a launch handoff with documentation."
        }
      },
      {
        "@type": "Question",
        name: "Do you work outside Winston-Salem?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. JAMARQ is based in Winston-Salem and works with teams nationwide."
        }
      },
      {
        "@type": "Question",
        name: "Who owns the code and hosting?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You do. You keep the stack, hosting, and data after launch."
        }
      }
    ]
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
        "name": "Services",
        "item": "https://jamarq.digital/services"
      }
    ]
  };

  const serviceLines = [
    {
      title: "Custom Websites",
      description:
        "Hand-built marketing sites, product experiences, and content hubs. Zero templates or page builders.",
      items: [
        "Responsive layout system",
        "Performance + accessibility budgets",
        "SEO-ready content model",
        "Animation + interaction polish",
        "Technical documentation"
      ]
    },
    {
      title: "Digital Systems & Integrations",
      description:
        "Quote workflows, dashboards, inventory systems, and admin tooling that mirror real operations. Automation supports the team, not the other way around.",
      items: [
        "Architecture & workflow mapping",
        "API / CMS integrations",
        "Automation + notifications",
        "Deployment + hosting strategy",
        "Content management tooling"
      ]
    },
    {
      title: "Maintenance & Support",
      description:
        "Monitoring, updates, analytics checks, and fractional consulting after launch.",
      items: [
        "Performance + uptime monitoring",
        "Security + dependency updates",
        "Content + copy adjustments",
        "Support queue for minor fixes",
        "Quarterly optimization reviews"
      ]
    }
  ];

  const engagementPillars = [
    {
      number: "01",
      title: "Discovery & Architecture",
      copy: "Requirements, constraints, and success metrics. I map content structures, workflows, and system diagrams before writing code, with your signoff."
    },
    {
      number: "02",
      title: "Build & Validation",
      copy: "Intentional design, copy, and development loops. Each feature is validated against performance budgets and accessibility rules."
    },
    {
      number: "03",
      title: "Launch & Support",
      copy: "Structured launch checklist, documentation, and a support window. Maintenance plans keep the system healthy once you’re live."
    }
  ];

  const differentiators = [
    "No templates or page builders. Everything is custom to your stack and workflow.",
    "Owner-first infrastructure so you control hosting, domains, and data.",
    "Performance and SEO proof included—PageSpeed, accessibility, and Lighthouse data.",
    "Direct communication with me. No account managers or multi-layer approvals.",
    "Systems-first thinking. The site, admin, and workflows are designed together so decisions stay transparent.",
    "Long-term reliability. Clean code, documentation, and maintenance options."
  ];

  const snapshot = [
    { label: "Average timeline", value: "4–8 weeks" },
    { label: "Typical budget", value: "$4k – $15k" },
    { label: "Stack", value: "Next.js, React, PHP, custom APIs" },
    { label: "Launch support", value: "30-day included window" }
  ];

  return (
    <main id="main-content" className="min-h-screen bg-jamarq-black text-jamarq-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceStructuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }}
      />
      {/* Hero Section */}
      <section className="pt-32 pb-24" aria-label="Services hero">
        <div className="max-w-6xl mx-auto px-5 md:px-10 grid gap-12 md:grid-cols-[minmax(0,1fr)_320px] items-start">
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.35em] text-jamarq-gray">Services</p>
            <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
              Digital systems built for clarity, long-term ownership, and human oversight.
            </h1>
            <p className="text-lg text-jamarq-gray leading-relaxed">
              Web experiences, admin tooling, and workflows designed around how your business actually operates, with you as the author. No templates, no throwaway builds—just intentional software.
            </p>
            <p className="text-sm text-jamarq-gray">
              Based in Winston-Salem, serving teams nationwide. <Link href="/mission" className="link-underline text-jamarq-cyan">Read the mission</Link>
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <ContactModalTrigger
                prefill={{ subject: "Service inquiry", source: "services-hero" }}
                className="inline-flex items-center justify-center bg-jamarq-cyan text-jamarq-black px-8 py-3 rounded-md font-semibold text-base hover:bg-opacity-90 transition-all focus:outline-none focus:ring-2 focus:ring-jamarq-cyan focus:ring-offset-2 focus:ring-offset-jamarq-black"
              >
                Start a project
              </ContactModalTrigger>
              <Link
                href="/work"
                className="link-underline inline-flex items-center justify-center border border-slate px-8 py-3 rounded-md font-semibold text-base text-jamarq-white hover:border-jamarq-cyan hover:text-jamarq-cyan transition-colors"
              >
                See recent work →
              </Link>
            </div>
          </div>
          <div className="bg-jamarq-black/40 border border-slate/60 rounded-3xl p-6 space-y-5">
            <p className="text-xs uppercase tracking-[0.3em] text-jamarq-gray">Snapshot</p>
            <ul className="space-y-4">
              {snapshot.map((item, index) => (
                <li key={item.label}>
                  <FadeIn delay={index * 120}>
                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-jamarq-gray">{item.label}</p>
                      <p className="text-lg font-semibold text-mist">{item.value}</p>
                    </div>
                  </FadeIn>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-24 md:py-32 bg-steel" aria-label="Core services">
        <div className="max-w-6xl mx-auto px-5 md:px-10 space-y-10">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-jamarq-gray mb-3">Service lines</p>
            <h2 className="text-3xl md:text-4xl font-semibold">How I can help</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {serviceLines.map((service, index) => (
              <FadeIn key={service.title} delay={index * 120} className="h-full">
                <div className="h-full p-6 rounded-2xl border border-slate/60 bg-jamarq-black/30 space-y-4">
                  <h3 className="text-2xl font-semibold">{service.title}</h3>
                  <p className="text-jamarq-gray leading-relaxed">{service.description}</p>
                  <ul className="space-y-2 text-sm text-jamarq-gray">
                    {service.items.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="text-jamarq-cyan">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  {service.title === "Maintenance & Support" && (
                    <Link href="/maintenance" className="link-underline inline-flex text-sm font-semibold text-jamarq-cyan">
                      View maintenance plans →
                    </Link>
                  )}
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={360}>
            <div className="flex flex-col md:flex-row md:items-center gap-4 p-6 rounded-2xl border border-slate/60 bg-jamarq-black/40">
              <div className="flex items-center gap-3">
                <Image
                  src="/assets/logos/tenra-logo-light.png"
                  alt="Tenra"
                  width={40}
                  height={40}
                  className="h-10 w-10 object-contain"
                />
                <p className="text-xs uppercase tracking-[0.3em] text-jamarq-gray">Smaller scope?</p>
              </div>
              <p className="text-sm md:text-base text-jamarq-gray flex-1">
                For smaller, static-first websites with a simple handoff, see Tenra.
              </p>
              <a
                href="https://tenra.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline inline-flex items-center justify-center text-sm font-semibold text-jamarq-cyan focus:outline-none focus:ring-2 focus:ring-jamarq-cyan focus:ring-offset-2 focus:ring-offset-steel"
              >
                Tenra →
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Engagement structure */}
      <section className="py-24 md:py-32" aria-label="Engagement structure">
        <div className="max-w-6xl mx-auto px-5 md:px-10 space-y-12">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-jamarq-gray mb-3">Engagement roadmap</p>
            <h2 className="text-3xl md:text-4xl font-semibold">What the build includes</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {engagementPillars.map((pillar, index) => (
              <FadeIn key={pillar.number} delay={index * 120} className="h-full">
                <div className="h-full p-6 rounded-2xl border border-slate/60 bg-jamarq-black/20 space-y-3">
                  <p className="text-jamarq-cyan text-3xl font-semibold">{pillar.number}</p>
                  <h3 className="text-2xl font-semibold">{pillar.title}</h3>
                  <p className="text-jamarq-gray leading-relaxed">{pillar.copy}</p>
                </div>
              </FadeIn>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {differentiators.map((point, index) => (
              <FadeIn key={point} delay={index * 80} className="h-full">
                <div className="h-full p-6 rounded-2xl border border-slate/40 bg-jamarq-black/10">
                  <p className="text-jamarq-gray leading-relaxed">{point}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 md:py-32 bg-steel" aria-label="Pricing philosophy">
        <div className="max-w-6xl mx-auto px-5 md:px-10 grid gap-12 md:grid-cols-2">
          <FadeIn className="space-y-4">
            <p className="text-xs uppercase tracking-[0.3em] text-jamarq-gray mb-2">Pricing</p>
            <h2 className="text-3xl md:text-4xl font-semibold">Transparent, scoped, and predictable.</h2>
            <p className="text-jamarq-gray leading-relaxed">
              Every engagement starts with an itemized estimate—deliverables, timeline, and payment schedule. No retainers without scope, no vague ranges after kickoff.
            </p>
            <p className="text-xl text-mist font-semibold">Most website projects land between $4,000 and $15,000.</p>
            <p className="text-jamarq-gray leading-relaxed">
              Maintenance plans start at $150/mo and scale with site complexity and support requirements.
            </p>
          </FadeIn>
          <FadeIn className="p-6 rounded-2xl border border-slate/60 bg-jamarq-black/20 space-y-4" delay={120}>
            <h3 className="text-2xl font-semibold">What impacts price</h3>
            <ul className="space-y-3 text-jamarq-gray">
              <li className="flex gap-3">
                <span className="text-jamarq-cyan">•</span>
                <span>Number of unique templates, integrations, and content types.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-jamarq-cyan">•</span>
                <span>Complexity of workflows, automations, or admin tooling.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-jamarq-cyan">•</span>
                <span>Timeline constraints or phased releases.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-jamarq-cyan">•</span>
                <span>Ongoing support expectations after launch.</span>
              </li>
            </ul>
          </FadeIn>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 md:py-32" aria-label="Services FAQ">
        <div className="max-w-5xl mx-auto px-5 md:px-10 space-y-10">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-jamarq-gray mb-3">FAQ</p>
            <h2 className="text-3xl md:text-4xl font-semibold">Service FAQ</h2>
          </div>
          <div className="space-y-6">
            <div className="p-6 rounded-2xl border border-slate/60 bg-jamarq-black/20">
              <h3 className="text-xl font-semibold mb-2">What’s included in a typical build?</h3>
              <p className="text-jamarq-gray leading-relaxed">
                Discovery, architecture, design, development, performance and accessibility validation, plus a launch handoff with documentation.
              </p>
            </div>
            <div className="p-6 rounded-2xl border border-slate/60 bg-jamarq-black/20">
              <h3 className="text-xl font-semibold mb-2">Do you work outside Winston-Salem?</h3>
              <p className="text-jamarq-gray leading-relaxed">
                Yes. JAMARQ is based in Winston-Salem and works with teams nationwide.
              </p>
            </div>
            <div className="p-6 rounded-2xl border border-slate/60 bg-jamarq-black/20">
              <h3 className="text-xl font-semibold mb-2">Who owns the code and hosting?</h3>
              <p className="text-jamarq-gray leading-relaxed">
                You do. You keep the stack, hosting, and data after launch.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32" aria-label="Contact call-to-action">
        <div className="max-w-4xl mx-auto text-center px-5 md:px-10">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">Ready to start?</h2>
          <p className="text-lg text-jamarq-gray leading-relaxed mb-8">Let’s talk about your project.</p>
          <div className="space-y-4">
            <ContactModalTrigger
              prefill={{ subject: "Services inquiry", source: "services-cta" }}
              className="inline-block bg-jamarq-cyan text-jamarq-black px-8 py-3 rounded-md font-semibold text-lg hover:bg-opacity-90 transition-all focus:outline-none focus:ring-2 focus:ring-jamarq-cyan focus:ring-offset-2 focus:ring-offset-jamarq-black"
            >
              Get in Touch
            </ContactModalTrigger>
            <p className="text-sm text-jamarq-gray">
              Want to see how I work? <Link href="/process" className="link-underline text-jamarq-cyan">View the full process</Link>
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
