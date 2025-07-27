import { Calendar, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { cn } from '../../lib/utils';
import { LOAN_TERMS } from '../../constants/rates';

interface LoanTermSelectorProps {
  value: number;
  onChange: (value: number) => void;
  error?: string;
  disabled?: boolean;
  className?: string;
}

export function LoanTermSelector({
  value,
  onChange,
  error,
  disabled = false,
  className
}: LoanTermSelectorProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftScroll, setShowLeftScroll] = useState(false);
  const [showRightScroll, setShowRightScroll] = useState(true);

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setShowLeftScroll(scrollLeft > 0);
      setShowRightScroll(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    checkScroll();
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', checkScroll);
      window.addEventListener('resize', checkScroll);
      return () => {
        container.removeEventListener('scroll', checkScroll);
        window.removeEventListener('resize', checkScroll);
      };
    }
  }, []);

  return (
    <div className={cn('space-y-2 sm:space-y-3', className)}>
      <label className="text-sm sm:text-base font-medium text-text-primary">
        Loan Term
      </label>
      
      <div className="relative group">
        {/* Left scroll button - Mobile: Smaller, Desktop: Larger */}
        {showLeftScroll && (
          <button
            type="button"
            onClick={scrollLeft}
            aria-label="Scroll left"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 bg-surface-primary border border-border-primary rounded-full shadow-md hover:shadow-lg transition-all duration-200 opacity-0 group-hover:opacity-100"
          >
            <ChevronLeft className="h-3 w-3 sm:h-4 sm:w-4 text-text-secondary" />
          </button>
        )}

        {/* Right scroll button - Mobile: Smaller, Desktop: Larger */}
        {showRightScroll && (
          <button
            type="button"
            onClick={scrollRight}
            aria-label="Scroll right"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 bg-surface-primary border border-border-primary rounded-full shadow-md hover:shadow-lg transition-all duration-200 opacity-0 group-hover:opacity-100"
          >
            <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4 text-text-secondary" />
          </button>
        )}

        {/* Mobile: Compact spacing, Desktop: More generous spacing */}
        <div 
          ref={scrollContainerRef}
          className="flex space-x-2 sm:space-x-3 lg:space-x-4 overflow-x-auto pb-2 scrollbar-hide scroll-smooth"
        >
          {LOAN_TERMS.map((term) => {
            const isSelected = value === term;
            const displayValue = term < 12 ? term : (term / 12).toFixed(1);
            const displayUnit = term < 12 ? 'months' : 'years';
            
            return (
              <button
                key={term}
                type="button"
                onClick={() => !disabled && onChange(term)}
                disabled={disabled}
                className={cn(
                  'flex-shrink-0 flex flex-col items-center justify-center space-y-1',
                  'px-3 sm:px-4 lg:px-6 py-2 sm:py-3 lg:py-4 rounded-lg sm:rounded-xl border-2',
                  'focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2',
                  'disabled:bg-surface-disabled disabled:text-text-disabled disabled:cursor-not-allowed',
                  'transition-all duration-200 min-w-[80px] sm:min-w-[100px] lg:min-w-[120px]',
                  isSelected 
                    ? 'bg-accent-500 text-white border-accent-500 shadow-lg scale-105 animate-glow ring-2 ring-accent-200 dark:ring-accent-800' 
                    : 'bg-surface-primary text-text-primary border-border-primary hover:bg-surface-secondary hover:border-border-accent hover:scale-105',
                  error && 'border-error-primary focus:ring-error-primary'
                )}
              >
                <Calendar className={cn(
                  'h-4 w-4 sm:h-5 sm:w-5',
                  isSelected ? 'text-white' : 'text-text-tertiary'
                )} />
                <div className="text-center">
                  <div className={cn(
                    'font-semibold text-sm sm:text-base lg:text-lg',
                    isSelected ? 'text-white' : 'text-text-primary'
                  )}>
                    {displayValue}
                  </div>
                  <div className={cn(
                    'text-xs sm:text-sm',
                    isSelected ? 'text-white/80' : 'text-text-tertiary'
                  )}>
                    {displayUnit}
                  </div>
                </div>
                {/* Selected indicator */}
                {isSelected && (
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent-500 rounded-full border-2 border-white dark:border-surface-primary animate-pulse"></div>
                )}
              </button>
            );
          })}
        </div>

        {/* Mobile: Smaller fade indicators, Desktop: Larger */}
        <div className="absolute left-0 top-0 bottom-2 w-4 sm:w-8 bg-gradient-to-r from-bg-primary to-transparent pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-2 w-4 sm:w-8 bg-gradient-to-l from-bg-primary to-transparent pointer-events-none"></div>
      </div>

      {error && (
        <p className="text-sm text-error-primary">{error}</p>
      )}
      
      <p className="text-xs sm:text-sm text-text-tertiary">
        Select your preferred loan duration
      </p>
    </div>
  );
} 