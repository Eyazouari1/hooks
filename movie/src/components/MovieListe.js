import React from 'react'
import MovieCard from './MovieCard'

const MovieListe = ({movie,handleDelete,handleEdit}) => {
  return (
    <div className="list-form">
     {
      movie.map((el)=>(<MovieCard film={el} handleDelete={handleDelete} handleEdit={handleEdit}/>))
     } 
    </div>
  )
}

export default MovieListe