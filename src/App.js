
import { useState } from 'react';
import './App.css';
import Button from './components/Button';
import CheckBox from './components/CheckBox';
import Length from './components/Length';
import PasswordGenerator from './components/PasswordGenerator';

function App() {
  const[password,setPassword] = useState({
    uppercase:false,
    lowercase:false,
    numbers:false,
    symbols:false,
    length:5
  });

const[handleText,setHandleText]=useState("");  

const generatePassword =()=>{
    // console.log("GeneratePassword");
  const numbersArray=[1,2,3,4,5,6,7,8,9,0];
  const symbol=["!","@","#","$","%","^","&","*","~","-","_","?"];
  const lowerCase=["a","b","c","d","e","g",'h','i',"g","k","l","n","o","p","q","r","s","t","u","v",'w',"x","y","z"];
  const uppercaseletter=["A","B","C","D",'E','F','G','H','I','J','K','L','M','O','P','Q','R','S','T','U','V','W','X','Y','Z']
  const {uppercase,lowercase,numbers,symbols,length}=password;
  const generateWord=(uppercase,lowercase,numbers,symbols,length)=>{
      const availableArray=[
        ...(uppercase ? uppercaseletter : []),
        ...(lowercase ? lowerCase   : []),
        ...(numbers ? numbersArray : []),
        ...(symbols ? symbol : [])
      ]
      // console.log(availableArray)

      const shuffle=(array)=>{
        return array.sort(()=> Math.random()-0.5 )
      }
      const char=shuffle(availableArray).slice(0,length);
      console.log(char)
      setHandleText(char.join(""))
  }

  generateWord(uppercase,lowercase,numbers,symbols,length)
}

const upperCaseChange=()=>{
  setPassword({
    ...password,
    uppercase: !password.uppercase
  })
}
const lowerCaseChange=()=>{
  setPassword({
    ...password,
    lowercase: !password.lowercase
  })
}
const numberChange=()=>{
  setPassword({
    ...password,
    numbers: !password.numbers
  })
}
const symbolChange=()=>{
  setPassword({
    ...password,
    symbols: !password.symbols
  })
}
const lengthChange=(val)=>{
  setPassword({
    ...password,
    length:val

  })
  console.log(password);
}

  return (
    <div className="App">
      <PasswordGenerator handleText={handleText} setHandleText={setHandleText}/>
      <CheckBox label={"uppercase"} onChange={upperCaseChange}/>
      <CheckBox label={"lowercase"} onChange={lowerCaseChange}/>
      <CheckBox label={"numbers"} onChange={numberChange}/>
      <CheckBox label={"symbols"} onChange={symbolChange}/>
      <Length label={"length"} onChange={lengthChange}/>
      <Button onClick={generatePassword}/>
    </div>
  );
}

export default App;
