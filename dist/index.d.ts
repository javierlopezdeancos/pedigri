export declare type ClassBooleanProperty = {
    state?: boolean;
    class?: string;
    preventCollisions?: boolean;
};
export declare type ClassAddProperty = {
    class?: string;
    preventCollisions?: boolean;
};
export declare type ClassConcatProperty = {
    class?: string;
    preventCollisions?: boolean;
};
export declare type ClassProperties = {
    boolean?: Array<ClassBooleanProperty>;
    add?: Array<ClassAddProperty>;
    concat?: Array<ClassConcatProperty>;
};
declare class Pedigree {
    private _namespace;
    constructor(namespace?: string);
    private getComponentPedigree;
    private getComponentPedigreeTree;
    set namespace(namespace: string);
    getId(componentName: string, componentTree?: string): string;
    getTestId(componentName: string, componentTree?: string): string;
    getClass(componentName: string, classProperties?: ClassProperties): string;
}
declare const _default: Pedigree;
export default _default;
