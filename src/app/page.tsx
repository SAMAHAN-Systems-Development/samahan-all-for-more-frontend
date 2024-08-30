import AboutPage from '@/components/AboutPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Samahan 2024',
  description: 'The official Samahan 2024 Website.',
};

export default function Home() {
  return (
    <main>
      <AboutPage />
    </main>
  );
}
