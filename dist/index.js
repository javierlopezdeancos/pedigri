"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Pedigri {
    constructor(namespace = '3pdg') {
        this._namespace = namespace;
    }
    getComponentPedigree(componentName) {
        return `${this._namespace}-${componentName}`;
    }
    getComponentPedigreeTree(componentName, componentTree) {
        if (componentTree) {
            if (componentTree.includes(`${this._namespace}-`)) {
                componentTree = componentTree.replace(`${this._namespace}-`, '');
            }
            return `${this._namespace}-${componentTree}-${componentName}`;
        }
        return this.getComponentPedigree(componentName);
    }
    set namespace(namespace) {
        this._namespace = namespace;
    }
    getId(componentName, componentTree) {
        return this.getComponentPedigreeTree(componentName, componentTree);
    }
    getTestId(componentName, componentTree) {
        return this.getComponentPedigreeTree(componentName, componentTree);
    }
    getClass(componentName, classProperties) {
        let outClass;
        const baseComponentPedigree = this.getComponentPedigree(componentName);
        outClass = baseComponentPedigree;
        if (classProperties && (classProperties === null || classProperties === void 0 ? void 0 : classProperties.concat)) {
            classProperties.concat.forEach((concatProperty, index) => {
                if (index === 0 && (concatProperty === null || concatProperty === void 0 ? void 0 : concatProperty.class)) {
                    outClass = `${baseComponentPedigree}-${concatProperty.class}`;
                }
                else if (index !== 0 && (concatProperty === null || concatProperty === void 0 ? void 0 : concatProperty.class)) {
                    outClass = outClass === null || outClass === void 0 ? void 0 : outClass.concat(' ', `${baseComponentPedigree}-${concatProperty.class}`);
                }
            });
        }
        if (classProperties && (classProperties === null || classProperties === void 0 ? void 0 : classProperties.add)) {
            classProperties.add.forEach((addProperty) => {
                if ((addProperty === null || addProperty === void 0 ? void 0 : addProperty.class) && ((addProperty === null || addProperty === void 0 ? void 0 : addProperty.preventCollisions) === undefined || (addProperty === null || addProperty === void 0 ? void 0 : addProperty.preventCollisions))) {
                    outClass = outClass === null || outClass === void 0 ? void 0 : outClass.concat(' ', `${baseComponentPedigree}-${addProperty.class}`);
                }
                else {
                    outClass = outClass === null || outClass === void 0 ? void 0 : outClass.concat('-', addProperty.class);
                }
            });
        }
        if (classProperties && (classProperties === null || classProperties === void 0 ? void 0 : classProperties.boolean)) {
            classProperties.boolean.forEach((booleanProperty) => {
                if ((booleanProperty === null || booleanProperty === void 0 ? void 0 : booleanProperty.class) && ((booleanProperty === null || booleanProperty === void 0 ? void 0 : booleanProperty.preventCollisions) === undefined || (booleanProperty === null || booleanProperty === void 0 ? void 0 : booleanProperty.preventCollisions))) {
                    outClass = outClass === null || outClass === void 0 ? void 0 : outClass.concat(' ', `${baseComponentPedigree}--${booleanProperty.class}`);
                }
                else {
                    outClass = outClass === null || outClass === void 0 ? void 0 : outClass.concat(' ', booleanProperty.class);
                }
            });
        }
        return outClass;
    }
}
exports.default = new Pedigri();
//# sourceMappingURL=index.js.map