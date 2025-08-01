'use client';

import React from 'react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Table, TableHeader, TableBody, TableRow, TableCell, TableHead } from '@/components/ui/table';
import { ChevronLeft, ChevronRight, Filter } from 'lucide-react';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';
import { useReactTable, getCoreRowModel, getPaginationRowModel, getFilteredRowModel, getSortedRowModel } from '@tanstack/react-table';
import type { ColumnDef, SortingState, ColumnFiltersState, VisibilityState } from '@tanstack/react-table';
import { flexRender } from "@tanstack/react-table";
import FilterCard from '@/app/components/FilterCard';



export function DataTable<TData, TValue>({ columns, data }: { columns: ColumnDef<TData, TValue>[]; data: TData[] }) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = useState({});
  const [showFilters, setShowFilters] = useState(false);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <div>

      <Button variant="outline" onClick={() => setShowFilters(prev => !prev)}>
        <Filter className="mr-2 h-4 w-4" />
        {showFilters ? 'Hide Filters' : 'Show Filters'}
      </Button>

      {showFilters && (
        <div className="absolute z-10">
          <FilterCard table={table} />
        </div>
      )}


      <div className="flex-1 rounded-md">
        <Table>
          <TableHeader >

            {table.getHeaderGroups().map(headerGroup => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map(header => (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(header.column.columnDef.header, header.getContext())}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows.length ? (
              table.getRowModel().rows.map(row => (
                <TableRow key={row.id}>
                  {row.getVisibleCells().map(cell => (
                    <TableCell key={cell.id}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="text-center py-8">
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>


   <div className="mt-4 flex flex-col lg:flex-row justify-between items-center gap-4">
  <div className="flex items-center gap-4">
    <div className="hidden lg:flex items-center gap-2">
      <div className="text-sm text-muted-foreground">
        showing
      </div>
      <Select
        value={`${table.getState().pagination.pageSize}`}
        onValueChange={value => table.setPageSize(Number(value))}
      >
        <SelectTrigger className="w-20" id="rows-per-page">
          <SelectValue placeholder={table.getState().pagination.pageSize} />
        </SelectTrigger>
        <SelectContent>
          {[10, 20, 30, 40, 50].map(size => (
            <SelectItem key={size} value={`${size}`}>{size}</SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
    <div className="text-sm text-muted-foreground">
      out of {table.getFilteredRowModel().rows.length} 
    </div>
  </div>

  
  <div className="flex items-center gap-2">
    <Button
      variant="outline"
      size="icon"
      onClick={() => table.previousPage()}
      disabled={!table.getCanPreviousPage()}
    >
      <ChevronLeft className="h-4 w-4" />
    </Button>

    {[0, 1, 2, 3].map(i => (
      <Button
        key={i}
        variant={i === table.getState().pagination.pageIndex ? 'secondary' : 'outline'}
        size="icon"
        onClick={() => table.setPageIndex(i)}
        disabled={i >= table.getPageCount()}
        className="w-9 h-9 text-sm"
      >
        {i + 1}
      </Button>
    ))}

    <Button
      variant="outline"
      size="icon"
      onClick={() => table.nextPage()}
      disabled={!table.getCanNextPage()}
    >
      <ChevronRight className="h-4 w-4" />
    </Button>
  </div>
</div>      
  </div>

  );
}
