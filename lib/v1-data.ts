import { ParsedDocumentation } from './v1-types';

export interface V1Feature {
    slug: string;
    title: string;
    description: string;
    category: string;
}

export const v1Features: V1Feature[] = [
    {
        slug: 'getting-started',
        title: 'Getting Started',
        description: 'Introduction to Axis-Twelve framework and core concepts.',
        category: 'Introduction',
    },
    {
        slug: 'installation',
        title: 'Installation',
        description: 'How to install and set up Axis-Twelve in your project.',
        category: 'Introduction',
    },
    {
        slug: 'quick-start',
        title: 'Quick Start',
        description: 'Get up and running quickly with Axis-Twelve.',
        category: 'Introduction',
    },
    {
        slug: 'grid',
        title: 'Grid System',
        description: 'A powerful flexbox-based grid system for layouts.',
        category: 'Layout',
    },
    {
        slug: 'flexbox',
        title: 'Flexbox Utilities',
        description: 'Flexible box layout utilities for responsive designs.',
        category: 'Layout',
    },
    {
        slug: 'spacing',
        title: 'Spacing',
        description: 'Margin and padding utilities for consistent spacing.',
        category: 'Layout',
    },
    {
        slug: 'gaps',
        title: 'Gaps',
        description: 'Gap utilities for grid and flexbox layouts.',
        category: 'Layout',
    },
    {
        slug: 'centering',
        title: 'Centering',
        description: 'Various techniques for centering elements.',
        category: 'Layout',
    },
    {
        slug: 'breakpoints',
        title: 'Breakpoints',
        description: 'Responsive breakpoints and media queries.',
        category: 'Responsive',
    },
    {
        slug: 'variables',
        title: 'CSS Variables',
        description: 'CSS custom properties and theming variables.',
        category: 'Customization',
    },
    {
        slug: 'best-practices',
        title: 'Best Practices',
        description: 'Recommended patterns and best practices.',
        category: 'Guide',
    },
];

// Feature documentation data
export const v1FeatureData: Record<string, ParsedDocumentation> = {
    'getting-started': {
        overview: 'Axis-Twelve is a lightweight, flexible CSS framework built on a 12-column grid system.',
        components: [
            {
                id: 'intro',
                title: 'What is Axis-Twelve?',
                description: 'A modern CSS framework focused on simplicity and flexibility.',
                category: 'Introduction',
                classes: [],
            },
        ],
    },
    installation: {
        overview: 'Install Axis-Twelve via CDN or npm package manager.',
        components: [
            {
                id: 'cdn',
                title: 'CDN Installation',
                description: 'Quick setup using unpkg CDN.',
                category: 'Installation',
                classes: [
                    {
                        name: 'CDN Link',
                        description: 'Add to your HTML head',
                        example: `<link rel="stylesheet" href="https://unpkg.com/axis-twelve@1.1.0/dist/axis-twelve.min.css">`,
                    },
                ],
            },
            {
                id: 'npm',
                title: 'NPM Installation',
                description: 'Install via npm for build tools.',
                category: 'Installation',
                classes: [
                    {
                        name: 'NPM Command',
                        description: 'Install package',
                        example: `npm install axis-twelve`,
                    },
                ],
            },
        ],
    },
    'quick-start': {
        overview: 'Get started quickly with basic examples and templates.',
        components: [
            {
                id: 'basic-template',
                title: 'Basic Template',
                description: 'Minimal HTML boilerplate to get started.',
                category: 'Template',
                classes: [
                    {
                        name: 'HTML Template',
                        description: 'Complete starter template',
                        example: `<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="https://unpkg.com/axis-twelve@1.1.0/dist/axis-twelve.min.css">
</head>
<body>
  <div class="grid">
    <div class="col-12">Hello Axis-Twelve!</div>
  </div>
</body>
</html>`,
                    },
                ],
            },
        ],
    },
    grid: {
        overview: 'The 12-column grid is the foundation of Axis Twelve.',
        components: [
            {
                id: 'column-classes',
                title: 'Column Classes',
                description: 'Define column widths using 12-column fractions.',
                category: 'Layout',
                classes: [
                    { name: '.col-1', description: '1/12 (8.33%)' },
                    { name: '.col-2', description: '2/12 (16.67%)' },
                    { name: '.col-3', description: '3/12 (25%)' },
                    { name: '.col-4', description: '4/12 (33.33%)' },
                    { name: '.col-5', description: '5/12 (41.67%)' },
                    { name: '.col-6', description: '6/12 (50%)' },
                    { name: '.col-7', description: '7/12 (58.33%)' },
                    { name: '.col-8', description: '8/12 (66.67%)' },
                    { name: '.col-9', description: '9/12 (75%)' },
                    { name: '.col-10', description: '10/12 (83.33%)' },
                    { name: '.col-11', description: '11/12 (91.67%)' },
                    { name: '.col-12', description: '12/12 (100%)' },
                ],
            },
            {
                id: 'basic-grid',
                title: 'Basic Grid',
                description: 'Create a grid with the .grid class and add columns.',
                category: 'Layout',
                classes: [
                    {
                        name: '.grid',
                        description: 'Grid container',
                        example: `<div class="grid">
  <div class="col-4">1/3 width</div>
  <div class="col-4">1/3 width</div>
  <div class="col-4">1/3 width</div>
</div>`,
                    },
                ],
            },
            {
                id: 'common-layouts',
                title: 'Common Layouts',
                description: 'Pre-configured layout patterns.',
                category: 'Layout',
                classes: [
                    {
                        name: '2-Column Equal',
                        description: 'Two equal-width columns',
                        example: `<div class="grid gap-md">
  <div class="col-6">Left</div>
  <div class="col-6">Right</div>
</div>`,
                    },
                    {
                        name: '3-Column Equal',
                        description: 'Three equal-width columns',
                        example: `<div class="grid gap-md">
  <div class="col-4">Column 1</div>
  <div class="col-4">Column 2</div>
  <div class="col-4">Column 3</div>
</div>`,
                    },
                ],
            },
        ],
    },
    flexbox: {
        overview: 'Flexible box layout utilities for modern responsive designs.',
        components: [
            {
                id: 'flex-container',
                title: 'Flex Container',
                description: 'Create flex containers with various directions and wrapping.',
                category: 'Layout',
                classes: [
                    {
                        name: '.flex',
                        description: 'Flex container',
                        example: `<div class="flex">
  <div>Item 1</div>
  <div>Item 2</div>
</div>`,
                    },
                    {
                        name: '.flex-row',
                        description: 'Flex direction row',
                        example: `<div class="flex flex-row">
  <div>Left</div>
  <div>Right</div>
</div>`,
                    },
                    {
                        name: '.flex-column',
                        description: 'Flex direction column',
                        example: `<div class="flex flex-column">
  <div>Top</div>
  <div>Bottom</div>
</div>`,
                    },
                ],
            },
            {
                id: 'alignment',
                title: 'Alignment Utilities',
                description: 'Justify and align flex items.',
                category: 'Layout',
                classes: [
                    { name: '.justify-start', description: 'Justify content to start' },
                    { name: '.justify-center', description: 'Justify content to center' },
                    { name: '.justify-end', description: 'Justify content to end' },
                    { name: '.justify-between', description: 'Space between items' },
                    { name: '.align-start', description: 'Align items to start' },
                    { name: '.align-center', description: 'Align items to center' },
                    { name: '.align-end', description: 'Align items to end' },
                ],
            },
        ],
    },
    spacing: {
        overview: 'Control padding, margins, and spacing with comprehensive utilities.',
        components: [
            {
                id: 'padding',
                title: 'Padding Classes',
                description: 'Add internal spacing to elements.',
                category: 'Spacing',
                classes: [
                    {
                        name: '.p-xs',
                        description: '0.25rem (4px)',
                        example: `<div class="p-xs">Extra small padding</div>`,
                    },
                    {
                        name: '.p-sm',
                        description: '0.5rem (8px)',
                        example: `<div class="p-sm">Small padding</div>`,
                    },
                    {
                        name: '.p-md',
                        description: '1rem (16px)',
                        example: `<div class="p-md">Medium padding</div>`,
                    },
                    {
                        name: '.p-lg',
                        description: '1.5rem (24px)',
                        example: `<div class="p-lg">Large padding</div>`,
                    },
                ],
            },
            {
                id: 'margin',
                title: 'Margin Classes',
                description: 'Add external spacing around elements.',
                category: 'Spacing',
                classes: [
                    {
                        name: '.m-xs',
                        description: '0.25rem (4px)',
                        example: `<div class="m-xs">Extra small margin</div>`,
                    },
                    {
                        name: '.m-sm',
                        description: '0.5rem (8px)',
                        example: `<div class="m-sm">Small margin</div>`,
                    },
                    {
                        name: '.m-md',
                        description: '1rem (16px)',
                        example: `<div class="m-md">Medium margin</div>`,
                    },
                ],
            },
        ],
    },
    gaps: {
        overview: 'Gap utilities for consistent spacing in grid and flexbox layouts.',
        components: [
            {
                id: 'gap-classes',
                title: 'Gap Classes',
                description: 'Add spacing between grid/flex items.',
                category: 'Spacing',
                classes: [
                    {
                        name: '.gap-xs',
                        description: '0.25rem gap',
                        example: `<div class="grid gap-xs">
  <div class="col-6">Item 1</div>
  <div class="col-6">Item 2</div>
</div>`,
                    },
                    {
                        name: '.gap-sm',
                        description: '0.5rem gap',
                        example: `<div class="grid gap-sm">
  <div class="col-6">Item 1</div>
  <div class="col-6">Item 2</div>
</div>`,
                    },
                    {
                        name: '.gap-md',
                        description: '1rem gap',
                        example: `<div class="grid gap-md">
  <div class="col-6">Item 1</div>
  <div class="col-6">Item 2</div>
</div>`,
                    },
                    {
                        name: '.gap-lg',
                        description: '1.5rem gap',
                        example: `<div class="grid gap-lg">
  <div class="col-6">Item 1</div>
  <div class="col-6">Item 2</div>
</div>`,
                    },
                ],
            },
        ],
    },
    centering: {
        overview: 'Various techniques and utilities for centering elements.',
        components: [
            {
                id: 'center-utilities',
                title: 'Centering Utilities',
                description: 'Quick centering with utility classes.',
                category: 'Layout',
                classes: [
                    {
                        name: '.center',
                        description: 'Center content horizontally and vertically',
                        example: `<div class="flex center" style="height: 200px;">
  <div>Centered Content</div>
</div>`,
                    },
                    {
                        name: '.center-x',
                        description: 'Center horizontally',
                        example: `<div class="center-x">
  <div>Horizontally Centered</div>
</div>`,
                    },
                    {
                        name: '.center-y',
                        description: 'Center vertically',
                        example: `<div class="center-y" style="height: 200px;">
  <div>Vertically Centered</div>
</div>`,
                    },
                ],
            },
        ],
    },
    breakpoints: {
        overview: 'Responsive breakpoints for different screen sizes.',
        components: [
            {
                id: 'breakpoint-values',
                title: 'Breakpoint Values',
                description: 'Default breakpoints in Axis-Twelve.',
                category: 'Responsive',
                classes: [
                    { name: 'xs', description: '0px and up (mobile)' },
                    { name: 'sm', description: '576px and up (small tablets)' },
                    { name: 'md', description: '768px and up (tablets)' },
                    { name: 'lg', description: '992px and up (desktops)' },
                    { name: 'xl', description: '1200px and up (large desktops)' },
                ],
            },
            {
                id: 'responsive-classes',
                title: 'Using Breakpoints',
                description: 'Apply classes at specific breakpoints.',
                category: 'Responsive',
                classes: [
                    {
                        name: 'Breakpoint Prefix',
                        description: 'Add breakpoint prefix to any utility',
                        example: `<div class="col-12 md:col-6 lg:col-4">
  <!-- Full width on mobile, 
       50% on tablets, 
       33% on desktop -->
</div>`,
                    },
                ],
            },
        ],
    },
    variables: {
        overview: 'CSS custom properties for theming and customization.',
        components: [
            {
                id: 'color-variables',
                title: 'Color Variables',
                description: 'Customize framework colors.',
                category: 'Customization',
                classes: [
                    { name: '--primary-color', description: 'Primary brand color' },
                    { name: '--secondary-color', description: 'Secondary brand color' },
                    { name: '--text-color', description: 'Default text color' },
                    { name: '--bg-color', description: 'Default background color' },
                ],
            },
            {
                id: 'spacing-variables',
                title: 'Spacing Variables',
                description: 'Control spacing scale.',
                category: 'Customization',
                classes: [
                    { name: '--space-xs', description: '0.25rem' },
                    { name: '--space-sm', description: '0.5rem' },
                    { name: '--space-md', description: '1rem' },
                    { name: '--space-lg', description: '1.5rem' },
                    { name: '--space-xl', description: '2rem' },
                ],
            },
        ],
    },
    'best-practices': {
        overview: 'Recommended patterns and best practices for using Axis-Twelve.',
        components: [
            {
                id: 'tips',
                title: 'Best Practices',
                description: 'Tips for optimal usage.',
                category: 'Guide',
                classes: [
                    {
                        name: 'Use Grid Container',
                        description: 'Always wrap columns in .grid',
                        example: `<!-- Good -->
<div class="grid">
  <div class="col-6">Content</div>
</div>

<!-- Bad -->
<div class="col-6">Content</div>`,
                    },
                    {
                        name: 'Responsive First',
                        description: 'Start mobile, add breakpoints',
                        example: `<!-- Mobile first approach -->
<div class="col-12 md:col-6 lg:col-4">
  Responsive column
</div>`,
                    },
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

export const v1Changelog: ChangelogEntry[] = [
    {
        version: '1.1.0',
        date: '2026-02-07',
        changes: [
            'Performance optimization - reduced CSS file size by 25%',
            'Optimized responsive spacing utilities',
            'Removed examples folder to dedicated repository',
            'Enhanced grid system with better responsive utilities',
            'Added comprehensive flexbox utilities',
            'Improved spacing system with gap utilities',
            'Added centering utilities and helpers',
            'Enhanced breakpoint system',
            'Improved CSS variables documentation',
            'Added best practices guide',
        ],
    },
    {
        version: '1.0.1',
        date: '2025-12-07',
        changes: [
            'Documentation and tooling improvements',
            'No framework/SCSS changes',
        ],
    },
    {
        version: '1.0.0',
        date: '2025-12-07',
        changes: [
            'Initial stable release',
            'SCSS optimization and refactoring',
        ],
    },
];

