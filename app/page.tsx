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

      {/* Brief About Section */}
      <section className="py-16 px-4 flex items-center justify-center" aria-label="About">
        <div className="max-w-2xl text-center">
          <h2 className="sr-only">About JAMARQ Digital</h2>
          <p className="text-lg text-jamarq-gray leading-relaxed">
            I help individuals and brands build clean, modern digital identities.<br />
            Strategic design meets practical execution.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 px-4 flex items-center justify-center" aria-label="Current availability">
        <div className="max-w-2xl text-center">
          <h2 className="text-jamarq-white text-2xl font-semibold mb-6">Now Accepting Projects</h2>
          <p className="text-jamarq-gray mb-8">
            Specializing in modern websites for small businesses and personal brands.
          </p>
          <div className="text-left max-w-md mx-auto space-y-2 text-jamarq-gray">
            <p className="text-sm">Recent projects:</p>
            <ul className="space-y-1 text-sm">
              <li>• Thunder Road Bar & Grill - Full-stack restaurant website</li>
              <li>• Midway Mobile Storage - Business management system</li>
              <li>• Multiple brand identity systems</li>
            </ul>
          </div>
          <p className="text-jamarq-gray text-sm mt-6">
            Full case studies coming soon.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-jamarq-slate flex items-center justify-center" role="contentinfo">
        <div className="max-w-2xl text-center">
          <p className="text-jamarq-gray text-sm mb-2">
            <a 
              href="mailto:hello@jamarq.digital" 
              className="text-jamarq-cyan hover:text-jamarq-magenta transition-colors focus:outline-none focus:ring-2 focus:ring-jamarq-cyan focus:ring-offset-2 focus:ring-offset-jamarq-black rounded"
              aria-label="Email hello@jamarq.digital"
            >
              hello@jamarq.digital
            </a>
          </p>
          <p className="text-jamarq-gray text-sm">
            <small>&copy; 2025 JAMARQ Digital. All rights reserved.</small>
          </p>
        </div>
      </footer>
    </main>
  );
}
