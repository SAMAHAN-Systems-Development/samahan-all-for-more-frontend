import type { Metadata } from 'next';

import { EventCard } from '@/components/event-card/EventCard';

export const metadata: Metadata = {
  title: 'Samahan 2024',
  description: 'The official Samahan 2024 Website.',
};

export default function Home() {
  return (
    <main>
      <EventCard
        location="martin"
        name="fuck fest"
        poster_images={['']}
        start_time={new Date(Date.now())}
      />
      test
      {/* add sections here */}
    </main>
  );
}
