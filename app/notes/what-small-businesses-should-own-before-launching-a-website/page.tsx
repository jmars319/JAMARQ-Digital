import type { Metadata } from "next";
import { NoteDetailPage } from "@/components/GrowthPages";
import { getNote } from "@/lib/growthContent";

const note = getNote("what-small-businesses-should-own-before-launching-a-website")!;

export const metadata: Metadata = {
  title: note.metaTitle,
  description: note.description,
  alternates: { canonical: `https://jamarq.digital/notes/${note.slug}` },
  openGraph: {
    title: note.metaTitle,
    description: note.description,
    url: `https://jamarq.digital/notes/${note.slug}`,
    type: "article",
    images: [{ url: "https://jamarq.digital/opengraph-image", width: 1200, height: 630, alt: "JAMARQ Digital" }],
  },
  twitter: {
    card: "summary_large_image",
    title: note.metaTitle,
    description: note.description,
    images: ["https://jamarq.digital/opengraph-image"],
    creator: "@jamarqdigital",
    site: "@jamarqdigital",
  },
};

export default function NotePage() {
  return <NoteDetailPage note={note} />;
}
