import { _get } from '@/lib/client/client';
import type { EventCardModal } from '@/lib/types/eventModal.type';

export const getEventCardModal = async (): Promise<EventCardModal[]> => {
  const response = await _get<EventCardModal[]>('/api/EventCardModals');
  return response.data;
};

export const getPdfAttachmmentId = async (
  id: number
): Promise<EventCardModal[]> => {
  const response = await _get<EventCardModal[]>(`/api/events/${id}`);
  return response.data;
};
