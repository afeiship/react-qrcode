import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import objectAssign from 'object-assign';
import QRCode from '@keeex/qrcodejs-kx';

const CLASS_NAME = 'react-qrcode';

export default class ReactQrcode extends Component {
  static displayName = CLASS_NAME;
  static propTypes = {
    /**
     * The extended className for component.
     */
    className: PropTypes.string,
    /**
     * The qr value.
     */
    value: PropTypes.string,
    /**
     * The `qrcodejs` options.
     */
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
    const { className, value, options, ...props } = this.props;
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
