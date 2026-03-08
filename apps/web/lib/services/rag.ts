import type { DocumentId, TenantId } from '@/lib/types';

export type ChunkInput = {
  text: string;
  metadata?: Record<string, string | number | boolean>;
};

export type QueryOptions = {
  topK?: number;
  documentId?: DocumentId;
};

/**
 * Index text chunks for a document under a tenant. Stub implementation;
 * Phase 3 will replace with real vector store (e.g. Qdrant, pgvector).
 */
export async function indexChunks(
  _tenantId: TenantId,
  _documentId: DocumentId,
  _chunks: ChunkInput[]
): Promise<void> {
  // Stub: no-op until Vector Store & RAG service is implemented.
}

/**
 * Query the tenant's index. Stub implementation; Phase 3 will use real retrieval.
 */
export async function query(
  _tenantId: TenantId,
  _query: string,
  _options?: QueryOptions
): Promise<{ text: string; metadata?: Record<string, unknown> }[]> {
  // Stub: return empty until RAG is implemented.
  return [];
}
