# SPK-FS-002 — Foundation Document Registry

**Status:** Active  
**Supersedes:** The identifier format proposed in `SPK-FS-001`  
**Owner:** Spark AI Technology Limited

## Canonical identifier format

All new foundation documents use:

`<DOMAIN>-<THREE-DIGIT NUMBER>`

Examples: `SB-001`, `SES-003`, `SPR-004`, `SR-002`, `SC-001`.

The document title communicates its function. Separate type codes are no longer required in the identifier.

## Registered system

### SB — Brand

| ID | Document |
| --- | --- |
| SB-001 | Brand OS |
| SB-002 | Brand Guidelines |
| SB-003 | Visual Design System |

### SES — Engineering

| ID | Document |
| --- | --- |
| SES-001 | Website Brand Migration |
| SES-002 | Website Architecture |
| SES-003 | SARA |
| SES-004 | Design System |

### SPR — Product

| ID | Document |
| --- | --- |
| SPR-001 | Spark Appliance™ PRD |
| SPR-002 | Hardware Specification |
| SPR-003 | Software Architecture |
| SPR-004 | Product Roadmap |

### SR — Research

| ID | Document |
| --- | --- |
| SR-001 | White Paper |
| SR-002 | AI Knowledge Infrastructure |
| SR-003 | Industry Research |

### SC — Corporate

| ID | Document |
| --- | --- |
| SC-001 | Constitution |
| SC-002 | Governance |
| SC-003 | Company Handbook |

## Status vocabulary

- Draft
- Review
- Active
- Superseded
- Archived

## Rule

Only one Active document may own a given foundational decision. Supporting notes and historical documents must reference the registered owner rather than creating parallel sources of truth.
