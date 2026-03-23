import Link from "next/link";
import Image from "next/image";
import { PAGE_SPEED_INSIGHTS_HOME } from "@/lib/pageSpeed";
import { ContactModalTrigger } from "@/components/contact/ContactModalTrigger";
import { Reveal } from "@/components/Reveal";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-4 border-t border-slate bg-jamarq-black" role="contentinfo">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 justify-items-center">
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
            <p className="text-jamarq-gray text-sm">Build with intention.</p>
            <p className="mt-2 text-jamarq-gray text-xs">Tenra.dev is the software development division of JAMARQ Digital LLC.</p>
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

          {/* Contact */}
          <Reveal delay={240} className="text-center">
            <p className="font-semibold mb-3 text-sm uppercase tracking-wide">Contact</p>
            <p className="text-jamarq-gray text-xs mb-2">Based in Winston-Salem, North Carolina</p>
            <p className="text-jamarq-gray text-xs mb-3">Serving businesses nationwide</p>
            <ContactModalTrigger
              prefill={{ subject: "Project inquiry", source: "footer" }}
              className="text-jamarq-gray text-sm hover:text-jamarq-cyan transition-colors"
            >
              hello@jamarq.digital
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
        </Reveal>
      </div>
    </footer>
  );
}
