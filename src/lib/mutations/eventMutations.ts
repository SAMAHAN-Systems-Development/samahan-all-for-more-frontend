import { useMutation, UseMutationOptions } from '@tanstack/react-query';
import {
  createEvent,
  deleteEvent,
  updateEvent,
} from '../services/eventService';
import { CreateEventData } from '../types/dto/createEventData.type';

// Not fully type safe because of the useMutationOptions type

export const useCreateEvent = (
  mutationOptions: UseMutationOptions<
    unknown,
    Error,
    { eventData: CreateEventData }
  >
) =>
  useMutation({
    mutationFn: ({ eventData }) => createEvent(eventData),
    ...mutationOptions,
  });

export const useDeleteEvent = (
  mutationOptions: UseMutationOptions<unknown, Error, { eventId: string }>
) =>
  useMutation({
    mutationFn: ({ eventId }) => deleteEvent(eventId),
    ...mutationOptions,
  });

export const useUpdateEvent = (
  mutationOptions: UseMutationOptions<
    unknown,
    Error,
    { eventId: string; eventData: Partial<CreateEventData> }
  >
) =>
  useMutation({
    mutationFn: ({ eventId, eventData }) => updateEvent(eventId, eventData),
    ...mutationOptions,
  });
