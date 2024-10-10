import { useQuery } from '@tanstack/react-query';

import { getEventCardModal } from '@/lib/services/eventServiceModal';
import type { EventCardModal } from '@/lib/types/eventModal.type';

export const useBulletins = () => {
  return useQuery<EventCardModal[], Error>({
    queryKey: ['events'],
    queryFn: getEventCardModal,
  });
};
