/* eslint-disable no-restricted-imports */
/* eslint-disable @typescript-eslint/consistent-type-imports */
import type { UseQueryResult } from '@tanstack/react-query';
import { useQuery } from '@tanstack/react-query';

import { GetEventDto } from '../types/dto/getEventsData.type';
import { Event } from '../types/entities/event.type';

import { getEvents } from '@/lib/services/eventService';

export const useEvents = (
  getEventData: GetEventDto
): UseQueryResult<Event[], Error> => {
  return useQuery({
    queryKey: ['events', { ...getEventData }],
    queryFn: () => getEvents(getEventData),
  });
};
