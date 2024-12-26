import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { Order } from '@/types/order';

const fetchOrders = async (): Promise<Order[]> => {
  // TODO: Replace with actual API call
  return [];
};

const createOrder = async (order: Omit<Order, 'id'>): Promise<Order> => {
  // TODO: Replace with actual API call
  return {} as Order;
};

export function useOrders() {
  const queryClient = useQueryClient();

  const ordersQuery = useQuery({
    queryKey: ['orders'],
    queryFn: fetchOrders,
  });

  const createOrderMutation = useMutation({
    mutationFn: createOrder,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['orders'] });
    },
  });

  return {
    orders: ordersQuery.data ?? [],
    isLoading: ordersQuery.isLoading,
    error: ordersQuery.error,
    createOrder: createOrderMutation.mutate,
    isCreating: createOrderMutation.isPending,
  };
}