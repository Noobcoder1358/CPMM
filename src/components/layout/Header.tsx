import { Button } from '@/components/ui/button';
import { useAuth } from '@/lib/auth';
import { Bell, User } from 'lucide-react';

export function Header() {
  const { user, logout } = useAuth();

  return (
    <header className="flex h-14 items-center justify-between border-b bg-card px-6">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon">
          <Bell className="h-5 w-5" />
        </Button>
      </div>
      
      <div className="flex items-center gap-4">
        <span className="text-sm text-muted-foreground">
          {user?.username}
        </span>
        <Button
          variant="ghost"
          size="icon"
          onClick={logout}
        >
          <User className="h-5 w-5" />
        </Button>
      </div>
    </header>
  );
}