import { useState } from 'react';
import { Calendar, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../../lib/utils';
import { FadeInSection } from '../animations';
import type { MonthlyPayment } from '../../types/calculator';


interface PaymentScheduleProps {
  schedule: MonthlyPayment[];
  className?: string;
}

export function PaymentSchedule({ schedule, className }: PaymentScheduleProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState<number | null>(null);

  const displayedSchedule = isExpanded ? schedule : schedule.slice(0, 6);
  const hasMoreMonths = schedule.length > 6;

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <FadeInSection className={cn('space-y-4 overflow-hidden', className)}>
      <div className="bg-surface-primary border border-border-primary rounded-lg p-4 sm:p-6 overflow-hidden shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <Calendar className="h-5 w-5 text-text-accent" />
            <h3 className="font-semibold text-text-primary text-sm sm:text-base">Payment Schedule</h3>
          </div>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-xs sm:text-sm text-text-accent hover:text-text-accent/80 transition-colors"
          >
            {isExpanded ? 'Show Less' : 'Show More'}
          </button>
        </div>

        <div className="space-y-2">
          {displayedSchedule.map((payment, index) => (
            <motion.div
              key={payment.month}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className={cn(
                'p-3 rounded-lg border transition-all cursor-pointer overflow-hidden',
                selectedMonth === payment.month
                  ? 'border-border-accent bg-accent-50 dark:bg-accent-900/20'
                  : 'border-border-primary hover:border-border-secondary hover:bg-surface-secondary'
              )}
              onClick={() => setSelectedMonth(selectedMonth === payment.month ? null : payment.month)}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2 sm:space-x-3 min-w-0 flex-1">
                  <div className="text-xs sm:text-sm font-medium text-text-primary truncate">
                    Month {payment.month}
                  </div>
                  <div className="text-xs text-text-tertiary truncate">
                    {payment.date}
                  </div>
                </div>
                <div className="flex items-center space-x-2 flex-shrink-0 ml-2">
                  <div className="text-right">
                    <div className="font-semibold text-text-primary text-sm sm:text-base">
                      {formatCurrency(payment.emi)}
                    </div>
                    <div className="text-xs text-text-tertiary">
                      EMI
                    </div>
                  </div>
                  {selectedMonth === payment.month ? (
                    <ChevronUp className="h-4 w-4 text-text-tertiary" />
                  ) : (
                    <ChevronDown className="h-4 w-4 text-text-tertiary" />
                  )}
                </div>
              </div>

              <AnimatePresence>
                {selectedMonth === payment.month && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="mt-3 pt-3 border-t border-border-primary space-y-2">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4 text-xs sm:text-sm">
                        <div className="flex justify-between sm:block">
                          <span className="text-text-secondary">Principal:</span>
                          <span className="ml-2 font-medium text-text-primary break-words">
                            {formatCurrency(payment.principal)}
                          </span>
                        </div>
                        <div className="flex justify-between sm:block">
                          <span className="text-text-secondary">Interest:</span>
                          <span className="ml-2 font-medium text-text-primary break-words">
                            {formatCurrency(payment.interest)}
                          </span>
                        </div>
                        <div className="flex justify-between sm:block">
                          <span className="text-text-secondary">Balance:</span>
                          <span className="ml-2 font-medium text-text-primary break-words">
                            {formatCurrency(payment.balance)}
                          </span>
                        </div>
                        <div className="flex justify-between sm:block">
                          <span className="text-text-secondary">Total Paid:</span>
                          <span className="ml-2 font-medium text-text-primary break-words">
                            {formatCurrency(payment.totalPaid)}
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {hasMoreMonths && !isExpanded && (
          <div className="text-center pt-4">
            <p className="text-xs sm:text-sm text-text-tertiary">
              +{schedule.length - 6} more months
            </p>
          </div>
        )}
      </div>
    </FadeInSection>
  );
} 