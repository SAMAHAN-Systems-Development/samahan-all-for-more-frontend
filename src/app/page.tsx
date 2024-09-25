import type { Metadata } from 'next';

import Button from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Samahan 2024',
  description: 'The official Samahan 2024 Website.',
};

export default function Home() {
  return (
    <main>
      test
      <Button text="Hello" />
      {/* add sections here */}
    </main>
  );
}
