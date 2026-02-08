// Re-export v1 types for use in v2
// Both v1 and v2 use the same documentation structure
export type { APIClass, APIProperty, APIComponent, ParsedDocumentation } from './v1-types';

export interface V2Class {
    name: string;
    description: string;
    type: string;
}

export interface V2Example {
    title: string;
    code: string;
    description: string;
}

export interface V2Variable {
    name: string;
    default: string;
    description: string;
}

export interface V2Customization {
    variables: V2Variable[];
}

export interface V2EvolutionEntry {
    version: string;
    type: string;
    description: string;
}

export interface V2ModuleDoc {
    module: string;
    version: string;
    description: string;
    installation: {
        full: string;
        module: string;
    };
    classes?: V2Class[];
    attributes?: V2Variable[];
    breakpoints?: { prefix: string; minWidth: string }[];
    features?: string[];
    notes?: string[];
    examples: V2Example[];
    customization?: V2Customization;
    accessibility: string[];
    evolution: V2EvolutionEntry[];
}

export interface V2IndexModule {
    name: string;
    path: string;
    description: string;
    stats: {
        standard: string;
        minified: string;
        gzipped: string;
    };
}

export interface V2Index {
    name: string;
    version: string;
    description: string;
    links: {
        repository: string;
        documentation: string;
        api_root: string;
    };
    modules: V2IndexModule[];
    assets: {
        full: string;
        stats: {
            standard: string;
            minified: string;
            gzipped: string;
        };
    };
    latest_release: {
        version: string;
        summary: string;
        changelog_url: string;
    };
}
