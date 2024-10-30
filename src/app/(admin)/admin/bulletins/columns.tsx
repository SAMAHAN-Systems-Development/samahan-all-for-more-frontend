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

type BulletinColumnProps = {
  onUpdate: (bulletin: Bulletin) => void;
  onDelete: (bulletin: Bulletin) => void;
};

enum BulletinTableHeaders {
  BulletinTitle = 'Bulletin Title',
  BulletinPublishDate = 'Publish Date',
  BulletinAuthor = 'Author',
  BulletinCategory = 'Category',
}

export const bulletinColumns = ({
  onUpdate,
  onDelete,
}: BulletinColumnProps): ColumnDef<Bulletin>[] => [
  {
    accessorKey: BulletinTableHeaders.BulletinTitle,
    header: () => (
      <DataTableHeader label={BulletinTableHeaders.BulletinTitle} />
    ),
    cell: ({ row }) => {
      const bulletin = row.original;
      const bulletinTitle = bulletin.title;

      return <div className="font-medium">{bulletinTitle}</div>;
    },
  },
  {
    accessorKey: BulletinTableHeaders.BulletinPublishDate,
    header: () => (
      <DataTableHeader label={BulletinTableHeaders.BulletinPublishDate} />
    ),
    cell: ({ row }) => {
      const bulletin = row.original;
      const bulletinPublishDate = bulletin.published_at
        ? new Date(bulletin.published_at).toISOString().split('T')[0]
        : 'N/A';

      return <div className="font-medium">{bulletinPublishDate}</div>;
    },
  },
  {
    accessorKey: BulletinTableHeaders.BulletinAuthor,
    header: () => (
      <DataTableHeader label={BulletinTableHeaders.BulletinAuthor} />
    ),
    cell: ({ row }) => {
      const bulletin = row.original;
      const bulletinAuthor = bulletin.author;

      return <div className="font-medium">{bulletinAuthor}</div>;
    },
  },
  {
    accessorKey: BulletinTableHeaders.BulletinCategory,
    header: () => (
      <DataTableHeader label={BulletinTableHeaders.BulletinCategory} />
    ),
    cell: ({ row }) => {
      const bulletin = row.original;
      const bulletinCategory = bulletin.category.name;

      return <div className="font-medium">{bulletinCategory}</div>;
    },
  },

  {
    id: 'actions',
    cell: ({ row }) => {
      const bulletin = row.original;

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
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => onUpdate(bulletin)}>
              Update Bulletin
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => onDelete(bulletin)}>
              Delete Bulletin
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
