import { useState } from 'react';
import { HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../../lib/utils';

interface InfoTooltipProps {
  content: string;
  title?: string;
  position?: 'top' | 'bottom' | 'left' | 'right';
  className?: string;
  children?: React.ReactNode;
}

export function InfoTooltip({ 
  content, 
  title,
  position = 'top',
  className,
  children
}: InfoTooltipProps) {
  const [isVisible, setIsVisible] = useState(false);

  const positionClasses = {
    top: 'bottom-full left-1/2 transform -translate-x-1/2 mb-2',
    bottom: 'top-full left-1/2 transform -translate-x-1/2 mt-2',
    left: 'right-full top-1/2 transform -translate-y-1/2 mr-2',
    right: 'left-full top-1/2 transform -translate-y-1/2 ml-2'
  };

  const arrowClasses = {
    top: 'top-full left-1/2 transform -translate-x-1/2 border-t-gray-800 dark:border-t-dark-800',
    bottom: 'bottom-full left-1/2 transform -translate-x-1/2 border-b-gray-800 dark:border-b-dark-800',
    left: 'left-full top-1/2 transform -translate-y-1/2 border-l-gray-800 dark:border-l-dark-800',
    right: 'right-full top-1/2 transform -translate-y-1/2 border-r-gray-800 dark:border-r-dark-800'
  };

  return (
    <div 
      className={cn('relative inline-block', className)}
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children || (
        <HelpCircle className="h-4 w-4 text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-400 cursor-help transition-colors" />
      )}
      
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className={cn(
              'absolute z-50 w-64 p-3 bg-gray-800 dark:bg-dark-800 text-white dark:text-gray-100 text-sm rounded-lg shadow-lg border border-gray-700 dark:border-dark-600',
              positionClasses[position]
            )}
          >
            {title && (
              <div className="font-semibold mb-1">{title}</div>
            )}
            <div className="text-gray-200 dark:text-gray-300">{content}</div>
            
            {/* Arrow */}
            <div className={cn(
              'absolute w-0 h-0 border-4 border-transparent',
              arrowClasses[position]
            )} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
} 