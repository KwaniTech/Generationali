/**
 * Phase 1 in-app mimic of Summaries & History Service. Persists summaries in SQLite
 * via Prisma; same API as the future service for easy swap in Phase 2.
 */
import type { DocumentId, SummaryId, TenantId, UserId } from '@/lib/types';
import { toSummaryId } from '@/lib/types';
import { prisma } from '@/lib/db';

export type Summary = {
  id: SummaryId;
  tenantId: TenantId;
  documentId: DocumentId;
  title: string;
  shortSummary: string;
  fullSummary: string;
  createdAt: Date;
  createdBy: UserId;
};

export type CreateSummaryPayload = {
  documentId: DocumentId;
  title: string;
  shortSummary: string;
  fullSummary: string;
  createdBy: UserId;
};

let idCounter = 0;
function nextId(): SummaryId {
  return toSummaryId(`sum_${Date.now()}_${++idCounter}`);
}

function rowToSummary(row: { id: string; tenantId: string; documentId: string; title: string; shortSummary: string; fullSummary: string; createdAt: Date; createdBy: string }): Summary {
  return {
    id: toSummaryId(row.id),
    tenantId: row.tenantId as TenantId,
    documentId: row.documentId as DocumentId,
    title: row.title,
    shortSummary: row.shortSummary,
    fullSummary: row.fullSummary,
    createdAt: row.createdAt,
    createdBy: row.createdBy as UserId,
  };
}

export async function createSummary(
  tenantId: TenantId,
  payload: CreateSummaryPayload
): Promise<Summary> {
  const id = nextId();
  const row = await prisma.summary.create({
    data: {
      id,
      tenantId,
      documentId: payload.documentId,
      title: payload.title,
      shortSummary: payload.shortSummary,
      fullSummary: payload.fullSummary,
      createdBy: payload.createdBy,
    },
  });
  return rowToSummary(row);
}

export async function getSummary(
  tenantId: TenantId,
  summaryId: SummaryId
): Promise<Summary | undefined> {
  const row = await prisma.summary.findFirst({
    where: { id: summaryId, tenantId },
  });
  if (!row) return undefined;
  return rowToSummary(row);
}

export async function listSummaries(tenantId: TenantId): Promise<Summary[]> {
  const rows = await prisma.summary.findMany({
    where: { tenantId },
    orderBy: { createdAt: 'desc' },
  });
  return rows.map(rowToSummary);
}

export async function listSummariesByDocument(
  tenantId: TenantId,
  documentId: DocumentId
): Promise<Summary[]> {
  const rows = await prisma.summary.findMany({
    where: { tenantId, documentId },
    orderBy: { createdAt: 'desc' },
  });
  return rows.map(rowToSummary);
}
