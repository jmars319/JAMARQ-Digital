import type { Metadata } from "next";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Services — JAMARQ Digital",
  description: "Custom web development, digital systems, and ongoing support. No templates. No shortcuts. Clean, intentional architecture built to last.",
};

export default function ServicesPage() {
  return (
    <main id="main-content" className="min-h-screen bg-jamarq-black text-jamarq-white">
      {/* Hero Section */}
      <section 
        className="min-h-[60vh] flex items-center justify-center px-5 md:px-10"
        aria-label="Services hero"
      >
        <div className="text-center max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-semibold mb-6">
            Services built with intention.
          </h1>
          <p className="text-xl md:text-2xl text-mist">
            Clean, modern digital systems. Built to last. Designed for clarity.
          </p>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="py-24 md:py-32 px-5 md:px-10 bg-steel" aria-label="Core services">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 justify-items-center">
            {/* Service 1 */}
            <div className="p-8 bg-jamarq-black rounded-lg text-center">
              <h2 className="text-2xl font-semibold mb-4">Custom Website Design & Development</h2>
              <p className="text-jamarq-gray mb-6 leading-relaxed">
                Hand-built, fast, and stable. No templates. No page builders. A clean foundation made specifically for your business.
              </p>
              <div className="space-y-2 text-center">
                <p className="text-sm font-semibold text-mist mb-3">Included:</p>
                <ul className="space-y-2 text-sm text-jamarq-gray">
                  <li>• Modern, responsive design</li>
                  <li>• Performance optimization</li>
                  <li>• Accessibility considerations</li>
                  <li>• SEO-ready structure</li>
                  <li>• Clean, maintainable code</li>
                </ul>
              </div>
            </div>

            {/* Service 2 */}
            <div className="p-8 bg-jamarq-black rounded-lg text-center">
              <h2 className="text-2xl font-semibold mb-4">Digital System Architecture</h2>
              <p className="text-jamarq-gray mb-6 leading-relaxed">
                Workflows, integrations, automation, and hosting structures. Your digital infrastructure — simplified, unified, intentional.
              </p>
              <div className="space-y-2 text-center">
                <p className="text-sm font-semibold text-mist mb-3">Included:</p>
                <ul className="space-y-2 text-sm text-jamarq-gray">
                  <li>• System planning and architecture</li>
                  <li>• API integrations</li>
                  <li>• Workflow automation</li>
                  <li>• Infrastructure setup</li>
                  <li>• Documentation</li>
                </ul>
              </div>
            </div>

            {/* Service 3 */}
            <div className="p-8 bg-jamarq-black rounded-lg text-center">
              <h2 className="text-2xl font-semibold mb-4">Maintenance & Support</h2>
              <p className="text-jamarq-gray mb-6 leading-relaxed">
                Ongoing reliability. Backups, updates, monitoring, and priority support.
              </p>
              <div className="space-y-2 text-center">
                <p className="text-sm font-semibold text-mist mb-3">Included:</p>
                <ul className="space-y-2 text-sm text-jamarq-gray">
                  <li>• Regular security updates</li>
                  <li>• Performance monitoring</li>
                  <li>• Backup management</li>
                  <li>• Priority bug fixes</li>
                  <li>• Content updates (plan-dependent)</li>
                </ul>
              </div>
              <a 
                href="/maintenance" 
                className="inline-block mt-6 text-jamarq-cyan hover:text-jamarq-magenta transition-colors text-sm font-semibold"
              >
                View Maintenance Plans →
              </a>
            </div>

            {/* Service 4 */}
            <div className="p-8 bg-jamarq-black rounded-lg text-center">
              <h2 className="text-2xl font-semibold mb-4">Content & Structure Consulting</h2>
              <p className="text-jamarq-gray mb-6 leading-relaxed">
                Clear hierarchy, improved messaging, and intentional content layouts.
              </p>
              <div className="space-y-2 text-center">
                <p className="text-sm font-semibold text-mist mb-3">Included:</p>
                <ul className="space-y-2 text-sm text-jamarq-gray">
                  <li>• Content architecture planning</li>
                  <li>• Information hierarchy design</li>
                  <li>• Messaging guidance</li>
                  <li>• Tone and clarity improvements</li>
                  <li>• SEO content strategy</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes JAMARQ Different Section */}
      <section className="py-24 md:py-32 px-5 md:px-10" aria-label="What makes us different">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-16">
            What Makes JAMARQ Different
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 justify-items-center">
            {/* Differentiator 1 */}
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-3">No Templates</h3>
              <p className="text-jamarq-gray text-sm leading-relaxed">
                Every site is built from scratch. Zero WordPress. Zero Wix. Zero page builders.
              </p>
            </div>

            {/* Differentiator 2 */}
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-3">No Bloat</h3>
              <p className="text-jamarq-gray text-sm leading-relaxed">
                Clean code. Fast load times. No unnecessary plugins or features.
              </p>
            </div>

            {/* Differentiator 3 */}
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-3">Built for Clarity</h3>
              <p className="text-jamarq-gray text-sm leading-relaxed">
                Design decisions are intentional. Every component serves a purpose.
              </p>
            </div>

            {/* Differentiator 4 */}
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-3">Systems-First Thinking</h3>
              <p className="text-jamarq-gray text-sm leading-relaxed">
                Not just websites. Integrated digital workflows built to support your business.
              </p>
            </div>

            {/* Differentiator 5 */}
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-3">Direct Communication</h3>
              <p className="text-jamarq-gray text-sm leading-relaxed">
                You work directly with me. No project managers. No handoffs.
              </p>
            </div>

            {/* Differentiator 6 */}
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-3">Long-Term Stability</h3>
              <p className="text-jamarq-gray text-sm leading-relaxed">
                Built to last. Structured for maintainability. Designed for growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Philosophy Section */}
      <section className="py-24 md:py-32 px-4 bg-steel" aria-label="Pricing philosophy">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-8">
            Pricing Philosophy
          </h2>
          <div className="space-y-6 text-jamarq-gray leading-relaxed">
            <p>
              Every project is custom. Pricing depends on scope, complexity, and timeline.
            </p>
            <p>
              You&rsquo;ll receive a clear, itemized estimate before any work begins. No surprises. No scope creep without discussion.
            </p>
            <p className="text-xl text-mist font-semibold">
              Most website projects range from $3,000–$15,000.
            </p>
            <p>
              Maintenance plans start at $150/month and scale based on site complexity and support needs.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 px-5 md:px-10" aria-label="Contact call-to-action">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            Ready to start?
          </h2>
          <p className="text-lg text-jamarq-gray leading-relaxed mb-8">
            Let&rsquo;s talk about your project.
          </p>
          
          <a
            href="mailto:hello@jamarq.digital?subject=Project Inquiry"
            className="inline-block bg-jamarq-cyan text-jamarq-black px-8 py-3 rounded-md font-semibold text-lg hover:bg-opacity-90 transition-all focus:outline-none focus:ring-2 focus:ring-jamarq-cyan focus:ring-offset-2 focus:ring-offset-jamarq-black"
          >
            Get in Touch
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
