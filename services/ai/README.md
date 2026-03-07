# Conversation & Summarisation Service (AI)

Orchestrates RAG summarisation and chat: system prompts and guardrails (e.g. South African legal context), calls Vector RAG for retrieval, LLM for generation, persists via Summaries & History Service.

**Owns:** Orchestration flows, prompt templates, plan limits. Does not store documents or embeddings.

**Example APIs:** `POST /tenants/{tenantId}/summaries`, `POST /tenants/{tenantId}/chat`.

See [ARCHITECTURE.md](../../ARCHITECTURE.md) §3.6.
