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
  import React from 'react';
  import ReactDOM from 'react-dom';
  import ReactQrcode from '@feizheng/react-qrcode';
  
  // your app:
  class App extends React.Component{
    render(){
      return (
        <ReactQrcode />
      )
    }
  }

  // render to dom:
  ReactDOM.render(<App/>, document.getElementById('app'));
  ```

## documentation
- https://afeiship.github.io/react-qrcode/

## resources
- https://www.robinwieruch.de/minimal-react-webpack-babel-setup/
- https://www.valentinog.com/blog/react-webpack-babel/
- https://jestjs.io/docs/en/tutorial-react#snapshot-testing-with-mocks-enzyme-and-react-16
- https://testing-library.com/docs/react-testing-library/api

## todos
- [ ] Add: semver number for every build files.
- [ ] Add: need output css files.
- [ ] Add: PWA support for docs.
- [ ] Add: source.map file for dist(`you can upload for production debug`).
- [ ] BUG: npm run dev will clean dist.
