import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    
  // use of HOOKS IN Reactjs
  let [Counter, setCounter] = useState(15);
  // let Counter = 15;

  const addValue = () => {
    console.log("clicked addValue" );
    Counter = Counter + 1;
   setCounter(Counter);
  }

  const removeValue = () =>{
    console.log("clicked removeValue" );
    Counter = Counter - 1;
   setCounter(Counter);
  }

  return (
    <>
       <h1>Learn new in react.js, a basic project </h1>
       <h3>Counter value : {Counter}</h3>
       <button onClick = {addValue} >Add value</button> 
       <br />
       <button onClick = {removeValue} >Remove value</button> 
    </>
  )
}

export default App
