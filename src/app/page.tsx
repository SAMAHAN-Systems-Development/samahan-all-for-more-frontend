import type { Metadata } from 'next';

import { Banner } from '@/components/ui/banner/Banner';

export const metadata: Metadata = {
  title: 'Samahan 2024',
  description: 'The official Samahan 2024 Website.',
};

export default function Home() {
  return (
    <main>
      <Banner />
    </main>
  );
}
