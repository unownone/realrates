/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{ts,tsx}',
    './index.html',
  ],
  darkMode: 'class',
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        // Background Colors
        bg: {
          primary: 'var(--color-bg-primary)',
          secondary: 'var(--color-bg-secondary)',
          tertiary: 'var(--color-bg-tertiary)',
          card: 'var(--color-bg-card)',
          overlay: 'var(--color-bg-overlay)',
        },
        // Surface Colors
        surface: {
          primary: 'var(--color-surface-primary)',
          secondary: 'var(--color-surface-secondary)',
          tertiary: 'var(--color-surface-tertiary)',
          elevated: 'var(--color-surface-elevated)',
          disabled: 'var(--color-surface-disabled)',
        },
        // Text Colors
        text: {
          primary: 'var(--color-text-primary)',
          secondary: 'var(--color-text-secondary)',
          tertiary: 'var(--color-text-tertiary)',
          disabled: 'var(--color-text-disabled)',
          inverse: 'var(--color-text-inverse)',
          accent: 'var(--color-text-accent)',
        },
        // Border Colors
        border: {
          primary: 'var(--color-border-primary)',
          secondary: 'var(--color-border-secondary)',
          tertiary: 'var(--color-border-tertiary)',
          accent: 'var(--color-border-accent)',
          error: 'var(--color-border-error)',
          success: 'var(--color-border-success)',
          warning: 'var(--color-border-warning)',
        },
        // Accent Colors (Brand Colors)
        accent: {
          50: 'var(--color-accent-50)',
          100: 'var(--color-accent-100)',
          200: 'var(--color-accent-200)',
          300: 'var(--color-accent-300)',
          400: 'var(--color-accent-400)',
          500: 'var(--color-accent-500)',
          600: 'var(--color-accent-600)',
          700: 'var(--color-accent-700)',
          800: 'var(--color-accent-800)',
          900: 'var(--color-accent-900)',
          950: 'var(--color-accent-950)',
        },
        // Status Colors
        success: {
          primary: 'var(--color-success-primary)',
          secondary: 'var(--color-success-secondary)',
          text: 'var(--color-success-text)',
        },
        error: {
          primary: 'var(--color-error-primary)',
          secondary: 'var(--color-error-secondary)',
          text: 'var(--color-error-text)',
        },
        warning: {
          primary: 'var(--color-warning-primary)',
          secondary: 'var(--color-warning-secondary)',
          text: 'var(--color-warning-text)',
        },
        info: {
          primary: 'var(--color-info-primary)',
          secondary: 'var(--color-info-secondary)',
          text: 'var(--color-info-text)',
        },
        // Interactive Colors
        interactive: {
          primary: {
            bg: 'var(--color-interactive-primary-bg)',
            text: 'var(--color-interactive-primary-text)',
            hover: 'var(--color-interactive-primary-hover)',
            active: 'var(--color-interactive-primary-active)',
            disabled: 'var(--color-interactive-primary-disabled)',
          },
          secondary: {
            bg: 'var(--color-interactive-secondary-bg)',
            text: 'var(--color-interactive-secondary-text)',
            hover: 'var(--color-interactive-secondary-hover)',
            active: 'var(--color-interactive-secondary-active)',
            disabled: 'var(--color-interactive-secondary-disabled)',
          },
          ghost: {
            bg: 'var(--color-interactive-ghost-bg)',
            text: 'var(--color-interactive-ghost-text)',
            hover: 'var(--color-interactive-ghost-hover)',
            active: 'var(--color-interactive-ghost-active)',
            disabled: 'var(--color-interactive-ghost-disabled)',
          },
        },
        // Legacy support - keep existing color names for backward compatibility
        dark: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617',
        }
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slide-in-left": {
          "0%": { opacity: "0", transform: "translateX(-20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "scale-in": {
          "0%": { opacity: "0", transform: "scale(0.9)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        "glow": {
          "0%, 100%": { boxShadow: "0 0 5px rgba(249, 115, 22, 0.3)" },
          "50%": { boxShadow: "0 0 20px rgba(249, 115, 22, 0.6)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.5s ease-out",
        "slide-in-left": "slide-in-left 0.3s ease-out",
        "scale-in": "scale-in 0.3s ease-out",
        "glow": "glow 2s ease-in-out infinite",
      },
    },
  },
} 