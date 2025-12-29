import fs from "fs";
import path from "path";

export type ScreenshotGroup = "pagespeed" | "public" | "admin" | "mobile";

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
  group?: ScreenshotGroup;
  caption: string;
  technicalNote?: string;
  webpSrcSet?: string;
  pngSrcSet?: string;
  fallbackSrc: string;
  fallbackWidth?: number;
  width?: number;
  height?: number;
  alt?: string;
}

interface LoaderConfig {
  captionFile: string;
  technicalNotesFile: string;
  publicScreenshotDir: string;
  publicScreenshotBase: string;
  idPrefix: string;
  manualOrdering?: Partial<Record<ScreenshotGroup, string[]>>;
}

export function createScreenshotLoader(config: LoaderConfig) {
  return function getScreenshotGroups() {
    const captionData = buildCaptionData(config.captionFile, config.idPrefix);
    const technicalMap = buildTechnicalMap(config.technicalNotesFile, config.idPrefix);
    const screenshotEntries = buildScreenshotEntries(config, captionData.map, technicalMap);
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
      const manualOrder = config.manualOrdering?.[groupKey] ?? [];
      const derivedOrder = manualOrder.length ? manualOrder : captionData.orderByGroup[groupKey];
      grouped[groupKey] = sortByOrdering(grouped[groupKey], derivedOrder);
    });

    return grouped;
  };
}

function buildCaptionData(filePath: string, prefix: string) {
  const content = fs.readFileSync(filePath, "utf-8");
  const lines = content.split(/\r?\n/);
  const entries = new Map<string, string>();
  const orderByGroup: Record<ScreenshotGroup, string[]> = {
    pagespeed: [],
    public: [],
    admin: [],
    mobile: []
  };

  for (let i = 0; i < lines.length; i++) {
    const trimmed = lines[i].trim();
    if (!trimmed.startsWith(prefix)) {
      continue;
    }

    const key = trimmed.replace(/-source$/, "");
    const { text, nextIndex } = collectBlock(lines, i + 1, prefix);
    if (text) {
      entries.set(key, text);
      const lowered = key.toLowerCase();
      if (lowered !== key) {
        entries.set(lowered, text);
      }
    }

    const group = determineGroup(key);
    orderByGroup[group].push(key);
    i = nextIndex;
  }

  return { map: entries, orderByGroup };
}

function buildTechnicalMap(filePath: string, prefix: string) {
  const content = fs.readFileSync(filePath, "utf-8");
  const lines = content.split(/\r?\n/);
  const entries = new Map<string, string>();

  for (let i = 0; i < lines.length; i++) {
    const trimmed = lines[i].trim();
    if (!trimmed.startsWith(prefix)) {
      continue;
    }

    const key = trimmed.replace(/-source$/, "");
    const { text, nextIndex } = collectBlock(lines, i + 1, prefix, true);
    if (text) {
      entries.set(key, text);
      const lowered = key.toLowerCase();
      if (lowered !== key) {
        entries.set(lowered, text);
      }
    }
    i = nextIndex;
  }

  return entries;
}

function collectBlock(
  lines: string[],
  startIndex: number,
  prefix: string,
  skipLabelLine = false
) {
  const buffer: string[] = [];
  let i = startIndex;

  for (; i < lines.length; i++) {
    const trimmed = lines[i].trim();
    if (!trimmed) {
      continue;
    }

    if (trimmed === "⸻" || trimmed === "---") {
      break;
    }

    if (trimmed.startsWith(prefix)) {
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

function buildScreenshotEntries(
  config: LoaderConfig,
  captionMap: Map<string, string>,
  technicalMap: Map<string, string>
) {
  const files = readScreenshotFiles(config.publicScreenshotDir);
  const entries: Record<string, IntermediateScreenshotEntry> = {};
  const prefixPattern = escapeRegExp(config.idPrefix);
  const filePattern = new RegExp(
    `^(${prefixPattern}[a-z0-9-]+)-(600|1200|1800)\\.(png|webp)$`,
    "i"
  );

  files.forEach((absolutePath) => {
    const relativePath = path.relative(config.publicScreenshotDir, absolutePath).replace(/\\/g, "/");
    const fileName = path.basename(relativePath);
    const match = fileName.match(filePattern);
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

    const variantFormat = format.toLowerCase() as VariantFormat;
    const src = buildPublicSrc(config.publicScreenshotBase, relativePath);
    entries[entryKey].variants[variantFormat].push({
      width: Number(width),
      src
    });
  });

  return entries;
}

function readScreenshotFiles(dir: string) {
  const stack: string[] = [dir];
  const files: string[] = [];

  while (stack.length) {
    const current = stack.pop();
    if (!current) {
      continue;
    }

    const entries = fs.readdirSync(current, { withFileTypes: true });
    entries.forEach((entry) => {
      const resolved = path.join(current, entry.name);
      if (entry.isDirectory()) {
        stack.push(resolved);
      } else {
        files.push(resolved);
      }
    });
  }

  return files;
}

function buildPublicSrc(base: string, relativePath: string) {
  const normalizedPath = relativePath
    .split("/")
    .filter((segment) => segment.length)
    .map((segment) => encodeURIComponent(segment))
    .join("/");
  return `${base}/${normalizedPath}`;
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

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
