# RealRates by Spenddy - True EMI Calculator

<div align="center">

![RealRates Logo](src/assets/realrates-logo.svg)

**A modern, transparent EMI calculator that shows exactly how much goes to the bank, government, and what you actually pay - no hidden costs!**

[![Build Status](https://img.shields.io/badge/build-passing-brightgreen)](https://github.com/unownone/realrates)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-blue)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-19-blue)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-7.0-orange)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1-38B2AC)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/license-MIT-green)](LICENSE)

[Live Demo](https://realrates.pages.dev) • [Report Bug](https://github.com/unownone/realrates/issues) • [Request Feature](https://github.com/unownone/realrates/issues)

</div>

---

## 🚀 Features

### 💰 True EMI Calculator

- **Complete Cost Breakdown**: See exactly where your money goes
- **Processing Fee Calculator**: Support for both fixed amounts and percentages
- **GST & Tax Breakdown**: Transparent government charges
- **Monthly Payment Schedules**: Detailed payment timeline

### 🏦 Bank Comparison

- **Multi-Bank Analysis**: Compare different banks side-by-side
- **Fee Structure Analysis**: Understand hidden costs
- **Cost Visualization**: Interactive charts and graphs
- **Savings Calculator**: Find the best deals

### 🎨 User Experience

- **Dark/Light Mode**: Beautiful themes with orange accent colors
- **Mobile Responsive**: Optimized for all device sizes
- **Real-time Calculations**: Instant results with live updates
- **Accessibility**: WCAG compliant design
- **Privacy Focused**: No personal or financial data collection

### 📊 Advanced Features

- **Custom Fee Input**: Flexible processing fee options
- **Payment Schedule**: Month-by-month breakdown
- **Cost Pie Charts**: Visual cost distribution
- **Shareable URLs**: Easy sharing of calculations
- **Educational Content**: Learn about EMI calculations

## 🛠️ Tech Stack

| Category | Technology |
|----------|------------|
| **Frontend** | React 19 + TypeScript + Vite |
| **Styling** | Tailwind CSS 4.1 + Custom Design System |
| **Charts** | Recharts for data visualization |
| **Forms** | React Hook Form + Zod validation |
| **UI Components** | Radix UI primitives |
| **State Management** | React Hooks + Custom hooks |
| **Deployment** | Cloudflare Workers |
| **Package Manager** | pnpm |

## 📦 Installation

### Prerequisites

- **Node.js** 18+
- **pnpm** (recommended) or npm

### Quick Start

```bash
# Clone the repository
git clone https://github.com/unownone/realrates.git
cd realrates

# Install dependencies
pnpm install

# Start development server
pnpm dev

# Open your browser to http://localhost:5173
```

### Development Commands

```bash
# Development server with hot reload
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview

# Run linting
pnpm lint

# Fix linting issues
pnpm lint:fix

# Type checking
pnpm type-check

# Deploy to Cloudflare Workers
pnpm deploy

# Clean build artifacts
pnpm clean
```

## 🏗️ Project Structure

```
realrates/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── calculator/     # Calculator-specific components
│   │   ├── forms/          # Form components
│   │   ├── charts/         # Data visualization
│   │   ├── layout/         # Layout components
│   │   ├── ui/             # Base UI components
│   │   ├── animations/     # Animation components
│   │   ├── educational/    # Help and FAQ components
│   │   ├── comparison/     # Bank comparison components
│   │   └── sharing/        # Share and export components
│   ├── hooks/              # Custom React hooks
│   ├── lib/                # Business logic & utilities
│   ├── types/              # TypeScript definitions
│   ├── constants/          # Application constants
│   ├── pages/              # Page components
│   └── assets/             # Static assets
├── worker/                 # Cloudflare Worker
├── docs/                   # Documentation
└── public/                 # Public assets
```

## 🎯 Key Features Explained

### EMI Calculation Engine

The core calculation engine provides accurate EMI calculations with:

- **Principal Amount**: The loan amount you want to borrow
- **Interest Rate**: Annual interest rate from the bank
- **Loan Term**: Duration in months (3-60 months)
- **Processing Fees**: Custom or bank default fees
- **GST Calculation**: Government taxes on fees
- **Total Cost Breakdown**: Complete transparency

### Bank Comparison System

Compare different banks with:

- **Fee Structures**: Processing fees, documentation charges
- **Interest Rates**: Current rates for different loan amounts
- **Total Cost Analysis**: Side-by-side comparison
- **Savings Calculator**: How much you can save
- **Visual Charts**: Easy-to-understand comparisons

### User Interface Features

- **Responsive Design**: Works perfectly on mobile, tablet, and desktop
- **Dark Mode**: Eye-friendly dark theme with orange accents
- **Real-time Updates**: Calculations update as you type
- **Form Validation**: Prevents errors and guides users
- **Accessibility**: Screen reader friendly and keyboard navigable

## 🚀 Deployment

### Cloudflare Workers Deployment

The application is optimized for Cloudflare Workers deployment:

```bash
# Build and deploy
pnpm deploy

# Or manually
pnpm build
wrangler deploy
```

### Environment Variables

No environment variables required for basic functionality. The app is completely client-side.

## 🤝 Contributing

We welcome contributions! Here's how you can help:

### Development Setup

1. **Fork** the repository
2. **Clone** your fork: `git clone https://github.com/your-username/realrates.git`
3. **Install** dependencies: `pnpm install`
4. **Create** a feature branch: `git checkout -b feature/amazing-feature`
5. **Make** your changes
6. **Test** your changes: `pnpm lint && pnpm type-check && pnpm build`
7. **Commit** your changes: `git commit -m 'Add amazing feature'`
8. **Push** to your branch: `git push origin feature/amazing-feature`
9. **Open** a Pull Request

### Code Style

- Follow the existing code style
- Use TypeScript for all new code
- Write meaningful commit messages
- Add tests for new features
- Update documentation as needed

### Pull Request Guidelines

- Provide a clear description of the changes
- Include screenshots for UI changes
- Ensure all tests pass
- Update documentation if needed
- Follow the existing code style

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

### Getting Help

- **Documentation**: Check the [docs/](docs/) folder
- **Issues**: [GitHub Issues](https://github.com/unownone/realrates/issues)
- **Discussions**: [GitHub Discussions](https://github.com/unownone/realrates/discussions)

### Reporting Bugs

When reporting bugs, please include:

- Browser and version
- Operating system
- Steps to reproduce
- Expected vs actual behavior
- Screenshots if applicable

### Feature Requests

We welcome feature requests! Please:

- Describe the feature clearly
- Explain why it would be useful
- Provide examples if possible

## 🙏 Acknowledgments

- **Spenddy**: For the vision and support
- **React Team**: For the amazing framework
- **Vite Team**: For the fast build tool
- **Tailwind CSS**: For the utility-first CSS framework
- **Cloudflare**: For the hosting platform

## 📈 Roadmap

- [ ] **API Integration**: Real-time bank rates
- [ ] **PDF Export**: Download calculation reports
- [ ] **Mobile App**: React Native version
- [ ] **Multi-language**: Internationalization support
- [ ] **Advanced Analytics**: Usage insights
- [ ] **Bank API**: Direct integration with banks

## 📊 Project Stats

![GitHub stars](https://img.shields.io/github/stars/unownone/realrates)
![GitHub forks](https://img.shields.io/github/forks/unownone/realrates)
![GitHub issues](https://img.shields.io/github/issues/unownone/realrates)
![GitHub pull requests](https://img.shields.io/github/issues-pr/unownone/realrates)

---

<div align="center">

**Made with ❤️ by [Spenddy](https://spenddy.com)**

[Privacy Policy](https://realrates.pages.dev/privacy) • [Terms of Service](https://realrates.pages.dev/terms)

</div>
