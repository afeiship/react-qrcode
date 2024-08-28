import ReactQRCode from '@jswork/react-qrcode/src/main';
import '@jswork/react-qrcode/src/style.scss';

function App() {
  return (
    <div className="m-10 p-4 shadow bg-gray-100 text-gray-800 hover:shadow-md transition-all">
      <div className="badge badge-warning absolute right-0 top-0 m-4">
        Build Time: {BUILD_TIME}
      </div>
      <ReactQRCode value="Hello, World!" options={{ colorDark: 'black' }} />
    </div>
  );
}

export default App;