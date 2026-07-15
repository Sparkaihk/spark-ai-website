# Spark AI Foundation System

This directory is the entry point for the Spark AI knowledge and decision system.

The Foundation System organizes durable company knowledge across Brand, Engineering, Product, Research and Corporate domains. It exists to prevent parallel sources of truth, unsupported claims and decisions without accountable ownership.

## Start here

Read the Foundation documents in this order:

1. [SPK-FS-001 — Foundation System](./SPK-FS-001.md)  
   Defines the five knowledge domains, authority model and system principles.

2. [SPK-FS-002 — Document Classification](./SPK-FS-002.md)  
   Defines document identifiers, the canonical registry and classification rules.

3. [SPK-FS-003 — Decision Process](./SPK-FS-003.md)  
   Defines how questions become evidence-backed, owned and reviewable decisions.

## Knowledge domains

| Domain | Name | Primary question | Index |
| --- | --- | --- | --- |
| `SB` | Brand | How should Spark AI be understood and expressed? | [SB Brand](../brand/SB-IDX-001.md) |
| `SES` | Engineering | How is the product and website implemented and verified? | [SES Engineering](../engineering/SES-IDX-001.md) |
| `SPR` | Product | What are we building, for whom and why? | [SPR Product](../product/SPR-IDX-001.md) |
| `SR` | Research | What evidence and original understanding support decisions? | [SR Research](../research/SR-IDX-001.md) |
| `SC` | Corporate | What governs the company, risk and institutional accountability? | [SC Corporate](../corporate/SC-IDX-001.md) |

## Canonical registered documents

### Brand

- [SB-001 — Brand OS](../brand/SB-001.md)
- [SB-002 — Brand Guidelines](../brand/SB-002.md)
- [SB-003 — Visual Design System](../brand/SB-003.md)

### Engineering

- [SES-001 — Website Brand Migration](../engineering/SES-001.md)
- [SES-002 — Website Architecture](../engineering/SES-002.md)
- [SES-003 — SARA](../engineering/SES-003.md)
- [SES-004 — Design System](../engineering/SES-004.md)

### Product

- [SPR-001 — Spark Appliance™ PRD](../product/SPR-001.md)
- [SPR-002 — Hardware Specification](../product/SPR-002.md)
- [SPR-003 — Software Architecture](../product/SPR-003.md)
- [SPR-004 — Product Roadmap](../product/SPR-004.md)

### Research

- [SR-001 — White Paper](../research/SR-001.md)
- [SR-002 — AI Knowledge Infrastructure](../research/SR-002.md)
- [SR-003 — Industry Research](../research/SR-003.md)

### Corporate

- [SC-001 — Constitution](../corporate/SC-001.md)
- [SC-002 — Governance](../corporate/SC-002.md)
- [SC-003 — Company Handbook](../corporate/SC-003.md)

## How to add a document

1. Identify the domain that owns the decision.
2. Confirm the document does not duplicate an Active source of truth.
3. Reserve the next three-digit number in the domain registry.
4. Add owner, status, version and review date.
5. Link supporting evidence and affected downstream documents.
6. Follow SPK-FS-003 for review and approval.
7. Add the document to this README and its domain index.

## Status model

- `Draft` — being developed
- `Review` — awaiting approval
- `Active` — authoritative
- `Superseded` — replaced by a named document
- `Archived` — retained for history

## Source-of-truth rule

Only one Active document should own a foundational decision. Supporting documents may explain, implement or provide evidence, but must link to the owner.

## Historical documents

Earlier `SPK-*` documents remain valid historical sources until reviewed and reissued under the current domain numbering system. Do not delete or rename them without updating all references and recording the supersession.
