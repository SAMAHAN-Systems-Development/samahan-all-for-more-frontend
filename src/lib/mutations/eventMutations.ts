// To use: go to page where you want to use the mutation and import the mutation function
// Then: use the mutation function in the component
// Sample: const { mutate: createEvent, isLoading, error } = useCreateEvent();

// // Mutation for creating an event

// export const useCreateEvent = (
//   mutationOptions: UseMutationOptions<Event, Error, { eventData: CreateEventPayload }>
// ) =>
//   useMutation({
//     mutationFn: ({ eventData }) => createEvent(eventData),
//     ...mutationOptions,
//   });

// // Mutation for deleting an event

// export const useDeleteEvent = (
//   mutationOptions: UseMutationOptions<void, Error, { eventId: string }>
// ) =>
//   useMutation({
//     mutationFn: ({ eventId }) => deleteEvent(eventId),
//     ...mutationOptions,
//   });

// // Mutation for updating an event

// export const useUpdateEvent = (
//   mutationOptions: UseMutationOptions<Event, Error, { eventId: string; eventData: Partial<CreateEventPayload> }>
// ) =>
//   useMutation({
//     mutationFn: ({ eventId, eventData }) => updateEvent(eventId, eventData),
//     ...mutationOptions,
//   });
