import { _get } from '@/lib/client/client';

export const getLocations = async (): Promise<Location[]> => {
  const response = await _get<Location[]>('/api/locations');
  return response.data;
};
