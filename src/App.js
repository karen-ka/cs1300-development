import logo from './logo.svg';
import './App.css';
import MyTable from './components/table.js'
import MyGrid from './components/grid';
import data from './data.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
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
    </div>
  );
}

export default App;
