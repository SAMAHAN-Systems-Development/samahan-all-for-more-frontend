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
