import type { UseQueryResult } from '@tanstack/react-query';
import { useQuery } from '@tanstack/react-query';

import { getEventById, getEvents } from '@/lib/services/eventService';
import type { EventData } from '@/lib/types/eventData.type';
import type { EventsResponse } from '@/lib/types/eventsResponse.type';

// Query all events
export const useEvents = (): UseQueryResult<EventsResponse, Error> => {
  return useQuery({
    queryKey: ['events'],
    queryFn: () => getEvents(),
  });
};

// Query a single event by ID
export const useEvent = (id: number): UseQueryResult<EventData, Error> => {
  return useQuery({
    queryKey: ['event', id],
    queryFn: () => getEventById(id),
  });
};
