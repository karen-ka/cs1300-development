import logo from './logo.svg';
import pokeball from './pokeball1.png';
import './App.css';
import MyTable from './components/table.js'
import MyGrid from './components/grid';
import data from './data.js'
import { BackTop, Button, Icon, message } from 'antd';
import { UpCircleOutlined, MinusCircleOutlined } from '@ant-design/icons';

import { Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={pokeball} className="App-logo" alt="logo" />

        <MyGrid data={data}></MyGrid>
      </header> */}
      <MyGrid data={data}></MyGrid>
      {/* <div classname='backtop'><BackTop><i><UpCircleOutlined></UpCircleOutlined></i></BackTop></div> */}
      <div classname='backtop'><BackTop></BackTop></div>
    </div>
  );
}

export default App;
