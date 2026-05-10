# Personal Infrastructure Audit

Date: 2026-05-10

This is the Pass 1 audit for the personal domains:

- `jamarq.digital`
- `tenra.dev`
- `vaexil.tv`
- `relay.vaexil.tv`

Client domains are out of scope.

## Executive Recommendation

Keep the three websites on Vercel. Keep Cloudflare as registrar/DNS. Keep `relay.vaexil.tv` as the only Cloudflare Worker custom domain.

Do not move the websites to Cloudflare Pages or Workers now. Do not upgrade Cloudflare zone plans now. The current repo shape is dynamic Next.js with App Router, API routes, admin surfaces, Vercel project links, and libSQL/Turso production paths. Vercel remains the lowest-complexity host for the three sites.

Use Cloudflare Worker + D1 only for VaexCore Relay. Do not use R2, KV, Queues, Durable Objects, or Cloudflare Pages for v1 of the personal sites.

## Current Site Inventory

| Domain | Repo | Vercel project | App shape | Runtime dependencies | Classification |
| --- | --- | --- | --- | --- | --- |
| `jamarq.digital` | `JAMARQ Digital Portfolio Site` | `jamarq-digital` / `prj_jSFXUYoPmzemBPQNs7vGD9Zch6LL` | Next.js 16 App Router under `app/` | SendGrid contact API, libSQL/Turso admin/content records, Vercel Analytics/Speed Insights | Dynamic portfolio/marketing site with admin and contact APIs |
| `tenra.dev` | `tenra.dev Portfolio Site` | `tenra-dev` / `prj_vfYGSZF34dzSASWSTyV8aEkLGMoQ` | Next.js 16 App Router under `src/app/` | SendGrid contact API, libSQL/Turso admin/project/content records, Vercel Analytics/Speed Insights | Dynamic software/business site with admin and contact APIs |
| `vaexil.tv` | `vaexil.tv` | `vaexil-tv` / `prj_WYx9jwYEEzy3THXojoTdIlMIbsiY` | Next.js 16 App Router under `src/app/` | libSQL/Turso guide/suggestion/admin state, SendGrid-capable contact API, server actions | Dynamic creator hub and guide/suggestion app |
| `relay.vaexil.tv` | VaexCore Relay workspace | `vaexcore-relay` Worker | Cloudflare Worker | D1 database `vaexcore-relay`, Worker secrets, Twitch/Discord public callbacks | Bot/relay service, not a website |

Evidence:

- All three site repos have `.vercel/project.json` metadata and `next.config.ts`.
- Vercel CLI shows production URLs: `https://jamarq.digital`, `https://tenra.dev`, and `https://vaexil.tv`.
- Public HTTP headers for the three apex domains return `server: Vercel`.
- Vercel domain inspection shows each domain is assigned to the expected Vercel project.

## DNS And Hosting Map

| Host | Current public DNS evidence | HTTP hosting evidence | Recommendation |
| --- | --- | --- | --- |
| `jamarq.digital` | A `216.198.79.1` | `200`, `server: Vercel` | Keep Cloudflare DNS record for Vercel apex |
| `www.jamarq.digital` | CNAME to Vercel DNS target, resolves to Vercel A records | `307` to `https://jamarq.digital/`, `server: Vercel` | Keep as Vercel alias/redirect |
| `tenra.dev` | A `216.198.79.1` | `200`, `server: Vercel` | Keep Cloudflare DNS record for Vercel apex |
| `www.tenra.dev` | CNAME to Vercel DNS target, resolves to Vercel A records | `307` to `https://tenra.dev/`, `server: Vercel` | Keep as Vercel alias/redirect |
| `vaexil.tv` | A `64.29.17.65`, `216.198.79.65` | `200`, `server: Vercel` | Keep Cloudflare DNS record for Vercel apex |
| `www.vaexil.tv` | CNAME to Vercel DNS target, resolves to Vercel A records | `307` to `https://vaexil.tv/`, `server: Vercel` | Keep as Vercel alias/redirect |
| `relay.vaexil.tv` | Cloudflare A/AAAA edge records | Worker `/health` returns OK via Cloudflare public DNS resolution | Keep as Cloudflare Worker custom domain |

Vercel domain inspection reports the three apex domains as third-party registrar domains with Cloudflare nameservers:

- `clint.ns.cloudflare.com`
- `demi.ns.cloudflare.com`

The nameserver mismatch indicators in Vercel are expected for this architecture. Do not move nameservers to Vercel; Cloudflare should remain the DNS authority.

## Runtime Fit

### Keep On Vercel

- `jamarq.digital`: dynamic Next.js site with contact API, admin route, libSQL/Turso content/admin state, and Vercel analytics packages.
- `tenra.dev`: dynamic Next.js site with contact API, admin route, libSQL/Turso project/content state, and Vercel analytics packages.
- `vaexil.tv`: dynamic Next.js site with server actions, guide/suggestion/admin state, contact API, and hosted libSQL/Turso deployment path.

These are not good candidates for Cloudflare Pages migration right now because moving them would add framework/runtime risk without solving a real problem. Vercel already hosts the projects and handles the Next.js runtime surface directly.

### Keep On Cloudflare Worker

- `relay.vaexil.tv`: public callback/service boundary for VaexCore Relay.

Relay should remain separate from the `vaexil.tv` website because it owns Twitch OAuth/EventSub, Discord interaction verification, app-token chat delivery, D1 state, and Worker secrets. That is a service boundary, not a web page concern.

## Current Environment Findings

Vercel env-name inspection found these production-relevant variables:

| Project | Present env names | Notes |
| --- | --- | --- |
| `jamarq-digital` | `SENDGRID_API_KEY`, `SENDGRID_TO_EMAIL`, `SENDGRID_FROM_EMAIL`, `LIBSQL_URL`, `LIBSQL_AUTH_TOKEN`, `ADMIN_PASSWORD`, `ADMIN_SESSION_SECRET` | Matches repo needs for contact, admin, and libSQL/Turso. |
| `tenra-dev` | `SENDGRID_API_KEY`, `SENDGRID_TO_EMAIL`, `SENDGRID_FROM_EMAIL`, `LIBSQL_URL`, `LIBSQL_AUTH_TOKEN`, `ADMIN_PASSWORD`, `ADMIN_SESSION_SECRET` | Matches repo needs for contact, admin, and libSQL/Turso. |
| `vaexil-tv` | `ADMIN_PASSWORD`, `ADMIN_SESSION_SECRET`, `SUGGESTION_READY_VOTE_THRESHOLD`, `NEXT_PUBLIC_SITE_URL`, `NEXT_PUBLIC_TWITCH_URL`, `NEXT_PUBLIC_YOUTUBE_URL`, `LIBSQL_URL`, `LIBSQL_AUTH_TOKEN` | SendGrid env names are not present in Vercel, so production contact email delivery should be dashboard-verified before relying on email. Contact submissions can still be recorded by the app when email is unset. |

No site repo currently shows Cloudflare Worker, R2, KV, Queues, Durable Objects, or Pages configuration.

## Dashboard Verification Checklist

Cloudflare:

- Confirm `jamarq.digital`, `tenra.dev`, and `vaexil.tv` are in the Jam319 account and use Free zone plans.
- Confirm registrar renewal status for the three personal domains.
- Confirm DNS records for apex and `www` match the Vercel assignments above.
- Confirm Vercel-hosted records are not unnecessarily proxied if Vercel asks for DNS-only records.
- Confirm `relay.vaexil.tv` is the only Worker custom domain for these personal domains.
- Confirm R2 Paid is account-level only and not bound to these sites.

Vercel:

- Confirm projects `jamarq-digital`, `tenra-dev`, and `vaexil-tv` are under the intended account/team.
- Confirm production domains include both apex and `www` for each site.
- Confirm production env vars match the table above.
- Confirm `vaexil-tv` either intentionally has no SendGrid delivery yet or add SendGrid env vars before relying on email.
- Confirm current plan usage before considering Vercel Pro.

VaexCore Relay:

- Relay repo has intentional uncommitted production config changes.
- Worker deployment exists as version `4fd5b1e0-676a-4e2c-bda7-0f55736ac904`.
- D1 database `vaexcore-relay` exists as `97e98f56-9b01-44d7-99bc-85467366129e`.
- Remote D1 query confirms migrated tables exist.
- Current Worker secrets include Twitch/client relay base secrets, but Discord secrets remain unset.

## Pass 1 Conclusion

The current platform shape is correct:

- Cloudflare Registrar/DNS for domains.
- Vercel for the three websites.
- Cloudflare Worker + D1 for `relay.vaexil.tv`.

No evidence from Pass 1 supports moving the websites off Vercel, adding Cloudflare Pages, using R2/KV/Queues for v1, or upgrading Cloudflare zone plans.
