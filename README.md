# CALLAE — callae.eu

Marketing website for CALLAE, an independent consultancy specialising in
governance, ServiceNow and digital transformation. Built with
[Next.js](https://nextjs.org) (App Router), TypeScript and Tailwind CSS v4.

## Running locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm start       # serve the production build
npm run lint    # ESLint
```

## Project structure

```
src/app/                 routes, metadata, robots.txt, sitemap.xml, OG image
src/components/          one component per section (hero, expertise, about, contact form, ...)
src/lib/content.ts        all editable copy and site configuration in one place
```

To change copy, add/remove service examples, or edit the founder bio, start
in `src/lib/content.ts` — the components render straight from it.

## Configuring contact settings

Before launch, edit the values at the top of `src/lib/content.ts`:

| Field | What it does |
|---|---|
| `email` | Shown in the footer and as the "email us directly" fallback on the contact form. |
| `linkedinUrl` | Footer LinkedIn link. Leave empty (`""`) to hide it — an empty value is skipped rather than linking to a placeholder. |
| `web3FormsAccessKey` | Enables the contact form to actually deliver messages (see below). Leave empty and the form still validates, but tells visitors honestly that online submission isn't connected yet and points them to `email` instead — it never pretends a message was sent. |

### Enabling the contact form

The form posts to [Web3Forms](https://web3forms.com), a free service for
static/serverless sites that forwards submissions straight to an inbox — no
backend or secret server-side key required (Web3Forms' own documentation
confirms the access key is safe to ship in client-side code, since it only
acts as an alias for your email address).

1. Go to [web3forms.com](https://web3forms.com) and create an access key
   with the address messages should land in.
2. Paste the key into `web3FormsAccessKey` in `src/lib/content.ts`.
3. Deploy. The form will now submit for real; until then it stays in its
   honest "not connected yet" state.

The form also includes a hidden honeypot field and accessible client-side
validation (labelled errors tied to each field via `aria-describedby`).

## Deployment

`next.config.ts` sets `output: "export"` — `npm run build` produces a fully
static `out/` folder (no server, no adapter needed), so the site can be
hosted anywhere that serves static files.

### Cloudflare Pages (recommended — cheaper for a low-traffic site)

Cloudflare Pages' free tier has no commercial-use restriction and unlimited
bandwidth, unlike Vercel's free Hobby tier.

1. Connect the repo in the Cloudflare dashboard (Workers & Pages → Create →
   Pages), or deploy from the CLI with `npx wrangler pages deploy out`.
2. Build settings: build command `npm run build`, output directory `out`.
3. Point the `callae.eu` domain at the Pages project once deployed.

`public/_headers` sets explicit `Content-Type` headers for the extensionless
icon/OG-image routes Next.js generates (`/apple-icon`, `/opengraph-image`,
`/logo.png`) — Cloudflare Pages reads this file automatically.

### Vercel (alternative)

Also deploys with zero configuration (framework preset auto-detected) via
[vercel.com/new](https://vercel.com/new). Note the Hobby tier is for
non-commercial use — a business site like this one needs a paid Pro plan.
