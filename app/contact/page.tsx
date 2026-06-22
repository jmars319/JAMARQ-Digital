import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import { ContactModalTrigger } from "@/components/contact/ContactModalTrigger";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Contact",
  description: "Start a website, rebuild, web system, or support project with JAMARQ Digital. Based in Winston-Salem, working nationwide, with replies within one business day.",
  alternates: {
    canonical: "https://jamarq.digital/contact"
  },
  openGraph: {
    title: "Contact",
    description: "Start a website, rebuild, web system, or support project with JAMARQ Digital. Based in Winston-Salem, working nationwide, with replies within one business day.",
    url: "https://jamarq.digital/contact",
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
    title: "Contact",
    description: "Start a website, rebuild, web system, or support project with JAMARQ Digital. Based in Winston-Salem, working nationwide, with replies within one business day.",
    images: ["https://jamarq.digital/og.jpg"],
    creator: "@jamarqdigital",
    site: "@jamarqdigital"
  }
};

export default function ContactPage() {
  // Contact metadata contract
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
        "name": "Contact",
        "item": "https://jamarq.digital/contact"
      }
    ]
  };

  // Contact intake contract
  const steps = [
    {
      number: "01",
      title: "Send details",
      copy: "Tell me what you need, your timing, budget range, and any context that matters."
    },
    {
      number: "02",
      title: "Review & reply",
      copy: "I review within one business day and follow up with questions if needed."
    },
    {
      number: "03",
      title: "Plan the project",
      copy: "We align on deliverables, timeline, and pricing. No work starts without written approval."
    }
  ];

  const quickPrompts = [
    "Whether this is a new site, rebuild, web system, or support request",
    "What should become easier for visitors or staff",
    "Timeline or launch window",
    "Budget range (if known)",
    "Current site or tooling",
    "Any technical constraints"
  ];

  return (
    <main id="main-content" className="min-h-screen bg-jamarq-black text-jamarq-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }}
      />
      {/* Contact hero surface */}
      <section className="pt-32 pb-24" aria-label="Contact hero">
        <div className="max-w-6xl mx-auto px-5 md:px-10 grid gap-12 md:grid-cols-[minmax(0,1fr)_360px] items-start">
          <Reveal className="space-y-6">
            <p className="text-xs uppercase tracking-[0.35em] text-jamarq-gray">Contact</p>
            <h1 className="text-4xl md:text-5xl font-semibold leading-tight">Start with the problem the site needs to solve.</h1>
            <p className="text-lg text-jamarq-gray leading-relaxed">
              Whether you need a new website, a rebuild, a web system, or support for
              an existing build, you’ll hear back within one business day. No sales
              team, just me. Share the goal and the current friction, and I’ll map the
              likely scope, timeline, and price range with you.
            </p>
            <p className="text-sm text-jamarq-gray">
              Based in Winston-Salem, working nationwide. <Link href="/mission" className="link-underline text-jamarq-cyan">Read the principles</Link>
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <ContactModalTrigger
                prefill={{ subject: "New project inquiry", source: "contact-hero" }}
                className="inline-flex items-center justify-center bg-jamarq-cyan text-jamarq-black px-8 py-3 rounded-md font-semibold text-base hover:bg-opacity-90 transition-all focus:outline-none focus:ring-2 focus:ring-jamarq-cyan focus:ring-offset-2 focus:ring-offset-jamarq-black"
              >
                Send a message
              </ContactModalTrigger>
              <Link
                href="/work"
                className="inline-flex items-center justify-center border border-slate px-8 py-3 rounded-md font-semibold text-base text-jamarq-white hover:border-jamarq-cyan hover:text-jamarq-cyan transition-colors"
              >
                See recent work →
              </Link>
            </div>
          </Reveal>
          <Reveal delay={150} className="bg-jamarq-black/40 border border-slate/60 rounded-3xl p-6 space-y-4">
            <p className="text-xs uppercase tracking-[0.3em] text-jamarq-gray">Response time</p>
            <p className="text-lg font-semibold text-mist">Within one business day</p>
            <p className="text-jamarq-gray text-sm">I reply personally. No handoffs or account managers.</p>
            <div className="border-t border-slate/60 pt-4">
              <p className="text-xs uppercase tracking-[0.3em] text-jamarq-gray">Availability</p>
              <p className="text-mist">Next slot opens in ~2 weeks</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Intake routing surface */}
      <section className="py-24 md:py-32 bg-steel" aria-label="Contact options">
        <div className="max-w-6xl mx-auto px-5 md:px-10 grid gap-10 md:grid-cols-2">
          <Reveal className="space-y-6">
            <h2 className="text-3xl font-semibold">Choose the right contact path</h2>
            <div className="p-6 rounded-2xl border border-slate/60 bg-jamarq-black/30 space-y-4">
              <p className="text-sm uppercase tracking-[0.3em] text-jamarq-gray">New projects</p>
              <ContactModalTrigger
                prefill={{ subject: "New project inquiry", source: "contact-new-projects" }}
                className="inline-flex items-center justify-center rounded-md border border-slate px-4 py-2 text-sm font-semibold text-mist transition hover:border-jamarq-cyan hover:text-jamarq-cyan"
              >
                Start a project inquiry
              </ContactModalTrigger>
              <p className="text-jamarq-gray text-sm">Best for new sites, rebuilds, and web systems.</p>
            </div>
            <div className="p-6 rounded-2xl border border-slate/60 bg-jamarq-black/30 space-y-4">
              <p className="text-sm uppercase tracking-[0.3em] text-jamarq-gray">Active clients</p>
              <ContactModalTrigger
                prefill={{ subject: "Active client request", source: "contact-active-clients" }}
                className="inline-flex items-center justify-center rounded-md border border-slate px-4 py-2 text-sm font-semibold text-mist transition hover:border-jamarq-cyan hover:text-jamarq-cyan"
              >
                Send a client update
              </ContactModalTrigger>
              <p className="text-jamarq-gray text-sm">Use this for builds already in progress.</p>
            </div>
            <div className="p-6 rounded-2xl border border-slate/60 bg-jamarq-black/30 space-y-4">
              <p className="text-sm uppercase tracking-[0.3em] text-jamarq-gray">Support & maintenance</p>
              <ContactModalTrigger
                prefill={{ subject: "Support or maintenance request", source: "contact-support" }}
                className="inline-flex items-center justify-center rounded-md border border-slate px-4 py-2 text-sm font-semibold text-mist transition hover:border-jamarq-cyan hover:text-jamarq-cyan"
              >
                Request support
              </ContactModalTrigger>
              <p className="text-jamarq-gray text-sm">For launched sites, retainers, and post-launch help.</p>
            </div>
          </Reveal>
          <Reveal delay={150} className="space-y-6">
            <h2 className="text-3xl font-semibold">What to include</h2>
            <p className="text-jamarq-gray leading-relaxed">
              A few bullet points are enough. The goal is to identify the right path quickly.
            </p>
            <div className="p-6 rounded-2xl border border-slate/60 bg-jamarq-black/30">
              <ul className="space-y-3 text-jamarq-gray">
                {quickPrompts.map((prompt) => (
                  <li key={prompt} className="flex gap-3">
                    <span className="text-jamarq-cyan">•</span>
                    <span>{prompt}</span>
                  </li>
                ))}
              </ul>
            </div>
            <p className="text-sm text-jamarq-gray">
              NDAs are fine. Mention it in your message and I’ll send a standard mutual NDA before sharing work.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Follow-up workflow surface */}
      <section className="py-24 md:py-32" aria-label="What happens next">
        <div className="max-w-5xl mx-auto px-5 md:px-10 space-y-10">
          <Reveal className="text-center">
            <h2 className="text-3xl md:text-4xl font-semibold">What happens next</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <Reveal key={step.number} delay={index * 120} className="p-6 rounded-2xl border border-slate/60 bg-jamarq-black/20 space-y-3 text-center">
                <p className="text-jamarq-cyan text-3xl font-semibold">{step.number}</p>
                <h3 className="text-xl font-semibold">{step.title}</h3>
                <p className="text-jamarq-gray leading-relaxed">{step.copy}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact conversion surface */}
      <section className="py-24 md:py-32 bg-steel" aria-label="Contact CTA">
        <Reveal className="max-w-5xl mx-auto px-5 md:px-10 rounded-3xl border border-slate/60 bg-jamarq-black/30 p-10 space-y-4 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-jamarq-gray">Ready?</p>
          <h2 className="text-3xl md:text-4xl font-semibold">Tell me what you need. I’ll reply with the next step.</h2>
          <ContactModalTrigger
            prefill={{ subject: "Contact CTA", source: "contact-cta" }}
            className="inline-flex items-center justify-center bg-jamarq-cyan text-jamarq-black px-8 py-3 rounded-md font-semibold text-base hover:bg-opacity-90 transition-all focus:outline-none focus:ring-2 focus:ring-jamarq-cyan focus:ring-offset-2 focus:ring-offset-steel"
          >
            Send a message
          </ContactModalTrigger>
          <p className="text-sm text-jamarq-gray">The contact form is the supported public intake path.</p>
        </Reveal>
      </section>

      <Footer />
    </main>
  );
}
