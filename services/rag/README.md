# Vector Store & RAG Index Service

Owns embeddings and retrieval per tenant. Provides RAG-ready retrieval for summarisation and chat. Per-tenant collections; no cross-tenant queries.

**Owns:** Embedding vectors and chunk metadata per tenant (e.g. documentId, pageNumber, section).

**Example APIs:** `POST /tenants/{tenantId}/documents/{documentId}/chunks`, `POST /tenants/{tenantId}/query`.

See [ARCHITECTURE.md](../../ARCHITECTURE.md) §3.5 & §5.
