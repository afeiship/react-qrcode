// import noop from '@jswork/noop';
import cx from 'classnames';
import React, { Component, HTMLAttributes } from 'react';
import QRCode from 'qrcodejs2-fix';

// https://github.com/davidshimjs/qrcodejs
// https://github.com/davidshimjs/qrcodejs/issues/113

const CLASS_NAME = 'react-qrcode';
// 	L : 1,
// 	M : 0,
// 	Q : 3,
// 	H : 2
export interface QRCodeOptions {
  width?: number;
  height?: number;
  colorDark?: string;
  colorLight?: string;
  correctLevel?: 0 | 1 | 2 | 3;
}

export type ReactQRCodeProps = {
  value: string;
  options?: QRCodeOptions;
  className?: string;
} & HTMLAttributes<HTMLSpanElement>;

export default class ReactQRCode extends Component<ReactQRCodeProps> {
  static displayName = CLASS_NAME;
  static version = '__VERSION__';
  static defaultProps = {
    options: {
      width: 128,
      height: 128,
      colorDark: '#000000',
      colorLight: '#ffffff',
      correctLevel: 2,
    },
  };

  private root: HTMLSpanElement | null = null;
  private qrcode: QRCode | null = null;

  componentDidMount() {
    const { value, options } = this.props;
    this.qrcode = new QRCode(this.root, { text: value, ...options });
    const img = this.qrcode._oDrawing._elImage;
    this.root?.removeAttribute('title');
    img?.removeAttribute('alt');
  }

  componentDidUpdate(prevProps: Readonly<ReactQRCodeProps>) {
    const { value } = this.props;
    if (value !== prevProps.value) {
      this.qrcode?.makeCode(value);
    }
  }

  render() {
    const { className, value, options, ...props } = this.props;
    return (
      <span
        className={cx(CLASS_NAME, className)}
        data-component={CLASS_NAME}
        ref={(root) => (this.root = root)}
        {...props}
      />
    );
  }
}
