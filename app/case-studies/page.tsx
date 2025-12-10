import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import { caseStudySummaries } from "@/lib/caseStudySummaries";

export const metadata: Metadata = {
  title: "Case Studies — JAMARQ Digital",
  description: "In-depth case studies showcasing real projects, technical decisions, and measurable results. See how JAMARQ builds intentional digital systems.",
};

export default function CaseStudiesIndexPage() {
  return (
    <main id="main-content" className="min-h-screen bg-jamarq-black text-jamarq-white">
      {/* Hero Section */}
      <section 
        className="min-h-[60vh] flex items-center justify-center px-5 md:px-10"
        aria-label="Case studies hero"
      >
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-semibold mb-6">
            Case Studies
          </h1>
          <p className="text-xl md:text-2xl text-mist mb-6">
            Real projects. Technical decisions. Measurable results.
          </p>
          <div className="space-x-4">
            <Link href="/" className="text-sm text-jamarq-cyan hover:text-jamarq-magenta transition-colors">
              ← Back to Home
            </Link>
            <span className="text-jamarq-gray">|</span>
            <Link href="/work" className="text-sm text-jamarq-cyan hover:text-jamarq-magenta transition-colors">
              View Work Page
            </Link>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-24 md:py-32 bg-steel" aria-label="Case studies list">
        <div className="max-w-6xl mx-auto px-5 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 max-w-5xl mx-auto">
            {/* TRBG Case Study Card */}
            <Link 
              href="/case-studies/trbg"
              className="group p-8 bg-jamarq-black rounded-lg hover:bg-slate transition-all duration-300 hover:scale-105"
            >
              <div className="mb-4">
                <p className="text-sm text-jamarq-cyan uppercase tracking-wider mb-2">
                  {caseStudySummaries.trbg.category}
                </p>
                <h2 className="text-2xl font-semibold mb-4 group-hover:text-jamarq-cyan transition-colors">
                  {caseStudySummaries.trbg.title}
                </h2>
              </div>
              <p className="text-jamarq-gray leading-relaxed mb-6">
                {caseStudySummaries.trbg.micro}
              </p>
              <div className="flex items-center text-jamarq-cyan group-hover:text-jamarq-magenta transition-colors font-semibold">
                View Case Study →
              </div>
            </Link>

            {/* MMS Case Study Card */}
            <Link 
              href="/case-studies/mms"
              className="group p-8 bg-jamarq-black rounded-lg hover:bg-slate transition-all duration-300 hover:scale-105"
            >
              <div className="mb-4">
                <p className="text-sm text-jamarq-cyan uppercase tracking-wider mb-2">
                  {caseStudySummaries.mms.category}
                </p>
                <h2 className="text-2xl font-semibold mb-4 group-hover:text-jamarq-cyan transition-colors">
                  {caseStudySummaries.mms.title}
                </h2>
              </div>
              <p className="text-jamarq-gray leading-relaxed mb-6">
                {caseStudySummaries.mms.micro}
              </p>
              <div className="flex items-center text-jamarq-cyan group-hover:text-jamarq-magenta transition-colors font-semibold">
                View Case Study →
              </div>
            </Link>
          </div>

          {/* More Coming Soon */}
          <div className="text-center mt-16 max-w-3xl mx-auto">
            <p className="text-lg text-jamarq-gray leading-relaxed">
              More case studies are being prepared. Each one documents the challenge, approach, technical decisions, and measurable results.
            </p>
            <p className="text-sm text-jamarq-gray mt-6">
              For private previews of current work, email{" "}
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

      {/* What Each Case Study Includes */}
      <section className="py-24 md:py-32" aria-label="What's included">
        <div className="max-w-5xl mx-auto px-5 md:px-10">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-16">
            What Each Case Study Includes
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
                <h3 className="text-xl font-semibold mb-2">The Solution</h3>
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
                  Performance metrics and measurable improvements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
