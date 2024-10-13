import { _get } from '@/lib/client/client';
import type { EventData } from '@/lib/types/eventData.type';
import type { EventsResponse } from '@/lib/types/eventsResponse.type';

// const getEvents = async (): Promise<Event[]> => {
//   const response = await _get<Event[]>('/events');
//   return response.data;
// };

// const getEventById = async (id: string): Promise<Event> => {
//   const response = await _get<Event>(`/events/${id}`);
//   return response.data;
// };

// const createEvent = async (event: CreateEventPayload): Promise<Event> => {
//   const response = await _post<Event, CreateEventPayload>('/events', event);
//   return response.data;
// };

// const updateEvent = async (
//   id: string,
//   event: Partial<CreateEventPayload>
// ): Promise<Event> => {
//   const response = await _put<Event, Partial<CreateEventPayload>>(
//     `/events/${id}`,
//     event
//   );
//   return response.data;
// };

// const deleteEvent = async (id: string): Promise<void> => {
//   await _delete<void>(`/events/${id}`);
// };

// // Export service functions
// export { getEvents, getEventById, createEvent, updateEvent, deleteEvent };

// If dont work, ask for help
export const getEvents = async (
  page_number: number
): Promise<EventsResponse> => {
  const response = await _get<EventsResponse>(
    `/api/events?page=${page_number}`
  );
  return response.data;
};

export const getEventById = async (id: number): Promise<EventData> => {
  const response = await _get<EventData>(`/api/events/${id}`);
  return response.data;
};

export const getEventsByPage = async (
  page: number
): Promise<EventsResponse> => {
  const response = await _get<EventsResponse>(`/api/events?page=${page}`);
  return response.data;
};
