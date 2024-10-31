'use client';
import React, { useEffect, useRef, useState } from 'react';

import EventCardModal from '@/components/event-finder/event-card/eventCardModal';
import EventsSection from '@/components/event-finder/EventsSection';
import { useEventModal } from '@/components/event-finder/hooks/useEventModal';
import { Banner } from '@/components/ui/banner/Banner';
import Button from '@/components/ui/Button';
import { useEvents } from '@/lib/queries/eventQueries';
import type { Event } from '@/lib/types/entities/event.type';
import Link from 'next/link';

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
    if (nextPage && nextPage.length > 0) {
      setUpcomingEvents((prev) => [...prev, ...nextPage]);
      setNext(true);
      setPageNumber((prev) => prev + 1);
    } else {
      setNext(false);
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

  const { handleModal, modalOpen, modalActive, closeModal, ref } =
    useEventModal();

  const samahanEmail = 'samahan@addu.edu.ph';
  const ccEmail = 'armedida@addu.edu.ph';
  const mailTo = `mailto:${samahanEmail}?cc=${ccEmail}`;

  return (
    <>
      <Banner
        image={'/images/addu-roxas-front.png'}
        imageAlt={'SAMAHAN Members'}
        subtitle={'SAMAHAN'}
        title={'EVENT FINDER'}
      />

      <div className="pt-20">
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
          <div className="mx-auto w-fit mb-20">
            <Button text="Load More" onClick={handleNextUpcoming} />
          </div>
        )}
      </div>
      <section className="pb-20 px-10 text-blue w-full lg:w-3/5 flex flex-col items-center mx-auto text-center gap-6">
        <p>
          For the clubs, departments, and organizations that would like to
          promote and disseminate their upcoming events through the Event
          Finder, kindly fill out our Google Form
        </p>
        <p className="lg:w-3/4">
          To request a university-wide email blast for the dissemination of
          event information, send a letter of request to{' '}
          <Link className="underline" href={mailTo}>
            {samahanEmail}
          </Link>
          ; cc’ed to{' '}
          <Link className="underline" href={mailTo}>
            {ccEmail}
          </Link>
        </p>
        <Link href={'https://forms.gle/WZ1LUJd22ZTVForA7'}>
          <Button text="ACCESS THE FORMS HERE" />
        </Link>
      </section>

      {modalActive && (
        <div className="fixed top-0 bg-blue backdrop-blur-sm bg-opacity-30 z-50 w-full h-dvh overflow-hidden place-items-center touch-none overscroll-y-contain">
          <div
            ref={ref}
            className="h-full flex items-center scale-75 xl:scale-1"
          >
            <EventCardModal event={modalOpen!} onClose={closeModal} />
          </div>
        </div>
      )}
    </>
  );
}
