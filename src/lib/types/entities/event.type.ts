import type { EventPoster } from '@/lib/types/entities/eventPoster.type';

export interface Event {
  id: number;
  name: string;
  description: string;
  registration_link: string;
  start_time: string;
  end_time: string;
  location_id: number;
  thumbnail_url?: string;
  location: {
    id: number;
    name: string;
    address: string;
  };
  posters: EventPoster;
  created_at: string;
  updated_at: string;
  deleted_at?: string;
}
