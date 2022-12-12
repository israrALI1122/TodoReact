import React from 'react'
import { useGlobal } from './UsseContext'


const home = () => {
    const {hits, isloading , removePost} = useGlobal()
    if(isloading){
      return(
        <>
        <h2>Loading....</h2>
        </>
      )
    }

  
  return (
    <div>
      {
        hits.map((cur)=>{
          const {title, objectID, url, num_comments} = cur
          return(
            <div key={objectID}>
            <h2>{title}</h2>
            <button onClick={()=> removePost(objectID)}>remove</button>
            </div>
          )
        })
      }
    </div>
  )
}

export default home