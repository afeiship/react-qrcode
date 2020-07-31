import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from '@feizheng/noop';
import objectAssign from 'object-assign';
import QRCode from '@keeex/qrcodejs-kx';

const CLASS_NAME = 'react-qrcode';

export default class extends Component {
  static displayName = CLASS_NAME;
  static propTypes = {
    className: PropTypes.string,
    value: PropTypes.string,
    options: PropTypes.object
  };

  static defaultProps = {
    options: {
      width: 128,
      height: 128
    }
  };

  shouldComponentUpdate(inNextProps) {
    const { value } = inNextProps;
    if (value !== this.props.value) {
      this.qrcode.makeCode(value);
    }
    return true;
  }

  componentDidMount() {
    const { value, options } = this.props;
    this.qrcode = new QRCode(this.root, objectAssign({ text: value }, options));
    this.root.removeAttribute('title');
  }

  render() {
    const { className, options, ...props } = this.props;
    return (
      <div
        data-component={CLASS_NAME}
        className={classNames(CLASS_NAME, className)}
        ref={(root) => (this.root = root)}
        {...props}
      />
    );
  }
}
