import type { UseQueryResult } from '@tanstack/react-query';
import { useQuery } from '@tanstack/react-query';
import { getBulletins } from '@/lib/services/bulletinService';
import { GetBulletinDto } from '../types/dto/getBulletinData.type';

export const useGetBulletins = (
  getBulletinData: GetBulletinDto
): UseQueryResult<Bulletin[], Error> => {
  return useQuery({
    queryKey: ['bulletins', { ...getBulletinData }],
    queryFn: () => getBulletins(getBulletinData),
  });
};
