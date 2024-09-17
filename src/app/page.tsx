import type { Metadata } from 'next';

import BallFrame from '@/components/ui/BallFrame';

export const metadata: Metadata = {
  title: 'Samahan 2024',
  description: 'The official Samahan 2024 Website.',
};

export default function Home() {
  return (
    <main>
      {' '}
      <div>
        <BallFrame />
      </div>
    </main>
  );
}
