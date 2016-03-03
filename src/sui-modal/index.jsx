import React from 'react';
import cx from 'classnames';

export default class SuiModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: this.props.open,
      verticallyCentered: this.props.verticallyCentered,
      closeOnOutsideClick: this.props.closeOnOutsideClick,
      textClose: this.props.textClose,
      textCloseHidden: this.props.textCloseHidden
    };
  }

  static get defaultProps() {
    return {
      open: false,
      verticallyCentered: false,
      closeOnOutsideClick: false,
      textClose: 'Close',
      textCloseHidden: true
    };
  }

  static get propTypes() {
    return {
      open: React.PropTypes.bool,
      verticallyCentered: React.PropTypes.bool,
      closeOnOutsideClick: React.PropTypes.bool,
      textClose: React.PropTypes.string,
      textCloseHidden: React.PropTypes.bool,
      header: React.PropTypes.element,
      content: React.PropTypes.element.isRequired,
      footer: React.PropTypes.element
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      open: nextProps.open
    });
  }

  closeModal() {
    this.setState({
      open: false
    });
  }

  handleOutsideClick(event) {
    if (this.state.closeOnOutsideClick && event.target === this.refs.modalWrapper) {
      this.closeModal();
    }
  }

  render() {
    const classNames = cx({
      'sui-Modal': true,
      'sui-Modal--open': this.state.open,
      'sui-Modal--verticallyCentered': this.state.verticallyCentered
    });

    return (
      <div
        className={classNames}
        ref='modalWrapper'
        onClick={this.handleOutsideClick.bind(this)}
      >
        <div className='sui-Modal-dialog'>
          {this.props.header &&
            <div className='sui-Modal-header'>
              <button
                type='button'
                className='sui-Modal-close'
                onClick={this.closeModal.bind(this)}
              >
                {this.props.textCloseHidden ?
                  <span className='h-HiddenText'>
                    {this.props.textClose}
                  </span> :
                  this.props.textClose
                }
              </button>
              {this.props.header}
            </div>
          }
          <div className='sui-Modal-content'>
            {this.props.content}
          </div>
          {this.props.footer &&
            <div className='sui-Modal-footer'>
              {this.props.footer}
            </div>
          }
        </div>
      </div>
    );
  }
}
