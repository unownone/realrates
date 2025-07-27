import { Calculator, RefreshCw } from 'lucide-react';
import { cn } from '../../lib/utils';
import { PrincipalAmountInput } from '../forms/PrincipalAmountInput';
import { InterestRateSelector } from '../forms/InterestRateSelector';
import { LoanTermSelector } from '../forms/LoanTermSelector';
import { BankSelector } from '../forms/BankSelector';
import { CustomFeeInput } from '../forms/CustomFeeInput';
import { NoCostEMISelector } from '../forms/NoCostEMISelector';
import type { CalculatorInputs } from '../../types/calculator';

interface CalculatorFormProps {
  inputs: CalculatorInputs;
  onInputChange: (updates: Partial<CalculatorInputs>) => void;
  onSubmit: () => void;
  onReset: () => void;
  isLoading?: boolean;
  error?: string;
  hasChanges?: boolean;
  className?: string;
}

export function CalculatorForm({
  inputs,
  onInputChange,
  onSubmit,
  onReset,
  isLoading = false,
  error,
  hasChanges = false,
  className
}: CalculatorFormProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit} className={cn('space-y-4 sm:space-y-6', className)}>
      {/* Mobile: Compact spacing, Desktop: More generous spacing */}
      <div className="space-y-3 sm:space-y-4 lg:space-y-6">
        <PrincipalAmountInput
          value={inputs.principal}
          onChange={(value) => onInputChange({ principal: value })}
          error={error}
          disabled={isLoading}
        />

        <InterestRateSelector
          value={inputs.interestRate}
          onChange={(value) => onInputChange({ interestRate: value })}
          disabled={isLoading}
        />

        <LoanTermSelector
          value={inputs.loanTerm}
          onChange={(value) => onInputChange({ loanTerm: value })}
          disabled={isLoading}
        />

        <BankSelector
          value={inputs.selectedBank}
          onChange={(value) => onInputChange({ selectedBank: value })}
          disabled={isLoading}
        />

        <CustomFeeInput
          value={inputs.customFees}
          feeType={inputs.customFeeType}
          onChange={(value, type) => onInputChange({ customFees: value, customFeeType: type })}
          disabled={isLoading}
        />

        <NoCostEMISelector
          enabled={inputs.noCostEMI || false}
          discountType={inputs.noCostEMIDiscountType || 'principal_reduction'}
          onToggle={(enabled) => onInputChange({ noCostEMI: enabled })}
          onDiscountTypeChange={(discountType) => onInputChange({ noCostEMIDiscountType: discountType })}
        />
      </div>

      {/* Action Buttons - Mobile: Stack, Desktop: Row */}
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 sm:pt-6">
        <button
          type="submit"
          disabled={isLoading}
          className={cn(
            'flex-1 flex items-center justify-center space-x-2 px-4 sm:px-6 py-3 sm:py-4',
            'btn-primary font-medium rounded-lg sm:rounded-xl shadow-lg',
            'hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2',
            'disabled:opacity-50 disabled:cursor-not-allowed',
            'transition-all duration-200 animate-glow',
            'text-sm sm:text-base'
          )}
        >
          {isLoading ? (
            <RefreshCw className="h-4 w-4 sm:h-5 sm:w-5 animate-spin" />
          ) : (
            <Calculator className="h-4 w-4 sm:h-5 sm:w-5" />
          )}
          <span>{isLoading ? 'Calculating...' : (hasChanges ? 'Recalculate EMI' : 'Calculate EMI')}</span>
        </button>

        <button
          type="button"
          onClick={onReset}
          disabled={isLoading}
          className={cn(
            'px-4 sm:px-6 py-3 sm:py-4 btn-secondary font-medium rounded-lg sm:rounded-xl',
            'focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2',
            'disabled:opacity-50 disabled:cursor-not-allowed',
            'transition-colors duration-200',
            'text-sm sm:text-base'
          )}
        >
          Reset
        </button>
      </div>

      {error && (
        <div className="p-3 sm:p-4 status-error rounded-lg">
          <p className="text-sm">{error}</p>
        </div>
      )}
    </form>
  );
} 