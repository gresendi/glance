import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useState, useEffect } from 'react';
import Clock from '../../components/Clock'
import Greeting from '../../components/Greeting'
import Weather from '../../components/Weather'
import './Home.css'


const Home = () => 
{
  



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
          {/* <Weather></Weather> */}
        </Col>
      </Row>
      <Row className='top-center'>
        
      </Row>
      <Row className='center'>
        
        <Clock></Clock>
        <Greeting
        name = 'Gilberto'
        ></Greeting>
        
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
