import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useState, useEffect } from 'react';
import Clock from '../../components/Clock'
import Greeting from '../../components/Greeting'
import Weather from '../../components/Weather'
import LinksDropdown from '../../components/LinksDropdown'
import BackgroundAPI from '../../utils/BackgroundAPI'
import PhotoCard from '../../components/PhotoCard';
import './Home.css'



const Home = () => 
{
  const [background, setBackground] = useState({
    url: '',
    width: "100%",
    height: "400px",
    backgroundImage: '',
    name:'',
    location:''
  })
 
  const getBackground = () =>{
    //api call to get background
    // BackgroundAPI.getBackground()   
    let url = 'https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg'
    setBackground({ ...background, url: url, backgroundImage: "url(" +  url  + ")",name:'John Doe',location:'Woods'})

    console.log(background.url)
    console.log(background.backgroundImage)

  }

  useEffect(() => {
    getBackground()

  }, [background.url])

 
  var sectionStyle = {
    
    backgroundImage: background.backgroundImage,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'

  };


  return (
    <Container fluid className='box'
    style={sectionStyle}>
      <Row className='top-row fixed-top'>
        <Col sm={4}>
          <LinksDropdown></LinksDropdown>
        </Col>
        <Col sm={4}>
          {}
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
      <Row className='bottom-row fixed-bottom'>
        <Col sm={4}>
          {/* settings */}
          {/* photo info/ next image */}
          <PhotoCard
          name={background.name}
          location= {background.location}
          ></PhotoCard>
        </Col>
        <Col sm={4}>
          { }
        </Col>
        <Col sm={4}>
          
        </Col>
      </Row>




    </Container>
  )
}

export default Home
