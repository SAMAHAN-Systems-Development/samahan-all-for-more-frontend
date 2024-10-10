import type { Key } from 'react';

import type { EventPoster } from '@/lib/types/eventPoster.type';

export interface EventData {
  description: string;
  end_time: string;
  id: Key | null | undefined;
  location_id: string;
  name: string;
  posters: EventPoster;
  registration_link: string;
  start_time: string;
}
