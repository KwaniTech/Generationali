import BgGradient from '@/components/common/bg-gradient';
import { Badge } from '@/components/ui/badge';
import UploadHeader from '@/components/UploadHeader';
import { Sparkles } from 'lucide-react';

export default function Page() {
  return (
    <section className="min-h-screen relative">
      <BgGradient />

      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <UploadHeader/>
      </div>
    </section>
  );
}
