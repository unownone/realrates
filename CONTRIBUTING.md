# Contributing to RealRates by Spenddy

Thank you for your interest in contributing to RealRates! This document provides guidelines and information for contributors.

## 🤝 How to Contribute

We welcome contributions from the community! Whether you're fixing a bug, adding a feature, or improving documentation, your help is appreciated.

### Types of Contributions

- 🐛 **Bug Reports**: Help us identify and fix issues
- ✨ **Feature Requests**: Suggest new features or improvements
- 💻 **Code Contributions**: Submit pull requests with code changes
- 📚 **Documentation**: Improve or add documentation
- 🎨 **Design**: Help with UI/UX improvements
- 🧪 **Testing**: Write tests or help with testing
- 🌐 **Localization**: Help translate the application

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** 18+ ([Download](https://nodejs.org/))
- **pnpm** (recommended) or npm ([Install pnpm](https://pnpm.io/installation))
- **Git** ([Download](https://git-scm.com/))

### Development Setup

1. **Fork the Repository**
   ```bash
   # Go to https://github.com/unownone/realrates
   # Click the "Fork" button in the top right
   ```

2. **Clone Your Fork**
   ```bash
   git clone https://github.com/YOUR_USERNAME/realrates.git
   cd realrates
   ```

3. **Add Upstream Remote**
   ```bash
   git remote add upstream https://github.com/unownone/realrates.git
   ```

4. **Install Dependencies**
   ```bash
   pnpm install
   ```

5. **Start Development Server**
   ```bash
   pnpm dev
   ```

6. **Open in Browser**
   - Navigate to `http://localhost:5173`
   - You should see the RealRates application running

## 🛠️ Development Workflow

### Creating a Feature Branch

Always create a new branch for your changes:

```bash
# Update your main branch
git checkout main
git pull upstream main

# Create and switch to a new feature branch
git checkout -b feature/your-feature-name

# Or for bug fixes
git checkout -b fix/your-bug-description
```

### Making Changes

1. **Make your changes** in the codebase
2. **Test your changes** thoroughly
3. **Follow the coding standards** (see below)
4. **Update documentation** if needed

### Testing Your Changes

Before submitting a pull request, ensure your changes work correctly:

```bash
# Run linting
pnpm lint

# Fix linting issues automatically
pnpm lint:fix

# Type checking
pnpm type-check

# Build the project
pnpm build

# Preview the build
pnpm preview
```

### Committing Your Changes

Use conventional commit messages:

```bash
# Format: type(scope): description
git commit -m "feat(calculator): add custom processing fee input"
git commit -m "fix(ui): resolve mobile responsiveness issue"
git commit -m "docs(readme): update installation instructions"
```

**Commit Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

## 📋 Coding Standards

### TypeScript Guidelines

- **Use TypeScript** for all new code
- **Define proper types** for all functions and components
- **Avoid `any` type** - use proper typing
- **Use interfaces** for object shapes
- **Export types** from `src/types/` directory

```typescript
// Good
interface CalculatorInputs {
  principal: number;
  interestRate: number;
  loanTerm: number;
  selectedBank: string;
  customFees?: number;
}

// Avoid
const inputs: any = { ... };
```

### React Guidelines

- **Use functional components** with hooks
- **Follow naming conventions**: PascalCase for components
- **Use proper prop types** with TypeScript interfaces
- **Implement proper error boundaries**
- **Use React.memo** for performance optimization when needed

```typescript
// Good
interface CalculatorFormProps {
  inputs: CalculatorInputs;
  onInputChange: (updates: Partial<CalculatorInputs>) => void;
  onSubmit: () => void;
  isLoading?: boolean;
}

export function CalculatorForm({ inputs, onInputChange, onSubmit, isLoading }: CalculatorFormProps) {
  // Component logic
}
```

### Component Structure

- **One component per file**
- **Use index files** for clean imports
- **Group related components** in subdirectories
- **Follow the existing project structure**

```
src/components/calculator/
├── CalculatorForm.tsx
├── ResultsSection.tsx
├── MonthlyEMIDisplay.tsx
└── index.ts
```

### Styling Guidelines

- **Use Tailwind CSS** for styling
- **Follow the design system** (colors, spacing, etc.)
- **Use custom CSS classes** sparingly
- **Implement responsive design**
- **Support dark mode**

```typescript
// Good - Using Tailwind classes
<div className="bg-white dark:bg-dark-900 rounded-lg shadow-sm border border-gray-200 dark:border-dark-700 p-4 sm:p-6">
  {/* Content */}
</div>

// Avoid - Inline styles
<div style={{ backgroundColor: 'white', borderRadius: '8px' }}>
  {/* Content */}
</div>
```

### File Naming Conventions

- **Components**: PascalCase (e.g., `CalculatorForm.tsx`)
- **Hooks**: camelCase with `use` prefix (e.g., `useCalculator.ts`)
- **Utilities**: camelCase (e.g., `calculations.ts`)
- **Types**: camelCase (e.g., `calculator.ts`)
- **Constants**: UPPER_SNAKE_CASE (e.g., `BANK_RATES.ts`)

## 🧪 Testing Guidelines

### Writing Tests

- **Test all new features**
- **Test bug fixes**
- **Use descriptive test names**
- **Test edge cases**
- **Mock external dependencies**

```typescript
// Example test structure
describe('CalculatorForm', () => {
  it('should calculate EMI correctly with valid inputs', () => {
    // Test implementation
  });

  it('should show error for invalid principal amount', () => {
    // Test implementation
  });
});
```

### Running Tests

```bash
# Run all tests
pnpm test

# Run tests in watch mode
pnpm test:watch

# Run tests with coverage
pnpm test:coverage
```

## 📝 Documentation Guidelines

### Code Documentation

- **Add JSDoc comments** for complex functions
- **Document component props** with TypeScript interfaces
- **Include usage examples** for complex components
- **Update README.md** for new features

```typescript
/**
 * Calculates the EMI amount based on principal, interest rate, and loan term
 * @param principal - The loan amount
 * @param interestRate - Annual interest rate (percentage)
 * @param loanTerm - Loan term in months
 * @returns The monthly EMI amount
 */
export function calculateEMI(principal: number, interestRate: number, loanTerm: number): number {
  // Implementation
}
```

### Documentation Updates

When adding new features, update:

- **README.md**: Installation and usage instructions
- **Component documentation**: Props and usage examples
- **API documentation**: If adding new APIs
- **Changelog**: Document changes for releases

## 🔄 Pull Request Process

### Before Submitting

1. **Ensure all tests pass**
2. **Run linting and fix issues**
3. **Build the project successfully**
4. **Test on different browsers/devices**
5. **Update documentation if needed**

### Creating a Pull Request

1. **Push your branch** to your fork
   ```bash
   git push origin feature/your-feature-name
   ```

2. **Create a Pull Request**
   - Go to your fork on GitHub
   - Click "New Pull Request"
   - Select your feature branch
   - Fill out the PR template

### Pull Request Template

Use this template when creating a PR:

```markdown
## Description
Brief description of the changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Documentation update
- [ ] Code refactoring
- [ ] Performance improvement
- [ ] Other (please describe)

## Testing
- [ ] All tests pass
- [ ] Manual testing completed
- [ ] Cross-browser testing done
- [ ] Mobile responsiveness verified

## Screenshots
Add screenshots for UI changes

## Checklist
- [ ] Code follows the project's style guidelines
- [ ] Self-review of code completed
- [ ] Documentation updated
- [ ] No console errors or warnings
- [ ] Accessibility considerations addressed
```

### Review Process

1. **Automated Checks**: CI/CD will run tests and linting
2. **Code Review**: Maintainers will review your code
3. **Feedback**: Address any feedback or requested changes
4. **Approval**: Once approved, your PR will be merged

## 🐛 Reporting Bugs

### Before Reporting

1. **Check existing issues** to avoid duplicates
2. **Try to reproduce** the issue consistently
3. **Test on different browsers/devices**
4. **Check the console** for error messages

### Bug Report Template

```markdown
## Bug Description
Clear description of the issue

## Steps to Reproduce
1. Go to '...'
2. Click on '...'
3. Scroll down to '...'
4. See error

## Expected Behavior
What should happen

## Actual Behavior
What actually happens

## Environment
- Browser: [e.g., Chrome, Firefox, Safari]
- Version: [e.g., 22]
- Operating System: [e.g., macOS, Windows, Linux]
- Device: [e.g., Desktop, Mobile, Tablet]

## Additional Information
- Screenshots if applicable
- Console errors
- Network tab information
```

## 💡 Feature Requests

### Before Requesting

1. **Check existing issues** for similar requests
2. **Think about the use case** and user value
3. **Consider implementation complexity**
4. **Research similar features** in other applications

### Feature Request Template

```markdown
## Feature Description
Clear description of the requested feature

## Use Case
Why this feature would be useful

## Proposed Solution
How you think it should work

## Alternatives Considered
Other approaches you've thought about

## Additional Information
- Mockups or wireframes
- Related features in other apps
- Technical considerations
```

## 🎨 Design Contributions

### UI/UX Guidelines

- **Follow the existing design system**
- **Use the established color palette**
- **Maintain consistency** with existing components
- **Consider accessibility** (WCAG guidelines)
- **Test on different screen sizes**

### Design Resources

- **Color Palette**: Defined in `tailwind.config.js`
- **Typography**: Use Tailwind's font classes
- **Spacing**: Follow Tailwind's spacing scale
- **Icons**: Use Lucide React icons

## 🌐 Localization

### Translation Guidelines

- **Use translation keys** for all user-facing text
- **Provide context** for translators
- **Test with different languages**
- **Consider text length** variations

### Adding New Languages

1. **Create language file** in `src/locales/`
2. **Translate all keys**
3. **Update language selector**
4. **Test with RTL languages** if applicable

## 📊 Performance Guidelines

### Optimization Tips

- **Use React.memo** for expensive components
- **Implement lazy loading** for large components
- **Optimize bundle size** with code splitting
- **Use proper caching** strategies
- **Minimize re-renders**

### Performance Testing

```bash
# Build and analyze bundle
pnpm build
pnpm analyze

# Check performance metrics
pnpm lighthouse
```

## 🔒 Security Guidelines

### Security Best Practices

- **Validate all inputs**
- **Sanitize user data**
- **Use HTTPS** for all external requests
- **Implement proper CORS** policies
- **Keep dependencies updated**

### Reporting Security Issues

For security vulnerabilities, please email security@spenddy.com instead of creating a public issue.

## 📞 Getting Help

### Communication Channels

- **GitHub Issues**: For bugs and feature requests
- **GitHub Discussions**: For questions and discussions
- **Email**: For security issues or private matters

### Before Asking for Help

1. **Check the documentation**
2. **Search existing issues**
3. **Try to reproduce the problem**
4. **Provide detailed information**

## 🏆 Recognition

### Contributor Recognition

- **Contributors will be listed** in the README
- **Significant contributions** will be highlighted
- **Regular contributors** may be invited to join the team

### Types of Recognition

- **Code Contributors**: Listed in contributors section
- **Documentation**: Acknowledged in docs
- **Design**: Credited in design files
- **Testing**: Recognized in test files

## 📄 License

By contributing to RealRates, you agree that your contributions will be licensed under the MIT License.

## 🙏 Thank You

Thank you for contributing to RealRates! Your help makes the project better for everyone.

---

**Need help?** Feel free to reach out through GitHub Issues or Discussions. We're here to help you succeed! 