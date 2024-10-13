import { _get } from '@/lib/client/client';
import type { EventData } from '@/lib/types/eventData.type';
import type { EventsResponse } from '@/lib/types/eventsResponse.type';

export const getEvents = async (): Promise<EventsResponse> => {
  const response = await _get<EventsResponse>('/api/events');
  return response.data;
};

export const getEventById = async (id: number): Promise<EventData> => {
  const response = await _get<EventData>(`/api/events/${id}`);
  return response.data;
};
