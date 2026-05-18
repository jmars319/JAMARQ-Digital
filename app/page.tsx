import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import { listCaseStudySummaries } from "@/lib/content-repository";
import { Reveal } from "@/components/Reveal";
import { ContactModalTrigger } from "@/components/contact/ContactModalTrigger";
import {
  breadcrumbStructuredData,
  pricingTiers,
  processSteps,
  recentProof,
  structuredData,
  taskRoutes,
  whatWeDo,
  whoWeWorkWith,
  whyJamarq
} from "@/lib/homeContent";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: { absolute: "JAMARQ Digital | Websites, Rebuilds & Web Systems | Winston-Salem" },
  description:
    "JAMARQ Digital builds conversion-focused websites, website rebuilds, and web systems for businesses that need clearer leads, faster pages, and tools that are easy to run.",
  alternates: {
    canonical: "https://jamarq.digital/"
  },
  openGraph: {
    title: "JAMARQ Digital | Websites, Rebuilds & Web Systems | Winston-Salem",
    description:
      "JAMARQ Digital builds conversion-focused websites, website rebuilds, and web systems for businesses that need clearer leads, faster pages, and tools that are easy to run.",
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
      "JAMARQ Digital builds conversion-focused websites, website rebuilds, and web systems for businesses that need clearer leads, faster pages, and tools that are easy to run.",
    images: ["https://jamarq.digital/og.jpg"],
    creator: "@jamarqdigital",
    site: "@jamarqdigital"
  }
};

export default async function Home() {
  const orderedWork = await listCaseStudySummaries();

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
                Custom websites, rebuilds, and web systems for businesses that need the site to do real work.
              </h1>
              <p className="text-lg md:text-xl text-mist leading-relaxed max-w-3xl">
                JAMARQ Digital builds conversion-focused websites, fixes slow or outdated
                sites, and creates the forms, admin tools, and workflows behind the public
                experience. Based in Winston-Salem, working nationwide.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <ContactModalTrigger
                  prefill={{ subject: "New project inquiry", source: "home-hero" }}
                  className="inline-flex items-center justify-center bg-jamarq-cyan text-jamarq-black px-8 py-3 rounded-md font-semibold text-base hover:bg-opacity-90 transition-all focus:outline-none focus:ring-2 focus:ring-jamarq-cyan focus:ring-offset-2 focus:ring-offset-jamarq-black"
                >
                  Start the Right Build
                </ContactModalTrigger>
                <Link
                  href="#work"
                  className="inline-flex items-center justify-center border border-slate px-8 py-3 rounded-md font-semibold text-base text-jamarq-white hover:border-jamarq-cyan hover:text-jamarq-cyan transition-colors"
                >
                  View Work
                </Link>
              </div>
              <p className="text-sm text-jamarq-gray">
                Clear scope, fast pages, practical SEO, accessible layouts, and ownership that stays with you.
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
                Website development that connects the public site to the way the business runs.
              </h2>
              <p className="text-jamarq-gray leading-relaxed">
                The work is not just visual. Navigation, content, performance, contact paths,
                analytics, accessibility, and handoff are planned together.
              </p>
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

        <section className="py-24 md:py-32" aria-labelledby="task-routing-heading">
          <div className="max-w-6xl mx-auto px-5 md:px-10 space-y-10">
            <div className="max-w-3xl space-y-3">
              <p className="text-xs uppercase tracking-[0.3em] text-jamarq-gray">
                Find the right path
              </p>
              <h2 id="task-routing-heading" className="text-3xl md:text-4xl font-semibold">
                Choose JAMARQ when the website needs to become useful, fast, and easy to act on.
              </h2>
              <p className="text-jamarq-gray leading-relaxed">
                Most projects start with a simple question: what should the visitor be able
                to understand or do that they cannot do well today?
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {taskRoutes.map((route, index) => (
                <Reveal key={route.task} delay={index * 90} className="h-full">
                  <article className="h-full rounded-2xl border border-slate/60 bg-jamarq-black/20 p-6 space-y-4">
                    <p className="text-xs uppercase tracking-[0.25em] text-jamarq-gray">
                      {route.action}
                    </p>
                    <h3 className="text-2xl font-semibold">{route.task}</h3>
                    <p className="text-jamarq-gray leading-relaxed">{route.fit}</p>
                    {route.href ? (
                      <Link
                        href={route.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-underline text-sm font-semibold text-jamarq-cyan"
                      >
                        Visit Tenra.dev
                      </Link>
                    ) : (
                      <ContactModalTrigger
                        prefill={{ subject: route.action, source: "home-task-routing" }}
                        className="link-underline text-sm font-semibold text-jamarq-cyan"
                      >
                        Talk through this path
                      </ContactModalTrigger>
                    )}
                  </article>
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
                A strong fit when clarity, performance, and ownership matter.
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
                Built so the site keeps helping after launch.
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
                Clear project ranges before the work starts.
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
              rebuild. These ranges are for custom work with planning, development,
              validation, launch, and handoff included.
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
              Tell me what needs to work better.
            </h2>
            <p className="text-lg text-jamarq-gray leading-relaxed max-w-3xl">
              Send the site, the goal, and what feels stuck. I&apos;ll reply with the
              likely path, scope questions, and next step within one business day.
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
