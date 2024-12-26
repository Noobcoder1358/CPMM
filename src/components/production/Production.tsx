import { Calendar } from '@/components/ui/calendar';
import { Card } from '@/components/ui/card';
import { ProductionSchedule } from './ProductionSchedule';
import { ResourceAllocation } from './ResourceAllocation';

export function Production() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="mb-8 text-3xl font-bold">برنامه‌ریزی تولید</h1>
      
      <div className="grid gap-6 lg:grid-cols-12">
        <Card className="col-span-12 lg:col-span-8">
          <ProductionSchedule />
        </Card>
        
        <div className="col-span-12 space-y-6 lg:col-span-4">
          <Card className="p-4">
            <Calendar mode="single" className="rounded-md border" />
          </Card>
          
          <Card className="p-4">
            <ResourceAllocation />
          </Card>
        </div>
      </div>
    </div>
  );
}