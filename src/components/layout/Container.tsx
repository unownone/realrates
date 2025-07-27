import type { ReactNode } from 'react';
import { cn } from '../../lib/utils';

interface ContainerProps {
  children: ReactNode;
  className?: string;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
  fluid?: boolean;
}

export function Container({ children, className, maxWidth = 'lg', fluid = false }: ContainerProps) {
  const maxWidthClasses = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-4xl',
    xl: 'max-w-6xl',
    '2xl': 'max-w-7xl',
    full: 'max-w-full',
  };

  return (
    <div className={cn(
      // Mobile: tight padding, Desktop: more generous padding
      'mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16',
      // Use full width on mobile, constrained width on larger screens unless fluid
      fluid ? 'w-full' : maxWidthClasses[maxWidth],
      className
    )}>
      {children}
    </div>
  );
} 