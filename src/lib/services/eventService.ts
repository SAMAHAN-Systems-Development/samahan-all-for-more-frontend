import { _delete, _get, _post, _put } from '@/lib/client/client';
import { CreateEventData } from '../types/dto/createEventData.type';
import { GetEventDto } from '../types/dto/getEventsData.type';

const getEvents = async (eventsFilters: GetEventDto): Promise<Event[]> => {
  const response = await _get<Event[], GetEventDto>(
    '/api/events',
    eventsFilters
  );
  return response.data;
};

const createEvent = async (event: CreateEventData): Promise<Event> => {
  const response = await _post<Event, CreateEventData>('/api/events', event);
  return response.data;
};

const updateEvent = async (
  id: string,
  event: Partial<CreateEventData>
): Promise<Event> => {
  const response = await _put<Event, Partial<CreateEventData>>(
    `/api/events/${id}`,
    event
  );
  return response.data;
};

const deleteEvent = async (id: string): Promise<void> => {
  await _delete<void>(`/api/events/${id}`);
};

export { getEvents, createEvent, updateEvent, deleteEvent };
