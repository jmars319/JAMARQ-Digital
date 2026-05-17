import { expect, test } from "@playwright/test";

const routes = ["/", "/work", "/services", "/contact", "/privacy", "/terms", "/admin", "/robots.txt", "/sitemap.xml"];

for (const route of routes) {
  test(`renders ${route}`, async ({ page }) => {
    const pageErrors: string[] = [];
    page.on("pageerror", (error) => pageErrors.push(error.message));

    const response = await page.goto(route, { waitUntil: "domcontentloaded" });
    expect(response?.status() || 0).toBeLessThan(500);
    await expect(page.locator("body")).toContainText(/[A-Za-z]/);
    await expect(page.locator("[data-nextjs-dialog-overlay]")).toHaveCount(0);
    expect(pageErrors).toEqual([]);
  });
}

test("contact API rejects invalid payload without leaking internals", async ({ request }) => {
  const response = await request.post("/api/contact", { data: {} });
  expect(response.status()).toBe(400);
  const body = await response.text();
  expect(body).not.toMatch(/SENDGRID_API_KEY|TURSO_AUTH_TOKEN|stack|trace/i);
});
