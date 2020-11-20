import './App.css';
import MyGrid from './components/grid';
import data from './data.js'
import { BackTop } from 'antd';


function App() {
  return (
    <div className="App">
      <MyGrid data={data}></MyGrid>
      <div classname='backtop'><BackTop></BackTop></div>
    </div>
  );
}

export default App;
