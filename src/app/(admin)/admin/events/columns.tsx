'use client';

import { ColumnDef } from '@tanstack/react-table';
import { MoreHorizontal } from 'lucide-react';

import { Button } from '@/components/shadcn-ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/shadcn-ui/dropdown-menu';
import DataTableHeader from '../../_components/DataTableHeader';
import { Event } from '@/lib/types/entities/event.type';
import { toast } from 'sonner';

type EventsColumnProps = {
  onUpdate: (event: Event) => void;
  onDelete: (event: Event) => void;
};

enum EventTableHeaders {
  EventName = 'Event Name',
  StartDate = 'Start Date',
  EndDate = 'End Date',
  LocationName = 'Location Name',
  LocationAddress = 'Location Address',
}

export const eventColumns = ({
  onUpdate,
  onDelete,
}: EventsColumnProps): ColumnDef<Event>[] => [
  {
    accessorKey: EventTableHeaders.EventName,
    header: () => <DataTableHeader label={EventTableHeaders.EventName} />,
    cell: ({ row }) => {
      const event = row.original;
      const eventName = event.name;

      return <div className="font-medium">{eventName}</div>;
    },
  },
  {
    accessorKey: EventTableHeaders.StartDate,
    header: () => <DataTableHeader label={EventTableHeaders.StartDate} />,
    cell: ({ row }) => {
      const event = row.original;
      const eventStartDate = event.start_time;

      return <div className="font-medium">{eventStartDate}</div>;
    },
  },
  {
    accessorKey: EventTableHeaders.EndDate,
    header: () => <DataTableHeader label={EventTableHeaders.EventName} />,
    cell: ({ row }) => {
      const event = row.original;
      const eventEndDate = event.name;

      return <div className="font-medium">{eventEndDate}</div>;
    },
  },
  {
    accessorKey: EventTableHeaders.LocationName,
    header: () => <DataTableHeader label={EventTableHeaders.LocationName} />,
    cell: ({ row }) => {
      const event = row.original;
      const eventLocationName = event.location.name;

      return <div className="font-medium">{eventLocationName}</div>;
    },
  },
  {
    accessorKey: EventTableHeaders.LocationAddress,
    header: () => <DataTableHeader label={EventTableHeaders.LocationAddress} />,
    cell: ({ row }) => {
      const event = row.original;
      const eventLocationAddress = event.location.address;

      return <div className="font-medium">{eventLocationAddress}</div>;
    },
  },
  {
    id: 'actions',
    cell: ({ row }) => {
      const event = row.original;
      const registrationLink = event.registration_link;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => {
                toast('Registration link copied to clipboard');
                navigator.clipboard.writeText(registrationLink);
              }}
            >
              Copy Registration Link
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => onUpdate(event)}>
              Update Event
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => onDelete(event)}>
              Delete Event
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
