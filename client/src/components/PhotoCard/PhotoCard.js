import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './PhotoCard.css'
import { useState, useEffect } from 'react'



const PhotoCard = ({name, location}) => {
  

  


 

  return (
    
       
        <Col className='bottomLeft' sm={4}>
        <p className='name'>{name}</p>
        <p className='name'>{location}</p>
        </Col>
       
      



  )
}

export default PhotoCard