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
import type { EventLocation } from '@/lib/types/eventLocation.type';

interface EventCardModalProps extends React.HTMLAttributes<HTMLDivElement> {
  event: EventData;
  location: EventLocation;
  onClose: () => void; // Add onClose prop here
}

const EventCardModal = ({
  location,
  event,
  onClose, // Destructure onClose from props
}: EventCardModalProps) => {
  const {
    start_time,
    name,
    posters,
    end_time,
    description,
    registration_link,
  } = event;
  const { image_url } = posters;

  return (
    <div className="relative shadow-2xl w-full max-w-[900px] rounded-3xl overflow-hidden mx-auto bg-white">
      {/* Header with Cover Image */}
      <div className="relative h-[400px] sm:h-[300px] md:h-[400px]">
        <Image
          src={image_url}
          alt={name}
          className="w-full h-full object-cover"
        />

        {/* Close button inside modal */}
        <button
          onClick={onClose} // Call onClose when button is clicked
          className="absolute top-4 right-4 text-black text-3xl p-2"
        >
          <AiOutlineClose />
        </button>
      </div>

      {/* Main Content */}
      <div className="p-6 text-blue mb-24">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">{name}</h2>
        <div className="flex flex-row">
          <PiUsersFill /> <span>open to all AdDU Students</span>
          <BsCalendarWeek />
          <span>{start_time}</span>
          <span>{end_time}</span>
          <MdLocationOn />
          <span>{location.name}</span>
        </div>
        <p className="mx-6 text-sm sm:text-base">{description}</p>
      </div>

      <div className="flex flex-col p-6 text-blue italic">
        <span className="">Dept. Name</span>
        <span>deptname@addu.edu.ph</span>
        <Link href={registration_link}>
          <Button fontSize={'lg'} text="Register Now" />
        </Link>
      </div>
    </div>
  );
};

export default EventCardModal;
