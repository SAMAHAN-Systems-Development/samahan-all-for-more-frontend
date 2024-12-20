'use client';
import React, { useState } from 'react';
import Image from 'next/image';

import EventCardModal from '@/components/event-finder/event-card/eventCardModal';
import { useEvents } from '@/lib/queries/eventQueries';
import { Event } from '@/lib/types/entities/event.type';

const EventsList = () => {
  const { data, isLoading } = useEvents({});
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = (event: Event) => {
    setSelectedEvent(event);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedEvent(null);
    setModalOpen(false);
  };

  if (isLoading) {
    return <div className="text-center text-gray-500">Loading events...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Upcoming Events</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data?.map((event: Event) => (
          <div
            key={event.id}
            className="bg-white shadow-lg rounded-lg p-6 cursor-pointer"
            onClick={() => handleOpenModal(event)}
            onKeyDown={(keyEvent) =>
              keyEvent.key === 'Enter' && handleOpenModal(event)
            }
            role="button"
            tabIndex={0}
            aria-label={`Open modal for ${event.name}`}
          >
            <h2 className="text-xl font-semibold mb-2">{event.name}</h2>
            <p className="text-gray-600 mb-2">{event.description}</p>
            <p className="text-gray-500">
              {event.start_time} - {event.end_time}
            </p>
            {event.posters.length > 0 && (
              <div className="mt-4">
                <Image
                  src={event.posters.image_url}
                  alt={event.name}
                  className="rounded-lg w-full h-48 object-cover"
                  width={500}
                  height={200}
                />
              </div>
            )}
            <a
              href={event.registration_link}
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-4 text-blue-500 hover:underline"
            >
              Register for this event
            </a>
          </div>
        ))}
      </div>

      {/* Modal for displaying selected event details */}
      {modalOpen && selectedEvent && (
        <EventCardModal
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
          event={selectedEvent}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default EventsList;
