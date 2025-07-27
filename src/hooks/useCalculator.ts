import { useState, useCallback, useEffect } from 'react';
import type { CalculatorInputs, LoanCalculation } from '../types/calculator';
import { calculateTotalCost } from '../lib/calculations';
import { DEFAULT_VALUES } from '../constants/rates';

interface UseCalculatorReturn {
  inputs: CalculatorInputs;
  results: LoanCalculation | null;
  isLoading: boolean;
  error: string | null;
  hasChanges: boolean;
  updateInputs: (updates: Partial<CalculatorInputs>) => void;
  calculate: () => void;
  reset: () => void;
}

// Helper function to parse URL parameters
const parseURLParams = (): Partial<CalculatorInputs> => {
  if (typeof window === 'undefined') return {};
  
  const urlParams = new URLSearchParams(window.location.search);
  const params: Partial<CalculatorInputs> = {};
  
  // Parse basic parameters
  const principal = urlParams.get('principal');
  if (principal) {
    const num = parseFloat(principal);
    if (!isNaN(num) && num >= 1000) params.principal = num;
  }
  
  const interestRate = urlParams.get('interestRate');
  if (interestRate) {
    const num = parseFloat(interestRate);
    if (!isNaN(num) && num >= 0 && num <= 50) params.interestRate = num;
  }
  
  const loanTerm = urlParams.get('loanTerm');
  if (loanTerm) {
    const num = parseInt(loanTerm);
    if (!isNaN(num) && [3, 6, 9, 12, 18, 24].includes(num)) params.loanTerm = num;
  }
  
  const selectedBank = urlParams.get('selectedBank');
  if (selectedBank) params.selectedBank = selectedBank;
  
  // Parse custom fees
  const customFees = urlParams.get('customFees');
  if (customFees) {
    const num = parseFloat(customFees);
    if (!isNaN(num) && num >= 0) params.customFees = num;
  }
  
  const customFeeType = urlParams.get('customFeeType');
  if (customFeeType && ['fixed', 'percentage'].includes(customFeeType)) {
    params.customFeeType = customFeeType as 'fixed' | 'percentage';
  }
  
  // Parse No-Cost EMI settings
  const noCostEMI = urlParams.get('noCostEMI');
  if (noCostEMI) {
    params.noCostEMI = noCostEMI === 'true';
  }
  
  const noCostEMIDiscountType = urlParams.get('noCostEMIDiscountType');
  if (noCostEMIDiscountType && ['principal_reduction', 'refund'].includes(noCostEMIDiscountType)) {
    params.noCostEMIDiscountType = noCostEMIDiscountType as 'principal_reduction' | 'refund';
  }
  
  return params;
};

export function useCalculator(): UseCalculatorReturn {
  const [inputs, setInputs] = useState<CalculatorInputs>(() => {
    // Initialize with URL parameters if available, otherwise use defaults
    const urlParams = parseURLParams();
    return {
      principal: urlParams.principal ?? DEFAULT_VALUES.principal,
      interestRate: urlParams.interestRate ?? DEFAULT_VALUES.interestRate,
      loanTerm: urlParams.loanTerm ?? DEFAULT_VALUES.loanTerm,
      selectedBank: urlParams.selectedBank ?? DEFAULT_VALUES.selectedBank,
      noCostEMI: urlParams.noCostEMI ?? false,
      noCostEMIDiscountType: urlParams.noCostEMIDiscountType ?? 'principal_reduction',
      customFeeType: urlParams.customFeeType ?? 'fixed',
      customFees: urlParams.customFees, // Initialize customFees as undefined
    };
  });
  
  const [results, setResults] = useState<LoanCalculation | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [lastCalculatedInputs, setLastCalculatedInputs] = useState<CalculatorInputs | null>(null);

  // Auto-calculate when URL parameters are present on page load
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const hasURLParams = urlParams.has('principal') || 
                        urlParams.has('interestRate') || 
                        urlParams.has('loanTerm') || 
                        urlParams.has('selectedBank');
    
    if (hasURLParams) {
      // Small delay to ensure inputs are properly initialized
      const timer = setTimeout(() => {
        calculate();
      }, 100);
      
      return () => clearTimeout(timer);
    }
  }, []); // Only run on mount

  // Scroll to results when they're calculated automatically from URL params
  useEffect(() => {
    if (results && typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      const hasURLParams = urlParams.has('principal') || 
                          urlParams.has('interestRate') || 
                          urlParams.has('loanTerm') || 
                          urlParams.has('selectedBank');
      
      if (hasURLParams) {
        // Small delay to ensure results are rendered
        const timer = setTimeout(() => {
          const resultsSection = document.getElementById('results-section');
          if (resultsSection) {
            resultsSection.scrollIntoView({ 
              behavior: 'smooth', 
              block: 'start' 
            });
          }
        }, 200);
        
        return () => clearTimeout(timer);
      }
    }
  }, [results]); // Run when results change

  const updateInputs = useCallback((updates: Partial<CalculatorInputs>) => {
    setInputs(prev => {
      const newInputs = { ...prev, ...updates };
      
      // Update URL with new parameters
      if (typeof window !== 'undefined') {
        const url = new URL(window.location.href);
        const params = new URLSearchParams();
        
        // Add all parameters to URL
        params.set('principal', newInputs.principal.toString());
        params.set('interestRate', newInputs.interestRate.toString());
        params.set('loanTerm', newInputs.loanTerm.toString());
        params.set('selectedBank', newInputs.selectedBank);
        
        if (newInputs.customFees !== undefined) {
          params.set('customFees', newInputs.customFees.toString());
        }
        if (newInputs.customFeeType) {
          params.set('customFeeType', newInputs.customFeeType);
        }
        if (newInputs.noCostEMI !== undefined) {
          params.set('noCostEMI', newInputs.noCostEMI.toString());
        }
        if (newInputs.noCostEMIDiscountType) {
          params.set('noCostEMIDiscountType', newInputs.noCostEMIDiscountType);
        }
        
        // Update URL without reloading the page
        url.search = params.toString();
        window.history.replaceState({}, '', url.toString());
      }
      
      return newInputs;
    });
    setError(null); // Clear any previous errors
  }, []);

  const calculate = useCallback(() => {
    setIsLoading(true);
    setError(null);
    
    try {
      // Validate inputs
      if (inputs.principal < 1000) {
        throw new Error('Principal amount must be at least ₹1,000');
      }
      
      if (inputs.interestRate < 0 || inputs.interestRate > 50) {
        throw new Error('Interest rate must be between 0% and 50%');
      }
      
      // Validate custom fee percentage if applicable
      if (inputs.customFees !== undefined && inputs.customFeeType === 'percentage') {
        if (inputs.customFees < 0 || inputs.customFees > 10) {
          throw new Error('Custom fee percentage must be between 0% and 10%');
        }
      }
      
      // Calculate with a small delay to show loading state
      setTimeout(() => {
        try {
          const calculation = calculateTotalCost(inputs);
          setResults(calculation);
          setLastCalculatedInputs(inputs);
          setIsLoading(false);
        } catch (calcError) {
          setError(calcError instanceof Error ? calcError.message : 'Calculation failed');
          setIsLoading(false);
        }
      }, 100);
      
    } catch (validationError) {
      setError(validationError instanceof Error ? validationError.message : 'Invalid inputs');
      setIsLoading(false);
    }
  }, [inputs]);

  const reset = useCallback(() => {
    const defaultInputs: CalculatorInputs = {
      principal: DEFAULT_VALUES.principal,
      interestRate: DEFAULT_VALUES.interestRate,
      loanTerm: DEFAULT_VALUES.loanTerm,
      selectedBank: DEFAULT_VALUES.selectedBank,
      noCostEMI: false,
      noCostEMIDiscountType: 'principal_reduction',
      customFeeType: 'fixed',
      customFees: undefined, // Reset customFees to undefined
    };
    
    setInputs(defaultInputs);
    setResults(null);
    setError(null);
    setIsLoading(false);
    setLastCalculatedInputs(null);
    
    // Clear URL parameters on reset
    if (typeof window !== 'undefined') {
      const url = new URL(window.location.href);
      url.search = '';
      window.history.replaceState({}, '', url.toString());
    }
  }, []);

  // Check if inputs have changed since last calculation
  const hasChanges = lastCalculatedInputs === null || 
    JSON.stringify(inputs) !== JSON.stringify(lastCalculatedInputs);

  return {
    inputs,
    results,
    isLoading,
    error,
    hasChanges,
    updateInputs,
    calculate,
    reset,
  };
} 