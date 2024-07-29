import React, { useEffect, useState } from 'react'

function Github() {
     const [data, setData] = useState([])
    useEffect(()=>{

         fetch('https://api.github.com/users/dkg2005')
         .then(response => response.json())
         .then(data => {
            console.log(data)
            setData(data)
         })
    },[])

  return (
    <div className='text-center bg-gray-600 bg-orange-700 text-white p-4 text-3xl'
    >
      Github Profile: {data.login} <br/>
      Github User Name: {data.name} <br/>
      Github Id: {data.id} <br/>
      Location : {data.location} <br/>
      Followers: {data.followers}<br/>
      Following: {data.following}
      <img src ={data.avatar_url} alt="Git picture" width={300} />
    </div>
  )
}

export default Github
