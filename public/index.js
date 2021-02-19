import ReactDemokit from '@jswork/react-demokit';
import React from 'react';
import ReactDOM from 'react-dom';
import ReactQrcode from '../src/main';
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
