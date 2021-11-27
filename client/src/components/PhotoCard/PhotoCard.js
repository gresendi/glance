import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './PhotoCard.css'
import { useState, useEffect } from 'react'



const PhotoCard = ({name, location}) => {
  

  


 

  return (
    
       
        <Col className='bottomLeft' sm={4}>
      <p className='name'>Photo by <a className='name' href='https://google.com'>{name}</a></p>
      <p > <a className='name' href='https://google.com'>Unsplash</a></p>
        </Col>
       
      



  )
}

export default PhotoCard