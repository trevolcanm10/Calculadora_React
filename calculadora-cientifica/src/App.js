import {useState} from 'react';
import Display from './components/Display';
import './static/App.css';
import Keypad from './components/Keypad';


function App() {

  const [input,setInput] = useState('');

  const handleButtonClick = async (value) =>{
    if(value === '='){
      try{
        const response = await fetch('http://localhost:5000/calculate',{
          method : 'POST',
          headers: {'Content-Type':'application/json'},
          body : JSON.stringify({expression:input})
        });
        const data = await response.json();
        if(data.result !== undefined){
          setInput(data.result.toString());
        }else{
          setInput('Error');
        }
      }catch{
        setInput('Error');
      }
    }else if(value ==='c'){
      setInput('');
    }else if(value ==='⌫'){
      setInput(input.slice(0,-1)); //Elimina el último caracter
    }else{
      setInput(input + value);
    }
  };
  return (
    <div className='calculator'>
      <h1>Calculadora Científica</h1>
      <Display value={input || '0'}/>
      <Keypad onButtonClick = {handleButtonClick} />
    </div>
  );
}
export default App;
