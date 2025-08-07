import React, { useState } from 'react'

const hook = () => {
    // const [color, setColor]=useState("Blue")
    //const changColor= ()=>{
    //setColor("black")
    //}

    const [car, setCar]= useState({
      model:"Defender",
      color:"Red",
      year:"2025"
    });

    // const  changeCar= ()=>{
    //     setCar({
    //       model: "land rover",
    //       color: "black",
    //       year:"2024"
    //     })
    // }
    const changeCar=()=>{
      setCar((xyz)=>{
        return {...xyz, color: "Black", year:"1971"}
      })
    }

    const [count, setCount] = useState(0);
    // const counter=()=>{
    //   setCount(count+1)
    // }

    const counter =()=>{
      setCount(prev => prev+1)
      setCount(prev => prev+1)
    }

    const [num, setNum] = useState(0);
    const addNum=()=>{
      if(num<20){
        setNum(num+1);
      }
      
    }
    const removeNum=()=>{
      if(num>0){
        setNum(num-1);
      }
    }
  return ( 
    
    <>
    <h1>My {car.model}</h1>
    <h2>this is {car.color} {car.model} of {car.year}.</h2>
    <button onClick={changeCar}>black</button>

    <h1>Click for Couter</h1>
    <h2>Count: {count}</h2>
    <button onClick={counter}>Increase</button>

    <h1>Here is assignment work.</h1>
    <button onClick={addNum}>+1</button>
    <h2>Counter: {num}</h2>
    <button onClick={removeNum}>-1</button>
    </>
  )
}

export default hook;