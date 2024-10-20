import React, { useMemo } from 'react';
import { FaRegCalendarAlt } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
// import { IoPeopleCircle } from 'react-icons/io5';
import { MdPeople } from 'react-icons/md';
import Image from 'next/image';

import { EventCardField } from '@/components/event-card/EventCardField';
import { EventCardTag } from '@/components/event-card/EventCardTag';
import Button from '@/components/ui/Button';
import { Event } from '@/lib/types/entities/event.type';

// interface EventCardProps extends React.HTMLAttributes<HTMLDivElement> {
//   height: number;
//   href: string;
//   imageAlt: string;
//   imageSrc: string;
//   location: string;
//   name: string;
//   startTime: Date;
//   target: string;
//   width: number;
// }

interface EventCardProps extends React.HTMLAttributes<HTMLDivElement> {
  event: Event;
  href: string;
  imageHeight: number;
  imageWidth: number;
  location: { name: string };
  target: string;
}

export const EventCard: React.FC<EventCardProps> = ({
  location,
  href,
  event,
  imageWidth,
  imageHeight,
  target = '_blank',
}) => {
  const { start_time, name, posters } = event;
  const { image_url } = posters;

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
      <Image
        height={imageHeight}
        width={imageWidth}
        src={image_url}
        alt={'Event Card Image'}
        className=" w-full h-44 object-cover "
      />
      <div className=" p-5 inline-flex flex-col gap-[0.625rem] justify-around border-t-2 border-blue h-full ">
        <div>
          <div className=" flex flex-wrap justify-start items-start gap-1 ">
            <EventCardTag
              icon={<MdPeople size={20} className="rounded-full" />}
              title="Open to all AdDU students"
            />
          </div>
          <strong className="text-blue text-[25px] ">{name}</strong>
          <div className="flex flex-col gap-[0.625rem] ">
            <EventCardField icon={<FaRegCalendarAlt />} title={startDate} />
            <EventCardField icon={<FaLocationDot />} title={location.name} />
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
