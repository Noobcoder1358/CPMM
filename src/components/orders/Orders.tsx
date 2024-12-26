import { DataTable } from './DataTable';
import { columns } from './columns';
import { useOrders } from '@/hooks/useOrders';

export function Orders() {
  const { data: orders, isLoading } = useOrders();

  return (
    <div className="container mx-auto p-6">
      <h1 className="mb-8 text-3xl font-bold">مدیریت سفارش‌ها</h1>
      <DataTable columns={columns} data={orders || []} />
    </div>
  );
}