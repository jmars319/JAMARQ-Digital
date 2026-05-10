import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms",
  description:
    "Practical terms for using the JAMARQ Digital website, contact forms, and public project information.",
  alternates: {
    canonical: "https://jamarq.digital/terms",
  },
  openGraph: {
    title: "Terms | JAMARQ Digital",
    description:
      "Practical terms for using the JAMARQ Digital website, contact forms, and public project information.",
    url: "https://jamarq.digital/terms",
    type: "website",
    images: [
      {
        url: "https://jamarq.digital/og.jpg",
        width: 1200,
        height: 630,
        alt: "JAMARQ Digital",
      },
    ],
  },
};

const sections = [
  {
    title: "Website use",
    items: [
      "This site provides general information about JAMARQ Digital services, process, public work examples, and contact paths.",
      "You may browse public pages and submit the contact form for legitimate project, support, or business inquiries.",
      "Do not attempt to access admin-only areas, disrupt site operation, submit abusive content, or misuse forms.",
    ],
  },
  {
    title: "Project information",
    items: [
      "Public case studies and work summaries are provided for context and may not describe every project detail, private constraint, or current client need.",
      "Submitting a form does not create a service agreement, support agreement, or guaranteed availability.",
      "Any paid work, maintenance, or implementation scope must be confirmed in a separate written agreement or approved project record.",
    ],
  },
  {
    title: "Content and ownership",
    items: [
      "JAMARQ Digital site copy, design, code, images, and brand assets may not be copied or reused as a competing public site without permission.",
      "Client names, logos, screenshots, and project references remain tied to their respective owners.",
      "You are responsible for making sure any files, assets, or instructions you provide are yours to share and use.",
    ],
  },
  {
    title: "Reliability and limits",
    items: [
      "The site is maintained with reasonable care, but public pages may change, move, or become temporarily unavailable.",
      "Information on this site is not legal, tax, security, or compliance advice.",
      "To the extent allowed by law, JAMARQ Digital is not responsible for indirect losses from using, relying on, or being unable to access this public website.",
    ],
  },
];

export default function TermsPage() {
  return (
    <main id="main-content" className="min-h-screen bg-jamarq-black text-jamarq-white">
      <section className="mx-auto max-w-4xl px-5 pb-20 pt-32 md:px-10">
        <p className="text-xs uppercase tracking-[0.35em] text-jamarq-gray">
          Terms
        </p>
        <h1 className="mt-5 text-4xl font-semibold leading-tight md:text-5xl">
          Website terms.
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-jamarq-gray">
          These terms cover use of the public JAMARQ Digital website and contact
          forms. They are intentionally plain-language and do not replace a
          project agreement, proposal, or statement of work.
        </p>
        <p className="mt-3 text-sm text-jamarq-gray">
          Last updated May 10, 2026.
        </p>

        <div className="mt-10 space-y-5">
          {sections.map((section) => (
            <section
              key={section.title}
              className="rounded-2xl border border-slate/60 bg-steel/70 p-6"
            >
              <h2 className="text-2xl font-semibold text-mist">{section.title}</h2>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-jamarq-gray">
                {section.items.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="text-jamarq-cyan">-</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <section className="mt-8 rounded-2xl border border-slate/60 bg-jamarq-black/40 p-6">
          <h2 className="text-2xl font-semibold text-mist">Questions</h2>
          <p className="mt-3 text-sm leading-6 text-jamarq-gray">
            For questions about these terms, use the{" "}
            <Link href="/contact" className="link-underline text-jamarq-cyan">
              contact form
            </Link>
            . That keeps requests in the reviewed site intake path.
          </p>
        </section>
      </section>
      <Footer />
    </main>
  );
}
