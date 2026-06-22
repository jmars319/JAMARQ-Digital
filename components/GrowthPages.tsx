import Link from "next/link";
import Footer from "@/components/Footer";
import { ContactModalTrigger } from "@/components/contact/ContactModalTrigger";
import { Reveal } from "@/components/Reveal";
import type { NoteContent, ServicePageContent } from "@/lib/growthContent";

export function ServiceDetailPage({ page }: { page: ServicePageContent }) {
  // Service metadata contract
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: page.title,
    serviceType: page.title,
    provider: {
      "@type": "Organization",
      name: "JAMARQ Digital",
      url: "https://jamarq.digital",
    },
    areaServed: [
      {
        "@type": "City",
        name: "Winston-Salem",
      },
      {
        "@type": "State",
        name: "North Carolina",
      },
      {
        "@type": "Country",
        name: "United States",
      },
    ],
    description: page.description,
  };

  const breadcrumbStructuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://jamarq.digital/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: "https://jamarq.digital/services",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: page.title,
        item: `https://jamarq.digital/services/${page.slug}`,
      },
    ],
  };

  return (
    <main id="main-content" className="min-h-screen bg-jamarq-black text-jamarq-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }}
      />
      {/* Service detail surface */}
      <section className="pt-32 pb-24" aria-label={`${page.title} hero`}>
        <div className="mx-auto grid max-w-6xl gap-10 px-5 md:grid-cols-[minmax(0,1fr)_340px] md:px-10">
          <Reveal className="space-y-6">
            <Link href="/services" className="link-underline text-sm font-semibold text-jamarq-cyan">
              Services
            </Link>
            <h1 className="max-w-4xl text-4xl font-semibold leading-tight md:text-5xl">
              {page.h1}
            </h1>
            <p className="max-w-3xl text-lg leading-relaxed text-jamarq-gray md:text-xl">
              {page.intro}
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <ContactModalTrigger
                prefill={{ subject: page.title, source: `service-${page.slug}` }}
                className="inline-flex items-center justify-center rounded-md bg-jamarq-cyan px-8 py-3 text-base font-semibold text-jamarq-black transition-all hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-jamarq-cyan focus:ring-offset-2 focus:ring-offset-jamarq-black"
              >
                {page.primaryAction}
              </ContactModalTrigger>
              <Link
                href="/work"
                className="inline-flex items-center justify-center rounded-md border border-slate px-8 py-3 text-base font-semibold text-jamarq-white transition-colors hover:border-jamarq-cyan hover:text-jamarq-cyan"
              >
                View related work
              </Link>
            </div>
          </Reveal>
          <Reveal delay={120} className="rounded-3xl border border-slate/60 bg-jamarq-black/40 p-6">
            <p className="text-xs uppercase tracking-[0.3em] text-jamarq-gray">Expected outcome</p>
            <ul className="mt-5 space-y-4">
              {page.outcomes.map((outcome) => (
                <li key={outcome} className="flex gap-3 text-sm leading-6 text-mist">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-jamarq-cyan shadow-[0_0_16px_rgba(9,166,214,0.8)]" />
                  <span>{outcome}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Service explanation surface */}
      <section className="bg-steel py-24 md:py-32" aria-label={`${page.title} details`}>
        <div className="mx-auto max-w-6xl px-5 md:px-10">
          <div className="grid gap-8 md:grid-cols-3">
            {page.sections.map((section, index) => (
              <Reveal
                key={section.title}
                delay={index * 100}
                className="rounded-2xl border border-slate/60 bg-jamarq-black/35 p-6"
              >
                <p className="text-sm font-semibold text-jamarq-cyan">0{index + 1}</p>
                <h2 className="mt-3 text-2xl font-semibold">{section.title}</h2>
                <p className="mt-4 text-sm leading-6 text-jamarq-gray">{section.body}</p>
                <ul className="mt-5 space-y-2">
                  {section.bullets.map((bullet) => (
                    <li key={bullet} className="text-sm text-mist">
                      {bullet}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact conversion surface */}
      <section className="py-24 md:py-32" aria-label="Service call to action">
        <Reveal className="mx-auto max-w-5xl rounded-3xl border border-slate/60 bg-jamarq-black/30 px-5 py-10 text-center md:px-10">
          <h2 className="text-3xl font-semibold md:text-4xl">Have a setup that needs this kind of clarity?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-jamarq-gray">
            Send the current state, the problem, and the outcome you need. JAMARQ can help decide whether this is a build, rebuild, cleanup, or support issue.
          </p>
          <ContactModalTrigger
            prefill={{ subject: page.title, source: `service-${page.slug}-cta` }}
            className="mt-8 inline-flex items-center justify-center rounded-md bg-jamarq-cyan px-8 py-3 text-base font-semibold text-jamarq-black transition-all hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-jamarq-cyan focus:ring-offset-2 focus:ring-offset-jamarq-black"
          >
            Send the situation
          </ContactModalTrigger>
        </Reveal>
      </section>
      <Footer />
    </main>
  );
}

export function NoteDetailPage({ note }: { note: NoteContent }) {
  // Article metadata contract
  const articleStructuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: note.title,
    description: note.description,
    datePublished: note.date,
    dateModified: note.date,
    author: {
      "@type": "Organization",
      name: "JAMARQ Digital",
      url: "https://jamarq.digital",
    },
    publisher: {
      "@type": "Organization",
      name: "JAMARQ Digital",
      url: "https://jamarq.digital",
    },
    mainEntityOfPage: `https://jamarq.digital/notes/${note.slug}`,
  };

  return (
    <main id="main-content" className="min-h-screen bg-jamarq-black text-jamarq-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleStructuredData) }}
      />
      <article>
        {/* Article hero surface */}
        <section className="pt-32 pb-20" aria-label={`${note.title} article hero`}>
          <div className="mx-auto max-w-4xl px-5 md:px-10">
            <Link href="/notes" className="link-underline text-sm font-semibold text-jamarq-cyan">
              Notes
            </Link>
            <h1 className="mt-6 text-4xl font-semibold leading-tight md:text-5xl">{note.title}</h1>
            <p className="mt-6 text-lg leading-relaxed text-jamarq-gray md:text-xl">{note.intro}</p>
            <p className="mt-5 text-sm text-jamarq-gray">{new Date(note.date).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}</p>
          </div>
        </section>
        {/* Article body surface */}
        <section className="bg-steel py-20" aria-label="Article body">
          <div className="mx-auto max-w-3xl space-y-12 px-5 md:px-10">
            {note.sections.map((section) => (
              <section key={section.title} className="space-y-4">
                <h2 className="text-2xl font-semibold">{section.title}</h2>
                {section.body.map((paragraph) => (
                  <p key={paragraph} className="text-base leading-8 text-mist">
                    {paragraph}
                  </p>
                ))}
              </section>
            ))}
          </div>
        </section>
      </article>
      {/* Contact conversion surface */}
      <section className="py-20" aria-label="Notes call to action">
        <div className="mx-auto max-w-5xl px-5 text-center md:px-10">
          <h2 className="text-3xl font-semibold">Need help with this kind of setup?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-jamarq-gray">
            JAMARQ helps businesses turn confusing website, domain, hosting, and workflow problems into clear systems.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <ContactModalTrigger
              prefill={{ subject: "Question from JAMARQ notes", source: `note-${note.slug}` }}
              className="inline-flex items-center justify-center rounded-md bg-jamarq-cyan px-8 py-3 text-base font-semibold text-jamarq-black transition-all hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-jamarq-cyan focus:ring-offset-2 focus:ring-offset-jamarq-black"
            >
              Ask about your setup
            </ContactModalTrigger>
            <Link
              href="/notes"
              className="inline-flex items-center justify-center rounded-md border border-slate px-8 py-3 text-base font-semibold text-jamarq-white transition-colors hover:border-jamarq-cyan hover:text-jamarq-cyan"
            >
              Read more notes
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
