import { currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import BgGradient from '@/components/common/bg-gradient';
import { listDocuments } from '@/lib/services/documents';
import { listSummaries } from '@/lib/services/summaries';
import { toTenantId } from '@/lib/types';
import { FileText, FileOutput } from 'lucide-react';

export default async function DashboardPage() {
  const user = await currentUser();
  if (!user) redirect('/sign-in');

  const tenantId = toTenantId(user.id);
  const documents = await listDocuments(tenantId);
  const summaries = await listSummaries(tenantId);

  return (
    <section className="min-h-screen relative">
      <BgGradient />
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <h1 className="font-bold text-2xl lg:text-3xl mb-8 text-gray-900">
          Your Summaries
        </h1>

        {summaries.length > 0 && (
          <div className="mb-12">
            <h2 className="font-semibold text-lg mb-4 text-rose-600">
              Summaries
            </h2>
            <ul className="space-y-3">
              {summaries.map((s) => (
                <li key={s.id}>
                  <Link
                    href={`/summaries/${s.id}`}
                    className="flex items-center gap-3 p-4 rounded-xl border border-gray-200 hover:border-rose-200 hover:bg-rose-50/50 transition-colors"
                  >
                    <FileOutput className="h-5 w-5 text-rose-500 shrink-0" />
                    <div className="min-w-0">
                      <p className="font-medium text-gray-900 truncate">
                        {s.title}
                      </p>
                      <p className="text-sm text-gray-500 truncate">
                        {s.shortSummary}
                      </p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div>
          <h2 className="font-semibold text-lg mb-4 text-rose-600">
            Documents
          </h2>
          {documents.length === 0 ? (
            <p className="text-gray-500">
              No documents yet. Upload a PDF to get started.
            </p>
          ) : (
            <ul className="space-y-3">
              {documents.map((d) => (
                <li
                  key={d.id}
                  className="flex items-center gap-3 p-4 rounded-xl border border-gray-200 bg-white/80"
                >
                  <FileText className="h-5 w-5 text-gray-500 shrink-0" />
                  <div className="min-w-0 flex-1">
                    <p className="font-medium text-gray-900 truncate">
                      {d.originalFilename}
                    </p>
                    <p className="text-sm text-gray-500">{d.status}</p>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="mt-8">
          <Link
            href="/upload"
            className="inline-flex items-center gap-2 text-rose-600 hover:text-rose-700 font-medium"
          >
            Upload a PDF
          </Link>
        </div>
      </div>
    </section>
  );
}
