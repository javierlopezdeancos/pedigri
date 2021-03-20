# Pedigri :dog: :100:

[![npm version](https://badge.fury.io/js/pedigri.svg)](https://badge.fury.io/js/pedigri)

Get the *[one and only](https://www.youtube.com/watch?v=ZvMsp7s78Do)* unique string to your component depending on their component tree channel

## Install

```shell
npm i --save pedigri
```

## Use it

### Import from your node modules

```javascript
import pedigri from 'pedigri'
```

### Use it with vanilla javascript

```javascript
const componentAName = 'component-A-name'
const componentAId = pedigri.getId(componentAName)

console.log(componentAId) // 3pdg-component-A-name
```

## Functionality

### Get Id

#### Get static one and only Id to a component

```javascript
const componentAName = 'component-A-name'
const componentPedigriId = pedigri.getId(componentAName)

console.log(componentPedigriId) // 3pdg-component-A-name
```

#### Get static one and only Id to a component depending on their tree component channel

```javascript
const componentParentName = 'component-parent-name'
const componentChildName = 'component-child-name'

const componentPedigriId = pedigri.getId(
  componentChildName,
  componentParentName
)

console.log(componentPedigriId)
// 3pdg-component-parent-name-component-child-name
```

### Get Test Id

#### Get static *one and only* Test Id to a component

```javascript
const componentAName = 'component-A-name'
const componentPedigriTestId = pedigri.getTestId(componentAName)

console.log(componentPedigriTestId) // 3pdg-component-A-name
```

#### Get static *one and only* Test Id to a component depending on their tree component channel

```javascript
const componentParentName = 'component-parent-name'
const componentChildName = 'component-child-name'

const componentPedigriTestId = pedigri.getTestId(
  componentChildName,
  componentParentName
)

console.log(componentPedigriTestId)
// 3pdg-component-parent-name-component-child-name
```

### Get Class

#### Boolean classes

You can add *one and only* classes depending on some boolean states into a base *one and only* class.

```javascript
const componentAName = 'component-A-name'

const class1 = 'class-1'
const class2 = 'class-2'

const componentPedigriClass = pedigri.getClass(
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

console.log(componentPedigriClass)
// 3pdg-component-A-name 3pdg-component-A-name-class-1 3pdg-component-A-name-class-2
```

#### Add classes

You can add *one and only* classes into a base *one and only* class.

#### Concat classes

You can add *one and only* classes with a string joined into a base *one and only* base class.
