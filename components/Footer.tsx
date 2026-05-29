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
        <div className="grid grid-cols-1 gap-8 mb-8 text-center md:grid-cols-4 md:text-left">
          {/* Brand */}
          <Reveal>
            <div className="mb-4 flex items-center justify-center md:justify-start">
              <Image
                src="/brand/jamarq/header-logo.svg"
                alt="JAMARQ Digital"
                width={198}
                height={48}
                className="h-auto w-44 sm:w-52"
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
          <Reveal delay={120}>
            <p className="font-semibold mb-3 text-sm uppercase tracking-wide">Explore</p>
            <nav className="space-y-2" aria-label="JAMARQ footer navigation">
              <Link href="/" className="block text-jamarq-gray text-sm hover:text-jamarq-cyan transition-colors">
                Home
              </Link>
              <Link href="/services" className="block text-jamarq-gray text-sm hover:text-jamarq-cyan transition-colors">
                Services
              </Link>
              <Link href="/services/website-systems" className="block text-jamarq-gray text-sm hover:text-jamarq-cyan transition-colors">
                Website Systems
              </Link>
              <Link href="/services/dns-hosting-cleanup" className="block text-jamarq-gray text-sm hover:text-jamarq-cyan transition-colors">
                DNS Cleanup
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
              <Link href="/notes" className="block text-jamarq-gray text-sm hover:text-jamarq-cyan transition-colors">
                Notes
              </Link>
              <Link href="/contact" className="block text-jamarq-gray text-sm hover:text-jamarq-cyan transition-colors">
                Contact
              </Link>
            </nav>
          </Reveal>

          {/* Suite */}
          <Reveal delay={200}>
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
                  <span className="mx-auto block max-w-[14rem] text-xs leading-5 text-jamarq-gray/80 md:mx-0">
                    {item.description}
                  </span>
                </a>
              ))}
            </nav>
          </Reveal>

          {/* Contact */}
          <Reveal delay={280}>
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
        <Reveal delay={360} className="flex flex-col gap-3 border-t border-slate pt-6 text-center text-jamarq-gray text-xs md:flex-row md:items-center md:justify-between md:text-left">
          <p>&copy; {currentYear} JAMARQ Digital. All rights reserved.</p>
          <nav className="flex flex-wrap justify-center gap-4 md:justify-end" aria-label="JAMARQ legal links">
            <Link
              href="/privacy"
              className="inline-flex text-[0.72rem] text-jamarq-gray/85 hover:text-jamarq-cyan transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="inline-flex text-[0.72rem] text-jamarq-gray/85 hover:text-jamarq-cyan transition-colors"
            >
              Terms
            </Link>
          </nav>
        </Reveal>
      </div>
    </footer>
  );
}
