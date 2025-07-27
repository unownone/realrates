import { IndianRupee, TrendingUp, Building2, Receipt } from 'lucide-react';
import { cn } from '../../lib/utils';
import type { CostBreakdown as CostBreakdownType } from '../../types/calculator';
import { UI_CONSTANTS } from '../../constants/ui';

interface CostBreakdownProps {
  breakdown: CostBreakdownType;
  currency?: string;
  className?: string;
}

export function CostBreakdown({
  breakdown,
  currency = UI_CONSTANTS.CURRENCY.SYMBOL,
  className
}: CostBreakdownProps) {
  const formatAmount = (amount: number) => {
    return amount.toLocaleString('en-IN');
  };

  const formatPercentage = (percentage: number) => {
    return percentage.toFixed(1);
  };

  const breakdownItems = [
    {
      label: 'Principal',
      amount: breakdown.principal,
      percentage: breakdown.percentages.principal,
      color: 'text-green-600',
      bgColor: 'bg-green-50 dark:bg-green-900/20',
      borderColor: 'border-green-200 dark:border-green-700',
      icon: IndianRupee
    },
    {
      label: 'Interest',
      amount: breakdown.interest,
      percentage: breakdown.percentages.interest,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50 dark:bg-orange-900/20',
      borderColor: 'border-orange-200 dark:border-orange-700',
      icon: TrendingUp
    },
    {
      label: 'Processing Fees',
      amount: breakdown.fees,
      percentage: breakdown.percentages.fees,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20',
      borderColor: 'border-blue-200 dark:border-blue-700',
      icon: Building2
    },
    {
      label: 'GST',
      amount: breakdown.gst,
      percentage: breakdown.percentages.gst,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50 dark:bg-purple-900/20',
      borderColor: 'border-purple-200 dark:border-purple-700',
      icon: Receipt
    }
  ];

  return (
    <div className={cn('space-y-4 overflow-hidden', className)}>
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Cost Breakdown</h3>
      
      <div className="grid gap-3">
        {breakdownItems.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.label}
              className={cn(
                'flex items-center justify-between p-3 rounded-lg border overflow-hidden',
                item.bgColor,
                item.borderColor
              )}
            >
              <div className="flex items-center space-x-3 min-w-0 flex-1">
                <Icon className={cn('h-5 w-5 flex-shrink-0', item.color)} />
                <div className="min-w-0 flex-1">
                  <div className="font-medium text-gray-900 dark:text-white truncate">{item.label}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400 truncate">
                    {formatPercentage(item.percentage)}% of total
                  </div>
                </div>
              </div>
              
              <div className="text-right flex-shrink-0 ml-2">
                <div className={cn('font-semibold text-sm sm:text-base', item.color)}>
                  {currency}{formatAmount(item.amount)}
                </div>
                <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                  {formatPercentage(item.percentage)}%
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="pt-4 border-t border-gray-200 dark:border-dark-600 overflow-hidden">
        <div className="flex items-center justify-between">
          <span className="text-lg font-semibold text-gray-900 dark:text-white">Total Amount</span>
          <span className="text-xl font-bold text-gray-900 dark:text-white">
            {currency}{formatAmount(breakdown.principal + breakdown.interest + breakdown.fees + breakdown.gst)}
          </span>
        </div>
      </div>

      <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-700 rounded-lg overflow-hidden">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3 min-w-0 flex-1">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-100 dark:bg-red-800 flex-shrink-0">
              <IndianRupee className="h-4 w-4 text-red-600 dark:text-red-400" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="font-semibold text-red-900 dark:text-red-100 text-sm sm:text-base truncate">Total Cost Over Principal</div>
              <div className="text-xs sm:text-sm text-red-700 dark:text-red-300 truncate">
                Interest + Fees + GST
              </div>
            </div>
          </div>
          
          <div className="text-right flex-shrink-0 ml-2">
            <div className="text-lg sm:text-xl font-bold text-red-900 dark:text-red-100">
              {currency}{formatAmount(breakdown.interest + breakdown.fees + breakdown.gst)}
            </div>
            <div className="text-xs sm:text-sm text-red-700 dark:text-red-300">
              {formatPercentage(((breakdown.interest + breakdown.fees + breakdown.gst) / breakdown.principal) * 100)}% of principal
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 