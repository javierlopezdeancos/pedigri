export const prefix = 'r2d2'

export const getComponentUuid = (name: string): string => `${prefix}-${name}`

export const getTestId = (componentName: string, componentTestId?: string): string => {
  let testId = `${prefix}-${componentName}`

  if (componentTestId) {
    testId += `-${componentTestId}`
  }

  return testId
}

export const getId = (componentName: string, componentId?: string): string => {
  if (componentId) {
    return `${prefix}-${componentName}-${componentId}`
  }

  return ''
}

export type ClassBooleanProperty = {
  state?: boolean
  class?: string
  preventCollisions?: boolean
}

export type ClassAddProperty = {
  class?: string
  preventCollisions?: boolean
}

export type ClassConcatProperty = {
  class?: string
  complement?: boolean
}

export type ClassProperties = {
  boolean?: Array<ClassBooleanProperty>
  add?: Array<ClassAddProperty>
  concat?: Array<ClassConcatProperty>
}

export const getClass = ( componentName: string, classProperties?: ClassProperties ): string => {
  let outClass: string
  const baseUUIDClass = getComponentUuid(componentName)

  outClass = baseUUIDClass

  if (classProperties && classProperties.concat) {
    classProperties.concat.forEach((concatProperty?: ClassConcatProperty): void => {
      if (concatProperty?.class && !concatProperty?.complement) {
        outClass = outClass?.concat('-', concatProperty.class)
      } else if (concatProperty?.class && concatProperty?.complement) {
        outClass = outClass?.concat('-', `${baseUUIDClass}-${concatProperty.class}`)
      }
    })
  }

  if (classProperties && classProperties.add) {
    classProperties.add.forEach((addProperty?: ClassAddProperty): void => {
      if (addProperty?.class && !addProperty?.preventCollisions) {
        outClass = outClass?.concat(' ', addProperty.class)
      } else if (addProperty?.class && addProperty?.preventCollisions) {
        outClass = outClass?.concat(' ', `${baseUUIDClass}-${addProperty.class}`)
      }
    })
  }

  if (classProperties && classProperties.boolean) {
    classProperties.boolean.forEach((booleanProperty: ClassBooleanProperty | undefined): void => {
      if (booleanProperty?.state && booleanProperty?.class && !booleanProperty?.preventCollisions) {
        outClass = outClass?.concat(' ', booleanProperty.class)
      } else if (booleanProperty?.state && booleanProperty?.class && booleanProperty?.preventCollisions) {
        outClass = outClass?.concat(' ', `${baseUUIDClass}-${booleanProperty.class}`)
      }
    });
  }

  return outClass
}

export const getGTM = (componentName: string, componentGTM?: string): string => {
  if (componentGTM) {
    if (componentGTM.includes(`${prefix}-`)) {
      componentGTM = componentGTM.replace(`${prefix}-`, '');
    }

    return `${prefix}-${componentGTM}-${componentName}`;
  }

  return `${prefix}-${componentName}`;
};
