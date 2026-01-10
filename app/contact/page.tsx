import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import { ContactModalTrigger } from "@/components/contact/ContactModalTrigger";
import { EmailCopyButton } from "@/components/contact/EmailCopyButton";
import { FadeIn } from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Contact",
  description: "Start a project with JAMARQ Digital. Clear replies within one business day, no sales team.",
  alternates: {
    canonical: "https://jamarq.digital/contact"
  },
  openGraph: {
    title: "Contact",
    description: "Start a project with JAMARQ Digital. Clear replies within one business day, no sales team.",
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
    description: "Start a project with JAMARQ Digital. Clear replies within one business day, no sales team.",
    images: ["https://jamarq.digital/og.jpg"],
    creator: "@jamarqdigital",
    site: "@jamarqdigital"
  }
};

export default function ContactPage() {
  const steps = [
    {
      number: "01",
      title: "Send details",
      copy: "Tell me what you need—project scope, timeline, budget range, and any context."
    },
    {
      number: "02",
      title: "Review & reply",
      copy: "I review within one business day and follow up with questions if needed."
    },
    {
      number: "03",
      title: "Plan the project",
      copy: "We align on deliverables, timeline, and pricing. No work begins without a written plan."
    }
  ];

  const quickPrompts = [
    "What you need built",
    "Timeline or launch window",
    "Budget range (if known)",
    "Current site or tooling",
    "Any technical constraints"
  ];

  return (
    <main id="main-content" className="min-h-screen bg-jamarq-black text-jamarq-white">
      {/* Hero */}
      <section className="pt-32 pb-24" aria-label="Contact hero">
        <div className="max-w-6xl mx-auto px-5 md:px-10 grid gap-12 md:grid-cols-[minmax(0,1fr)_360px] items-start">
          <FadeIn className="space-y-6">
            <p className="text-xs uppercase tracking-[0.35em] text-jamarq-gray">Contact</p>
            <h1 className="text-4xl md:text-5xl font-semibold leading-tight">Start a project or request a walkthrough.</h1>
            <p className="text-lg text-jamarq-gray leading-relaxed">
              You’ll hear back within one business day. No sales team—just me. Provide as much context as you can and I’ll map the plan, timeline, and price range.
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
          </FadeIn>
          <FadeIn delay={150} className="bg-jamarq-black/40 border border-slate/60 rounded-3xl p-6 space-y-4">
            <p className="text-xs uppercase tracking-[0.3em] text-jamarq-gray">Response time</p>
            <p className="text-lg font-semibold text-mist">Within one business day</p>
            <p className="text-jamarq-gray text-sm">I reply personally. No handoffs, no waiting on account managers.</p>
            <div className="border-t border-slate/60 pt-4">
              <p className="text-xs uppercase tracking-[0.3em] text-jamarq-gray">Availability</p>
              <p className="text-mist">Next slot opens in ~2 weeks</p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Contact options */}
      <section className="py-24 md:py-32 bg-steel" aria-label="Contact options">
        <div className="max-w-6xl mx-auto px-5 md:px-10 grid gap-10 md:grid-cols-2">
          <FadeIn className="space-y-6">
            <h2 className="text-3xl font-semibold">Choose what fits</h2>
            <div className="p-6 rounded-2xl border border-slate/60 bg-jamarq-black/30 space-y-4">
              <p className="text-sm uppercase tracking-[0.3em] text-jamarq-gray">New projects</p>
              <EmailCopyButton email="hello@jamarq.digital" />
              <ContactModalTrigger
                prefill={{ subject: "New project inquiry", source: "contact-options" }}
                className="inline-flex text-sm font-semibold text-jamarq-cyan hover:text-jamarq-magenta transition-colors"
              >
                Open contact form →
              </ContactModalTrigger>
              <p className="text-jamarq-gray text-sm">All general CTAs route to this inbox.</p>
            </div>
            <div className="p-6 rounded-2xl border border-slate/60 bg-jamarq-black/30 space-y-4">
              <p className="text-sm uppercase tracking-[0.3em] text-jamarq-gray">Active clients</p>
              <EmailCopyButton email="jason@jamarq.digital" />
              <p className="text-jamarq-gray text-sm">Fastest path for builds already in progress.</p>
            </div>
            <div className="p-6 rounded-2xl border border-slate/60 bg-jamarq-black/30 space-y-4">
              <p className="text-sm uppercase tracking-[0.3em] text-jamarq-gray">Support & maintenance</p>
              <EmailCopyButton email="support@jamarq.digital" />
              <p className="text-jamarq-gray text-sm">For launched sites and retainers.</p>
            </div>
          </FadeIn>
          <FadeIn delay={150} className="space-y-6">
            <h2 className="text-3xl font-semibold">What to include</h2>
            <p className="text-jamarq-gray leading-relaxed">
              Use this structure to keep things moving quickly. Bullet points are totally fine.
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
          </FadeIn>
        </div>
      </section>

      {/* Process overview */}
      <section className="py-24 md:py-32" aria-label="What happens next">
        <div className="max-w-5xl mx-auto px-5 md:px-10 space-y-10">
          <FadeIn className="text-center">
            <h2 className="text-3xl md:text-4xl font-semibold">What happens next</h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <FadeIn key={step.number} delay={index * 120} className="p-6 rounded-2xl border border-slate/60 bg-jamarq-black/20 space-y-3 text-center">
                <p className="text-jamarq-cyan text-3xl font-semibold">{step.number}</p>
                <h3 className="text-xl font-semibold">{step.title}</h3>
                <p className="text-jamarq-gray leading-relaxed">{step.copy}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-steel" aria-label="Contact CTA">
        <FadeIn className="max-w-5xl mx-auto px-5 md:px-10 rounded-3xl border border-slate/60 bg-jamarq-black/30 p-10 space-y-4 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-jamarq-gray">Ready?</p>
          <h2 className="text-3xl md:text-4xl font-semibold">Tell me what you need. I’ll respond with a plan.</h2>
          <ContactModalTrigger
            prefill={{ subject: "Contact CTA", source: "contact-cta" }}
            className="inline-flex items-center justify-center bg-jamarq-cyan text-jamarq-black px-8 py-3 rounded-md font-semibold text-base hover:bg-opacity-90 transition-all focus:outline-none focus:ring-2 focus:ring-jamarq-cyan focus:ring-offset-2 focus:ring-offset-steel"
          >
            Send a message
          </ContactModalTrigger>
          <p className="text-sm text-jamarq-gray">
            Prefer a different channel? <Link href="/process" className="link-underline text-jamarq-cyan">See the process</Link> first.
          </p>
        </FadeIn>
      </section>

      <Footer />
    </main>
  );
}
