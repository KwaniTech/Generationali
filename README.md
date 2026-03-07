# Generationali

AI-powered PDF analysis and summarization for lawyers; per-tenant isolation and microservice-oriented architecture.

## Repo structure (aligned with [ARCHITECTURE.md](./ARCHITECTURE.md))

- **`apps/web`** – Next.js UI (marketing, auth, upload, dashboard, chat). **This is the first build to run or rebuild**; all other pieces depend on or integrate with it.
- **`services/`** – Backend service stubs (implementations to be added incrementally):
  - **`gateway`** – API Gateway / BFF (single entrypoint for the frontend)
  - **`auth`** – Auth & Tenant Service (Clerk → internal User/Tenant, tokens)
  - **`document-ingestion`** – Document lifecycle and parse-job enqueue
  - **`document-processing`** – PDF parsing and chunking → RAG
  - **`rag`** – Vector Store & RAG Index (per-tenant embeddings and retrieval)
  - **`ai`** – Conversation & Summarisation (orchestration, prompts, LLM)
  - **`summaries-history`** – Summaries and conversation history storage
  - **`billing`** – Billing & Usage (Stripe, quotas)
  - **`audit`** – Audit & Observability (events, metrics, no sensitive content)

Each service folder has a short `README.md` linking to the architecture doc.

## Getting started

1. **Install (from repo root):**
   ```bash
   npm install
   ```

2. **Run the web app:**
   ```bash
   npm run dev
   ```
   Opens [http://localhost:3000](http://localhost:3000). For Clerk auth and UploadThing, set env vars (e.g. in `apps/web/.env.local`): `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`, `CLERK_SECRET_KEY`, and UploadThing keys as required.

3. **Build the web app (e.g. for production):**
   ```bash
   npm run build
   ```
   Requires the same env vars for prerender (Clerk).

## Build order

- **First (or only) app to build:** `apps/web` (UI). Run `npm run build` from root or `npm run build` inside `apps/web`.
- **Later:** Backend services in `services/*` will be implemented and built as separate deployables; the gateway will route frontend traffic to them. Until then, API routes in `apps/web` can continue to act as the monolith.

## Learn more

- [ARCHITECTURE.md](./ARCHITECTURE.md) – Microservice boundaries, tenancy, migration phases.
- [Next.js Documentation](https://nextjs.org/docs) – App Router, deployment.
