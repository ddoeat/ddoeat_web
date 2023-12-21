import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import './globals.css';
import QueryClientProviders from '@components/common/QueryClientProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <QueryClientProviders>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </QueryClientProviders>
  );
}
