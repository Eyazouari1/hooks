import React from 'react'
import StarRating from './StarRating'

const Search = ({searchValue, searchRating, handleRating,handleSearch}) => {
  return (
    <div>
        <header>
        <h1>our Movie App</h1>
        <div className='star'>
        <StarRating handleRating={handleRating} rating={searchRating}/>
        <input type="text" placeholder='enter a movie to search' value={searchValue} onChange={handleSearch} className='start'/>
       
        </div>
        </header>
    </div>
  )
}

export default Search