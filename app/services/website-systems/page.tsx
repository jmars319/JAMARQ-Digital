import type { Metadata } from "next";
import { ServiceDetailPage } from "@/components/GrowthPages";
import { getServicePage } from "@/lib/growthContent";

const page = getServicePage("website-systems")!;

export const metadata: Metadata = {
  title: page.metaTitle,
  description: page.description,
  alternates: { canonical: `https://jamarq.digital/services/${page.slug}` },
  openGraph: {
    title: page.metaTitle,
    description: page.description,
    url: `https://jamarq.digital/services/${page.slug}`,
    type: "website",
    images: [{ url: "https://jamarq.digital/brand/jamarq/og-image.png", width: 1200, height: 630, alt: "JAMARQ Digital" }],
  },
  twitter: {
    card: "summary_large_image",
    title: page.metaTitle,
    description: page.description,
    images: ["https://jamarq.digital/brand/jamarq/og-image.png"],
    creator: "@jamarqdigital",
    site: "@jamarqdigital",
  },
};

export default function WebsiteSystemsPage() {
  return <ServiceDetailPage page={page} />;
}
