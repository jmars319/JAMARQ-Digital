import Link from "next/link";
import Image from "next/image";
import { PAGE_SPEED_INSIGHTS_HOME } from "@/lib/pageSpeed";
import { ContactModalTrigger } from "@/components/contact/ContactModalTrigger";
import { Reveal } from "@/components/Reveal";
import { listSuiteLinks } from "@/lib/content-repository";

export default async function Footer() {
  const currentYear = new Date().getFullYear();
  const suiteLinks = await listSuiteLinks("jamarq");

  return (
    <footer className="py-12 px-4 border-t border-slate bg-jamarq-black" role="contentinfo">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 justify-items-center">
          {/* Brand */}
          <Reveal className="text-center">
            <div className="relative mx-auto mb-2 h-12 md:h-16 w-[200px] md:w-[260px]">
              <Image
                src="/assets/logos/wordmark-dark.png"
                alt="JAMARQ Digital"
                fill
                sizes="(min-width: 768px) 260px, 200px"
                className="object-contain"
              />
            </div>
            <p className="text-jamarq-gray text-sm">Websites, online presence, rebuilds, and web systems.</p>
            <p className="mt-2 text-jamarq-gray text-xs">
              <Link href="https://tenra.dev" target="_blank" rel="noopener noreferrer" className="hover:text-jamarq-cyan transition-colors">
                Tenra.dev
              </Link>{" "}
              is the software development division of JAMARQ Digital LLC.
            </p>
          </Reveal>

          {/* Navigation */}
          <Reveal delay={120} className="text-center">
            <p className="font-semibold mb-3 text-sm uppercase tracking-wide">Navigation</p>
            <nav className="space-y-2">
              <Link href="/" className="block text-jamarq-gray text-sm hover:text-jamarq-cyan transition-colors">
                Home
              </Link>
              <Link href="/services" className="block text-jamarq-gray text-sm hover:text-jamarq-cyan transition-colors">
                Services
              </Link>
              <Link href="/process" className="block text-jamarq-gray text-sm hover:text-jamarq-cyan transition-colors">
                Process
              </Link>
              <Link href="/mission" className="block text-jamarq-gray text-sm hover:text-jamarq-cyan transition-colors">
                Principles
              </Link>
              <Link href="/work" className="block text-jamarq-gray text-sm hover:text-jamarq-cyan transition-colors">
                Work
              </Link>
              <Link href="/contact" className="block text-jamarq-gray text-sm hover:text-jamarq-cyan transition-colors">
                Contact
              </Link>
            </nav>
          </Reveal>

          {/* Suite */}
          <Reveal delay={200} className="text-center">
            <p className="font-semibold mb-3 text-sm uppercase tracking-wide">Suite</p>
            <nav className="space-y-3" aria-label="JAMARQ suite links">
              {suiteLinks.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-jamarq-gray text-sm hover:text-jamarq-cyan transition-colors"
                >
                  <span className="block font-medium">{item.label}</span>
                  <span className="block max-w-[14rem] text-xs leading-5 text-jamarq-gray/80">
                    {item.description}
                  </span>
                </a>
              ))}
            </nav>
          </Reveal>

          {/* Contact */}
          <Reveal delay={280} className="text-center">
            <p className="font-semibold mb-3 text-sm uppercase tracking-wide">Contact</p>
            <p className="text-jamarq-gray text-xs mb-2">Based in Winston-Salem, North Carolina</p>
            <p className="text-jamarq-gray text-xs mb-3">Serving businesses nationwide</p>
            <ContactModalTrigger
              prefill={{ subject: "Project inquiry", source: "footer" }}
              className="text-jamarq-gray text-sm hover:text-jamarq-cyan transition-colors"
            >
              Send a message
            </ContactModalTrigger>
            <div className="mt-3">
              <a
                href={PAGE_SPEED_INSIGHTS_HOME}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-jamarq-gray hover:text-jamarq-cyan transition-colors"
              >
                PageSpeed Live check ↗
              </a>
            </div>
          </Reveal>
        </div>

        {/* Copyright */}
        <Reveal delay={360} className="border-t border-slate pt-6 text-center text-jamarq-gray text-xs">
          <p>&copy; {currentYear} JAMARQ Digital. All rights reserved.</p>
          <Link
            href="/admin"
            className="mt-2 inline-flex text-[0.7rem] text-jamarq-gray/55 hover:text-jamarq-cyan transition-colors"
          >
            Admin
          </Link>
        </Reveal>
      </div>
    </footer>
  );
}
