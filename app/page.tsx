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
              src="/images/brand/jamarq-logo-primary.png"
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
            href="mailto:jason@jamarq.digital?subject=Project Inquiry"
            className="inline-block bg-jamarq-cyan text-jamarq-black px-8 py-3 rounded-md font-semibold text-lg hover:bg-opacity-90 transition-all mt-8 focus:outline-none focus:ring-2 focus:ring-jamarq-cyan focus:ring-offset-2 focus:ring-offset-jamarq-black"
            aria-label="Contact Jason via email to discuss your project"
          >
            Work With Me
          </a>
        </div>
      </section>

      {/* Brief About Section */}
      <section className="py-16 px-4" aria-label="About">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="sr-only">About JAMARQ Digital</h2>
          <p className="text-lg text-jamarq-gray leading-relaxed">
            I help individuals and brands build clean, modern digital identities.<br />
            Strategic design meets practical execution.
          </p>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-16 px-4" aria-label="Portfolio coming soon">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="sr-only">Portfolio Status</h2>
          <p className="text-jamarq-gray mb-2">
            Portfolio launching soon.
          </p>
          <p className="text-jamarq-gray">
            Full case studies and project details coming shortly.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-jamarq-slate" role="contentinfo">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-jamarq-gray text-sm mb-2">
            <a 
              href="mailto:jason@jamarq.digital" 
              className="text-jamarq-cyan hover:text-jamarq-magenta transition-colors focus:outline-none focus:ring-2 focus:ring-jamarq-cyan focus:ring-offset-2 focus:ring-offset-jamarq-black rounded"
              aria-label="Email jason@jamarq.digital"
            >
              jason@jamarq.digital
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
