# SPK-FS-004 — Document Lifecycle

**Status:** Frozen  
**Owner:** Spark AI Foundation System  
**Applies to:** SB, SES, SPR, SR and SC documents

## Canonical lifecycle

```text
Draft
  ↓
Review
  ↓
Approved
  ↓
Frozen
  ↓
Archived（未来）
```

This is the only approved forward lifecycle for Foundation documents.

## 1. Draft

### Meaning

The document is being created or materially revised. Its content is not authoritative and must not be presented as an approved company, product, engineering or brand decision.

### Allowed

- Add and revise content
- Record assumptions and open questions
- Request evidence
- Compare options
- Invite early collaboration

### Required metadata

- Document ID
- Working title
- Primary domain
- Owner
- Status: Draft
- Version
- Intended reviewers

### Prohibited

- Publicly representing Draft content as current product capability
- Using Draft claims in sales or investor material
- Treating Draft architecture as an implementation commitment

### Exit gate

The owner confirms the document is complete enough for structured review and identifies every required reviewer.

## 2. Review

### Meaning

The document is undergoing formal cross-functional review. Content may still change, but every material issue must be resolved or explicitly accepted.

### Required review dimensions

- Product truth
- Technical feasibility
- Evidence and claims
- Brand expression
- Legal, corporate or risk impact where applicable
- Downstream dependency impact

### Required record

- Reviewer
- Domain
- Review date
- Decision: approve, approve with conditions or changes required
- Unresolved issues
- Evidence requested

### Prohibited

- Silent edits after a reviewer has approved the reviewed version
- Skipping required Product or Engineering review for public technical claims
- Moving forward with unresolved critical risk

### Exit gate

All required reviewers approve the same identified version, and no blocking issue remains.

## 3. Approved

### Meaning

The document has received required approval and is authorized for implementation, publication preparation or controlled organizational use.

Approved is a transition state between review and immutable release.

### Required metadata

- Approved version
- Approvers
- Approval date
- Effective scope
- Implementation owner
- Planned freeze date
- Required downstream updates

### Allowed

- Implement the approved decision
- Prepare website, product, engineering or corporate release artifacts
- Perform final consistency and release verification

### Prohibited

- Materially changing the approved content
- Expanding scope without returning to Review
- Marking the document Frozen before release evidence is complete

### Return rule

Any material change returns the document to Draft or Review with a new version identifier.

### Exit gate

The approved version is implemented or published as intended, dependencies are updated and release evidence is recorded.

## 4. Frozen

### Meaning

The document is the immutable, authoritative source for its stated scope and version.

Frozen documents must not be edited.

### Required metadata

- Frozen version
- Freeze date
- Effective date
- Owner
- Approval authority
- Downstream systems or documents governed
- Supersession method

### Allowed

- Reference and implement the document
- Create a new Draft successor
- Add external review records that do not alter the Frozen file
- Record implementation exceptions in a separate governed document

### Prohibited

- Direct content edits
- Silent corrections
- Replacing files while retaining the same Frozen version
- Interpreting implementation drift as a document change

### Correction rule

Even typographical corrections require a successor version if they modify the Frozen artifact.

### Successor flow

```text
Frozen V1.0
    ↓ creates
Draft V1.1 or V2.0
    ↓
Review
    ↓
Approved
    ↓
Frozen successor
```

The predecessor remains Frozen until the successor reaches its effective date.

## 5. Archived（未来）

### Meaning

The document is no longer authoritative but is preserved for historical, legal, audit or institutional-memory purposes.

Archive capability is a future Foundation System function. Until implemented, superseded Frozen documents remain preserved and visibly marked by an external registry record.

### Archive triggers

- A successor Frozen document becomes effective
- A product or policy is formally retired
- A document is consolidated into another authoritative source
- Retention policy requires archival classification

### Required archive record

- Archive date
- Reason
- Successor document
- Previous effective period
- Retention requirement
- Access classification

### Prohibited

- Deleting authoritative history
- Breaking links without redirect or registry mapping
- Removing evidence needed to understand past decisions

## Transition authority

| Transition | Required authority |
| --- | --- |
| Draft → Review | Document owner |
| Review → Approved | Required domain approvers |
| Approved → Frozen | Approval authority plus release owner |
| Frozen → Archived | Document owner plus governance authority |

## Version rules

### Patch version

Use for limited clarification that does not change meaning, obligations, scope or downstream implementation. A Frozen file is still not edited; issue a new version.

### Minor version

Use for additive changes or meaningful clarification that preserves the core decision.

### Major version

Use when product identity, architecture, governance, scope, obligations or strategic direction changes materially.

## Status labels

Every governed document must display exactly one lifecycle status near the title:

- `Status: Draft`
- `Status: Review`
- `Status: Approved`
- `Status: Frozen`
- `Status: Archived`

Do not use ambiguous alternatives such as Active, Final, Complete, Published or Current as lifecycle states. These may appear as descriptive metadata but do not replace the canonical status.

## Release evidence for Frozen status

Before freezing, record as applicable:

- Approved reviewers
- Final file checksum or commit reference
- Modified downstream files
- Build and QA result
- Published URL or artifact location
- Effective date
- Remaining approved exceptions
- Successor and archival policy

## Lifecycle acceptance test

- The current status is explicit.
- The owner and approval authority are known.
- Review evidence matches the approved version.
- Frozen documents are immutable.
- Successors link to predecessors.
- Archived records remain discoverable.
- Downstream outputs identify the Frozen source version they implement.

## Related documents

- [SPK-FS-001 — Foundation System](./SPK-FS-001.md)
- [SPK-FS-002 — Document Classification](./SPK-FS-002.md)
- [SPK-FS-003 — Decision Process](./SPK-FS-003.md)
- [SC-002 — Governance](../corporate/SC-002.md)
