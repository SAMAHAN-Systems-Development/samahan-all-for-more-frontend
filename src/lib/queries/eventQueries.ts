// To use: go to page where you want to use the query and import the query function
// Then: use the query function in the component
// Sample: const { data: events, isLoading, error } = useEvents();

// // Query all events
// export const useEvents = () => {
//     return useQuery({
//       queryKey: ['events'],
//       queryFn: getEvents(),
//     });
//   };

//   // Query a single event by ID
//   export const useEvent = (id: string) => {
//     return useQuery({
//       queryKey: ['event', id],
//       queryFn: () => getEventById(id),
//     });
//   };
