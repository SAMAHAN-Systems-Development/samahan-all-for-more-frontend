'use client';
import React, { useState } from 'react';
import Image from 'next/image';

import EventCardModal from '@/components/event-card/eventCardModal';
import { useEvents } from '@/lib/queries/eventQueries';
import type { EventData } from '@/lib/types/eventData.type';

const EventsList = () => {
  const { data, isLoading, isError, error } = useEvents();
  const [selectedEvent, setSelectedEvent] = useState<EventData | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = (event: EventData) => {
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

  if (isError) {
    return (
      <div className="text-center text-red-500">Error: {error.message}</div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Upcoming Events</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data?.data.map((event: EventData) => (
          <div
            key={event.id}
            className="bg-white shadow-lg rounded-lg p-6 cursor-pointer"
            onClick={() => handleOpenModal(event)}
            onKeyDown={(keyEvent) =>
              keyEvent.key === 'Enter' && handleOpenModal(event)
            } // Renamed 'e' to 'keyEvent'
            role="button"
            tabIndex={0}
            aria-label={`Open modal for ${event.name}`} // Added aria-label for better accessibility
          >
            <h2 className="text-xl font-semibold mb-2">{event.name}</h2>
            <p className="text-gray-600 mb-2">{event.description}</p>
            <p className="text-gray-500">
              {event.start_time} - {event.end_time}
            </p>
            {event.posters.length > 0 && (
              <div className="mt-4">
                <Image
                  src={event.posters.image_url} // Accessing the first poster correctly
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
          event={selectedEvent}
          location={{ name: selectedEvent.location_id }}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default EventsList;
