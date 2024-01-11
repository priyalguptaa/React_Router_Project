import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

const Github = () => {         
    const data = useLoaderData()                  
    // jese hi componenet load hota he useEffect call hota he isly isame 
    // const[data, setData] = useState([]);
    // useEffect(()=>{
    //    fetch('https://api.github.com/users/hiteshchoudhary')
    //    .then(response => response.json())
    //    .then(data=>{
    //     console.log(data)
    //     setData(data)
    //    })
    // })
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github Followers: {data.followers}
    <img src={data.avatar_url} alt="Git picture" width={300}/>
    </div>
    // useEffect hook tab chalta he jab state ya props me changes hote he ya jo dependency array de rakha he usame changes hue he to useEffect hook chakta he
    //isly API jo he vo component ke load hote hi chalegi isly useeffect ka use kar lenge
  )
}

export default Github

// aynchronus means when the timing is assign there so it will not wait for it it goes through
// vo wait nahi karega age ka chala dega jo he 
export const githubInfoLoader = async() =>{
    const response = await fetch('https://api.github.com/users/hiteshchoudhary')
    return response.json();
}