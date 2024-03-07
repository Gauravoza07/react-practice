import { useState } from 'react'
import './App.css'
import Card from "./components/Card"

function App() {
  const [count, setCount] = useState(0)

  return (
  <>
  <h1 className='bg-green-400 text-white'>Props helps to make component reusable like : we add card then we can use that card many place in our website </h1>
    <Card about="Cricket Bat" btnText="Click Me"/>
    <Card about="Mac Book" btnText="Visit Me"/>
  </>
  ) 
}

export default App
