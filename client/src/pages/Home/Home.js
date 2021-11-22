import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useState, useEffect } from 'react';
import Clock from '../../components/Clock'
import Greeting from '../../components/Greeting'
import Weather from '../../components/Weather'
import LinksDropdown from '../../components/LinksDropdown'
import BackgroundAPI from '../../utils/BackgroundAPI'
import './Home.css'



const Home = () => 
{
  



  return (
    <Container fluid className='box'>
      <Row className='top-row'>
        <Col sm={4}>
          <LinksDropdown></LinksDropdown>
        </Col>
        <Col sm={4}>
          {BackgroundAPI.getBackground()}
        </Col>
        <Col sm={4}>
          <Weather></Weather>
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
