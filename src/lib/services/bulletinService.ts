import { _get } from '@/lib/client/client';
import type { Bulletin } from '@/lib/types/bulletin.type';

export const getBulletin = async (): Promise<Bulletin[]> => {
  const response = await _get<Bulletin[]>('/api/bulletins');
  return response.data;
};
