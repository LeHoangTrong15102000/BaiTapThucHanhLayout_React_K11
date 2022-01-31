import logo from './logo.svg';
import './App.css';
import BaiTapThucHanhLayout from './components/BaiTapThucHanhLayout/BaiTapThucHanhLayout';
import DataBinding from './DataBinding/DataBinding';
import DataBindingRFC from './DataBinding/DataBindingRFC';

function App() {
  return (
    <div className="App">
      {/* <BaiTapThucHanhLayout /> */}
      <DataBinding />
      <DataBindingRFC />
    </div>
  );
}

export default App;
