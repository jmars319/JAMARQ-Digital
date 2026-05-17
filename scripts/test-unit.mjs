import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

async function text(path) {
  return readFile(new URL(`../${path}`, import.meta.url), "utf8");
}

async function assertIncludes(path, pattern, label) {
  assert.match(await text(path), pattern, label);
}

await assertIncludes("app/page.tsx", /JAMARQ Digital/i, "home route should identify JAMARQ Digital");
await assertIncludes("app/admin/page.tsx", /robots:\s*\{[^}]*index:\s*false/s, "admin route metadata should be noindex");
await assertIncludes("app/api/contact/route.ts", /MAX_PAYLOAD_BYTES/i, "contact API should limit payload size");
await assertIncludes("app/api/contact/route.ts", /Message recorded, email delivery disabled/i, "contact API should degrade safely without SendGrid");
await assertIncludes("app/robots.ts", /sitemap/i, "robots route should advertise sitemap");
await assertIncludes("app/sitemap.ts", /MetadataRoute\.Sitemap/i, "sitemap route should use Next metadata route");

for (const file of ["app/page.tsx", "app/api/contact/route.ts", "app/admin/page.tsx"]) {
  assert.doesNotMatch(await text(file), /https?:\/\/(?:localhost|127\.0\.0\.1):\d+/i, `${file} should not contain hard-coded localhost URLs`);
}

console.log("[test:unit] JAMARQ Digital invariants passed");
