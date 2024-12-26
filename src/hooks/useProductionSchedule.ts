import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { ProductionSchedule } from '@/types/production';

const fetchSchedule = async (): Promise<ProductionSchedule[]> => {
  // TODO: Replace with actual API call
  return [];
};

const updateSchedule = async (schedule: ProductionSchedule): Promise<ProductionSchedule> => {
  // TODO: Replace with actual API call
  return schedule;
};

export function useProductionSchedule() {
  const queryClient = useQueryClient();

  const scheduleQuery = useQuery({
    queryKey: ['productionSchedule'],
    queryFn: fetchSchedule,
  });

  const updateScheduleMutation = useMutation({
    mutationFn: updateSchedule,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['productionSchedule'] });
    },
  });

  return {
    schedule: scheduleQuery.data ?? [],
    isLoading: scheduleQuery.isLoading,
    error: scheduleQuery.error,
    updateSchedule: updateScheduleMutation.mutate,
    isUpdating: updateScheduleMutation.isPending,
  };
}