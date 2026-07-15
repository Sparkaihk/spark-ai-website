# SPK-FS-003 — Decision Process

**Status:** Active  
**Owner:** Spark AI Technology Limited  
**Applies to:** SB Brand, SES Engineering, SPR Product, SR Research and SC Corporate

## Purpose

Define how Spark AI converts questions, evidence and constraints into accountable decisions that can be implemented, communicated and reviewed.

## Decision principles

1. Decisions have one accountable owner.
2. Evidence and assumptions are visibly separated.
3. Product truth precedes public expression.
4. Technical feasibility precedes implementation commitment.
5. Material risk is escalated rather than hidden.
6. Decisions create reusable institutional knowledge.
7. Superseded decisions remain traceable.

## Standard decision flow

### 1. Frame

Define:

- the decision required;
- the business or product outcome;
- the deadline and consequence of delay;
- the accountable domain and owner;
- affected products, systems and stakeholders.

### 2. Classify

Assign the primary Foundation domain:

- `SB` — brand expression and communication;
- `SES` — engineering, architecture and implementation;
- `SPR` — product definition and priority;
- `SR` — research and evidence;
- `SC` — company policy, governance and material risk.

Cross-domain decisions still require one primary owner.

### 3. Establish evidence

Record:

- verified facts;
- source documents;
- test or research evidence;
- assumptions;
- unknowns;
- constraints;
- claims requiring validation.

Do not convert an assumption into a fact through repetition.

### 4. Develop options

Each meaningful option should identify:

- customer and company value;
- technical feasibility;
- cost and operational impact;
- risk;
- reversibility;
- evidence quality;
- effect on existing commitments.

### 5. Review

Required reviewers depend on the decision:

| Decision type | Required review |
| --- | --- |
| Public naming or claims | SB + SPR; SES for technical claims |
| Product scope or roadmap | SPR + SES; SC for material company impact |
| Architecture or specification | SES + SPR |
| Research conclusion used publicly | SR + SPR + SB; SES where technical |
| Legal, investor or material reputation risk | SC |

Reviewers challenge evidence, feasibility and consequences. The accountable owner retains the decision unless governance assigns approval authority elsewhere.

### 6. Decide

A decision record must state:

- selected option;
- decision owner;
- approval date;
- rationale;
- evidence used;
- known limitations;
- implementation owner;
- review or expiry date;
- documents superseded.

### 7. Implement

Translate the decision into the relevant system:

- product definition or roadmap;
- engineering specification or ADR;
- brand guideline or public content;
- research plan;
- corporate policy or operating procedure.

Implementation must not broaden the approved decision silently.

### 8. Verify

Verification asks:

- Was the decision implemented as approved?
- Did the expected outcome occur?
- Did new risk or evidence emerge?
- Are website, documentation and collateral consistent?
- Should the decision remain Active?

### 9. Learn and supersede

When evidence changes, issue a new decision or revision. Mark the previous record `Superseded` and link both directions.

## Decision classes

### Type A — Foundational

Company doctrine, brand architecture, platform definition, product category or governance model. Requires cross-domain review and explicit approval.

### Type B — Product or architecture

Product scope, roadmap, specification, architecture or claims. Requires Product and Engineering ownership.

### Type C — Execution

Implementation, design, content or operational choices within an approved boundary. Owned by the responsible delivery domain.

### Type D — Reversible experiment

Time-bounded research, prototype or market test with clear success criteria and no unapproved public claim.

## Decision record template

```markdown
# <ID> — <Decision title>

Status:
Decision class:
Primary domain:
Owner:
Reviewers:
Date:
Review date:

## Decision required

## Context

## Evidence

## Assumptions and unknowns

## Options considered

## Decision

## Rationale

## Risks and limitations

## Implementation

## Verification

## Related and superseded documents
```

## Escalation triggers

Escalate when a decision:

- introduces an unsupported public claim;
- changes the product boundary or committed roadmap;
- creates material security, legal or compliance risk;
- implies supplier endorsement or trademark use;
- affects customer data control or deployment assumptions;
- requires significant unplanned investment;
- conflicts with an Active Foundation document.

## Related documents

- [SPK-FS-001 — Foundation System](./SPK-FS-001.md)
- [SPK-FS-002 — Document Classification](./SPK-FS-002.md)
- [SC-002 — Governance](../corporate/SC-002.md)
