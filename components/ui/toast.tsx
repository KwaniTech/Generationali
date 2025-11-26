// components/ui/toast.tsx
'use client';

import { Toaster } from 'sonner';

export default function Toast() {
  return (
    <Toaster
      position="top-right" // 🔹 Position at top-right
      richColors
      toastOptions={{
        duration: 5000, // default 5 seconds
        style: {
          borderRadius: '12px',
          padding: '16px',
          boxShadow: '0 4px 14px rgba(0,0,0,0.1)',
          fontSize: '14px',
        },
      }}
    />
  );
}
