# AGENTS.md — Foxride Technologies

## Project

Astro 6.x static site for Foxride Technologies (IT services). Uses Tailwind CSS v4, TypeScript strict mode, and React integration (no React islands currently).

**Site:** `https://foxride.co.in` · **Node:** `>=22.12.0`

## Commands

| Command | Description |
|---|---|
| `npm run dev` | Dev server at `localhost:4321` |
| `npm run build` | Build to `./dist/` |
| `npm run preview` | Preview production build |
| `npm run astro` | Run Astro CLI |
| `npx prettier --write .` | Format all files |

No linter or test framework installed.

## Critical Gotchas

### Tailwind v4 + Astro SVG build bug

Inline `<path>` elements with `stroke-*` attributes inside `.astro` JSX expressions cause esbuild to fail with `Expected "}" but found "stroke"`. Tailwind v4's CSS parser incorrectly processes these as CSS rules.

**Workaround:** Use a helper function that returns raw SVG strings, then inject via `set:html`:

```astro
---
function iconSVG(icon: string): string {
  const paths: Record<string, string> = { shield: "M9 12l2...", /* ... */ };
  return `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="${paths[icon]}"/>`;
}
---
<svg set:html={iconSVG(service.icon)} />
```

Do NOT use `<path stroke-linecap="..." />` directly inside `{expression}` blocks in `.astro` templates.

### CSS import order

`src/styles/global.css`: Google Fonts `@import url(...)` **must** come before `@import "tailwindcss"`. Tailwind v4 enforces that `@import` rules precede all other rules.

## Architecture

### Single source of truth

`src/data/services.ts` exports both `services` (6 service definitions) and `navLinks` (header/footer navigation). All nav and service data flows from this file. Adding a new service requires only editing this file — routes, nav dropdown, footer links, and service pages are generated automatically.

### Pages (12 total)

- `/` — Homepage (hero, services grid, why us, clients, CTA)
- `/about` — Company info, stats, values, team, TATA partnership
- `/services` — Service listing grid
- `/services/[slug]` — Individual service pages (generated from `services.ts`)
- `/contact` — Contact form + office info + FAQ
- `/privacy`, `/terms` — Legal pages

### Key directories

```
src/
├── components/     Header.astro, Footer.astro, PageBanner.astro
├── data/           services.ts (services + navLinks — single source of truth)
├── layouts/        BaseLayout.astro (shared head, body, scroll-reveal script)
├── pages/          File-based routing
└── styles/         global.css (Tailwind v4, theme tokens, custom utilities)
```

### Custom CSS utilities

Defined in `src/styles/global.css`: `.reveal` (scroll animation), `.btn-clip` (clipped button shape), `.section-label` (red prefix label), `.circuit-bg` (grid pattern overlay).

### Contact form

`/contact` has a placeholder form submission handler. `@emailjs/browser` is installed but not yet wired up. Look for `// TODO: Replace with actual EmailJS integration` in `contact.astro`.

## Conventions

- **Data-driven pages:** Prefer mapping from `services.ts` over hardcoded content
- **Active links:** Header uses `pathname.startsWith(href)` for active state
- **Scroll animations:** Add `class="reveal"` and optional `data-delay="N"` (ms) to elements
- **Brand colors:** `#0d5578` (blue), `#e31e24` (red), `#061523` (navy)
- **Fonts:** Barlow Condensed (display/headings), DM Sans (body)
