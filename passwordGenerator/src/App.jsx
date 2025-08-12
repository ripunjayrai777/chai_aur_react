
import { useCallback, useEffect, useState, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numAllowed) {
        str += "0123456789"
    }
    if(charAllowed){
      str += "~!@#$%^&*"
    }

    for(let i = 1; i<= length; i++){
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass)
  }, [length, numAllowed, charAllowed,setPassword])

  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 51);
    window.navigator.clipboard.writeText(password)
  }, [password])
  useEffect(()=>{
    passwordGenerator()
  }, [length, numAllowed, charAllowed,passwordGenerator])
  return (
   <div className='text-white text-center bg-gray-800 px-5 py-5 rounded-2xl w-250'>
    <h2 className='mb-3 w-full'>Password generator</h2>
    <div >
      <input type="text" value={password} placeholder='Password'  className=' w-180 font-bold text-2xl text-orange-500 bg-gray-200 px-5 py-3 rounded-2xl m-2'readOnly
      ref={passwordRef}/>
      <button className='rounded-md' style={{backgroundColor: "blue"}} onClick={copyPasswordToClipboard}>Copy</button>
    </div>
    <div >
      <input type="range" min={6} max={50} className='cursor-pointer mr-2'onChange={(e)=>{setLength(e.target.value)}}/>
      <label className='pr-5'>Length : {length}</label> 
      <input type="checkbox" defaultChecked={numAllowed} id='numberInput' onChange={()=>{setNumAllowed((prev)=> !prev);
        
      }} className='mr-2'/>
      <label className='pr-5'>Number</label>
      <input type="checkbox" defaultChecked={charAllowed} id='characterInput' onChange={()=>{setCharAllowed((prev)=> !prev);

      }} className='mr-2'/>
      <label className='pr-5'>Character</label>
    
      
    </div>
   </div>
  )
}

export default App
