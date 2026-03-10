'use client'

import { useEffect, useState, useRef } from 'react';
import { summarizeDocumentAction } from '@/lib/actions/summarize';
import { Loader2 } from 'lucide-react';
import { toast } from 'sonner';

type Props = {
    summaryId: string;
    fullSummary: string;
};

const PLACEHOLDER_TEXT = 'Full summary will appear here once the AI pipeline is connected.';

export default function SummaryAutoFix({ summaryId, fullSummary }: Props) {
    const [isProcessing, setIsProcessing] = useState(false);
    const attemptedRef = useRef(false);

    useEffect(() => {
        if (fullSummary === PLACEHOLDER_TEXT && !attemptedRef.current) {
            attemptedRef.current = true;
            handleAutoSummarize();
        }
    }, [fullSummary]);

    const handleAutoSummarize = async () => {
        setIsProcessing(true);
        toast('Old document detected', {
            description: 'Automatically generating AI summary...',
        });

        try {
            await summarizeDocumentAction(summaryId);
            toast.success('Summary generated! ✨');
        } catch (error) {
            console.error('Auto-summarization failed:', error);
            toast.error('Summarization failed', {
                description: 'You can try again later or re-upload the document.',
            });
        } finally {
            setIsProcessing(false);
        }
    };

    if (!isProcessing && fullSummary !== PLACEHOLDER_TEXT) return null;

    return (
        <div className="mt-4 p-4 rounded-xl border border-rose-100 bg-rose-50/50 flex items-center gap-3">
            {isProcessing ? (
                <>
                    <Loader2 className="h-5 w-5 text-rose-500 animate-spin" />
                    <p className="text-sm font-medium text-rose-900">
                        Generating AI summary... this may take 10-20 seconds.
                    </p>
                </>
            ) : (
                <>
                    <div className="h-2 w-2 rounded-full bg-rose-500" />
                    <p className="text-sm text-rose-900">
                        Wait for AI processing to complete...
                    </p>
                </>
            )}
        </div>
    );
}
