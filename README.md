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

Static-friendly Next.js app — deploys to [Vercel](https://vercel.com/new)
with zero configuration (framework preset auto-detected). Point the
`callae.eu` domain at the project once deployed.
