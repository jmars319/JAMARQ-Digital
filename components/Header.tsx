"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "Notes", href: "/notes" },
  { label: "Process", href: "/process" },
  { label: "Principles", href: "/mission" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-jamarq-black border-b border-slate" role="banner">
      <nav className="max-w-6xl mx-auto px-5 md:px-10 py-5 flex items-center justify-between" aria-label="Main navigation">
        <Link href="/" className="flex items-center" aria-label="JAMARQ Digital homepage">
          <div className="relative h-10 w-[168px] sm:h-12 sm:w-[198px]">
            <Image
              src="/brand/jamarq/header-logo.svg"
              alt="JAMARQ Digital"
              fill
              sizes="(min-width: 640px) 198px, 168px"
              priority
              className="object-contain object-left"
            />
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-5 lg:gap-7">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-jamarq-gray hover:text-jamarq-cyan transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <Link 
            href="/contact" 
            className="text-sm bg-jamarq-cyan text-jamarq-black px-5 lg:px-7 py-2.5 rounded font-semibold hover:bg-opacity-90 transition-all"
          >
            Request help
          </Link>
        </div>

        <div className="md:hidden flex items-center gap-2">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded px-4 py-2 text-[11px] font-semibold bg-jamarq-cyan text-jamarq-black hover:bg-opacity-90 transition-all"
            aria-label="Request help"
          >
            Request help
          </Link>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-jamarq-white p-2 focus:outline-none focus:ring-2 focus:ring-jamarq-cyan focus:ring-offset-2 focus:ring-offset-jamarq-black rounded"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        <noscript>
          <div className="md:hidden">
            <a 
              href="#mobile-nav" 
              className="text-jamarq-white p-2 text-sm"
              aria-label="Jump to navigation"
            >
              Menu ▼
            </a>
          </div>
        </noscript>
      </nav>

      {mobileMenuOpen && (
        <div className="md:hidden">
          <div
            id="mobile-menu"
            className="border-t border-slate bg-jamarq-black dropdown-animate"
            role="navigation"
            aria-label="Mobile menu"
          >
            <div className="flex flex-col space-y-4 px-4 py-6">
              {navLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-jamarq-gray hover:text-jamarq-cyan transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link 
                href="/contact" 
                className="text-sm bg-jamarq-cyan text-jamarq-black px-6 py-2 rounded font-semibold hover:bg-opacity-90 transition-all inline-block text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Request help
              </Link>
            </div>
          </div>
        </div>
      )}

      <noscript>
        <div id="mobile-nav" className="md:hidden border-t border-slate bg-jamarq-black">
          <nav className="flex flex-col space-y-4 px-4 py-6" aria-label="Mobile navigation">
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-jamarq-gray hover:text-jamarq-cyan transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a 
              href="/contact" 
              className="text-sm bg-jamarq-cyan text-jamarq-black px-6 py-2 rounded font-semibold hover:bg-opacity-90 transition-all inline-block text-center"
            >
              Request help
            </a>
          </nav>
        </div>
      </noscript>
    </header>
  );
}
