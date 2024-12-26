import { useProductionSchedule } from '@/hooks/useProductionSchedule';
import { Timeline } from './Timeline';

export function ProductionSchedule() {
  const { data: schedule, isLoading } = useProductionSchedule();

  if (isLoading) {
    return <div>در حال بارگذاری...</div>;
  }

  return (
    <div className="p-4">
      <h2 className="mb-4 text-xl font-semibold">زمان‌بندی تولید</h2>
      <Timeline data={schedule || []} />
    </div>
  );
}