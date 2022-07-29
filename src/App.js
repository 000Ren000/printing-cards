import Form from './components/Form/Form';
import logo from './logo.svg';
import './App.css';
import Card from './components/Card/Card'

function App() {
  return (
    <div className="App">
      <Form />
      <Card name="Пестряцова Арина Николаевна" shtih={1819}/>
    </div>
  );
}

export default App;
