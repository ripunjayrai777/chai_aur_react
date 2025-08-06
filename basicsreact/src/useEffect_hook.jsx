import React, { useEffect, useState } from 'react'

const Hook2 = () => {
    const[count, setCount] =useState(0);
    useEffect(()=>{
        setTimeout(()=>{
            setCount(count+1)
        },100000)
    }
    )

    // const[count, setCount] =useState(0);
    // useEffect(()=>{
    //     setTimeout(()=>{
    //         setCount(count+1)
    //     },1000)
    // },[count])
  return (
    <>
    <h1>Second Couter: {count}</h1>
    </>
  )
}

export default Hook2