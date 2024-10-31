import { useCallback, useState } from 'react';

import type { Event } from '@/lib/types/entities/event.type';

export const useEventModal = () => {
  const [modalActive, setModalActive] = useState<boolean>(false);
  const [modalOpen, setModalOpen] = useState<Event>();

  const openModal = useCallback((event: Event) => {
    setModalActive((prev) => !prev);
    setModalOpen(event);
  }, []);

  const handleModal = useCallback(
    (event: Event) => {
      openModal(event);
    },
    [openModal]
  );

  const closeModal = useCallback(() => {
    setModalActive((prev) => !prev);
  }, []);

  return { modalActive, modalOpen, openModal, handleModal, closeModal };
};
