import { cn } from '../../lib/utils';
import { MonthlyEMIDisplay } from './MonthlyEMIDisplay';
import { CostBreakdown } from './CostBreakdown';
import type { LoanCalculation } from '../../types/calculator';

interface ResultsSectionProps {
  calculation: LoanCalculation | null;
  isLoading: boolean;
  error?: string;
  className?: string;
}

export function ResultsSection({
  calculation,
  isLoading,
  error,
  className
}: ResultsSectionProps) {
  if (isLoading) {
    return (
      <div className={cn('space-y-4 sm:space-y-6', className)}>
        <div className="animate-pulse">
          <div className="h-24 sm:h-32 bg-surface-tertiary rounded-lg mb-4 sm:mb-6"></div>
          <div className="space-y-2 sm:space-y-3">
            <div className="h-3 sm:h-4 bg-surface-tertiary rounded w-3/4"></div>
            <div className="h-3 sm:h-4 bg-surface-tertiary rounded w-1/2"></div>
            <div className="h-3 sm:h-4 bg-surface-tertiary rounded w-2/3"></div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={cn('space-y-4 sm:space-y-6', className)}>
        <div className="p-4 sm:p-6 status-error rounded-lg">
          <div className="text-center">
            <div className="text-error-primary font-medium mb-2 text-sm sm:text-base">Calculation Error</div>
            <div className="text-error-text text-xs sm:text-sm">{error}</div>
          </div>
        </div>
      </div>
    );
  }

  if (!calculation) {
    return (
      <div className={cn('space-y-4 sm:space-y-6', className)}>
        <div className="p-4 sm:p-6 bg-surface-secondary border border-border-primary rounded-lg">
          <div className="text-center">
            <div className="text-text-secondary font-medium mb-2 text-sm sm:text-base">No Results</div>
            <div className="text-text-tertiary text-xs sm:text-sm">
              Enter loan details and click "Calculate EMI" to see results
            </div>
          </div>
        </div>
      </div>
    );
  }

  const totalCost = calculation.totalInterest + calculation.totalFees + calculation.totalGST;
  const principal = calculation.breakdown.principal;

  return (
    <div className={cn("space-y-4 sm:space-y-6 overflow-hidden", className)}>
      <MonthlyEMIDisplay
        emi={calculation.emi}
        loanTerm={calculation.monthlySchedule.length}
        apr={calculation.apr}
        animated={true}
      />

      <CostBreakdown breakdown={calculation.breakdown} />

      {calculation.noCostEMI && (
        <div className="p-4 sm:p-6 status-success rounded-lg overflow-hidden">
          <h4 className="font-medium text-success-text mb-2 sm:mb-3 flex items-center text-sm sm:text-base">
            <span className="mr-2">🎁</span>
            No-Cost EMI Savings
          </h4>
          <div className="space-y-1 text-xs sm:text-sm text-success-text">
            <div className="break-words">
              • Original EMI: ₹
              {calculation.noCostEMI.originalEMI.toLocaleString("en-IN")}
            </div>
            <div className="break-words">
              • Discounted EMI: ₹
              {calculation.noCostEMI.discountedEMI.toLocaleString("en-IN")}
            </div>
            <div className="break-words">
              • Monthly Savings: ₹
              {(
                calculation.noCostEMI.originalEMI -
                calculation.noCostEMI.discountedEMI
              ).toLocaleString("en-IN")}
            </div>
            <div className="break-words">
              • Total Interest Savings: ₹
              {calculation.noCostEMI.totalSavings.toLocaleString("en-IN")}
            </div>
            <div className="break-words">
              • Effective Interest Rate:{" "}
              {calculation.noCostEMI.effectiveInterestRate.toFixed(2)}%
            </div>
            <div className="break-words">
              • Effective APR (including fees & GST):{" "}
              {calculation.apr.toFixed(2)}%
            </div>
          </div>
        </div>
      )}

      <div className="p-4 sm:p-6 status-info rounded-lg overflow-hidden">
        <h4 className="font-medium text-info-text mb-2 sm:mb-3 text-sm sm:text-base">
          Summary
        </h4>
        <div className="space-y-1 text-xs sm:text-sm text-info-text">
          <div className="break-words">
            • Total Interest: ₹
            {calculation.totalInterest.toLocaleString("en-IN")}
          </div>
          <div className="break-words">
            • Processing Fees: ₹{calculation.totalFees.toLocaleString("en-IN")}
          </div>
          <div className="break-words">
            • GST: ₹{calculation.totalGST.toLocaleString("en-IN")}
          </div>
          <div className="break-words">
            • Total Cost: ₹{totalCost.toLocaleString("en-IN")}
          </div>
          <div className="break-words">
            • Total Amount: ₹{calculation.totalAmount.toLocaleString("en-IN")}
          </div>
          <div className="break-words font-medium">
            • APR (including all costs): {calculation.apr.toFixed(2)}%
          </div>
        </div>
      </div>

      <div className="p-4 sm:p-6 bg-gradient-to-r from-error-secondary to-warning-secondary border border-error-primary rounded-lg overflow-hidden">
        <h4 className="font-medium text-error-text mb-2 sm:mb-3 text-sm sm:text-base">
          Total Cost Over Principal
        </h4>
        <div className="space-y-1 text-xs sm:text-sm text-error-text">
          <div className="break-words">
            • Principal Amount: ₹{principal.toLocaleString("en-IN")}
          </div>
          <div className="break-words">
            • Additional Costs: ₹{totalCost.toLocaleString("en-IN")}
          </div>
          <div className="break-words">
            • Cost Ratio: {((totalCost / principal) * 100).toFixed(1)}%
          </div>
        </div>
      </div>
    </div>
  );
} 