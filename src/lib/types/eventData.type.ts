import type { EventLocation } from '@/lib/types/eventLocation.type';
import type { EventPoster } from '@/lib/types/eventPoster.type';

export interface EventData {
  end_time: string;
  location: EventLocation;
  name: string;
  posters: EventPoster[];
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
