# Color Palette System

## Overview

The RealRates application uses a comprehensive color palette system that ensures consistent theming across all components. The system is designed to be easily updatable by modifying the palette in one central location.

## Color Palette Structure

### Light Theme Colors

#### Background Colors
- `primary`: `#ffffff` - Main page background
- `secondary`: `#f8fafc` - Secondary background (cards, sections)
- `tertiary`: `#f1f5f9` - Tertiary background (subtle sections)
- `card`: `#ffffff` - Card backgrounds
- `overlay`: `rgba(0, 0, 0, 0.5)` - Modal overlays

#### Surface Colors
- `primary`: `#ffffff` - Primary surface (cards, inputs)
- `secondary`: `#f8fafc` - Secondary surface (hover states)
- `tertiary`: `#f1f5f9` - Tertiary surface (disabled states)
- `elevated`: `#ffffff` - Elevated surfaces (dropdowns, tooltips)
- `disabled`: `#f9fafb` - Disabled surface states

#### Text Colors
- `primary`: `#111827` - Main text color
- `secondary`: `#374151` - Secondary text (labels, descriptions)
- `tertiary`: `#6b7280` - Tertiary text (placeholders, hints)
- `disabled`: `#9ca3af` - Disabled text
- `inverse`: `#ffffff` - Text on dark backgrounds
- `accent`: `#ea580c` - Accent text color

#### Border Colors
- `primary`: `#e5e7eb` - Main border color
- `secondary`: `#f3f4f6` - Secondary border
- `tertiary`: `#f9fafb` - Tertiary border
- `accent`: `#f97316` - Accent border
- `error`: `#ef4444` - Error border
- `success`: `#10b981` - Success border
- `warning`: `#f59e0b` - Warning border

#### Accent Colors (Brand Colors)
- `50`: `#fff7ed` - Lightest accent
- `100`: `#ffedd5`
- `200`: `#fed7aa`
- `300`: `#fdba74`
- `400`: `#fb923c`
- `500`: `#f97316` - Primary accent
- `600`: `#ea580c`
- `700`: `#c2410c`
- `800`: `#9a3412`
- `900`: `#7c2d12`
- `950`: `#431407` - Darkest accent

#### Status Colors
- **Success**: Primary `#10b981`, Secondary `#d1fae5`, Text `#065f46`
- **Error**: Primary `#ef4444`, Secondary `#fee2e2`, Text `#991b1b`
- **Warning**: Primary `#f59e0b`, Secondary `#fef3c7`, Text `#92400e`
- **Info**: Primary `#3b82f6`, Secondary `#dbeafe`, Text `#1e40af`

#### Interactive Colors
- **Primary Button**: Background `#f97316`, Text `#ffffff`, Hover `#ea580c`
- **Secondary Button**: Background `#f3f4f6`, Text `#374151`, Hover `#e5e7eb`
- **Ghost Button**: Background `transparent`, Text `#374151`, Hover `#f3f4f6`

### Dark Theme Colors

#### Background Colors
- `primary`: `#0a0a0a` - Main page background
- `secondary`: `#111111` - Secondary background
- `tertiary`: `#1a1a1a` - Tertiary background
- `card`: `#1e293b` - Card backgrounds
- `overlay`: `rgba(0, 0, 0, 0.7)` - Modal overlays

#### Surface Colors
- `primary`: `#1e293b` - Primary surface
- `secondary`: `#334155` - Secondary surface
- `tertiary`: `#475569` - Tertiary surface
- `elevated`: `#0f172a` - Elevated surfaces
- `disabled`: `#334155` - Disabled surface states

#### Text Colors
- `primary`: `#f9fafb` - Main text color
- `secondary`: `#e2e8f0` - Secondary text
- `tertiary`: `#cbd5e1` - Tertiary text
- `disabled`: `#64748b` - Disabled text
- `inverse`: `#0f172a` - Text on light backgrounds
- `accent`: `#fb923c` - Accent text color

#### Border Colors
- `primary`: `#334155` - Main border color
- `secondary`: `#475569` - Secondary border
- `tertiary`: `#64748b` - Tertiary border
- `accent`: `#fb923c` - Accent border
- `error`: `#f87171` - Error border
- `success`: `#34d399` - Success border
- `warning`: `#fbbf24` - Warning border

#### Accent Colors (Brand Colors) - Adjusted for Dark Mode
- `50`: `#431407` - Darkest accent
- `100`: `#7c2d12`
- `200`: `#9a3412`
- `300`: `#c2410c`
- `400`: `#ea580c`
- `500`: `#f97316` - Primary accent
- `600`: `#fb923c`
- `700`: `#fdba74`
- `800`: `#fed7aa`
- `900`: `#ffedd5`
- `950`: `#fff7ed` - Lightest accent

#### Status Colors
- **Success**: Primary `#34d399`, Secondary `#064e3b`, Text `#a7f3d0`
- **Error**: Primary `#f87171`, Secondary `#7f1d1d`, Text `#fecaca`
- **Warning**: Primary `#fbbf24`, Secondary `#78350f`, Text `#fde68a`
- **Info**: Primary `#60a5fa`, Secondary `#1e3a8a`, Text `#bfdbfe`

#### Interactive Colors
- **Primary Button**: Background `#f97316`, Text `#ffffff`, Hover `#fb923c`
- **Secondary Button**: Background `#334155`, Text `#e2e8f0`, Hover `#475569`
- **Ghost Button**: Background `transparent`, Text `#e2e8f0`, Hover `#334155`

## Usage

### CSS Classes

The color palette is available through semantic CSS classes:

#### Background Classes
- `bg-bg-primary` - Main background
- `bg-bg-secondary` - Secondary background
- `bg-bg-tertiary` - Tertiary background
- `bg-bg-card` - Card background
- `bg-surface-primary` - Primary surface
- `bg-surface-secondary` - Secondary surface
- `bg-surface-tertiary` - Tertiary surface

#### Text Classes
- `text-text-primary` - Primary text
- `text-text-secondary` - Secondary text
- `text-text-tertiary` - Tertiary text
- `text-text-disabled` - Disabled text
- `text-text-inverse` - Inverse text
- `text-text-accent` - Accent text

#### Border Classes
- `border-border-primary` - Primary border
- `border-border-secondary` - Secondary border
- `border-border-accent` - Accent border
- `border-border-error` - Error border
- `border-border-success` - Success border
- `border-border-warning` - Warning border

#### Interactive Classes
- `bg-interactive-primary-bg` - Primary button background
- `text-interactive-primary-text` - Primary button text
- `hover:bg-interactive-primary-hover` - Primary button hover
- `bg-interactive-secondary-bg` - Secondary button background
- `text-interactive-secondary-text` - Secondary button text
- `hover:bg-interactive-secondary-hover` - Secondary button hover

#### Status Classes
- `bg-success-primary` - Success background
- `text-success-text` - Success text
- `bg-error-primary` - Error background
- `text-error-text` - Error text
- `bg-warning-primary` - Warning background
- `text-warning-text` - Warning text
- `bg-info-primary` - Info background
- `text-info-text` - Info text

### Component Classes

#### Button Classes
- `btn-primary` - Primary button styling
- `btn-secondary` - Secondary button styling

#### Card Classes
- `card` - Card styling
- `card-hover` - Card with hover effects

#### Input Classes
- `input` - Input field styling

#### Status Classes
- `status-success` - Success message styling
- `status-error` - Error message styling
- `status-warning` - Warning message styling
- `status-info` - Info message styling

### Hero Section Classes
- `bg-hero-gradient` - Hero section gradient background
- `hero-text` - Hero section primary text
- `hero-text-secondary` - Hero section secondary text
- `hero-text-accent` - Hero section accent text

## Implementation

### CSS Variables

The color palette is implemented using CSS custom properties (variables) that are dynamically updated based on the current theme:

```css
:root {
  --color-bg-primary: #ffffff;
  --color-text-primary: #111827;
  --color-border-primary: #e5e7eb;
  /* ... more variables */
}

.dark {
  --color-bg-primary: #0a0a0a;
  --color-text-primary: #f9fafb;
  --color-border-primary: #334155;
  /* ... more variables */
}
```

### JavaScript Integration

The theme system is integrated with React through the `useDarkMode` hook:

```typescript
import { generateCSSVariables } from '../constants/ui';

// Apply theme colors
const cssVariables = generateCSSVariables(isDark);
Object.entries(cssVariables).forEach(([property, value]) => {
  document.documentElement.style.setProperty(property, value);
});
```

### Tailwind Configuration

The color palette is integrated with Tailwind CSS through the `tailwind.config.js`:

```javascript
colors: {
  bg: {
    primary: 'var(--color-bg-primary)',
    secondary: 'var(--color-bg-secondary)',
    // ...
  },
  text: {
    primary: 'var(--color-text-primary)',
    secondary: 'var(--color-text-secondary)',
    // ...
  },
  // ...
}
```

## Updating the Palette

To update the color palette:

1. **Modify the palette definition** in `src/constants/ui.ts`
2. **Update CSS variables** if needed in `src/index.css`
3. **Test both themes** to ensure proper contrast and accessibility
4. **Update documentation** if adding new color categories

### Example: Adding a New Color

```typescript
// In src/constants/ui.ts
export const COLOR_PALETTE = {
  light: {
    // ... existing colors
    new: {
      primary: '#your-color',
      secondary: '#your-secondary-color',
    },
  },
  dark: {
    // ... existing colors
    new: {
      primary: '#your-dark-color',
      secondary: '#your-dark-secondary-color',
    },
  },
};
```

```css
/* In src/index.css */
.new-primary {
  background-color: var(--color-new-primary);
  color: var(--color-new-text);
}
```

```javascript
// In tailwind.config.js
colors: {
  // ... existing colors
  new: {
    primary: 'var(--color-new-primary)',
    secondary: 'var(--color-new-secondary)',
  },
}
```

## Accessibility

The color palette is designed with accessibility in mind:

- **WCAG AA Compliance**: All text colors meet minimum contrast ratios
- **Color Independence**: Information is not conveyed by color alone
- **Focus Indicators**: Clear focus indicators for keyboard navigation
- **High Contrast**: Support for high contrast mode preferences

## Best Practices

1. **Use semantic classes** instead of hardcoded colors
2. **Test both themes** when making changes
3. **Maintain contrast ratios** for accessibility
4. **Use consistent naming** for color variants
5. **Document new colors** when adding them
6. **Consider color blindness** when choosing colors

## Migration Guide

When migrating from the old color system:

1. Replace hardcoded colors with semantic classes
2. Update component props to use new color names
3. Test all components in both light and dark themes
4. Verify accessibility compliance
5. Update any custom CSS that references old colors

Example migration:
```typescript
// Old
className="bg-white dark:bg-dark-800 text-gray-900 dark:text-white"

// New
className="bg-surface-primary text-text-primary"
``` 