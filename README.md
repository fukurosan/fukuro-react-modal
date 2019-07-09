# Fukuro React Modal
This is a zero dependency modal library for React that includes resizing and moving functionality.

This library uses ReactDOM portal to render the modal outside of the root div in a sibling element. This minimizes issues with z-indexes, overflows, etc.

You can either use this library as-is to create simple yet powerful modal windows in React, or learn from the source code, and build your own modal factory for your project.

### Installing and using
Install using NPM:
```
npm install fukuro-react-modal
```

Then you can do the following to use it:
```
import FukuroModal from 'fukuro-react-modal'
(...)
const header = "Header Content" //optional
const movable={true} //requires header to be set
const footer = "Footer Content" //optional
const sizable={true} //requires footer to be set

{YourCriteriaForShowingTheModal ?
  <FukuroModal header={header} footer={footer} movable={movable} sizable={sizable} onClose={() => { this.toggleYourCriteraForShowingTheModalFunction() }}>
    Your body content goes here!
  </FukuroModal>
: null}
}
```

Use the onClose prop to send a reference to a handler that changes the state between opened and closed in your parent component. This will fire when the backdrop is clicked.