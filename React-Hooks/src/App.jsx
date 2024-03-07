import { useState } from 'react'
import React from 'react';
import './App.css'

function App() {
  const [counter, setCounter] = useState(15)
  const addValue = ()=>{
     setCounter(counter+1)
  }
  const removeValue = ()=>{
    setCounter(counter-1)
 }

 if(counter === 21)
 {
  setCounter(counter === 1)
 }
  return (
    <>
      <h1>HOOKS Example</h1>
      <p>Hooks are used as UI manipulation to update value anywhere in project</p>
      <h2>Counter value : {counter}</h2>
      <button onClick={addValue}>Add Value</button>
      <br/>
      <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
