import { useState } from 'react';
import { ChevronDown, Building2, Search } from 'lucide-react';
import { cn } from '../../lib/utils';
import { BANK_FEE_STRUCTURES } from '../../constants/banks';

interface BankSelectorProps {
  value: string;
  onChange: (value: string) => void;
  error?: string;
  disabled?: boolean;
  className?: string;
}

export function BankSelector({
  value,
  onChange,
  error,
  disabled = false,
  className
}: BankSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const selectedBank = BANK_FEE_STRUCTURES.find(bank => bank.bankName === value);

  const filteredBanks = BANK_FEE_STRUCTURES.filter(bank =>
    bank.bankName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleBankSelect = (bankName: string) => {
    onChange(bankName);
    setIsOpen(false);
    setSearchTerm('');
  };

  const getFeeDescription = (bank: typeof BANK_FEE_STRUCTURES[0]) => {
    switch (bank.processingFeeType) {
      case 'fixed':
        return `₹${bank.processingFeeAmount}`;
      case 'percentage':
        return `${bank.processingFeePercentage}%`;
      case 'hybrid':
        return `₹${bank.processingFeeAmount} + ${bank.processingFeePercentage}%`;
      default:
        return 'Custom';
    }
  };

  return (
    <div className={cn('space-y-2 sm:space-y-3', className)}>
      <label className="text-sm sm:text-base font-medium text-text-primary">
        Select Bank
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
            <div className="flex items-center space-x-3">
              <Building2 className="h-4 w-4 sm:h-5 sm:w-5 text-text-tertiary" />
              <div className="text-left">
                <div className="text-base sm:text-lg font-medium">
                  {selectedBank?.bankName || 'Select a bank'}
                </div>
                {selectedBank && (
                  <div className="text-sm text-text-secondary">
                    Processing fee: {getFeeDescription(selectedBank)}
                  </div>
                )}
              </div>
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
            <div className="absolute z-20 w-full mt-1 bg-surface-primary border border-border-primary rounded-lg sm:rounded-xl shadow-xl max-h-60 overflow-hidden backdrop-blur-sm">
              <div className="p-2 sm:p-3 border-b border-border-primary">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-text-tertiary" />
                  <input
                    type="text"
                    placeholder="Search banks..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-3 py-2 border border-border-primary rounded-md focus:ring-2 focus:ring-accent-500 focus:border-accent-500 bg-surface-primary text-text-primary placeholder:text-text-tertiary text-sm"
                  />
                </div>
              </div>
              
              <div className="max-h-48 overflow-y-auto">
                {filteredBanks.length === 0 ? (
                  <div className="px-3 sm:px-4 py-2 sm:py-3 text-sm text-text-tertiary">
                    No banks found
                  </div>
                ) : (
                  filteredBanks.map((bank) => (
                    <button
                      key={bank.bankName}
                      type="button"
                      onClick={() => handleBankSelect(bank.bankName)}
                      className={cn(
                        'w-full px-3 sm:px-4 py-3 sm:py-4 text-left hover:bg-surface-secondary transition-colors duration-200',
                        'text-text-primary',
                        value === bank.bankName && 'bg-accent-100 text-accent-700 dark:bg-accent-900/30 dark:text-accent-300 font-semibold'
                      )}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <Building2 className="h-4 w-4 sm:h-5 sm:w-5 text-text-tertiary" />
                          <div className="text-left">
                            <div className="font-medium text-sm sm:text-base">{bank.bankName}</div>
                            <div className="text-sm text-text-secondary">
                              Processing fee: {getFeeDescription(bank)}
                            </div>
                          </div>
                        </div>
                      </div>
                    </button>
                  ))
                )}
              </div>
            </div>
          </>
        )}
      </div>

      {error && (
        <p className="text-sm text-error-primary">{error}</p>
      )}
      
      <p className="text-xs sm:text-sm text-text-tertiary">
        Choose your preferred bank for loan processing
      </p>
    </div>
  );
} 