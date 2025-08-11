import { useState } from 'react'

function App() {
  const [color, setColor] = useState("olive");
  
  return (
    <div
      className="w-400 h-screen"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl'>
          <button className='rounded-3xl text-white' onClick={()=> setColor("red")} style={{backgroundColor:"red"}}>Red</button>
          <button className='rounded-3xl text-white' onClick={()=> setColor("blue")} style={{backgroundColor:"blue"}}>Blue</button>
          <button className='rounded-3xl text-white' onClick={()=> setColor("green")} style={{backgroundColor:"green"}}>Green</button>
          <button className='rounded-3xl text-white' onClick={()=> setColor("brown")} style={{backgroundColor:"brown"}}>Brown</button>
        </div>
      </div>
    </div>
  )
}

export default App;
