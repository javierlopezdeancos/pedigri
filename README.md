# Pedigri :dog: :100:

[![npm version](https://badge.fury.io/js/pedigri.svg)](https://badge.fury.io/js/pedigri)

Get the *[one and only](https://www.youtube.com/watch?v=ZvMsp7s78Do)* unique string to your component depending on their component tree channel


## Why?

Why use pedigri?.


### The problem

Usually developers needs attributes in components in order to get some node from them to test it.

**The ideal solution would be to have unique identifiers (id, data-testId...) in components** that make this task easier.

Sometimes this task is only handled in css injection with css modules (introducing a hash) or other injection systems of some bundlers such as webpack, parcel or similar.

This technique is not extrapolable to the unique identifiers to components because this hash is dinamicly regenerate, is unique but not persistent. This would not be satisfactory because we would have to connect the generation of these identifiers via dynamic hashes to our testing code or any other purpose.



```textile


   ┌─────────────────────────────────────────────────────────────────┐
   │                                                                 │
   │   COMPONENT A                                                   │
   │                                                                 │
   │   ┌─────────────────────────────────────────────────────────┐   │
   │   │                                                         │   │
   │   │  COMPONENT B                                            │   │
   │   │  ┌───────────────────────┐   ┌──────────────────────┐   │   │
   │   │  │                       │   │                      │   │   │
   │   │  │ COMPONENT C           │   │ COMPONENT D          │   │   │
   │   │  │                       │   │                      │   │   │
   │   │  │                       │   │                      │   │   │
   │   │  │                       │   │                      │   │   │
   │   │  │                       │   │                      │   │   │
   │   │  │                       │   │                      │   │   │
   │   │  └───────────────────────┘   └──────────────────────┘   │   │
   │   │                                                         │   │
   │   └─────────────────────────────────────────────────────────┘   │
   │                                                                 │
   └─────────────────────────────────────────────────────────────────┘


```

This problem was related by some testing libraries, take a look into [react testing library FAQ documentation](https://testing-library.com/docs/dom-testing-library/faq/) about use `data-testId`attributes to testing prouposes:

> You probably want some simple E2E tests that run in production on occasion to make certain that things are working smoothly. In that case the `data-testid` attributes will be very useful. Even if you don't run these in production, you may want to run some E2E tests that run on the same code you're about to ship to production. In that case, the `data-testid` attributes will be valuable there as well


### The solution

Here is how **Pedigri** could help you. 

1. Get unique and semantic identifiers to our components depending on the **component name** and their *family tree* in the component chain.

2. Connect your components with the same consisten format.

3. Share this identifiers to different propuses as google tag manager events attachements or unit or functional tetsing.

4. Do strongs unions between your app code and your testing code.

5. Not hardcode indetifiers across all the app anymore.


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

You can add *one and only* classes depending on some boolean states into a base *one and only* class with double dashes.

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
// 3pdg-component-A-name 3pdg-component-A-name--class-1 3pdg-component-A-name--class-2
```

#### Add classes

You can add *one and only* classes into a base *one and only* class.

```javascript
const componentAName = 'component-A-name'

const class1 = 'class-1'
const class2 = 'class-2'

const componentPedigriClass = pedigri.getClass(
  componentAName,
  {
    add: [
      { class: class1 },
      { class: class2 },
    ],
  }
s)

console.log(componentPedigriClass)
// 3pdg-component-A-name 3pdg-component-A-name-class-1 3pdg-component-A-name-class-2
```

#### Concat classes

You can concat strings into a base *one and only* base class to build *one and only* classes.

```javascript
const componentAName = 'component-A-name'

const class1 = 'class-1'
const class2 = 'class-2'

const componentPedigriClass = pedigri.getClass(componentAName, { concat: [{ class: class1 }] })

console.log(componentPedigriClass)
//3pdg-component-A-name-class-1
```
