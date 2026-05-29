import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { ContactModalTrigger } from "@/components/contact/ContactModalTrigger";
import { recentProof } from "@/lib/homeContent";

export const dynamic = "force-dynamic";

const title = "JAMARQ Digital | Practical Web Systems for Small Businesses";
const description =
  "JAMARQ Digital builds and maintains practical web systems for small businesses: websites, rebuilds, domains, DNS, hosting, integrations, analytics, and maintenance.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: {
    canonical: "https://jamarq.digital/",
  },
  openGraph: {
    title: "JAMARQ Digital | Practical Web Systems",
    description,
    url: "https://jamarq.digital/",
    type: "website",
    images: [
      {
        url: "https://jamarq.digital/brand/jamarq/og-image.png",
        width: 1200,
        height: 630,
        alt: "JAMARQ Digital practical web systems",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "JAMARQ Digital | Practical Web Systems",
    description,
    images: ["https://jamarq.digital/brand/jamarq/og-image.png"],
    creator: "@jamarqdigital",
    site: "@jamarqdigital",
  },
};

const systemSignals = [
  "Websites",
  "Rebuilds",
  "Domains",
  "DNS",
  "Hosting",
  "Forms",
  "Analytics",
  "Admin tools",
  "Maintenance",
];

const serviceTracks = [
  {
    title: "Build the public site",
    copy:
      "Clear pages, mobile-first layouts, calls to action, metadata, and launch-ready structure for businesses that need to be found and trusted.",
    href: "/services/website-systems",
  },
  {
    title: "Untangle the setup",
    copy:
      "Domain, DNS, hosting, SSL, email records, redirects, and deployment paths documented in language the owner can actually use.",
    href: "/services/dns-hosting-cleanup",
  },
  {
    title: "Keep it working",
    copy:
      "Maintenance, small fixes, dependency updates, analytics checks, and practical guidance after launch.",
    href: "/services/maintenance",
  },
];

const ownershipPoints = [
  "What account owns the domain?",
  "Where does DNS live?",
  "Who receives form submissions?",
  "How does the site deploy?",
  "What breaks if a vendor disappears?",
  "What should be checked after launch?",
];

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://jamarq.digital/#business",
    name: "JAMARQ Digital",
    alternateName: "JAMARQ",
    url: "https://jamarq.digital/",
    image: "https://jamarq.digital/brand/jamarq/og-image.png",
    description,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Winston-Salem",
      addressRegion: "NC",
      addressCountry: "US",
    },
    areaServed: [
      { "@type": "City", name: "Winston-Salem" },
      { "@type": "State", name: "North Carolina" },
      { "@type": "Country", name: "United States" },
    ],
    serviceType: [
      "Website systems",
      "Website rebuilds",
      "Domain and DNS cleanup",
      "Hosting cleanup",
      "Business website maintenance",
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://jamarq.digital/#website",
    name: "JAMARQ Digital",
    url: "https://jamarq.digital/",
    publisher: {
      "@id": "https://jamarq.digital/#business",
    },
  },
];

export default function Home() {
  return (
    <main id="main-content" className="min-h-screen bg-jamarq-black text-jamarq-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <section className="relative overflow-hidden border-b border-slate/70 pt-32">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-[0.45]"
          style={{ backgroundImage: "url('/brand/jamarq/hero-background.png')" }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(13,13,15,0.98)_0%,rgba(13,13,15,0.9)_48%,rgba(13,13,15,0.7)_100%)]" />
        <div className="absolute inset-0 opacity-70">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-jamarq-cyan to-transparent" />
          <div className="absolute -right-24 top-24 h-72 w-72 rounded-full border border-jamarq-cyan/20" />
          <div className="absolute right-20 top-40 h-36 w-36 rounded-full border border-jamarq-cyan/30" />
          <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-jamarq-cyan/70 via-slate to-transparent" />
        </div>
        <div className="relative mx-auto grid min-h-[calc(100vh-5rem)] max-w-6xl gap-12 px-5 pb-20 md:grid-cols-[minmax(0,1fr)_380px] md:px-10">
          <Reveal className="flex flex-col justify-center space-y-7">
            <div className="flex items-center">
              <Image
                src="/brand/jamarq/header-logo.svg"
                alt="JAMARQ Digital"
                width={396}
                height={96}
                priority
                className="h-auto w-72 drop-shadow-[0_0_26px_rgba(9,166,214,0.22)] sm:w-96"
              />
            </div>
            <h1 className="max-w-4xl text-5xl font-semibold leading-[1.05] md:text-7xl">
              JAMARQ Digital
            </h1>
            <p className="max-w-3xl text-xl leading-8 text-mist md:text-2xl">
              Web systems, rebuilds, DNS, hosting, integrations, and maintenance for businesses that need clearer ownership and fewer loose ends.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <ContactModalTrigger
                prefill={{ subject: "Request help", source: "home-redesign-hero" }}
                className="inline-flex items-center justify-center rounded-md bg-jamarq-cyan px-8 py-3 text-base font-semibold text-jamarq-black shadow-[0_0_28px_rgba(9,166,214,0.28)] transition hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-jamarq-cyan focus:ring-offset-2 focus:ring-offset-jamarq-black"
              >
                Request help
              </ContactModalTrigger>
              <Link
                href="/work"
                className="inline-flex items-center justify-center rounded-md border border-slate px-8 py-3 text-base font-semibold text-jamarq-white transition hover:border-jamarq-cyan hover:text-jamarq-cyan"
              >
                View work
              </Link>
            </div>
            <p className="max-w-2xl text-sm leading-6 text-jamarq-gray">
              Built for small businesses, venues, service operators, and independent teams that need the website and the system behind it to stay understandable.
            </p>
          </Reveal>
          <Reveal delay={150} className="flex items-center">
            <aside className="w-full rounded-3xl border border-slate/70 bg-jamarq-black/70 p-5 shadow-[0_28px_110px_rgba(0,0,0,0.42)]">
              <div className="rounded-2xl border border-jamarq-cyan/30 bg-jamarq-cyan/5 p-4">
                <p className="text-xs uppercase tracking-[0.3em] text-jamarq-gray">System map</p>
                <div className="mt-5 grid grid-cols-3 gap-2">
                  {systemSignals.map((signal) => (
                    <span
                      key={signal}
                      className="min-h-12 rounded-lg border border-slate/80 bg-jamarq-black/80 px-3 py-2 text-center text-xs font-semibold text-mist"
                    >
                      {signal}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-4 space-y-3">
                {recentProof.map((item) => (
                  <Link
                    key={item.label}
                    href="/case-studies"
                    className="block rounded-2xl border border-slate/60 bg-jamarq-black/45 p-4 transition hover:border-jamarq-cyan/70"
                  >
                    <p className="text-sm font-semibold text-mist">{item.label}</p>
                    <p className="mt-1 text-sm text-jamarq-gray">{item.copy}</p>
                  </Link>
                ))}
              </div>
            </aside>
          </Reveal>
        </div>
      </section>

      <section className="bg-steel py-24 md:py-32" aria-labelledby="home-services-heading">
        <div className="mx-auto max-w-6xl px-5 md:px-10">
          <div className="max-w-3xl">
            <h2 id="home-services-heading" className="text-3xl font-semibold md:text-5xl">
              Practical web work for the places websites usually break.
            </h2>
            <p className="mt-5 text-lg leading-8 text-jamarq-gray">
              The site, the domain, the forms, the hosting, and the handoff are one connected system. JAMARQ treats them that way from the start.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {serviceTracks.map((track, index) => (
              <Reveal
                key={track.title}
                delay={index * 100}
                className="rounded-2xl border border-slate/60 bg-jamarq-black/35 p-6"
              >
                <h3 className="text-2xl font-semibold">{track.title}</h3>
                <p className="mt-4 text-sm leading-6 text-jamarq-gray">{track.copy}</p>
                <Link href={track.href} className="link-underline mt-5 text-sm font-semibold text-jamarq-cyan">
                  Learn more
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32" aria-labelledby="ownership-heading">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 md:grid-cols-[0.9fr_1.1fr] md:px-10">
          <Reveal>
            <h2 id="ownership-heading" className="text-3xl font-semibold md:text-5xl">
              Your online systems should be easy to explain.
            </h2>
            <p className="mt-5 text-lg leading-8 text-jamarq-gray">
              JAMARQ is useful when a business needs less mystery: clearer account ownership, cleaner launch paths, better documentation, and a site that matches the way the work actually happens.
            </p>
          </Reveal>
          <Reveal delay={120} className="grid gap-3 sm:grid-cols-2">
            {ownershipPoints.map((point) => (
              <div key={point} className="rounded-xl border border-slate/60 bg-jamarq-black/30 p-4 text-sm text-mist">
                {point}
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="bg-steel py-24 md:py-32" aria-labelledby="notes-heading">
        <div className="mx-auto max-w-6xl px-5 md:px-10">
          <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-end">
            <div>
              <h2 id="notes-heading" className="text-3xl font-semibold md:text-5xl">
                Notes for owners who want the system to make sense.
              </h2>
              <p className="mt-5 text-lg leading-8 text-jamarq-gray">
                Plain-language writing on domains, DNS, hosting, launch ownership, and maintainable website systems.
              </p>
            </div>
            <div className="grid gap-3">
              {[
                "What small businesses should own before launching a website",
                "A plain-language guide to DNS records",
                "How to tell if your website setup is fragile",
              ].map((note) => (
                <div key={note} className="rounded-xl border border-slate/60 bg-jamarq-black/35 p-4 text-sm text-mist">
                  {note}
                </div>
              ))}
            </div>
          </div>
          <Link href="/notes" className="link-underline mt-8 text-sm font-semibold text-jamarq-cyan">
            Read the notes
          </Link>
        </div>
      </section>

      <section className="py-24 md:py-32" aria-label="JAMARQ call to action">
        <Reveal className="mx-auto max-w-5xl rounded-3xl border border-jamarq-cyan/30 bg-jamarq-cyan/5 px-5 py-10 text-center md:px-10">
          <h2 className="text-3xl font-semibold md:text-5xl">
            Have a site, domain, or workflow that feels harder than it should?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-jamarq-gray">
            Send the situation. JAMARQ can help untangle what exists, decide what should change, and build the pieces that need to be dependable.
          </p>
          <ContactModalTrigger
            prefill={{ subject: "New project inquiry", source: "home-bottom-cta" }}
            className="mt-8 inline-flex items-center justify-center rounded-md bg-jamarq-cyan px-8 py-3 text-base font-semibold text-jamarq-black transition hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-jamarq-cyan focus:ring-offset-2 focus:ring-offset-jamarq-black"
          >
            Request help
          </ContactModalTrigger>
        </Reveal>
      </section>
      <Footer />
    </main>
  );
}
