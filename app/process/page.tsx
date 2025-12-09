import type { Metadata } from "next";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Process — JAMARQ Digital",
  description: "A clear, structured process for every project. Discovery, design, development, launch, and support. Predictable timelines, no surprises.",
};

export default function ProcessPage() {
  return (
    <main id="main-content" className="min-h-screen bg-jamarq-black text-jamarq-white">
      {/* Hero Section */}
      <section 
        className="min-h-[60vh] flex items-center justify-center px-6 md:px-12"
        aria-label="Process hero"
      >
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-semibold mb-6">
            A clean, structured process.
          </h1>
          <p className="text-xl md:text-2xl text-mist">
            Clear milestones. Predictable timelines. No guesswork.
          </p>
        </div>
      </section>

      {/* Process Steps Section */}
      <section className="py-24 md:py-32 bg-steel" aria-label="Process steps">
        <div className="max-w-5xl mx-auto space-y-20 px-6 md:px-12">
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
        <div className="max-w-3xl mx-auto text-center px-6 md:px-12">
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
      <section className="py-24 md:py-32 px-4 bg-steel" aria-label="What this prevents">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-center">
            What This Process Prevents
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-jamarq-gray justify-items-center">
            <div className="p-6 bg-jamarq-black rounded-lg text-center">
              <p className="font-semibold">Scope creep</p>
            </div>
            <div className="p-6 bg-jamarq-black rounded-lg text-center">
              <p className="font-semibold">Miscommunication</p>
            </div>
            <div className="p-6 bg-jamarq-black rounded-lg text-center">
              <p className="font-semibold">Missed deadlines</p>
            </div>
            <div className="p-6 bg-jamarq-black rounded-lg text-center">
              <p className="font-semibold">Surprise costs</p>
            </div>
            <div className="p-6 bg-jamarq-black rounded-lg text-center">
              <p className="font-semibold">Unclear expectations</p>
            </div>
            <div className="p-6 bg-jamarq-black rounded-lg text-center">
              <p className="font-semibold">Post-launch confusion</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 bg-steel" aria-label="Contact call-to-action">
        <div className="max-w-4xl mx-auto text-center px-6 md:px-12">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            Ready to start?
          </h2>
          <p className="text-lg text-jamarq-gray leading-relaxed mb-8">
            Let&rsquo;s talk about your project and map out a timeline.
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
