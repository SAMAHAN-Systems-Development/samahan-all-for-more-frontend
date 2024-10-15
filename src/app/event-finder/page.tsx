'use client';
import React, { useEffect, useMemo, useState } from 'react';

import EventCardModal from '@/components/event-finder/event-card/eventCardModal';
import EventsSection from '@/components/event-finder/EventsSection';
import { useEventModal } from '@/components/event-finder/hooks/useEventModal';
import { Banner } from '@/components/ui/banner/Banner';
import Button from '@/components/ui/Button';
import { useEvents } from '@/lib/queries/eventQueries';
import type { EventData } from '@/lib/types/eventData.type';

type EventsSectionProps = {
  description: string;
  events: EventData[];
  title: string;
  upcoming?: boolean;
};

export default function EventFinder() {
  const [pageNumber, setPageNumber] = useState<number>(1);
  const { data: events } = useEvents(pageNumber);

  const [ongoingEvents, setOngoingEvents] = useState<EventData[]>([]);
  const [upcomingEvents, setUpcomingEvents] = useState<EventData[]>([]);
  const [visibleUpcomingEvents, setVisibleUpcoming] = useState<number>(4);
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
    }
  }, [events, pageNumber]);

  const allRelevantEvents = useMemo(() => {
    return [...ongoingEvents, ...upcomingEvents];
  }, [ongoingEvents, upcomingEvents]);

  // pagination
  // if no upcoming/ongoing events on page, next page
  // if upcoming does go upto 4, next page
  useEffect(() => {
    const maxUpcoming = 4;
    if (
      (allRelevantEvents.length === 0 || upcomingEvents.length < maxUpcoming) &&
      pageNumber < (events?.totalPages || 1)
    ) {
      setPageNumber((prevPage) => prevPage + 1);
    } else {
      setEventsLoaded(true);
    }
  }, [allRelevantEvents]);

  const allData: EventsSectionProps[] = [
    {
      title: 'ONGOING EVENTS',
      description:
        'Current activities happening now in SAMAHAN, where students can join and engage. Stay updated to participate!',
      events: ongoingEvents,
    },
    {
      title: 'UPCOMING EVENTS',
      description:
        ' Exciting events lined up for the future, mark your calendars and get ready for what’s ahead!',
      events: upcomingEvents.slice(0, visibleUpcomingEvents),
      upcoming: true,
    },
  ];

  const { handleModal, modalOpen, modalActive, closeModal } = useEventModal();

  const handleLoad = () => {
    setVisibleUpcoming((prev) => prev + 4);
  };

  // eslint-disable-next-line no-console
  console.log(visibleUpcomingEvents, upcomingEvents.length);

  return (
    <>
      <Banner
        image={'/images/addu-roxas-front.png'}
        imageAlt={'SAMAHAN Members'}
        subtitle={'SAMAHAN'}
        title={'EVENT FINDER'}
      />

      <div className="py-20">
        {allData.map((data: EventsSectionProps) => (
          <EventsSection
            title={data.title}
            description={data.description}
            events={data.events}
            eventsLoaded={eventsLoaded}
            key={data.title}
            upcoming={data.upcoming}
            handleModal={handleModal}
          />
        ))}
        {visibleUpcomingEvents < upcomingEvents.length && (
          <div className="mx-auto w-fit">
            <Button text="Load More" onClick={handleLoad} />
          </div>
        )}
      </div>
      {modalActive && (
        <div className="fixed top-0 bg-blue backdrop-blur-sm bg-opacity-30 z-50 w-full h-dvh overflow-hidden place-items-center touch-none overscroll-y-contain">
          <div className="h-full flex items-center scale-75 xl:scale-1">
            <EventCardModal
              event={modalOpen!}
              status={modalActive}
              onClose={closeModal}
            />
          </div>
        </div>
      )}
    </>
  );
}
