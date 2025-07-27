import { useState, useEffect } from 'react';
import { IndianRupee, Settings, Percent } from 'lucide-react';
import { cn } from '../../lib/utils';

interface CustomFeeInputProps {
  value?: number;
  feeType?: 'fixed' | 'percentage';
  onChange: (value?: number, type?: 'fixed' | 'percentage') => void;
  error?: string;
  disabled?: boolean;
  className?: string;
  placeholder?: string;
}

export function CustomFeeInput({
  value,
  feeType = 'fixed',
  onChange,
  error,
  disabled = false,
  className
}: CustomFeeInputProps) {
  const [displayValue, setDisplayValue] = useState(value?.toString() || '');
  const [isEnabled, setIsEnabled] = useState(value !== undefined && value > 0);
  const [currentFeeType, setCurrentFeeType] = useState<'fixed' | 'percentage'>(feeType);

  useEffect(() => {
    setDisplayValue(value?.toString() || '');
    setIsEnabled(value !== undefined && value > 0);
    setCurrentFeeType(feeType);
  }, [value, feeType]);

  const handleToggle = () => {
    if (isEnabled) {
      setIsEnabled(false);
      onChange(undefined, undefined);
      setDisplayValue('');
    } else {
      setIsEnabled(true);
      setDisplayValue('');
      onChange(0, currentFeeType);
    }
  };

  const handleTypeToggle = () => {
    const newType = currentFeeType === 'fixed' ? 'percentage' : 'fixed';
    setCurrentFeeType(newType);
    const numericValue = displayValue ? parseFloat(displayValue) : 0;
    onChange(numericValue, newType);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value.replace(/[^0-9.]/g, '');
    setDisplayValue(inputValue);
    
    const numericValue = inputValue ? parseFloat(inputValue) : 0;
    if (numericValue >= 0) {
      onChange(numericValue, currentFeeType);
    }
  };

  const formatDisplayValue = (value: string) => {
    if (!value) return '';
    const numericValue = parseFloat(value);
    if (isNaN(numericValue)) return '';
    
    if (currentFeeType === 'percentage') {
      return numericValue.toFixed(2);
    } else {
      return numericValue.toLocaleString('en-IN');
    }
  };

  return (
    <div className={cn('space-y-2 sm:space-y-3', className)}>
      <div className="flex items-center justify-between">
        <label className="text-sm sm:text-base font-medium text-text-primary">
          Custom Processing Fee
        </label>
        <button
          type="button"
          onClick={handleToggle}
          disabled={disabled}
          className={cn(
            'flex items-center space-x-2 px-3 sm:px-4 py-2 text-sm sm:text-base rounded-lg sm:rounded-xl transition-colors',
            'focus:outline-none focus:ring-2 focus:ring-accent-500',
            isEnabled
              ? 'bg-accent-500 text-white hover:bg-accent-600 shadow-lg ring-2 ring-accent-200 dark:ring-accent-800'
              : 'bg-surface-secondary text-text-secondary hover:bg-surface-tertiary',
            disabled && 'opacity-50 cursor-not-allowed'
          )}
        >
          <Settings className="h-4 w-4 sm:h-5 sm:w-5" />
          <span className="font-medium">{isEnabled ? 'Custom' : 'Default'}</span>
        </button>
      </div>
      
      {isEnabled && (
        <div className="space-y-3 sm:space-y-4">
          {/* Fee Type Toggle - Mobile: Stack, Desktop: Row */}
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
            <button
              type="button"
              onClick={handleTypeToggle}
              disabled={disabled}
              className={cn(
                'flex items-center justify-center space-x-2 px-3 sm:px-4 py-2 sm:py-3 rounded-lg sm:rounded-xl border-2 transition-all duration-200',
                'focus:outline-none focus:ring-2 focus:ring-accent-500',
                currentFeeType === 'fixed'
                  ? 'bg-accent-500 text-white border-accent-500 shadow-lg scale-105 ring-2 ring-accent-200 dark:ring-accent-800'
                  : 'bg-surface-secondary text-text-secondary border-border-primary hover:bg-surface-tertiary hover:border-border-accent hover:scale-105',
                disabled && 'opacity-50 cursor-not-allowed'
              )}
            >
              <IndianRupee className="h-4 w-4 sm:h-5 sm:w-5" />
              <span className="text-sm sm:text-base font-medium">Fixed Amount</span>
              {currentFeeType === 'fixed' && (
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent-500 rounded-full border-2 border-white dark:border-surface-primary animate-pulse"></div>
              )}
            </button>
            
            <button
              type="button"
              onClick={handleTypeToggle}
              disabled={disabled}
              className={cn(
                'flex items-center justify-center space-x-2 px-3 sm:px-4 py-2 sm:py-3 rounded-lg sm:rounded-xl border-2 transition-all duration-200 relative',
                'focus:outline-none focus:ring-2 focus:ring-accent-500',
                currentFeeType === 'percentage'
                  ? 'bg-accent-500 text-white border-accent-500 shadow-lg scale-105 ring-2 ring-accent-200 dark:ring-accent-800'
                  : 'bg-surface-secondary text-text-secondary border-border-primary hover:bg-surface-tertiary hover:border-border-accent hover:scale-105',
                disabled && 'opacity-50 cursor-not-allowed'
              )}
            >
              <Percent className="h-4 w-4 sm:h-5 sm:w-5" />
              <span className="text-sm sm:text-base font-medium">Percentage</span>
              {currentFeeType === 'percentage' && (
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent-500 rounded-full border-2 border-white dark:border-surface-primary animate-pulse"></div>
              )}
            </button>
          </div>

          {/* Fee Amount Input */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 sm:pl-4 flex items-center pointer-events-none">
              {currentFeeType === 'fixed' ? (
                <IndianRupee className="h-4 w-4 sm:h-5 sm:w-5 text-text-tertiary" />
              ) : (
                <Percent className="h-4 w-4 sm:h-5 sm:w-5 text-text-tertiary" />
              )}
            </div>
            <input
              type="text"
              value={formatDisplayValue(displayValue)}
              onChange={handleChange}
              disabled={disabled}
              placeholder={currentFeeType === 'fixed' ? 'Enter amount' : 'Enter percentage'}
              className={cn(
                'block w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-3 sm:py-4 border rounded-lg sm:rounded-xl shadow-sm',
                'focus:ring-2 focus:ring-accent-500 focus:border-accent-500',
                'disabled:bg-surface-disabled disabled:text-text-disabled',
                'bg-surface-primary text-text-primary',
                'placeholder:text-text-tertiary',
                error 
                  ? 'border-error-primary focus:ring-error-primary focus:border-error-primary' 
                  : 'border-border-primary',
                'text-base sm:text-lg font-medium',
                'transition-all duration-200'
              )}
            />
          </div>

          {error && (
            <p className="text-sm text-error-primary">{error}</p>
          )}
          
          <p className="text-xs sm:text-sm text-text-tertiary">
            {currentFeeType === 'fixed' 
              ? 'Enter the fixed processing fee amount' 
              : 'Enter the processing fee as a percentage of the loan amount'
            }
          </p>
        </div>
      )}
    </div>
  );
} 