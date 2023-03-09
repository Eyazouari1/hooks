import React, { useState } from 'react'
import Modal from 'react-modal'
import StarRating from './StarRating';


const EditMovie = ({handleEdit,movie}) => {
    const [name,setName]=useState(movie.name)
    const[date,setDate]=useState(movie.date)
    const[image,setImage]=useState(movie.image)
    const[rating,setRating]=useState(movie.rating)
    const handleRating= (a)=>setRating(a)
    const handleSubmit=(e)=>{e.preventDefault()
    const film={id:movie.id,name,date,image,rating}
  handleEdit(film)
  closeModal()
  }
const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };
  Modal.setAppElement('#root');

  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
  
  return (
    
  <div> 
    <button onClick={openModal} className='tst'>Edit</button>
    <Modal
        isOpen={modalIsOpen}
        
        onRequestClose={closeModal}
        style={customStyles}
       
      ><div className='form' style={{border:'1px  solid'}}>
        <form onSubmit={handleSubmit}>
           <label>Movie Name</label>
          <div>
          <input type='text' value={movie.name} name='name' onChange={handleEdit} required className='input'/>  </div>
          <label>Relase Date</label>
          <div>
          <input type='date'value={movie.date} name='date' onChange={handleEdit} required className='input'/></div>
         
          <label>Movie Poster</label>
          <div>
          <input type='url'value={movie.image} name='image' onChange={handleEdit} required className='input'/></div>
          <StarRating rat={movie.rating} handleRating={handleRating}  style={{marginTop:'20px',marginLeft:'40px'}}/>
          <br></br>
          <div>
          <button type='submit' className='btn'>Add</button>
          <button className='btn' onClick={closeModal}>Cancel</button>
          </div>
        </form>
        </div>
      </Modal>
    </div>
  
  

  )
}

export default EditMovie