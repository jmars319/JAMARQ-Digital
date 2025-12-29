import path from "path";
import {
  createScreenshotLoader,
  type ScreenshotGroup
} from "@/lib/caseStudyScreenshots";

const CASE_STUDY_ROOT = path.join(process.cwd(), "content/case-studies/midway-music-hall");
const DOCUMENTS_DIR = path.join(CASE_STUDY_ROOT, "Documents");
const CAPTIONS_FILE = path.join(DOCUMENTS_DIR, "mmh casestudy-captions-for-screenshots.md");
const TECH_NOTES_FILE = path.join(
  DOCUMENTS_DIR,
  "mmh casestudy-technical-notes-per-screenshot.md"
);
const PUBLIC_SCREENSHOT_DIR = path.join(process.cwd(), "public/case-studies/mmh");
const PUBLIC_SCREENSHOT_BASE = "/case-studies/mmh";

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

export const getMMHScreenshotGroups = createScreenshotLoader({
  captionFile: CAPTIONS_FILE,
  technicalNotesFile: TECH_NOTES_FILE,
  publicScreenshotDir: PUBLIC_SCREENSHOT_DIR,
  publicScreenshotBase: PUBLIC_SCREENSHOT_BASE,
  idPrefix: "mmh-",
  manualOrdering: ORDERING
});
