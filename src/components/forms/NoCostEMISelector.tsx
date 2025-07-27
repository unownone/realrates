import { Gift, Info, ArrowDown, ArrowUp } from 'lucide-react';
import { cn } from '../../lib/utils';
import { InfoTooltip } from '../educational/InfoTooltip';

interface NoCostEMISelectorProps {
  enabled: boolean;
  discountType: 'principal_reduction' | 'refund';
  onToggle: (enabled: boolean) => void;
  onDiscountTypeChange: (type: 'principal_reduction' | 'refund') => void;
  className?: string;
}

export function NoCostEMISelector({
  enabled,
  discountType,
  onToggle,
  onDiscountTypeChange,
  className
}: NoCostEMISelectorProps) {
  return (
    <div className={cn('space-y-3 sm:space-y-4', className)}>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2 sm:space-x-3">
          <Gift className="h-4 w-4 sm:h-5 sm:w-5 text-success-primary" />
          <label className="text-sm sm:text-base font-medium text-text-primary">
            No-Cost EMI
          </label>
          <InfoTooltip
            content="No-Cost EMI means 100% interest discount. You pay only the principal amount in equal installments, with no interest charges. However, you still pay processing fees and GST."
            title="How No-Cost EMI Works"
          />
        </div>
        <button
          type="button"
          onClick={() => onToggle(!enabled)}
          aria-label={enabled ? 'Disable No-Cost EMI' : 'Enable No-Cost EMI'}
          className={cn(
            'relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2',
            enabled ? 'bg-success-primary' : 'bg-surface-tertiary'
          )}
        >
          <span
            className={cn(
              'inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200',
              enabled ? 'translate-x-6' : 'translate-x-1'
            )}
          />
        </button>
      </div>

      {enabled && (
        <div className="space-y-4 p-4 sm:p-6 status-success rounded-lg">
          <div className="space-y-3 sm:space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm sm:text-base font-medium text-success-text">
                Interest Discount: 100%
              </span>
              <span className="text-xs sm:text-sm text-success-text bg-success-secondary px-2 sm:px-3 py-1 sm:py-2 rounded-full">
                No-Cost EMI
              </span>
            </div>

            <div className="space-y-3 sm:space-y-4">
              <div>
                <label className="text-sm sm:text-base font-medium text-success-text mb-2 sm:mb-3 block">
                  Discount Application Method
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                  <button
                    type="button"
                    onClick={() => onDiscountTypeChange('principal_reduction')}
                    className={cn(
                      'flex items-center space-x-2 sm:space-x-3 p-3 sm:p-4 rounded-lg sm:rounded-xl border transition-colors text-left',
                      'focus:outline-none focus:ring-2 focus:ring-accent-500',
                      discountType === 'principal_reduction'
                        ? 'bg-success-primary text-white border-success-primary'
                        : 'bg-surface-primary text-success-text border-success-primary hover:bg-success-secondary'
                    )}
                  >
                    <ArrowDown className="h-4 w-4 sm:h-5 sm:w-5" />
                    <div>
                      <div className="font-medium text-sm sm:text-base">Principal Reduction</div>
                      <div className="text-xs sm:text-sm opacity-80">Discount reduces loan amount</div>
                    </div>
                  </button>
                  
                  <button
                    type="button"
                    onClick={() => onDiscountTypeChange('refund')}
                    className={cn(
                      'flex items-center space-x-2 sm:space-x-3 p-3 sm:p-4 rounded-lg sm:rounded-xl border transition-colors text-left',
                      'focus:outline-none focus:ring-2 focus:ring-accent-500',
                      discountType === 'refund'
                        ? 'bg-success-primary text-white border-success-primary'
                        : 'bg-surface-primary text-success-text border-success-primary hover:bg-success-secondary'
                    )}
                  >
                    <ArrowUp className="h-4 w-4 sm:h-5 sm:w-5" />
                    <div>
                      <div className="font-medium text-sm sm:text-base">Refund</div>
                      <div className="text-xs sm:text-sm opacity-80">Discount refunded after payment</div>
                    </div>
                  </button>
                </div>
              </div>

              <div className="p-3 sm:p-4 bg-surface-primary rounded-lg sm:rounded-xl border border-success-primary">
                <div className="flex items-center space-x-2 sm:space-x-3 text-success-text">
                  <Info className="h-4 w-4 sm:h-5 sm:w-5" />
                  <div className="text-sm sm:text-base">
                    <strong>Note:</strong> Processing fees and GST are still applicable even with No-Cost EMI.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 