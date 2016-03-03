import React from 'react';
import ReactDom from 'react-dom';
import SuiModal from '../src';

import '../src/index.scss';
import './styles/prism.scss';
import './index.scss';
import './styles/syntax.scss';
import './styles/codemirror.scss';
import './styles/demo.scss';

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
