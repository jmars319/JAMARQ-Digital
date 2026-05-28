import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import { ContactModalTrigger } from "@/components/contact/ContactModalTrigger";
import { Reveal } from "@/components/Reveal";
import { notes } from "@/lib/growthContent";

export const metadata: Metadata = {
  title: "Notes on Web Systems, Domains, and Small Business Tech",
  description:
    "Practical notes from JAMARQ Digital on websites, domains, DNS, hosting, integrations, analytics, and maintainable small business systems.",
  alternates: { canonical: "https://jamarq.digital/notes" },
  openGraph: {
    title: "Notes on Web Systems, Domains, and Small Business Tech",
    description:
      "Practical notes from JAMARQ Digital on websites, domains, DNS, hosting, integrations, analytics, and maintainable small business systems.",
    url: "https://jamarq.digital/notes",
    type: "website",
    images: [{ url: "https://jamarq.digital/opengraph-image", width: 1200, height: 630, alt: "JAMARQ Digital" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Notes on Web Systems, Domains, and Small Business Tech",
    description:
      "Practical notes from JAMARQ Digital on websites, domains, DNS, hosting, integrations, analytics, and maintainable small business systems.",
    images: ["https://jamarq.digital/opengraph-image"],
    creator: "@jamarqdigital",
    site: "@jamarqdigital",
  },
};

export default function NotesPage() {
  return (
    <main id="main-content" className="min-h-screen bg-jamarq-black text-jamarq-white">
      <section className="pt-32 pb-20">
        <div className="mx-auto max-w-6xl px-5 md:px-10">
          <Reveal className="max-w-3xl space-y-6">
            <h1 className="text-4xl font-semibold leading-tight md:text-5xl">
              Notes on web systems, domains, and small business tech.
            </h1>
            <p className="text-lg leading-relaxed text-jamarq-gray">
              Practical writing for owners who want their website, domain, hosting,
              forms, analytics, and handoff to make sense.
            </p>
          </Reveal>
        </div>
      </section>
      <section className="bg-steel py-20">
        <div className="mx-auto grid max-w-6xl gap-6 px-5 md:grid-cols-3 md:px-10">
          {notes.map((note, index) => (
            <Reveal
              key={note.slug}
              delay={index * 100}
              className="rounded-2xl border border-slate/60 bg-jamarq-black/35 p-6"
            >
              <p className="text-sm text-jamarq-cyan">{new Date(note.date).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}</p>
              <h2 className="mt-4 text-2xl font-semibold">{note.title}</h2>
              <p className="mt-4 text-sm leading-6 text-jamarq-gray">{note.description}</p>
              <Link href={`/notes/${note.slug}`} className="link-underline mt-5 text-sm font-semibold text-jamarq-cyan">
                Read note
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-5 text-center md:px-10">
          <h2 className="text-3xl font-semibold">Have a tangled setup?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-jamarq-gray">
            Notes are useful, but every real system has context. Send the situation if you want help sorting it.
          </p>
          <ContactModalTrigger
            prefill={{ subject: "Question from JAMARQ notes", source: "notes-index" }}
            className="mt-8 inline-flex items-center justify-center rounded-md bg-jamarq-cyan px-8 py-3 text-base font-semibold text-jamarq-black transition-all hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-jamarq-cyan focus:ring-offset-2 focus:ring-offset-jamarq-black"
          >
            Ask about your setup
          </ContactModalTrigger>
        </div>
      </section>
      <Footer />
    </main>
  );
}
