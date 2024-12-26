import { LayoutDashboard, Package, ClipboardList, Settings, Tool, Trophy } from 'lucide-react';
import { Card } from '@/components/ui/card';

const modules = [
  {
    title: 'مدیریت سفارش',
    icon: ClipboardList,
    description: 'مدیریت و پیگیری سفارشات مشتریان',
    href: '/orders',
  },
  {
    title: 'برنامه‌ریزی تولید',
    icon: LayoutDashboard,
    description: 'زمان‌بندی و برنامه‌ریزی خط تولید',
    href: '/production',
  },
  {
    title: 'بسته‌بندی و تولید',
    icon: Package,
    description: 'مدیریت عملیات تولید و بسته‌بندی',
    href: '/packaging',
  },
  {
    title: 'نگهداری ماشین‌آلات',
    icon: Tool,
    description: 'برنامه‌ریزی و پیگیری تعمیرات',
    href: '/maintenance',
  },
  {
    title: 'گیمیفیکیشن کارکنان',
    icon: Trophy,
    description: 'سیستم امتیازدهی و پاداش کارکنان',
    href: '/gamification',
  },
  {
    title: 'تنظیمات',
    icon: Settings,
    description: 'پیکربندی سیستم و مدیریت داده‌های پایه',
    href: '/settings',
  },
];

export function Dashboard() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="mb-8 text-3xl font-bold">سیستم مدیریت تولید صبا</h1>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {modules.map((module) => {
          const Icon = module.icon;
          return (
            <Card
              key={module.href}
              className="relative overflow-hidden p-6 transition-all hover:shadow-lg"
            >
              <div className="mb-4 flex items-center gap-3">
                <Icon className="h-6 w-6 text-primary" />
                <h2 className="text-xl font-semibold">{module.title}</h2>
              </div>
              <p className="text-muted-foreground">{module.description}</p>
            </Card>
          );
        })}
      </div>
    </div>
  );
}