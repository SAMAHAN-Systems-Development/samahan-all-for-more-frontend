'use client';
import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { BsCalendarWeek } from 'react-icons/bs';
import { MdLocationOn } from 'react-icons/md';
import { PiUsersFill } from 'react-icons/pi';
import Image from 'next/image';
import Link from 'next/link';

import placeholder from 'public/images/UniversitySealLogo.png';

import Button from '@/components/ui/Button';
import { Event } from '@/lib/types/entities/event.type';

interface EventCardModalProps extends React.HTMLAttributes<HTMLDivElement> {
  event: Event;
  onClose: () => void;
  modalRef: React.RefObject<HTMLDivElement>;
}

const EventCardModal = ({ event, onClose, modalRef }: EventCardModalProps) => {
  const {
    start_time,
    name,
    thumbnail,
    end_time,
    description,
    registration_link,
    location,
    department_name,
    email,
  } = event;

  const image_url = thumbnail ?? placeholder;

  const formatDate = (date: string) => {
    const toDate = new Date(date);
    const day = toDate.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: '2-digit',
    });
    const time = toDate.toLocaleString('en-US', {
      hour12: true,
      hour: '2-digit',
      minute: '2-digit',
    });

    return `${day} ${time}`;
  };

  return (
    <div
      ref={modalRef}
      className={`relative shadow-2xl w-full max-w-[90%] lg:max-w-[1000px] border-blue border-solid border-[2px] rounded-3xl overflow-hidden mx-auto bg-white`}
    >
      {/* Header with Cover Image */}
      <div className="relative h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px]">
        <Image
          src={image_url}
          alt={name}
          fill
          className="w-full h-full object-cover bg-blue"
        />

        {/* Close button inside modal */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white text-3xl p-2 mix-blend-exclusion"
        >
          <AiOutlineClose className="drop-shadow-md" />
        </button>
      </div>

      {/* Main Content */}
      <div className="p-4 sm:p-6 text-blue leading-none">
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
              {formatDate(start_time)} - <span>{formatDate(end_time)}</span>
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
      <div className="flex flex-col p-4 sm:p-6 text-blue italic text-sm sm:text-base ">
        <span className="font-bold">{department_name}</span>
        <span>{email}</span>
        <Link href={registration_link} className="mt-6 sm:mt-8">
          <Button size={'wide'} text="Register Now" />
        </Link>
      </div>
    </div>
  );
};

export default EventCardModal;
