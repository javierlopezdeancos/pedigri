export type ClassBooleanProperty = {
  state?: boolean
  class?: string
  preventCollisions?: boolean
};

export type ClassAddProperty = {
  class?: string;
  preventCollisions?: boolean;
};

export type ClassConcatProperty = {
  class?: string;
};

export type ClassProperties = {
  boolean?: Array<ClassBooleanProperty>
  add?: Array<ClassAddProperty>
  concat?: Array<ClassConcatProperty>
};

class Pedigri {
  private _namespace: string;

  constructor (namespace = '3pdg') {
    this._namespace = namespace;
  }

  private getComponentPedigree (componentName: string): string {
    return `${this._namespace}-${componentName}`
  }

  private getComponentPedigreeTree (componentName: string, componentTree?: string): string {
    if (componentTree) {
      if (componentTree.includes(`${this._namespace}-`)) {
        componentTree = componentTree.replace(`${this._namespace}-`, '');
      }

      return `${this._namespace}-${componentTree}-${componentName}`;
    }

    return this.getComponentPedigree(componentName);
  }

  public set namespace (namespace: string) {
    this._namespace = namespace;
  }

  public getId (componentName: string, componentTree?: string): string {
    return this.getComponentPedigreeTree(componentName, componentTree);
  }

  public getTestId (componentName: string, componentTree?: string): string {
    return this.getComponentPedigreeTree(componentName, componentTree);
  }

  public getClass ( componentName: string, classProperties?: ClassProperties ): string {
    let outClass: string;
    const baseComponentPedigree = this.getComponentPedigree(componentName);

    outClass = baseComponentPedigree;

    if (classProperties && classProperties?.concat) {
      classProperties.concat.forEach((concatProperty: ClassConcatProperty, index: number): void => {
        if (index === 0 &&  concatProperty?.class) {
          outClass = `${baseComponentPedigree}-${concatProperty.class}`;
        } else if (index !== 0 && concatProperty?.class) {
          outClass = outClass?.concat(' ', `${baseComponentPedigree}-${concatProperty.class}`);
        }
      })
    }

    if (classProperties && classProperties?.add) {
      classProperties.add.forEach((addProperty?: ClassAddProperty): void => {
        if (addProperty?.class && (addProperty?.preventCollisions === undefined || addProperty?.preventCollisions)) {
          outClass = outClass?.concat(' ', `${baseComponentPedigree}-${addProperty.class}`);
        } else {
          outClass = outClass?.concat('-', addProperty.class);
        }
      })
    }

    if (classProperties && classProperties?.boolean) {
      classProperties.boolean.forEach((booleanProperty: ClassBooleanProperty | undefined): void => {
        if (booleanProperty?.class && (booleanProperty?.preventCollisions === undefined || booleanProperty?.preventCollisions)) {
          outClass = outClass?.concat(' ', `${baseComponentPedigree}--${booleanProperty.class}`);
        } else {
          outClass = outClass?.concat(' ', booleanProperty.class);
        }
      });
    }

    return outClass
  }
}

export default new Pedigri();
