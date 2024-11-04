import { useCallback, useEffect, useRef, useState } from 'react';

import type { Event } from '@/lib/types/entities/event.type';

export const useEventModal = () => {
  const [modalActive, setModalActive] = useState<boolean>(false);
  const [modalOpen, setModalOpen] = useState<Event>();

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setModalActive(false);
      }
    };

    document.addEventListener('mouseup', handleClickOutside);
    document.addEventListener('touchend', handleClickOutside);

    return () => {
      document.removeEventListener('mouseup', handleClickOutside);
      document.removeEventListener('touchend', handleClickOutside);
    };
  }, [modalActive]);

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

  return { modalActive, modalOpen, openModal, handleModal, closeModal, ref };
};
