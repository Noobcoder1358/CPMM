import { ReactNode } from 'react';
import { vazirmatn } from '@/lib/fonts';
import { cn } from '@/lib/utils';

interface RootLayoutProps {
  children: ReactNode;
}

export function RootLayout({ children }: RootLayoutProps) {
  return (
    <div
      dir="rtl"
      className={cn(
        'min-h-screen bg-background font-sans antialiased',
        vazirmatn.variable
      )}
    >
      <main className="relative flex min-h-screen flex-col">
        {children}
      </main>
    </div>
  );
}