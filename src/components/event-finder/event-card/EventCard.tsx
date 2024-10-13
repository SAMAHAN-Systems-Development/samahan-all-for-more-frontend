import React, { useMemo } from 'react';
import { FaRegCalendarAlt } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { MdPeople } from 'react-icons/md';
import Image from 'next/image';

import placeholder from 'public/images/UniversitySealLogo.png';

import { EventCardField } from '@/components/event-finder/event-card/EventCardField';
import { EventCardTag } from '@/components/event-finder/event-card/EventCardTag';
import Button from '@/components/ui/Button';
import type { EventData } from '@/lib/types/eventData.type';

interface EventCardProps extends React.HTMLAttributes<HTMLDivElement> {
  event: EventData;
  href: string;
  imageHeight?: number;
  imageWidth?: number;
  target?: string;
  upcoming?: boolean;
}

export const EventCard: React.FC<EventCardProps> = ({
  href,
  event,
  target = '_blank',
  upcoming,
}) => {
  const { start_time, name, posters } = event;
  const image_url = posters.length ? posters[0].image_url : placeholder;

  function formatDate(date: Date): string {
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };

    return date.toLocaleDateString('en-US', options);
  }
  const startDate = useMemo(
    () => formatDate(new Date(start_time)),
    [start_time]
  );
  return (
    <div className=" w-[31.25rem] h-[27.8125rem]  border-blue rounded-3xl border-2 flex flex-col overflow-hidden ">
      <div className="w-full h-96  relative border">
        <Image
          fill
          src={image_url}
          alt="event poster"
          sizes="(max-width: 640px) 100vw, (max-width: 320px) 50vw, 33vw"
          className={`object-cover bg-blue ${upcoming && 'grayscale'}`}
        />
      </div>
      <div className=" p-5 py-1 inline-flex flex-col gap-[0.625rem] justify-around border-t-2 border-blue h-full ">
        <div>
          <div className=" flex flex-wrap justify-start items-start gap-1 mb-1">
            <EventCardTag
              icon={<MdPeople size={20} className="rounded-full" />}
              title="Open to all AdDU students"
            />
          </div>
          <strong className="text-blue text-[25px] ">{name}</strong>
          <div className="flex flex-col gap-[0.625rem] mt-1">
            <EventCardField icon={<FaRegCalendarAlt />} title={startDate} />
            <EventCardField
              icon={<FaLocationDot />}
              title={event.location.name}
            />
          </div>
        </div>
        <a
          href={href}
          target={target}
          className=" w-full flex flex-col justify-stretch items-stretch "
        >
          <Button fontSize={'sm'} text="View Details" />
        </a>
      </div>
    </div>
  );
};
