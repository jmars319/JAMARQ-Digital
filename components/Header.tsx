"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-jamarq-black/95 backdrop-blur-sm border-b border-slate" role="banner">
      <nav className="max-w-6xl mx-auto px-5 md:px-10 py-5 flex items-center justify-between" aria-label="Main navigation">
        {/* Logo */}
        <Link href="/" className="flex items-center" aria-label="JAMARQ Digital homepage">
          <Image
            src="/assets/logos/wordmark-dark.png"
            alt="JAMARQ Digital logo"
            width={140}
            height={35}
            className="h-8 w-auto"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-10">
          <Link 
            href="/services" 
            className="text-sm font-medium text-jamarq-gray hover:text-jamarq-cyan transition-colors"
          >
            Services
          </Link>
          <Link 
            href="/process" 
            className="text-sm font-medium text-jamarq-gray hover:text-jamarq-cyan transition-colors"
          >
            Process
          </Link>
          <Link 
            href="/work" 
            className="text-sm font-medium text-jamarq-gray hover:text-jamarq-cyan transition-colors"
          >
            Work
          </Link>
          <Link 
            href="/contact" 
            className="text-sm bg-jamarq-cyan text-jamarq-black px-7 py-2.5 rounded font-semibold hover:bg-opacity-90 transition-all"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-jamarq-white p-2 focus:outline-none focus:ring-2 focus:ring-jamarq-cyan focus:ring-offset-2 focus:ring-offset-jamarq-black rounded"
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

        {/* No-JS Mobile Navigation Fallback */}
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

      {/* Mobile Menu (JS) */}
      {mobileMenuOpen && (
        <div id="mobile-menu" className="md:hidden border-t border-slate bg-jamarq-black" role="navigation" aria-label="Mobile menu">
          <div className="flex flex-col space-y-4 px-4 py-6">
            <Link 
              href="/services" 
              className="text-sm text-jamarq-gray hover:text-jamarq-cyan transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              href="/process" 
              className="text-sm text-jamarq-gray hover:text-jamarq-cyan transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Process
            </Link>
            <Link 
              href="/work" 
              className="text-sm text-jamarq-gray hover:text-jamarq-cyan transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Work
            </Link>
            <Link 
              href="/contact" 
              className="text-sm bg-jamarq-cyan text-jamarq-black px-6 py-2 rounded font-semibold hover:bg-opacity-90 transition-all inline-block text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}

      {/* No-JS Mobile Navigation (Always visible without JS) */}
      <noscript>
        <div id="mobile-nav" className="md:hidden border-t border-slate bg-jamarq-black">
          <nav className="flex flex-col space-y-4 px-4 py-6" aria-label="Mobile navigation">
            <a 
              href="/services" 
              className="text-sm text-jamarq-gray hover:text-jamarq-cyan transition-colors"
            >
              Services
            </a>
            <a 
              href="/process" 
              className="text-sm text-jamarq-gray hover:text-jamarq-cyan transition-colors"
            >
              Process
            </a>
            <a 
              href="/work" 
              className="text-sm text-jamarq-gray hover:text-jamarq-cyan transition-colors"
            >
              Work
            </a>
            <a 
              href="/contact" 
              className="text-sm bg-jamarq-cyan text-jamarq-black px-6 py-2 rounded font-semibold hover:bg-opacity-90 transition-all inline-block text-center"
            >
              Contact
            </a>
          </nav>
        </div>
      </noscript>
    </header>
  );
}
