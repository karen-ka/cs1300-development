import './App.css';
import ParentContainer from './components/ParentContainer.jsx';
import data from './data.js'
import { BackTop } from 'antd';


function App() {
  return (
    <div className="App">
      <ParentContainer data={data}></ParentContainer>
      <div classname='backtop'><BackTop></BackTop></div>
    </div>
  );
}

export default App;
