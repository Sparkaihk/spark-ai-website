# Brand Migration Checklist

## Completed

### `app/`

- [x] No user-facing occurrences of `RTX Spark Appliance™`, `RTX Spark Appliance`, `RTX Spark` or `NVIDIA RTX Spark` remain under `app/`.
- [x] Product Hero uses `Spark Appliance™`.
- [x] Product image alt text uses `Spark Appliance™`.
- [x] Product CTA labels use `Request Demo` and `Download Product Brief`.
- [x] Product Metadata uses `Spark Appliance™`.
- [x] Product specification card uses `Powered by NVIDIA GPU`.
- [x] Existing legacy route paths remain available for compatibility.

### Brand governance

- [x] Canonical brand architecture documented.
- [x] NVIDIA usage restricted to technical specification contexts.
- [x] Migration acceptance rules documented.

## Remaining References

The following user-facing references require replacement but could not be written because the Windows sandbox rejected existing-file patches with `Access is denied` / writable-descendant ACL errors.

| File | Line | Current context | Required migration | Reason remaining |
| --- | ---: | --- | --- | --- |
| `components/Hero.tsx` | 44 | Architecture node `RTX Spark` / `Appliance` | `Spark Appliance™` | Existing-file write blocked |
| `components/Hero.tsx` | 76 | Localized product label `RTX Spark Appliance` | `Spark Appliance™` | Existing-file write blocked |
| `components/home/hero-actions.tsx` | 11 | `Explore RTX Spark Appliance` | `Explore Spark Appliance™` | Existing-file write blocked |
| `components/home/hero-machine-animation.tsx` | 22 | Data-flow `aria-label` | `Spark Appliance™ data flow` | Existing-file write blocked |
| `components/home/hero-machine-animation.tsx` | 36 | Product image alt text | `Spark Appliance™` | Existing-file write blocked |
| `components/home/hero-machine-animation.tsx` | 40 | Visible product label | `Spark Appliance™` | Existing-file write blocked |
| `components/home/hero-section.tsx` | 39 | Chinese and English Hero description | Replace product name with `Spark Appliance™` | Existing-file write blocked |
| `components/home/product-hero-visual.tsx` | 15 | Product image alt text | `Spark Appliance™` | Existing-file write blocked |
| `components/home/product-hero-visual.tsx` | 20 | Visible product title | `Spark Appliance™` | Existing-file write blocked |
| `components/site/site-footer.tsx` | 8 | English footer product label | `Spark Appliance™` | Existing-file write blocked |
| `components/design-system/spark-design-system.tsx` | 135 | ProductShowcase default title | `Spark Appliance™` | Existing-file write blocked |
| `components/design-system/spark-design-system.tsx` | 139 | Architecture illustration `aria-label` | `Spark Appliance™ architecture illustration` | Existing-file write blocked |
| `components/home/core-capabilities.tsx` | 6 | Core capabilities `aria-label` | `Spark Appliance™ core capabilities` | Existing-file write blocked |
| `components/home/home-kpi-cards.tsx` | 10 | Metrics `aria-label` | `Spark Appliance™ key metrics` | Existing-file write blocked |
| `components/sections/page-presets.ts` | 36 | Chinese product overview copy | Replace `RTX Spark AI 一体机` with `Spark Appliance™` | Existing-file write blocked |
| `components/sections/page-presets.ts` | 37 | English product overview copy | Replace `RTX Spark appliances` with `Spark Appliance™` | Existing-file write blocked |
| `components/sections/page-presets.ts` | 41 | Product architecture diagram label | `Spark Appliance™` | Existing-file write blocked |
| `components/sections/page-presets.ts` | 69 | Product capability diagram label | `Spark Appliance™` | Existing-file write blocked |
| `components/sections/page-presets.ts` | 257 | Chinese and English knowledge CTA | Replace `RTX Spark` with `Spark Appliance™` | Existing-file write blocked |

## Manual Review Needed

### Approved technical NVIDIA references

These references may remain if the surrounding section is visibly technical and the claims are accurate.

| File | Line | Context | Review requirement |
| --- | ---: | --- | --- |
| `app/(site)/products/rtx-spark/page.tsx` | 9 | Metadata description: NVIDIA GPU-powered AI compute | Confirm metadata is treated as technical product detail rather than primary product identity |
| `app/(site)/products/rtx-spark-appliance/page.tsx` | 40 | Specification title: `Powered by NVIDIA GPU` | Approved wording; verify technical accuracy |
| `app/(site)/products/rtx-spark-appliance/page.tsx` | 102 | Healthcare GPU acceleration statement | Validate workload and privacy claim |
| `app/(site)/products/rtx-spark-appliance/page.tsx` | 112 | Finance local GPU compute statement | Validate deployment and privacy claim |
| `app/(site)/products/rtx-spark-appliance/page.tsx` | 179 | Hero description includes NVIDIA GPU compute | Consider moving NVIDIA detail below Hero to maintain strict brand hierarchy |
| `app/(site)/products/spark-ai-edge-appliance/page.tsx` | 9 | Metadata includes NVIDIA GPU | Verify product relationship and technical accuracy |
| `components/sections/page-presets.ts` | 51 | Custom NVIDIA RTX integration description | Confirm this describes an integration service, not the Spark Appliance™ product |
| `components/sections/page-presets.ts` | 62 | Chinese custom integration description | Confirm technical scope and trademark usage |
| `components/sections/page-presets.ts` | 63 | English custom integration description | Confirm technical scope and trademark usage |
| `components/sections/page-presets.ts` | 79 | NVIDIA RTX Custom Integration title/body | Keep only on a clearly technical integration page |

### Compatibility paths and identifiers

These are not user-facing brand names and should remain until a route and asset migration plan is approved.

| File | Line | Reference | Reason |
| --- | ---: | --- | --- |
| `app/(site)/products/rtx-spark/page.tsx` | 10 | `/products/rtx-spark` | Existing canonical/compatibility route |
| `app/(site)/products/rtx-spark-appliance/page.tsx` | 33 | `/products/rtx-spark-appliance` | Existing canonical/compatibility route |
| `app/(site)/products/rtx-spark-appliance/page.tsx` | 36 | `/images/rtx-spark/rtx-spark-appliance-v3-hero.png` | Internal asset path |
| `components/site/navigation.config.ts` | 13 | `/products/rtx-spark-appliance` | Existing navigation route |
| `components/home/hero-machine-animation.tsx` | 6 | `/images/rtx-spark/investor-hero-final-v1.png` | Internal asset path |
| `components/home/product-hero-visual.tsx` | 6 | `/images/rtx-spark/investor-hero-final-v1.png` | Internal asset path |
| `components/home/product-hero-visual.tsx` | 10 | `rtx-spark-visual-title` | Internal accessibility identifier |

## Downloads and documentation

- Product Brief CTA currently routes to `/resources`; no direct downloadable Product Brief is exposed.
- `app/(site)/resources/page.tsx` advertises brochure, datasheet, architecture guide, deployment guide and FAQ access requests.
- `app/(site)/knowledge/page.tsx` marks Product Documents as `Coming Soon` and does not expose placeholder PDF links.
- Public PDF metadata, filenames and embedded legacy raster captions still require review when the downloadable files are created.

## Verification status

- `app/`: read-only audit completed.
- `pages/`: directory existence could not be confirmed; project is known to use App Router.
- `components/`: read-only audit completed; 19 user-facing migrations remain blocked by file ACL.
- Build, lint and rendered-site verification: not run because existing-file write access is not available.
