import logo from './logo.svg';
import pokeball from './pokeball1.png';
import './App.css';
import MyTable from './components/table.js'
import MyGrid from './components/grid';
import data from './data.js'
import { BackTop, Button, Icon, message } from 'antd';
import { UpCircleOutlined, MinusCircleOutlined } from '@ant-design/icons';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={pokeball} className="App-logo" alt="logo" />

        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React!
        </a> */}
        {/* <MyTable></MyTable> */}
        <MyGrid data={data}></MyGrid>
      </header>
      {/* <div classname='backtop'><BackTop><i><UpCircleOutlined></UpCircleOutlined></i></BackTop></div> */}
      <div classname='backtop'><BackTop></BackTop></div>
    </div>
  );
}

export default App;
