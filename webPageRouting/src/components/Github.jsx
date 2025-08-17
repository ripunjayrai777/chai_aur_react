import React, { useEffect, useState } from 'react'
import { data, useParams } from 'react-router-dom'

const Github = () => {
    const [data, setData] = useState([])
    useEffect(()=>{
        fetch('https://api.github.com/users/ripunjayrai777')
        .then( response => response.json())
        .then(data => {
            console.log(data);
            setData(data)
        })
    }, [])

  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github Followers : {data.message}
    <img src={data.avatar_url} alt="Git Picture" />
    </div>
    
  )
}

export default Github