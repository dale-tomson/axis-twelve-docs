# Axis Twelve Documentation

Official documentation website for [Axis Twelve](https://github.com/dale-tomson/axis-twelve) - A modern, modular CSS framework.

## 🌐 Live Site

Visit the documentation at: [https://axis-twelve-docs.vercel.app](https://axis-twelve-docs.vercel.app) *(Update with your deployment URL)*

## 📖 About

This is the comprehensive documentation site for Axis Twelve, covering both:
- **Version 1.x** - Traditional all-in-one CSS framework
- **Version 2.x** - Modern modular CSS framework with tree-shakeable imports

## 🚀 Features

- **Comprehensive Documentation** - Detailed guides for installation, usage, and all modules
- **Interactive Examples** - Live code examples with syntax highlighting
- **Version Switching** - Easy navigation between v1 and v2 documentation
- **Module-based Structure** - Organized by feature/module for easy navigation
- **Changelog** - Version history for both v1 and v2
- **Responsive Design** - Built with Axis Twelve itself
- **Static Generation** - Fast, SEO-friendly static pages via Next.js

## 🛠️ Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Styling:** Axis Twelve CSS Framework
- **Language:** TypeScript
- **Deployment:** Vercel (recommended)

## 📋 Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

## 🏃 Getting Started

### Installation

```bash
# Clone the repository
git clone https://github.com/dale-tomson/axis-twelve-docs.git
cd axis-twelve-docs

# Install dependencies
npm install
```

### Development

```bash
# Start development server
npm run dev

# Open http://localhost:3000
```

### Build

```bash
# Create production build
npm run build

# Preview production build
npm start
```

### Lint

```bash
# Run ESLint checks
npm run lint
```

## 📁 Project Structure

```
axis-twelve-docs/
├── app/                      # Next.js app directory
│   ├── v1/                   # Version 1 documentation
│   │   ├── features/[feature]/  # Dynamic feature pages
│   │   └── changelog/        # v1 changelog
│   ├── v2/                   # Version 2 documentation
│   │   ├── modules/[module]/ # Dynamic module pages
│   │   └── changelog/        # v2 changelog
│   └── layout.tsx            # Root layout with sidebar/header
├── components/               # Reusable React components
│   ├── ApiClass.tsx          # API class display component
│   ├── ApiComponent.tsx      # API component renderer
│   ├── CodeBlock.tsx         # Syntax highlighted code blocks
│   ├── Collapsible.tsx       # Collapsible sections
│   ├── Header.tsx            # Site header with version switcher
│   ├── NavLink.tsx           # Navigation link component
│   ├── SearchInput.tsx       # Search functionality
│   └── Sidebar.tsx           # Documentation sidebar
├── lib/                      # Data and types
│   ├── v1-data.ts            # v1 documentation data
│   ├── v1-types.ts           # v1 type definitions
│   ├── v2-data.ts            # v2 documentation data
│   └── v2-types.ts           # v2 type definitions
└── public/                   # Static assets
    └── logo.svg              # Axis Twelve logo
```

## 📝 Documentation Structure

### Version 1 Features
1. Getting Started
2. Installation
3. Quick Start
4. Grid System
5. Typography
6. Forms
7. Buttons
8. Colors
9. Utilities
10. Components
11. Browser Support

### Version 2 Modules
1. Getting Started - Introduction to modular architecture
2. Installation - CDN and npm installation methods
3. Grid - CSS Grid-based layout system
4. Forms - Styled form elements
5. Buttons - Button variants and sizes
6. Typography - Heading and text utilities
7. Utilities - Helper classes for spacing, display, etc.

## 🎨 Adding New Documentation

### Add a new V1 Feature

1. Update `lib/v1-data.ts`:
```typescript
export const v1Features: V1Feature[] = [
  // ...existing features
  {
    slug: 'new-feature',
    title: 'New Feature',
    description: 'Description of the feature',
  },
];

export const v1FeatureData: Record<string, ParsedDocumentation> = {
  // ...existing data
  'new-feature': {
    overview: 'Feature overview...',
    components: [/* ... */],
  },
};
```

2. Run `npm run build` to generate the new page

### Add a new V2 Module

1. Update `lib/v2-data.ts`:
```typescript
export const v2Modules: V2Module[] = [
  // ...existing modules
  {
    slug: 'new-module',
    title: 'New Module',
    description: 'Module description',
    importPath: 'axis-twelve@2.0.0/dist/modules/axis-new.css',
  },
];

export const v2ModuleData: Record<string, ParsedDocumentation> = {
  // ...existing data
  'new-module': {
    overview: 'Module overview...',
    components: [/* ... */],
  },
};
```

2. Run `npm run build` to generate the new page

## 🔧 Customization

### Styling

The site uses Axis Twelve's own CSS framework. Custom utilities are in:
- `app/globals.css` - Global styles and Axis Twelve imports
- `app/axis-utilities.css` - Custom utility classes

### Components

All components are in the `components/` directory and use:
- Axis Twelve classes (`ax-*` prefix)
- TypeScript for type safety
- Client Components (marked with `'use client'`) for interactivity

## 📊 Build Output

The static build generates 26+ pages:
- 11 V1 feature pages
- 7 V2 module pages  
- 2 changelog pages
- Version landing pages
- Home page

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This documentation site is part of the Axis Twelve project.

## 🔗 Links

- [Axis Twelve Framework](https://github.com/dale-tomson/axis-twelve)
- [NPM Package](https://www.npmjs.com/package/axis-twelve)
- [Report Issues](https://github.com/dale-tomson/axis-twelve-docs/issues)

---

Built with ❤️ using [Next.js](https://nextjs.org) and [Axis Twelve](https://github.com/dale-tomson/axis-twelve)
