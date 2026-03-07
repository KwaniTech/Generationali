# Audit & Observability Service

Receives structured events from other services; centralises logs, metrics, and traces. Does not store sensitive content (no raw document text or full summaries).

**Owns:** Audit event records, operational metrics.

**Example events:** SummaryCreated, DocumentAccessed (tenantId, userId, ids, timestamp only).

See [ARCHITECTURE.md](../../ARCHITECTURE.md) §3.9.
