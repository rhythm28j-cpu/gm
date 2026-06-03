# Pepperoni Planet

A single-page pizza ordering experience built for the Gamma interview take-home. The site presents Pepperoni Planet as a mom-and-pop shop with a subtle space-themed brand, while keeping copy and interactions easy for anyone to understand.

## How this was built

This project was developed with **[Cursor](https://cursor.com/)** as the primary coding environment. I used it to speed up implementation — scaffolding components, wiring up state, refactoring file structure, and handling repetitive tasks — so I could spend more time on **design, layout, and general user experience** rather than boilerplate. Design decisions (section hierarchy, design tokens, modal UX, image strategy, performance tradeoffs) were intentional; Cursor helped execute and iterate on them quickly.

## What we built

The app is one scrollable landing page with six main sections:

| Section | Description |
| --- | --- |
| **Navbar** | Brand logo, anchor links (Mission, Menu, Deals, Order), and a View Cart button |
| **Hero** | Headline, offer badge, CTAs, and a rotating diamond pizza visual |
| **Build Your Pizza** | Three-step builder: crust, sauce, and toppings, with live selection state |
| **Deals & Specials** | Three bundle cards with images, pricing, and feature lists |
| **Our Story** | Mission statement about Jack Meach and the shop’s history since 1984 |
| **Footer** | Brand info, link columns, social icons, and copyright |

### Pizza builder & modal

The main builder on the page covers the core menu options. The **+ Add More** button opens a **Customize Your Pizza** modal with the full expanded menu (extra crusts, sauces, and toppings). Toppings in the modal use a row layout with thumbnails, names, add-on prices, and add/remove controls.

> **Note:** The View Cart button, deal CTAs, and Add to Order in the builder are visual only — cart functionality is not implemented yet.

### Known limitations

- **Footer and placeholder links:** Most footer links (Company, Support, Legal, social icons) and several buttons use `href="#"` and do not navigate anywhere yet.
- **Navbar scroll links:** Mission, Menu, Deals, and Order scroll to on-page sections; View Cart does not open a cart.
- **Theme:** Dark mode is the default via `ThemeProvider`; there is no theme toggle in the UI yet.

## Technical stack

- [Next.js 16](https://nextjs.org/) (App Router)
- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS 4](https://tailwindcss.com/) (alongside CSS custom properties for the design system)

## Architecture & decisions

### Hierarchical page composition

The page is assembled in layers rather than one monolithic component:

```
src/app/page.tsx          → Next.js entry
src/views/App/App.tsx     → Composes page sections
src/views/App/*           → Section components (Hero, Navbar, …)
src/components/*          → Shared UI (Button, Card, Badge, Modal)
src/styles/*              → Design tokens, theme, foundation styles
src/assets/*              → Images and topping thumbnail map
```

**Why:** Sections stay isolated and easy to change. Shared UI lives in `components/`; page-specific layout and copy live in `views/`. This mirrors how a real product might split a marketing page from a reusable design system.

### Design system

Styling is driven by **CSS custom properties** in `src/styles/tokens.css` (brand colors, spacing, typography, surfaces) rather than hard-coded values in each file. Shared primitives (`Button`, `Card`, `Badge`, `Modal`) encode variants once and are reused across Hero, deals, the builder, and the modal.

**Why:** Consistent look, fewer one-off styles, and a single place to adjust the Pepperoni Planet palette (Orbital Blue, Crust, Pepperoni Red, etc.).

### Image performance

- **Topping thumbnails** in the customize modal are **AVIF** files (~800×533, typically under 80 KB), imported from `src/assets/` and mapped in `toppingImages.ts`.
- **Hero and deal photos** remain full-resolution **JPEGs** by choice — higher quality for large display areas; Next.js `Image` serves AVIF/WebP variants where supported.
- **`next/image`** is used throughout with appropriate `sizes`, `priority` on the LCP hero image only, and lazy loading on below-the-fold deal cards.

A maintenance script at `scripts/convert-assets.mjs` can regenerate topping AVIFs from PNG sources when new assets are added.

### Web performance

Several choices reduce initial JavaScript and CSS:

- **Server Components** for static sections (Hero, Navbar, Footer, Our Story, Deals) — no client JS unless needed.
- **Dynamic import** of `PizzaBuilder` (below the fold) so the first paint focuses on hero content.
- **Dynamic import** of `CustomizeModal` — modal code and all topping images load only when the user clicks **+ Add More**.
- **Deferred CSS** for modal styles (not in the global bundle until the modal chunk loads).
- **`ThemeProvider`** with `data-theme="dark"` set on `<html>` server-side to avoid a theme flash on load.

Dev server uses `next dev --webpack` to avoid Turbopack CSS HMR issues with split stylesheets.

## Project structure

```
src/
├── app/                 # Next.js App Router (layout, page, globals)
├── assets/              # Images, toppingImages.ts
├── components/          # Shared UI + components.css
├── styles/              # tokens.css, foundation.css, ThemeProvider
└── views/
    ├── views.css        # Page section styles (aggregated)
    └── App/             # Page composition + section components
```

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

| Command | Description |
| --- | --- |
| `npm run dev` | Start dev server (webpack) |
| `npm run dev:turbo` | Start dev server (Turbopack) |
| `npm run build` | Production build |
| `npm run start` | Serve production build |
| `npm run lint` | Run ESLint |

## What I’d do next with more time

1. **Build the cart** — Wire View Cart, Add to Order, deal CTAs, and modal “Add to Cart” into shared cart state (context or lightweight store), with line items, quantities, and a running total using the existing `pizzaPricing` logic.
2. **Footer & nav links** — Replace `#` placeholders with real routes or external URLs; hook social icons to brand profiles.
3. **Hero/deal image pipeline** — Add responsive AVIF variants for hero and deal JPGs without sacrificing the current full-quality sources.
4. **Accessibility pass** — Focus order in the modal, skip links, and clearer live regions for price updates.
5. **Theme toggle** — Expose the existing `ThemeProvider` / `useTheme()` hook in the navbar for light/dark/system preference.
