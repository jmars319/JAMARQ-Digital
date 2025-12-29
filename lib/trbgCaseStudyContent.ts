import fs from "fs";
import path from "path";

const CASE_STUDY_ROOT = path.join(
  process.cwd(),
  "content/case-studies/thunder-road-bar-and-grill"
);
const DOCUMENTS_DIR = path.join(CASE_STUDY_ROOT, "Documents");
const SHORT_FILE = path.join(DOCUMENTS_DIR, "trbg-casestudy-short-public.md");
const FULL_FILE = path.join(DOCUMENTS_DIR, "trbg-casestudy-full-public.md");

const shortMarkdown = fs.readFileSync(SHORT_FILE, "utf-8");
const fullMarkdown = fs.readFileSync(FULL_FILE, "utf-8");

const fullSections = parseSections(fullMarkdown);
const hero = buildHero(shortMarkdown);
const heroLaunchValue = hero.launch.replace(/^Launch:\s*/, "") || "November 2025";

export const trbgCaseStudyContent = {
  hero,
  projectOverview: {
    heading: "Project Overview",
    facts: [
      { label: "Client", value: "Thunder Road Bar & Grill — Midway, NC" },
      { label: "Project Type", value: "Custom restaurant website and admin system" },
      { label: "Timeline", value: "Late 2025" },
      { label: "Launch", value: heroLaunchValue }
    ],
    paragraphs: extractParagraphs(fullSections["Overview"])
  },
  challenge: buildChallenge(fullSections["The Problem"]),
  objectives: {
    heading: "Objectives",
    bullets: extractBullets(fullSections["Goals"])
  },
  approach: {
    heading: "Approach",
    paragraphs: extractApproachParagraphs(fullSections["Approach"])
  },
  solution: {
    heading: "The Solution",
    sections: extractSolutionSections(fullSections["Solution"])
  },
  results: {
    heading: "Results",
    categories: buildResultsCategories(fullSections["Results"], fullSections["Before and After"])
  },
  keyTakeaways: {
    heading: "Key Takeaways",
    bullets: extractBullets(fullSections["Tradeoffs and Constraints"])
  }
} as const;

export type TRBGCaseStudyContent = typeof trbgCaseStudyContent;

function buildHero(markdown: string) {
  const lines = markdown.split(/\r?\n/);
  const titleLineIndex = lines.findIndex((line) => line.trim().startsWith("# "));
  const title =
    titleLineIndex >= 0 ? lines[titleLineIndex].replace(/^#\s*/, "").trim() : "Thunder Road Bar & Grill";
  const subtitleLineIndex = findNextContentLineIndex(lines, titleLineIndex + 1);
  const subtitle = subtitleLineIndex >= 0 ? lines[subtitleLineIndex].trim() : "";
  const summary = extractHeroSummary(lines, subtitleLineIndex + 1);
  const stackMatch = markdown.match(/\*\*Stack:\*\*\s*(.+)/);
  const launchMatch = markdown.match(/\*\*Launch:\*\*\s*(.+)/);

  return {
    title,
    subtitle,
    summary,
    stack: stackMatch ? `Stack: ${stackMatch[1].trim()}` : "",
    launch: launchMatch ? `Launch: ${launchMatch[1].trim()}` : ""
  };
}

function findNextContentLineIndex(lines: string[], startIndex: number) {
  for (let i = startIndex; i < lines.length; i++) {
    if (lines[i] && lines[i].trim()) {
      return i;
    }
  }
  return -1;
}

function extractHeroSummary(lines: string[], startIndex: number) {
  const paragraphs: string[] = [];
  let buffer: string[] = [];

  for (let i = startIndex; i < lines.length; i++) {
    const trimmed = lines[i].trim();
    if (trimmed === "") {
      if (buffer.length) {
        paragraphs.push(buffer.join(" ").trim());
        buffer = [];
      }
      continue;
    }

    if (trimmed.startsWith("The Challenge") || trimmed.startsWith("**Stack:**")) {
      if (buffer.length) {
        paragraphs.push(buffer.join(" ").trim());
      }
      break;
    }

    buffer.push(trimmed);
  }

  if (buffer.length) {
    paragraphs.push(buffer.join(" ").trim());
  }

  return paragraphs.filter(Boolean);
}

function parseSections(markdown: string) {
  const lines = markdown.split(/\r?\n/);
  const sections: Record<string, string[]> = {};
  let current = "";

  lines.forEach((line) => {
    const trimmed = line.trim();
    if (trimmed.startsWith("# ")) {
      return;
    }

    if (trimmed.startsWith("## ")) {
      current = trimmed.replace(/^##\s*/, "").trim();
      sections[current] = [];
      return;
    }

    if (!current) {
      return;
    }

    sections[current].push(line);
  });

  return sections;
}

function cleanLines(lines: string[] = []) {
  return lines
    .map((line) => line.trim())
    .filter((line) => line && line !== "---" && line !== "⸻");
}

function extractParagraphs(lines: string[] = []) {
  const cleaned = cleanLines(lines);
  const paragraphs: string[] = [];
  let buffer: string[] = [];

  cleaned.forEach((line) => {
    if (line.startsWith("- ") || line.startsWith("**")) {
      return;
    }

    if (!line) {
      if (buffer.length) {
        paragraphs.push(buffer.join(" ").trim());
        buffer = [];
      }
      return;
    }

    buffer.push(line);
  });

  if (buffer.length) {
    paragraphs.push(buffer.join(" ").trim());
  }

  return paragraphs;
}

function extractBullets(lines: string[] = []) {
  return cleanLines(lines)
    .filter((line) => line.startsWith("- "))
    .map((line) => line.replace(/^-+\s*/, "").trim());
}

function buildChallenge(lines: string[] = []) {
  const cleaned = cleanLines(lines);
  const introParts: string[] = [];
  const closingParts: string[] = [];
  const bullets: string[] = [];
  let mode: "intro" | "bullets" | "closing" = "intro";

  cleaned.forEach((line) => {
    if (line.startsWith("- ")) {
      mode = "bullets";
      bullets.push(line.replace(/^-+\s*/, "").trim());
      return;
    }

    if (mode === "bullets") {
      mode = "closing";
    }

    if (mode === "intro") {
      introParts.push(line);
    } else {
      closingParts.push(line);
    }
  });

  return {
    heading: "The Challenge",
    intro: introParts.join(" ").trim(),
    bullets,
    closing: closingParts.join(" ").trim()
  };
}

function extractApproachParagraphs(lines: string[] = []) {
  const subsections = splitSubsections(lines);
  return subsections
    .map((section) => {
      const paragraphs = extractParagraphs(section.content);
      if (!paragraphs.length) {
        return "";
      }
      return `${section.title}: ${paragraphs.join(" ")}`;
    })
    .filter(Boolean);
}

function extractSolutionSections(lines: string[] = []) {
  const subsections = splitSubsections(lines);
  return subsections
    .map((section) => {
      const items = extractBullets(section.content);
      if (!items.length) {
        return null;
      }
      return {
        title: section.title,
        items
      };
    })
    .filter((section): section is { title: string; items: string[] } => Boolean(section));
}

function splitSubsections(lines: string[] = []) {
  const subsections: { title: string; content: string[] }[] = [];
  let currentTitle = "";
  let buffer: string[] = [];

  lines.forEach((line) => {
    const trimmed = line.trim();
    if (trimmed.startsWith("### ")) {
      if (currentTitle) {
        subsections.push({ title: currentTitle, content: buffer });
      }
      currentTitle = trimmed.replace(/^###\s*/, "").trim();
      buffer = [];
      return;
    }

    if (!currentTitle) {
      return;
    }

    buffer.push(line);
  });

  if (currentTitle) {
    subsections.push({ title: currentTitle, content: buffer });
  }

  return subsections;
}

function buildResultsCategories(resultsLines: string[] = [], beforeAfterLines: string[] = []) {
  const categories: { title: string; items: string[] }[] = [];
  const resultItems = extractBullets(resultsLines);
  if (resultItems.length) {
    categories.push({ title: "Measured Results", items: resultItems });
  }

  extractBeforeAfter(beforeAfterLines).forEach((category) => categories.push(category));

  return categories;
}

function extractBeforeAfter(lines: string[] = []) {
  const cleaned = cleanLines(lines);
  const categories: { title: string; items: string[] }[] = [];
  let currentTitle = "";
  let items: string[] = [];

  cleaned.forEach((line) => {
    const headingMatch = line.match(/^\*\*(.+)\*\*$/);
    if (headingMatch) {
      if (currentTitle && items.length) {
        categories.push({ title: headingMatchTitle(currentTitle), items });
      }
      currentTitle = headingMatch[1];
      items = [];
      return;
    }

    if (line.startsWith("- ")) {
      items.push(line.replace(/^-+\s*/, "").trim());
    }
  });

  if (currentTitle && items.length) {
    categories.push({ title: headingMatchTitle(currentTitle), items });
  }

  return categories;
}

function headingMatchTitle(raw: string) {
  return raw.replace(/\*\*/g, "").trim();
}
