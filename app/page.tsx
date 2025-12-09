import Image from "next/image";

export default function Home() {
  return (
    <main id="main-content" className="min-h-screen bg-jamarq-black text-jamarq-white">
      {/* Hero Section */}
      <section 
        className="min-h-screen flex items-center justify-center px-4"
        aria-label="Hero section"
      >
        <div className="text-center max-w-2xl">
          <div className="mb-8 flex justify-center">
            <Image
              src="/assets/logos/wordmark-dark.png"
              alt="JAMARQ Digital logo"
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
      <section className="py-24 md:py-32 px-4 flex items-center justify-center" aria-label="What we do">
        <div className="max-w-3xl text-center">
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
      <section className="py-24 md:py-32 px-4 md:px-20 bg-steel" aria-label="Services">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-16">
            What I Build
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
            {/* Service 1 */}
            <div className="text-center">
              <h3 className="text-2xl font-semibold mb-4">Custom Websites</h3>
              <p className="text-jamarq-gray leading-relaxed">
                Hand-built, modern, and responsive. Lightweight architecture. Zero templates. Zero bloat.
              </p>
            </div>

            {/* Service 2 */}
            <div className="text-center">
              <h3 className="text-2xl font-semibold mb-4">Digital Systems</h3>
              <p className="text-jamarq-gray leading-relaxed">
                Workflows, integrations, and infrastructure that support how your business actually works.
              </p>
            </div>

            {/* Service 3 */}
            <div className="text-center">
              <h3 className="text-2xl font-semibold mb-4">Ongoing Support</h3>
              <p className="text-jamarq-gray leading-relaxed">
                Maintenance plans, updates, monitoring, and performance care for long-term stability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Transition 1 */}
      <section className="py-16 px-4 flex items-center justify-center bg-steel" aria-label="Transition">
        <div className="max-w-3xl text-center">
          <p className="text-lg text-jamarq-gray">
            Every project follows a clear, structured process.
          </p>
        </div>
      </section>

      {/* How I Work Section */}
      <section className="py-24 md:py-32 px-4 md:px-20" aria-label="Process">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-16">
            How I Work
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
            {/* Step 1 */}
            <div className="text-center">
              <div className="text-jamarq-cyan text-5xl font-semibold mb-4">01</div>
              <h3 className="text-2xl font-semibold mb-4">Discovery</h3>
              <p className="text-jamarq-gray leading-relaxed">
                We define your goals, constraints, and what the system needs to accomplish. Clarity first. Design second.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="text-jamarq-cyan text-5xl font-semibold mb-4">02</div>
              <h3 className="text-2xl font-semibold mb-4">Build</h3>
              <p className="text-jamarq-gray leading-relaxed">
                A clean, intentional design translated into a fast, modern digital system. Every component is built from scratch.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="text-jamarq-cyan text-5xl font-semibold mb-4">03</div>
              <h3 className="text-2xl font-semibold mb-4">Launch & Support</h3>
              <p className="text-jamarq-gray leading-relaxed">
                A structured rollout, documentation, and a support window. Everything you need to run your site with confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Transition 2 */}
      <section className="py-16 px-4 flex items-center justify-center" aria-label="Transition">
        <div className="max-w-3xl text-center">
          <p className="text-lg text-jamarq-gray">
            The result: a system you can rely on.
          </p>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="py-24 md:py-32 px-4 md:px-20 bg-steel" aria-label="Value proposition">
        <div className="max-w-6xl mx-auto">
          <p className="text-xl md:text-2xl text-center mb-16 text-mist max-w-4xl mx-auto leading-relaxed">
            You get a modern digital system that feels clean, fast, and intentional.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            {/* Value 1 */}
            <div className="text-center">
              <h3 className="text-2xl font-semibold mb-4">Built to Last</h3>
              <p className="text-jamarq-gray leading-relaxed">
                Focused design. Precise typography. A layout that directs attention, not distracts from it.
              </p>
            </div>

            {/* Value 2 */}
            <div className="text-center">
              <h3 className="text-2xl font-semibold mb-4">A System You Can Rely On</h3>
              <p className="text-jamarq-gray leading-relaxed">
                Stable infrastructure. Clean code. A foundation built for long-term use, not short-term workarounds.
              </p>
            </div>

            {/* Value 3 */}
            <div className="text-center">
              <h3 className="text-2xl font-semibold mb-4">A Process That Respects Your Time</h3>
              <p className="text-jamarq-gray leading-relaxed">
                Clear communication. Structured milestones. No guesswork.
              </p>
            </div>

            {/* Value 4 */}
            <div className="text-center">
              <h3 className="text-2xl font-semibold mb-4">Documentation & Support</h3>
              <p className="text-jamarq-gray leading-relaxed">
                A full handoff. Training if needed. A support window to keep everything stable after launch.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Transition 3 */}
      <section className="py-16 px-4 flex items-center justify-center bg-steel" aria-label="Transition">
        <div className="max-w-3xl text-center">
          <p className="text-lg text-jamarq-gray">
            See how this approach creates real results.
          </p>
        </div>
      </section>

      {/* Work Section - Placeholder */}
      <section className="py-24 md:py-32 px-4 md:px-20" aria-label="Portfolio and case studies">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">
            Work
          </h2>
          
          <div className="text-center text-jamarq-gray leading-relaxed space-y-6">
            <p className="text-lg">
              Selected case studies are being prepared.
            </p>
            
            <p>
              I'm currently documenting recent builds so you can see:<br />
              • The design decisions<br />
              • The technical structure<br />
              • The measurable outcomes
            </p>
            
            <p className="text-sm pt-4">
              In the meantime:<br />
              If you want a private preview of current work, email me directly at{" "}
              <a 
                href="mailto:jason@jamarq.digital" 
                className="text-jamarq-cyan hover:text-jamarq-magenta transition-colors"
              >
                jason@jamarq.digital
              </a>.
            </p>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-24 md:py-32 px-4 md:px-20 bg-steel" aria-label="Contact call-to-action">
        <div className="max-w-4xl mx-auto text-center">
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
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 md:px-20 border-t border-slate" role="contentinfo">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2">JAMARQ</h3>
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
