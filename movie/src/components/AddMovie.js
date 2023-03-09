import React, { useState } from 'react'
import Modal from 'react-modal'
import StarRating from './StarRating';


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
const AddMovie = ({handleAdd}) => {
  const handleSubmit=(e)=>{e.preventDefault()
    const film={id:Math.random()}
  handleAdd(film)
  closeModal()}
  
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
  const[form,setForm]=useState({
    name:"",
    date:'',
    image:'',
    rat:1,
  })
  

  //handling changes in the input filed
  const handleChange=(e)=>setForm({...form,[e.target.name]:e.target.value})
  //handle rating given when adding a movie
  const handleRating=(x)=>setForm({...form,rat:x})
  return (
  <div> 
    <button onClick={openModal} className='type'>Open Modal</button>
    <Modal
        isOpen={modalIsOpen}
        
        onRequestClose={closeModal}
        style={customStyles}
       
      ><div className='form' style={{border:'1px  solid'}}>
        <form onSubmit={(e)=>{
            e.preventDefault();
            let newMovie={
                ...form,
                id:Math.random(),
            }
            handleAdd(newMovie);
            closeModal();
           

        }}>
           <label>Movie Name</label>
          <div>
          <input type='text' value={form.name} name='name' onChange={handleChange} required className='input'/>  </div>
          <label>Relase Date</label>
          <div>
          <input type='date'value={form.date} name='date' onChange={handleChange} required className='input'/></div>
         
          <label>Movie Poster</label>
          <div>
          <input type='url'value={form.image} name='image' onChange={handleChange} required className='input'/></div>
          <StarRating rat={form.rating} handleRating={handleRating}  style={{marginTop:'20px',marginLeft:'40px'}}/>
          <br></br>
          <div>
          <button type='submit' className='btn'>Add</button>
          <button type='submit' className='btn'>Cancel</button>
          </div>
        </form>
        </div>
      </Modal>
    </div>
  
  
  )
 
}

export default AddMovie