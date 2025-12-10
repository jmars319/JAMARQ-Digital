import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "JAMARQ Digital — Modern Web Development & Digital Systems",
  description: "Custom web development in Winston-Salem, NC. Clean, intentional digital systems built for clarity and speed. No templates. No shortcuts. Build with intention.",
  alternates: {
    canonical: "https://www.jamarq.digital/"
  },
  openGraph: {
    title: "JAMARQ Digital — Build with intention",
    description: "Modern digital systems designed for clarity, speed, and long-term stability.",
    url: "https://www.jamarq.digital/",
    type: "website"
  }
};

export default function Home() {
  return (
    <main id="main-content" className="min-h-screen bg-jamarq-black text-jamarq-white">
      {/* Hero Section */}
      <section 
        className="min-h-screen flex items-center justify-center px-5 md:px-10"
        aria-label="Hero section"
      >
        <div className="text-center max-w-2xl mx-auto">
          <div className="mb-8 flex justify-center">
            <Image
              src="/assets/logos/wordmark-dark.png"
              alt="JAMARQ Digital - Modern Web Development"
              width={400}
              height={100}
              priority
              className="w-auto h-16 md:h-20"
            />
          </div>
          
          <h1 className="sr-only">JAMARQ Digital</h1>
          
          <p className="text-xl md:text-2xl text-jamarq-gray mb-8">
            Digital + Creative Studio
          </p>
          
          <p className="text-lg mb-4" role="text" aria-label="Services offered">
            Websites | Brand Identity | Consulting
          </p>
          
          <a
            href="mailto:hello@jamarq.digital?subject=Project Inquiry"
            className="inline-block bg-jamarq-cyan text-jamarq-black px-8 py-3 rounded-md font-semibold text-lg hover:bg-opacity-90 transition-all mt-8 focus:outline-none focus:ring-2 focus:ring-jamarq-cyan focus:ring-offset-2 focus:ring-offset-jamarq-black"
            aria-label="Contact JAMARQ via email to discuss your project"
          >
            Work With Me
          </a>
        </div>
      </section>

      {/* Sub-Hero Section */}
      <section className="py-24 md:py-32 flex items-center justify-center" aria-label="What we do">
        <div className="max-w-3xl mx-auto text-center px-5 md:px-10">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            Build with intention.
          </h2>
          <p className="text-lg md:text-xl text-mist mb-4 leading-relaxed">
            Modern digital systems designed for clarity, speed, and long-term stability.
          </p>
          <p className="text-base text-jamarq-gray">
            Custom websites. Thoughtful design. No templates. No noise.
          </p>
        </div>
      </section>

      {/* What I Build Section */}
      <section className="py-24 md:py-32 bg-steel" aria-label="Services">
        <div className="max-w-6xl mx-auto px-5 md:px-10">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-16">
            What I Build
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
            {/* Service 1 */}
            <div className="max-w-sm">
              <h3 className="text-2xl font-semibold mb-4 text-center">Custom Websites</h3>
              <p className="text-jamarq-gray leading-relaxed mb-4">
                Hand-built, modern, and responsive. Lightweight architecture. Zero templates. Zero bloat.
              </p>
              <a href="/services" className="text-sm text-jamarq-cyan hover:text-jamarq-magenta transition-colors">
                View all services →
              </a>
            </div>

            {/* Service 2 */}
            <div className="max-w-sm">
              <h3 className="text-2xl font-semibold mb-4 text-center">Digital Systems</h3>
              <p className="text-jamarq-gray leading-relaxed">
                Workflows, integrations, and infrastructure that support how your business actually works.
              </p>
            </div>

            {/* Service 3 */}
            <div className="max-w-sm">
              <h3 className="text-2xl font-semibold mb-4 text-center">Ongoing Support</h3>
              <p className="text-jamarq-gray leading-relaxed">
                Maintenance plans, updates, monitoring, and performance care for long-term stability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Transition 1 */}
      <section className="py-16 flex items-center justify-center bg-steel" aria-label="Transition">
        <div className="max-w-3xl mx-auto text-center px-5 md:px-10">
          <p className="text-lg text-jamarq-gray">
            Every project follows a clear, structured process.
          </p>
        </div>
      </section>

      {/* How I Work Section */}
      <section className="py-24 md:py-32" aria-label="Process overview">
        <div className="max-w-6xl mx-auto px-5 md:px-10">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-16">
            How I Work
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
            {/* Step 1 */}
            <div className="max-w-sm">
              <div className="text-jamarq-cyan text-5xl font-semibold mb-4 text-center">01</div>
              <h3 className="text-2xl font-semibold mb-4 text-center">Discovery</h3>
              <p className="text-jamarq-gray leading-relaxed mb-4">
                We define your goals, constraints, and what the system needs to accomplish. Clarity first. Design second.
              </p>
              <div className="text-center">
                <a href="/process" className="text-sm text-jamarq-cyan hover:text-jamarq-magenta transition-colors">
                  See the full process →
                </a>
              </div>
            </div>

            {/* Step 2 */}
            <div className="max-w-sm">
              <div className="text-jamarq-cyan text-5xl font-semibold mb-4 text-center">02</div>
              <h3 className="text-2xl font-semibold mb-4 text-center">Build</h3>
              <p className="text-jamarq-gray leading-relaxed">
                A clean, intentional design translated into a fast, modern digital system. Every component is built from scratch.
              </p>
            </div>

            {/* Step 3 */}
            <div className="max-w-sm">
              <div className="text-jamarq-cyan text-5xl font-semibold mb-4 text-center">03</div>
              <h3 className="text-2xl font-semibold mb-4 text-center">Launch & Support</h3>
              <p className="text-jamarq-gray leading-relaxed">
                A structured rollout, documentation, and a support window. Everything you need to run your site with confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Transition 2 */}
      <section className="py-16 flex items-center justify-center" aria-label="Transition">
        <div className="max-w-3xl mx-auto text-center px-5 md:px-10">
          <p className="text-lg text-jamarq-gray">
            The result: a system you can rely on.
          </p>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="py-24 md:py-32 bg-steel" aria-label="Value proposition">
        <div className="max-w-6xl mx-auto px-5 md:px-10">
          <p className="text-xl md:text-2xl text-center mb-16 text-mist max-w-4xl mx-auto leading-relaxed">
            You get a modern digital system that feels clean, fast, and intentional.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 max-w-4xl mx-auto">
            {/* Value 1 */}
            <div>
              <h3 className="text-2xl font-semibold mb-4">A Website Built for Clarity</h3>
              <p className="text-jamarq-gray leading-relaxed">
                Focused design. Precise typography. A layout that directs attention, not distracts from it.
              </p>
            </div>

            {/* Value 2 */}
            <div>
              <h3 className="text-2xl font-semibold mb-4">A System You Can Rely On</h3>
              <p className="text-jamarq-gray leading-relaxed">
                Stable infrastructure. Clean code. A foundation built for long-term use, not short-term workarounds.
              </p>
            </div>

            {/* Value 3 */}
            <div>
              <h3 className="text-2xl font-semibold mb-4">A Process That Respects Your Time</h3>
              <p className="text-jamarq-gray leading-relaxed">
                Clear communication. Structured milestones. No guesswork.
              </p>
            </div>

            {/* Value 4 */}
            <div>
              <h3 className="text-2xl font-semibold mb-4">Documentation & Support</h3>
              <p className="text-jamarq-gray leading-relaxed">
                A full handoff. Training if needed. A support window to keep everything stable after launch.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Transition 3 */}
      <section className="py-16 flex items-center justify-center bg-steel" aria-label="Transition">
        <div className="max-w-3xl mx-auto text-center px-5 md:px-10">
          <p className="text-lg text-jamarq-gray">
            See how this approach creates real results.
          </p>
        </div>
      </section>

      {/* Work Section - Case Studies */}
      <section className="py-24 md:py-32" aria-label="Portfolio and case studies">
        <div className="max-w-6xl mx-auto px-5 md:px-10">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">
            Work
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 max-w-5xl mx-auto mb-12">
            {/* TRBG Case Study Card */}
            <a 
              href="/case-studies/trbg"
              className="group p-8 bg-steel rounded-lg hover:bg-slate transition-all duration-300"
            >
              <div className="mb-4">
                <p className="text-sm text-jamarq-cyan uppercase tracking-wider mb-2">
                  Web Development
                </p>
                <h3 className="text-2xl font-semibold mb-4 group-hover:text-jamarq-cyan transition-colors">
                  Thunder Road Bar & Grill
                </h3>
              </div>
              <p className="text-jamarq-gray leading-relaxed mb-6">
                Custom restaurant website rebuild. Load times improved from 4–6 seconds to under 1.5 seconds. Simple admin workflow for weekly specials.
              </p>
              <div className="flex items-center text-jamarq-cyan group-hover:text-jamarq-magenta transition-colors font-semibold">
                View Case Study →
              </div>
            </a>

            {/* MMS Case Study Card */}
            <a 
              href="/case-studies/mms"
              className="group p-8 bg-steel rounded-lg hover:bg-slate transition-all duration-300"
            >
              <div className="mb-4">
                <p className="text-sm text-jamarq-cyan uppercase tracking-wider mb-2">
                  Web Development
                </p>
                <h3 className="text-2xl font-semibold mb-4 group-hover:text-jamarq-cyan transition-colors">
                  Midway Mobile Storage
                </h3>
              </div>
              <p className="text-jamarq-gray leading-relaxed mb-6">
                Complete digital rebuild with custom inventory system and automated quote workflow. Owner-friendly admin panel.
              </p>
              <div className="flex items-center text-jamarq-cyan group-hover:text-jamarq-magenta transition-colors font-semibold">
                View Case Study →
              </div>
            </a>
          </div>

          <div className="text-center">
            <a 
              href="/case-studies" 
              className="inline-block text-jamarq-cyan hover:text-jamarq-magenta transition-colors font-semibold text-lg"
            >
              View All Case Studies →
            </a>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-24 md:py-32 bg-steel" aria-label="Contact call-to-action">
        <div className="max-w-4xl mx-auto text-center px-5 md:px-10">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            Start a Conversation
          </h2>
          <p className="text-lg text-jamarq-gray leading-relaxed mb-8 max-w-2xl mx-auto">
            Whether you're starting from scratch or rebuilding something outdated, I can help you design a clear, modern digital system that fits your business.
          </p>
          
          <div className="space-y-6">
            <p className="text-xl">
              <a 
                href="mailto:hello@jamarq.digital" 
                className="text-jamarq-cyan hover:text-jamarq-magenta transition-colors"
              >
                hello@jamarq.digital
              </a>
            </p>
            
            <a
              href="mailto:hello@jamarq.digital?subject=Project Inquiry"
              className="inline-block bg-jamarq-cyan text-jamarq-black px-8 py-3 rounded-md font-semibold text-lg hover:bg-opacity-90 transition-all focus:outline-none focus:ring-2 focus:ring-jamarq-cyan focus:ring-offset-2 focus:ring-offset-steel"
            >
              Get in Touch
            </a>
            
            <p className="text-sm text-jamarq-gray mt-4">
              Or <a href="/contact" className="text-jamarq-cyan hover:text-jamarq-magenta transition-colors">view all contact options</a>
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-slate" role="contentinfo">
        <div className="max-w-6xl mx-auto px-5 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 justify-items-center">
            {/* Brand */}
            <div className="text-center">
              <Image
                src="/assets/logos/wordmark-dark.png"
                alt="JAMARQ Digital"
                width={200}
                height={50}
                className="h-12 md:h-16 w-auto mx-auto mb-2"
              />
              <p className="text-jamarq-gray text-sm">Build with intention.</p>
            </div>

            {/* Navigation */}
            <div className="text-center">
              <h4 className="font-semibold mb-3 text-sm">Navigation</h4>
              <nav className="space-y-2">
                <a href="/" className="block text-jamarq-gray text-sm hover:text-jamarq-cyan transition-colors">Home</a>
                <a href="/services" className="block text-jamarq-gray text-sm hover:text-jamarq-cyan transition-colors">Services</a>
                <a href="/process" className="block text-jamarq-gray text-sm hover:text-jamarq-cyan transition-colors">Process</a>
                <a href="/work" className="block text-jamarq-gray text-sm hover:text-jamarq-cyan transition-colors">Work</a>
                <a href="/contact" className="block text-jamarq-gray text-sm hover:text-jamarq-cyan transition-colors">Contact</a>
              </nav>
            </div>

            {/* Contact */}
            <div className="text-center">
              <h4 className="font-semibold mb-3 text-sm">Contact</h4>
              <p className="text-jamarq-gray text-xs mb-2">Based in Winston-Salem, North Carolina</p>
              <p className="text-jamarq-gray text-xs mb-3">Serving businesses nationwide</p>
              <a 
                href="mailto:hello@jamarq.digital" 
                className="text-jamarq-gray text-sm hover:text-jamarq-cyan transition-colors"
              >
                hello@jamarq.digital
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-slate pt-6 text-center text-jamarq-gray text-xs">
            <p>&copy; 2025 JAMARQ Digital. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
