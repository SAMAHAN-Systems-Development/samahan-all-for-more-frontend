import { useQuery } from '@tanstack/react-query';

import { getBulletin } from '@/lib/services/bulletinService';
import type { Bulletin } from '@/lib/types/bulletin.type';

export const useBulletins = () => {
  return useQuery<Bulletin[], Error>({
    queryKey: ['bulletins'],
    queryFn: getBulletin,
  });
};
