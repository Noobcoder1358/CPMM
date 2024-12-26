import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import {
  LayoutDashboard,
  ClipboardList,
  Factory,
  Package,
  Tool,
  Trophy,
  Settings,
} from 'lucide-react';

const menuItems = [
  { icon: LayoutDashboard, label: 'داشبورد', href: '/' },
  { icon: ClipboardList, label: 'سفارش‌ها', href: '/orders' },
  { icon: Factory, label: 'تولید', href: '/production' },
  { icon: Package, label: 'بسته‌بندی', href: '/packaging' },
  { icon: Tool, label: 'نگهداری', href: '/maintenance' },
  { icon: Trophy, label: 'گیمیفیکیشن', href: '/gamification' },
  { icon: Settings, label: 'تنظیمات', href: '/settings' },
];

export function Sidebar() {
  const location = useLocation();

  return (
    <div className="flex h-screen w-64 flex-col border-l bg-card px-3 py-4">
      <div className="mb-8 px-4 text-2xl font-bold">سیستم مدیریت صبا</div>
      <nav className="flex-1 space-y-1">
        {menuItems.map(({ icon: Icon, label, href }) => (
          <Link
            key={href}
            to={href}
            className={cn(
              'flex items-center gap-3 rounded-lg px-4 py-2 text-sm font-medium transition-colors',
              location.pathname === href
                ? 'bg-primary text-primary-foreground'
                : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
            )}
          >
            <Icon className="h-4 w-4" />
            {label}
          </Link>
        ))}
      </nav>
    </div>
  );
}