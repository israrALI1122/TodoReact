import React from 'react'
import { useGlobal } from './UsseContext'

const Search = () => {
    const {query ,searchPost} = useGlobal()
  return (
    <div>
        <h2>israr tech news updated</h2>
        <form onSubmit={(e)=> e.preventDefault()}>

        <input type="text" placeholder='search here....' value={query} onChange={(e)=> searchPost(e.target.value)} />
        </form>

    </div>
  )
}

export default Search