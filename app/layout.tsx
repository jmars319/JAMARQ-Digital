import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Header from "@/components/Header";
import { PageViewTracker } from "@/components/PageViewTracker";
import { ContactModalProvider } from "@/components/contact/ContactModalProvider";
import "./globals.css";

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-ibm-plex-sans",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: {
    default: "JAMARQ Digital | Websites, Rebuilds & Web Systems | Winston-Salem",
    template: "%s | JAMARQ Digital"
  },
  description:
    "JAMARQ Digital builds conversion-focused websites, website rebuilds, web systems, and admin workflows for businesses that need fast pages and clear leads.",
  authors: [{ name: "Jason Marshall", url: "https://jamarq.digital" }],
  creator: "Jason Marshall",
  publisher: "JAMARQ Digital",
  metadataBase: new URL("https://jamarq.digital"),
  alternates: {
    canonical: "https://jamarq.digital/"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://jamarq.digital",
    siteName: "JAMARQ Digital",
    title: "JAMARQ Digital | Websites, Rebuilds & Web Systems | Winston-Salem",
    description:
      "JAMARQ Digital builds conversion-focused websites, website rebuilds, web systems, and admin workflows for businesses that need fast pages and clear leads.",
    images: [
      {
        url: "/brand/jamarq/og-image.png",
        width: 1200,
        height: 630,
        alt: "JAMARQ Digital practical web systems",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "JAMARQ Digital | Websites, Rebuilds & Web Systems | Winston-Salem",
    description:
      "JAMARQ Digital builds conversion-focused websites, website rebuilds, web systems, and admin workflows for businesses that need fast pages and clear leads.",
    images: ["/brand/jamarq/og-image.png"],
    creator: "@jamarqdigital",
    site: "@jamarqdigital",
  },
  icons: {
    icon: [
      { url: "/brand/jamarq/favicon.ico", rel: "icon", type: "image/x-icon" },
      { url: "/brand/jamarq/mark.svg", sizes: "any", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/brand/jamarq/mark.svg", sizes: "180x180", type: "image/svg+xml" },
    ],
  },
  other: {
    "msapplication-TileImage": "/brand/jamarq/mark.svg",
    "msapplication-TileColor": "#0a0a0c",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "JAMARQ Digital",
    url: "https://jamarq.digital",
    logo: "https://jamarq.digital/brand/jamarq/mark.svg",
    description:
      "Conversion-focused website development, website rebuilds, web systems, and support from Winston-Salem, NC.",
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "business inquiries",
        url: "https://jamarq.digital/contact",
      }
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Winston-Salem",
      addressRegion: "NC",
      addressCountry: "US"
    }
  };

  const websiteStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "JAMARQ Digital",
    url: "https://jamarq.digital"
  };

  return (
    <html lang="en">
      <body className={`${ibmPlexSans.variable} ${ibmPlexSans.className} antialiased bg-jamarq-black text-jamarq-white`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationStructuredData) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteStructuredData) }}
        />
        {/* Skip to main content for accessibility */}
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-jamarq-cyan focus:text-jamarq-black focus:rounded focus:font-semibold focus:outline-none focus:ring-2 focus:ring-jamarq-cyan focus:ring-offset-2 focus:ring-offset-jamarq-black"
        >
          Skip to main content
        </a>
        <noscript>
          <div 
            className="bg-jamarq-cyan text-jamarq-black p-4 text-center text-sm font-semibold" 
            role="alert"
            aria-live="polite"
          >
            This site works best with JavaScript enabled, but all content is fully accessible without it.
          </div>
        </noscript>
        <ContactModalProvider>
          <PageViewTracker />
          <Header />
          <div className="pt-20">{children}</div>
        </ContactModalProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
