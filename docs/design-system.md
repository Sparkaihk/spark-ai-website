# Spark AI Design System V1.0

Spark AI’s design system exists to make enterprise AI infrastructure understandable, credible and actionable. It is not a decorative style guide. Every component must improve product clarity, trust, technical credibility, enterprise readiness, premium quality or conversion.

## Foundations

### Color tokens

| Token | Value | Purpose |
| --- | --- | --- |
| Spark Blue 600 | `#075EE6` | Primary actions, active states, key emphasis |
| Spark Blue 500 | `#1478F2` | Links, diagrams, secondary emphasis |
| Cyan 400 | `#45C8E8` | Data-flow highlights and supporting accents |
| Ink 950 | `#07142E` | Headings and high-emphasis text |
| Ink 700 | `#25395C` | Body text |
| Ink 500 | `#61718C` | Supporting labels and metadata |
| Surface | `#F7FBFF` | Light technology background |

Blue communicates governed intelligence. Cyan is reserved for data movement. Green is not used for generic glow or decoration. Dark surfaces are limited to moments where hardware, security or infrastructure depth benefits from contrast.

### Typography scale

- Display: `clamp(48px, 5vw, 88px)`, line-height `0.95–1.02`, tight tracking.
- Section heading: `clamp(32px, 4vw, 64px)`, line-height `1.05`.
- Card heading: `20–24px`, line-height `1.2`.
- Body large: `18–20px`, line-height `1.65–1.75`.
- Body: `16px`, line-height `1.6–1.7`.
- Eyebrow: `12px`, uppercase, `0.12–0.16em` tracking.

Headlines communicate business value. Technical nouns belong in supporting copy unless they are the subject of the section.

### Spacing system

Use the base sequence `4, 8, 12, 16, 24, 32, 48, 64, 96, 128`. Section spacing uses `clamp(80px, 10vw, 144px)`. Mobile spacing compresses by one step; it does not collapse hierarchy.

### Grid system

- Content maximum: `1440px`.
- Standard content: `1280px`.
- 12-column desktop grid with 20–32px gutters.
- Tablet: 8 columns.
- Mobile: 4 columns with 16px edge gutters.
- Two-column product heroes switch to one column below `1024px`.

## Component library

The public component entry is `components/design-system/index.ts`.

- `HeroSection`: value proposition, concise explanation and two-action hierarchy.
- `ProductShowcase`: product narrative paired with an explanatory system visual.
- `AnimatedDataFlow`: SVG path motion for causality and information transfer.
- `EnterpriseCard`: enterprise capability or outcome narrative.
- `MetricCard`: quantified proof with scope and context.
- `CTAButton`: primary, secondary and ghost decision states.
- `FeatureGrid`: responsive two, three or four-column composition.
- `ArchitectureDiagram`: product stack from infrastructure to experience.
- `IndustryCard`: business outcome by regulated or knowledge-intensive sector.
- `SectionHeader`: eyebrow, business-value heading and supporting explanation.
- `GlassPanel`: restrained grouping surface, never a substitute for hierarchy.
- `GlowLine`: directional emphasis or data-boundary separator.
- `KnowledgeFlow`: inputs, governed intelligence and outputs.
- `Footer`: brand, core system navigation and positioning statement.

## Buttons

- Minimum height: `48px`.
- Radius: `999px`.
- Primary: filled Spark Blue; one per action group.
- Secondary: translucent white with a visible border.
- Ghost: text-led action for low-priority navigation.
- Hover: maximum `2px` lift with shadow increase.
- Focus: visible, high-contrast focus ring; never remove outline without replacement.

## Glass components

Glass surfaces use high-transparency white, a subtle border, 12–18px backdrop blur and soft blue shadow. Text contrast must remain WCAG-readable. Avoid stacking multiple glass panels without clear hierarchy.

## Motion specification

| Pattern | Duration | Easing | Purpose |
| --- | --- | --- | --- |
| Micro interaction | 180–260ms | ease-out | Confirm hover or focus |
| Content reveal | 400–700ms | power-out | Explain hierarchy |
| Diagram sequence | 800–1600ms | power-out | Reveal architecture order |
| Data flow | 4–7s | linear | Show information transfer |
| Ambient breathing | 5–8s | sine-in-out | Maintain restrained system presence |

Animate `transform`, `opacity` and SVG path progress. Avoid layout animation, large blur, bloom, lens flare and decorative particles. Under `prefers-reduced-motion: reduce`, all content is immediately visible and continuous motion stops.

## Architecture diagrams

Diagrams must identify inputs, processing, governance boundaries and outcomes. Labels remain real HTML where possible. SVG lines are supporting relationships, not embedded screenshots. Diagrams must remain understandable without animation.

## Enterprise illustrations

Illustrations communicate a real product, workflow or architecture. Use soft blue technology lighting, accurate proportions and restrained reflections. Do not use generic robots, floating spheres, fake dashboards or decorative network meshes.

## Dark and light rules

Light is the default system for clarity, investor communication and enterprise trust. Dark sections are reserved for hardware emphasis, security architecture or high-contrast transitions. Never alternate themes simply to create visual rhythm.

## Responsive rules

- `>= 1280px`: full 12-column composition.
- `1024–1279px`: preserve product clarity; reduce decorative support before shrinking core content.
- `768–1023px`: stack complex two-column narratives.
- `< 768px`: one-column reading order, 40–48px hero heading, full-width actions when needed.
- No fixed canvas widths, horizontal scrolling or labels positioned outside responsive containers.

## Adoption rules

New pages must use shared tokens and components before adding page-specific variants. Existing pages should migrate in controlled passes: shared actions and headers first, cards and surfaces second, architecture visuals last. Product copy and information architecture must not be changed by a visual-system migration without explicit product approval.
