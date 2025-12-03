import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "JAMARQ Digital - Web Development & Creative Services",
  description: "Custom web development, brand identity, and consulting services. Clean, modern digital solutions.",
  keywords: "web development, brand identity, consulting, Lexington NC, Winston-Salem NC",
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
      </body>
    </html>
  );
}
