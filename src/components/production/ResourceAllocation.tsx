import { useResources } from '@/hooks/useResources';
import { Progress } from '@/components/ui/progress';

export function ResourceAllocation() {
  const { data: resources } = useResources();

  return (
    <div>
      <h3 className="mb-4 text-lg font-semibold">تخصیص منابع</h3>
      <div className="space-y-4">
        {resources?.map((resource) => (
          <div key={resource.id}>
            <div className="mb-2 flex justify-between">
              <span>{resource.name}</span>
              <span>{resource.utilization}%</span>
            </div>
            <Progress value={resource.utilization} />
          </div>
        ))}
      </div>
    </div>
  );
}