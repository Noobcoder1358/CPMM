import { createBrowserRouter } from 'react-router-dom';
import { AppLayout } from '@/components/layout/AppLayout';
import { AuthGuard } from '@/components/auth/AuthGuard';
import { Dashboard } from '@/components/dashboard/Dashboard';
import { Orders } from '@/components/orders/Orders';
import { Production } from '@/components/production/Production';
import { Packaging } from '@/components/packaging/Packaging';
import { Maintenance } from '@/components/maintenance/Maintenance';
import { Gamification } from '@/components/gamification/Gamification';
import { Settings } from '@/components/settings/Settings';

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <AuthGuard>
        <AppLayout>
          <Dashboard />
        </AppLayout>
      </AuthGuard>
    ),
  },
  {
    path: '/orders',
    element: (
      <AuthGuard>
        <AppLayout>
          <Orders />
        </AppLayout>
      </AuthGuard>
    ),
  },
  {
    path: '/production',
    element: (
      <AuthGuard>
        <AppLayout>
          <Production />
        </AppLayout>
      </AuthGuard>
    ),
  },
  {
    path: '/packaging',
    element: (
      <AuthGuard>
        <AppLayout>
          <Packaging />
        </AppLayout>
      </AuthGuard>
    ),
  },
  {
    path: '/maintenance',
    element: (
      <AuthGuard>
        <AppLayout>
          <Maintenance />
        </AppLayout>
      </AuthGuard>
    ),
  },
  {
    path: '/gamification',
    element: (
      <AuthGuard>
        <AppLayout>
          <Gamification />
        </AppLayout>
      </AuthGuard>
    ),
  },
  {
    path: '/settings',
    element: (
      <AuthGuard>
        <AppLayout>
          <Settings />
        </AppLayout>
      </AuthGuard>
    ),
  },
]);