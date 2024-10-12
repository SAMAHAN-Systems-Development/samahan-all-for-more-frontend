// currentPage: 1
// data: (10) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
// totalEvents: 50
// totalPages: 5

import type { EventData } from '@/lib/types/eventData.type';

// Type used for the return of ReactQuery or UseQuery

export interface EventsResponse {
  currentPage: number;
  data: EventData[];
  totalEvents: number;
  totalPages: number;
}
