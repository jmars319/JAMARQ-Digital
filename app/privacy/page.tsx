import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy",
  description:
    "How JAMARQ Digital handles contact form submissions, lightweight analytics, and service providers.",
  alternates: {
    canonical: "https://jamarq.digital/privacy",
  },
  openGraph: {
    title: "Privacy | JAMARQ Digital",
    description:
      "How JAMARQ Digital handles contact form submissions, lightweight analytics, and service providers.",
    url: "https://jamarq.digital/privacy",
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
    title: "Information collected",
    items: [
      "Contact form submissions can include your name, email address, company, budget range, project details, selected subject, and the page or call-to-action that opened the form.",
      "Lightweight first-party analytics record public page paths and referrers so the site owner can understand which pages are being used. The first-party tracker respects browser Do Not Track signals.",
      "Vercel Analytics and Speed Insights may collect performance and visit information according to Vercel's product behavior.",
    ],
  },
  {
    title: "How it is used",
    items: [
      "Contact details are used to reply to project, support, or maintenance requests.",
      "Analytics are used to spot broken routes, low-value pages, and performance issues.",
      "Contact form data is not used for a newsletter, resale list, or unrelated marketing automation.",
    ],
  },
  {
    title: "Service providers",
    items: [
      "The site is hosted on Vercel.",
      "Contact records and lightweight site content can be stored in Turso/libSQL.",
      "Contact notifications can be sent through SendGrid when email delivery is configured.",
    ],
  },
  {
    title: "Retention and control",
    items: [
      "Contact records are kept only as long as they are useful for intake, support, records, or follow-up.",
      "You can use the contact form to ask for a correction or deletion of a prior submission.",
      "Admin access is protected and is not intended for public indexing.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <main id="main-content" className="min-h-screen bg-jamarq-black text-jamarq-white">
      <section className="mx-auto max-w-4xl px-5 pb-20 pt-32 md:px-10">
        <p className="text-xs uppercase tracking-[0.35em] text-jamarq-gray">
          Privacy
        </p>
        <h1 className="mt-5 text-4xl font-semibold leading-tight md:text-5xl">
          Privacy and data handling.
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-jamarq-gray">
          This page describes the current JAMARQ Digital site behavior. Public
          contact is form-based so inquiries arrive with enough context to
          review and route properly.
        </p>
        <p className="mt-3 text-sm text-jamarq-gray">Last updated May 9, 2026.</p>

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
          <h2 className="text-2xl font-semibold text-mist">Contact path</h2>
          <p className="mt-3 text-sm leading-6 text-jamarq-gray">
            For privacy questions or data requests, use the{" "}
            <Link href="/contact" className="link-underline text-jamarq-cyan">
              contact form
            </Link>
            . That keeps requests in the same reviewed intake path as the rest
            of the site.
          </p>
        </section>
      </section>
      <Footer />
    </main>
  );
}
