# Architecture

Spark AI is structured as a component-first Next.js application.

## App Layer

`app/(site)/page.tsx` contains Homepage V0.1.

`app/(site)` also contains route placeholders for the future website sections:

- Homepage
- About
- Vision
- Capabilities
- Products
- Industries
- Ecosystem
- Investors
- News
- Contact

Secondary pages are intentionally not implemented yet.

## Component Layers

`components/ui` contains shadcn-style primitives.

`components/design-system` contains brand-level layout and typography primitives.

`components/sections` contains reusable page sections such as hero, feature grids, metric strips, and split layouts.

`components/site` contains global website chrome such as navbar, footer, and route configuration.

`components/visuals` contains reusable visual systems such as the particle network canvas.

## Tokens

Core brand tokens live in:

- `app/globals.css`
- `tailwind.config.ts`
- `lib/design-tokens.ts`

The system is dark-first and optimized for enterprise AI infrastructure storytelling.
