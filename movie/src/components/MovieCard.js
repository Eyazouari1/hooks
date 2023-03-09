import React from 'react'
import EditMovie from './EditMovie'
import StarRating from './StarRating'

const MovieCard = ({film,handleDelete,handleEdit}) => {

  return (
    <div>
        <div className='card'>
        <StarRating   rat={film.rating}/>
         <img src={film.image}alt={film.name} className="image"/>
         <div className='date'> 
         <h3>{film.name}</h3>
         <div className='test'>
         <h3>{film.date}</h3>
         <button className='deleat' type='submit' onClick={()=>handleDelete(film.id)}> Deleat </button>
         <EditMovie movie={film}/>
         </div>
         </div>
         </div>
    </div>
  )
}

export default MovieCard