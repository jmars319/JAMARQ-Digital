import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import { ContactModalTrigger } from "@/components/contact/ContactModalTrigger";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Process",
  description: "A clear process for scoping, building, launching, and supporting JAMARQ projects.",
  alternates: {
    canonical: "https://jamarq.digital/process"
  },
  openGraph: {
    title: "Process",
    description: "A clear process for scoping, building, launching, and supporting JAMARQ projects.",
    url: "https://jamarq.digital/process",
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
    title: "Process",
    description: "A clear process for scoping, building, launching, and supporting JAMARQ projects.",
    images: ["https://jamarq.digital/og.jpg"],
    creator: "@jamarqdigital",
    site: "@jamarqdigital"
  }
};

type ProcessCategory = {
  heading: string;
  items: string[];
};

type ProcessStep = {
  number: string;
  title: string;
  categories: ProcessCategory[];
  highlight: string;
  cta?: {
    href: string;
    label: string;
  };
};

const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Discovery",
    categories: [
      {
        heading: "What happens",
        items: [
          "Project goals defined",
          "Requirements gathered",
          "Timeline estimated",
          "Initial structure outlined"
        ]
      }
    ],
    highlight: "A clear plan and shared understanding."
  },
  {
    number: "02",
    title: "Structure & Design",
    categories: [
      {
        heading: "Structure",
        items: ["Site structure", "Content plan", "Required workflows", "Integration needs"]
      },
      {
        heading: "Design direction",
        items: ["Layout direction", "Navigation patterns", "Responsive behavior", "Brand-aligned implementation"]
      }
    ],
    highlight: "A clear blueprint before build work starts."
  },
  {
    number: "03",
    title: "Development",
    categories: [
      {
        heading: "What happens",
        items: [
          "Custom build with clean, maintainable code",
          "Responsive layouts tested across devices",
          "Performance checks",
          "Accessibility review"
        ]
      }
    ],
    highlight: "A functional system built from scratch."
  },
  {
    number: "04",
    title: "Review & Revisions",
    categories: [
      {
        heading: "What happens",
        items: ["You receive a working version", "Feedback is gathered", "Revisions are applied", "Final approval required before launch"]
      }
    ],
    highlight: "A refined system ready for launch."
  },
  {
    number: "05",
    title: "Launch",
    categories: [
      {
        heading: "What happens",
        items: ["Domain connection", "SSL setup", "Forms tested", "Search Console submitted", "Live handoff provided"]
      }
    ],
    highlight: "Your site goes live with full support."
  },
  {
    number: "06",
    title: "Support Window",
    categories: [
      {
        heading: "What happens",
        items: ["Technical questions answered", "Minor fixes handled", "Content corrections made", "Stability checks performed"]
      }
    ],
    highlight: "A clear handoff and support path.",
    cta: {
      href: "/contact",
      label: "Ask about support →"
    }
  }
];

const processSafeguards = [
  {
    title: "Scope creep",
    copy: "Scope is defined before build work starts."
  },
  {
    title: "Miscommunication",
    copy: "Requirements and decisions are written down."
  },
  {
    title: "Missed deadlines",
    copy: "Timeline and checkpoints are set early."
  },
  {
    title: "Surprise costs",
    copy: "Changes are discussed before they change budget."
  },
  {
    title: "Unclear expectations",
    copy: "Deliverables and responsibilities are defined up front."
  },
  {
    title: "Post-launch confusion",
    copy: "Handoff and support are part of the plan."
  }
];

export default function ProcessPage() {
  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How long does a typical build take?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Most projects take 4–8 weeks from kickoff to launch, depending on scope and content readiness."
        }
      },
      {
        "@type": "Question",
        name: "What happens before development starts?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Discovery defines requirements, constraints, and success metrics. Architecture and content structure are mapped before code is written."
        }
      },
      {
        "@type": "Question",
        name: "When do I review and approve work?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Review happens in the revision phase, and final approval is required before launch."
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
        "name": "Process",
        "item": "https://jamarq.digital/process"
      }
    ]
  };

  return (
    <main id="main-content" className="min-h-screen bg-jamarq-black text-jamarq-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }}
      />
      {/* Hero Section */}
      <section 
        className="min-h-[60vh] flex items-center justify-center px-5 md:px-10"
        aria-label="Process hero"
      >
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-semibold mb-6">
            How JAMARQ works from scope to launch.
          </h1>
          <p className="text-xl md:text-2xl text-mist mb-6">
            Clear milestones. Predictable timelines. Enough structure to reduce risk.
          </p>
          <p className="text-sm text-jamarq-gray">
            Based in Winston-Salem, working nationwide. <Link href="/mission" className="link-underline text-jamarq-cyan">Read the principles</Link>
          </p>
          <Link href="/" className="link-underline text-sm text-jamarq-cyan">
            ← Back to Home
          </Link>
        </div>
      </section>

      {/* Process Steps Section */}
      <section className="py-24 md:py-32 bg-steel" aria-label="Process steps">
        <div className="max-w-6xl mx-auto space-y-12 px-5 md:px-10">
          {processSteps.map((step, index) => {
            const multiColumn = step.categories.length > 1;
            const isEven = index % 2 === 0;
            return (
              <Reveal key={step.number} delay={index * 150}>
                <article
                  className={`md:flex md:items-start gap-10 p-8 rounded-3xl border border-slate/50 ${
                    isEven ? "bg-jamarq-black/40" : "bg-jamarq-black/20"
                  }`}
                >
                  <div className="md:w-1/4 space-y-3 text-center md:text-left">
                    <p className="text-xs uppercase tracking-[0.4em] text-jamarq-gray">Phase</p>
                    <p className="text-jamarq-cyan text-5xl md:text-6xl font-semibold">{step.number}</p>
                    <h2 className="text-3xl font-semibold">{step.title}</h2>
                  </div>
                  <div className="md:flex-1 space-y-6">
                    <div className={`grid gap-8 grid-cols-1 ${multiColumn ? "md:grid-cols-2" : ""}`}>
                      {step.categories.map((category) => (
                        <div key={category.heading} className="space-y-3">
                          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-jamarq-gray">
                            {category.heading}
                          </p>
                          <ul className="space-y-2 text-jamarq-gray text-base">
                            {category.items.map((item) => (
                              <li key={item} className="flex gap-3">
                                <span className="text-jamarq-cyan">•</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                    <p className="text-lg text-mist italic">{step.highlight}</p>
                    {step.cta && (
                      <Link
                        href={step.cta.href}
                        className="link-underline inline-flex items-center text-sm font-semibold text-jamarq-cyan"
                      >
                        {step.cta.label}
                      </Link>
                    )}
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* Timeline Context Section */}
      <section className="py-24 md:py-32" aria-label="Timeline">
        <div className="max-w-3xl mx-auto text-center px-5 md:px-10">
          <h2 className="text-3xl md:text-4xl font-semibold mb-8">
            Timeline
          </h2>
          <div className="space-y-6 text-jamarq-gray leading-relaxed">
            <p className="text-lg text-mist">
              Most projects take 4–8 weeks from kickoff to launch.
            </p>
            <div className="text-center max-w-xl mx-auto">
              <p className="mb-3">Timeline depends on:</p>
              <ul className="space-y-2">
                <li>• Scope and complexity</li>
                <li>• Content readiness</li>
                <li>• Response time during review phases</li>
              </ul>
            </div>
            <p className="text-mist pt-4">
              You&rsquo;ll receive a detailed timeline and approval checkpoints during the Discovery phase.
            </p>
          </div>
        </div>
      </section>

      {/* What This Prevents Section */}
      <section className="py-24 md:py-32 bg-steel" aria-label="What this prevents">
        <div className="max-w-6xl mx-auto px-5 md:px-10">
          <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-center">
            What This Process Prevents
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-jamarq-gray">
            {processSafeguards.map((item) => (
              <div key={item.title} className="p-6 bg-jamarq-black rounded-lg border border-slate/60 space-y-3">
                <p className="font-semibold text-mist">{item.title}</p>
                <p className="text-sm leading-relaxed">{item.copy}</p>
              </div>
            ))}
          </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 bg-steel" aria-label="Contact call-to-action">
        <div className="max-w-4xl mx-auto text-center px-5 md:px-10">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            Ready to start?
          </h2>
          <p className="text-lg text-jamarq-gray leading-relaxed mb-8">
            Let&rsquo;s talk about your project and map out a timeline.
          </p>
          
          <div className="space-y-4">
            <ContactModalTrigger
              prefill={{ subject: "Process page inquiry", source: "process-cta" }}
              className="inline-block bg-jamarq-cyan text-jamarq-black px-8 py-3 rounded-md font-semibold text-lg hover:bg-opacity-90 transition-all focus:outline-none focus:ring-2 focus:ring-jamarq-cyan focus:ring-offset-2 focus:ring-offset-jamarq-black"
            >
              Start a Project
            </ContactModalTrigger>
            
            <p className="text-sm text-jamarq-gray">
              <Link href="/services" className="text-jamarq-cyan hover:text-jamarq-magenta transition-colors">View services</Link> or <Link href="/contact" className="text-jamarq-cyan hover:text-jamarq-magenta transition-colors">see contact options</Link>
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
