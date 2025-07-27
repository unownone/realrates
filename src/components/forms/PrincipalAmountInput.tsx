import { useState, useEffect } from 'react';
import { IndianRupee } from 'lucide-react';
import { cn } from '../../lib/utils';
import { UI_CONSTANTS } from '../../constants/ui';

interface PrincipalAmountInputProps {
  value: number;
  onChange: (value: number) => void;
  error?: string;
  disabled?: boolean;
  className?: string;
  placeholder?: string;
}

export function PrincipalAmountInput({
  value,
  onChange,
  error,
  disabled = false,
  className,
  placeholder = "Enter amount"
}: PrincipalAmountInputProps) {
  const [displayValue, setDisplayValue] = useState(value.toString());

  useEffect(() => {
    setDisplayValue(value.toString());
  }, [value]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value.replace(/[^0-9]/g, '');
    const numericValue = inputValue ? parseInt(inputValue, 10) : 0;
    
    setDisplayValue(inputValue);
    
    if (numericValue >= UI_CONSTANTS.VALIDATION.MIN_PRINCIPAL && 
        numericValue <= UI_CONSTANTS.VALIDATION.MAX_PRINCIPAL) {
      onChange(numericValue);
    }
  };

  const formatDisplayValue = (value: string) => {
    if (!value) return '';
    const numericValue = parseInt(value, 10);
    return numericValue.toLocaleString('en-IN');
  };

  return (
    <div className={cn('space-y-2 sm:space-y-3', className)}>
      <label className="text-sm sm:text-base font-medium text-text-primary">
        Principal Amount
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 sm:pl-4 flex items-center pointer-events-none">
          <IndianRupee className="h-4 w-4 sm:h-5 sm:w-5 text-text-tertiary" />
        </div>
        <input
          type="text"
          value={formatDisplayValue(displayValue)}
          onChange={handleChange}
          disabled={disabled}
          placeholder={placeholder}
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
        Min: {UI_CONSTANTS.CURRENCY.SYMBOL}{UI_CONSTANTS.VALIDATION.MIN_PRINCIPAL.toLocaleString('en-IN')} | 
        Max: {UI_CONSTANTS.CURRENCY.SYMBOL}{UI_CONSTANTS.VALIDATION.MAX_PRINCIPAL.toLocaleString('en-IN')}
      </p>
    </div>
  );
} 