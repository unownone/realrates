import { Link } from 'react-router-dom';
import { Shield, FileText, Github } from 'lucide-react';
import { cn } from '../../lib/utils';

interface FooterProps {
  className?: string;
}

export function Footer({ className }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={cn(
      'border-t border-border-primary bg-bg-primary py-6 sm:py-8 lg:py-12',
      className
    )}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="flex flex-col items-center text-center space-y-4 sm:space-y-6">
          <div className="flex flex-wrap justify-center gap-x-4 sm:gap-x-6 gap-y-2 sm:gap-y-3 text-xs sm:text-sm font-medium">
            <Link
              to="/privacy"
              className="text-text-secondary hover:text-accent-600 dark:hover:text-accent-400 transition-colors flex items-center space-x-1"
            >
              <Shield className="h-3 w-3 sm:h-4 sm:w-4" />
              <span>Privacy Policy</span>
            </Link>
            <Link
              to="/terms"
              className="text-text-secondary hover:text-accent-600 dark:hover:text-accent-400 transition-colors flex items-center space-x-1"
            >
              <FileText className="h-3 w-3 sm:h-4 sm:w-4" />
              <span>Terms of Service</span>
            </Link>
            <a
              href="https://github.com/unownone/realrates"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-accent-600 dark:hover:text-accent-400 transition-colors flex items-center space-x-1"
            >
              <Github className="h-3 w-3 sm:h-4 sm:w-4" />
              <span>GitHub</span>
            </a>
          </div>
          
          <div className="text-center">
            <p className="text-text-secondary text-xs sm:text-sm">
              © {currentYear} RealRates by Spenddy. All rights reserved.
            </p>
            <p className="text-text-tertiary text-xs mt-1">
                              RealRates - No Hidden Costs, Complete Transparency
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
} 