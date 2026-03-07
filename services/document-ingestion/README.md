# Document Ingestion Service

Owns document lifecycle after upload: status (UPLOADED, PARSING, PARSED, FAILED), storage mapping, and enqueueing parse jobs.

**Owns:** Document records, mapping from document IDs to object storage locations.

**Example APIs:** `POST /tenants/{tenantId}/documents`, `GET /tenants/{tenantId}/documents`, internal job emission to JobQueue.

See [ARCHITECTURE.md](../../ARCHITECTURE.md) §3.3.
