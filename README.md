# tree-pedigree :dog: :100:

[![npm version](https://badge.fury.io/js/tree-pedigree.svg)](https://badge.fury.io/js/tree-pedigree)

Get the *[one and only](https://www.youtube.com/watch?v=ZvMsp7s78Do)* unique string to your component depending on their component tree channel

## Install

```shell
npm i --save tree-pedigree
```

## Use it

### Import from your node modules

```javascript
import treePedigree from 'tree-pedigree'
```

### Use it with vanilla javascript

```javascript
const componentAName = 'component-A-name'
const componentAId = treePedigree.getId(componentAName)

console.log(componentAId) // 3pdg-component-A-name
```

## Functionality

### Get Id

#### Get static one and only Id to a component

```javascript
const componentAName = 'component-A-name'
const componentTreePedigreeId = treePedigree.getId(componentAName)

console.log(componentTreePedigreeId) // 3pdg-component-A-name
```

#### Get static one and only Id to a component depending on their tree component channel

```javascript
const componentParentName = 'component-parent-name'
const componentChildName = 'component-child-name'

const componentTreePedigreeId = treePedigree.getId(
  componentChildName,
  componentParentName
)

console.log(componentTreePedigreeId)
// 3pdg-component-parent-name-component-child-name
```

### Get Test Id

#### Get static *one and only* Test Id to a component

```javascript
const componentAName = 'component-A-name'
const componentTreePedigreeTestId = treePedigree.getTestId(componentAName)

console.log(componentTreePedigreeTestId) // 3pdg-component-A-name
```

#### Get static *one and only* Test Id to a component depending on their tree component channel

```javascript
const componentParentName = 'component-parent-name'
const componentChildName = 'component-child-name'

const componentTreePedigreeTestId = treePedigree.getTestId(
  componentChildName,
  componentParentName
)

console.log(componentTreePedigreeTestId)
// 3pdg-component-parent-name-component-child-name
```

### Get Class

#### Boolean classes

You can add *one and only* classes depending on some boolean states into a base *one and only* class.

```javascript
const componentAName = 'component-A-name'

const class1 = 'class-1'
const class2 = 'class-2'

const componentTreePedigreeClass = treePedigree.getClass(
  componentAName,
  {
    boolean: [
      {
        state: true,
        class: class1
      },
      {
        state: true,
        class: class2
      }
    ],
  },
)

console.log(componentTreePedigreeClass)
// 3pdg-component-A-name 3pdg-component-A-name-class-1 3pdg-component-A-name-class-2
```

#### Add classes

You can add *one and only* classes into a base *one and only* class.

#### Concat classes

You can add *one and only* classes with a string joined into a base *one and only* base class.
