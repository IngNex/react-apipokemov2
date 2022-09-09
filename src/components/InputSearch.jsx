import React from 'react'
import { Search } from '../styles/SearchStyle'

export default function InputSearch({search, setSearch}) {

  const handleInput = ({target}) => {
    setSearch(target.value)
  }

  return (
    <Search>
      <input type='text' name='search' placeholder='Buscar pokemon...' onChange={handleInput} value={search}/>
    </Search>
  )
}
