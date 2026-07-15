# SES-001 — Sprint 1 Website Brand Migration Delivery Report

**Specification:** SES-001 V1.0 FROZEN  
**Report date:** 2026-07-13  
**Release decision:** OPEN

## A. Brand Migration Summary

### Completed audit work

- Audited the active homepage route and homepage Hero components.
- Audited shared desktop and mobile navigation behavior.
- Confirmed desktop and mobile navigation consume the same route source and link renderer.
- Audited shared Header and Footer brand expression.
- Audited homepage Metadata and root Metadata configuration.
- Audited Spark AI Appliance™ product routes for visible product naming and technical NVIDIA references.
- Verified existing internal navigation destinations identified during the audit resolve to route files.
- Classified compatibility routes, asset paths and internal IDs separately from visible brand terminology.
- Confirmed the legal company names already appear in the Footer: `Spark AI Technology Limited / 光慧科技有限公司`.
- Confirmed the manifesto already appears in the Footer: `Memory for AI. Trust for Tomorrow.`
- Confirmed the homepage canonical `/` exists.

### Website changes completed

None.

Existing source files could not be modified because the Windows filesystem sandbox rejected every `apply_patch` attempt against existing project files:

```text
windows elevated sandbox cannot reopen writable descendants under read-only carveouts
```

The Sprint specification forbids hiding unresolved issues. Audit completion does not count as Brand Migration implementation.

## B. Remaining Issues

### Release Gate blockers — Homepage

| File | Line | Current issue | Required correction | Risk |
| --- | ---: | --- | --- | --- |
| `components/home/hero-section.tsx` | 34 | `Spark AI 星藏™` | `Spark AI™` | Frozen brand violation |
| `components/home/hero-section.tsx` | 35 | Category is presented where the flagship identity should appear | `Spark AI Appliance™` | Product identity unclear |
| `components/home/hero-section.tsx` | 37 | Product-benefit headline does not establish the Frozen positioning | `The Knowledge Infrastructure for the AI Era` | Fails ten-second test |
| `components/home/hero-section.tsx` | 39 | Description uses legacy product naming and does not clearly establish company, platform and trust | Explain Spark AI Technology Limited, Spark AI Knowledge Infrastructure, Spark AI Appliance™ and the frozen manifesto | Fails who / what / why test |
| `components/home/hero-actions.tsx` | 11 | `Explore RTX Spark Appliance` | `Explore Spark AI Appliance™` | Visible legacy branding |
| `components/home/hero-machine-animation.tsx` | 22 | Legacy data-flow accessibility label | `Spark AI Appliance™ knowledge flow` | Assistive brand inconsistency |
| `components/home/hero-machine-animation.tsx` | 36 | Legacy image alt text | `Spark AI Appliance™` | Image naming inconsistency |
| `components/home/hero-machine-animation.tsx` | 40 | Legacy visible product title | `Spark AI Appliance™` | Visible legacy branding |
| `app/(site)/page.tsx` | 13 | `Spark AI Digital Headquarters` | `Spark AI Headquarters` | Frozen website identity violation |
| `app/(site)/page.tsx` | 14 | Generic digital-headquarters description | Use Spark AI™, Spark AI Knowledge Infrastructure, Spark AI Appliance™ and the manifesto | SEO and positioning inconsistency |
| `app/(site)/page.tsx` | 22–63 | Multiple Chinese strings are visibly corrupted or malformed | Restore accurate Simplified Chinese content | Critical enterprise-trust failure |
| `app/(site)/page.tsx` | 48 | `Why Spark AI Exists` and related copy omit official trademark expression | Use `Spark AI™` consistently | Brand inconsistency |
| `app/(site)/page.tsx` | 50 | `AI Cold Data Infrastructure` | `Spark AI Knowledge Infrastructure` | Platform naming violation |
| `app/(site)/page.tsx` | 63 | Closing heading does not use Frozen positioning | `The Knowledge Infrastructure for the AI Era` | Homepage conclusion inconsistent |

### Release Gate blockers — Navigation and Header

Approved order:

1. Home
2. Knowledge Infrastructure
3. Spark AI Appliance™
4. Solutions
5. Research
6. Headquarters
7. About
8. Contact

| File | Line | Current issue | Required correction | Risk |
| --- | ---: | --- | --- | --- |
| `components/site/navigation.config.ts` | 12–18 | Current labels include generic Product, Technology, Knowledge and Principles architecture rather than the Frozen navigation | Replace labels and order using existing valid destinations; remove non-approved top-level labels | Navigation Release Gate fails |
| `components/site/site-header.tsx` | 91 | `Spark AI home` | `Spark AI™ Headquarters` | Assistive naming inconsistency |
| `components/site/site-header.tsx` | 99 | `Spark AI` | `Spark AI™` | Frozen brand expression missing |
| `components/site/site-header.tsx` | 101 | `AI Cold Data Platform` | `Spark AI Knowledge Infrastructure` | Frozen platform violation |

Desktop and mobile already share the same route source. The correction should be made once in the shared navigation configuration.

### Release Gate blockers — Footer

| File | Line | Current issue | Required correction | Risk |
| --- | ---: | --- | --- | --- |
| `components/site/site-footer.tsx` | 8 | `星藏™ / RTX Spark Appliance™` | `Spark AI Appliance™` in both languages | Visible legacy branding |
| `components/site/site-footer.tsx` | 14 | `Spark AI` | `Spark AI™` | Frozen brand inconsistency |
| `components/site/site-footer.tsx` | 14 | `Spark AI Digital Headquarters` | `Spark AI Headquarters` | Frozen website identity violation |
| `components/site/site-footer.tsx` | 14 | `AI 冷数据基础设施 / AI Cold Data Infrastructure` | `Spark AI Knowledge Infrastructure` | Frozen platform violation |
| `components/site/site-footer.tsx` | 14 | `Technology changes. Trust endures.` appears as a positioning statement | `The Knowledge Infrastructure for the AI Era` | Frozen positioning not used |
| `components/site/site-footer.tsx` | 14 | Privacy and Terms both link to `/contact` | Manual decision required; no new pages allowed in Sprint 1 | Semantically incorrect links |
| `components/site/site-footer.tsx` | 14 | LinkedIn, Twitter and YouTube icons are non-interactive spans | Remove if placeholders or supply approved existing destinations | Placeholder behavior |

The legal company names and frozen manifesto already pass.

### Release Gate blockers — Product naming

| File | Line | Current issue | Required correction | Risk |
| --- | ---: | --- | --- | --- |
| `app/(site)/products/rtx-spark/page.tsx` | 7–9 | `Spark Appliance™` | `Spark AI Appliance™` | Frozen flagship-name violation |
| `app/(site)/products/rtx-spark-appliance/page.tsx` | 30–32 | `Spark Appliance™` | `Spark AI Appliance™` | Metadata and SEO inconsistency |
| `app/(site)/products/rtx-spark-appliance/page.tsx` | 102–127 | Six industry narratives use `Spark Appliance™` | `Spark AI Appliance™` | Product inconsistency across solutions |
| `app/(site)/products/rtx-spark-appliance/page.tsx` | 171–313 | Hero, body, image alt, section labels and closing CTA use `Spark Appliance™` | `Spark AI Appliance™` | Visible flagship-name violation |
| `components/Hero.tsx` | 44, 76 | `RTX Spark` / `RTX Spark Appliance` | `Spark AI Appliance™` | Architecture and visible Hero inconsistency |
| `components/home/product-hero-visual.tsx` | 15, 20 | Legacy alt and visible product title | `Spark AI Appliance™` | Product visual inconsistency |
| `components/design-system/spark-design-system.tsx` | 135, 139 | Legacy default product name and architecture label | `Spark AI Appliance™` | Shared component inconsistency |
| `components/home/core-capabilities.tsx` | 6 | Legacy capability label | `Spark AI Appliance™ core capabilities` | Accessibility inconsistency |
| `components/home/home-kpi-cards.tsx` | 10 | Legacy metrics label | `Spark AI Appliance™ key metrics` | Accessibility inconsistency |
| `components/sections/page-presets.ts` | 36–41, 69, 257 | Legacy `RTX Spark` product wording in product, diagrams and CTA copy | `Spark AI Appliance™` | Cross-page terminology inconsistency |

### Manual technical review — NVIDIA

NVIDIA references may remain only where technically accurate and subordinate to Spark AI Appliance™.

| File | Line | Context | Required review |
| --- | ---: | --- | --- |
| `app/(site)/products/rtx-spark/page.tsx` | 9 | Metadata describes NVIDIA GPU-powered compute | Confirm this is technical detail and update product name to Spark AI Appliance™ |
| `app/(site)/products/rtx-spark-appliance/page.tsx` | 40 | `Powered by NVIDIA GPU` specification | Approved terminology; verify configuration accuracy |
| `app/(site)/products/rtx-spark-appliance/page.tsx` | 102, 112 | Healthcare and Finance workload statements | Validate privacy, locality and workload claims |
| `app/(site)/products/rtx-spark-appliance/page.tsx` | 179 | NVIDIA appears in the Hero description | Consider moving supplier detail below Hero to preserve brand hierarchy |
| `components/sections/page-presets.ts` | 51, 62, 63, 79 | NVIDIA RTX integration services | Confirm this is an integration service and not product identity |

### Compatibility references — may remain

| Reference | Reason |
| --- | --- |
| `/products/rtx-spark` | Existing compatibility route |
| `/products/rtx-spark-appliance` | Existing compatibility route used by navigation and CTA |
| `/images/rtx-spark/*` | Internal asset path, not visible product identity |
| `rtx-spark-visual-title` | Internal accessibility identifier |

Compatibility references must not appear as visible labels.

### Release Gate blockers — Metadata and machine surfaces

| File | Line | Current issue | Required correction |
| --- | ---: | --- | --- |
| `app/layout.tsx` | 5–10 | Root titles and descriptions use cold-data framing rather than the Frozen Brand OS | Use Spark AI™, Spark AI Knowledge Infrastructure, positioning and manifesto |
| `app/layout.tsx` | 16 | Title template lacks official trademark expression | `%s | Spark AI™` |
| `app/layout.tsx` | 19, 28 | Open Graph and Twitter have no verified image reference | Add an approved existing 1200×630 asset; do not invent new branding |
| `app/layout.tsx` | 23 | `Spark AI` | `Spark AI™` |
| `app/(site)/page.tsx` | metadata block | Homepage-specific Open Graph and Twitter identity missing | Add frozen homepage title and description |
| Homepage output | — | Organization and WebSite Structured Data absent | Add JSON-LD matching visible Frozen identity |
| `app/manifest.ts` | — | Manifest absent | Manual implementation required; no new public page involved |
| favicon / icon assets | — | No verified favicon or app icon | Use an approved existing Spark AI mark; do not invent a new logo |

## QA status

| QA item | Result |
| --- | --- |
| Desktop | Not verified in rendered browser |
| Tablet | Not verified in rendered browser |
| Mobile | Not verified in rendered browser |
| Chinese | **Fail — homepage source contains corrupted Chinese content** |
| English | Partial — brand names remain inconsistent |
| Navigation | **Fail — labels and order do not match Frozen specification** |
| CTA buttons | **Fail — legacy product CTA remains** |
| Internal links | Partial — audited shared links resolve; Privacy/Terms are semantically incorrect |
| Placeholder content | **Fail — non-interactive social icons and Coming Soon/document placeholders require review** |
| Broken pages | Not fully verified |
| Terminology | **Fail — multiple legacy and intermediate names remain** |
| Type check | Not run |
| Lint | Not run |
| Production build | Not run |

## Final CEO Review

### 1. Would an enterprise customer immediately understand Spark AI?

**No.** The Hero currently emphasizes a legacy appliance identity instead of Spark AI Knowledge Infrastructure and the Frozen positioning.

### 2. Would this website increase trust?

**No.** Corrupted Chinese content, inconsistent product naming and incomplete metadata reduce trust.

### 3. Would this website be ready for an important customer visit?

**No.** Navigation, Footer, Homepage, Metadata and bilingual content do not pass the Frozen release gates.

## C. Recommendations for Sprint 2

Do not implement these recommendations until every Sprint 1 release blocker above is resolved.

1. Establish automated Brand OS terminology checks in CI.
2. Add rendered link validation and metadata snapshot tests.
3. Create an approved social-card and favicon asset family from the existing Spark AI mark.
4. Define a versioned content source for Website, PDFs, Sales Kit, API and AI Agent outputs.
5. Add formal accessibility and Lighthouse budgets after Brand Migration release.
6. Create a controlled migration plan for legacy route and asset slugs.

These are improvements, not substitutes for unfinished Sprint 1 work.

## Release Gate

- [ ] Brand terminology is consistent.
- [ ] Homepage branding is consistent.
- [ ] Navigation is consistent.
- [ ] Footer is consistent.
- [ ] Metadata is consistent.
- [ ] No legacy branding remains.

**Sprint 1 Status: OPEN — unresolved release gates listed above.**
