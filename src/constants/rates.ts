import type { InterestRatePreset, LoanTerm } from '../types/calculator';

export const LOAN_TERMS: LoanTerm[] = [3, 6, 9, 12, 18, 24];

export const INTEREST_RATE_PRESETS: InterestRatePreset[] = [
  {
    label: "Credit Card EMI",
    value: 15,
    description: "Standard credit card EMI rate"
  },
  {
    label: "Personal Loan",
    value: 12,
    description: "Typical personal loan rate"
  },
  {
    label: "Consumer Durable",
    value: 18,
    description: "Consumer durable financing"
  },
  {
    label: "No Cost EMI",
    value: 0,
    description: "Zero interest EMI (with processing fees)"
  },
  {
    label: "Custom Rate",
    value: 0,
    description: "Enter your own rate"
  }
];

export const GST_RATE = 0.18; // 18% GST

export const DEFAULT_VALUES = {
  principal: 15000,
  interestRate: 15,
  loanTerm: 9,
  selectedBank: "HDFC Bank"
}; 