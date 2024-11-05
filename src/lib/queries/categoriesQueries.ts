import { useQuery } from '@tanstack/react-query';

import { getCategories } from '@/lib/services/categoriesService';
import type { Categories } from '@/lib/types/categories.type';

export const useCategories = () => {
  return useQuery<Categories[], Error>({
    queryKey: ['categories'],
    queryFn: getCategories,
  });
};
