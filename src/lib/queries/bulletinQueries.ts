<<<<<<< HEAD
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
=======
import { useQuery } from '@tanstack/react-query';

import { getBulletin } from '@/lib/services/bulletinService';
import type { Bulletin } from '@/lib/types/bulletin.type';

export const useBulletins = () => {
  return useQuery<Bulletin[], Error>({
    queryKey: ['bulletins'],
    queryFn: getBulletin,
>>>>>>> 154a827b227f5aaf458540aaf8c8a3d85fcf530e
  });
};
