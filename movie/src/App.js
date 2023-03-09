
import { useState } from 'react';
import {data}from './data'; 
import './App.css';
import MovieListe from './components/MovieListe';
import Search from './components/Search';
import AddMovie from './components/AddMovie';
function App() {
  const[liste,setListe]=useState (data)
 const[searchValue,setSearchValue] =useState('')
const[searchRating,setSearchRating] =useState(0)
//add movie to the liste
  const handleAdd=(newMovie)=>setListe([...liste,newMovie])
//handle searching by rating
   const handleRating=(rate)=>setSearchRating(rate);
   //handlesearching by input value
   const handleSearch=(e)=>setSearchValue(e.target.value)
   const handleDelete = (id) =>{ const delArr = [...liste].filter((film)=> film.id !== id); setListe(delArr);}
   const handleEdit=(editMovie)=>setListe(liste.map((el)=>el.id===editMovie.id?{...el,...editMovie}:el))
  return (
    <div className="App">
      <Search searchValue={searchValue} searchRating={searchRating} handleRating={handleRating} handleSearch={handleSearch}/>
      <MovieListe movie={liste.filter((y)=>
       y.name.toLowerCase().includes(searchValue.toLowerCase().trim())
        &&searchRating<=y.rating
        )}
        handleDelete={handleDelete}
       />
      <AddMovie handleAdd={handleAdd} handleEdit={handleEdit}/>
    </div>
  );
}

export default App;
