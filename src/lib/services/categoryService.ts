import { _get } from '@/lib/client/client';

const getCategories = async (): Promise<Category[]> => {
  const response = await _get<Category[]>('/api/categories');
  return response.data;
};

export { getCategories };
