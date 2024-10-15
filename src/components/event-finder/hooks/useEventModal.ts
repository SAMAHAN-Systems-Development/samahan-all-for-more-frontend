import { useCallback, useState } from 'react';

import type { EventData } from '@/lib/types/eventData.type';

export const useEventModal = () => {
  const [modalActive, setModalActive] = useState<boolean>(false);
  const [modalOpen, setModalOpen] = useState<EventData>();

  const openModal = useCallback((event: EventData) => {
    setModalActive((prev) => !prev);
    setModalOpen(event);
  }, []);

  const handleModal = useCallback(
    (event: EventData) => {
      openModal(event);
      // eslint-disable-next-line no-console
      console.log('hi', event);
    },
    [openModal]
  );

  const closeModal = useCallback(() => {
    setModalActive((prev) => !prev);
  }, []);

  return { modalActive, modalOpen, openModal, handleModal, closeModal };
};
