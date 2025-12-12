import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="py-12 px-4 border-t border-slate bg-jamarq-black" role="contentinfo">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 justify-items-center">
          {/* Brand */}
          <div className="text-center">
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
          </div>

          {/* Navigation */}
          <div className="text-center">
            <h4 className="font-semibold mb-3 text-sm">Navigation</h4>
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
              <Link href="/work" className="block text-jamarq-gray text-sm hover:text-jamarq-cyan transition-colors">
                Work
              </Link>
              <Link href="/contact" className="block text-jamarq-gray text-sm hover:text-jamarq-cyan transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div className="text-center">
            <h4 className="font-semibold mb-3 text-sm">Contact</h4>
            <p className="text-jamarq-gray text-xs mb-2">Based in Winston-Salem, North Carolina</p>
            <p className="text-jamarq-gray text-xs mb-3">Serving businesses nationwide</p>
            <a 
              href="mailto:hello@jamarq.digital" 
              className="text-jamarq-gray text-sm hover:text-jamarq-cyan transition-colors"
            >
              hello@jamarq.digital
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-slate pt-6 text-center text-jamarq-gray text-xs">
          <p>&copy; 2025 JAMARQ Digital. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
