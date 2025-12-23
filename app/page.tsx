import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { caseStudySummaries, caseStudyDisplayOrder } from "@/lib/caseStudySummaries";
import { FadeIn } from "@/components/FadeIn";
import { ContactModalTrigger } from "@/components/contact/ContactModalTrigger";

export const metadata: Metadata = {
  title: "JAMARQ Digital — Modern Web Development & Digital Systems",
  description: "Custom web development in Winston-Salem, NC. Clean, intentional digital systems built for clarity and speed. No templates. No shortcuts. Build with intention.",
  alternates: {
    canonical: "https://www.jamarq.digital/"
  },
  openGraph: {
    title: "JAMARQ Digital — Build with intention",
    description: "Modern digital systems designed for clarity, speed, and long-term stability.",
    url: "https://www.jamarq.digital/",
    type: "website"
  }
};

export default function Home() {
  const orderedCaseStudies = caseStudyDisplayOrder.map((key) => ({
    key,
    ...caseStudySummaries[key]
  }));
  const featuredStudy = orderedCaseStudies[0];
  const heroStats = [
    { label: "Performance proof", value: "98/100 avg desktop score" },
    { label: "Ownership", value: "You keep the stack, hosting, and data" },
    { label: "Stack range", value: "React, Next.js, PHP, custom APIs" },
    { label: "Timeline", value: "4–8 weeks from kickoff to launch" }
  ];
  const workPhases = [
    {
      number: "01",
      title: "Discovery",
      copy: "Define requirements, budgets, and the constraints we have to respect. Every build starts with clarity."
    },
    {
      number: "02",
      title: "Architecture & Build",
      copy: "Translate the plan into intentional UI, copy, and code. Custom components, no templates, performance-first."
    },
    {
      number: "03",
      title: "Launch & Support",
      copy: "Structured rollout, documentation, and a support window so you can own the system without babysitting."
    }
  ];

  return (
    <main id="main-content" className="min-h-screen bg-jamarq-black text-jamarq-white">
      {/* Hero Section */}
      <section className="pt-32 pb-24 md:pb-32" aria-label="Hero section">
        <div className="max-w-6xl mx-auto px-5 md:px-10 grid gap-12 md:grid-cols-[minmax(0,1fr)_360px] items-center">
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.4em] text-jamarq-gray">JAMARQ Digital</p>
            <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
              Modern web systems for teams that value clarity, speed, and ownership.
            </h1>
            <p className="text-lg md:text-xl text-mist leading-relaxed">
              I build custom websites and digital platforms that actually support the way you operate. No templates. No rented software. Proof-of-performance included.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <ContactModalTrigger
                prefill={{ subject: "New project inquiry", source: "home-hero" }}
                className="inline-flex items-center justify-center bg-jamarq-cyan text-jamarq-black px-8 py-3 rounded-md font-semibold text-base hover:bg-opacity-90 transition-all focus:outline-none focus:ring-2 focus:ring-jamarq-cyan focus:ring-offset-2 focus:ring-offset-jamarq-black"
              >
                Start a project
              </ContactModalTrigger>
              <Link
                href="/work"
                className="inline-flex items-center justify-center border border-slate px-8 py-3 rounded-md font-semibold text-base text-jamarq-white hover:border-jamarq-cyan hover:text-jamarq-cyan transition-colors"
              >
                See work →
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              {heroStats.map((stat, index) => (
                <FadeIn key={stat.label} delay={index * 120}>
                  <div className="border-l-2 border-jamarq-cyan/70 pl-4">
                    <p className="text-xs uppercase tracking-[0.25em] text-slate">{stat.label}</p>
                    <p className="text-lg font-semibold text-mist">{stat.value}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
          <aside className="bg-jamarq-black/40 border border-slate/60 rounded-3xl p-6 space-y-4">
            <p className="text-xs uppercase tracking-[0.3em] text-slate">Featured case study</p>
            <h3 className="text-2xl font-semibold">{featuredStudy.title}</h3>
            <p className="text-sm text-jamarq-gray leading-relaxed">{featuredStudy.hoverShort}</p>
            <Link
              href={`/case-studies/${featuredStudy.slug}`}
              className="inline-flex items-center text-sm font-semibold text-jamarq-cyan hover:text-jamarq-magenta transition-colors"
            >
              Read the case study →
            </Link>
          </aside>
        </div>
      </section>

      {/* Positioning Section */}
      <section className="py-20 md:py-28 border-y border-slate/40" aria-label="What we do">
        <div className="max-w-6xl mx-auto px-5 md:px-10 grid gap-10 md:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-semibold leading-tight">
              Build with intention. Ship with receipts.
            </h2>
            <p className="text-lg text-mist leading-relaxed">
              Every JAMARQ build is a purpose-built system: custom UI, clean code, accessible performance, and a launch plan that doesn’t fall apart after go-live.
            </p>
          </div>
          <div className="space-y-4 text-jamarq-gray">
            <p className="text-xs uppercase tracking-[0.3em] text-slate">What this means</p>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <span className="text-jamarq-cyan">•</span>
                <span>Custom builds only. No generic templates or plug-and-play page builders.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-jamarq-cyan">•</span>
                <span>Owner-first hosting so you control the infrastructure, stack, and data.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-jamarq-cyan">•</span>
                <span>Performance and SEO proof included—PageSpeed, accessibility, and real-world validation.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* What I Build Section */}
      <section className="py-24 md:py-32 bg-steel" aria-label="Services">
        <div className="max-w-6xl mx-auto px-5 md:px-10 space-y-10">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-slate mb-3">Capabilities</p>
            <h2 className="text-3xl md:text-4xl font-semibold">What I build</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Custom Websites",
                copy: "Hand-built, modern, and responsive. Lightweight architecture with zero template bloat.",
                link: { href: "/services", label: "View all services →" }
              },
              {
                title: "Digital Systems",
                copy: "Workflows, dashboards, and integrations that mirror your real operations and data flow."
              },
              {
                title: "Ongoing Support",
                copy: "Maintenance plans, monitoring, updates, and performance care after launch."
              }
            ].map((card, index) => (
              <FadeIn key={card.title} delay={index * 120} className="h-full">
                <div className="h-full p-6 rounded-2xl border border-slate/50 bg-jamarq-black/30 space-y-4">
                  <h3 className="text-2xl font-semibold">{card.title}</h3>
                  <p className="text-jamarq-gray leading-relaxed">{card.copy}</p>
                  {card.link && (
                    <Link href={card.link.href} className="link-underline text-sm font-semibold text-jamarq-cyan">
                      {card.link.label}
                    </Link>
                  )}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Transition 1 */}
      <section className="py-16 flex items-center justify-center bg-steel" aria-label="Transition">
        <div className="max-w-3xl mx-auto text-center px-5 md:px-10">
          <p className="text-lg text-jamarq-gray">
            Every project follows a clear, structured process.
          </p>
        </div>
      </section>

      {/* How I Work Section */}
      <section className="py-24 md:py-32" aria-label="Process overview">
        <div className="max-w-6xl mx-auto px-5 md:px-10 space-y-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-slate mb-3">Approach</p>
              <h2 className="text-3xl md:text-4xl font-semibold">How I work</h2>
            </div>
            <Link
              href="/process"
              className="link-underline text-sm font-semibold text-jamarq-cyan"
            >
              See the full process →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {workPhases.map((phase, index) => (
              <FadeIn key={phase.number} delay={index * 120} className="h-full">
                <div className="h-full p-6 rounded-2xl border border-slate/50 bg-jamarq-black/20 space-y-4">
                  <div className="text-jamarq-cyan text-4xl font-semibold">{phase.number}</div>
                  <h3 className="text-2xl font-semibold">{phase.title}</h3>
                  <p className="text-jamarq-gray leading-relaxed">{phase.copy}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Transition 2 */}
      <section className="py-16 flex items-center justify-center" aria-label="Transition">
        <div className="max-w-3xl mx-auto text-center px-5 md:px-10">
          <p className="text-lg text-jamarq-gray">
            The result: a system you can rely on.
          </p>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="py-24 md:py-32 bg-steel" aria-label="Value proposition">
        <div className="max-w-6xl mx-auto px-5 md:px-10 space-y-12">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.3em] text-slate mb-3">Outcomes</p>
            <h2 className="text-3xl md:text-4xl font-semibold leading-tight">
              You get a modern system that’s fast, intentional, and still yours after launch.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {[
              {
                title: "Clarity first",
                copy: "Focused design, typography, and content structure that directs attention instead of burning it."
              },
              {
                title: "Operational reliability",
                copy: "Clean development, accessibility checks, QA, and documented handoff so your team can run it."
              },
              {
                title: "Proof and transparency",
                copy: "Real PageSpeed and Lighthouse results with production content—not throwaway demos."
              },
              {
                title: "Long-term support",
                copy: "Maintenance plans, analytics health checks, and fractional consulting when you need it."
              }
            ].map((item, index) => (
              <FadeIn key={item.title} delay={index * 120}>
                <div className="p-6 rounded-2xl border border-slate/50 bg-jamarq-black/30 space-y-3">
                  <h3 className="text-2xl font-semibold">{item.title}</h3>
                  <p className="text-jamarq-gray leading-relaxed">{item.copy}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Transition 3 */}
      <section className="py-16 flex items-center justify-center bg-steel" aria-label="Transition">
        <div className="max-w-3xl mx-auto text-center px-5 md:px-10">
          <p className="text-lg text-jamarq-gray">
            See how this approach creates real results.
          </p>
        </div>
      </section>

      {/* Work Section - Case Studies */}
      <section className="py-24 md:py-32" aria-label="Portfolio and case studies">
        <div className="max-w-6xl mx-auto px-5 md:px-10 space-y-12">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-slate mb-3">Work</p>
              <h2 className="text-3xl md:text-4xl font-semibold">Recent builds</h2>
              <p className="text-jamarq-gray max-w-2xl">
                Real systems with measurable performance and ownership built in. Screenshots, PageSpeed receipts, and technical notes are public on every case study.
              </p>
            </div>
            <Link 
              href="/case-studies" 
              className="link-underline text-sm font-semibold text-jamarq-cyan"
            >
              View all case studies →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {orderedCaseStudies.map((study, index) => (
              <FadeIn key={study.slug} delay={index * 120} className="h-full">
                <Link
                  href={`/case-studies/${study.slug}`}
                  title={study.hoverShort}
                  aria-label={`${study.title} case study preview`}
                  className="group block h-full p-8 rounded-3xl border border-slate/60 bg-jamarq-black/30 hover:border-jamarq-cyan transition-all duration-300"
                >
                  <p className="text-xs uppercase tracking-[0.3em] text-slate mb-3">{study.category}</p>
                  <h3 className="text-2xl font-semibold mb-4 group-hover:text-jamarq-cyan transition-colors">
                    {study.title}
                  </h3>
                  <p className="text-jamarq-gray leading-relaxed mb-6 text-sm">{study.micro}</p>
                  <div className="flex items-center text-jamarq-cyan group-hover:text-jamarq-magenta transition-colors font-semibold">
                    View case study →
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-24 md:py-32 bg-steel" aria-label="Contact call-to-action">
        <div className="max-w-5xl mx-auto px-5 md:px-10 rounded-3xl border border-slate/60 bg-jamarq-black/30 p-10 md:p-16">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.3em] text-slate">Ready?</p>
            <h2 className="text-3xl md:text-4xl font-semibold">Let’s build something intentional.</h2>
            <p className="text-lg text-jamarq-gray leading-relaxed max-w-3xl">
              Whether you’re launching from scratch or rebuilding a system that fell apart, I can map the plan, design the interface, and ship the code with real proof attached.
            </p>
          </div>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <ContactModalTrigger
              prefill={{ subject: "Project inquiry", source: "home-cta" }}
              className="inline-flex items-center justify-center bg-jamarq-cyan text-jamarq-black px-8 py-3 rounded-md font-semibold text-base hover:bg-opacity-90 transition-all focus:outline-none focus:ring-2 focus:ring-jamarq-cyan focus:ring-offset-2 focus:ring-offset-steel"
            >
              Get in touch
            </ContactModalTrigger>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center border border-slate px-8 py-3 rounded-md font-semibold text-base text-jamarq-white hover:border-jamarq-cyan hover:text-jamarq-cyan transition-colors"
            >
              View contact options
            </Link>
          </div>
          <p className="text-sm text-jamarq-gray mt-6">
            Prefer direct email?{" "}
            <ContactModalTrigger
              prefill={{ subject: "General question", source: "home-cta-direct" }}
              className="text-jamarq-cyan hover:text-jamarq-magenta transition-colors underline decoration-dotted"
            >
              hello@jamarq.digital
            </ContactModalTrigger>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-slate" role="contentinfo">
        <div className="max-w-6xl mx-auto px-5 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 justify-items-center">
            {/* Brand */}
            <div className="text-center">
              <Image
                src="/assets/logos/wordmark-dark.png"
                alt="JAMARQ Digital"
                width={200}
                height={50}
                className="h-12 md:h-16 w-auto mx-auto mb-2"
              />
              <p className="text-jamarq-gray text-sm">Build with intention.</p>
            </div>

            {/* Navigation */}
            <div className="text-center">
              <p className="font-semibold mb-3 text-sm uppercase tracking-wide">Navigation</p>
              <nav className="space-y-2">
                <Link href="/" className="block text-jamarq-gray text-sm hover:text-jamarq-cyan transition-colors">Home</Link>
                <Link href="/services" className="block text-jamarq-gray text-sm hover:text-jamarq-cyan transition-colors">Services</Link>
                <Link href="/process" className="block text-jamarq-gray text-sm hover:text-jamarq-cyan transition-colors">Process</Link>
                <Link href="/work" className="block text-jamarq-gray text-sm hover:text-jamarq-cyan transition-colors">Work</Link>
                <Link href="/contact" className="block text-jamarq-gray text-sm hover:text-jamarq-cyan transition-colors">Contact</Link>
              </nav>
            </div>

            {/* Contact */}
            <div className="text-center">
              <p className="font-semibold mb-3 text-sm uppercase tracking-wide">Contact</p>
              <p className="text-jamarq-gray text-xs mb-2">Based in Winston-Salem, North Carolina</p>
              <p className="text-jamarq-gray text-xs mb-3">Serving businesses nationwide</p>
              <ContactModalTrigger
                prefill={{ subject: "Website inquiry", source: "home-footer" }}
                className="text-jamarq-gray text-sm hover:text-jamarq-cyan transition-colors"
              >
                hello@jamarq.digital
              </ContactModalTrigger>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-slate pt-6 text-center text-jamarq-gray text-xs">
            <p>&copy; 2025 JAMARQ Digital. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
