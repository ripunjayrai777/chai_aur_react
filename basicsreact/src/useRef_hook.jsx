import React, { useEffect, useRef, useState } from 'react'

const Hook3 = () => {
    // const [num, setNum] = useState(0);
    // const count = useRef(0);
    // useEffect(()=>{
    //     count.current = count.current +1;
    // });


    const inputElem = useRef();
    const btnClicked=()=>{
      console.log(inputElem.current);
      inputElem.current.style.background= "blue";
    }
  return (
    <>
    {/* <button onClick={()=>{setNum(num+1)}}>+1</button>
    <h1>Number: {num}</h1>
    <button onClick={()=>{setNum(num-1)}}>-1</button>
    <h2>Render Time: {count.current}</h2> */}

    

    <input type="text" ref={inputElem}/>
    <button onClick={btnClicked}>Click Here</button>
    </>
  )
}

export default Hook3;