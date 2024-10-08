import type { EventPoster } from '@/lib/types/eventPoster.type';

export interface EventData {
  name: string;
  posters: EventPoster;
  // Using a string for time becasue when I was using react query, it returned a string instead of date.
  start_time: string;
}

// created_at
// deleted_at
// description
// end_time
// id
// location
// location_id
// name
// posters
// registration_link
// start_time
// updated_at
