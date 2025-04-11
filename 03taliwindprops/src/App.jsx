import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {

  let myobj = {
    username: "harry",
    age: 16
  }
  return (
    <>
    <h1 className ='bg-green-400 text-black p-4 rounded-xl mb-6'>Testing Taliwind CSS</h1>
    < Card username = "Dhruv"  someobj = { myobj}/>
    < Card  username = "Nakshatra"/>
    </>
  )
}

export default App
