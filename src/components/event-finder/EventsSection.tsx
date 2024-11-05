import React from 'react';

import { EventCard } from '@/components/event-finder/event-card/EventCard';
import type { Event } from '@/lib/types/entities/event.type';

type EventsSectionProps = {
  description: string;
  events: Event[];
  eventsLoaded: boolean;
  handleModal: (event: Event) => void;
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
      <h3 className="text-bold font-bold mb-2 uppercase">{title}</h3>
      {description}
      {eventsLoaded ? (
        events.length ? (
          <div className="grid grid-cols-1 lg:grid-cols-[repeat(2,minmax(20rem,37rem))] justify-evenly my-10 w-full mx-auto gap-10">
            {events.map((event: Event, index: number) => (
              <EventCard
                event={event}
                upcoming={upcoming}
                key={index}
                handleModal={handleModal}
              />
            ))}
          </div>
        ) : (
          <div className="text-blue text-lg mx-auto text-center py-10">
            No {title}
          </div>
        )
      ) : (
        <div className="text-blue text-lg mx-auto text-center py-10">
          Loading...
        </div>
      )}
    </section>
  );
}
