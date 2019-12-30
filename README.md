# react-qrcode
> Qr code for react.

## installation
```shell
npm install -S @feizheng/react-qrcode
```

## update
```shell
npm update @feizheng/react-qrcode
```

## properties
| property  | type   | default | description |
| --------- | ------ | ------- | ----------- |
| className | String | -       | -           |
| value     | -      | -       | -           |
| onChange  | -      | -       | -           |

## usage
1. import css
  ```scss
  @import "~@feizheng/react-qrcode/dist/style.scss";

  // customize your styles:
  $react-qrcode-options: ()
  ```
2. import js
  ```js
  import ReactQrcode from '../src/main';
  import ReactDOM from 'react-dom';
  import React from 'react';
  import './assets/style.scss';

  class App extends React.Component {
    state = {
      value: 'https://www.baidu.com'
    };

    changeValue = () => {
      console.log('set new value!');
      this.setState({ value: 'https://www.mipengine.org/' });
    };

    render() {
      const { value } = this.state;
      console.log('value', value);
      return (
        <div className="app-container">
          <ReactQrcode value={value} />
          <button className="button" onClick={this.changeValue}>Regenerate</button>
        </div>
      );
    }
  }

  ReactDOM.render(<App />, document.getElementById('app'));

  ```

## documentation
- https://afeiship.github.io/react-qrcode/

## resources
- https://www.npmjs.com/package/qrcodejs2
