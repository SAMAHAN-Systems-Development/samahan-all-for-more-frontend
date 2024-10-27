import type { UseQueryResult } from '@tanstack/react-query';
import { useQuery } from '@tanstack/react-query';
import { getLocations } from '@/lib/services/locationService';
import { Location } from '../types/entities/location.type';

import { Event } from '@/lib/types/entities/event.type';

export const useGetLocations = (): UseQueryResult<Location[], Error> => {
  return useQuery({
    queryKey: ['locations'],
    queryFn: () => getLocations(),
  });
};
