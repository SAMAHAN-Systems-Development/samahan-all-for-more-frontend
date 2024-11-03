import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import '@/styles/globals.css';

import Footer from '@/components/ui/Footer/Footer';
import { ReactQueryClientProvider } from '@/lib/providers/ReactQuery';
import Navbar from '@/components/ui/Navbar/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Samahan 2024',
  description: 'The official Samahan 2024 Website.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ReactQueryClientProvider>
      <html lang="en">
        <body className={inter.className}>
          {children}
          <Navbar />
          <Footer />
        </body>
      </html>
    </ReactQueryClientProvider>
  );
}
