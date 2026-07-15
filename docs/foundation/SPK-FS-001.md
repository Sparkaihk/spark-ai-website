# SPK-FS-001 — Spark AI Foundation System

**Status:** Active  
**Owner:** Spark AI Technology Limited  
**Purpose:** Define the company-wide knowledge, document and decision architecture

## Foundation model

The Spark AI Foundation System organizes durable company knowledge into five governed domains.

| Code | Domain | Purpose |
| --- | --- | --- |
| `SB` | Brand | Identity, naming, messaging, voice and release review |
| `SES` | Engineering | Architecture, implementation, security, operations and technical standards |
| `SPR` | Product | Product definition, requirements, roadmap, pricing and release decisions |
| `SR` | Research | Research questions, experiments, evidence, white papers and technical findings |
| `SC` | Corporate | Company strategy, governance, legal, investor and organizational records |

## Operating principle

Each document must answer three questions:

1. Which domain owns the decision?
2. What evidence or authority supports it?
3. Which downstream products, systems or communications depend on it?

Documents should not be created merely to record activity. They should establish reusable decisions, evidence or operating standards.

## Document identifier

Use:

`<DOMAIN>-<TYPE>-<NUMBER>`

Examples:

- `SB-STD-001` — Brand naming standard
- `SES-ADR-014` — Engineering architecture decision record
- `SPR-PRD-006` — Product requirements document
- `SR-WP-003` — Research white paper
- `SC-POL-002` — Corporate policy

## Common type codes

| Code | Type |
| --- | --- |
| `STD` | Standard |
| `POL` | Policy |
| `PRD` | Product requirements document |
| `PDD` | Product definition document |
| `ADR` | Architecture decision record |
| `SPEC` | Technical or product specification |
| `SOP` | Standard operating procedure |
| `WP` | White paper |
| `RPT` | Report |
| `RFC` | Request for comments |
| `CHK` | Checklist |
| `IDX` | Domain index |

## Document lifecycle

Every governed document declares one status:

- `Draft` — under development; not authoritative
- `Review` — awaiting named stakeholder approval
- `Active` — current source of truth
- `Superseded` — replaced by a named document
- `Archived` — retained for record, not current use

## Required metadata

Each document should include:

- Document ID
- Title
- Domain owner
- Decision owner
- Status
- Version
- Effective date
- Review date
- Supersedes / superseded by
- Related documents
- Evidence or source references where applicable

## Authority and precedence

When documents conflict:

1. Approved corporate policy governs company obligations.
2. Approved product definition governs market and product claims.
3. Approved engineering specification governs implemented technical behavior.
4. Approved brand standards govern public expression.
5. Research informs decisions but does not become a product claim until accepted by Product and, where required, Engineering or Corporate review.

## Cross-domain decision flow

```text
SR Research evidence
        ↓
SPR Product definition
        ↓
SES Engineering implementation
        ↓
SB Brand expression
        ↓
SC Corporate governance, market and investor accountability
```

The flow is not strictly linear. Any domain may send a decision back when evidence, feasibility, claims or governance are insufficient.

## Historical identifier mapping

Existing `SPK-*` documents remain valid until deliberately reissued.

| Existing document | Foundation domain | Future ID pattern |
| --- | --- | --- |
| `SPK-BG-001` Brand Governance | SB Brand | `SB-STD-*` |
| `SPK-CD-001` Category Definition | SPR Product | `SPR-CAT-*` |
| `SPK-001` Product Philosophy | SPR Product | `SPR-PHI-*` |
| `SPK-000` Doctrine | SC Corporate | `SC-DOC-*` |
| `SPK-WP-001` White Paper | SR Research | `SR-WP-*` |

Do not rename historical files solely for aesthetic consistency. Reissue them under the new namespace when their content receives a substantive review.

## Domain indexes

- [SB Brand](../brand/SB-IDX-001.md)
- [SES Engineering](../engineering/SES-IDX-001.md)
- [SPR Product](../product/SPR-IDX-001.md)
- [SR Research](../research/SR-IDX-001.md)
- [SC Corporate](../corporate/SC-IDX-001.md)
