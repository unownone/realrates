import type { 
  LoanCalculation, 
  MonthlyPayment, 
  BankFeeStructure, 
  CalculatorInputs,
  CostBreakdown 
} from '../types/calculator';
import { GST_RATE } from '../constants/rates';
import { BANK_FEE_STRUCTURES } from '../constants/banks';

/**
 * Calculate monthly EMI using the standard EMI formula
 * EMI = P × r × (1 + r)^n / ((1 + r)^n - 1)
 */
export function calculateEMI(principal: number, annualRate: number, termMonths: number): number {
  if (annualRate === 0) {
    return principal / termMonths;
  }
  
  const monthlyRate = annualRate / 100 / 12;
  const emi = principal * monthlyRate * Math.pow(1 + monthlyRate, termMonths) / 
              (Math.pow(1 + monthlyRate, termMonths) - 1);
  

  
  return Math.round(emi);
}

/**
 * Calculate total interest paid over the loan term
 */
export function calculateTotalInterest(emi: number, principal: number, termMonths: number): number {
  const totalPaid = emi * termMonths;
  const totalInterest = Math.round(totalPaid - principal);
  

  
  return totalInterest;
}

/**
 * Calculate processing fees based on bank fee structure
 */
export function calculateProcessingFees(principal: number, bank: BankFeeStructure): number {
  let fees = 0;
  
  switch (bank.processingFeeType) {
    case 'fixed':
      fees = bank.processingFeeAmount;
      break;
    case 'percentage':
      fees = (principal * bank.processingFeePercentage!) / 100;
      break;
    case 'hybrid':
      fees = bank.processingFeeAmount + (principal * bank.processingFeePercentage!) / 100;
      break;
  }
  
  // Apply minimum and maximum limits
  if (bank.minimumFee && fees < bank.minimumFee) {
    fees = bank.minimumFee;
  }
  if (bank.maximumFee && fees > bank.maximumFee) {
    fees = bank.maximumFee;
  }
  
  return Math.round(fees);
}

/**
 * Calculate GST on a given amount
 */
export function calculateGST(amount: number, rate: number = GST_RATE): number {
  return Math.round(amount * rate);
}

/**
 * Generate monthly payment schedule
 */
export function generateMonthlySchedule(principal: number, emi: number, termMonths: number, annualRate: number, processingFees: number = 0): MonthlyPayment[] {
  const schedule: MonthlyPayment[] = [];
  let remainingBalance = principal;
  const monthlyRate = annualRate / 100 / 12;
  let totalPaid = processingFees; // Start with processing fees

  

  
  for (let month = 1; month <= termMonths; month++) {
    const interest = Math.round(remainingBalance * monthlyRate);
    const principalPaid = emi - interest;
    remainingBalance = Math.max(0, remainingBalance - principalPaid);
    totalPaid += emi; // Add EMI to total paid

    

    
    // Calculate payment date (assuming first payment is next month)
    const paymentDate = new Date();
    paymentDate.setMonth(paymentDate.getMonth() + month);
    const dateString = paymentDate.toLocaleDateString('en-IN', { 
      month: 'short', 
      year: 'numeric' 
    });
    
    schedule.push({
      month,
      principal: Math.round(principalPaid),
      interest,
      balance: Math.round(remainingBalance),
      emi,
      date: dateString,
      remainingBalance: Math.round(remainingBalance),
      totalPaid: Math.round(totalPaid)
    });
  }
  

  
  return schedule;
}

/**
 * Calculate cost breakdown with percentages
 */
export function calculateCostBreakdown(principal: number, totalInterest: number, totalFees: number, totalGST: number): CostBreakdown {
  return {
    principal,
    interest: totalInterest,
    fees: totalFees,
    gst: totalGST,
    percentages: {
      principal: 100, // Principal is always 100% of itself
      interest: Math.round((totalInterest / principal) * 100 * 100) / 100,
      fees: Math.round((totalFees / principal) * 100 * 100) / 100,
      gst: Math.round((totalGST / principal) * 100 * 100) / 100,
    }
  };
}

/**
 * Main calculation function that returns complete loan breakdown
 */
export function calculateTotalCost(inputs: CalculatorInputs): LoanCalculation {
  const { principal, interestRate, loanTerm, selectedBank, customFees, customFeeType, noCostEMI } = inputs;
  
  // Find the selected bank
  const bank = BANK_FEE_STRUCTURES.find(b => b.bankName === selectedBank) || BANK_FEE_STRUCTURES[0];
  
  // Calculate original EMI
  const originalEMI = calculateEMI(principal, interestRate, loanTerm);
  
  // Calculate total interest from monthly schedule for accuracy
  const tempSchedule = generateMonthlySchedule(principal, originalEMI, loanTerm, interestRate, 0);
  const totalInterest = tempSchedule.reduce((sum, payment) => sum + payment.interest, 0);
  
  // Calculate processing fees
  let processingFees: number;
  if (customFees !== undefined && customFeeType) {
    if (customFeeType === 'percentage') {
      processingFees = (principal * customFees) / 100;
    } else {
      processingFees = customFees;
    }
  } else {
    processingFees = calculateProcessingFees(principal, bank);
  }
  
  // Calculate GST
  const gstOnInterest = calculateGST(totalInterest);
  const gstOnFees = calculateGST(processingFees);
  const totalGST = gstOnInterest + gstOnFees;
  
  // Calculate total amount
  const totalAmount = principal + totalInterest + processingFees + totalGST;
  
  // Generate monthly schedule
  const monthlySchedule = generateMonthlySchedule(principal, originalEMI, loanTerm, interestRate, processingFees);
  
  // Calculate cost breakdown
  const breakdown = calculateCostBreakdown(principal, totalInterest, processingFees, totalGST);
  
  // Calculate APR
  const apr = calculateAPR(principal, totalAmount, loanTerm);
  
  // Handle No-Cost EMI
  let noCostEMIData = undefined;
  let finalEMI = originalEMI;
  let finalTotalInterest = totalInterest;
  let finalTotalAmount = totalAmount;
  let finalBreakdown = breakdown;
  let finalMonthlySchedule = monthlySchedule;
  let finalAPR = apr;
  
  if (noCostEMI) {
    // No-Cost EMI means 100% interest discount
    const discountedEMI = Math.round(principal / loanTerm); // EMI = Principal / Number of months
    const totalSavings = totalInterest; // All interest is saved
    const effectiveInterestRate = 0; // 0% effective interest rate
    
    // Generate new monthly schedule for No-Cost EMI
    const noCostSchedule: MonthlyPayment[] = [];
    let remainingBalance = principal;
    let totalPaid = processingFees; // Start with processing fees for No-Cost EMI
    
    for (let month = 1; month <= loanTerm; month++) {
      const principalPaid = discountedEMI;
      remainingBalance = Math.max(0, remainingBalance - principalPaid);
      totalPaid += discountedEMI;
      
      // Calculate payment date (assuming first payment is next month)
      const paymentDate = new Date();
      paymentDate.setMonth(paymentDate.getMonth() + month);
      const dateString = paymentDate.toLocaleDateString('en-IN', { 
        month: 'short', 
        year: 'numeric' 
      });
      
      noCostSchedule.push({
        month,
        principal: Math.round(principalPaid),
        interest: 0, // No interest in No-Cost EMI
        balance: Math.round(remainingBalance),
        emi: discountedEMI,
        date: dateString,
        remainingBalance: Math.round(remainingBalance),
        totalPaid: Math.round(totalPaid)
      });
    }
    
    // Calculate new cost breakdown for No-Cost EMI
    const noCostBreakdown = calculateCostBreakdown(principal, 0, processingFees, calculateGST(processingFees));
    
    // Calculate APR for No-Cost EMI (only fees and GST)
    const noCostTotalAmount = principal + processingFees + calculateGST(processingFees);
    const noCostAPR = calculateAPR(principal, noCostTotalAmount, loanTerm);
    
    noCostEMIData = {
      originalEMI,
      discountedEMI,
      totalSavings,
      effectiveInterestRate
    };
    
    finalEMI = discountedEMI;
    finalTotalInterest = 0;
    finalTotalAmount = noCostTotalAmount;
    finalBreakdown = noCostBreakdown;
    finalMonthlySchedule = noCostSchedule;
    finalAPR = noCostAPR;
  }
  
  return {
    emi: finalEMI,
    totalInterest: finalTotalInterest,
    totalFees: processingFees,
    totalGST: noCostEMI ? calculateGST(processingFees) : totalGST,
    totalAmount: finalTotalAmount,
    apr: finalAPR,
    monthlySchedule: finalMonthlySchedule,
    breakdown: finalBreakdown,
    noCostEMI: noCostEMIData
  };
}

/**
 * Calculate APR (Annual Percentage Rate) including all costs
 * APR represents the true cost of borrowing including interest, fees, and GST
 */
export function calculateAPR(principal: number, totalAmount: number, termMonths: number): number {
  if (principal === 0 || termMonths === 0) return 0;
  
  // Total cost of borrowing (excluding principal)
  const totalCost = totalAmount - principal;
  
  // Convert to annual rate
  const annualRate = (totalCost / principal) * (12 / termMonths) * 100;
  
  return Math.round(annualRate * 100) / 100; // Round to 2 decimal places
}

/**
 * Calculate savings between two loan options
 */
export function calculateSavings(calculation1: LoanCalculation, calculation2: LoanCalculation): {
  emiSavings: number;
  totalSavings: number;
  percentageSavings: number;
} {
  const emiSavings = calculation1.emi - calculation2.emi;
  const totalSavings = calculation1.totalAmount - calculation2.totalAmount;
  const percentageSavings = Math.round((totalSavings / calculation1.totalAmount) * 100 * 100) / 100;
  
  return {
    emiSavings: Math.abs(emiSavings),
    totalSavings: Math.abs(totalSavings),
    percentageSavings: Math.abs(percentageSavings)
  };
} 

 