import {useRef} from 'react';
import ReactToPrint from 'react-to-print';
import Form from './components/Form/Form';
import './App.css';
import Card from './components/Card/Card'

function App() {
  const componentRef = useRef(null);


  return (
    <div className="App">
      <Form />
      <Card name="Пестряцова Арина Николаевна" shtih={1819}/>
    </div>
  );
}

export default App;
