# Personal Infrastructure Final Recommendation

Date: 2026-05-10

## Executive Recommendation

Keep the architecture minimal:

- `jamarq.digital`, `tenra.dev`, and `vaexil.tv`: Vercel hosting/runtime.
- Domains: Cloudflare Registrar + Cloudflare DNS.
- `relay.vaexil.tv`: Cloudflare Worker custom domain.
- Relay database: Cloudflare D1.
- Website databases: existing hosted libSQL/Turso path.
- R2: keep unused for now unless backups/media/log exports become real.
- Cloudflare zone/site Pro plans: do not upgrade.

The likely paid target, if/when paid plans are justified, is Vercel Pro + Workers Paid at about `$25/mo` before usage overages. Do not prepay for Vercel Pro, Workers Paid, Turso Developer, R2-heavy usage, or Cloudflare zone Pro until a concrete limit or product need appears.

## Current Architecture Found

| Domain | Repo/project | Current host | Runtime/data found | Validation |
| --- | --- | --- | --- | --- |
| `jamarq.digital` | `JAMARQ Digital Portfolio Site`, Vercel `jamarq-digital` | Vercel | Next.js App Router, SendGrid contact API, admin route, libSQL/Turso records, Vercel Analytics/Speed Insights | `npm run verify` passed |
| `tenra.dev` | `tenra.dev Portfolio Site`, Vercel `tenra-dev` | Vercel | Next.js App Router, SendGrid contact API, admin route, libSQL/Turso records, Vercel Analytics/Speed Insights | `npm run verify` passed |
| `vaexil.tv` | `vaexil.tv`, Vercel `vaexil-tv` | Vercel | Next.js App Router, server actions, guide/suggestion/admin state, libSQL/Turso, SendGrid-capable contact route | `npm run verify` passed |
| `relay.vaexil.tv` | VaexCore Relay, Worker `vaexcore-relay` | Cloudflare Workers | Worker routes, D1 migrations, Twitch OAuth/EventSub/chat send, Discord interaction/command APIs | `npm run ci` passed |

Public verification:

- Apex websites return `server: Vercel`.
- `www` hosts redirect to apex on Vercel.
- Vercel CLI maps the three domains to the expected projects.
- `relay.vaexil.tv/health` returns OK from the Cloudflare Worker.
- D1 remote query reports 13 migrated non-SQLite tables.
- VaexCore Suite service check passed: `vaexcore-relay:main`.

## Domain-By-Domain Recommendation

### `jamarq.digital`

- Host: Vercel.
- DNS: Cloudflare DNS, apex A record to Vercel, `www` CNAME/alias to Vercel and redirect to apex.
- Database/storage: keep hosted libSQL/Turso for admin/content/contact/page-view records.
- Cloudflare use: DNS, registrar, normal SSL/DNS management.
- Ignore for now: Workers, D1, R2, KV, Queues, Pages, zone Pro.
- Vercel plan: stay on current plan unless commercial/pro usage, collaboration, logs, build concurrency, or usage limits require Pro.

### `tenra.dev`

- Host: Vercel.
- DNS: Cloudflare DNS, apex A record to Vercel, `www` CNAME/alias to Vercel and redirect to apex.
- Database/storage: keep hosted libSQL/Turso for admin/project/content/contact/page-view records.
- Cloudflare use: DNS, registrar, normal SSL/DNS management.
- Ignore for now: Workers, D1, R2, KV, Queues, Pages, zone Pro.
- Vercel plan: same as `jamarq.digital`.

### `vaexil.tv`

- Host: Vercel.
- DNS: Cloudflare DNS, apex A records to Vercel, `www` CNAME/alias to Vercel and redirect to apex.
- Database/storage: keep hosted libSQL/Turso for guide/suggestion/admin/contact/page-view state.
- Cloudflare use: DNS, registrar, and Worker subdomain only.
- Ignore for the website: D1, R2, KV, Queues, Durable Objects, Pages.
- Vercel plan: same as the other websites.
- Follow-up: Vercel env list did not show SendGrid env names for `vaexil-tv`; add them only if production email delivery should be live.

### `relay.vaexil.tv`

- Runtime: Cloudflare Worker custom domain.
- Database: D1 database `vaexcore-relay`.
- Storage: no R2/KV for v1.
- Secrets: Twitch/client relay base secrets are set; Discord secrets are pending.
- Routes: `/health`, `/diagnostics`, `/api/console/*`, `/oauth/twitch/*`, `/webhooks/twitch/eventsub`, `/webhooks/discord/interactions`.
- Cost impact: should remain low; Workers Paid is optional until usage/headroom requires it.
- Risks: Twitch grants, EventSub registration, Discord credentials, and slash command registration are still pending.

## Cloudflare Services Matrix

| Service | Classification | Recommendation |
| --- | --- | --- |
| DNS | Use now | Keep Cloudflare authoritative DNS for all three domains. |
| Registrar | Use now | Keep domains at Cloudflare; they are already paid far ahead. |
| SSL/TLS | Use now | Keep standard SSL/cert behavior; Vercel manages site certs, Cloudflare handles Worker custom domain edge. |
| Workers | Use now | Use only for `relay.vaexil.tv`. |
| D1 | Use now | Use only for Relay state. |
| R2 | Consider later | Keep unused unless backups, media, generated assets, or exports need object storage. |
| KV | Ignore for v1 | Relay needs relational state, not global key-value cache. |
| Queues | Consider later | Useful only if Relay needs async retry/backpressure beyond current D1 queues. |
| Cron Triggers | Consider later | Use only for token cleanup/subscription maintenance if code adds scheduled work. |
| Durable Objects | Ignore for v1 | No websocket/coordination/stateful actor need found. |
| Pages | Ignore | Vercel already fits the Next.js sites. |
| Turnstile | Consider later | Add only if contact/suggestion spam becomes a real problem. |
| Rate Limiting | Consider later | Add for abusive public endpoints if observed. |
| WAF/security rules | Consider later | Free defaults are enough unless abuse appears. |
| Email Routing | Consider later | Useful only if domain email routing is needed. |
| DMARC Management | Consider later | Review once sending/receiving domain email is formalized. |
| Cloudflare Tunnel | Ignore | No private origin/admin tunnel requirement. |
| AI Gateway | Ignore | No AI runtime in scope. |
| Workers AI | Ignore | No AI inference requirement. |
| Vectorize | Ignore | No vector search requirement. |
| Images | Ignore | Current sites serve local/static assets via Vercel. |
| Stream | Ignore | No hosted video product requirement. |
| Logs/Analytics/Log Explorer | Consider later | Use built-in Vercel/Worker logs first; paid Log Explorer only for real retention needs. |
| Zero Trust/Access | Consider later | Could protect internal tools later, not needed for current public sites. |
| Load Balancing | Ignore | No multi-origin/failover requirement. |
| Enterprise networking/security | Client-only/not relevant | Not justified for these personal domains. |

## Vercel Recommendation

Keep all three websites on Vercel. The repos are App Router Next.js apps with API routes, server actions or dynamic routes, admin pages, and Vercel project metadata. Moving them to Cloudflare Pages would add migration work without removing an actual constraint.

Do not assume Pro is required. Upgrade to Vercel Pro only if one of these becomes true:

- commercial/professional-use policy requires it,
- Hobby usage caps are hit,
- logs/observability/build concurrency become a real blocker,
- collaboration/team workflow requires Pro,
- spend controls are preferable to hard free-tier limits.

Current official references checked:

- <https://vercel.com/pricing>
- <https://vercel.com/docs/plans/hobby>
- <https://vercel.com/docs/limits>

## Database Recommendation: D1 Vs Turso

Use both, but in separate lanes:

- D1 for Relay because Relay is already a Cloudflare Worker and uses D1 bindings directly.
- Turso/libSQL for the websites because they are Vercel-hosted apps already written against `@libsql/client`.

Do not move the websites to D1 now. From Vercel, D1 would not be a native binding; it would require an extra Worker/API layer or a hosting migration. That adds operational complexity without a current cost or product win.

Do not move Relay to Turso now. Relay is Cloudflare-native, D1 migrations already exist, and the schema is small relational integration state.

## R2 Recommendation

Keep R2 out of v1 runtime. Existing R2 Paid/account enablement does not mean the sites should use it.

Use R2 later only for:

- exported D1/Turso backups,
- generated assets,
- creator media/files,
- archived logs or event exports,
- large static files where Vercel/Git storage is the wrong tool.

Do not disable R2 from automation. If removal is desired, verify buckets, bindings, and billing in the Cloudflare dashboard first.

Official R2 pricing reference checked: <https://developers.cloudflare.com/r2/pricing/>.

## Cost Model

| Scenario | Base monthly cost | Recommendation |
| --- | ---: | --- |
| Current/free path | `$0` platform base, excluding prepaid domains and existing usage | Use until a concrete trigger appears. |
| Vercel Pro only | `$20/mo + usage` | Use if Vercel Hobby is no longer appropriate. |
| Workers Paid only | `$5/mo + usage` | Use if Relay traffic/logging/headroom requires it. |
| Vercel Pro + Workers Paid | `$25/mo + usage` | Best likely paid baseline inside the target budget. |
| Vercel Pro + Workers Paid + D1 | `$25/mo + D1 overages only` | D1 should stay inside included/low usage for Relay v1. |
| Vercel Pro + Workers Paid + Turso Developer | `$30.99/mo + usage` | Use only if Turso Free limits are exceeded. |
| Cloudflare zone Pro for all three domains | `$75/mo` monthly or `$60/mo` equivalent annual | Not justified. Zone plans bill per domain. |
| R2 light usage | Usually `$0` within free tier | Fine later for real object storage, but avoid high-read asset serving without estimating operations. |

Official pricing references checked:

- Cloudflare Workers/D1/KV/R2 summary: <https://developers.cloudflare.com/workers/platform/pricing/>
- Cloudflare zone plan billing: <https://developers.cloudflare.com/billing/understand/how-billing-works/>
- Cloudflare zone plan prices: <https://workers.cloudflare.com/plans>
- Turso pricing: <https://turso.tech/pricing?frequency=monthly>

## Risks And Unknowns

- Console repo has uncommitted work around Relay readiness/UI, so clean-baseline Console smoke tests were not rerun in Pass 3.
- Cloudflare dashboard billing/plan screens were not manually verified in this pass.
- Vercel billing/usage dashboard was not manually reviewed, only CLI project/domain/env metadata.
- `vaexil-tv` lacks SendGrid env names in Vercel CLI output; production email delivery should be verified before relying on it.
- Twitch OAuth grants are pending for bot and broadcaster.
- Discord Worker secrets and command registration are pending.
- D1 backup/export cadence is not established yet.

## Minimal Next Steps

1. In the VaexCore workspace, finish or commit the current Console readiness/UI work.
2. Add Twitch callback URL in Twitch Developer Console: `https://relay.vaexil.tv/oauth/twitch/callback`.
3. Complete bot and broadcaster OAuth for Relay.
4. Switch Console to `relay-chatbot`, register EventSub, and test one chat send.
5. Add Discord Worker secrets and configure Discord Interactions Endpoint.
6. Decide on Vercel Pro only after checking commercial/use limits and usage dashboard.
7. Decide on Workers Paid only after Relay live traffic begins or Worker limits/logging justify it.

## Commands/Config Changes To Run Later, After Approval

Cloudflare Worker secrets:

```bash
cd "/Users/jason_marshall/JAMARQ/Side Projects/vaexcore/relay"
npx wrangler secret put DISCORD_BOT_TOKEN
npx wrangler secret put DISCORD_PUBLIC_KEY
npx wrangler secret put DISCORD_APPLICATION_ID
npx wrangler secret put DISCORD_GUILD_ID
npx wrangler secret put DISCORD_OPERATOR_ROLE_ID
```

Relay checks:

```bash
curl -fsS https://relay.vaexil.tv/health
npx wrangler d1 migrations list vaexcore-relay --remote
```

Optional Vaexil email delivery, only if production email should be live:

```bash
cd "/Users/jason_marshall/JAMARQ/Websites/vaexil.tv"
npx vercel env add SENDGRID_API_KEY production
npx vercel env add SENDGRID_TO_EMAIL production
npx vercel env add SENDGRID_FROM_EMAIL production
```

Do not run plan upgrades, DNS mutations, Vercel deploys, Wrangler deploys, or production migrations without a specific approval for that step.
