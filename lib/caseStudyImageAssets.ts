import type { ScreenshotAsset } from "@/lib/caseStudyScreenshots";

interface WebpAssetInput {
  id: string;
  basePath: string;
  caption: string;
  alt: string;
  width?: number;
  height?: number;
  technicalNote?: string;
}

export function webpScreenshot({
  id,
  basePath,
  caption,
  alt,
  width = 1200,
  height,
  technicalNote
}: WebpAssetInput): ScreenshotAsset {
  return {
    id,
    caption,
    technicalNote,
    fallbackSrc: `${basePath}-1200.webp`,
    webpSrcSet: `${basePath}-600.webp 600w, ${basePath}-1200.webp 1200w`,
    width,
    height,
    alt
  };
}
