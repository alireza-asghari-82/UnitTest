import './App.css';
import User from './Component/User';
import CustInput from './Component/CustInput';
function App() {
  return (
    // <User/>
    <div className="App">
      <h1>Testing Library React</h1>

      <div>
        <label>Cust :</label>
        <CustInput/>
      </div>
      <br/>
      <label>Learn React</label>
    </div>
  );
}

export default App;
