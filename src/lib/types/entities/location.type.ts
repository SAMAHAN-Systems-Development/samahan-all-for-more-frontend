import { Event } from './event.type';

export interface Location {
  id: number;
  name: string;
  address: string;
  created_at: Date;
  updated_at: Date;
  events: Event[];
}
