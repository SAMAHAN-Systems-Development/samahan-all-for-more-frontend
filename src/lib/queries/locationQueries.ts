import type { UseQueryResult } from '@tanstack/react-query';
import { useQuery } from '@tanstack/react-query';

import { getLocationById, getLocations } from '@/lib/services/locationService';

export const useLocations = (): UseQueryResult => {
  return useQuery({
    queryKey: ['location'],
    queryFn: () => getLocations(),
  });
};

export const useLocation = (id: number): UseQueryResult => {
  return useQuery({
    queryKey: ['location', id],
    queryFn: () => getLocationById(id),
  });
};
