import fs from "fs";
import path from "path";

const CASE_STUDY_ROOT = path.join(process.cwd(), "content/case-studies/midway-music-hall");
const SCREENSHOT_META_DIR = path.join(CASE_STUDY_ROOT, "Screenshots");
const CAPTIONS_FILE = path.join(SCREENSHOT_META_DIR, "mmh casestudy-captions-for-screenshots.md");
const TECH_NOTES_FILE = path.join(SCREENSHOT_META_DIR, "mmh casestudy-technical-notes-per-screenshot.md");
const PUBLIC_SCREENSHOT_DIR = path.join(process.cwd(), "public/case-studies/mmh");
const PUBLIC_SCREENSHOT_BASE = "/case-studies/mmh";

type ScreenshotGroup = "pagespeed" | "public" | "admin" | "mobile";

const ORDERING: Record<ScreenshotGroup, string[]> = {
  pagespeed: [
    "mmh-pagespeed-desktopbefore",
    "mmh-pagespeed-desktopafter",
    "mmh-pagespeed-mobilebefore",
    "mmh-pagespeed-mobileafter"
  ],
  public: [
    "mmh-public-homepagebefore",
    "mmh-public-homepageafter",
    "mmh-public-schedule",
    "mmh-public-archive",
    "mmh-public-tgphomepage"
  ],
  admin: [
    "mmh-admin-dashboard",
    "mmh-admin-eventdashboard",
    "mmh-admin-eventeditor",
    "mmh-admin-eventcategories",
    "mmh-admin-seatinglayouts",
    "mmh-admin-seatinglayouteditor",
    "mmh-admin-seat-requests-queue",
    "mmh-admin-manualreservation",
    "mmh-admin-mediamanager",
    "mmh-admin-sitecontent",
    "mmh-admin-auditlog",
    "mmh-admin-manageusers"
  ],
  mobile: [
    "mmh-public-homepagemobile",
    "mmh-public-schedulemobile",
    "mmh-admin-dashboardmobile",
    "mmh-admin-seatinglayoutsmobile"
  ]
};

type VariantFormat = "png" | "webp";

type Variant = {
  width: number;
  src: string;
};

interface IntermediateScreenshotEntry {
  id: string;
  caption: string;
  technicalNote?: string;
  group: ScreenshotGroup;
  variants: Record<VariantFormat, Variant[]>;
}

export interface ScreenshotAsset {
  id: string;
  group: ScreenshotGroup;
  caption: string;
  technicalNote?: string;
  webpSrcSet: string;
  pngSrcSet: string;
  fallbackSrc: string;
  fallbackWidth: number;
}

export function getMMHScreenshotGroups() {
  const captionMap = buildCaptionMap();
  const technicalMap = buildTechnicalMap();
  const screenshotEntries = buildScreenshotEntries(captionMap, technicalMap);
  const grouped: Record<ScreenshotGroup, ScreenshotAsset[]> = {
    pagespeed: [],
    public: [],
    admin: [],
    mobile: []
  };

  Object.values(screenshotEntries).forEach((entry) => {
    grouped[entry.group].push({
      id: entry.id,
      group: entry.group,
      caption: entry.caption,
      technicalNote: entry.technicalNote,
      webpSrcSet: buildSrcSet(entry.variants.webp),
      pngSrcSet: buildSrcSet(entry.variants.png),
      fallbackSrc: getFallback(entry),
      fallbackWidth: getFallbackWidth(entry)
    });
  });

  (Object.keys(grouped) as ScreenshotGroup[]).forEach((groupKey) => {
    grouped[groupKey] = sortByOrdering(grouped[groupKey], ORDERING[groupKey]);
  });

  return grouped;
}

function buildCaptionMap() {
  const content = fs.readFileSync(CAPTIONS_FILE, "utf-8");
  const lines = content.split(/\r?\n/);
  const entries = new Map<string, string>();

  for (let i = 0; i < lines.length; i++) {
    const trimmed = lines[i].trim();
    if (!trimmed.startsWith("mmh-")) {
      continue;
    }

    const key = trimmed.replace(/-source$/, "");
    const { text, nextIndex } = collectBlock(lines, i + 1);
    if (text) {
      entries.set(key, text);
    }
    i = nextIndex;
  }

  return entries;
}

function buildTechnicalMap() {
  const content = fs.readFileSync(TECH_NOTES_FILE, "utf-8");
  const lines = content.split(/\r?\n/);
  const entries = new Map<string, string>();

  for (let i = 0; i < lines.length; i++) {
    const trimmed = lines[i].trim();
    if (!trimmed.startsWith("mmh-")) {
      continue;
    }

    const key = trimmed.replace(/-source$/, "");
    const { text, nextIndex } = collectBlock(lines, i + 1, true);
    if (text) {
      entries.set(key, text);
    }
    i = nextIndex;
  }

  return entries;
}

function collectBlock(lines: string[], startIndex: number, skipLabelLine = false) {
  const buffer: string[] = [];
  let i = startIndex;

  for (; i < lines.length; i++) {
    const trimmed = lines[i].trim();
    if (!trimmed) {
      continue;
    }

    if (trimmed === "⸻") {
      break;
    }

    if (trimmed.startsWith("mmh-")) {
      i -= 1;
      break;
    }

    if (skipLabelLine && trimmed.toLowerCase().startsWith("technical note")) {
      continue;
    }

    buffer.push(trimmed);
  }

  return { text: buffer.join(" ").trim(), nextIndex: i };
}

function buildScreenshotEntries(captionMap: Map<string, string>, technicalMap: Map<string, string>) {
  const files = fs
    .readdirSync(PUBLIC_SCREENSHOT_DIR)
    .filter((file) => /-(600|1200|1800)\.(png|webp)$/.test(file));

  const entries: Record<string, IntermediateScreenshotEntry> = {};

  files.forEach((file) => {
    const match = file.match(/^(mmh-[a-z0-9-]+)-(600|1200|1800)\.(png|webp)$/i);
    if (!match) {
      return;
    }

    const [, baseName, width, format] = match;
    const normalizedName = baseName.toLowerCase();
    const entryKey = normalizedName;
    const group = determineGroup(entryKey);

    if (!entries[entryKey]) {
      entries[entryKey] = {
        id: baseName,
        caption: captionMap.get(baseName) ?? captionMap.get(entryKey) ?? "[caption needed]",
        technicalNote: technicalMap.get(baseName) ?? technicalMap.get(entryKey),
        group,
        variants: {
          png: [],
          webp: []
        }
      };
    }

    const variantFormat = format as VariantFormat;
    entries[entryKey].variants[variantFormat].push({
      width: Number(width),
      src: `${PUBLIC_SCREENSHOT_BASE}/${file}`
    });
  });

  return entries;
}

function determineGroup(baseName: string): ScreenshotGroup {
  const lower = baseName.toLowerCase();
  if (lower.includes("pagespeed")) {
    return "pagespeed";
  }
  if (lower.includes("mobile")) {
    return "mobile";
  }
  if (lower.includes("admin")) {
    return "admin";
  }
  return "public";
}

function buildSrcSet(variants: Variant[]) {
  if (!variants.length) {
    return "";
  }
  return [...variants]
    .sort((a, b) => a.width - b.width)
    .map((variant) => `${variant.src} ${variant.width}w`)
    .join(", ");
}

function getFallback(entry: IntermediateScreenshotEntry) {
  const pngVariants = [...entry.variants.png].sort((a, b) => a.width - b.width);
  const preferred =
    pngVariants.find((variant) => variant.width === 1200) ??
    pngVariants.at(-1) ??
    [...entry.variants.webp].sort((a, b) => a.width - b.width).at(-1);
  return preferred ? preferred.src : "";
}

function getFallbackWidth(entry: IntermediateScreenshotEntry) {
  const pngVariants = [...entry.variants.png].sort((a, b) => a.width - b.width);
  const preferred =
    pngVariants.find((variant) => variant.width === 1200) ??
    pngVariants.at(-1) ??
    [...entry.variants.webp].sort((a, b) => a.width - b.width).at(-1);
  return preferred ? preferred.width : 0;
}

function sortByOrdering(items: ScreenshotAsset[], priorityList: string[]) {
  return [...items].sort((a, b) => {
    const indexA = priorityList.indexOf(a.id);
    const indexB = priorityList.indexOf(b.id);
    if (indexA === -1 && indexB === -1) {
      return a.id.localeCompare(b.id);
    }
    if (indexA === -1) {
      return 1;
    }
    if (indexB === -1) {
      return -1;
    }
    return indexA - indexB;
  });
}
