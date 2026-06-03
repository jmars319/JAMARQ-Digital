import path from "path";
import {
  createScreenshotLoader,
  type ScreenshotGroup
} from "@/lib/caseStudyScreenshots";

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

const ORDERING: Record<ScreenshotGroup, string[]> = {
  pagespeed: [
    "trbg-pagespeed-current",
    "trbg-pagespeed-desktopbefore",
    "trbg-pagespeed-desktopafter",
    "trbg-pagespeed-mobilebefore",
    "trbg-pagespeed-mobileafter"
  ],
  public: [
    "trbg-public-current-homepage",
    "trbg-public-current-menu",
    "trbg-public-current-reservations",
    "trbg-public-current-careers",
    "trbg-public-homepage",
    "trbg-public-menu",
    "trbg-public-reservations",
    "trbg-public-jobs"
  ],
  admin: [],
  mobile: [
    "trbg-public-current-homepagemobile",
    "trbg-public-homepagemobile",
    "trbg-public-menumobile",
    "trbg-public-navigationmobile"
  ]
};

export const getTRBGScreenshotGroups = createScreenshotLoader({
  captionFile: CAPTIONS_FILE,
  technicalNotesFile: TECH_NOTES_FILE,
  publicScreenshotDir: PUBLIC_SCREENSHOT_DIR,
  publicScreenshotBase: PUBLIC_SCREENSHOT_BASE,
  idPrefix: "trbg-",
  manualOrdering: ORDERING
});
