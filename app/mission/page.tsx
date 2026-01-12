import type { Metadata } from "next";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Mission",
  description: "Our mission is to build systems that respect human agency, keep people in control, and deliver clarity over speed.",
  alternates: {
    canonical: "https://jamarq.digital/mission"
  },
  openGraph: {
    title: "Mission",
    description: "Our mission is to build systems that respect human agency, keep people in control, and deliver clarity over speed.",
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
    title: "Mission",
    description: "Our mission is to build systems that respect human agency, keep people in control, and deliver clarity over speed.",
    images: ["https://jamarq.digital/og.jpg"],
    creator: "@jamarqdigital",
    site: "@jamarqdigital"
  }
};

export default function MissionPage() {
  return (
    <main id="main-content" className="min-h-screen bg-jamarq-black text-jamarq-white">
      <section className="pt-32 pb-24" aria-label="Mission statement">
        <div className="max-w-4xl mx-auto px-5 md:px-10 space-y-8">
          <p className="text-lg md:text-xl font-semibold text-mist">With you, not for you.</p>
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight">Mission</h1>
          <div className="space-y-6 text-jamarq-gray leading-relaxed">
            <h2 className="text-2xl font-semibold text-jamarq-white">Our Mission</h2>
            <p className="text-lg text-mist">We build systems that respect human agency.</p>
            <ol className="space-y-6 list-decimal list-inside">
              <li className="space-y-2">
                <p className="text-mist font-semibold">Automation is a tool, not an author.</p>
                <p>Technology exists to extend human capability, not to replace human judgment or responsibility.</p>
              </li>
              <li className="space-y-2">
                <p className="text-mist font-semibold">Meaning is maintained through authorship.</p>
                <p>Tools should preserve continuity between intention, action, and outcome, not obscure it.</p>
              </li>
              <li className="space-y-2">
                <p className="text-mist font-semibold">Clarity matters more than speed.</p>
                <p>Faster output without understanding is not progress.</p>
              </li>
              <li className="space-y-2">
                <p className="text-mist font-semibold">Humans remain in the loop by design.</p>
                <p>Review, pause, and consent are features, not friction.</p>
              </li>
              <li className="space-y-2">
                <p className="text-mist font-semibold">Systems should tell the truth about what they do.</p>
                <p>No hidden decisions. No false intelligence. No performative autonomy.</p>
              </li>
              <li className="space-y-2">
                <p className="text-mist font-semibold">Good tools create independence, not dependency.</p>
                <p>Our work should leave people more capable than when we arrived.</p>
              </li>
            </ol>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
