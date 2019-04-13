# Fukuro React Modal
You can either use this library as-is to create simple modal windows in React, or learn from the source code, and build your own modal factory for your project.

This library uses ReactDOM portal to render the modal outside of the root div in a sibling element. This minimizes issues with z-indexes, overflows, etc.

### Installing and using
Install using NPM:
```
npm install fukuro-react-modal
```

Then you can do the following to use it:
```
import ModalFactory from 'fukuro-react-modal'
(...)
const header = "Header Content" //optional if you want a quick and dirty modal
const footer = "Footer Content" //optional if you want a quick and dirty modal
const modalType = "LARGE" //optional type specifier, leave blank for content responsive

{YourCriteriaForShowingTheModal ?
  <ModalFactory header={header} footer={footer} onClose={this.toggleYourCriteraForShowingTheModalFunction}>
    Your content goes here!
  </ModalFactory>
: null}
}
```

The modal currently supports a few different types of modals:
- RESPONSIVE (Default)
- LARGE
- TALL

Use the onClose prop to send a reference to a handler that changes the state between opened and closed in your parent component. This will fire when the backdrop is clicked.