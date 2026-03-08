import { currentUser } from '@clerk/nextjs/server';
import { redirect, notFound } from 'next/navigation';
import Link from 'next/link';
import BgGradient from '@/components/common/bg-gradient';
import { getSummary } from '@/lib/services/summaries';
import { toSummaryId, toTenantId } from '@/lib/types';

type Props = { params: Promise<{ id: string }> };

export default async function SummaryDetailPage({ params }: Props) {
  const user = await currentUser();
  if (!user) redirect('/sign-in');

  const { id } = await params;
  const tenantId = toTenantId(user.id);
  const summaryId = toSummaryId(id);
  const summary = await getSummary(tenantId, summaryId);

  if (!summary) notFound();

  return (
    <section className="min-h-screen relative">
      <BgGradient />
      <div className="mx-auto max-w-3xl px-6 py-24 sm:py-32 lg:px-8">
        <Link
          href="/dashboard"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8 text-sm"
        >
          Back to dashboard
        </Link>
        <article className="space-y-6">
          <h1 className="font-bold text-2xl lg:text-3xl text-gray-900">
            {summary.title}
          </h1>
          <p className="text-sm text-gray-500">
            {new Date(summary.createdAt).toLocaleDateString()}
          </p>
          <div>
            <h2 className="font-semibold text-rose-600 mb-2">Summary</h2>
            <p className="text-gray-700 whitespace-pre-wrap">
              {summary.fullSummary}
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}
