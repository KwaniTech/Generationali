/**
 * Phase 1 in-app mimic of Document Ingestion Service. Persists documents in SQLite
 * via Prisma; same API as the future service for easy swap in Phase 2.
 */
import type { DocumentId, TenantId, UserId } from '@/lib/types';
import { toDocumentId } from '@/lib/types';
import { prisma } from '@/lib/db';

export type DocumentStatus = 'UPLOADED' | 'PARSING' | 'PARSED' | 'FAILED';

export type Document = {
  id: DocumentId;
  tenantId: TenantId;
  userId: UserId;
  storageUrl: string;
  storageKey: string;
  originalFilename: string;
  mimeType: string;
  sizeBytes: number;
  status: DocumentStatus;
  createdAt: Date;
  updatedAt: Date;
};

export type CreateDocumentPayload = {
  userId: UserId;
  storageUrl: string;
  storageKey: string;
  originalFilename: string;
  mimeType: string;
  sizeBytes: number;
};

let idCounter = 0;
function nextId(): DocumentId {
  return toDocumentId(`doc_${Date.now()}_${++idCounter}`);
}

function rowToDocument(row: { id: string; tenantId: string; userId: string; storageUrl: string; storageKey: string; originalFilename: string; mimeType: string; sizeBytes: number; status: string; createdAt: Date; updatedAt: Date }): Document {
  return {
    id: toDocumentId(row.id),
    tenantId: row.tenantId as TenantId,
    userId: row.userId as UserId,
    storageUrl: row.storageUrl,
    storageKey: row.storageKey,
    originalFilename: row.originalFilename,
    mimeType: row.mimeType,
    sizeBytes: row.sizeBytes,
    status: row.status as DocumentStatus,
    createdAt: row.createdAt,
    updatedAt: row.updatedAt,
  };
}

export async function createDocument(
  tenantId: TenantId,
  payload: CreateDocumentPayload
): Promise<Document> {
  const id = nextId();
  const row = await prisma.document.create({
    data: {
      id,
      tenantId,
      userId: payload.userId,
      storageUrl: payload.storageUrl,
      storageKey: payload.storageKey,
      originalFilename: payload.originalFilename,
      mimeType: payload.mimeType,
      sizeBytes: payload.sizeBytes,
      status: 'UPLOADED',
    },
  });
  return rowToDocument(row);
}

export async function getDocument(
  tenantId: TenantId,
  documentId: DocumentId
): Promise<Document | undefined> {
  const row = await prisma.document.findFirst({
    where: { id: documentId, tenantId },
  });
  if (!row) return undefined;
  return rowToDocument(row);
}

export async function listDocuments(tenantId: TenantId): Promise<Document[]> {
  const rows = await prisma.document.findMany({
    where: { tenantId },
    orderBy: { createdAt: 'desc' },
  });
  return rows.map(rowToDocument);
}

export async function updateDocumentStatus(
  tenantId: TenantId,
  documentId: DocumentId,
  status: DocumentStatus
): Promise<Document | undefined> {
  const { count } = await prisma.document.updateMany({
    where: { id: documentId, tenantId },
    data: { status, updatedAt: new Date() },
  });
  if (count === 0) return undefined;
  const updated = await prisma.document.findFirst({
    where: { id: documentId, tenantId },
  });
  return updated ? rowToDocument(updated) : undefined;
}
