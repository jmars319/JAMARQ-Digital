import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import { caseStudySummaries, caseStudyDisplayOrder } from "@/lib/caseStudySummaries";

export const metadata: Metadata = {
  title: "Work — JAMARQ Digital",
  description: "Case studies of modern digital systems built by JAMARQ. See the design decisions, architecture, and results behind each project.",
  alternates: {
    canonical: "https://www.jamarq.digital/work"
  },
  openGraph: {
    title: "Work — JAMARQ Digital",
    description: "Case studies of modern digital systems built by JAMARQ. See the design decisions, architecture, and results behind each project.",
    url: "https://www.jamarq.digital/work",
    type: "website"
  }
};

export default function WorkPage() {
  return (
    <main id="main-content" className="min-h-screen bg-jamarq-black text-jamarq-white">
      {/* Hero Section */}
      <section 
        className="min-h-[60vh] flex items-center justify-center px-5 md:px-10"
        aria-label="Work hero"
      >
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-semibold mb-6">
            Work
          </h1>
          <p className="text-xl md:text-2xl text-mist mb-6">
            A closer look at the systems behind the work.
          </p>
          <div className="space-x-4">
            <Link href="/" className="text-sm text-jamarq-cyan hover:text-jamarq-magenta transition-colors">
              ← Back to Home
            </Link>
            <span className="text-jamarq-gray">|</span>
            <Link href="/services" className="text-sm text-jamarq-cyan hover:text-jamarq-magenta transition-colors">
              View Services
            </Link>
            <span className="text-jamarq-gray">|</span>
            <Link href="/process" className="text-sm text-jamarq-cyan hover:text-jamarq-magenta transition-colors">
              See Process
            </Link>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-24 md:py-32 bg-steel" aria-label="Case studies">
        <div className="max-w-6xl mx-auto px-5 md:px-10">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-16">
            Recent Projects
          </h2>
          
          <p className="text-center text-jamarq-gray mb-8">
            Featured case study: Midway Music Hall, a full-stack venue system designed, shipped, and operated under real-world constraints.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12 max-w-6xl mx-auto">
            {caseStudyDisplayOrder.map((key) => {
              const study = caseStudySummaries[key];
              return (
                <Link
                  key={study.slug}
                  href={`/case-studies/${study.slug}`}
                  className="group p-8 bg-jamarq-black rounded-lg hover:bg-slate transition-all duration-300 hover:scale-105"
                >
                  <div className="mb-4">
                    <p className="text-sm text-jamarq-cyan uppercase tracking-wider mb-2">
                      {study.category}
                    </p>
                    <h3 className="text-2xl font-semibold mb-4 group-hover:text-jamarq-cyan transition-colors">
                      {study.title}
                    </h3>
                  </div>
                  <p className="text-jamarq-gray leading-relaxed mb-6">
                    {study.micro}
                  </p>
                  <div className="flex items-center text-jamarq-cyan group-hover:text-jamarq-magenta transition-colors font-semibold">
                    View Case Study →
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Additional Note */}
          <div className="text-center mt-16 text-jamarq-gray">
            <p className="text-sm">
              More case studies are being prepared. For private previews of current work, email{" "}
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

      {/* What Case Studies Will Show Section */}
      <section className="py-24 md:py-32" aria-label="What case studies will include">
        <div className="max-w-5xl mx-auto px-5 md:px-10">
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
                <h3 className="text-xl font-semibold mb-2">Visual Gallery <span className="text-sm font-normal text-jamarq-gray">(if available)</span></h3>
                <p className="text-jamarq-gray">
                  Screenshots, design mockups, and system architecture diagrams.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 bg-steel" aria-label="Contact call-to-action">
        <div className="max-w-6xl mx-auto px-5 md:px-10">
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
        </div>
      </section>

      <Footer />
    </main>
  );
}
