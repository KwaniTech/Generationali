# Web (UI) App

Next.js frontend: marketing (home, pricing, how it works), auth (Clerk), upload, and future dashboard/chat. Talks to the API Gateway (BFF); all tenant-scoped requests use gateway-resolved identity.

**Run from repo root:** `npm run dev` (or `npm run dev -w web`). From this folder: `npm run dev`.

**Database (SQLite):** Documents and summaries are persisted in `prisma/data/generationali.db`. First time (or after schema changes), from `apps/web` run `npm run db:push` to create/update tables.

See [ARCHITECTURE.md](../../ARCHITECTURE.md) §2 & §6.
