/**
 * Domain identifiers. Use these instead of raw strings so tenant/document/summary
 * handling is consistent and type-safe. When Auth & Tenant Service exists,
 * TenantId and UserId will be resolved from it; until then, e.g. Clerk user.id
 * can be used as both in a solo-tenant model.
 */
export type TenantId = string & { readonly __brand: 'TenantId' };
export type UserId = string & { readonly __brand: 'UserId' };
export type DocumentId = string & { readonly __brand: 'DocumentId' };
export type SummaryId = string & { readonly __brand: 'SummaryId' };

export function toTenantId(s: string): TenantId {
  return s as TenantId;
}

export function toUserId(s: string): UserId {
  return s as UserId;
}

export function toDocumentId(s: string): DocumentId {
  return s as DocumentId;
}

export function toSummaryId(s: string): SummaryId {
  return s as SummaryId;
}
