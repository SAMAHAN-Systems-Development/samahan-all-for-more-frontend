'use client';
import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { BsCalendarWeek } from 'react-icons/bs';
import { MdLocationOn } from 'react-icons/md';
import { PiUsersFill } from 'react-icons/pi';
import Image from 'next/image';
import Link from 'next/link';

import Button from '@/components/ui/Button';
import type { EventData } from '@/lib/types/eventData.type';

interface EventCardModalProps extends React.HTMLAttributes<HTMLDivElement> {
  event: EventData;
  onClose: () => void;
}

const EventCardModal = ({ event, onClose }: EventCardModalProps) => {
  const {
    start_time,
    name,
    posters,
    end_time,
    description,
    registration_link,
    location,
  } = event;
  const { image_url } = posters;

  return (
    <div className="relative shadow-2xl w-full max-w-[90%] lg:max-w-[1000px] border-blue border-solid border-[2px] rounded-3xl overflow-hidden mx-auto bg-white">
      {/* Header with Cover Image */}
      <div className="relative h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px]">
        <Image
          src={image_url}
          alt={name}
          width={1100}
          height={350}
          className="w-full h-full object-cover"
        />

        {/* Close button inside modal */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white text-3xl p-2"
        >
          <AiOutlineClose />
        </button>
      </div>

      {/* Main Content */}
      <div className="p-4 sm:p-6 text-blue">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-5 sm:mb-4">
          {name}
        </h2>
        <div className="flex flex-col sm:flex-row gap-y-4 gap-x-5">
          <span className="flex items-center gap-x-2">
            <PiUsersFill className="text-xl sm:text-2xl md:text-3xl lg:text-2xl" />
            <span className="text-sm sm:text-base">
              Open to all AdDU Students
            </span>
          </span>

          <span className="flex items-center gap-x-2">
            <BsCalendarWeek className="text-xl sm:text-2xl md:text-3xl lg:text-2xl" />
            <span className="text-sm sm:text-base">
              {start_time} - <span>{end_time}</span>
            </span>
          </span>

          <span className="flex items-center gap-x-2">
            <MdLocationOn className="text-xl sm:text-2xl md:text-3xl lg:text-2xl" />
            <span className="text-sm sm:text-base">{location.name}</span>
          </span>
        </div>
        <p className="text-sm sm:text-base mt-5">{description}</p>
      </div>

      {/* Footer Content */}
      <div className="flex flex-col p-4 sm:p-6 text-blue italic">
        <span className="text-sm sm:text-base">Dept. Name</span>
        <span className="text-sm sm:text-base">deptname@addu.edu.ph</span>
        <Link href={registration_link} className="mt-6 sm:mt-8">
          <Button size={'wide'} text="Register Now" />
        </Link>
      </div>
    </div>
  );
};

export default EventCardModal;
