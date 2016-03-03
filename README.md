# sui-modal

## Description
The SUI-Modal component renders a smart dialog prompt over your site's content. It supplies some interface methods to meet the minimum required functionality.

## Demo page
Check out the [demo page](http://sui-components.github.io/sui-modal/).

## Usage
Render component passing the following params:
* `open`: Optional param to show up initially the modal. Defaults to `false`.
*  `verticallyCentered`: Optional param to vertically center the modal. Defaults to `false`.
* `closeOnOutsideClick`: Optional param to close the modal on outside click. Defaults to `false`.
* `textClose`: Optional text for the modal close button. Defaults to `'Close'`.
* `textCloseHidden`: Optional param to hide the modal close button text. Defaults to `true`.
* `header`: Optional param to pass the header elements within a required wrapper (DOM element).
*  `content`: Required param to pass the content elements within a required wrapper (DOM element).
* `footer`: Optional param to pass the footer elements within a required wrapper (DOM element).

An example of the `sui-modal` component implementation is:

```javascript
// JSX file.
import React from 'react';
import ReactDom from 'react-dom';
import SuiModal from '../src';

class MyModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  openModal() {
    this.setState({
      open: true
    });
  }

  closeModal() {
    this.setState({
      open: false
    });
  }

  render() {
    return (
      <div>
        <button type='button' onClick={this.openModal.bind(this)}>
          Open modal
        </button>
        <SuiModal
          open={this.state.open}
          verticallyCentered
          closeOnOutsideClick
          header={
            <strong>My new brand modal</strong>
          }
          content={
            <div>
              <p>Cras vitae consectetur dui. Nullam quis arcu id ligula rhoncus faucibus et eget odio. Etiam vulputate fringilla nibh sed sodales. Phasellus facilisis dignissim aliquet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Quisque feugiat vehicula odio at venenatis. Integer rhoncus tortor sed auctor laoreet. Aliquam ac vulputate urna. Suspendisse felis eros, maximus eget urna vitae, pellentesque pretium odio. Duis mi arcu, laoreet sit amet pulvinar ac, congue quis turpis. Cras rutrum leo ac massa malesuada, quis vestibulum lorem convallis. Fusce eget tellus euismod, fringilla nulla ornare, blandit purus. Nam orci lacus, faucibus at nisi id, auctor molestie nunc. Nulla a porta quam. Donec vel iaculis nibh.</p>
              <p>Ut maximus fermentum mollis. Phasellus tincidunt nunc sem, eu efficitur nunc porta ut. Suspendisse aliquam odio ex, in facilisis turpis dictum quis. Morbi a venenatis ante, at imperdiet neque. Nullam eu risus dignissim, semper nunc in, sodales nibh. Sed tempus sapien id libero vulputate, at vestibulum tellus tempor. Aenean ornare massa et semper porta.</p>
            </div>
          }
        />
      </div>
    );
  }
}

ReactDom.render(
  <MyModal />,
  document.getElementById('modal')
);
```

## Installation
Clone this repository and run:
```
$ npm install
```

## Start working in development mode:
```
$ npm run dev
```
This command will build your `.sass`, `.jsx` and `.js` files and open a local development environment, with hot reloading. A browser window will be opened as well, showing the entry point of your documents folder for development purposes.

## To work in TDD mode:
```
$ npm run test:watch
```
## To run unit tests only once:
```
$ npm test
```
## To publish yours docs page:
```
$ npm run doc
```

That will publish in a gh-page for `docs` folder. What is a component without a [public demo](http://sui-components.github.io/sui-modal/), isn't it ?!
