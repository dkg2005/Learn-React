import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    
  // use of HOOKS IN Reactjs
  let [Counter, setCounter] = useState(10);
  // let Counter = 15;

  const addValue = () => {
    console.log("clicked addValue" );
    if(Counter <= 19){
      Counter = Counter + 1;
      setCounter(Counter);
    }
    else{
      console.log(`Now you are trying to go abobe from ${Counter}`)
      return ;
    }
   
  }

  const removeValue = () =>{
    console.log("clicked removeValue" );
    if(Counter >= 1){
    Counter = Counter - 1;
   setCounter(Counter);
   }
   else{
    console.log(`Now you are trying to go below ${Counter}`);
    return;
   }
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
