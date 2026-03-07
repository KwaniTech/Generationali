# API Gateway / Backend-for-Frontend (BFF)

Single entrypoint for the Next.js app and future clients.

**Responsibilities:** Verify external identity (Clerk token), resolve `userId`/`tenantId` via Auth & Tenant Service, enforce rate/plan limits, aggregate data from backend services. Does not own domain data.

**Example APIs:** `GET /me`, `GET /me/documents`, `GET /me/summaries`, `POST /me/summaries`, `GET /me/usage`.

See [ARCHITECTURE.md](../../ARCHITECTURE.md) §3.1.
