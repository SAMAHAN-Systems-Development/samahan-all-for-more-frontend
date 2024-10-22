import type { EventLocation } from '@/lib/types/eventLocation.type';
import type { EventPoster } from '@/lib/types/eventPoster.type';

export interface EventData {
  description: string;
  end_time: string;
  id: number;
  location: EventLocation;
  location_id: string;
  name: string;
  posters: EventPoster[];
  registration_link: string;
  start_time: string;
}

