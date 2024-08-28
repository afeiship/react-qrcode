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

## usage
1. import css
  ```scss
  @import "~@jswork/react-qrcode/dist/style.css";

  // or use sass
  @import "~@jswork/react-qrcode/dist/style.scss";
  ```
2. import js
  ```js
  import ReactQRCode from '@jswork/react-qrcode';
  import '@jswork/react-qrcode/dist/style.scss';

  function App() {
    return (
      <div className="m-10 p-4 shadow bg-gray-100 text-gray-800 hover:shadow-md transition-all">
        <div className="badge badge-warning absolute right-0 top-0 m-4">
          Build Time: {BUILD_TIME}
        </div>
        <div className="text-center">
          <ReactQRCode value="Hello, World!" options={{ colorDark: 'black', width: 200, height: 200 }} className="inline-block" />
        </div>
      </div>
    );
  }

  export default App;
  ```

## preview
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
