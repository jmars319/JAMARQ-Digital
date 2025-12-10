import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Midway Mobile Storage Case Study — JAMARQ Digital",
  description: "A complete rebuild of a local storage company's digital system with custom inventory management, quote workflow, and admin tools.",
};

export default function MMSCaseStudyPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Midway Mobile Storage Case Study",
    "description": "A complete rebuild of a storage company's digital platform with custom inventory system and automated quote workflow.",
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
            A complete rebuild of a local storage company&rsquo;s digital system.
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
              Midway Mobile Storage needed a website that actually worked. Their old site was barebones, slow, and lacked the tools customers needed to request quotes or understand inventory. JAMARQ rebuilt their entire platform into a modern, intentional system with inventory controls, a custom quote form, and a streamlined admin workflow.
            </p>
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
                <span>No mobile optimization</span>
              </li>
              <li className="flex gap-3">
                <span className="text-jamarq-cyan">•</span>
                <span>No way for customers to request quotes without calling</span>
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
              JAMARQ designed and built a fully custom website with clear structure, a modern design system, and functional tools that matched how the owner actually operates.
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
                <span>Quote request form with email integration</span>
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
                <span>Mobile-first performance</span>
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
              The result is a professional platform built around clarity, control, and long-term sustainability.
            </p>
          </div>
        </div>
      </section>

      {/* The Results Section */}
      <section className="py-24 md:py-32" aria-label="The results">
        <div className="max-w-4xl mx-auto px-5 md:px-10">
          <h2 className="text-3xl md:text-4xl font-semibold mb-8">
            The Results
          </h2>
          <div className="space-y-6 text-lg text-jamarq-gray leading-relaxed">
            <ul className="space-y-4">
              <li className="flex gap-3">
                <span className="text-jamarq-cyan">•</span>
                <span>Customers now submit quote requests directly from the site</span>
              </li>
              <li className="flex gap-3">
                <span className="text-jamarq-cyan">•</span>
                <span>Inventory is easy to access and understand</span>
              </li>
              <li className="flex gap-3">
                <span className="text-jamarq-cyan">•</span>
                <span>Admin updates are simplified</span>
              </li>
              <li className="flex gap-3">
                <span className="text-jamarq-cyan">•</span>
                <span>The brand reads as legitimate, modern, and trustworthy</span>
              </li>
              <li className="flex gap-3">
                <span className="text-jamarq-cyan">•</span>
                <span>The owner now has a system that supports future growth and advertising</span>
              </li>
            </ul>
            <p className="text-xl text-mist font-semibold pt-6">
              A fast, functional, intentional system built to replace guesswork with clarity.
            </p>
          </div>
        </div>
      </section>

      {/* Full Case Study CTA */}
      <section className="py-24 md:py-32 bg-steel" aria-label="Full case study">
        <div className="max-w-4xl mx-auto text-center px-5 md:px-10">
          <h3 className="text-2xl md:text-3xl font-semibold mb-6">
            Want the Full Technical Deep Dive?
          </h3>
          <p className="text-lg text-jamarq-gray leading-relaxed mb-8 max-w-2xl mx-auto">
            A detailed breakdown including inventory system architecture, admin panel features, and technical implementation is available upon request.
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
