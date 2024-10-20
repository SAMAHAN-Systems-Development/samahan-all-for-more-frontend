import { _get } from '@/lib/client/client';
import type { EventLocation } from '@/lib/types/eventLocation.type';

export const getLocations = async (): Promise<EventLocation[]> => {
  const response = await _get<EventLocation[]>('/api/locations');
  return response.data;
};

export const getLocationById = async (id: number): Promise<EventLocation> => {
  const response = await _get<EventLocation>(`/api/locations/${id}`);
  return response.data;
};
