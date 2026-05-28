import type { Metadata } from "next";
import { ServiceDetailPage } from "@/components/GrowthPages";
import { getServicePage } from "@/lib/growthContent";

const page = getServicePage("maintenance")!;

export const metadata: Metadata = {
  title: page.metaTitle,
  description: page.description,
  alternates: { canonical: `https://jamarq.digital/services/${page.slug}` },
  openGraph: {
    title: page.metaTitle,
    description: page.description,
    url: `https://jamarq.digital/services/${page.slug}`,
    type: "website",
    images: [{ url: "https://jamarq.digital/opengraph-image", width: 1200, height: 630, alt: "JAMARQ Digital" }],
  },
  twitter: {
    card: "summary_large_image",
    title: page.metaTitle,
    description: page.description,
    images: ["https://jamarq.digital/opengraph-image"],
    creator: "@jamarqdigital",
    site: "@jamarqdigital",
  },
};

export default function MaintenancePage() {
  return <ServiceDetailPage page={page} />;
}
