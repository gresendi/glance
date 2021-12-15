import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './PhotoCard.css'
import { useState, useEffect } from 'react'



const PhotoCard = ({ name, location, userLink, unslpashLink}) => {
  
console.log(name)
  


 

  return (
    
       <div className='bottom-left'>
        
    <a className='name' href={userLink}>Photo by {' '} {name}</a>
      <p > <a className='name' href={unslpashLink}>Unsplash</a></p>
       
       </div>
       
      



  )
}

export default PhotoCard