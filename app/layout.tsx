import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "JAMARQ Digital - Web Development & Creative Services",
  description: "Custom web development, brand identity, and consulting services. Clean, modern digital solutions.",
  keywords: "web development, brand identity, consulting, Lexington NC, Winston-Salem NC, web design, digital services, creative studio",
  authors: [{ name: "Jason Marshall", url: "https://jamarq.digital" }],
  creator: "Jason Marshall",
  publisher: "JAMARQ Digital",
  metadataBase: new URL("https://jamarq.digital"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://jamarq.digital",
    siteName: "JAMARQ Digital",
    title: "JAMARQ Digital - Web Development & Creative Services",
    description: "Custom web development, brand identity, and consulting services. Clean, modern digital solutions.",
    images: [
      {
        url: "/images/brand/jamarq-logo-primary.png",
        width: 1200,
        height: 630,
        alt: "JAMARQ Digital",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "JAMARQ Digital - Web Development & Creative Services",
    description: "Custom web development, brand identity, and consulting services. Clean, modern digital solutions.",
    images: ["/images/brand/jamarq-logo-primary.png"],
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
      <body className={`${inter.className} antialiased bg-jamarq-black text-jamarq-white`}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
