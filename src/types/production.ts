export interface Resource {
  id: string;
  name: string;
  type: 'machine' | 'operator' | 'workstation';
  capacity: number;
  utilization: number;
  status: 'available' | 'busy' | 'maintenance';
}

export interface ProductionSchedule {
  id: string;
  orderId: string;
  startDate: string;
  endDate: string;
  resources: Resource[];
  status: 'scheduled' | 'in_progress' | 'completed';
  priority: number;
}