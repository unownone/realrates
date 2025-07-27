import { useState } from 'react';
import { Container, Header, Footer } from '../components/layout';
import { CalculatorForm, ResultsSection, PaymentSchedule, SavingsCalculator, RecalculateButton, ChangesIndicator } from '../components/calculator';
import { CostPieChart } from '../components/charts';
import { FadeInSection, PageTransition } from '../components/animations';
import { HowItWorks, FAQSection } from '../components/educational';
import { BankComparisonTable } from '../components/comparison';
import { ShareableURL } from '../components/sharing';
import { useCalculator } from '../hooks';
import { ChevronDown, ChevronUp, BarChart3, Calculator, ArrowRight, TrendingUp, Shield, Zap } from 'lucide-react';

export function CalculatorPage() {
  const [showComparison, setShowComparison] = useState(false);
  
  const {
    inputs,
    results,
    isLoading,
    error,
    hasChanges,
    updateInputs,
    calculate,
    reset
  } = useCalculator();

  return (
    <PageTransition>
      <div className="min-h-screen bg-bg-secondary">
        <Header />
        
        <main className="py-4 sm:py-6 lg:py-8 xl:py-12">
          {/* Mobile: Single column, Desktop: Full width with better spacing */}
          <div className="space-y-6 sm:space-y-8 lg:space-y-12">
            {/* Hero Section - Mobile: Compact, Desktop: Full width */}
            <Container fluid>
              <FadeInSection delay={0.1}>
                <div className="relative overflow-hidden bg-hero-gradient rounded-2xl sm:rounded-3xl border border-border-accent">
                  {/* Background Pattern */}
                  <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
                  
                  <div className="relative px-4 sm:px-8 lg:px-12 xl:px-16 py-8 sm:py-12 lg:py-16 xl:py-20">
                    <div className="max-w-4xl mx-auto text-center">
                      {/* Logo and Brand */}
                      <div className="flex justify-center mb-4 sm:mb-6 lg:mb-8">
                        <div className="flex h-12 w-12 sm:h-16 sm:w-16 lg:h-20 lg:w-20 items-center justify-center rounded-2xl bg-accent-500 shadow-2xl animate-glow">
                          <Calculator className="h-6 w-6 sm:h-8 sm:w-8 lg:h-10 lg:w-10 text-white" />
                        </div>
                      </div>
                      
                      {/* Main Headline - Mobile: Smaller, Desktop: Larger */}
                      <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold hero-text mb-3 sm:mb-4 lg:mb-6 leading-tight">
                        <span className="bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">
                          RealRates!
                        </span>
                      </h1>
                      <p className="text-base sm:text-lg lg:text-xl xl:text-2xl font-medium hero-text-secondary mb-3 sm:mb-4">
                        by <span className="hero-text-accent font-semibold">Spenddy</span>
                      </p>
                      
                      {/* Bold Tagline - Mobile: Compact, Desktop: Spacious */}
                      <p className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-semibold hero-text mb-4 sm:mb-6 lg:mb-8 max-w-4xl mx-auto leading-relaxed">
                        See exactly how much goes to the bank, government, and what you actually pay
                        <span className="block hero-text-accent font-bold">
                          — No Hidden Costs!
                        </span>
                      </p>
                      
                      {/* Feature Highlights - Mobile: Stack, Desktop: Row */}
                      <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 lg:gap-6 mb-6 sm:mb-8 lg:mb-10">
                        <div className="flex items-center justify-center sm:justify-start space-x-2 px-3 sm:px-4 py-2 bg-surface-primary rounded-full shadow-md border border-border-accent">
                          <Shield className="h-4 w-4 text-accent-500" />
                          <span className="text-sm font-medium text-text-primary">100% Transparent</span>
                        </div>
                        <div className="flex items-center justify-center sm:justify-start space-x-2 px-3 sm:px-4 py-2 bg-surface-primary rounded-full shadow-md border border-border-accent">
                          <TrendingUp className="h-4 w-4 text-accent-500" />
                          <span className="text-sm font-medium text-text-primary">Real-time Calculations</span>
                        </div>
                        <div className="flex items-center justify-center sm:justify-start space-x-2 px-3 sm:px-4 py-2 bg-surface-primary rounded-full shadow-md border border-border-accent">
                          <Zap className="h-4 w-4 text-accent-500" />
                          <span className="text-sm font-medium text-text-primary">Instant Results</span>
                        </div>
                      </div>
                      
                      {/* CTA Button - Mobile: Full width, Desktop: Auto width */}
                      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
                        <button
                          onClick={() => {
                            const calculatorSection = document.getElementById('calculator-section');
                            if (calculatorSection) {
                              calculatorSection.scrollIntoView({ behavior: 'smooth' });
                            }
                          }}
                          className="w-full sm:w-auto group flex items-center justify-center space-x-3 px-6 sm:px-8 py-3 sm:py-4 btn-primary font-bold text-base sm:text-lg rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 animate-pulse"
                        >
                          <span>Get Started Now</span>
                          <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform duration-200" />
                        </button>
                        
                        <p className="text-xs sm:text-sm text-text-secondary text-center sm:text-left">
                          Free • No Registration • No Hidden Fees
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeInSection>
            </Container>
            
            {/* Calculator Section - Mobile: Stack, Desktop: Side by side with full width */}
            <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
              <div className="flex justify-center">
                <div id="calculator-section" className={`grid gap-4 sm:gap-6 lg:gap-8 xl:gap-12 w-full max-w-7xl ${results ? 'grid-cols-1 lg:grid-cols-2 xl:grid-cols-3' : 'grid-cols-1 lg:grid-cols-2'}`}>
                  <div>
                    <div className="card rounded-lg shadow-sm p-4 sm:p-6 lg:p-8 overflow-hidden">
                      <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-text-primary mb-4 sm:mb-6">
                        Loan Details
                      </h2>
                      <CalculatorForm
                        inputs={inputs}
                        onInputChange={updateInputs}
                        onSubmit={calculate}
                        onReset={reset}
                        isLoading={isLoading}
                        error={error || undefined}
                        hasChanges={hasChanges}
                      />
                    </div>
                  </div>
                  
                  <div id="results-section">
                    <div className="card rounded-lg shadow-sm p-4 sm:p-6 lg:p-8 overflow-hidden">
                      <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-text-primary mb-4 sm:mb-6">
                        Results
                      </h2>
                      <ResultsSection
                        calculation={results}
                        isLoading={isLoading}
                        error={error || undefined}
                      />
                    </div>
                  </div>

                  {/* Desktop: Third column for charts when results exist */}
                  {results && (
                    <div>
                      <div className="card rounded-lg shadow-sm p-4 sm:p-6 lg:p-8 overflow-hidden lg:col-span-2 xl:col-span-1">
                        <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-text-primary mb-4 sm:mb-6">
                          Cost Breakdown
                        </h2>
                        <CostPieChart data={results.breakdown} />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Action Buttons - Mobile: Stack, Desktop: Row */}
            <Container fluid>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
                <ChangesIndicator
                  hasChanges={hasChanges}
                  className="w-full sm:w-auto"
                />

                <RecalculateButton
                  hasChanges={hasChanges}
                  isLoading={isLoading}
                  onCalculate={calculate}
                  className="w-full sm:w-auto"
                />
              </div>
            </Container>

            {/* Results Sections - Mobile: Stack, Desktop: Grid */}
            {results && (
              <Container fluid>
                <div className="space-y-6 sm:space-y-8 lg:space-y-12">
                  {/* Mobile: Stack, Desktop: Grid for better space usage */}
                  <div className="grid gap-4 sm:gap-6 lg:gap-8 xl:grid-cols-2">
                    <FadeInSection delay={0.5}>
                      <PaymentSchedule schedule={results.monthlySchedule} />
                    </FadeInSection>

                    <FadeInSection delay={0.6}>
                      <SavingsCalculator currentCalculation={results} />
                    </FadeInSection>
                  </div>

                  <FadeInSection delay={0.7}>
                    <ShareableURL inputs={inputs} />
                  </FadeInSection>
                </div>
              </Container>
            )}

            {/* Bank Comparison - Mobile: Compact, Desktop: Full width */}
            <Container fluid>
              <FadeInSection delay={0.8}>
                <div className="card rounded-lg shadow-sm p-4 sm:p-6 lg:p-8">
                  <button
                    onClick={() => setShowComparison(!showComparison)}
                    className="flex items-center justify-between w-full p-3 sm:p-4 text-left hover:bg-surface-secondary rounded-lg transition-colors"
                  >
                    <div className="flex items-center space-x-3">
                      <BarChart3 className="h-5 w-5 sm:h-6 sm:w-6 text-accent-500" />
                      <div>
                        <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-text-primary">Bank Comparison</h3>
                        <p className="text-sm text-text-secondary">Compare loan options across different banks</p>
                      </div>
                    </div>
                    {showComparison ? (
                      <ChevronUp className="h-4 w-4 sm:h-5 sm:w-5 text-text-tertiary" />
                    ) : (
                      <ChevronDown className="h-4 w-4 sm:h-5 sm:w-5 text-text-tertiary" />
                    )}
                  </button>
                  
                  {showComparison && (
                    <div className="mt-4 pt-4 border-t border-border-primary">
                      <BankComparisonTable inputs={inputs} />
                    </div>
                  )}
                </div>
              </FadeInSection>
            </Container>

            {/* Educational Sections - Mobile: Stack, Desktop: Side by side */}
            <Container fluid>
              <div className="grid gap-6 sm:gap-8 lg:gap-12 xl:grid-cols-2">
                <FadeInSection delay={0.9}>
                  <HowItWorks />
                </FadeInSection>

                <FadeInSection delay={1.0}>
                  <FAQSection />
                </FadeInSection>
              </div>
            </Container>
          </div>
        </main>
        
        <Footer />
      </div>
    </PageTransition>
  );
} 