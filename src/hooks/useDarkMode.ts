import { useState, useEffect, useCallback } from 'react';
import { generateCSSVariables } from '../constants/ui';

type Theme = 'light' | 'dark' | 'system';

interface UseDarkModeReturn {
  theme: Theme;
  isDark: boolean;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

export function useDarkMode(): UseDarkModeReturn {
  const [theme, setThemeState] = useState<Theme>(() => {
    // Check localStorage first
    const saved = localStorage.getItem('theme') as Theme;
    if (saved && ['light', 'dark', 'system'].includes(saved)) {
      return saved;
    }
    // Default to system
    return 'system';
  });

  const [isDark, setIsDark] = useState(false);

  // Function to determine if we should use dark mode
  const getIsDark = useCallback((currentTheme: Theme): boolean => {
    if (currentTheme === 'system') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return currentTheme === 'dark';
  }, []);

  // Function to apply theme to document
  const applyTheme = useCallback((currentTheme: Theme) => {
    const shouldBeDark = getIsDark(currentTheme);
    
    if (shouldBeDark) {
      document.documentElement.classList.add('dark');
      setIsDark(true);
    } else {
      document.documentElement.classList.remove('dark');
      setIsDark(false);
    }

    // Apply CSS variables for the current theme
    const cssVariables = generateCSSVariables(shouldBeDark);
    Object.entries(cssVariables).forEach(([property, value]) => {
      document.documentElement.style.setProperty(property, value);
    });
  }, [getIsDark]);

  // Set theme function
  const setTheme = useCallback((newTheme: Theme) => {
    setThemeState(newTheme);
    localStorage.setItem('theme', newTheme);
    applyTheme(newTheme);
  }, [applyTheme]);

  // Toggle between light and dark (skip system)
  const toggleTheme = useCallback(() => {
    setTheme(isDark ? 'light' : 'dark');
  }, [isDark, setTheme]);

  // Initialize theme on mount
  useEffect(() => {
    applyTheme(theme);
  }, [theme, applyTheme]);

  // Listen for system preference changes
  useEffect(() => {
    if (theme !== 'system') return;

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleChange = () => {
      applyTheme('system');
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [theme, applyTheme]);

  return {
    theme,
    isDark,
    setTheme,
    toggleTheme,
  };
} 