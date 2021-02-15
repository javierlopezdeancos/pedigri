import {
  prefix, getTestId, getId, getClass,
} from '..';

xdescribe('helpers/components', () => {
  const testComponentName = 'test';
  describe('getTestId', () => {
    const defaultTestId = `${prefix}-${testComponentName}`;
    test('should return the default test id', () => {
      const testId = getTestId(testComponentName);
      expect(testId).toBe(`${defaultTestId}`);
    });

    test('should return the custom test id', () => {
      const customTestId = 'custom-testId';
      const testId = getTestId(testComponentName, customTestId);
      expect(testId).toBe(`${defaultTestId}-${customTestId}`);
    });
  });

  describe('getId', () => {
    const defaultId = `${prefix}-${testComponentName}`;
    test('should return the default id', () => {
      const id = getId(testComponentName);
      expect(id).toBe('');
    });

    test('should return the custom id', () => {
      const customId = 'custom-id';
      const id = getId(testComponentName, customId);
      expect(id).toBe(`${defaultId}-${customId}`);
    });
  });

  describe('getClass', () => {
    test('should return the default class', () => {
      const defaultClass = `${prefix}-${testComponentName}`;
      const classs = getClass(testComponentName);
      expect(classs).toBe(defaultClass);
    });

    test('should return custom class if pass text array', () => {
      const textPropClass1 = 'text-property-1';
      const textPropClass2 = 'text-property-2';
      const customClass = `${prefix}-${testComponentName} ${textPropClass1} ${textPropClass2}`;
      const classs = getClass(testComponentName, { text: [textPropClass1, textPropClass2] });
      expect(classs).toBe(customClass);
    });

    test('should return custom class if pass boolean array', () => {
      const booleanClass1 = 'text-property-1';
      const booleanClass2 = 'text-property-2';
      const customClass = `${prefix}-${testComponentName} ${booleanClass1} ${booleanClass2}`;
      const classs = getClass(testComponentName, { boolean: [{ state: true, class: booleanClass1 }, { state: true, class: booleanClass2 }] });
      expect(classs).toBe(customClass);
    });

    test('should return custom class if pass add array', () => {
      const addClass1 = 'text-property-1';
      const addClass2 = 'text-property-2';
      const customClass = `${prefix}-${testComponentName} ${addClass1} ${addClass2}`;
      const classs = getClass(testComponentName, { add: [addClass1, addClass2] });
      expect(classs).toBe(customClass);
    });

    test('should return custom class if pass concat array', () => {
      const concatClass1 = 'text-property-1';
      const concatClass2 = 'text-property-2';
      const customClass = `${prefix}-${testComponentName}-${concatClass1}-${concatClass2}`;
      const classs = getClass(testComponentName, { concat: [concatClass1, concatClass2] });
      expect(classs).toBe(customClass);
    });
  });
});
