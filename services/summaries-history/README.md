# Summaries & History Service

Persists and serves summarisation outputs and conversation history. Listing and retrieval for dashboards and detail views.

**Owns:** Summary, Conversation, Message records (all tenant-scoped).

**Example APIs:** `GET /tenants/{tenantId}/summaries`, `GET /tenants/{tenantId}/summaries/{id}`, `GET /tenants/{tenantId}/conversations`, `GET /tenants/{tenantId}/conversations/{id}`.

See [ARCHITECTURE.md](../../ARCHITECTURE.md) §3.7.
