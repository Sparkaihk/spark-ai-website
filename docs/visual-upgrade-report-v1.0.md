# Visual Upgrade Report V1.0

## Scope

Sprint 2 visual upgrade for core Spark AI website pages. The update adds at least one flagship hero image to each target page without changing navigation, page order, CTA copy, or business logic.

## Visual Direction

- Style: Apple, NVIDIA, Anthropic, OpenAI, Snowflake inspired enterprise visual language
- Palette: light blue, white, glass cyan, silver, graphite accents
- Treatment: photorealistic product-led scenes, AI data flow, knowledge network, premium whitespace
- Format: 16:9 PNG assets, normalized to 3840 x 2160

## Assets

| Page | Asset | Size | Usage |
| --- | --- | --- | --- |
| Home | `/images/visual-upgrade/home-hero-v1.png` | 3840 x 2160 | Homepage hero visual |
| Technology | `/images/visual-upgrade/technology-hero-v1.png` | 3840 x 2160 | Technology page hero visual |
| Knowledge | `/images/visual-upgrade/knowledge-hero-v1.png` | 3840 x 2160 | Knowledge Center hero visual |
| Solutions | `/images/visual-upgrade/solutions-hero-v1.png` | 3840 x 2160 | Solutions page hero visual |
| Principles | `/images/visual-upgrade/principles-hero-v1.png` | 3840 x 2160 | Principles page hero visual |
| About | `/images/visual-upgrade/about-hero-v1.png` | 3840 x 2160 | About page hero visual |
| Contact | `/images/visual-upgrade/contact-hero-v1.png` | 3840 x 2160 | Contact page hero visual |

## Implementation Notes

- Home keeps the existing hero component and updates only the image asset reference.
- Technology and Contact use the existing `InvestorPage` pattern with an optional hero image slot.
- Solutions and About use the existing `InvestorShell` hero image support.
- Knowledge and Principles keep their existing hero sections and add a visual image card inside the same hero area.
- All images include meaningful alt text in code.

## Verification Checklist

- Image files exist in `public/images/visual-upgrade/`.
- All target assets are 3840 x 2160.
- No navigation changes.
- No business logic changes.
- Build verification required after implementation.
