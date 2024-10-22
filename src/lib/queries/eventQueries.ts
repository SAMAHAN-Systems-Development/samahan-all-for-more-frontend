// To use: go to page where you want to use the query and import the query function
// Then: use the query function in the component
// Sample: const { data: events, isLoading, error } = useEvents();

import type { UseQueryResult } from '@tanstack/react-query';
import { useQuery } from '@tanstack/react-query';
import { getEvents } from '@/lib/services/eventService';
import { Event } from '../types/entities/event.type';
import { GetEventDto } from '../types/dto/getEventsData.type';

export const useEvents = (
  getEventData: GetEventDto
): UseQueryResult<Event[], Error> => {
  return useQuery({
    queryKey: ['events', { ...getEventData }],
    queryFn: () => getEvents(getEventData),
  });
};
