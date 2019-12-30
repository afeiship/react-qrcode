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
