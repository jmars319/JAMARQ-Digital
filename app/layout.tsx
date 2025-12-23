import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Header from "@/components/Header";
import { ContactModalProvider } from "@/components/contact/ContactModalProvider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["400", "500", "600"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
  weight: ["600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "JAMARQ Digital — Modern Web Development & Digital Systems",
    template: "%s | JAMARQ Digital"
  },
  description: "Custom web development in Winston-Salem, NC. Clean, intentional digital systems built for clarity and speed. No templates. No shortcuts. Build with intention.",
  keywords: [
    "web development Winston-Salem NC",
    "custom website design Winston-Salem",
    "digital systems North Carolina",
    "React development Winston-Salem",
    "responsive web design NC",
    "accessible web development",
    "modern web design",
    "web developer Winston-Salem",
    "custom websites NC",
    "Winston-Salem web developer"
  ],
  authors: [{ name: "Jason Marshall", url: "https://www.jamarq.digital" }],
  creator: "Jason Marshall",
  publisher: "JAMARQ Digital",
  metadataBase: new URL("https://www.jamarq.digital"),
  alternates: {
    canonical: "https://www.jamarq.digital"
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
  verification: {
    google: 'add-your-verification-code-here', // User can add later
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.jamarq.digital",
    siteName: "JAMARQ Digital",
    title: "JAMARQ Digital — Build with intention",
    description: "Modern digital systems designed for clarity, speed, and long-term stability. Custom web development in Winston-Salem, NC.",
    images: [
      {
        url: "/assets/logos/wordmark-dark.png",
        width: 1200,
        height: 630,
        alt: "JAMARQ Digital - Custom Web Development & Brand Identity Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "JAMARQ Digital — Modern Web Development",
    description: "Custom web development in Winston-Salem, NC. Clean, intentional digital systems built for clarity and speed.",
    images: ["/assets/logos/wordmark-dark.png"],
    creator: "@jamarqdigital",
  },
  icons: {
    icon: [
      { url: "/images/favicons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/images/favicons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/images/favicons/favicon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/images/favicons/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/images/favicons/favicon.ico" },
    ],
    apple: [
      { url: "/images/favicons/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
      { url: "/images/favicons/apple-touch-icon-120x120.png", sizes: "120x120", type: "image/png" },
      { url: "/images/favicons/apple-touch-icon-152x152.png", sizes: "152x152", type: "image/png" },
      { url: "/images/favicons/apple-touch-icon-167x167.png", sizes: "167x167", type: "image/png" },
    ],
  },
  other: {
    "msapplication-TileImage": "/images/favicons/msapplication-icon-144x144.png",
    "msapplication-TileColor": "#0a0a0c",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Enhanced structured data with multiple schema types
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "JAMARQ Digital",
    "url": "https://www.jamarq.digital",
    "logo": "https://www.jamarq.digital/assets/logos/wordmark-dark.png",
    "image": "https://www.jamarq.digital/assets/logos/wordmark-dark.png",
    "description": "Custom web development and digital systems in Winston-Salem, NC. Clean, intentional architecture built for clarity, speed, and long-term stability.",
    "founder": {
      "@type": "Person",
      "name": "Jason Marshall",
      "email": "jason@jamarq.digital",
      "jobTitle": "Founder & Lead Developer"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Winston-Salem",
      "addressRegion": "NC",
      "addressCountry": "US"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Winston-Salem",
        "containedInPlace": {
          "@type": "State",
          "name": "North Carolina"
        }
      },
      {
        "@type": "State",
        "name": "North Carolina"
      },
      {
        "@type": "Country",
        "name": "United States"
      }
    ],
    "sameAs": [
      "https://github.com/jmars319"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "hello@jamarq.digital",
      "contactType": "Customer Service",
      "availableLanguage": "English"
    },
    "priceRange": "$3,500 - $15,000",
    "serviceType": ["Web Development", "Custom Websites", "Digital Systems", "React Development"],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "reviewCount": "2"
    }
  };

  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "JAMARQ Digital",
    "url": "https://www.jamarq.digital",
    "description": "Custom web development and digital systems. Clean, intentional architecture built for clarity and speed.",
    "publisher": {
      "@type": "Organization",
      "name": "JAMARQ Digital",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.jamarq.digital/assets/logos/wordmark-dark.png"
      }
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://www.jamarq.digital/work?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const servicesData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": [
      {
        "@type": "Service",
        "name": "Web Development",
        "description": "Hand-built, modern, responsive websites. Zero templates.",
        "provider": {
          "@type": "Organization",
          "name": "JAMARQ Digital"
        },
        "areaServed": "Winston-Salem, North Carolina",
        "serviceType": "Custom Web Development"
      },
      {
        "@type": "Service",
        "name": "Brand Identity",
        "description": "Visual identity that makes sense and sticks. Logo, colors, the works.",
        "provider": {
          "@type": "Organization",
          "name": "JAMARQ Digital"
        },
        "areaServed": "Winston-Salem, North Carolina",
        "serviceType": "Brand Identity Design"
      },
      {
        "@type": "Service",
        "name": "Consulting",
        "description": "Strategic guidance for web projects. Architecture, planning, problem-solving.",
        "provider": {
          "@type": "Organization",
          "name": "JAMARQ Digital"
        },
        "areaServed": "Winston-Salem, North Carolina",
        "serviceType": "Web Consulting"
      }
    ]
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteData) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesData) }}
        />
      </head>
      <body className={`${inter.variable} ${montserrat.variable} ${inter.className} antialiased bg-jamarq-black text-jamarq-white`}>
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
          <Header />
          <main id="main-content" className="pt-20">
            {children}
          </main>
        </ContactModalProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
