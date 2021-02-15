import { useMemo } from 'react'

import {
  ClassProperties,
  getClass,
  getId,
  getTestId,
} from '../native'

export const useGetClass = (componentName: string, classProperties?: ClassProperties): string =>
  useMemo(() => getClass(componentName, classProperties), [])

export const useGetId = (componentName: string, componentId?: string): string =>
  useMemo(() => getId(componentName, componentId), [])

export const useGetTestId = (componentName: string, componentTestId?: string): string =>
  useMemo(() => getTestId(componentName, componentTestId), [])
