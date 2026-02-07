import { ParsedDocumentation } from './v2-types';

export interface V2Module {
    slug: string;
    title: string;
    description: string;
    importPath: string; // e.g., 'axis-twelve/dist/modules/axis-grid.css'
}

export const v2Modules: V2Module[] = [
    {
        slug: 'getting-started',
        title: 'Getting Started',
        description: 'Introduction to Axis Twelve v2.0 - Modular CSS Framework',
        importPath: 'axis-twelve@2.0.0/dist/axis-twelve.min.css',
    },
    {
        slug: 'installation',
        title: 'Installation',
        description: 'Install Axis Twelve v2 via CDN or npm',
        importPath: 'axis-twelve@2.0.0/dist/axis-twelve.min.css',
    },
    {
        slug: 'grid',
        title: 'Grid Module',
        description: 'Modular grid system for modern layouts.',
        importPath: 'axis-twelve@2.0.0/dist/modules/axis-grid.css',
    },
    {
        slug: 'forms',
        title: 'Forms Module',
        description: 'Styled form elements and inputs.',
        importPath: 'axis-twelve@2.0.0/dist/modules/axis-forms.css',
    },
    {
        slug: 'buttons',
        title: 'Buttons Module',
        description: 'Button styles and variations.',
        importPath: 'axis-twelve@2.0.0/dist/modules/axis-buttons.css',
    },
    {
        slug: 'typography',
        title: 'Typography Module',
        description: 'Text styling and formatting utilities.',
        importPath: 'axis-twelve@2.0.0/dist/modules/axis-typography.css',
    },
    {
        slug: 'utilities',
        title: 'Utilities Module',
        description: 'Helper classes for common patterns.',
        importPath: 'axis-twelve@2.0.0/dist/modules/axis-utilities.css',
    },
];

// Module documentation data
export const v2ModuleData: Record<string, ParsedDocumentation> = {
    'getting-started': {
        overview: 'Axis Twelve v2.0 is a modern, modular CSS framework designed for flexibility and performance. Import only the modules you need for smaller bundle sizes.',
        components: [
            {
                id: 'what-is-v2',
                title: 'What is Axis Twelve v2?',
                description: 'Understanding the modular architecture',
                category: 'Introduction',
                classes: [
                    {
                        name: 'Modular Design',
                        description: 'Import only the CSS modules you need instead of the entire framework. Each module is independent and can be used standalone.',
                    },
                    {
                        name: 'Modern CSS',
                        description: 'Built with modern CSS features like CSS Grid, Flexbox, and CSS Custom Properties. No IE11 support means cleaner, more efficient code.',
                    },
                    {
                        name: 'Tree-Shakeable',
                        description: 'When using a build tool, unused styles are automatically removed, resulting in smaller production bundles.',
                    },
                ],
            },
            {
                id: 'key-features',
                title: 'Key Features',
                description: 'What makes v2 special',
                category: 'Features',
                classes: [
                    {
                        name: 'CSS Grid System',
                        description: 'Modern 12-column grid system using CSS Grid instead of floats or flexbox.',
                        example: `<div class="ax-grid ax-gap-md">
  <div class="ax-col-6">Half width</div>
  <div class="ax-col-6">Half width</div>
</div>`,
                    },
                    {
                        name: 'Component Modules',
                        description: 'Separate modules for buttons, forms, typography, and utilities. Load only what you need.',
                    },
                    {
                        name: 'Consistent Naming',
                        description: 'All classes use the .ax- prefix for easy identification and no conflicts with other frameworks.',
                    },
                ],
            },
            {
                id: 'quick-example',
                title: 'Quick Example',
                description: 'Get started in seconds',
                category: 'Getting Started',
                classes: [
                    {
                        name: 'Simple Layout',
                        description: 'Create a responsive layout with grid and buttons',
                        example: `<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="https://unpkg.com/axis-twelve@2.0.0/dist/modules/axis-grid.css">
  <link rel="stylesheet" href="https://unpkg.com/axis-twelve@2.0.0/dist/modules/axis-buttons.css">
</head>
<body>
  <div class="ax-grid ax-gap-lg">
    <div class="ax-col-8">
      <h1>Welcome to Axis Twelve v2</h1>
      <p>Modern, modular CSS framework</p>
    </div>
    <div class="ax-col-4">
      <button class="ax-btn ax-btn-primary">Get Started</button>
    </div>
  </div>
</body>
</html>`,
                    },
                ],
            },
        ],
    },
    installation: {
        overview: 'Install Axis Twelve v2 using your preferred method: CDN for quick prototyping or npm for production projects.',
        components: [
            {
                id: 'cdn-full',
                title: 'CDN - Full Framework',
                description: 'Include the complete framework via CDN',
                category: 'Installation',
                classes: [
                    {
                        name: 'Full Build',
                        description: 'All modules in one file - best for quick prototyping',
                        example: `<link rel="stylesheet" href="https://unpkg.com/axis-twelve@2.0.0/dist/axis-twelve.min.css">`,
                    },
                ],
            },
            {
                id: 'cdn-modular',
                title: 'CDN - Individual Modules',
                description: 'Load only specific modules you need',
                category: 'Installation',
                classes: [
                    {
                        name: 'Grid Module Only',
                        description: 'Import just the grid system',
                        example: `<link rel="stylesheet" href="https://unpkg.com/axis-twelve@2.0.0/dist/modules/axis-grid.css">`,
                    },
                    {
                        name: 'Multiple Modules',
                        description: 'Combine multiple modules as needed',
                        example: `<link rel="stylesheet" href="https://unpkg.com/axis-twelve@2.0.0/dist/modules/axis-grid.css">
<link rel="stylesheet" href="https://unpkg.com/axis-twelve@2.0.0/dist/modules/axis-buttons.css">
<link rel="stylesheet" href="https://unpkg.com/axis-twelve@2.0.0/dist/modules/axis-forms.css">`,
                    },
                ],
            },
            {
                id: 'npm-install',
                title: 'NPM Installation',
                description: 'Install via package manager for production projects',
                category: 'Installation',
                classes: [
                    {
                        name: 'Install Package',
                        description: 'Install via npm or yarn',
                        example: `npm install axis-twelve@2.0.0
# or
yarn add axis-twelve@2.0.0`,
                    },
                    {
                        name: 'Import in CSS',
                        description: 'Import modules in your stylesheet',
                        example: `/* Import full framework */
@import 'axis-twelve/axis-twelve.css';

/* Or import specific modules */
@import 'axis-twelve/grid.css';
@import 'axis-twelve/buttons.css';`,
                    },
                    {
                        name: 'Import in JavaScript',
                        description: 'Import in your JavaScript/TypeScript files',
                        example: `// Import full framework
import "axis-twelve/axis-twelve.css";

// Or import specific modules
import "axis-twelve/grid.css";
import "axis-twelve/buttons.css";
import "axis-twelve/forms.css";`,
                    },
                ],
            },
            {
                id: 'available-modules',
                title: 'Available Modules',
                description: 'List of all importable modules',
                category: 'Modules',
                classes: [
                    {
                        name: 'axis-grid.css',
                        description: '12-column CSS Grid system with gap utilities',
                    },
                    {
                        name: 'axis-forms.css',
                        description: 'Styled inputs, selects, checkboxes, and radio buttons',
                    },
                    {
                        name: 'axis-buttons.css',
                        description: 'Button variants and sizes',
                    },
                    {
                        name: 'axis-typography.css',
                        description: 'Heading styles and text utilities',
                    },
                    {
                        name: 'axis-utilities.css',
                        description: 'Spacing, display, and color utilities',
                    },
                ],
            },
        ],
    },
    grid: {
        overview: 'A powerful, flexible grid system built with CSS Grid. Supports 12-column layouts with responsive breakpoints.',
        components: [
            {
                id: 'grid-container',
                title: 'Grid Container',
                description: 'Define a grid container and control its layout.',
                category: 'Layout',
                classes: [
                    {
                        name: '.ax-grid',
                        description: 'Creates a grid container',
                        example: `<div class="ax-grid">
  <div class="ax-col-6">Half width</div>
  <div class="ax-col-6">Half width</div>
</div>`,
                    },
                    {
                        name: '.ax-grid-auto',
                        description: 'Auto-fit grid columns',
                        example: `<div class="ax-grid-auto">
  <div>Auto</div>
  <div>Auto</div>
  <div>Auto</div>
</div>`,
                    },
                ],
            },
            {
                id: 'grid-columns',
                title: 'Grid Columns',
                description: 'Column span utilities for precise layouts.',
                category: 'Layout',
                classes: [
                    { name: '.ax-col-1', description: 'Span 1 column' },
                    { name: '.ax-col-2', description: 'Span 2 columns' },
                    { name: '.ax-col-3', description: 'Span 3 columns' },
                    { name: '.ax-col-4', description: 'Span 4 columns' },
                    { name: '.ax-col-5', description: 'Span 5 columns' },
                    { name: '.ax-col-6', description: 'Span 6 columns' },
                    { name: '.ax-col-7', description: 'Span 7 columns' },
                    { name: '.ax-col-8', description: 'Span 8 columns' },
                    { name: '.ax-col-9', description: 'Span 9 columns' },
                    { name: '.ax-col-10', description: 'Span 10 columns' },
                    { name: '.ax-col-11', description: 'Span 11 columns' },
                    { name: '.ax-col-12', description: 'Span 12 columns (full width)' },
                ],
            },
            {
                id: 'grid-gaps',
                title: 'Grid Gaps',
                description: 'Control spacing between grid items.',
                category: 'Spacing',
                classes: [
                    {
                        name: '.ax-gap-sm',
                        description: '0.5rem gap between items',
                        example: `<div class="ax-grid ax-gap-sm">
  <div class="ax-col-6">Item 1</div>
  <div class="ax-col-6">Item 2</div>
</div>`,
                    },
                    { name: '.ax-gap-md', description: '1rem gap between items' },
                    { name: '.ax-gap-lg', description: '2rem gap between items' },
                ],
            },
        ],
    },
    forms: {
        overview: 'Beautiful, accessible form components with consistent styling across browsers.',
        components: [
            {
                id: 'inputs',
                title: 'Text Inputs',
                description: 'Styled text input fields.',
                category: 'Form Controls',
                classes: [
                    {
                        name: '.ax-input',
                        description: 'Standard text input',
                        example: `<input type="text" class="ax-input" placeholder="Enter text">`,
                    },
                    {
                        name: '.ax-input-lg',
                        description: 'Large input field',
                        example: `<input type="text" class="ax-input ax-input-lg" placeholder="Large input">`,
                    },
                    {
                        name: '.ax-input-sm',
                        description: 'Small input field',
                        example: `<input type="text" class="ax-input ax-input-sm" placeholder="Small input">`,
                    },
                ],
            },
            {
                id: 'selects',
                title: 'Select Dropdowns',
                description: 'Styled select elements.',
                category: 'Form Controls',
                classes: [
                    {
                        name: '.ax-select',
                        description: 'Styled dropdown select',
                        example: `<select class="ax-select">
  <option>Option 1</option>
  <option>Option 2</option>
</select>`,
                    },
                ],
            },
            {
                id: 'checkboxes',
                title: 'Checkboxes & Radio',
                description: 'Custom styled checkboxes and radio buttons.',
                category: 'Form Controls',
                classes: [
                    {
                        name: '.ax-checkbox',
                        description: 'Styled checkbox',
                        example: `<label class="ax-checkbox">
  <input type="checkbox">
  <span>Check me</span>
</label>`,
                    },
                    {
                        name: '.ax-radio',
                        description: 'Styled radio button',
                        example: `<label class="ax-radio">
  <input type="radio" name="choice">
  <span>Option A</span>
</label>`,
                    },
                ],
            },
        ],
    },
    buttons: {
        overview: 'Versatile button components with multiple variants and sizes.',
        components: [
            {
                id: 'button-variants',
                title: 'Button Variants',
                description: 'Different button styles for various contexts.',
                category: 'Buttons',
                classes: [
                    {
                        name: '.ax-btn',
                        description: 'Base button class',
                        example: `<button class="ax-btn">Button</button>`,
                    },
                    {
                        name: '.ax-btn-primary',
                        description: 'Primary action button',
                        example: `<button class="ax-btn ax-btn-primary">Primary</button>`,
                    },
                    {
                        name: '.ax-btn-secondary',
                        description: 'Secondary button',
                        example: `<button class="ax-btn ax-btn-secondary">Secondary</button>`,
                    },
                    {
                        name: '.ax-btn-outline',
                        description: 'Outlined button',
                        example: `<button class="ax-btn ax-btn-outline">Outline</button>`,
                    },
                ],
            },
            {
                id: 'button-sizes',
                title: 'Button Sizes',
                description: 'Control button dimensions.',
                category: 'Buttons',
                classes: [
                    { name: '.ax-btn-sm', description: 'Small button' },
                    { name: '.ax-btn-md', description: 'Medium button (default)' },
                    { name: '.ax-btn-lg', description: 'Large button' },
                ],
            },
        ],
    },
    typography: {
        overview: 'Typography utilities for headings, text styling, and formatting.',
        components: [
            {
                id: 'headings',
                title: 'Headings',
                description: 'Styled heading classes.',
                category: 'Typography',
                classes: [
                    {
                        name: '.ax-h1',
                        description: 'H1 heading style',
                        example: `<h1 class="ax-h1">Main Heading</h1>`,
                    },
                    { name: '.ax-h2', description: 'H2 heading style' },
                    { name: '.ax-h3', description: 'H3 heading style' },
                    { name: '.ax-h4', description: 'H4 heading style' },
                ],
            },
            {
                id: 'text-utilities',
                title: 'Text Utilities',
                description: 'Text formatting and styling.',
                category: 'Typography',
                classes: [
                    { name: '.ax-text-center', description: 'Center align text' },
                    { name: '.ax-text-left', description: 'Left align text' },
                    { name: '.ax-text-right', description: 'Right align text' },
                    { name: '.ax-text-bold', description: 'Bold text' },
                    { name: '.ax-text-italic', description: 'Italic text' },
                    {
                        name: '.ax-text-muted',
                        description: 'Muted text color',
                        example: `<p class="ax-text-muted">Secondary information</p>`,
                    },
                ],
            },
        ],
    },
    utilities: {
        overview: 'General utility classes for common styling patterns.',
        components: [
            {
                id: 'spacing',
                title: 'Spacing Utilities',
                description: 'Margin and padding helpers.',
                category: 'Utilities',
                classes: [
                    { name: '.ax-m-0', description: 'Margin 0' },
                    { name: '.ax-m-1', description: 'Margin 0.25rem' },
                    { name: '.ax-m-2', description: 'Margin 0.5rem' },
                    { name: '.ax-m-3', description: 'Margin 1rem' },
                    { name: '.ax-p-0', description: 'Padding 0' },
                    { name: '.ax-p-1', description: 'Padding 0.25rem' },
                    { name: '.ax-p-2', description: 'Padding 0.5rem' },
                    { name: '.ax-p-3', description: 'Padding 1rem' },
                ],
            },
            {
                id: 'display',
                title: 'Display Utilities',
                description: 'Control element display types.',
                category: 'Utilities',
                classes: [
                    {
                        name: '.ax-block',
                        description: 'Display block',
                        example: `<span class="ax-block">Block element</span>`,
                    },
                    { name: '.ax-inline', description: 'Display inline' },
                    { name: '.ax-inline-block', description: 'Display inline-block' },
                    { name: '.ax-flex', description: 'Display flex' },
                    { name: '.ax-hidden', description: 'Hide element' },
                ],
            },
            {
                id: 'colors',
                title: 'Color Utilities',
                description: 'Text and background colors.',
                category: 'Utilities',
                classes: [
                    { name: '.ax-text-primary', description: 'Primary text color' },
                    { name: '.ax-text-secondary', description: 'Secondary text color' },
                    { name: '.ax-bg-primary', description: 'Primary background' },
                    { name: '.ax-bg-secondary', description: 'Secondary background' },
                ],
            },
        ],
    },
};

export interface ChangelogEntry {
    version: string;
    date: string;
    changes: string[];
}

export const v2Changelog: ChangelogEntry[] = [
    {
        version: '2.0.0',
        date: '2024-01-15',
        changes: [
            'Modular architecture - import only what you need',
            'Dropped IE11 support for modern CSS features',
            'New CSS Grid-based grid system',
            'Enhanced form components with better accessibility',
            'Redesigned button variants',
            'Improved typography scale',
            'Tree-shakeable CSS modules',
            'CDN support for individual modules',
        ],
    }
];
