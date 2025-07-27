import { useState, useRef, useEffect } from 'react';
import { Sun, Moon, Monitor, ChevronDown } from 'lucide-react';
import { cn } from '../../lib/utils';
import { useDarkMode } from '../../hooks/useDarkMode';

export function ThemeToggle() {
  const { theme, setTheme } = useDarkMode();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const themes = [
    { value: 'light' as const, label: 'Light', icon: Sun },
    { value: 'dark' as const, label: 'Dark', icon: Moon },
    { value: 'system' as const, label: 'System', icon: Monitor },
  ];

  const currentTheme = themes.find(t => t.value === theme);
  const CurrentIcon = currentTheme?.icon || Monitor;

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          'flex items-center space-x-2 px-3 py-2 rounded-lg border transition-colors',
          'hover:bg-surface-secondary',
          'focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2',
          'bg-surface-primary border-border-primary',
          'text-text-primary'
        )}
        aria-label="Toggle theme"
      >
        <CurrentIcon className="h-4 w-4" />
        <span className="text-sm font-medium hidden sm:inline">
          {currentTheme?.label}
        </span>
        <ChevronDown className={cn(
          'h-4 w-4 transition-transform',
          isOpen && 'rotate-180'
        )} />
      </button>

      {isOpen && (
        <div className={cn(
          'absolute right-0 mt-2 w-48 rounded-lg border shadow-lg z-50',
          'bg-surface-primary border-border-primary'
        )}>
          <div className="py-1">
            {themes.map((themeOption) => {
              const Icon = themeOption.icon;
              const isActive = theme === themeOption.value;
              
              return (
                <button
                  key={themeOption.value}
                  onClick={() => {
                    setTheme(themeOption.value);
                    setIsOpen(false);
                  }}
                  className={cn(
                    'w-full flex items-center space-x-3 px-4 py-2 text-sm transition-colors',
                    'hover:bg-surface-secondary',
                    'focus:outline-none focus:bg-surface-secondary',
                    'text-text-primary',
                    isActive && 'bg-accent-50 text-accent-600 dark:bg-accent-900/20 dark:text-accent-400'
                  )}
                >
                  <Icon className="h-4 w-4" />
                  <span>{themeOption.label}</span>
                  {isActive && (
                    <div className="ml-auto w-2 h-2 bg-accent-600 dark:bg-accent-400 rounded-full" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
} 