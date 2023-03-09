import React from 'react'

const StarRating = ({rat,handleRating}) => {
    const stars=(x)=>{
        let star=[];
        for(let i=1;i<=5;i++){
          if(i<=rat){
            star.push(<span onClick={()=>handleRating(i)} style={{color:'gold', fontSize:'20px',cursor:'pointer'}}>★</span>)
          }  else star.push(<span onClick={()=>handleRating(i)} style={{color:'black', fontSize:'20px', cursor:'pointer'}}>★</span>)
        }
        return star
    }
  return <div>{stars(rat)}</div>
  
}
StarRating.defaultProps={
    rating:1,
    handleRating:()=>{},
}

export default StarRating