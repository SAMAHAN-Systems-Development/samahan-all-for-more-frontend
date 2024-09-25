import type { Metadata } from 'next';

import { Banner } from '@/components/ui/banner/Banner';

export const metadata: Metadata = {
  title: 'Samahan 2024',
  description: 'The official Samahan 2024 Website.',
};

export default function Home() {
  return (
    <main>
      {/* add sections here */}
      <Banner
        image={'/images/samahan-members.png'}
        imageAlt={'Samahan Members'}
        subtitle={'Samahan'}
        title={'Privacy Policy'}
      />
    </main>
  );
}
