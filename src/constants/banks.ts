import type { BankFeeStructure } from '../types/calculator';

export const BANK_FEE_STRUCTURES: BankFeeStructure[] = [
  {
    bankName: "HDFC Bank",
    processingFeeType: "fixed",
    processingFeeAmount: 299,
    minimumFee: 299,
    maximumFee: 999,
    applicableLoanRanges: {
      minAmount: 5000,
      maxAmount: 500000
    }
  },
  {
    bankName: "ICICI Bank",
    processingFeeType: "percentage",
    processingFeeAmount: 1.5,
    processingFeePercentage: 1.5,
    minimumFee: 199,
    maximumFee: 1500,
    applicableLoanRanges: {
      minAmount: 3000,
      maxAmount: 300000
    }
  },
  {
    bankName: "SBI Card",
    processingFeeType: "hybrid",
    processingFeeAmount: 199,
    processingFeePercentage: 1,
    minimumFee: 199,
    maximumFee: 999,
    applicableLoanRanges: {
      minAmount: 5000,
      maxAmount: 200000
    }
  },
  {
    bankName: "Axis Bank",
    processingFeeType: "fixed",
    processingFeeAmount: 500,
    minimumFee: 500,
    maximumFee: 500,
    applicableLoanRanges: {
      minAmount: 10000,
      maxAmount: 1000000
    }
  },
  {
    bankName: "Kotak Bank",
    processingFeeType: "percentage",
    processingFeeAmount: 2,
    processingFeePercentage: 2,
    minimumFee: 250,
    maximumFee: 2000,
    applicableLoanRanges: {
      minAmount: 5000,
      maxAmount: 500000
    }
  },
  {
    bankName: "Custom Bank",
    processingFeeType: "fixed",
    processingFeeAmount: 0,
    minimumFee: 0,
    maximumFee: 9999,
    applicableLoanRanges: {
      minAmount: 1000,
      maxAmount: 999999
    }
  }
]; 