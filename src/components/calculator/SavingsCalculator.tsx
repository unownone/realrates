import { useState } from 'react';
import { TrendingDown, Calculator, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';
import { FadeInSection } from '../animations';
import { AnimatedCounter } from '../animations';
import type { LoanCalculation } from '../../types/calculator';

interface SavingsCalculatorProps {
  currentCalculation: LoanCalculation;
  className?: string;
}

export function SavingsCalculator({ currentCalculation, className }: SavingsCalculatorProps) {
  const [scenario, setScenario] = useState<'lowerRate' | 'shorterTerm' | 'custom'>('lowerRate');
  const [customRate, setCustomRate] = useState(currentCalculation.emi * 0.9); // 10% lower EMI
  const [customTerm, setCustomTerm] = useState(Math.max(3, currentCalculation.monthlySchedule.length - 3)); // 3 months shorter

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const calculateSavings = () => {
    // This is a simplified calculation - in a real app, you'd need the original inputs
    const currentTotal = currentCalculation.totalAmount;
    let savingsAmount = 0;
    let savingsPercentage = 0;

    switch (scenario) {
      case 'lowerRate':
        // Assume 1% lower interest rate saves about 10% of total interest
        savingsAmount = currentCalculation.totalInterest * 0.1;
        break;
      case 'shorterTerm':
        // Assume shorter term saves about 15% of total interest
        savingsAmount = currentCalculation.totalInterest * 0.15;
        break;
      case 'custom':
        // Custom calculation based on user input
        savingsAmount = currentTotal - customRate;
        break;
    }

    savingsPercentage = (savingsAmount / currentTotal) * 100;
    return { savingsAmount, savingsPercentage };
  };

  const { savingsAmount, savingsPercentage } = calculateSavings();

  const scenarios = [
    {
      id: 'lowerRate' as const,
      title: 'Lower Interest Rate',
      description: 'Negotiate a 1% lower interest rate',
      icon: TrendingDown,
      color: 'text-success-text',
      bgColor: 'bg-success-secondary',
      borderColor: 'border-success-primary'
    },
    {
      id: 'shorterTerm' as const,
      title: 'Shorter Loan Term',
      description: 'Pay off loan 3 months earlier',
      icon: Calculator,
      color: 'text-info-text',
      bgColor: 'bg-info-secondary',
      borderColor: 'border-info-primary'
    },
    {
      id: 'custom' as const,
      title: 'Custom Scenario',
      description: 'Define your own savings target',
      icon: Calculator,
      color: 'text-text-accent',
      bgColor: 'bg-accent-50 dark:bg-accent-900/20',
      borderColor: 'border-border-accent'
    }
  ];

  return (
    <FadeInSection className={cn('space-y-6', className)}>
      <div className="bg-surface-primary border border-border-primary rounded-lg p-6 shadow-sm">
        <div className="flex items-center space-x-2 mb-6">
          <TrendingDown className="h-6 w-6 text-success-primary" />
          <h3 className="text-xl font-semibold text-text-primary">Savings Calculator</h3>
        </div>

        <div className="grid gap-4 md:grid-cols-3 mb-6">
          {scenarios.map((scenarioOption) => {
            const Icon = scenarioOption.icon;
            return (
              <button
                key={scenarioOption.id}
                onClick={() => setScenario(scenarioOption.id)}
                className={cn(
                  'p-4 rounded-lg border-2 text-left transition-all',
                  'hover:shadow-md focus:outline-none focus:ring-2 focus:ring-border-accent',
                  scenario === scenarioOption.id
                    ? `${scenarioOption.borderColor} ${scenarioOption.bgColor}`
                    : 'border-border-primary bg-surface-primary hover:border-border-secondary'
                )}
              >
                <div className="flex items-center space-x-2 mb-2">
                  <Icon className={cn('h-5 w-5', scenarioOption.color)} />
                  <span className="font-medium text-text-primary">{scenarioOption.title}</span>
                </div>
                <p className="text-sm text-text-secondary">{scenarioOption.description}</p>
              </button>
            );
          })}
        </div>

        {scenario === 'custom' && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mb-6 p-4 bg-surface-secondary rounded-lg"
          >
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-text-primary mb-2">
                  Target Total Amount
                </label>
                <input
                  type="number"
                  value={customRate}
                  onChange={(e) => setCustomRate(Number(e.target.value))}
                  className="w-full px-3 py-2 border border-border-primary rounded-md focus:outline-none focus:ring-2 focus:ring-border-accent bg-surface-primary text-text-primary"
                  placeholder="Enter target amount"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-text-primary mb-2">
                  Target Loan Term (months)
                </label>
                <input
                  type="number"
                  value={customTerm}
                  onChange={(e) => setCustomTerm(Number(e.target.value))}
                  className="w-full px-3 py-2 border border-border-primary rounded-md focus:outline-none focus:ring-2 focus:ring-border-accent bg-surface-primary text-text-primary"
                  placeholder="Enter term in months"
                />
              </div>
            </div>
          </motion.div>
        )}

        <div className="bg-gradient-to-r from-success-secondary to-info-secondary border border-success-primary rounded-lg p-6">
          <div className="text-center mb-4">
            <h4 className="text-lg font-semibold text-text-primary mb-2">
              Potential Savings
            </h4>
            <p className="text-sm text-text-secondary">
              Based on your selected scenario
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="text-center">
              <div className="text-2xl font-bold text-success-text mb-1">
                <AnimatedCounter 
                  value={savingsAmount}
                  formatValue={formatCurrency}
                />
              </div>
              <div className="text-sm text-text-secondary">Total Savings</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-info-text mb-1">
                {savingsPercentage.toFixed(1)}%
              </div>
              <div className="text-sm text-text-secondary">Savings Percentage</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-text-accent mb-1">
                <AnimatedCounter 
                  value={currentCalculation.totalAmount - savingsAmount}
                  formatValue={formatCurrency}
                />
              </div>
              <div className="text-sm text-text-secondary">New Total Amount</div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-surface-primary rounded-lg border border-success-primary">
            <div className="flex items-center space-x-2 text-success-text">
              <ArrowRight className="h-4 w-4" />
              <span className="text-sm font-medium">
                💡 Pro Tip: {scenarios.find(s => s.id === scenario)?.description}
              </span>
            </div>
          </div>
        </div>
      </div>
    </FadeInSection>
  );
} 