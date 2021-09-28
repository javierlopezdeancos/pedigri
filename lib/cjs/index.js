"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Pedigri = /** @class */ (function () {
    function Pedigri(namespace) {
        if (namespace === void 0) { namespace = '3pdg'; }
        this._namespace = namespace;
    }
    Pedigri.prototype.getComponentPedigree = function (componentName) {
        return this._namespace + "-" + componentName;
    };
    Pedigri.prototype.getComponentPedigreeTree = function (componentName, componentTree) {
        if (componentTree) {
            if (componentTree.includes(this._namespace + "-")) {
                componentTree = componentTree.replace(this._namespace + "-", '');
            }
            return this._namespace + "-" + componentTree + "-" + componentName;
        }
        return this.getComponentPedigree(componentName);
    };
    Object.defineProperty(Pedigri.prototype, "namespace", {
        set: function (namespace) {
            this._namespace = namespace;
        },
        enumerable: false,
        configurable: true
    });
    Pedigri.prototype.getId = function (componentName, componentTree) {
        return this.getComponentPedigreeTree(componentName, componentTree);
    };
    Pedigri.prototype.getTestId = function (componentName, componentTree) {
        return this.getComponentPedigreeTree(componentName, componentTree);
    };
    Pedigri.prototype.getClass = function (componentName, classProperties) {
        var outClass;
        var baseComponentPedigree = this.getComponentPedigree(componentName);
        outClass = baseComponentPedigree;
        if (classProperties && (classProperties === null || classProperties === void 0 ? void 0 : classProperties.concat)) {
            classProperties.concat.forEach(function (concatProperty, index) {
                if (index === 0 && (concatProperty === null || concatProperty === void 0 ? void 0 : concatProperty.class)) {
                    outClass = baseComponentPedigree + "-" + concatProperty.class;
                }
                else if (index !== 0 && (concatProperty === null || concatProperty === void 0 ? void 0 : concatProperty.class)) {
                    outClass = outClass === null || outClass === void 0 ? void 0 : outClass.concat(' ', baseComponentPedigree + "-" + concatProperty.class);
                }
            });
        }
        if (classProperties && (classProperties === null || classProperties === void 0 ? void 0 : classProperties.add)) {
            classProperties.add.forEach(function (addProperty) {
                if ((addProperty === null || addProperty === void 0 ? void 0 : addProperty.class) && ((addProperty === null || addProperty === void 0 ? void 0 : addProperty.preventCollisions) === undefined || (addProperty === null || addProperty === void 0 ? void 0 : addProperty.preventCollisions))) {
                    outClass = outClass === null || outClass === void 0 ? void 0 : outClass.concat(' ', baseComponentPedigree + "-" + (addProperty === null || addProperty === void 0 ? void 0 : addProperty.class));
                }
                else {
                    outClass = outClass === null || outClass === void 0 ? void 0 : outClass.concat('-', (addProperty === null || addProperty === void 0 ? void 0 : addProperty.class) || '');
                }
            });
        }
        if (classProperties && (classProperties === null || classProperties === void 0 ? void 0 : classProperties.boolean)) {
            classProperties.boolean.forEach(function (booleanProperty) {
                if ((booleanProperty === null || booleanProperty === void 0 ? void 0 : booleanProperty.class) && ((booleanProperty === null || booleanProperty === void 0 ? void 0 : booleanProperty.preventCollisions) === undefined || (booleanProperty === null || booleanProperty === void 0 ? void 0 : booleanProperty.preventCollisions))) {
                    outClass = outClass === null || outClass === void 0 ? void 0 : outClass.concat(' ', baseComponentPedigree + "--" + booleanProperty.class);
                }
                else {
                    outClass = outClass === null || outClass === void 0 ? void 0 : outClass.concat(' ', (booleanProperty === null || booleanProperty === void 0 ? void 0 : booleanProperty.class) || '');
                }
            });
        }
        return outClass;
    };
    return Pedigri;
}());
exports.default = new Pedigri();
