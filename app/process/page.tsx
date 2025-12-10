import type { Metadata } from "next";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Process — JAMARQ Digital",
  description: "A clear, structured process for every project. Discovery, design, development, launch, and support. Predictable timelines, no surprises.",
  alternates: {
    canonical: "https://www.jamarq.digital/process"
  },
  openGraph: {
    title: "Process — JAMARQ Digital",
    description: "A clear, structured process for every project. Discovery, design, development, launch, and support. Predictable timelines, no surprises.",
    url: "https://www.jamarq.digital/process",
    type: "website"
  }
};

export default function ProcessPage() {
  return (
    <main id="main-content" className="min-h-screen bg-jamarq-black text-jamarq-white">
      {/* Hero Section */}
      <section 
        className="min-h-[60vh] flex items-center justify-center px-5 md:px-10"
        aria-label="Process hero"
      >
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-semibold mb-6">
            A clean, structured process.
          </h1>
          <p className="text-xl md:text-2xl text-mist mb-6">
            Clear milestones. Predictable timelines. No guesswork.
          </p>
          <a href="/" className="text-sm text-jamarq-cyan hover:text-jamarq-magenta transition-colors">
            ← Back to Home
          </a>
        </div>
      </section>

      {/* Process Steps Section */}
      <section className="py-24 md:py-32 bg-steel" aria-label="Process steps">
        <div className="max-w-5xl mx-auto space-y-20 px-5 md:px-10">
          {/* Step 01 */}
          <div>
            <div className="text-jamarq-cyan text-5xl md:text-6xl font-semibold mb-4">01</div>
            <h2 className="text-3xl font-semibold mb-6">Discovery</h2>
            <div className="space-y-4 text-center">
              <p className="text-sm font-semibold text-mist mb-3">What Happens:</p>
              <ul className="space-y-2 text-jamarq-gray">
                <li>• Project goals defined</li>
                <li>• Requirements gathered</li>
                <li>• Timeline estimated</li>
                <li>• Initial structure outlined</li>
              </ul>
              <p className="text-lg text-mist mt-6 italic">
                A clear plan and shared understanding.
              </p>
            </div>
          </div>

          {/* Step 02 */}
          <div>
            <div className="text-jamarq-cyan text-5xl md:text-6xl font-semibold mb-4">02</div>
            <h2 className="text-3xl font-semibold mb-6">Architecture & Design</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
              <div className="text-center">
                <p className="text-sm font-semibold text-mist mb-3">Architecture:</p>
                <ul className="space-y-2 text-jamarq-gray">
                  <li>• Site map</li>
                  <li>• Content structure</li>
                  <li>• Workflows</li>
                  <li>• Integrations planning</li>
                </ul>
              </div>
              <div className="text-center">
                <p className="text-sm font-semibold text-mist mb-3">Design:</p>
                <ul className="space-y-2 text-jamarq-gray">
                  <li>• Layout direction</li>
                  <li>• Typography system</li>
                  <li>• Spacing rules</li>
                  <li>• Brand implementation</li>
                </ul>
              </div>
            </div>
            <p className="text-lg text-mist mt-6 italic">
              A blueprint for the build.
            </p>
          </div>

          {/* Step 03 */}
          <div>
            <div className="text-jamarq-cyan text-5xl md:text-6xl font-semibold mb-4">03</div>
            <h2 className="text-3xl font-semibold mb-6">Development</h2>
            <div className="space-y-4 text-center">
              <p className="text-sm font-semibold text-mist mb-3">What Happens:</p>
              <ul className="space-y-2 text-jamarq-gray">
                <li>• Custom build using clean, modern code</li>
                <li>• Responsive behavior</li>
                <li>• Performance optimization</li>
                <li>• Accessibility considerations</li>
              </ul>
              <p className="text-lg text-mist mt-6 italic">
                A functional system built from scratch.
              </p>
            </div>
          </div>

          {/* Step 04 */}
          <div>
            <div className="text-jamarq-cyan text-5xl md:text-6xl font-semibold mb-4">04</div>
            <h2 className="text-3xl font-semibold mb-6">Review & Revisions</h2>
            <div className="space-y-4 text-center">
              <p className="text-sm font-semibold text-mist mb-3">What Happens:</p>
              <ul className="space-y-2 text-jamarq-gray">
                <li>• You receive a working version</li>
                <li>• Feedback is gathered</li>
                <li>• Revisions are applied</li>
                <li>• Final approval required before launch</li>
              </ul>
              <p className="text-lg text-mist mt-6 italic">
                A refined system ready for launch.
              </p>
            </div>
          </div>

          {/* Step 05 */}
          <div>
            <div className="text-jamarq-cyan text-5xl md:text-6xl font-semibold mb-4">05</div>
            <h2 className="text-3xl font-semibold mb-6">Launch</h2>
            <div className="space-y-4 text-center">
              <p className="text-sm font-semibold text-mist mb-3">What Happens:</p>
              <ul className="space-y-2 text-jamarq-gray">
                <li>• Domain connection</li>
                <li>• SSL setup</li>
                <li>• Forms tested</li>
                <li>• Search Console submitted</li>
                <li>• Live handoff provided</li>
              </ul>
              <p className="text-lg text-mist mt-6 italic">
                Your site goes live with full support.
              </p>
            </div>
          </div>

          {/* Step 06 */}
          <div>
            <div className="text-jamarq-cyan text-5xl md:text-6xl font-semibold mb-4">06</div>
            <h2 className="text-3xl font-semibold mb-6">Support Window</h2>
            <div className="space-y-4 text-center">
              <p className="text-sm font-semibold text-mist mb-3">What Happens:</p>
              <ul className="space-y-2 text-jamarq-gray">
                <li>• Technical questions answered</li>
                <li>• Minor fixes handled</li>
                <li>• Content corrections made</li>
                <li>• Stability checks performed</li>
              </ul>
              <p className="text-lg text-mist mt-6 italic">
                A smooth transition to ownership.
              </p>
              <a 
                href="/maintenance" 
                className="inline-block mt-6 text-jamarq-cyan hover:text-jamarq-magenta transition-colors text-sm font-semibold"
              >
                View Maintenance Plans →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Context Section */}
      <section className="py-24 md:py-32" aria-label="Timeline">
        <div className="max-w-3xl mx-auto text-center px-5 md:px-10">
          <h2 className="text-3xl md:text-4xl font-semibold mb-8">
            Timeline
          </h2>
          <div className="space-y-6 text-jamarq-gray leading-relaxed">
            <p className="text-lg text-mist">
              Most projects take 4–8 weeks from kickoff to launch.
            </p>
            <div className="text-center max-w-xl mx-auto">
              <p className="mb-3">Timeline depends on:</p>
              <ul className="space-y-2">
                <li>• Scope and complexity</li>
                <li>• Content readiness</li>
                <li>• Response time during review phases</li>
              </ul>
            </div>
            <p className="text-mist pt-4">
              You&rsquo;ll receive a detailed timeline during the Discovery phase.
            </p>
          </div>
        </div>
      </section>

      {/* What This Prevents Section */}
      <section className="py-24 md:py-32 bg-steel" aria-label="What this prevents">
        <div className="max-w-6xl mx-auto px-5 md:px-10">
          <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-center">
            What This Process Prevents
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-jamarq-gray">
            <div className="group relative p-6 bg-jamarq-black rounded-lg text-center cursor-pointer transition-all duration-300 hover:bg-slate hover:scale-105 hover:shadow-lg">
              <p className="font-semibold text-mist group-hover:text-jamarq-cyan transition-colors">Scope creep</p>
              <div className="absolute inset-0 bg-jamarq-black rounded-lg p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-sm text-jamarq-gray leading-relaxed">Clear boundaries set upfront. No unexpected features or expanding requirements after agreement.</p>
              </div>
            </div>
            <div className="group relative p-6 bg-jamarq-black rounded-lg text-center cursor-pointer transition-all duration-300 hover:bg-slate hover:scale-105 hover:shadow-lg">
              <p className="font-semibold text-mist group-hover:text-jamarq-cyan transition-colors">Miscommunication</p>
              <div className="absolute inset-0 bg-jamarq-black rounded-lg p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-sm text-jamarq-gray leading-relaxed">Everything documented. Every decision confirmed. No assumptions about what you want or need.</p>
              </div>
            </div>
            <div className="group relative p-6 bg-jamarq-black rounded-lg text-center cursor-pointer transition-all duration-300 hover:bg-slate hover:scale-105 hover:shadow-lg">
              <p className="font-semibold text-mist group-hover:text-jamarq-cyan transition-colors">Missed deadlines</p>
              <div className="absolute inset-0 bg-jamarq-black rounded-lg p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-sm text-jamarq-gray leading-relaxed">Realistic timelines with buffer built in. Milestone-based progress tracking keeps the project on schedule.</p>
              </div>
            </div>
            <div className="group relative p-6 bg-jamarq-black rounded-lg text-center cursor-pointer transition-all duration-300 hover:bg-slate hover:scale-105 hover:shadow-lg">
              <p className="font-semibold text-mist group-hover:text-jamarq-cyan transition-colors">Surprise costs</p>
              <div className="absolute inset-0 bg-jamarq-black rounded-lg p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-sm text-jamarq-gray leading-relaxed">Fixed pricing based on defined scope. Any changes discussed and approved before adding to budget.</p>
              </div>
            </div>
            <div className="group relative p-6 bg-jamarq-black rounded-lg text-center cursor-pointer transition-all duration-300 hover:bg-slate hover:scale-105 hover:shadow-lg">
              <p className="font-semibold text-mist group-hover:text-jamarq-cyan transition-colors">Unclear expectations</p>
              <div className="absolute inset-0 bg-jamarq-black rounded-lg p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-sm text-jamarq-gray leading-relaxed">Detailed project brief. Defined deliverables. You know exactly what you're getting at every stage.</p>
              </div>
            </div>
            <div className="group relative p-6 bg-jamarq-black rounded-lg text-center cursor-pointer transition-all duration-300 hover:bg-slate hover:scale-105 hover:shadow-lg">
              <p className="font-semibold text-mist group-hover:text-jamarq-cyan transition-colors">Post-launch confusion</p>
              <div className="absolute inset-0 bg-jamarq-black rounded-lg p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-sm text-jamarq-gray leading-relaxed">Complete documentation and training. Support window included. You'll know how to manage your site.</p>
              </div>
            </div>
          </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 bg-steel" aria-label="Contact call-to-action">
        <div className="max-w-4xl mx-auto text-center px-5 md:px-10">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            Ready to start?
          </h2>
          <p className="text-lg text-jamarq-gray leading-relaxed mb-8">
            Let&rsquo;s talk about your project and map out a timeline.
          </p>
          
          <div className="space-y-4">
            <a
              href="mailto:hello@jamarq.digital?subject=Project Inquiry"
              className="inline-block bg-jamarq-cyan text-jamarq-black px-8 py-3 rounded-md font-semibold text-lg hover:bg-opacity-90 transition-all focus:outline-none focus:ring-2 focus:ring-jamarq-cyan focus:ring-offset-2 focus:ring-offset-jamarq-black"
            >
              Get in Touch
            </a>
            
            <p className="text-sm text-jamarq-gray">
              <a href="/services" className="text-jamarq-cyan hover:text-jamarq-magenta transition-colors">View all services</a> or <a href="/contact" className="text-jamarq-cyan hover:text-jamarq-magenta transition-colors">see more contact options</a>
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
