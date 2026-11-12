# Spark AI — AI Knowledge Infrastructure Operator: Implementation Plan V1.0

Status: strategic direction approved; product readiness, pricing and customer deployments require verification. Owner: Spark AI Technology Limited / 光慧科技有限公司. Date: 2026-11-12.

## 1. Commercial promise and limits
Turn dormant institutional archives into governed, searchable, callable and metered knowledge services. Do not claim full commercial availability, a guaranteed life of optical media, regulatory approval, industry leadership, customer logos, cost savings or completed certification without evidence. Do not confuse the report's storage-industry outlook with endorsement of Spark AI.

## 2. Customer problem and customer-facing service contracts
- DLSM Governance Service: inventory, data ownership, policy mapping, data classification, lifecycle, controls, monthly evidence report. Revenue: onboarding + recurring managed-capacity/managed-domain service fee.
- Archive-to-Knowledge Service: parse and normalize authorized records, indexing, citations, preservation, re-indexing. Revenue: setup + verified units processed/indexed + ongoing maintenance.
- Enterprise Knowledge API: permission-aware hybrid retrieval, RAG orchestration, version tracking, secure connector and API access. Revenue: managed service subscription + validated successful requests + support tier.
- Archive Storage & Restore (optional): tiering and verification, restores, WORM where supported. Revenue: storage/service fee, with separately quoted restore and egress costs.
All fees are contract proposals, not published tariffs.

## 3. Target architecture and integration
1. **Source connectors**: SMB/NFS, S3-compatible object storage, DICOM/PACS, enterprise databases, optical library through verified device APIs. Use read-only discovery first; checksum/integrity manifest, immutable source_id, custodian and provenance.
2. **Governance control plane (DLSM)**: organization + tenant_id, dataset_id, ownership/licence, retention schedules, legal hold, classification, encryption keys, residency policy, access controls and versioned policy decision logs. Cross-tenant isolation is mandatory.
3. **Content extraction**: isolated parse workers; OCR only where justified, multimodal adapters, malware scanning, document quality flags, PII masking. No external model processing without authorization.
4. **Knowledge fabric**: canonical metadata catalogue + hybrid keyword/vector indexes + source/version linkage + citations; embeddings are derived artifacts, not original records. Separate preservation tier from retrieval/search tier. Use incremental sync and deletion/tombstone propagation.
5. **Knowledge service**: authenticated query API, tenant-scoped retrieval, source citation, confidence/abstention, tool invocation requiring scoped authorization; log decision, tool calls, results and model/version, with privacy-aware retention.
6. **Metering**: append-only usage ledger keyed by tenant, service, request idempotency key, metric, timestamp, trace id, policy version and billable status. Charge only accepted events. Link invoices to metering evidence, support disputes and credit notes.
7. **Operations**: backups and restore drills, incident response, SOC/SIEM exports, service desk, SLA monitoring, capacity, energy and costs. Document subprocessor and cross-border transfer constraints.

## 4. Core event and price model
Meter **different units separately**; never treat PB managed = PB billed = PB available = PB searchable.
- archive_storage_gib_month: sum of verified GiB-days / days in billing cycle;
- governed_data_gib_month: managed logical bytes, with duplicate/replica policy stated;
- ingest_gib: successfully accepted new logical bytes, deduplicated by source version;
- parsed_pages or indexed_gib: successfully processed and accepted outputs;
- successful_api_calls: authenticated, authorized, non-duplicate completed requests (exclude retries/failures according to contract);
- cold_restore_gib: customer-approved volume restored; archive retrieval SLA explicitly separate;
- professional_services_days: time-sheet and acceptance-based.
Invoice = fixed subscription + Σ(unit_price_j × accepted_units_j) + agreed project services − service credits, excluding taxes. Cost contribution = service revenues − directly attributable compute + storage + network + model API + labour + licensing + support costs. Asset-owner free cash flow separately considers CAPEX, working capital, taxes and financing.

## 5. Pilot architecture and proof gates
**0–30 days: Commercial + legal gate**
- Appoint product owner, data protection owner, architecture owner, finance owner and pilot customer sponsor.
- Select one sector and one paid/paid-intent use case. Sign scoped data processing agreement, security boundary, retention and customer acceptance plan.
- Baseline source data size, formats, licences, read rate, retrieval latency, retention and current total cost.

**31–60 days: Data and knowledge gate**
- Ingest authorized subset, validate counts/hash/metadata; policy-aware hybrid search; return document-level citations and audit trail.
- Test access denied for other tenants, withdrawn privileges, deleted sources, legal holds and stale indexes.
- Publish retrieval benchmark set with annotated relevance, top-k precision/recall, grounded-answer rate and false-citation rate.

**61–90 days: Operations gate**
- Implement API and idempotent usage ledger, reconciliation test, exportable usage report, backup/restore drill, cost telemetry and pilot contract SLA.
- Require written customer acceptance; no "production" label before security sign-off.

**Months 4–6: first billable pilot**
- Produce at least one customer-approved monthly usage report and contract-backed invoice, subject to actual customer conversion.
- Validate contribution margin and price sensitivity before expanding hardware CAPEX.

**Months 7–12: vertical replication**
- Package one sector (e.g. AIDC operations or engineering archives) with an industry connector, policy bundle, test dataset, incident runbook and price card.
- Planning target: 3 paying customers; this is a target, not a statement of attainment.

**Months 13–18: scale**
- Region/tenant-aware operations, quality dashboard, multi-site policy automation and reproducible deployment; only add asset ownership when utilization and cash-flow tests pass.

## 6. Acceptance targets (proposal, NOT achieved results)
- Ingest integrity: 100% of accepted files have verifiable checksum and source provenance.
- Tenant boundary: zero known unauthorized cross-tenant document exposures in adversarial test suite.
- Billing: 100% sampled invoice items reconcilable to an immutable accepted event and contract price rule; mismatches resolved before invoice approval.
- Search quality: customer-agreed benchmark with precision@k, recall@k, citation validity, abstention and p95 latency; baselines collected before hard thresholds.
- Restore: measured RTO/RPO and archive recall distribution by media, not one unsupported blanket SLA.
- Financial: positive directly attributable gross contribution at steady-state pilot volumes; capex decision only after downside-case sensitivity.
- Compliance: written security/privacy review and applicable data processing rights. No universal compliance certification claims.

## 7. Open-source/build/buy decisions
- Storage: S3 compatible object systems, existing NAS and optical libraries. Evaluate iRODS as policy/data-grid layer; rclone as transfer adapter, not a complete governance system.
- Orchestration: Temporal for durable lifecycle jobs; evaluate licence, integration and operations.
- Metadata: PostgreSQL + object manifests; optional OpenMetadata/DataHub after complexity test.
- Search: OpenSearch + pgvector/Qdrant or equivalent, select by measured workloads; RAG requires scoped authorization before retrieving passages.
- Metering: append-only PostgreSQL events and versioned price catalogue, exportable invoices; ensure financial auditability rather than claiming full accounting functionality.
Evaluate connector maintenance, access-control correctness, performance, legal suitability and TCO. Avoid deploying every open-source component by default.

## 8. Risk register and stop/go rules
- **No data processing rights:** stop ingestion until contract permits it.
- **Tenant leakage or incorrect authorization:** stop service; investigate and rerun security suite.
- **Unverifiable citations or poor retrieval benchmark:** do not expose as decision-support production.
- **Archive recall too slow:** pre-position indexed representations or reject latency commitment.
- **Unreconciled usage invoices:** suspend billing events until corrected.
- **Unprofitable unit economics:** reprice, shrink scope or halt capex.
- **Regulated or cross-border data:** require jurisdiction-specific legal and security review first.

## 9. Website content controls and release checklist
- Primary position: “AI Knowledge Infrastructure Operator / AI 知识基础设施运营商”.
- Preserve full legal name, tagline and existing Knowledge Infrastructure category definition.
- Link homepage and navigation to /knowledge-services; localized text should work in en, zh-CN and zh-TW.
- Canonical /knowledge-services, indexable metadata, sitemap generation or manual inclusion (verify deployed sitemap).
- Product maturity clearly distinguished: vision, development, PoC, verified commercial service.
- Cite publicly available research with attribution; no implicit CAICT endorsement.
- Run npm ci, npm run typecheck, npm run check:i18n, npm run build, responsive manual QA, URL click checks, production deployment check and rollback confirmation before announcing launch.
- Verify legacy /products/rtx-spark and /products/rtx-spark-appliance routes and canonical redirects separately; do not unintentionally revive them.

Sources: https://static.newdc.org.cn/file/2026%E5%AD%98%E5%8A%9B%E5%8F%91%E5%B1%95%E6%8A%A5%E5%91%8A.pdf ; https://www.jingjiribao.cn/static/detail.jsp?id=685977 ; https://www.cctime.com/html/2026-9-14/1742814.htm
