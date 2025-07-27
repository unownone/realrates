import { useState } from 'react';
import { BarChart3, TrendingUp, TrendingDown } from 'lucide-react';
import { cn } from '../../lib/utils';
import { FadeInSection } from '../animations';
import { AnimatedCounter } from '../animations';
import type { LoanCalculation } from '../../types/calculator';


interface LoanComparisonProps {
  calculation1: LoanCalculation;
  calculation2: LoanCalculation;
  label1?: string;
  label2?: string;
  className?: string;
}

export function LoanComparison({
  calculation1,
  calculation2,
  label1 = 'Option 1',
  label2 = 'Option 2',
  className
}: LoanComparisonProps) {
  const [selectedMetric, setSelectedMetric] = useState<'emi' | 'total' | 'interest' | 'fees'>('emi');

  const metrics = [
    {
      key: 'emi' as const,
      label: 'Monthly EMI',
      value1: calculation1.emi,
      value2: calculation2.emi,
      format: (value: number) => `₹${value.toLocaleString('en-IN')}`,
      icon: BarChart3
    },
    {
      key: 'total' as const,
      label: 'Total Amount',
      value1: calculation1.totalAmount,
      value2: calculation2.totalAmount,
      format: (value: number) => `₹${value.toLocaleString('en-IN')}`,
      icon: TrendingUp
    },
    {
      key: 'interest' as const,
      label: 'Total Interest',
      value1: calculation1.totalInterest,
      value2: calculation2.totalInterest,
      format: (value: number) => `₹${value.toLocaleString('en-IN')}`,
      icon: TrendingDown
    },
    {
      key: 'fees' as const,
      label: 'Processing Fees',
      value1: calculation1.totalFees + calculation1.totalGST,
      value2: calculation2.totalFees + calculation2.totalGST,
      format: (value: number) => `₹${value.toLocaleString('en-IN')}`,
      icon: BarChart3
    }
  ];

  const selectedMetricData = metrics.find(m => m.key === selectedMetric);
  const isOption1Better = selectedMetricData && selectedMetricData.value1 < selectedMetricData.value2;
  const difference = selectedMetricData ? Math.abs(selectedMetricData.value1 - selectedMetricData.value2) : 0;
  const percentageDiff = selectedMetricData ? (difference / Math.max(selectedMetricData.value1, selectedMetricData.value2)) * 100 : 0;

  return (
    <div className={cn('space-y-6', className)}>
      <FadeInSection>
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Loan Comparison
          </h2>
          <p className="text-lg text-gray-600">
            Compare different loan options side by side
          </p>
        </div>
      </FadeInSection>

      {/* Metric Selector */}
      <FadeInSection delay={0.1}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {metrics.map((metric) => {
            const Icon = metric.icon;
            return (
              <button
                key={metric.key}
                onClick={() => setSelectedMetric(metric.key)}
                className={cn(
                  'p-4 rounded-lg border-2 transition-all',
                  'hover:shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500',
                  selectedMetric === metric.key
                    ? 'border-indigo-500 bg-indigo-50 text-indigo-700'
                    : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300'
                )}
              >
                <div className="flex items-center space-x-2">
                  <Icon className="h-5 w-5" />
                  <span className="font-medium text-sm">{metric.label}</span>
                </div>
              </button>
            );
          })}
        </div>
      </FadeInSection>

      {/* Comparison Display */}
      <FadeInSection delay={0.2}>
        <div className="grid md:grid-cols-2 gap-6">
          {/* Option 1 */}
          <div className={cn(
            'p-6 rounded-lg border-2 transition-all',
            isOption1Better && selectedMetric !== 'fees'
              ? 'border-green-500 bg-green-50'
              : 'border-gray-200 bg-white'
          )}>
            <h3 className="font-semibold text-gray-900 mb-4">{label1}</h3>
            <div className="space-y-3">
              {selectedMetricData && (
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900 mb-2">
                    <AnimatedCounter 
                      value={selectedMetricData.value1}
                      formatValue={selectedMetricData.format}
                    />
                  </div>
                  <div className="text-sm text-gray-600">
                    {selectedMetricData.label}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Option 2 */}
          <div className={cn(
            'p-6 rounded-lg border-2 transition-all',
            !isOption1Better && selectedMetric !== 'fees'
              ? 'border-green-500 bg-green-50'
              : 'border-gray-200 bg-white'
          )}>
            <h3 className="font-semibold text-gray-900 mb-4">{label2}</h3>
            <div className="space-y-3">
              {selectedMetricData && (
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900 mb-2">
                    <AnimatedCounter 
                      value={selectedMetricData.value2}
                      formatValue={selectedMetricData.format}
                    />
                  </div>
                  <div className="text-sm text-gray-600">
                    {selectedMetricData.label}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </FadeInSection>

      {/* Summary */}
      <FadeInSection delay={0.3}>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="font-semibold text-blue-900 mb-3">
            💡 Comparison Summary
          </h3>
          <div className="space-y-2 text-blue-800">
            <p>
              <strong>Difference:</strong> {selectedMetricData?.format(difference)}
            </p>
            <p>
              <strong>Percentage:</strong> {percentageDiff.toFixed(1)}%
            </p>
            <p>
              <strong>Recommendation:</strong> {
                selectedMetric === 'fees' 
                  ? 'Lower fees are better'
                  : isOption1Better 
                    ? `${label1} is better for ${selectedMetricData?.label.toLowerCase()}`
                    : `${label2} is better for ${selectedMetricData?.label.toLowerCase()}`
              }
            </p>
          </div>
        </div>
      </FadeInSection>
    </div>
  );
} 