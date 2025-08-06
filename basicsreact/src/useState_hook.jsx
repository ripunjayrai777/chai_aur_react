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
        return {...xyz, color: "Black"}
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
  return ( 
    
    <>
    <h1>My {car.model}</h1>
    <h2>this is {car.color} {car.model} of {car.year}.</h2>
    <button onClick={changeCar}>black</button>

    <h1>Click for Couter</h1>
    <h2>Count: {count}</h2>
    <button onClick={counter}>Increase</button>
    </>
  )
}

export default hook;