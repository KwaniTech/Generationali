'use server'

import { currentUser } from '@clerk/nextjs/server';
import { getSummary, updateSummary } from '@/lib/services/summaries';
import { getDocument, updateDocumentStatus } from '@/lib/services/documents';
import { summarizePdf } from '@/lib/services/ai';
import { toTenantId, toSummaryId, toDocumentId } from '@/lib/types';
import { revalidatePath } from 'next/cache';

/**
 * Server Action to trigger/re-trigger summarization for a specific summary record.
 * Used for old documents that have placeholder summaries.
 */
export async function summarizeDocumentAction(summaryIdStr: string) {
    const user = await currentUser();
    if (!user) throw new Error('Unauthorized');

    const tenantId = toTenantId(user.id);
    const summaryId = toSummaryId(summaryIdStr);

    // 1. Fetch current summary
    const summary = await getSummary(tenantId, summaryId);
    if (!summary) throw new Error('Summary not found');

    // 2. Fetch associated document
    const doc = await getDocument(tenantId, toDocumentId(summary.documentId));
    if (!doc) throw new Error('Document not found');

    // 3. Mark as PARSING
    await updateDocumentStatus(tenantId, doc.id, 'PARSING');

    try {
        // 4. Summarize with Gemini
        const result = await summarizePdf(doc.storageUrl, doc.originalFilename);

        // 5. Update summary with real content
        await updateSummary(tenantId, summaryId, {
            shortSummary: result.shortSummary,
            fullSummary: result.fullSummary,
        });

        // 6. Update document status
        await updateDocumentStatus(tenantId, doc.id, 'PARSED');

        revalidatePath(`/summaries/${summaryId}`);
        revalidatePath('/dashboard');

        return { success: true };
    } catch (error) {
        console.error('Re-summarization action failed:', error);
        await updateDocumentStatus(tenantId, doc.id, 'FAILED');
        throw error;
    }
}
