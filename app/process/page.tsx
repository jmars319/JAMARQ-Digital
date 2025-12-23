import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import { ContactModalTrigger } from "@/components/contact/ContactModalTrigger";
import { FadeIn } from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Process — JAMARQ Digital",
  description: "A clear, structured process for every project. Discovery, design, development, launch, and support. Predictable timelines, no surprises.",
  alternates: {
    canonical: "https://jamarq.digital/process"
  },
  openGraph: {
    title: "Process — JAMARQ Digital",
    description: "A clear, structured process for every project. Discovery, design, development, launch, and support. Predictable timelines, no surprises.",
    url: "https://jamarq.digital/process",
    type: "website"
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
    title: "Architecture & Design",
    categories: [
      {
        heading: "Architecture",
        items: ["Site map", "Content structure", "Workflows", "Integrations planning"]
      },
      {
        heading: "Design",
        items: ["Layout direction", "Typography system", "Spacing rules", "Brand implementation"]
      }
    ],
    highlight: "A blueprint for the build."
  },
  {
    number: "03",
    title: "Development",
    categories: [
      {
        heading: "What happens",
        items: [
          "Custom build using clean, modern code",
          "Responsive behavior",
          "Performance optimization",
          "Accessibility considerations"
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
    highlight: "A smooth transition to ownership.",
    cta: {
      href: "/maintenance",
      label: "View Maintenance Plans →"
    }
  }
];

export default function ProcessPage() {
  return (
    <main id="main-content" className="min-h-screen bg-jamarq-black text-jamarq-white">
      {/* Hero Section */}
      <section 
        className="min-h-[60vh] flex items-center justify-center px-5 md:px-10"
        aria-label="Process hero"
      >
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-semibold mb-6">
            A clean, structured process.
          </h1>
          <p className="text-xl md:text-2xl text-mist mb-6">
            Clear milestones. Predictable timelines. No guesswork.
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
              <FadeIn key={step.number} delay={index * 150}>
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
              </FadeIn>
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
              You&rsquo;ll receive a detailed timeline during the Discovery phase.
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
            <div className="group relative p-6 bg-jamarq-black rounded-lg text-center cursor-pointer transition-all duration-300 hover:bg-slate hover:scale-105 hover:shadow-lg">
              <p className="font-semibold text-mist group-hover:text-jamarq-cyan transition-colors">Scope creep</p>
              <div className="absolute inset-0 bg-jamarq-black rounded-lg p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-sm text-jamarq-gray leading-relaxed">Clear boundaries set upfront. No unexpected features or expanding requirements after agreement.</p>
              </div>
            </div>
            <div className="group relative p-6 bg-jamarq-black rounded-lg text-center cursor-pointer transition-all duration-300 hover:bg-slate hover:scale-105 hover:shadow-lg">
              <p className="font-semibold text-mist group-hover:text-jamarq-cyan transition-colors">Miscommunication</p>
              <div className="absolute inset-0 bg-jamarq-black rounded-lg p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-sm text-jamarq-gray leading-relaxed">Everything documented. Every decision confirmed. No assumptions about what you want or need.</p>
              </div>
            </div>
            <div className="group relative p-6 bg-jamarq-black rounded-lg text-center cursor-pointer transition-all duration-300 hover:bg-slate hover:scale-105 hover:shadow-lg">
              <p className="font-semibold text-mist group-hover:text-jamarq-cyan transition-colors">Missed deadlines</p>
              <div className="absolute inset-0 bg-jamarq-black rounded-lg p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-sm text-jamarq-gray leading-relaxed">Realistic timelines with buffer built in. Milestone-based progress tracking keeps the project on schedule.</p>
              </div>
            </div>
            <div className="group relative p-6 bg-jamarq-black rounded-lg text-center cursor-pointer transition-all duration-300 hover:bg-slate hover:scale-105 hover:shadow-lg">
              <p className="font-semibold text-mist group-hover:text-jamarq-cyan transition-colors">Surprise costs</p>
              <div className="absolute inset-0 bg-jamarq-black rounded-lg p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-sm text-jamarq-gray leading-relaxed">Fixed pricing based on defined scope. Any changes discussed and approved before adding to budget.</p>
              </div>
            </div>
            <div className="group relative p-6 bg-jamarq-black rounded-lg text-center cursor-pointer transition-all duration-300 hover:bg-slate hover:scale-105 hover:shadow-lg">
              <p className="font-semibold text-mist group-hover:text-jamarq-cyan transition-colors">Unclear expectations</p>
              <div className="absolute inset-0 bg-jamarq-black rounded-lg p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-sm text-jamarq-gray leading-relaxed">Detailed project brief. Defined deliverables. You know exactly what you&rsquo;re getting at every stage.</p>
              </div>
            </div>
            <div className="group relative p-6 bg-jamarq-black rounded-lg text-center cursor-pointer transition-all duration-300 hover:bg-slate hover:scale-105 hover:shadow-lg">
              <p className="font-semibold text-mist group-hover:text-jamarq-cyan transition-colors">Post-launch confusion</p>
              <div className="absolute inset-0 bg-jamarq-black rounded-lg p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-sm text-jamarq-gray leading-relaxed">Complete documentation and training. Support window included. You&rsquo;ll know how to manage your site.</p>
              </div>
            </div>
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
              Get in Touch
            </ContactModalTrigger>
            
            <p className="text-sm text-jamarq-gray">
              <Link href="/services" className="text-jamarq-cyan hover:text-jamarq-magenta transition-colors">View all services</Link> or <Link href="/contact" className="text-jamarq-cyan hover:text-jamarq-magenta transition-colors">see more contact options</Link>
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
