import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Contact — JAMARQ Digital",
  description: "Start a project with JAMARQ in Winston-Salem, NC. Clear communication, predictable timelines. Get a reply within one business day.",
  alternates: {
    canonical: "https://www.jamarq.digital/contact"
  },
  openGraph: {
    title: "Contact — JAMARQ Digital",
    description: "Start a project with JAMARQ in Winston-Salem, NC. Clear communication, predictable timelines. Get a reply within one business day.",
    url: "https://www.jamarq.digital/contact",
    type: "website"
  }
};

export default function ContactPage() {
  return (
    <main id="main-content" className="min-h-screen bg-jamarq-black text-jamarq-white">
      {/* Hero Section */}
      <section 
        className="min-h-[60vh] flex items-center justify-center px-5 md:px-10"
        aria-label="Contact hero"
      >
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-semibold mb-6">
            Start a project.
          </h1>
          <p className="text-xl md:text-2xl text-mist">
            Tell me about what you want to build.
          </p>
          <p className="text-lg text-jamarq-gray mt-4">
            You&rsquo;ll get a clear reply within one business day.
          </p>
          <div className="mt-6 space-x-4">
            <Link href="/" className="text-sm text-jamarq-cyan hover:text-jamarq-magenta transition-colors">
              ← Back to Home
            </Link>
            <span className="text-jamarq-gray">|</span>
            <Link href="/services" className="text-sm text-jamarq-cyan hover:text-jamarq-magenta transition-colors">
              View Services
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Options Section */}
      <section className="py-24 md:py-32 bg-steel" aria-label="Contact options">
        <div className="max-w-6xl mx-auto px-5 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 justify-items-center">
            {/* Left Column: Email Options */}
            <div className="text-center">
              <h2 className="text-3xl font-semibold mb-8">Email</h2>
              
              <div className="space-y-8">
                {/* Primary Contact */}
                <div>
                  <a 
                    href="mailto:hello@jamarq.digital" 
                    className="text-jamarq-cyan hover:text-jamarq-magenta transition-colors text-xl font-semibold"
                  >
                    hello@jamarq.digital
                  </a>
                  <p className="text-jamarq-gray text-sm mt-2">
                    New projects and general inquiries
                  </p>
                </div>

                {/* Active Projects */}
                <div>
                  <a 
                    href="mailto:jason@jamarq.digital" 
                    className="text-jamarq-cyan hover:text-jamarq-magenta transition-colors text-xl font-semibold"
                  >
                    jason@jamarq.digital
                  </a>
                  <p className="text-jamarq-gray text-sm mt-2">
                    For clients with active builds
                  </p>
                </div>

                {/* Support */}
                <div>
                  <a 
                    href="mailto:support@jamarq.digital" 
                    className="text-jamarq-cyan hover:text-jamarq-magenta transition-colors text-xl font-semibold"
                  >
                    support@jamarq.digital
                  </a>
                  <p className="text-jamarq-gray text-sm mt-2">
                    For launched sites and maintenance clients
                  </p>
                </div>

                <div className="pt-4 border-t border-slate">
                  <p className="text-jamarq-gray text-sm">
                    <strong className="text-mist">Response time:</strong> Within 1 business day
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Quick Start */}
            <div className="text-center">
              <h2 className="text-3xl font-semibold mb-8">Get Started</h2>
              
              <div className="space-y-6 text-jamarq-gray leading-relaxed">
                <p>
                  Send me an email with details about your project. Include:
                </p>
                
                <ul className="space-y-3 text-center">
                  <li>• What you need built</li>
                  <li>• Your timeline</li>
                  <li>• Your budget range (if known)</li>
                  <li>• Any relevant background or context</li>
                </ul>

                <div className="pt-6">
                  <a
                    href="mailto:hello@jamarq.digital?subject=Project Inquiry&body=Hi Jason,%0D%0A%0D%0AI'm interested in starting a project.%0D%0A%0D%0AProject Description:%0D%0A[Tell me about what you need built]%0D%0A%0D%0ATimeline:%0D%0A[When do you need this completed?]%0D%0A%0D%0ABudget Range:%0D%0A[If you have a budget in mind]%0D%0A%0D%0ACurrent Website (if applicable):%0D%0A[Your current site URL]"
                    className="inline-block bg-jamarq-cyan text-jamarq-black px-8 py-3 rounded-md font-semibold text-lg hover:bg-opacity-90 transition-all focus:outline-none focus:ring-2 focus:ring-jamarq-cyan focus:ring-offset-2 focus:ring-offset-steel w-full md:w-auto text-center"
                  >
                    Email Me
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Happens Next Section */}
      <section className="py-24 md:py-32" aria-label="What happens next">
        <div className="max-w-4xl mx-auto px-5 md:px-10">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-16">
            What Happens Next
          </h2>
          
          <div className="space-y-12 max-w-3xl mx-auto">
            {/* Step 01 */}
            <div className="flex gap-6">
              <div className="text-jamarq-cyan text-3xl font-semibold min-w-[60px]">01</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">You receive a confirmation message</h3>
                <p className="text-jamarq-gray">
                  I&rsquo;ll confirm I received your inquiry within a few hours.
                </p>
              </div>
            </div>

            {/* Step 02 */}
            <div className="flex gap-6">
              <div className="text-jamarq-cyan text-3xl font-semibold min-w-[60px]">02</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">I review your project</h3>
                <p className="text-jamarq-gray">
                  I&rsquo;ll look over what you need and determine if it&rsquo;s a good fit.
                </p>
              </div>
            </div>

            {/* Step 03 */}
            <div className="flex gap-6">
              <div className="text-jamarq-cyan text-3xl font-semibold min-w-[60px]">03</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">We schedule a call (optional)</h3>
                <p className="text-jamarq-gray">
                  A short conversation to clarify goals, timeline, and scope.
                </p>
              </div>
            </div>

            {/* Step 04 */}
            <div className="flex gap-6">
              <div className="text-jamarq-cyan text-3xl font-semibold min-w-[60px]">04</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">You receive a Project Overview</h3>
                <p className="text-jamarq-gray">
                  A clear outline of deliverables, timeline, and estimated cost.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <p className="text-xl text-mist italic">
              Intentional. Calm. Structured.
            </p>
          </div>
        </div>
      </section>

      {/* Availability Notice Section */}
      <section className="py-16 bg-steel" aria-label="Current availability">
        <div className="max-w-6xl mx-auto px-5 md:px-10">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-jamarq-gray">
              <strong className="text-mist">Current Availability:</strong> Accepting new projects
            </p>
            <p className="text-jamarq-gray text-sm mt-2">
              Typical start date: 2-4 weeks from agreement
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
