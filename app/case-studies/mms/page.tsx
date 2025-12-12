import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";

const heroDescription =
  "A complete rebuild of a local storage company's digital system with elite performance optimization and proven business results.";

const galleryImages = [
  {
    src: "/case-studies/mms/home-page.webp",
    alt: "Midway Mobile Storage home page hero and CTA design",
    width: 1600,
    height: 1000,
    caption: "Home page redesign with clear CTAs and trust signals."
  },
  {
    src: "/case-studies/mms/admin-inventory-system.webp",
    alt: "Admin dashboard showing Midway Mobile Storage inventory controls",
    width: 1600,
    height: 1000,
    caption: "Custom unit inventory system with filters and ownership-ready controls."
  },
  {
    src: "/case-studies/mms/quote-form-mobile.webp",
    alt: "Quote request form on a mobile phone for Midway Mobile Storage",
    width: 775,
    height: 1600,
    caption: "Quote workflow on mobile—customers can submit requests 24/7."
  },
  {
    src: "/case-studies/mms/pagespeed-desktop.webp",
    alt: "PageSpeed Insights desktop score showing 98 out of 100",
    width: 1600,
    height: 1000,
    caption: "Desktop PageSpeed score at 98/100 on shared hosting."
  },
  {
    src: "/case-studies/mms/pagespeed-mobile.webp",
    alt: "PageSpeed Insights mobile score showing 89 out of 100",
    width: 1600,
    height: 1000,
    caption: "Mobile PageSpeed score boosted to 89/100."
  }
] as const;

export const metadata: Metadata = {
  title: "Midway Mobile Storage Case Study — JAMARQ Digital",
  description: heroDescription,
  alternates: {
    canonical: "https://jamarq.digital/case-studies/mms"
  },
  openGraph: {
    title: "Midway Mobile Storage Case Study — JAMARQ Digital",
    description: heroDescription,
    url: "https://jamarq.digital/case-studies/mms",
    type: "article",
    images: [
      {
        url: "https://jamarq.digital/case-studies/mms/og-midway-mobile-storage.jpg",
        width: 1200,
        height: 630,
        alt: "Midway Mobile Storage case study cover image"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Midway Mobile Storage Case Study — JAMARQ Digital",
    description: heroDescription,
    images: [
      {
        url: "https://jamarq.digital/case-studies/mms/og-midway-mobile-storage.jpg",
        width: 1200,
        height: 630,
        alt: "Midway Mobile Storage case study cover image"
      }
    ]
  }
};

export default function MMSCaseStudyPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Midway Mobile Storage Case Study",
    "description": heroDescription,
    "author": {
      "@type": "Person",
      "name": "Jason Marshall",
      "email": "jason@jamarq.digital"
    },
    "publisher": {
      "@type": "Organization",
      "name": "JAMARQ Digital",
      "logo": {
        "@type": "ImageObject",
        "url": "https://jamarq.digital/assets/logos/wordmark-dark.png"
      }
    },
    "image": "https://jamarq.digital/case-studies/mms/og-midway-mobile-storage.jpg",
    "datePublished": "2025-12-09",
    "dateModified": "2025-12-09"
  };

  return (
    <main id="main-content" className="min-h-screen bg-jamarq-black text-jamarq-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      {/* Hero Section */}
      <section 
        className="min-h-[60vh] flex items-center justify-center px-5 md:px-10"
        aria-label="Case study hero"
      >
        <div className="text-center max-w-4xl mx-auto">
          <p className="text-sm text-jamarq-cyan mb-4 uppercase tracking-wider">Case Study</p>
          <h1 className="text-4xl md:text-5xl font-semibold mb-6">
            Midway Mobile Storage
          </h1>
          <p className="text-xl md:text-2xl text-mist mb-6">
            {heroDescription}
          </p>
          <div className="space-x-4">
            <Link href="/work" className="text-sm text-jamarq-cyan hover:text-jamarq-magenta transition-colors">
              ← Back to Work
            </Link>
            <span className="text-jamarq-gray">|</span>
            <Link href="/" className="text-sm text-jamarq-cyan hover:text-jamarq-magenta transition-colors">
              Home
            </Link>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-24 md:py-32 bg-steel" aria-label="Project overview">
        <div className="max-w-4xl mx-auto px-5 md:px-10">
          <div className="space-y-6 text-lg text-jamarq-gray leading-relaxed">
            <p className="text-xl text-mist">
              Midway Mobile Storage needed a website that actually worked. Their old site was barebones, slow, and lacked the tools customers needed to request quotes or understand inventory. JAMARQ rebuilt the entire platform into a modern, intentional system with inventory controls, a custom quote form, streamlined admin workflow, and aggressive performance optimization that achieved a <span className="text-jamarq-cyan font-semibold">98/100 desktop score</span>—faster than 95% of websites globally.
            </p>
            <p>
              The rebuild launched November 25, 2025 with a focus on clarity, speed, and owner-friendly controls. Customers could finally browse inventory, request quotes without calling, and trust the legitimacy of the brand thanks to consistent design and messaging.
            </p>
            <div className="mt-8 p-6 rounded-lg border border-slate bg-jamarq-black/40">
              <p className="text-sm uppercase tracking-wider text-jamarq-cyan mb-2">Timeline Highlight</p>
              <p className="text-2xl font-semibold text-mist mb-2">
                Launched November 25, 2025
              </p>
              <p className="text-lg text-jamarq-gray">
                First online quote received December 11, 2025 — just <span className="font-semibold text-jamarq-white">16 days after launch</span>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 md:py-32" aria-label="Case study visuals">
        <div className="max-w-5xl mx-auto px-5 md:px-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
            <div>
              <p className="text-sm uppercase tracking-wider text-jamarq-cyan mb-2">Snapshots</p>
              <h2 className="text-3xl md:text-4xl font-semibold">
                System Screens & Performance Proof
              </h2>
            </div>
            <p className="text-jamarq-gray max-w-xl">
              Screenshots from the rebuilt interface, admin workflow, and PageSpeed Insights scores that document the 98/100 desktop performance result.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {galleryImages.map((image) => (
              <figure
                key={image.src}
                className="bg-jamarq-black rounded-lg border border-slate/60 p-4 flex flex-col gap-4"
              >
                <div className="w-full overflow-hidden rounded-md border border-slate/40">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={image.width}
                    height={image.height}
                    loading="lazy"
                    sizes="(min-width: 768px) 45vw, 90vw"
                    className="w-full h-auto object-cover"
                  />
                </div>
                <figcaption className="text-sm text-jamarq-gray">
                  {image.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* The Challenge Section */}
      <section className="py-24 md:py-32" aria-label="The challenge">
        <div className="max-w-4xl mx-auto px-5 md:px-10">
          <h2 className="text-3xl md:text-4xl font-semibold mb-8">
            The Challenge
          </h2>
          <div className="space-y-6 text-lg text-jamarq-gray leading-relaxed">
            <p className="mb-4">
              Their previous website was essentially unusable:
            </p>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <span className="text-jamarq-cyan">•</span>
                <span>No functioning forms</span>
              </li>
              <li className="flex gap-3">
                <span className="text-jamarq-cyan">•</span>
                <span>No real storage unit information</span>
              </li>
              <li className="flex gap-3">
                <span className="text-jamarq-cyan">•</span>
                <span>No brand consistency</span>
              </li>
              <li className="flex gap-3">
                <span className="text-jamarq-cyan">•</span>
                <span>No mobile optimization (74/100 mobile score)</span>
              </li>
              <li className="flex gap-3">
                <span className="text-jamarq-cyan">•</span>
                <span>Extremely slow load times (3.5+ seconds)</span>
              </li>
              <li className="flex gap-3">
                <span className="text-jamarq-cyan">•</span>
                <span>No way for customers to request quotes without calling</span>
              </li>
              <li className="flex gap-3">
                <span className="text-jamarq-cyan">•</span>
                <span>All inquiries required phone calls during business hours</span>
              </li>
            </ul>
            <p className="pt-4">
              The lack of structure made it difficult for customers to trust the business or understand what was available.
            </p>
          </div>
        </div>
      </section>

      {/* The Solution Section */}
      <section className="py-24 md:py-32 bg-steel" aria-label="The solution">
        <div className="max-w-4xl mx-auto px-5 md:px-10">
          <h2 className="text-3xl md:text-4xl font-semibold mb-8">
            The Solution
          </h2>
          <div className="space-y-6 text-lg text-jamarq-gray leading-relaxed">
            <p>
              JAMARQ designed and built a fully custom website with clear structure, a modern design system, functional tools, and elite performance optimization built around the owner&rsquo;s actual workflow.
            </p>
            <p className="text-mist font-semibold pt-4">
              Delivered features include:
            </p>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <span className="text-jamarq-cyan">•</span>
                <span>Clean, trustworthy visual identity and layout</span>
              </li>
              <li className="flex gap-3">
                <span className="text-jamarq-cyan">•</span>
                <span>Custom unit inventory system</span>
              </li>
              <li className="flex gap-3">
                <span className="text-jamarq-cyan">•</span>
                <span>Quote request form with database integration</span>
              </li>
              <li className="flex gap-3">
                <span className="text-jamarq-cyan">•</span>
                <span>Job application form</span>
              </li>
              <li className="flex gap-3">
                <span className="text-jamarq-cyan">•</span>
                <span>Admin tools for updating key information</span>
              </li>
              <li className="flex gap-3">
                <span className="text-jamarq-cyan">•</span>
                <span> <span className="font-semibold text-jamarq-white">Aggressive performance optimization</span> (98/100 desktop, 89/100 mobile)</span>
              </li>
              <li className="flex gap-3">
                <span className="text-jamarq-cyan">•</span>
                <span>Mobile-first responsive design</span>
              </li>
              <li className="flex gap-3">
                <span className="text-jamarq-cyan">•</span>
                <span>SEO foundations + deployment</span>
              </li>
              <li className="flex gap-3">
                <span className="text-jamarq-cyan">•</span>
                <span>A flexible system ready for future advertising</span>
              </li>
            </ul>
            <p className="text-xl text-mist font-semibold pt-6">
              The result is a professional platform built around clarity, control, speed, and long-term sustainability.
            </p>
          </div>
        </div>
      </section>

      {/* The Results Section */}
      <section className="py-24 md:py-32" aria-label="The results">
        <div className="max-w-5xl mx-auto px-5 md:px-10">
          <h2 className="text-3xl md:text-4xl font-semibold mb-10">
            The Results
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-lg text-jamarq-gray leading-relaxed">
            <div className="space-y-5 bg-jamarq-black rounded-lg border border-slate/60 p-6">
              <h3 className="text-2xl font-semibold text-mist mb-2">Performance</h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <span className="text-jamarq-cyan">•</span>
                  <span><span className="font-semibold text-jamarq-white">Desktop: 98/100 PageSpeed score</span> (top 5% globally)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-jamarq-cyan">•</span>
                  <span><span className="font-semibold text-jamarq-white">Mobile: 89/100</span> (+20% improvement from 74)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-jamarq-cyan">•</span>
                  <span>Load time: <span className="font-semibold text-jamarq-white">0.9 seconds</span> on desktop (down from 3.5s)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-jamarq-cyan">•</span>
                  <span>Zero layout shift with instant interactivity</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-jamarq-cyan">•</span>
                  <span>Faster than most Vercel-hosted sites despite shared GoDaddy hosting</span>
                </li>
              </ul>
            </div>
            <div className="space-y-5 bg-jamarq-black rounded-lg border border-slate/60 p-6">
              <h3 className="text-2xl font-semibold text-mist mb-2">Business Impact</h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <span className="text-jamarq-cyan">•</span>
                  <span><span className="font-semibold text-jamarq-white">First online quote received within 16 days of launch</span> (December 11, 2025)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-jamarq-cyan">•</span>
                  <span>Customers now submit quote requests 24/7 without calling</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-jamarq-cyan">•</span>
                  <span>Structured data collection improves quote follow-up</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-jamarq-cyan">•</span>
                  <span>Inventory is easy to access and understand</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-jamarq-cyan">•</span>
                  <span>Admin updates are simplified and owner-led</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-jamarq-cyan">•</span>
                  <span>The brand finally reads as legitimate, modern, and trustworthy</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-jamarq-cyan">•</span>
                  <span>Fast load times increase trust while supporting future advertising</span>
                </li>
              </ul>
            </div>
          </div>
          <p className="text-xl text-mist font-semibold pt-10">
            Timeline to first conversion: <span className="text-jamarq-cyan">16 days</span>. Clarity, performance, and workflow alignment created measurable business results.
          </p>
        </div>
      </section>

      {/* Full Case Study CTA */}
      <section className="py-24 md:py-32 bg-steel" aria-label="Full case study">
        <div className="max-w-4xl mx-auto text-center px-5 md:px-10">
          <h3 className="text-2xl md:text-3xl font-semibold mb-6">
            Want the Full Technical Deep Dive?
          </h3>
          <p className="text-lg text-jamarq-gray leading-relaxed mb-8 max-w-2xl mx-auto">
            A detailed breakdown including architecture decisions, database design, content modeling, and front-end performance techniques is available upon request.
          </p>
          <a
            href="mailto:jason@jamarq.digital?subject=MMS Full Case Study Request"
            className="inline-block bg-jamarq-cyan text-jamarq-black px-8 py-3 rounded-md font-semibold text-lg hover:bg-opacity-90 transition-all focus:outline-none focus:ring-2 focus:ring-jamarq-cyan focus:ring-offset-2 focus:ring-offset-steel"
          >
            Request Full Case Study
          </a>
        </div>
      </section>

      {/* Navigation CTA */}
      <section className="py-16" aria-label="Navigation">
        <div className="max-w-4xl mx-auto px-5 md:px-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 border-t border-slate pt-8">
            <Link 
              href="/case-studies/trbg"
              className="text-jamarq-cyan hover:text-jamarq-magenta transition-colors font-semibold"
            >
              ← Previous: Thunder Road Bar & Grill
            </Link>
            <Link 
              href="/work"
              className="text-jamarq-cyan hover:text-jamarq-magenta transition-colors font-semibold"
            >
              Back to All Work →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
