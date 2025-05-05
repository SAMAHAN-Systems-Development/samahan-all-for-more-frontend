'use client';

import React, { useEffect, useMemo, useState } from 'react';
import { EventDialogEnum } from '../../_constants/dialogs';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/shadcn-ui/card';
import { useEvents } from '@/lib/queries/eventQueries';
import {
  useCreateEvent,
  useDeleteEvent,
  useUpdateEvent,
} from '@/lib/mutations/eventMutations';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import { ColumnDef } from '@tanstack/react-table';
import { eventColumns } from './columns';
import DataTable from '../../_components/DataTable';
import EventDialog from '../../_components/EventDialog';
import DeleteDialog from '../../_components/DeleteDialog';
import { Button } from '@/components/shadcn-ui/button';
import { Event } from '@/lib/types/entities/event.type';
import { CreateEventData } from '@/lib/types/dto/createEventData.type';
import { PlusCircle } from 'lucide-react';
import { GetEventDto } from '@/lib/types/dto/getEventsData.type';
import { createClient } from 'supabase/client';
import { cookies } from 'next/headers';

const EventsPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeModal, setActiveModal] = useState<EventDialogEnum | null>();
  const [event, setEvent] = useState<Event | null>(null);
  const [filters, setFilters] = useState<GetEventDto>({} as GetEventDto);

  useEffect(() => {
    if (!isOpen) {
      setActiveModal(null);
    }
  }, [isOpen]);

  const supabase = createClient();
  const router = useRouter();

  useEffect(() => {
    const getSession = async () => {
      const { data: session, error } = await supabase.auth.getUser();
      if (!session || error) {
        router.push('/login');
      }
    };

    getSession();
  }, [supabase, router]);

  const {
    data: events,
    isLoading,
    refetch: refetchEvents,
  } = useEvents(filters);
  const { mutate: createEvent } = useCreateEvent({
    onSuccess: () => {
      toast.success('Event created successfully');
      refetchEvents();
      setIsOpen(false);
    },
    onError: () => {
      toast.error('Failed to create event');
      setIsOpen(false);
    },
  });

  const { mutate: updateEvent } = useUpdateEvent({
    onSuccess: () => {
      toast.success('Event updated successfully');
      setIsOpen(false);
      refetchEvents();
    },
    onError: () => {
      toast.error('Failed to update event');
      setIsOpen(false);
    },
  });

  const { mutate: deleteEvent } = useDeleteEvent({
    onSuccess: () => {
      toast.success('Event deleted successfully');
      refetchEvents();
      setIsOpen(false);
    },
    onError: () => {
      toast.error('Failed to delete event');
      setIsOpen(false);
    },
  });

  const onUpdate = (event: Event) => {
    setEvent(event);
    setActiveModal(EventDialogEnum.EDIT_EVENT_DIALOG);
    setIsOpen(true);
  };

  const onDelete = (event: Event) => {
    setEvent(event);
    setActiveModal(EventDialogEnum.DELETE_MODAL);
    setIsOpen(true);
  };

  const onCreate = () => {
    setActiveModal(EventDialogEnum.ADD_EVENT_DIALOG);
    setIsOpen(true);
  };

  const handleCreateEvent = (data: CreateEventData) => {
    createEvent({ eventData: data });
  };

  const handleUpdateEvent = (data: Partial<CreateEventData>) => {
    if (event) {
      updateEvent({ eventData: data, eventId: event.id.toString() });
    }
  };

  const handleDeleteEvent = () => {
    if (event) {
      deleteEvent({ eventId: event.id.toString() });
    }
  };

  const handleTabChange = (value: string) => {
    setFilters((prev) => ({ ...prev, status: value }));
  };

  const columns: ColumnDef<Event>[] = useMemo(
    () => eventColumns({ onDelete, onUpdate }),
    []
  );

  const tabOptions = ['All', 'Upcoming', 'Past', 'Ongoing'];

  const modals = {
    [EventDialogEnum.ADD_EVENT_DIALOG]: (
      <EventDialog
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        addEvent={handleCreateEvent}
      />
    ),
    [EventDialogEnum.EDIT_EVENT_DIALOG]: (
      <EventDialog
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        updateEvent={handleUpdateEvent}
        event={event}
      />
    ),
    [EventDialogEnum.DELETE_MODAL]: (
      <DeleteDialog
        entity={event}
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        handleDelete={handleDeleteEvent}
      />
    ),
  };

  return (
    <div className="mx-auto space-y-6">
      <Card className="p-4">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-2xl font-bold">Events Dashboard</CardTitle>
          <Button onClick={onCreate}>
            <PlusCircle className="mr-2 h-4 w-4" />
            Create Event
          </Button>
        </CardHeader>
        <CardContent>
          <DataTable
            columns={columns}
            data={events || []}
            isDataLoading={isLoading}
            enableCategoryFilter
            categoryFilter={handleTabChange}
            categoryOptions={tabOptions}
            rowId="id"
          />
        </CardContent>
      </Card>
      {activeModal && modals[activeModal]}
    </div>
  );
};

export default EventsPage;
