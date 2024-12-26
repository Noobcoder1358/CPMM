import { ColumnDef } from '@tanstack/react-table';
import { Order } from '@/types/order';
import { DataTableColumnHeader } from './DataTableColumnHeader';

export const columns: ColumnDef<Order>[] = [
  {
    accessorKey: 'orderNumber',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="شماره سفارش" />
    ),
  },
  {
    accessorKey: 'customerName',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="نام مشتری" />
    ),
  },
  {
    accessorKey: 'orderDate',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="تاریخ سفارش" />
    ),
  },
  {
    accessorKey: 'status',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="وضعیت" />
    ),
  },
];