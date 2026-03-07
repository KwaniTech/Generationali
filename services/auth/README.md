# Auth & Tenant Service

Maintains internal identities and tenant structure; maps Clerk (and other providers) to internal `User` and `Tenant`; issues internal tokens with `tenantId`, `userId`, roles.

**Owns:** User, Tenant, Membership, role definitions.

**Example APIs:** `POST /auth/resolve`, `GET /tenants/{tenantId}`, `GET /users/{userId}/memberships`.

See [ARCHITECTURE.md](../../ARCHITECTURE.md) §3.2.
