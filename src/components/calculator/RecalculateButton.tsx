import { Calculator, RefreshCw } from 'lucide-react';
import { cn } from '../../lib/utils';
import { Button } from '../ui/button';

interface RecalculateButtonProps {
  hasChanges: boolean;
  isLoading: boolean;
  onCalculate: () => void;
  className?: string;
}

export function RecalculateButton({
  hasChanges,
  isLoading,
  onCalculate,
  className
}: RecalculateButtonProps) {
  if (!hasChanges) {
    return null;
  }

  return (
    <div className={cn('flex justify-center', className)}>
      <Button
        onClick={onCalculate}
        disabled={isLoading}
        className="flex items-center space-x-2 px-4 sm:px-6 py-3 text-base sm:text-lg font-medium"
        size="lg"
      >
        {isLoading ? (
          <>
            <RefreshCw className="h-5 w-5 animate-spin" />
            <span>Calculating...</span>
          </>
        ) : (
          <>
            <Calculator className="h-5 w-5" />
            <span>Recalculate EMI</span>
          </>
        )}
      </Button>
    </div>
  );
} 