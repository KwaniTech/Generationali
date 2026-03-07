# Billing & Usage Service

Stripe (or equivalent) integration for subscriptions and payments; tracks usage per tenant (uploads, tokens, summaries, chats); enforces plan limits with gateway and domain services.

**Owns:** Plan, Subscription, UsageRecord data (tenant-scoped).

**Example APIs:** `GET /tenants/{tenantId}/usage`, `GET /tenants/{tenantId}/subscription`, Stripe webhooks.

See [ARCHITECTURE.md](../../ARCHITECTURE.md) §3.8.
