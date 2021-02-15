import {
  ClassProperties,
  getClass,
  getId,
  getTestId,
} from '../native'

export const useGetClass = (componentName: string, classProperties?: ClassProperties): string => getClass(componentName, classProperties)

export const useGetId = (componentName: string, componentId?: string): string => getId(componentName, componentId)

export const useGetTestId = (componentName: string, componentTestId?: string): string => getTestId(componentName, componentTestId)
