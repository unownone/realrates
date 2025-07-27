import { useState } from 'react';
import { Building2, TrendingUp, TrendingDown, CheckCircle, XCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';
import { FadeInSection } from '../animations';
import { BANK_FEE_STRUCTURES } from '../../constants/banks';
import type { CalculatorInputs } from '../../types/calculator';
import { calculateTotalCost } from '../../lib/calculations';

interface BankComparisonTableProps {
  inputs: CalculatorInputs;
  className?: string;
}

export function BankComparisonTable({ inputs, className }: BankComparisonTableProps) {
  const [sortBy, setSortBy] = useState<'bank' | 'fees' | 'total' | 'savings'>('fees');
  const [selectedBanks, setSelectedBanks] = useState<string[]>([]);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const calculateBankComparison = () => {
    const comparisons = BANK_FEE_STRUCTURES.map(bank => {
      const bankInputs = { ...inputs, selectedBank: bank.bankName };
      const calculation = calculateTotalCost(bankInputs);
      
      return {
        bank: bank.bankName,
        processingFees: calculation.totalFees,
        totalAmount: calculation.totalAmount,
        emi: calculation.emi,
        totalInterest: calculation.totalInterest,
        totalGST: calculation.totalGST,
        calculation
      };
    });

    // Sort based on selected criteria
    comparisons.sort((a, b) => {
      switch (sortBy) {
        case 'bank':
          return a.bank.localeCompare(b.bank);
        case 'fees':
          return a.processingFees - b.processingFees;
        case 'total':
          return a.totalAmount - b.totalAmount;
        case 'savings':
          return b.totalAmount - a.totalAmount; // Higher savings first
        default:
          return 0;
      }
    });

    return comparisons;
  };

  const comparisons = calculateBankComparison();
  const bestOption = comparisons[0];
  const worstOption = comparisons[comparisons.length - 1];

  const toggleBankSelection = (bankName: string) => {
    setSelectedBanks(prev => 
      prev.includes(bankName) 
        ? prev.filter(name => name !== bankName)
        : [...prev, bankName]
    );
  };

  const getFeeDescription = (bank: typeof BANK_FEE_STRUCTURES[0]) => {
    if (bank.processingFeeType === 'fixed') {
      return `₹${bank.processingFeeAmount.toLocaleString('en-IN')}`;
    } else if (bank.processingFeeType === 'percentage') {
      return `${bank.processingFeePercentage}%`;
    } else {
      return `${bank.processingFeePercentage}% (min ₹${bank.minimumFee}, max ₹${bank.maximumFee})`;
    }
  };

  return (
    <FadeInSection className={cn('space-y-6', className)}>
      <div className="card rounded-lg p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-2">
            <Building2 className="h-6 w-6 text-accent-600" />
            <h3 className="text-xl font-semibold text-text-primary">Bank Comparison</h3>
          </div>
          <div className="flex space-x-2">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as 'bank' | 'fees' | 'total' | 'savings')}
              aria-label="Sort banks by"
              className="px-3 py-1 border border-border-primary rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-accent-500 bg-surface-primary text-text-primary"
            >
              <option value="bank">Sort by Bank</option>
              <option value="fees">Sort by Fees</option>
              <option value="total">Sort by Total Cost</option>
              <option value="savings">Sort by Savings</option>
            </select>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border-primary">
                <th className="text-left py-3 px-4 font-medium text-text-primary">Bank</th>
                <th className="text-left py-3 px-4 font-medium text-text-primary">Processing Fees</th>
                <th className="text-left py-3 px-4 font-medium text-text-primary">Total Interest</th>
                <th className="text-left py-3 px-4 font-medium text-text-primary">GST</th>
                <th className="text-left py-3 px-4 font-medium text-text-primary">Total Amount</th>
                <th className="text-left py-3 px-4 font-medium text-text-primary">Monthly EMI</th>
                <th className="text-left py-3 px-4 font-medium text-text-primary">Savings</th>
              </tr>
            </thead>
            <tbody>
              {comparisons.map((comparison, index) => {
                const isBest = comparison.bank === bestOption.bank;
                const isWorst = comparison.bank === worstOption.bank;
                const savings = worstOption.totalAmount - comparison.totalAmount;
                const bank = BANK_FEE_STRUCTURES.find(b => b.bankName === comparison.bank)!;

                return (
                  <motion.tr
                    key={comparison.bank}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className={cn(
                      'border-b border-border-secondary hover:bg-surface-secondary transition-colors',
                      isBest && 'status-success',
                      isWorst && 'status-error'
                    )}
                  >
                    <td className="py-3 px-4">
                      <div className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          checked={selectedBanks.includes(comparison.bank)}
                          onChange={() => toggleBankSelection(comparison.bank)}
                          aria-label={`Select ${comparison.bank} for comparison`}
                          className="rounded border-border-primary text-accent-600 focus:ring-accent-500"
                        />
                        <span className="font-medium text-text-primary">{comparison.bank}</span>
                        {isBest && <CheckCircle className="h-4 w-4 text-success-primary" />}
                        {isWorst && <XCircle className="h-4 w-4 text-error-primary" />}
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <div className="text-sm">
                        <div className="font-medium text-text-primary">
                          {formatCurrency(comparison.processingFees)}
                        </div>
                        <div className="text-text-secondary">
                          {getFeeDescription(bank)}
                        </div>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <div className="text-sm font-medium text-text-primary">
                        {formatCurrency(comparison.totalInterest)}
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <div className="text-sm font-medium text-text-primary">
                        {formatCurrency(comparison.totalGST)}
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <div className="text-sm font-medium text-text-primary">
                        {formatCurrency(comparison.totalAmount)}
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <div className="text-sm font-medium text-text-primary">
                        {formatCurrency(comparison.emi)}
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <div className="text-sm">
                        <div className={cn(
                          'font-medium',
                          savings > 0 ? 'text-success-primary' : 'text-text-primary'
                        )}>
                          {savings > 0 ? '+' : ''}{formatCurrency(savings)}
                        </div>
                        {savings > 0 && (
                          <div className="text-success-primary text-xs">
                            vs {worstOption.bank}
                          </div>
                        )}
                      </div>
                    </td>
                  </motion.tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <div className="p-4 status-success rounded-lg">
            <div className="flex items-center space-x-2 mb-2">
              <TrendingDown className="h-5 w-5 text-success-primary" />
              <span className="font-semibold text-success-text">Best Option</span>
            </div>
            <div className="text-lg font-bold text-success-text">{bestOption.bank}</div>
            <div className="text-sm text-success-text">
              Total: {formatCurrency(bestOption.totalAmount)}
            </div>
          </div>

          <div className="p-4 status-error rounded-lg">
            <div className="flex items-center space-x-2 mb-2">
              <TrendingUp className="h-5 w-5 text-error-primary" />
              <span className="font-semibold text-error-text">Most Expensive</span>
            </div>
            <div className="text-lg font-bold text-error-text">{worstOption.bank}</div>
            <div className="text-sm text-error-text">
              Total: {formatCurrency(worstOption.totalAmount)}
            </div>
          </div>

          <div className="p-4 status-info rounded-lg">
            <div className="flex items-center space-x-2 mb-2">
              <Building2 className="h-5 w-5 text-info-primary" />
              <span className="font-semibold text-info-text">Potential Savings</span>
            </div>
            <div className="text-lg font-bold text-info-text">
              {formatCurrency(worstOption.totalAmount - bestOption.totalAmount)}
            </div>
            <div className="text-sm text-info-text">
              Choose {bestOption.bank} over {worstOption.bank}
            </div>
          </div>
        </div>
      </div>
    </FadeInSection>
  );
} 