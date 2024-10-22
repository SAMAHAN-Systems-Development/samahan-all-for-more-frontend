import type { UseQueryResult } from '@tanstack/react-query';
import { useQuery } from '@tanstack/react-query';

import { getCategories } from '@/lib/services/categoryService';

export const useGetCategories = (): UseQueryResult<Category[], Error> => {
  return useQuery({
    queryKey: ['categories'],
    queryFn: () => getCategories(),
  });
};
