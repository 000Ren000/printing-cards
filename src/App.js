import {useRef, useState} from 'react';
import ReactToPrint, {useReactToPrint} from 'react-to-print';
import Form from './components/Form/Form';
import './App.css';
import Card from './components/Card/Card'
import {GlobalContext} from './components/Card/Card';

function App() {
  const [name, setName] = useState('ФИО');
  const [cod, setCod] = useState(2500000000003);

  const changeName = (newName) => setName(newName);
  const changeCod = (newCod) => setCod(newCod);

  return (
      <div className="App">
        <Card name={name} shtih={cod} functions={{changeName, changeCod}}/>
      </div>
  );
}

export default App;
