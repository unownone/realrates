import { Calculator, TrendingUp, Building2, Receipt, Info } from 'lucide-react';
import { cn } from '../../lib/utils';
import { FadeInSection } from '../animations';

interface HowItWorksProps {
  className?: string;
}

export function HowItWorks({ className }: HowItWorksProps) {
  const steps = [
    {
      icon: Calculator,
      title: 'Enter Loan Details',
      description: 'Input your principal amount, interest rate, loan term, and select your bank.',
      color: 'text-info-primary',
      bgColor: 'status-info',
      borderColor: 'border-info-primary'
    },
    {
      icon: TrendingUp,
      title: 'Calculate EMI',
      description: 'Our calculator computes your monthly EMI using the standard EMI formula.',
      color: 'text-success-primary',
      bgColor: 'status-success',
      borderColor: 'border-success-primary'
    },
    {
      icon: Building2,
      title: 'Add Processing Fees',
      description: 'Bank processing fees are calculated based on your selected bank\'s fee structure.',
      color: 'text-warning-primary',
      bgColor: 'status-warning',
      borderColor: 'border-warning-primary'
    },
    {
      icon: Receipt,
      title: 'Include GST',
      description: '18% GST is applied to processing fees as per Indian government regulations.',
      color: 'text-accent-600',
      bgColor: 'bg-accent-50 dark:bg-accent-900/20',
      borderColor: 'border-accent-200 dark:border-accent-700'
    }
  ];

  return (
    <div className={cn('space-y-8', className)}>
      <FadeInSection>
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Info className="h-6 w-6 text-accent-600" />
            <h2 className="text-2xl font-bold text-text-primary">How It Works</h2>
          </div>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Understand how your EMI is calculated and where your money goes
          </p>
        </div>
      </FadeInSection>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <FadeInSection key={index} delay={index * 0.1}>
              <div className={cn(
                'p-6 rounded-lg border-2 text-center',
                step.bgColor,
                step.borderColor
              )}>
                <div className={cn('flex justify-center mb-4', step.color)}>
                  <Icon className="h-8 w-8" />
                </div>
                <h3 className="font-semibold text-text-primary mb-2">
                  {index + 1}. {step.title}
                </h3>
                <p className="text-sm text-text-secondary">
                  {step.description}
                </p>
              </div>
            </FadeInSection>
          );
        })}
      </div>

      <FadeInSection delay={0.5}>
        <div className="bg-accent-50 dark:bg-accent-900/20 border border-accent-200 dark:border-accent-700 rounded-lg p-6">
          <h3 className="font-semibold text-accent-900 dark:text-accent-100 mb-3">
            💡 Pro Tip
          </h3>
          <p className="text-accent-800 dark:text-accent-200">
            Always compare the total cost (principal + interest + fees + GST) rather than just the EMI amount. 
            A lower EMI might mean a longer loan term and higher total interest payments.
          </p>
        </div>
      </FadeInSection>
    </div>
  );
} 