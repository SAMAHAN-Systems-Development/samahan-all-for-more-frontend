'use client';
/* eslint-disable */
import { useState } from 'react';

import type {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
} from '@tanstack/react-table';
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { Loader2, Search } from 'lucide-react';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/shadcn-ui/table';
import { Card } from '@/components/shadcn-ui/card';
import { Input } from '@/components/shadcn-ui/input';
import { Button } from '@/components/shadcn-ui/button';
import { Tabs, TabsList, TabsTrigger } from '@/components/shadcn-ui/tabs';

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  rowId: keyof TData;
  handleChangePage?: (page: number) => void;
  handleNextPage?: () => void;
  handlePrevPage?: () => void;
  handleRowsPerPageChange?: (value: number) => void;
  isDataLoading?: boolean;
  searchFilter?: (value: string) => void;
  enableCategoryFilter?: boolean;
  categoryOptions?: string[];
  categoryFilter?: (value: string) => void;
  showNumberOfRowSelected?: boolean;
}

export function DataTable<TData, TValue>({
  columns,
  data,
  rowId,
  isDataLoading,
  searchFilter,
  categoryFilter,
  categoryOptions,
  enableCategoryFilter = false,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [rowSelection, setRowSelection] = useState({});

  const table = useReactTable({
    columns,
    data,
    enableRowSelection: true,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getRowId: (row) => row[rowId] as unknown as string,
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    onRowSelectionChange: setRowSelection,
    onSortingChange: setSorting,
    state: {
      columnFilters,
      rowSelection,
      sorting,
    },
  });
  return (
    <>
      <div className="flex justify-between items-center mb-4">
        {enableCategoryFilter && (
          <Tabs onValueChange={categoryFilter}>
            <TabsList>
              {categoryOptions?.map((option) => (
                <TabsTrigger key={option} value={option}>
                  {option}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        )}
        <Input
          placeholder="Search bulletins..."
          onChange={(e) => searchFilter && searchFilter(e.target.value)}
          className="max-w-sm"
        />
      </div>
      <Table className="overflow-x-auto rounded-md w-full">
        <TableHeader className="sticky top-0 z-50 bg-white text-zinc-500">
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id} className="border-zinc-200">
              {headerGroup.headers.map((header) => (
                <TableHead key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {isDataLoading ? (
            <TableRow>
              <TableCell className="h-24 text-center" colSpan={columns.length}>
                <div className="flex items-center justify-center">
                  <Loader2 className="animate-spin" />
                </div>
              </TableCell>
            </TableRow>
          ) : table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                className="border-zinc-200"
                data-state={row.getIsSelected() && 'selected'}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell className="text-center" colSpan={columns.length}>
                No data available
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </>
  );
}

export default DataTable;
