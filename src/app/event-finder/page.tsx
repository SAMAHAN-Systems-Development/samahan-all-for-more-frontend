'use client';
import React, { useEffect, useState } from 'react';

import EventCardModal from '@/components/event-finder/event-card/eventCardModal';
import EventsSection from '@/components/event-finder/EventsSection';
import { useEventModal } from '@/components/event-finder/hooks/useEventModal';
import { Banner } from '@/components/ui/banner/Banner';
import Button from '@/components/ui/Button';
import { useEvents } from '@/lib/queries/eventQueries';
import type { Event } from '@/lib/types/entities/event.type';

type EventsSectionProps = {
  description: string;
  events: Event[];
  title: string;
  upcoming?: boolean;
};

export default function EventFinder() {
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [hasNext, setNext] = useState<boolean>(false);
  // const { data: events } = useEvents({});
  const [hasLoaded, setLoaded] = useState<boolean>(false);

  const { data: ongoingEvents } = useEvents({ status: 'Ongoing' });

  const { data: upcomingEvents } = useEvents({
    status: 'Upcoming',
    limit: 4,
    page: pageNumber,
  });

  const [allUpcomingEvents, setUpcomingEvents] = useState<Event[]>([]);

  // const [visibleUpcomingEvents, setVisibleUpcoming] = useState<number>(4);
  // const [eventsLoaded, setEventsLoaded] = useState<boolean>(false);

  // // pagination
  // // if no upcoming/ongoing events on page, next page
  // // if upcoming does go upto 4, next page

  const { data: nextPage } = useEvents({
    status: 'Upcoming',
    page: pageNumber + 1,
    limit: 4,
  });

  useEffect(() => {
    if (upcomingEvents == undefined || ongoingEvents == undefined) {
      setLoaded(false);
    } else {
      setLoaded(true);
      if (allUpcomingEvents.length == 0) {
        setUpcomingEvents(upcomingEvents);
      }
    }
  }, [upcomingEvents, ongoingEvents]);

  useEffect(() => {
    if (hasLoaded) {
      handleNextUpcoming();
    }
  }, [hasLoaded]);

  const handleNextUpcoming = () => {
    // console.log('HERE');
    if (nextPage && nextPage.length > 0) {
      setUpcomingEvents((prev) => [...prev, ...nextPage]);
      // console.log(allUpcomingEvents);
      setNext(true);
      // console.log('next true');
      setPageNumber((prev) => prev + 1);
    } else {
      setNext(false);
      // console.log('next false');
    }
  };

  const allData: EventsSectionProps[] = [
    {
      title: 'Ongoing Events',
      description:
        'Current activities happening now in SAMAHAN, where students can join and engage. Stay updated to participate!',
      events: ongoingEvents!,
      upcoming: false,
    },
    {
      title: 'Upcoming Events',
      description:
        ' Exciting events lined up for the future, mark your calendars and get ready for what’s ahead!',
      events: hasNext ? allUpcomingEvents.toSpliced(4, 4) : allUpcomingEvents,
      upcoming: true,
    },
  ];

  const { handleModal, modalOpen, modalActive, closeModal } = useEventModal();

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
            eventsLoaded={hasLoaded}
            key={data.title}
            upcoming={data.upcoming}
            handleModal={handleModal}
          />
        ))}

        {hasLoaded && hasNext && allUpcomingEvents.length % 4 == 0 && (
          <div className="mx-auto w-fit">
            <Button text="Load More" onClick={handleNextUpcoming} />
          </div>
        )}
      </div>
      {modalActive && (
        <div className="fixed top-0 bg-blue backdrop-blur-sm bg-opacity-30 z-50 w-full h-dvh overflow-hidden place-items-center touch-none overscroll-y-contain">
          <div className="h-full flex items-center scale-75 xl:scale-1">
            <EventCardModal
              event={modalOpen}
              status={modalActive}
              onClose={closeModal}
            />
          </div>
        </div>
      )}
    </>
  );
}
