# react-qrcode
> Qr code for react.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
npm install -S @jswork/react-qrcode
```

## properties
| Name      | Type   | Required | Default | Description                           |
| --------- | ------ | -------- | ------- | ------------------------------------- |
| className | string | false    | -       | The extended className for component. |
| value     | object | false    | null    | The changed value.                    |
| onChange  | func   | false    | noop    | The change handler.                   |


## usage
1. import css
  ```scss
  @import "~@jswork/react-qrcode/dist/style.css";

  // or use sass
  @import "~@jswork/react-qrcode/dist/style.scss";

  // customize your styles:
  $react-qrcode-options: ()
  ```
2. import js
  ```js
  import ReactDemokit from '@jswork/react-demokit';
  import React from 'react';
  import ReactDOM from 'react-dom';
  import ReactQrcode from '@jswork/react-qrcode';
  import './assets/style.scss';

  class App extends React.Component {
    render() {
      return (
        <ReactDemokit
          className="p-3 app-container"
          url="https://github.com/afeiship/react-qrcode">
          <ReactQrcode className="mb-5 has-text-white" />
          <button className="button is-primary is-fullwidth">Start~</button>
        </ReactDemokit>
      );
    }
  }

  ReactDOM.render(<App />, document.getElementById('app'));

  ```

## documentation
- https://afeiship.github.io/react-qrcode/


## license
Code released under [the MIT license](https://github.com/afeiship/react-qrcode/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/react-qrcode
[version-url]: https://npmjs.org/package/@jswork/react-qrcode

[license-image]: https://img.shields.io/npm/l/@jswork/react-qrcode
[license-url]: https://github.com/afeiship/react-qrcode/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/react-qrcode
[size-url]: https://github.com/afeiship/react-qrcode/blob/master/dist/react-qrcode.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/react-qrcode
[download-url]: https://www.npmjs.com/package/@jswork/react-qrcode
