import HeroSection from '@/components/HeroSection/HeroSection';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Samahan 2024',
  description: 'The official Samahan 2024 Website.',
};

export default function Home() {
  return (
    <main>
      <HeroSection />
    </main>
  );
}
