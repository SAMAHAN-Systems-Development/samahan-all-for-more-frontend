/* eslint-disable no-restricted-imports */
/* eslint-disable @typescript-eslint/consistent-type-imports */
import type { UseQueryResult } from '@tanstack/react-query';
import { useQuery } from '@tanstack/react-query';

import { GetBulletinDto } from '../types/dto/getBulletinData.type';

import { getBulletins } from '@/lib/services/bulletinService';

export const useGetBulletins = (
  getBulletinData: GetBulletinDto
): UseQueryResult<Bulletin[], Error> => {
  return useQuery({
    queryKey: ['bulletins', { ...getBulletinData }],
    queryFn: () => getBulletins(getBulletinData),
  });
};
