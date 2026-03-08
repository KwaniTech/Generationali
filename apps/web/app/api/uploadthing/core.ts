import { UploadThingError } from 'uploadthing/server';
import { createUploadthing, type FileRouter } from 'uploadthing/next';
import { currentUser } from '@clerk/nextjs/server';
import { createDocument } from '@/lib/services/documents';
import { createSummary } from '@/lib/services/summaries';
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
      const userId = toUserId(metadata.userId);
      const tenantId = toTenantId(metadata.userId);
      const doc = await createDocument(tenantId, {
        userId,
        storageUrl: file.url,
        storageKey: file.key,
        originalFilename: file.name,
        mimeType: file.type ?? 'application/pdf',
        sizeBytes: file.size,
      });
      await createSummary(tenantId, {
        documentId: doc.id,
        title: file.name,
        shortSummary: 'Summary will be generated after processing.',
        fullSummary: 'Full summary will appear here once the AI pipeline is connected.',
        createdBy: userId,
      });
      return { userId: metadata.userId, fileKey: file.key, fileUrl: file.url };
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
