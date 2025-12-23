const PAGESPEED_BASE = "https://pagespeed.web.dev";
const PAGESPEED_REPORT_PATH = "/report?url=";

export const PAGE_SPEED_INSIGHTS_HOME = PAGESPEED_BASE;

export function buildPageSpeedReportUrl(targetUrl: string) {
  return `${PAGESPEED_BASE}${PAGESPEED_REPORT_PATH}${encodeURIComponent(targetUrl)}`;
}
