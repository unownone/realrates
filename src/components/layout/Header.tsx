import { Calculator, Shield } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '../../lib/utils';
import { ThemeToggle } from '../ui/ThemeToggle';

interface HeaderProps {
  className?: string;
}

export function Header({ className }: HeaderProps) {
  const location = useLocation();
  
  return (
    <header className={cn(
      'border-b border-border-primary bg-surface-primary/80 backdrop-blur-sm sticky top-0 z-50',
      className
    )}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="flex h-14 sm:h-16 items-center justify-between">
          <Link
            to="/"
            className="flex items-center space-x-2 sm:space-x-3 hover:opacity-80 hover:scale-105 transition-all duration-200"
          >
            <div className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-lg bg-accent-500">
              <Calculator className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg sm:text-xl font-bold text-text-primary">RealRates</h1>
                              <p className="text-xs sm:text-sm text-text-secondary">RealRates! by Spenddy</p>
            </div>
          </Link>
          
          <nav className="flex items-center space-x-1 sm:space-x-2 lg:space-x-4">
            <Link
              to="/"
              className={cn(
                "flex items-center space-x-1 sm:space-x-2 rounded-lg sm:rounded-xl px-2 sm:px-3 py-2 text-xs sm:text-sm font-medium transition-colors",
                location.pathname === "/"
                  ? "bg-accent-50 text-accent-700 dark:bg-accent-900/20 dark:text-accent-300"
                  : "text-text-secondary hover:bg-surface-secondary hover:text-text-primary"
              )}
            >
              <Calculator className="h-3 w-3 sm:h-4 sm:w-4" />
              <span className="hidden sm:inline">True Calculator</span>
            </Link>
            <Link
              to="/privacy"
              className={cn(
                "flex items-center space-x-1 sm:space-x-2 rounded-lg sm:rounded-xl px-2 sm:px-3 py-2 text-xs sm:text-sm font-medium transition-colors",
                location.pathname === "/privacy"
                  ? "bg-accent-50 text-accent-700 dark:bg-accent-900/20 dark:text-accent-300"
                  : "text-text-secondary hover:bg-surface-secondary hover:text-text-primary"
              )}
            >
              <Shield className="h-3 w-3 sm:h-4 sm:w-4" />
              <span className="hidden sm:inline">Privacy</span>
            </Link>
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  );
} 