export default function Home() {
  return (
    <main className="min-h-screen bg-jamarq-black text-jamarq-white">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            JAMARQ
          </h1>
          
          <p className="text-xl md:text-2xl text-jamarq-gray mb-8">
            Digital + Creative Studio
          </p>
          
          <p className="text-lg mb-4">
            Websites | Brand Identity | Consulting
          </p>
          
          <a
            href="mailto:jason@jamarq.digital?subject=Project Inquiry"
            className="inline-block bg-jamarq-cyan text-jamarq-black px-8 py-3 rounded-md font-semibold text-lg hover:bg-opacity-90 transition-all mt-8"
          >
            Work With Me
          </a>
        </div>
      </section>

      {/* Brief About Section */}
      <section className="py-16 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-lg text-jamarq-gray leading-relaxed">
            I help individuals and brands build clean, modern digital identities.<br />
            Synthwave-inspired minimalism meets practical execution.
          </p>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-16 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-jamarq-gray mb-2">
            Portfolio launching soon.
          </p>
          <p className="text-jamarq-gray">
            Full case studies and project details coming shortly.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-jamarq-slate">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-jamarq-gray text-sm mb-2">
            <a 
              href="mailto:jason@jamarq.digital" 
              className="text-jamarq-cyan hover:text-jamarq-magenta transition-colors"
            >
              jason@jamarq.digital
            </a>
          </p>
          <p className="text-jamarq-gray text-sm">
            © 2025 JAMARQ Digital
          </p>
        </div>
      </footer>
    </main>
  );
}
