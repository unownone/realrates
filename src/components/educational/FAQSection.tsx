import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../../lib/utils';
import { FadeInSection } from '../animations';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  className?: string;
  faqs?: FAQItem[];
}

const defaultFAQs: FAQItem[] = [
  {
    question: 'What is EMI?',
    answer: 'EMI stands for Equated Monthly Installment. It\'s the fixed amount you pay every month to repay your loan, which includes both principal and interest.'
  },
  {
    question: 'How is EMI calculated?',
    answer: 'EMI is calculated using the formula: EMI = P × r × (1 + r)^n / ((1 + r)^n - 1), where P is principal, r is monthly interest rate, and n is total number of months.'
  },
  {
    question: 'What are processing fees?',
    answer: 'Processing fees are charges levied by banks for processing your loan application. These vary by bank and can be fixed amounts or percentages of the loan amount.'
  },
  {
    question: 'Why is GST charged on processing fees?',
    answer: 'As per Indian government regulations, 18% GST is applicable on banking services including processing fees, as mandated by the Goods and Services Tax Act.'
  },
  {
    question: 'Can I negotiate processing fees?',
    answer: 'Yes, processing fees are often negotiable. You can try negotiating with your bank or compare offers from different banks to get the best deal.'
  },
  {
    question: 'What\'s the difference between interest rate and APR?',
    answer: 'Interest rate is the cost of borrowing the principal amount, while APR (Annual Percentage Rate) includes both interest and other charges like processing fees.'
  }
];

export function FAQSection({ className, faqs = defaultFAQs }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={cn('space-y-6', className)}>
      <FadeInSection>
        <div className="text-center">
          <h2 className="text-2xl font-bold text-text-primary mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-text-secondary">
            Get answers to common questions about EMI calculations
          </p>
        </div>
      </FadeInSection>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <FadeInSection key={index} delay={index * 0.1}>
            <div className="card rounded-lg overflow-hidden">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-surface-secondary transition-colors"
              >
                <span className="font-medium text-text-primary">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-text-tertiary" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-text-tertiary" />
                )}
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-4 text-text-secondary">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </FadeInSection>
        ))}
      </div>
    </div>
  );
} 