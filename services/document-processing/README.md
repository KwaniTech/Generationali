# Document Processing / Parsing Service

Consumes parse jobs from the queue: downloads files from object storage, converts PDFs (and other formats) to text/chunks, sends chunks to Vector RAG Service for embedding and indexing.

**Owns:** Parsing pipeline and transformation logic; no long-term storage of raw files or embeddings.

**Example jobs:** `ParseDocument { documentId, tenantId }`; calls Vector RAG and Document Ingestion (status updates).

See [ARCHITECTURE.md](../../ARCHITECTURE.md) §3.4.
