export interface CreateEventData {
  name: string;
  description: string;
  registration_link: string;
  start_time: Date;
  end_time: Date;
  location_id: number;
  thumbnail: File | null;
}
