'use client';
import React, { useEffect, useMemo, useState } from 'react';

import { EventCard } from '@/components/event-card/EventCard';
import { Banner } from '@/components/ui/banner/Banner';
import { useEvents } from '@/lib/queries/eventQueries';
import type { EventData } from '@/lib/types/eventData.type';

export default function EventFinder() {
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [allEvents, setEvents] = useState<EventData[]>([]);
  const { data: events, isLoading } = useEvents(pageNumber);

  const [ongoingEvents, setOngoingEvents] = useState<EventData[]>([]);
  const [upcomingEvents, setUpcomingEvents] = useState<EventData[]>([]);
  const [eventsLoaded, setEventsLoaded] = useState<boolean>(false);

  useEffect(() => {
    if (events?.data && events.data.length > 0) {
      const now = new Date('2025-02-18T10:06:28.050Z');

      const newOngoing = events.data.filter((event) => {
        const startDate = new Date(event.start_time);
        const endDate = new Date(event.end_time);
        return startDate <= now && endDate >= now;
      });

      const newUpcoming = events.data.filter((event) => {
        const startDate = new Date(event.start_time);
        return startDate > now;
      });

      setOngoingEvents((prevOngoing) => [...prevOngoing, ...newOngoing]);
      setUpcomingEvents((prevUpcoming) => [...prevUpcoming, ...newUpcoming]);

      setEvents(() => {
        const all = events.data;
        // eslint-disable-next-line no-console
        console.log('filtered', all);
        return all;
      });
    }
  }, [events, pageNumber]);

  const allRelevantEvents = useMemo(() => {
    // eslint-disable-next-line no-console
    console.log('memo', [...ongoingEvents, ...upcomingEvents]);
    return [...ongoingEvents, ...upcomingEvents];
  }, [ongoingEvents, upcomingEvents]);

  // pagination
  useEffect(() => {
    const maxUpcoming = 4;
    if (
      (allRelevantEvents.length === 0 || upcomingEvents.length < maxUpcoming) &&
      pageNumber < (events?.totalPages || 1)
    ) {
      setPageNumber((prevPage) => prevPage + 1);
      // eslint-disable-next-line no-console
      console.log('new page', allRelevantEvents);
    } else {
      setEventsLoaded(true);
    }
  }, [allRelevantEvents]);

  // eslint-disable-next-line no-console
  console.log(
    'allEvents',
    !isLoading && allEvents.length === 0 ? 'loading' : allEvents
  );

  // eslint-disable-next-line no-console
  console.log('ongoing:', ongoingEvents);

  // eslint-disable-next-line no-console
  console.log('upcoming:', upcomingEvents);
  return (
    <>
      <Banner
        image={'/images/samahan-members.png'}
        imageAlt={'SAMAHAN Members'}
        subtitle={'SAMAHAN'}
        title={'EVENT FINDER'}
      />

      <section className="border p-10">
        <span className="text-bold font-bold text-blue">ONGOING EVENTS</span>
        <div className="grid grid-cols-2 my-10 w-fit justify-items-center items-end border mx-auto gap-10">
          {eventsLoaded
            ? ongoingEvents.map((event: EventData) => (
                <>
                  <EventCard event={event} href="/" />
                </>
              ))
            : 'Loading'}
        </div>
      </section>

      <section className="border p-10">
        <span className="text-bold font-bold text-blue">UPCOMING EVENTS</span>
        <div className="grid grid-cols-2 my-10 w-fit justify-items-center items-end border mx-auto gap-10">
          {eventsLoaded
            ? upcomingEvents.map((event: EventData) => (
                <>
                  <EventCard event={event} href="/" />
                </>
              ))
            : 'Loading'}
        </div>
      </section>
    </>
  );
}
