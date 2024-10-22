/* eslint-disable no-restricted-imports */
/* eslint-disable @typescript-eslint/consistent-type-imports */
import type { UseQueryResult } from '@tanstack/react-query';
import { useQuery } from '@tanstack/react-query';

import { Location } from '../types/entities/location.type';

import { getLocations } from '@/lib/services/locationService';

export const useGetLocations = (): UseQueryResult<Location[], Error> => {
  return useQuery({
    queryKey: ['locations'],
    queryFn: () => getLocations(),
  });
};
