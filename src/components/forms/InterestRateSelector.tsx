import { useState, useEffect } from 'react';
import { ChevronDown, Percent } from 'lucide-react';
import { cn } from '../../lib/utils';
import { INTEREST_RATE_PRESETS } from '../../constants/rates';
import { UI_CONSTANTS } from '../../constants/ui';

interface InterestRateSelectorProps {
  value: number;
  onChange: (value: number) => void;
  error?: string;
  disabled?: boolean;
  className?: string;
}

export function InterestRateSelector({
  value,
  onChange,
  error,
  disabled = false,
  className
}: InterestRateSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [customRate, setCustomRate] = useState(value.toString());
  const [isCustom, setIsCustom] = useState(false);

  // Check if current value is a custom rate (not matching any preset)
  useEffect(() => {
    const matchingPreset = INTEREST_RATE_PRESETS.find(preset => preset.value === value);
    setIsCustom(!matchingPreset);
    if (!matchingPreset) {
      setCustomRate(value.toString());
    }
  }, [value]);



  const handlePresetSelect = (presetValue: number, presetLabel: string) => {
    if (presetLabel === 'Custom Rate') {
      setIsCustom(true);
      // Keep the current value if it's not 0, otherwise use a default
      const currentValue = value > 0 ? value : 15;
      setCustomRate(currentValue.toString());
      onChange(currentValue);
    } else {
      setIsCustom(false);
      onChange(presetValue);
    }
    setIsOpen(false);
  };

  const handleCustomRateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value.replace(/[^0-9.]/g, '');
    setCustomRate(inputValue);
    
    const numericValue = parseFloat(inputValue);
    if (!isNaN(numericValue) && 
        numericValue >= UI_CONSTANTS.VALIDATION.MIN_INTEREST_RATE && 
        numericValue <= UI_CONSTANTS.VALIDATION.MAX_INTEREST_RATE) {
      onChange(numericValue);
    }
  };

  const displayValue = isCustom ? customRate : value;

  return (
    <div className={cn('space-y-2 sm:space-y-3', className)}>
      <label className="text-sm sm:text-base font-medium text-text-primary">
        Interest Rate
      </label>
      
      <div className="relative">
        <button
          type="button"
          onClick={() => !disabled && setIsOpen(!isOpen)}
          disabled={disabled}
          className={cn(
            'relative w-full bg-surface-primary border rounded-lg sm:rounded-xl shadow-sm px-3 sm:px-4 py-3 sm:py-4 text-left',
            'focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-accent-500',
            'disabled:bg-surface-disabled disabled:text-text-disabled',
            error 
              ? 'border-error-primary focus:ring-error-primary focus:border-error-primary' 
              : 'border-border-primary',
            'hover:bg-surface-secondary',
            'text-text-primary',
            'transition-all duration-200'
          )}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <Percent className="h-4 w-4 sm:h-5 sm:w-5 text-text-tertiary" />
              <span className="text-base sm:text-lg font-medium">
                {displayValue}%
              </span>
            </div>
            <ChevronDown className={cn(
              'h-4 w-4 sm:h-5 sm:w-5 text-text-tertiary transition-transform duration-200',
              isOpen && 'rotate-180'
            )} />
          </div>
        </button>

        {isOpen && (
          <>
            {/* Backdrop */}
            <div 
              className="fixed inset-0 z-10" 
              onClick={() => setIsOpen(false)}
            />
            
            {/* Dropdown Menu */}
            <div className="absolute z-20 w-full mt-1 bg-surface-primary border border-border-primary rounded-lg sm:rounded-xl shadow-xl max-h-60 overflow-y-auto backdrop-blur-sm">
              <div className="py-1">
                {INTEREST_RATE_PRESETS.map((preset) => (
                  <button
                    key={preset.label}
                    type="button"
                    onClick={() => handlePresetSelect(preset.value, preset.label)}
                    className={cn(
                      'w-full px-3 sm:px-4 py-2 sm:py-3 text-left hover:bg-surface-secondary',
                      'flex flex-col items-start space-y-1',
                      'text-text-primary transition-colors duration-200',
                      (isCustom && preset.label === 'Custom Rate') || (!isCustom && value === preset.value) 
                        ? 'bg-accent-100 text-accent-700 dark:bg-accent-900/30 dark:text-accent-300 font-semibold'
                        : ''
                    )}
                  >
                    <span className="font-medium text-sm sm:text-base">{preset.label}</span>
                    <span className="text-sm text-text-secondary">{preset.description}</span>
                  </button>
                ))}
              </div>
            </div>
          </>
        )}
      </div>

      {isCustom && (
        <div className="mt-3 sm:mt-4">
          <input
            type="text"
            value={customRate}
            onChange={handleCustomRateChange}
            placeholder="Enter custom rate"
            className={cn(
              'w-full px-3 sm:px-4 py-2 sm:py-3 border rounded-lg sm:rounded-xl',
              'focus:ring-2 focus:ring-accent-500 focus:border-accent-500',
              'bg-surface-primary text-text-primary placeholder:text-text-tertiary',
              'border-border-primary',
              'text-base sm:text-lg font-medium',
              'transition-all duration-200'
            )}
          />
        </div>
      )}

      {error && (
        <p className="text-sm text-error-primary">{error}</p>
      )}
      
      <p className="text-xs sm:text-sm text-text-tertiary">
        Range: {UI_CONSTANTS.VALIDATION.MIN_INTEREST_RATE}% - {UI_CONSTANTS.VALIDATION.MAX_INTEREST_RATE}%
      </p>
    </div>
  );
} 