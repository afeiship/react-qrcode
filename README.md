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
| value     | string | false    | -       | The qr value.                         |
| options   | object | false    | -       | The `qrcodejs` options.               |


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
    state = {
      value: 'https://www.baidu.com'
    };

    changeValue = () => {
      console.log('set new value!');
      // [195, 217]
      //(BUG:) https://github.com/davidshimjs/qrcodejs
      var url = 'https://www.baidu.com&redirect=https%3A%2F%2Fwww.baidu.com%2Findex.html%3Fsdflsjfdjslsdlfjlsdjflksjdfkljsdklfjskldjfklsdjfkljsdklfjskldjfklsdjflssldjflsdjflksjdfljsdlfjsdjf%2Blksdjflksdjfklsjdfkljsdlfjlfjslkdfsdlfjsdlfjsdlfjlsdfjsldfjkljldsfj'.slice(
        0,
        197
      );

      // console.log(url.length);
      this.setState({ value: url });
    };

    render() {
      const { value } = this.state;
      return (
        <ReactDemokit
          className="p-3 app-container"
          url="https://github.com/afeiship/react-qrcode">
          <ReactQrcode value={value} />
          <button className="button is-primary my-2" onClick={this.changeValue}>
            Regenerate
          </button>
        </ReactDemokit>
      );
    }
  }

  ReactDOM.render(<App />, document.getElementById('app'));

  ```

## documentation
- https://afeiship.github.io/react-qrcode/

## resources
- https://www.npmjs.com/package/qrcodejs2

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
