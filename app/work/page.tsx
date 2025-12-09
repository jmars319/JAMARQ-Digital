import type { Metadata } from "next";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Work — JAMARQ Digital",
  description: "A closer look at the systems behind the work. Case studies showcasing intentional design, clean architecture, and measurable results.",
};

export default function WorkPage() {
  return (
    <main id="main-content" className="min-h-screen bg-jamarq-black text-jamarq-white">
      {/* Hero Section */}
      <section 
        className="min-h-[60vh] flex items-center justify-center px-5 md:px-10"
        aria-label="Work hero"
      >
        <div className="text-center max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-semibold mb-6">
            Work
          </h1>
          <p className="text-xl md:text-2xl text-mist">
            A closer look at the systems behind the work.
          </p>
        </div>
      </section>

      {/* Coming Soon Message Section */}
      <section className="py-24 md:py-32 px-5 md:px-10 bg-steel" aria-label="Case studies coming soon">
        <div className="max-w-4xl mx-auto">
          <div className="text-center text-jamarq-gray leading-relaxed space-y-6">
            <p className="text-xl text-mist font-semibold">
              Selected case studies are being prepared.
            </p>
            
            <p className="text-lg">
              I&rsquo;m currently documenting recent builds so you can see:
            </p>
            
            <ul className="text-center max-w-2xl mx-auto space-y-2">
              <li>• The design decisions</li>
              <li>• The systems architecture</li>
              <li>• The performance improvements</li>
              <li>• The before/after comparisons</li>
            </ul>
            
            <div className="pt-8">
              <p className="text-sm font-semibold text-mist mb-2">In the meantime:</p>
              <p className="text-sm">
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
        </div>
      </section>

      {/* What Case Studies Will Show Section */}
      <section className="py-24 md:py-32 px-5 md:px-10" aria-label="What case studies will include">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-16">
            What Each Case Study Will Include
          </h2>
          
          <div className="space-y-10 max-w-3xl mx-auto">
            {/* Point 01 */}
            <div className="flex gap-6">
              <div className="text-jamarq-cyan text-2xl font-semibold min-w-[60px]">01</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">The Challenge</h3>
                <p className="text-jamarq-gray">
                  What wasn&rsquo;t working and why the client needed help.
                </p>
              </div>
            </div>

            {/* Point 02 */}
            <div className="flex gap-6">
              <div className="text-jamarq-cyan text-2xl font-semibold min-w-[60px]">02</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">The Approach</h3>
                <p className="text-jamarq-gray">
                  How JAMARQ solved the problem through intentional design and architecture.
                </p>
              </div>
            </div>

            {/* Point 03 */}
            <div className="flex gap-6">
              <div className="text-jamarq-cyan text-2xl font-semibold min-w-[60px]">03</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">The Build</h3>
                <p className="text-jamarq-gray">
                  Technical decisions, system structure, and implementation details.
                </p>
              </div>
            </div>

            {/* Point 04 */}
            <div className="flex gap-6">
              <div className="text-jamarq-cyan text-2xl font-semibold min-w-[60px]">04</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">The Results</h3>
                <p className="text-jamarq-gray">
                  Performance metrics, before/after comparisons, and measurable improvements.
                </p>
              </div>
            </div>

            {/* Point 05 */}
            <div className="flex gap-6">
              <div className="text-jamarq-cyan text-2xl font-semibold min-w-[60px]">05</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Visual Gallery</h3>
                <p className="text-jamarq-gray">
                  Screenshots, design mockups, and system architecture diagrams.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 px-4 bg-steel" aria-label="Contact call-to-action">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            Want to see current work?
          </h2>
          <p className="text-lg text-jamarq-gray leading-relaxed mb-6">
            I&rsquo;m happy to share private previews of recent projects.
          </p>
          <p className="text-lg mb-8">
            <a 
              href="mailto:jason@jamarq.digital" 
              className="text-jamarq-cyan hover:text-jamarq-magenta transition-colors"
            >
              jason@jamarq.digital
            </a>
          </p>
          
          <div className="pt-6 border-t border-slate">
            <p className="text-jamarq-gray mb-6">Or, ready to build something?</p>
            <a
              href="mailto:hello@jamarq.digital?subject=Project Inquiry"
              className="inline-block bg-jamarq-cyan text-jamarq-black px-8 py-3 rounded-md font-semibold text-lg hover:bg-opacity-90 transition-all focus:outline-none focus:ring-2 focus:ring-jamarq-cyan focus:ring-offset-2 focus:ring-offset-steel"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
