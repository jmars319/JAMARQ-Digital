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

## Pass 2 Runtime, Database, And Storage Decisions

### Runtime

- Keep `jamarq.digital`, `tenra.dev`, and `vaexil.tv` on Vercel.
- Keep `relay.vaexil.tv` on Cloudflare Workers.
- Do not put Relay inside the `vaexil.tv` Vercel app. Relay owns public webhook/OAuth endpoints and Worker secrets, so it should stay as a separate runtime boundary.
- Do not add Cloudflare Pages for these sites. There is no repo evidence that a Pages migration would reduce cost or complexity.

### Database

- Keep current website databases on hosted libSQL/Turso.
- Use D1 only for Relay state: installations, OAuth grants, EventSub subscriptions, chat queues, Discord interaction queues, suggestions, and audit rows.
- Do not migrate the Vercel-hosted websites to D1 now. D1 is Cloudflare-native, while the three websites run on Vercel. Moving site data to D1 would require a Worker/API bridge or a hosting move, neither of which is justified by the current apps.
- If Turso becomes a budget issue later, review website data access patterns first. Do not replace Turso with D1 just because Relay uses D1.

### Storage

- R2 is not part of v1 for these sites or Relay.
- Use R2 later only for real object storage needs: exported backups, media, generated assets, or log/archive files.
- Do not use R2 for SQL state. D1/Turso store relational app state; R2 stores files/blobs.
- Do not add KV, Queues, Durable Objects, Vectorize, Workers AI, Stream, Images, or Cloudflare Pages for v1 unless a concrete feature requires them.

## Cost Model

Current official pricing references checked on 2026-05-10:

- Vercel pricing: <https://vercel.com/pricing>
- Vercel Hobby plan: <https://vercel.com/docs/plans/hobby>
- Vercel limits: <https://vercel.com/docs/limits>
- Cloudflare Workers pricing, including D1/KV/R2 summaries: <https://developers.cloudflare.com/workers/platform/pricing/>
- Cloudflare R2 pricing: <https://developers.cloudflare.com/r2/pricing/>
- Cloudflare zone plan billing: <https://developers.cloudflare.com/billing/understand/how-billing-works/>
- Cloudflare zone plan prices: <https://workers.cloudflare.com/plans>
- Turso pricing: <https://turso.tech/pricing?frequency=monthly>

| Scenario | Base monthly cost | Fit |
| --- | ---: | --- |
| Current/free path | `$0` platform base, excluding prepaid domains and any existing Turso/R2 usage | Fine while Vercel Hobby terms and usage are acceptable. |
| Vercel Pro only | `$20/mo + usage` | Use if commercial/professional use, collaboration, build concurrency, spend controls, or Pro-only Vercel features become necessary. |
| Workers Paid only | `$5/mo + usage` | Use when Relay traffic/logging/headroom justifies it. D1 itself is available on Workers Free, but Paid gives larger monthly Workers allowances. |
| Vercel Pro + Workers Paid | `$25/mo + usage` | Best target paid setup if Vercel Pro is needed and Relay is live. Fits the `$25-30/mo` budget target before usage overages. |
| Vercel Pro + Workers Paid + D1 | `$25/mo + D1 overages only` | D1 should be effectively included for expected Relay v1 usage unless row reads/writes/storage exceed included/free allowances. |
| Vercel Pro + Workers Paid + Turso Developer | `$30.99/mo + usage` | Acceptable only if Turso Free is not enough and keeping websites on Vercel remains preferred. |
| Cloudflare zone Pro for all three domains | `$75/mo` monthly, or `$60/mo equivalent` annual | Not justified. Zone plans bill per domain and no repo/dashboard evidence needs Pro-only zone features. |
| R2 light usage | Usually `$0` within free tier | Keep enabled only if useful. Avoid serving high-request assets from R2 without estimating Class B operation volume. |

Do not prepay for Cloudflare zone Pro, Vercel add-ons, R2-heavy asset serving, Workers AI, Vectorize, Images, Stream, or Turso paid tiers until a real feature or usage limit forces the spend.

## Pass 2 Live Integration Status

Relay base launch is complete, but live Twitch/Discord integration is intentionally not completed from this audit pass because those steps require account-side OAuth and Discord application values.

Remaining Relay tasks belong in the VaexCore workspace:

- Add Twitch callback URL: `https://relay.vaexil.tv/oauth/twitch/callback`.
- Complete bot OAuth while logged into `vaexcorebot`.
- Complete broadcaster OAuth while logged into the broadcaster account.
- Switch Console to `relay-chatbot`, register EventSub, and test one chat send.
- Set Discord Worker secrets: `DISCORD_BOT_TOKEN`, `DISCORD_PUBLIC_KEY`, `DISCORD_APPLICATION_ID`, `DISCORD_GUILD_ID`, and optionally `DISCORD_OPERATOR_ROLE_ID`.
- Set Discord Interactions Endpoint URL: `https://relay.vaexil.tv/webhooks/discord/interactions`.
- Register slash commands from Console and validate `/suggest`, `/live`, `/late`, `/cancelled`, `/scheduled`, and `/setup-status`.

## Pass 2 Conclusion

The practical service decision is stable:

- Vercel remains the website runtime.
- Turso/libSQL remains the website database path.
- Cloudflare Workers + D1 remains the Relay runtime/database path.
- R2 remains unused for v1.
- The only near-term paid plan likely to fit the budget is Vercel Pro + Workers Paid at about `$25/mo` before usage overages, and even that should wait for the concrete trigger.

## Overall Conclusion

The current platform shape is correct:

- Cloudflare Registrar/DNS for domains.
- Vercel for the three websites.
- Cloudflare Worker + D1 for `relay.vaexil.tv`.

No evidence from Pass 1 supports moving the websites off Vercel, adding Cloudflare Pages, using R2/KV/Queues for v1, or upgrading Cloudflare zone plans.
