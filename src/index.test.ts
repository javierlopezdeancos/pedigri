import treePedigree from '../src';

describe('Tree Pedigree', () => {
  const namespace = '3pdg';
  const testComponentName = 'test';
  const parentComponentName = 'parent';
  const parentComponentsTree = `${namespace}-${parentComponentName}`;

  describe('getTestId', () => {
    test('should return the default one and only testId string', () => {
      const testId = pedigree.getTestId(testComponentName);

      expect(testId).toBe(`${namespace}-${testComponentName}`);
    });

    test('should return the one and only testId string depending on the component tree channel', () => {
      const testId = pedigree.getTestId(testComponentName, parentComponentsTree);

      expect(testId).toBe(`${parentComponentsTree}-${testComponentName}`);
    });
  });

  describe('getId', () => {
    test('should return the one and only id string', () => {
      const id = pedigree.getId(testComponentName);

      expect(id).toBe(`${namespace}-${testComponentName}`);
    });

    test('the one and only id string depending on the component tree channel', () => {
      const id = pedigree.getId(testComponentName, parentComponentsTree);

      expect(id).toBe(`${parentComponentsTree}-${testComponentName}`);
    });
  });

  describe('getClass', () => {
    const class1 = 'class-1';
    const class2 = 'class-2';

    test('should return the one and only class string', () => {
      const defaultClass = `${namespace}-${testComponentName}`;
      const expectedClass = treePedigree.getClass(testComponentName);

      expect(expectedClass).toBe(defaultClass);
    });

    test('should return the one and only class string depending on the component tree channel and boolean classes that we want to add preventing collisions', () => {
      const customBooleanClass = `${namespace}-${testComponentName} ${namespace}-${testComponentName}-${class1} ${namespace}-${testComponentName}-${class2}`;
      const expectedClass = treePedigree.getClass(
        testComponentName,
        {
          boolean: [{ state: true, class: class1 }, { state: true, class: class2 }]
        },
      );

      expect(expectedClass).toBe(customBooleanClass);
    });

    test('should return the one and only class string depending on the component tree channel and boolean classes that we want to add', () => {
      const customBooleanClass = `${namespace}-${testComponentName} ${class1} ${class2}`;
      const expectedClass = treePedigree.getClass(
        testComponentName,
        {
          boolean: [
            {
              state: true,
              class: class1,
              preventCollisions: false,
            },
            {
              state: true,
              class: class2,
              preventCollisions: false,
            }]
        },
      );

      expect(expectedClass).toBe(customBooleanClass);
    });

    test('should return the one and only class string depending on the component tree channel and add classes that we want to add preventing collisions', () => {
      const class3 = 'class-3';

      const customAddClass = `${namespace}-${testComponentName} ${namespace}-${testComponentName}-${class1} ${namespace}-${testComponentName}-${class2} ${namespace}-${testComponentName}-${class3}`;

      const expectedClass = treePedigree.getClass(
        testComponentName,
        {
          add: [
            { class: class1 },
            { class: class2 },
            { class: class3 },
          ],
        },
      );

      expect(expectedClass).toBe(customAddClass);
    });

     test('should return the one and only class string depending on the component tree channel and add classes that we want to add', () => {
      const customAddClass = `${namespace}-${testComponentName} ${namespace}-${testComponentName}-${class1}`;

      const expectedClass = treePedigree.getClass(
        testComponentName,
        {
          add: [
            { class: class1 },
          ],
        },
      );

      expect(expectedClass).toBe(customAddClass);
    });

    test('should return the one and only class string depending on the component tree channel and concat classes that we want to join preventing collisions', () => {
      const customConcatClass = `${namespace}-${testComponentName} ${namespace}-${testComponentName}-${class1} ${namespace}-${testComponentName}-${class2}`;
      const expectedClass = treePedigree.getClass(testComponentName, { concat: [{ class: class1 }, { class: class2 }] });

      expect(expectedClass).toBe(customConcatClass);
    });

    test('should return the one and only class string depending on the component tree channel and concat classes that we want to join', () => {
      const customConcatClass = `${namespace}-${testComponentName} ${class1}`;

      const expectedClass = treePedigree.getClass(
        testComponentName,
        {
          concat: [
            {
              class: class1,
              preventCollisions: false,
            },
          ],
        });

      expect(expectedClass).toBe(customConcatClass);
    });
  });
});


