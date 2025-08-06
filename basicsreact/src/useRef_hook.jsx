import React, { useEffect, useRef, useState } from 'react'

const Hook3 = () => {
    const [num, setNum] = useState(0);
    const count = useRef(0);

    useEffect(()=>{
        count.current = count.current +1;
    });

  return (
    <>
    <button onClick={()=>{setNum(num+1)}}>+1</button>
    <h1>Number: {num}</h1>
    <button onClick={()=>{setNum(num-1)}}>-1</button>
    <h2>Render Time: {count}</h2>
    </>
  )
}

export default Hook3;