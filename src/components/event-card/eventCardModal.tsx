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
    <div className="relative shadow-2xl w-full max-w-[1000px] border-blue border-solid border-[2px] rounded-3xl overflow-hidden mx-auto bg-white">
      {/* Header with Cover Image */}
      <div className="relative h-[300px] ">
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
      <div className="p-6 text-blue">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">{name}</h2>
        <div className="flex flex-row gap-x-5">
          <span className="flex flex-row gap-x-2 justify-center items-center">
            <PiUsersFill size={25} />
            open to all AdDU Students
          </span>

          <span className="flex flex-row gap-x-2 justify-center items-center">
            <BsCalendarWeek size={25} />
            {start_time} -<span>{end_time}</span>
          </span>
          <span className="flex flex-row justify-center items-center">
            <MdLocationOn size={25} />
            {location.name}
          </span>
        </div>
        <p className="text-base mt-3">{description}</p>
      </div>

      <div className="flex flex-col p-6 text-blue italic">
        <span className="">Dept. Name</span>
        <span>deptname@addu.edu.ph</span>
        <Link href={registration_link} className="mt-8">
          <Button size={'wide'} text="Register Now" />
        </Link>
      </div>
    </div>
  );
};

export default EventCardModal;
