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
    default: "JAMARQ Digital | Custom Websites & Web Systems | Winston-Salem",
    template: "%s | JAMARQ Digital"
  },
  description: "Custom websites and operational web systems built for speed and ownership. No templates, no rented platforms. Proof-of-performance included. Based in Winston-Salem.",
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
  verification: {
    google: 'add-your-verification-code-here', // User can add later
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://jamarq.digital",
    siteName: "JAMARQ Digital",
    title: "JAMARQ Digital | Custom Websites & Web Systems | Winston-Salem",
    description: "Custom websites and operational web systems built for speed and ownership. No templates, no rented platforms. Proof-of-performance included. Based in Winston-Salem.",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "JAMARQ Digital",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "JAMARQ Digital | Custom Websites & Web Systems | Winston-Salem",
    description: "Custom websites and operational web systems built for speed and ownership. No templates, no rented platforms. Proof-of-performance included. Based in Winston-Salem.",
    images: ["/og.jpg"],
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
  return (
    <html lang="en">
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
