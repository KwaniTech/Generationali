import { ScrollText  } from 'lucide-react';
import BgGradient from '../common/bg-gradient';

export default function DemoSection() {
    return <section className="relative">
       <BgGradient className='bg-linear-to-br from-rose-800 via-rose-700 to-rose-500 '/>
      <div className="py-12 lg:py-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="inline-flex items-center justify-center p-2 rounded-2xl bg-gray-100/80 backdrop-blur-xs border border-gray-500/20 mb-4">
            <ScrollText  className="w-6 h-6 text-rose-500" />
          </div>
          <h3 className="font-bold text-3xl max-w-2xl mx-auto px-4 sm:px-6">
            Watch how Generationali transforms{' '}
            <span className="bg-linear-to-r from-rose-500 to-rose-700 bg-clip-text text-transparent">
              this PDF document
            </span>{' '}
            into an easy-to-read summary!
          </h3>
        </div>
      </div>
    </section>
}
