import React, { useMemo } from 'react';
import { FaRegCalendarAlt } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
// import { IoPeopleCircle } from 'react-icons/io5';
import { MdPeople } from 'react-icons/md';
import Image from 'next/image';

import { EventCardField } from '@/components/event-card/EventCardField';
import { EventCardTag } from '@/components/event-card/EventCardTag';
import Button from '@/components/ui/Button';
// import img from '/images/event-card-placeholder.png';

interface EventCardProps extends React.HTMLAttributes<HTMLDivElement> {
  href: string;
  imageAlt: string;
  imageSrc: string;
  location: string;
  name: string;
  startTime: Date;
  target: string;
}

export const EventCard: React.FC<EventCardProps> = ({
  name,
  startTime,
  imageSrc,
  imageAlt,
  location,
  href,
  target = '_blank',
}) => {
  function formatDate(date: Date): string {
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };

    return date.toLocaleDateString('en-US', options);
  }

  const startDate = useMemo(() => formatDate(startTime), [startTime]);

  return (
    <div className=" max-w-[31.25rem] max-h-[27.8125rem]  border-blue rounded-3xl border-2 flex flex-col overflow-hidden ">
      <Image
        height={0}
        width={0}
        src={imageSrc}
        alt={imageAlt}
        className=" w-full h-48 object-cover "
      />
      <div className=" p-5 inline-flex flex-col gap-[0.625rem] justify-around border-t-2 border-blue ">
        <div>
          <div className=" flex flex-wrap  justify-start items-start gap-1 ">
            <EventCardTag
              icon={<MdPeople className="rounded-full" />}
              title="Open to all AdDU students"
            />
          </div>
          <strong className="text-blue text-[25px] ">{name}</strong>
          <EventCardField icon={<FaRegCalendarAlt />} title={startDate} />
          <EventCardField icon={<FaLocationDot />} title={location} />
        </div>
        <a
          href={href}
          target={target}
          className=" w-full flex flex-col justify-stretch items-stretch"
        >
          <Button text="View Details" />
        </a>
      </div>
    </div>
  );
};
