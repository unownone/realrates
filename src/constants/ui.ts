// UI Constants and Color Palette
export const UI_CONSTANTS = {
  CURRENCY: {
    SYMBOL: '₹',
    LOCALE: 'en-IN',
  },
  VALIDATION: {
    MIN_PRINCIPAL: 1000,
    MAX_PRINCIPAL: 1000000,
    MIN_INTEREST_RATE: 0,
    MAX_INTEREST_RATE: 50,
    MIN_LOAN_TERM: 1,
    MAX_LOAN_TERM: 60,
  },
  ANIMATION: {
    DURATION: {
      FAST: 150,
      NORMAL: 200,
      SLOW: 300,
    },
    EASING: {
      EASE_OUT: 'ease-out',
      EASE_IN_OUT: 'ease-in-out',
    },
  },
} as const;

// Comprehensive Color Palette System
export const COLOR_PALETTE = {
  // Light Theme Colors
  light: {
    // Background Colors
    background: {
      primary: '#ffffff',
      secondary: '#f8fafc',
      tertiary: '#f1f5f9',
      card: '#ffffff',
      overlay: 'rgba(0, 0, 0, 0.5)',
    },
    // Surface Colors
    surface: {
      primary: '#ffffff',
      secondary: '#f8fafc',
      tertiary: '#f1f5f9',
      elevated: '#ffffff',
      disabled: '#f9fafb',
    },
    // Text Colors
    text: {
      primary: '#111827',
      secondary: '#374151',
      tertiary: '#6b7280',
      disabled: '#9ca3af',
      inverse: '#ffffff',
      accent: '#ea580c',
    },
    // Border Colors
    border: {
      primary: '#e5e7eb',
      secondary: '#f3f4f6',
      tertiary: '#f9fafb',
      accent: '#f97316',
      error: '#ef4444',
      success: '#10b981',
      warning: '#f59e0b',
    },
    // Accent Colors (Brand Colors)
    accent: {
      50: '#fff7ed',
      100: '#ffedd5',
      200: '#fed7aa',
      300: '#fdba74',
      400: '#fb923c',
      500: '#f97316',
      600: '#ea580c',
      700: '#c2410c',
      800: '#9a3412',
      900: '#7c2d12',
      950: '#431407',
    },
    // Status Colors
    status: {
      success: {
        primary: '#10b981',
        secondary: '#d1fae5',
        text: '#065f46',
      },
      error: {
        primary: '#ef4444',
        secondary: '#fee2e2',
        text: '#991b1b',
      },
      warning: {
        primary: '#f59e0b',
        secondary: '#fef3c7',
        text: '#92400e',
      },
      info: {
        primary: '#3b82f6',
        secondary: '#dbeafe',
        text: '#1e40af',
      },
    },
    // Interactive Colors
    interactive: {
      primary: {
        background: '#f97316',
        text: '#ffffff',
        hover: '#ea580c',
        active: '#c2410c',
        disabled: '#fbbf24',
      },
      secondary: {
        background: '#f3f4f6',
        text: '#374151',
        hover: '#e5e7eb',
        active: '#d1d5db',
        disabled: '#f9fafb',
      },
      ghost: {
        background: 'transparent',
        text: '#374151',
        hover: '#f3f4f6',
        active: '#e5e7eb',
        disabled: '#f9fafb',
      },
    },
  },
  // Dark Theme Colors
  dark: {
    // Background Colors
    background: {
      primary: '#0a0a0a',
      secondary: '#111111',
      tertiary: '#1a1a1a',
      card: '#1e293b',
      overlay: 'rgba(0, 0, 0, 0.7)',
    },
    // Surface Colors
    surface: {
      primary: '#1e293b',
      secondary: '#334155',
      tertiary: '#475569',
      elevated: '#0f172a',
      disabled: '#334155',
    },
    // Text Colors
    text: {
      primary: '#f9fafb',
      secondary: '#e2e8f0',
      tertiary: '#cbd5e1',
      disabled: '#64748b',
      inverse: '#0f172a',
      accent: '#fb923c',
    },
    // Border Colors
    border: {
      primary: '#334155',
      secondary: '#475569',
      tertiary: '#64748b',
      accent: '#fb923c',
      error: '#f87171',
      success: '#34d399',
      warning: '#fbbf24',
    },
    // Accent Colors (Brand Colors) - Adjusted for dark mode
    accent: {
      50: '#431407',
      100: '#7c2d12',
      200: '#9a3412',
      300: '#c2410c',
      400: '#ea580c',
      500: '#f97316',
      600: '#fb923c',
      700: '#fdba74',
      800: '#fed7aa',
      900: '#ffedd5',
      950: '#fff7ed',
    },
    // Status Colors
    status: {
      success: {
        primary: '#34d399',
        secondary: '#064e3b',
        text: '#a7f3d0',
      },
      error: {
        primary: '#f87171',
        secondary: '#7f1d1d',
        text: '#fecaca',
      },
      warning: {
        primary: '#fbbf24',
        secondary: '#78350f',
        text: '#fde68a',
      },
      info: {
        primary: '#60a5fa',
        secondary: '#1e3a8a',
        text: '#bfdbfe',
      },
    },
    // Interactive Colors
    interactive: {
      primary: {
        background: '#f97316',
        text: '#ffffff',
        hover: '#fb923c',
        active: '#fdba74',
        disabled: '#c2410c',
      },
      secondary: {
        background: '#334155',
        text: '#e2e8f0',
        hover: '#475569',
        active: '#64748b',
        disabled: '#1e293b',
      },
      ghost: {
        background: 'transparent',
        text: '#e2e8f0',
        hover: '#334155',
        active: '#475569',
        disabled: '#1e293b',
      },
    },
  },
} as const;

// Semantic color mapping for easy access
export const getThemeColors = (isDark: boolean) => {
  return isDark ? COLOR_PALETTE.dark : COLOR_PALETTE.light;
};

// CSS Custom Properties for dynamic theming
export const generateCSSVariables = (isDark: boolean) => {
  const colors = getThemeColors(isDark);
  
  return {
    // Background
    '--color-bg-primary': colors.background.primary,
    '--color-bg-secondary': colors.background.secondary,
    '--color-bg-tertiary': colors.background.tertiary,
    '--color-bg-card': colors.background.card,
    '--color-bg-overlay': colors.background.overlay,
    
    // Surface
    '--color-surface-primary': colors.surface.primary,
    '--color-surface-secondary': colors.surface.secondary,
    '--color-surface-tertiary': colors.surface.tertiary,
    '--color-surface-elevated': colors.surface.elevated,
    '--color-surface-disabled': colors.surface.disabled,
    
    // Text
    '--color-text-primary': colors.text.primary,
    '--color-text-secondary': colors.text.secondary,
    '--color-text-tertiary': colors.text.tertiary,
    '--color-text-disabled': colors.text.disabled,
    '--color-text-inverse': colors.text.inverse,
    '--color-text-accent': colors.text.accent,
    
    // Border
    '--color-border-primary': colors.border.primary,
    '--color-border-secondary': colors.border.secondary,
    '--color-border-tertiary': colors.border.tertiary,
    '--color-border-accent': colors.border.accent,
    '--color-border-error': colors.border.error,
    '--color-border-success': colors.border.success,
    '--color-border-warning': colors.border.warning,
    
    // Accent
    '--color-accent-50': colors.accent[50],
    '--color-accent-100': colors.accent[100],
    '--color-accent-200': colors.accent[200],
    '--color-accent-300': colors.accent[300],
    '--color-accent-400': colors.accent[400],
    '--color-accent-500': colors.accent[500],
    '--color-accent-600': colors.accent[600],
    '--color-accent-700': colors.accent[700],
    '--color-accent-800': colors.accent[800],
    '--color-accent-900': colors.accent[900],
    '--color-accent-950': colors.accent[950],
    
    // Status
    '--color-success-primary': colors.status.success.primary,
    '--color-success-secondary': colors.status.success.secondary,
    '--color-success-text': colors.status.success.text,
    '--color-error-primary': colors.status.error.primary,
    '--color-error-secondary': colors.status.error.secondary,
    '--color-error-text': colors.status.error.text,
    '--color-warning-primary': colors.status.warning.primary,
    '--color-warning-secondary': colors.status.warning.secondary,
    '--color-warning-text': colors.status.warning.text,
    '--color-info-primary': colors.status.info.primary,
    '--color-info-secondary': colors.status.info.secondary,
    '--color-info-text': colors.status.info.text,
    
    // Interactive
    '--color-interactive-primary-bg': colors.interactive.primary.background,
    '--color-interactive-primary-text': colors.interactive.primary.text,
    '--color-interactive-primary-hover': colors.interactive.primary.hover,
    '--color-interactive-primary-active': colors.interactive.primary.active,
    '--color-interactive-primary-disabled': colors.interactive.primary.disabled,
    '--color-interactive-secondary-bg': colors.interactive.secondary.background,
    '--color-interactive-secondary-text': colors.interactive.secondary.text,
    '--color-interactive-secondary-hover': colors.interactive.secondary.hover,
    '--color-interactive-secondary-active': colors.interactive.secondary.active,
    '--color-interactive-secondary-disabled': colors.interactive.secondary.disabled,
    '--color-interactive-ghost-bg': colors.interactive.ghost.background,
    '--color-interactive-ghost-text': colors.interactive.ghost.text,
    '--color-interactive-ghost-hover': colors.interactive.ghost.hover,
    '--color-interactive-ghost-active': colors.interactive.ghost.active,
    '--color-interactive-ghost-disabled': colors.interactive.ghost.disabled,
  };
}; 