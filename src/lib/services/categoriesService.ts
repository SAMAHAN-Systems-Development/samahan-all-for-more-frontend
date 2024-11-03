import { _get } from '@/lib/client/client';
import type { Categories } from '@/lib/types/categories.type';

export const getCategories = async (): Promise<Categories[]> => {
  const response = await _get<Categories[]>('/api/categories');
  return response.data;
};
