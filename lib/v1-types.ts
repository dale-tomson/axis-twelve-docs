/**
 * Type definitions for structured v1 API documentation
 */

export interface APIProperty {
    name: string;
    value: string;
    description?: string;
}

export interface APIClass {
    name: string;
    description: string;
    example?: string;
    properties?: APIProperty[];
}

export interface APIComponent {
    id: string;
    title: string;
    description: string;
    category: string;
    classes: APIClass[];
}

export interface ParsedDocumentation {
    overview: string;
    components: APIComponent[];
}
