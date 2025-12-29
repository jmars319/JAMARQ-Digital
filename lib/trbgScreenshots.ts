import path from "path";
import { createScreenshotLoader } from "@/lib/caseStudyScreenshots";

const CASE_STUDY_ROOT = path.join(
  process.cwd(),
  "content/case-studies/thunder-road-bar-and-grill"
);
const DOCUMENTS_DIR = path.join(CASE_STUDY_ROOT, "Documents");
const CAPTIONS_FILE = path.join(DOCUMENTS_DIR, "trbg-casestudy-captions-for-screenshots.md");
const TECH_NOTES_FILE = path.join(
  DOCUMENTS_DIR,
  "trbg-casestudy-technical-notes-per-screenshot.md"
);
const PUBLIC_SCREENSHOT_DIR = path.join(process.cwd(), "public/case-studies/trbg");
const PUBLIC_SCREENSHOT_BASE = "/case-studies/trbg";

export const getTRBGScreenshotGroups = createScreenshotLoader({
  captionFile: CAPTIONS_FILE,
  technicalNotesFile: TECH_NOTES_FILE,
  publicScreenshotDir: PUBLIC_SCREENSHOT_DIR,
  publicScreenshotBase: PUBLIC_SCREENSHOT_BASE,
  idPrefix: "trbg-"
});
