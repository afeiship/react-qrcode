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
    // [195, 217]
    //(BUG:) https://github.com/davidshimjs/qrcodejs
    var url = 'https://www.baidu.com&redirect=https%3A%2F%2Fwww.baidu.com%2Findex.html%3Fsdflsjfdjslsdlfjlsdjflksjdfkljsdklfjskldjfklsdjfkljsdklfjskldjfklsdjflssldjflsdjflksjdfljsdlfjsdjf%2Blksdjflksdjfklsjdfkljsdlfjlfjslkdfsdlfjsdlfjsdlfjlsdfjsldfjkljldsfj'.slice(0, 197);

    // console.log(url.length);
    this.setState({ value: url });
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
