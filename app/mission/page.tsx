import type { Metadata } from "next";
import Footer from "@/components/Footer";

const principles = [
  {
    title: "People stay in control",
    copy: "Technology should support human judgment, approvals, and accountability instead of hiding decisions behind automation."
  },
  {
    title: "Clarity beats speed theater",
    copy: "Fast output is not useful if the system becomes confusing to run, update, or maintain later."
  },
  {
    title: "Complexity has to earn its place",
    copy: "If a simpler stack can do the job well, JAMARQ uses the simpler stack."
  },
  {
    title: "The system should stay understandable",
    copy: "Code, hosting, content, and responsibilities should be clear before handoff, not sorted out later."
  },
  {
    title: "Tools should create independence",
    copy: "The work should leave clients with more control and fewer dependencies, not a new layer of lock-in."
  },
  {
    title: "Work should match real operations",
    copy: "Websites, admin tools, and workflows should reflect how the business actually runs day to day."
  }
];

export const metadata: Metadata = {
  title: "Principles",
  description: "The principles behind JAMARQ's work: clear systems, direct communication, client control, and long-term maintainability.",
  alternates: {
    canonical: "https://jamarq.digital/mission"
  },
  openGraph: {
    title: "Principles",
    description: "The principles behind JAMARQ's work: clear systems, direct communication, client control, and long-term maintainability.",
    url: "https://jamarq.digital/mission",
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
    title: "Principles",
    description: "The principles behind JAMARQ's work: clear systems, direct communication, client control, and long-term maintainability.",
    images: ["https://jamarq.digital/og.jpg"],
    creator: "@jamarqdigital",
    site: "@jamarqdigital"
  }
};

export default function MissionPage() {
  const breadcrumbStructuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://jamarq.digital/"
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Principles",
        item: "https://jamarq.digital/mission"
      }
    ]
  };

  return (
    <main id="main-content" className="min-h-screen bg-jamarq-black text-jamarq-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }}
      />
      <section className="pt-32 pb-24 md:pb-32" aria-label="Principles">
        <div className="max-w-5xl mx-auto px-5 md:px-10 space-y-10">
          <div className="max-w-3xl space-y-4">
            <p className="text-xs uppercase tracking-[0.35em] text-jamarq-gray">Principles</p>
            <h1 className="text-4xl md:text-5xl font-semibold leading-tight">Principles</h1>
            <p className="text-lg md:text-xl text-mist leading-relaxed">
              The work is built around a few simple rules: keep clients in control, use complexity carefully,
              and make sure the system still makes sense after launch.
            </p>
            <p className="text-jamarq-gray leading-relaxed">
              These principles shape how JAMARQ approaches websites, rebuilds, and the systems behind them.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {principles.map((item) => (
              <article
                key={item.title}
                className="h-full rounded-2xl border border-slate/60 bg-jamarq-black/20 p-6 space-y-3"
              >
                <h2 className="text-2xl font-semibold">{item.title}</h2>
                <p className="text-jamarq-gray leading-relaxed">{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
