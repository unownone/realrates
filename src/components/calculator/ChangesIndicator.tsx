import { AlertCircle } from 'lucide-react';
import { cn } from '../../lib/utils';

interface ChangesIndicatorProps {
  hasChanges: boolean;
  className?: string;
}

export function ChangesIndicator({ hasChanges, className }: ChangesIndicatorProps) {
  if (!hasChanges) {
    return null;
  }

  return (
    <div className={cn(
      'flex items-start sm:items-center space-x-2 px-3 py-2 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700 rounded-md',
      className
    )}>
      <AlertCircle className="h-4 w-4 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5 sm:mt-0" />
      <span className="text-xs sm:text-sm text-amber-800 dark:text-amber-200 font-medium">
        Changes detected - Click "Recalculate EMI" to update results
      </span>
    </div>
  );
} 