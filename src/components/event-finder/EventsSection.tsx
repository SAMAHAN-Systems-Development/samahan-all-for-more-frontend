import React from 'react';

import { EventCard } from '@/components/event-finder/event-card/EventCard';
import type { EventData } from '@/lib/types/eventData.type';

type EventsSectionProps = {
  description: string;
  events: EventData[];
  eventsLoaded: boolean;
  handleModal: (event: EventData) => void;
  title: string;
  upcoming?: boolean;
};

export default function EventsSection({
  description,
  events,
  eventsLoaded,
  handleModal,
  title,
  upcoming,
}: EventsSectionProps) {
  return (
    <section className="w-4/5 mx-auto py-10 text-main text-blue leading-tight">
      <h3 className="text-bold font-bold mb-2">{title}</h3>
      {description}
      <div className="grid grid-cols-[repeat(2,minmax(20rem,37rem))] justify-evenly my-10 w-full mx-auto gap-10">
        {eventsLoaded
          ? events.map((event: EventData, index: number) => (
              <EventCard
                event={event}
                upcoming={upcoming}
                key={index}
                handleModal={handleModal}
              />
            ))
          : 'Loading'}
      </div>
    </section>
  );
}
