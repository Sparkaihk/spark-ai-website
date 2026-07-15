# Spark AI Asset Library

This directory is the canonical source for production-ready visual assets used by the Spark AI website and design system.

## Structure

- `product/` — approved product renders, detail views and transparent cutouts
- `icons/` — product-specific SVG icons not covered by the shared icon library
- `industries/` — healthcare, government, finance, manufacturing, education and media visuals
- `architecture/` — diagrams, layer illustrations and technical exports
- `animations/` — lightweight Lottie, SVG or sequence assets
- `backgrounds/` — subtle grids, noise textures and restrained surface treatments
- `logos/` — Spark AI, product marks and approved partner/customer logos
- `illustrations/` — enterprise workflow and knowledge-system illustrations
- `video/` — optimized product demonstrations and poster frames
- `download/` — public brochures, product briefs, white papers and data sheets

## Naming

Use lowercase kebab-case with a clear subject and variant:

`rtx-spark-appliance-front-3q-light.webp`

`healthcare-governed-imaging-blue.webp`

`enterprise-rag-architecture-en.svg`

Language variants use `-en`, `-zh-hans` or `-zh-hant`. Density variants use `@2x` only when responsive source generation is not available.

## Format rules

- Product renders and illustrations: WebP or AVIF, with a PNG master retained outside `public` when transparency quality requires it.
- Diagrams and icons: accessible SVG without embedded raster screenshots.
- Photography: AVIF/WebP with explicit dimensions.
- Video: MP4/H.264 baseline plus WebM where it materially improves size; always provide a poster frame.
- Downloads: PDF with a descriptive filename and current version/date metadata.

## Performance

- Hero images must define width, height or aspect ratio and use `next/image`.
- Above-the-fold product images may use `priority`; other images must lazy-load.
- Avoid images containing UI text when real HTML can express the content.
- Do not ship original production masters, layered source files or unused variants.
- Keep decorative background assets below 200 KB whenever practical.

## Governance

Assets must communicate a real product, architecture, workflow or business outcome. Generic robots, decorative network meshes, excessive particles and unverified customer logos are not approved.

Existing assets should be migrated only when every importing route is updated and verified. Do not bulk-move live assets.
