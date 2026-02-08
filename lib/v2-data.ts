import { V2Index, V2ModuleDoc } from './v2-types';
import indexData from './data/v2/api/index.json';

// Export the api index for global stats
export const apiIndex = indexData as unknown as V2Index;

export interface V2Module {
    slug: string;
    title: string;
    description: string;
    importPath: string;
    stats: {
        standard: string;
        minified: string;
        gzipped: string;
    };
}

// Generate v2Modules list from the index.json
export const v2Modules: V2Module[] = apiIndex.modules.map(module => ({
    slug: module.name,
    title: module.name.charAt(0).toUpperCase() + module.name.slice(1),
    description: module.description,
    importPath: `axis-twelve@${apiIndex.version}/dist/modules/axis-${module.name}.css`,
    stats: module.stats
}));

// Helper to load module data
export async function getV2ModuleData(slug: string): Promise<V2ModuleDoc | null> {
    try {
        // In Next.js, we can use dynamic imports for JSON if they are in the project structure
        const data = await import(`./data/v2/api/${slug}.json`);
        return data.default as V2ModuleDoc;
    } catch (error) {
        console.error(`Error loading v2 module data for ${slug}:`, error);
        return null;
    }
}

// We still need a way to get the changelog, possibly from another JSON or keeping it for now
export interface ChangelogEntry {
    version: string;
    date: string;
    changes: string[];
}

export const v2Changelog: ChangelogEntry[] = [
    {
        version: "2.0.2",
        date: "2026-02-08",
        changes: [
            "Integrated .ax-subgrid utility class to enable nested elements to inherit parent grid tracks.",
            "Implemented .ax-subgrid with @supports for modern browsers.",
            "Automatic fallback to standard 12-column grid for legacy browser compatibility."
        ]
    },
    {
        version: "2.0.1",
        date: "2026-02-08",
        changes: [
            "Refactored physical direction properties to logical counterparts (margin-inline, padding-inline, etc.) for RTL/LTR support.",
            "Updated tooltips and layout components to use logical insets.",
            "Maintained support for 2026 browsers with physical fallbacks."
        ]
    },
    {
        version: "2.0.0",
        date: "2026-01-17",
        changes: [
            "Major Release: Complete rewrite of Axis Twelve with modular architecture.",
            "Modular build system - Separate builds for each component module.",
            "New BEM naming convention (.ax- prefix) for namespace protection.",
            "New Modules: Buttons, Forms, Modals, Tooltips, Tables, Cards.",
            "Accessibility-first design - WCAG 2.1 compliant.",
            "Fluid typography with CSS clamp().",
            "Performance optimization - reduced CSS file size by 25%."
        ]
    }
];
