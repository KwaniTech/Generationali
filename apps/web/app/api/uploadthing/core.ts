import { UploadThingError } from 'uploadthing/server';
import { createUploadthing, type FileRouter } from 'uploadthing/next';
import { currentUser } from '@clerk/nextjs/server';
import { createDocument, updateDocumentStatus } from '@/lib/services/documents';
import { createSummary } from '@/lib/services/summaries';
import { summarizePdf } from '@/lib/services/ai';
import { toUserId, toTenantId } from '@/lib/types';

const f = createUploadthing();

export const ourFileRouter = {
  pdfUploader: f({ pdf: { maxFileSize: '32MB' } })
    .middleware(async () => {
      const user = await currentUser();
      if (!user) throw new UploadThingError('Unauthorized');
      return { userId: user.id };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      console.log('--- onUploadComplete (Fast Mode) Start ---');
      console.log('File:', file.name, file.url);

      const userId = toUserId(metadata.userId);
      const tenantId = toTenantId(metadata.userId);

      try {
        // 1. Create document record (fast)
        const doc = await createDocument(tenantId, {
          userId,
          storageUrl: file.url,
          storageKey: file.key,
          originalFilename: file.name,
          mimeType: file.type ?? 'application/pdf',
          sizeBytes: file.size,
        });

        // 2. Save a placeholder summary (fast)
        // This will be "auto-fixed" by the SummaryAutoFix component on the detail page
        const summary = await createSummary(tenantId, {
          documentId: doc.id,
          title: file.name.replace(/\.pdf$/i, ''),
          shortSummary: 'Analyzing document...',
          fullSummary: 'Full summary will appear here once the AI pipeline is connected.',
          createdBy: userId,
        });

        console.log('--- onUploadComplete Fast End ---');
        return {
          userId: metadata.userId,
          fileKey: file.key,
          fileUrl: file.url,
          summaryId: summary.id,
        };
      } catch (err) {
        console.error('Critical error in onUploadComplete:', err);
        throw err;
      }
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
