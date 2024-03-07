import './App.css'
import { useState, useCallback, useEffect, useRef} from 'react'
import Navbar from "./components/Navbar"

function App() {
  const[length, setLength] = useState(8)
  const[numberAllowed, setNumberAllowed] = useState(false)
  const[charAllowed, setCharAllowed] = useState(false)
  const[password, setPassword] = useState("")

  //Using Ref Hook
  const copyPassword = useRef(null) 

  const copyPasswordToClipboard = useCallback(()=>{
    // if value copied than select the copied item
    copyPassword.current.select()
    //copy the password to clipboard
    window.navigator.clipboard.writeText(password)
  },[password])


  const passwordGenerator=useCallback(()=>{
    let pass= ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"//string we use inside password
    if(numberAllowed) str += "0123456789" //added to string when numberAllowed checked
    if(charAllowed) str += "!@#$%^&*()~[]{}/=+_-" //add to string when charAllowed checked
    
    for(let i=1; i<=length; i++)
    {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass)
  }, [length, numberAllowed, charAllowed, setPassword])

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed])
  return (
   <>
   <Navbar/>
   <div className='mt-40 w-full h-28 max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700'>
    <div>
    <h1 className='text-center shadow-md'>Password Generator</h1>
    <input type='text' value={password} ref={copyPassword} className='mt-2 outline-none w-5/6 py-1 px-3' placeholder='Password' readOnly/>
    <button className='rounded-r-lg bg-blue-600 mt-2 outline-none py-1 px-3 text-white hover:bg-violet-600 active:bg-violet-700' onClick={copyPasswordToClipboard}>copy</button>
    </div>
    <div className='flex text-sm gap-x-2 mt-4'>
      <div className='flex items-center gap-x-1'>
        <input type='range' min={6} max={20} value={length} className='cursor-pointer' onChange={(e)=>{setLength(e.target.value)}}/>
        <label>Length: {length}</label>
      </div>
    <div className=''>
      <input type='checkbox' defaultChecked={numberAllowed} onChange={()=>{setNumberAllowed((prev)=>!prev);}}/>
      <label>Numbers</label>
    </div>
    <div className=''>
      <input type='checkbox' defaultChecked={charAllowed} onChange={()=>{setCharAllowed((prev)=>!prev);}}/>
      <label>Character</label>
    </div>
   </div>
   </div>
   
   </>
  )
}

export default App
