import React, { useMemo } from 'react';
import { FaRegCalendarAlt } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { IoPeopleCircle } from 'react-icons/io5';
import Image from 'next/image';

import { EventCardField } from '@/components/event-card/EventCardField';
import { EventCardTag } from '@/components/event-card/EventCardTag';

interface EventCardProps extends React.HTMLAttributes<HTMLDivElement> {
  location: string;
  name: string;
  poster_images: string[];
  start_time: Date;
}

export const EventCard: React.FC<EventCardProps> = ({
  name,
  start_time,
  poster_images,
  location,
}) => {
  function formatDate(date: Date): string {
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };

    return date.toLocaleDateString('en-US', options);
  }

  const startDate = useMemo(() => formatDate(start_time), [start_time]);

  return (
    <div className=" border-blue flex flex-col ">
      <Image height={0} width={0} src={poster_images[0]} alt={''} />
      <div className=" p-5 flex flex-col">
        <EventCardTag
          icon={<IoPeopleCircle className=" text-blue " />}
          title="Open to all AdDU students"
        />
        <strong>{name}</strong>
        <EventCardField icon={<FaRegCalendarAlt />} title={startDate} />
        <EventCardField icon={<FaLocationDot />} title={location} />
      </div>
    </div>
  );
};
