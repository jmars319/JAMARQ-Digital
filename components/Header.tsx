"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-jamarq-black/95 backdrop-blur-sm border-b border-slate">
      <nav className="max-w-7xl mx-auto px-6 md:px-12 py-5 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/assets/logos/wordmark-dark.png"
            alt="JAMARQ Digital"
            width={140}
            height={35}
            className="h-8 w-auto"
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
          className="md:hidden text-jamarq-white p-2"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate bg-jamarq-black">
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
    </header>
  );
}
