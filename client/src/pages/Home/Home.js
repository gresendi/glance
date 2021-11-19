
import './Home.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './Home.css'
import moment from 'moment'
import { useState, useEffect } from 'react';
const Home = () => {
  const [clock, setClock] = useState([]);


  
  useEffect(() => {
    
    setClock(moment().format('LT'))
    setInterval(update, 1000)
  });

  const update = () =>{
    setClock(moment().format('LT'))
    console.log('updating')
  }



  return (
    <Container fluid className='box'>
      <Row className='top-row'>
        <Col sm={4}>
          let-top
        </Col>
        <Col sm={4}>
          middle-top
        </Col>
        <Col sm={4}>
          right-top
        </Col>
      </Row>
      <Row className='top-center'>
        
      </Row>
      <Row className='center'>
        
        <Col md="auto">{clock}</Col>
      </Row>
      <Row className='bottom-center'>
        bottom-center
      </Row>
      <Row className='bottom-row'>
        bottom-row
      </Row>




    </Container>
  )
}

export default Home
