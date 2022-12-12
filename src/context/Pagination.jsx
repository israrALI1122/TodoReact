import React from 'react'
import { useGlobal } from './UsseContext'

const Pagination = () => {
    const {page, nbPages , PrevPage, NextPage} = useGlobal()
  return (
    <div>
        <button onClick={()=> PrevPage()}>PREV</button>
        <p>{ page + 1 } & { nbPages }</p>
        <button onClick={()=>NextPage()}>NEXT</button>
    </div>
  )
}

export default Pagination