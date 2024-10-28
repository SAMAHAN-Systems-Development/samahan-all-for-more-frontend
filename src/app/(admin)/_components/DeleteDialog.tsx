import { Event } from '@/lib/types/entities/event.type';
import React from 'react';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/shadcn-ui/dialog';
import { Button } from '@/components/shadcn-ui/button';
import {
  ResponsiveModal,
  ResponsiveModalContent,
  ResponsiveModalDescription,
  ResponsiveModalFooter,
  ResponsiveModalHeader,
  ResponsiveModalTitle,
} from '@/components/shadcn-ui/responsive-modal';

type DeleteDialogProps = {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  entity: Bulletin | Event | null;
  handleDelete: (entity: Bulletin | Event) => void;
};

const DeleteDialog = ({
  isOpen,
  setIsOpen,
  handleDelete,
  entity,
}: DeleteDialogProps) => {
  return (
    <ResponsiveModal open={isOpen} onOpenChange={setIsOpen}>
      <ResponsiveModalContent>
        <ResponsiveModalHeader>
          <ResponsiveModalTitle>Are you absolutely sure?</ResponsiveModalTitle>
          <ResponsiveModalDescription>
            This action cannot be undone. This will permanently delete the
            client and remove the data from our servers.
          </ResponsiveModalDescription>
        </ResponsiveModalHeader>
        <ResponsiveModalFooter>
          {entity && (
            <Button variant="destructive" onClick={() => handleDelete(entity)}>
              Delete
            </Button>
          )}

          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
        </ResponsiveModalFooter>
      </ResponsiveModalContent>
    </ResponsiveModal>
  );
};

export default DeleteDialog;
