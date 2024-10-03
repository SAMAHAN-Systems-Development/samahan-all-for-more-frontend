// THIS IS JUST SAMPLE CODE. USE THIS AS GUIDE TO CREATE YOUR OWN SERVICE FUNCTIONS
// ALSO MAKE SURE TO DEFINE TYPES INSIDE LIB/TYPES FOLDER
// NAMING CONVENTION FOR TYPES: entityName.type.ts

// import { _delete, _get, _post, _put } from "src/lib/client/client";

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
