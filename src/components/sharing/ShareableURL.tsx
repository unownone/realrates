import { useState } from 'react';
import { Copy, Check, Share2 } from 'lucide-react';
import { cn } from '../../lib/utils';
import { FadeInSection } from '../animations';
import type { CalculatorInputs } from '../../types/calculator';

interface ShareableURLProps {
  inputs: CalculatorInputs;
  className?: string;
}

export function ShareableURL({ inputs, className }: ShareableURLProps) {
  const [copied, setCopied] = useState(false);

  const generateShareableURL = () => {
    const params = new URLSearchParams({
      principal: inputs.principal.toString(),
      interestRate: inputs.interestRate.toString(),
      loanTerm: inputs.loanTerm.toString(),
      selectedBank: inputs.selectedBank,
      ...(inputs.customFees !== undefined && { customFees: inputs.customFees.toString() }),
      ...(inputs.customFeeType && { customFeeType: inputs.customFeeType }),
      ...(inputs.noCostEMI !== undefined && { noCostEMI: inputs.noCostEMI.toString() }),
      ...(inputs.noCostEMIDiscountType && { noCostEMIDiscountType: inputs.noCostEMIDiscountType })
    });

    return `${window.location.origin}${window.location.pathname}?${params.toString()}`;
  };

  const shareableURL = generateShareableURL();

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(shareableURL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy URL:', err);
    }
  };

  const shareViaWebAPI = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'EMI Calculation',
          text: 'Check out this EMI calculation I made with RealRates!',
          url: shareableURL
        });
      } catch (err) {
        console.error('Failed to share:', err);
      }
    } else {
      copyToClipboard();
    }
  };

  return (
    <FadeInSection className={cn('space-y-4', className)}>
      <div className="bg-surface-primary border border-border-primary rounded-lg p-6 shadow-sm">
        <div className="flex items-center space-x-2 mb-4">
          <Share2 className="h-5 w-5 text-text-accent" />
          <h3 className="font-semibold text-text-primary">Share Calculation</h3>
        </div>
        
        <div className="space-y-3">
          <p className="text-sm text-text-secondary">
            Share this calculation with others by copying the URL or using the share button.
          </p>
          
          <div className="flex space-x-2">
            <input
              type="text"
              value={shareableURL}
              readOnly
              aria-label="Shareable URL"
              className="flex-1 px-3 py-2 border border-border-primary rounded-md text-sm bg-surface-secondary text-text-primary focus:outline-none focus:ring-2 focus:ring-border-accent"
            />
            <button
              onClick={copyToClipboard}
              className={cn(
                'px-4 py-2 rounded-md transition-colors',
                'focus:outline-none focus:ring-2 focus:ring-border-accent',
                copied
                  ? 'bg-success-secondary text-success-text border border-success-primary'
                  : 'bg-interactive-primary-bg text-interactive-primary-text hover:bg-interactive-primary-hover'
              )}
            >
              {copied ? (
                <Check className="h-4 w-4" />
              ) : (
                <Copy className="h-4 w-4" />
              )}
            </button>
            <button
              onClick={shareViaWebAPI}
              aria-label="Share via native share dialog"
              className="px-4 py-2 bg-success-primary text-text-inverse rounded-md hover:bg-success-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-success-primary"
            >
              <Share2 className="h-4 w-4" />
            </button>
          </div>
          
          {copied && (
            <p className="text-sm text-success-text">
              URL copied to clipboard!
            </p>
          )}
        </div>
      </div>
    </FadeInSection>
  );
} 