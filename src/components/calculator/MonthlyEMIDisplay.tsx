import { IndianRupee } from 'lucide-react';
import { cn } from '../../lib/utils';
import { UI_CONSTANTS } from '../../constants/ui';

interface MonthlyEMIDisplayProps {
  emi: number;
  loanTerm: number;
  apr?: number; // Annual Percentage Rate
  currency?: string;
  size?: "sm" | "md" | "lg";
  animated?: boolean;
  className?: string;
}

export function MonthlyEMIDisplay({
  emi,
  loanTerm,
  apr,
  currency = UI_CONSTANTS.CURRENCY.SYMBOL,
  size = "md",
  animated = false,
  className,
}: MonthlyEMIDisplayProps) {
  const sizeClasses = {
    sm: "text-2xl",
    md: "text-3xl",
    lg: "text-4xl",
  };

  const formatEMI = (amount: number) => {
    return amount.toLocaleString("en-IN");
  };

  const formatLoanTerm = (months: number) => {
    if (months === 12) {
      return "1 year";
    } else if (months === 24) {
      return "2 years";
    } else if (months === 36) {
      return "3 years";
    } else if (months === 48) {
      return "4 years";
    } else if (months === 60) {
      return "5 years";
    } else if (months < 12) {
      return `${months} month${months === 1 ? "" : "s"}`;
    } else {
      const years = Math.floor(months / 12);
      const remainingMonths = months % 12;
      if (remainingMonths === 0) {
        return `${years} year${years === 1 ? "" : "s"}`;
      } else {
        return `${years} year${
          years === 1 ? "" : "s"
        } ${remainingMonths} month${remainingMonths === 1 ? "" : "s"}`;
      }
    }
  };

  return (
    <div
      className={cn(
        "bg-gradient-to-br from-accent-50 to-accent-100 dark:from-accent-900/20 dark:to-accent-800/20 rounded-lg p-6",
        "border border-accent-200 dark:border-accent-700 shadow-sm",
        className
      )}
    >
      <div className="text-center">
        <div className="flex items-center justify-center space-x-2 mb-2">
          <IndianRupee className="h-6 w-6 text-accent-600 dark:text-accent-400" />
          <span className="text-sm font-medium text-accent-700 dark:text-accent-300">
            Monthly EMI
          </span>
        </div>

        <div
          className={cn(
            "font-bold text-accent-900 dark:text-accent-100",
            sizeClasses[size],
            animated && "animate-pulse"
          )}
        >
          {currency}
          {formatEMI(emi)}
        </div>

        <p className="text-sm text-accent-600 dark:text-accent-400 mt-2">
          per month for {formatLoanTerm(loanTerm)}
        </p>
        {apr !== undefined && (
          <p className="text-xs text-accent-500 dark:text-accent-400 mt-1">
            APR: {apr.toFixed(2)}% (including all costs)
          </p>
        )}
      </div>
    </div>
  );
} 