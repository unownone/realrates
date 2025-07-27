export interface CalculatorInputs {
  principal: number;
  interestRate: number;
  loanTerm: number;
  selectedBank: string;
  customFees?: number;
  customFeeType?: 'fixed' | 'percentage';
  noCostEMI?: boolean;
  noCostEMIDiscountType?: 'principal_reduction' | 'refund';
}

export interface LoanCalculation {
  emi: number;
  totalInterest: number;
  totalFees: number;
  totalGST: number;
  totalAmount: number;
  apr: number; // Annual Percentage Rate including all costs
  monthlySchedule: MonthlyPayment[];
  breakdown: CostBreakdown;
  noCostEMI?: {
    originalEMI: number;
    discountedEMI: number;
    totalSavings: number;
    effectiveInterestRate: number;
  };
}

export interface CostBreakdown {
  principal: number;
  interest: number;
  fees: number;
  gst: number;
  percentages: {
    principal: number;
    interest: number;
    fees: number;
    gst: number;
  };
}

export interface MonthlyPayment {
  month: number;
  principal: number;
  interest: number;
  balance: number;
  emi: number;
  date: string;
  remainingBalance: number;
  totalPaid: number;
}

export interface BankFeeStructure {
  bankName: string;
  processingFeeType: 'fixed' | 'percentage' | 'hybrid';
  processingFeeAmount: number;
  processingFeePercentage?: number;
  minimumFee?: number;
  maximumFee?: number;
  applicableLoanRanges?: {
    minAmount: number;
    maxAmount: number;
  };
}

export interface InterestRatePreset {
  label: string;
  value: number;
  description: string;
}

export type LoanTerm = 3 | 6 | 9 | 12 | 18 | 24;

export interface ChartData {
  name: string;
  value: number;
  color: string;
  percentage: number;
} 