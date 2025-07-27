import { useState, useEffect } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { cn } from '../../lib/utils';

interface AnimatedCounterProps {
  value: number;
  duration?: number;
  delay?: number;
  className?: string;
  formatValue?: (value: number) => string;
}

export function AnimatedCounter({
  value,
  duration = 1,
  delay = 0,
  className,
  formatValue = (val) => val.toLocaleString('en-IN')
}: AnimatedCounterProps) {
  const [displayValue, setDisplayValue] = useState(0);
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    const controls = animate(count, value, {
      duration,
      delay,
      ease: "easeOut"
    });

    return controls.stop;
  }, [value, count, duration, delay]);

  useEffect(() => {
    const unsubscribe = rounded.on("change", (latest) => {
      setDisplayValue(latest);
    });

    return unsubscribe;
  }, [rounded]);

  return (
    <motion.span
      className={cn('inline-block', className)}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay }}
    >
      {formatValue(displayValue)}
    </motion.span>
  );
} 