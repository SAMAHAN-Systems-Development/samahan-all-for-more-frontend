import { Event } from '@/lib/types/entities/event.type';
import React from 'react';

type DeleteDialogProps = {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  entity: Bulletin | Event | null;
  handleDelete: (entity: Bulletin | Event) => void;
};

const DeleteDialog = ({ isOpen, setIsOpen, entity }: DeleteDialogProps) => {
  const onSubmit = () => {};
  return (
    <div>
      <div>Test</div>
    </div>
  );
};

export default DeleteDialog;
