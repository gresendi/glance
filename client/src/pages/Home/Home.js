import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Stack from 'react-bootstrap/Stack'
import { useState, useEffect } from 'react';
import Clock from '../../components/Clock'
import Greeting from '../../components/Greeting'
import Weather from '../../components/Weather'
import LinksDropdown from '../../components/LinksDropdown'
import BackgroundAPI from '../../utils/BackgroundAPI'
import PhotoCard from '../../components/PhotoCard';
import './Home.css'
import Quote from '../../components/Quote'


const Home = () => 
{
  const [background, setBackground] = useState({
    url: '',
    width: "100%",
    height: "400px",
    backgroundImage: '',
    name:'Gilberto',
    location:''
  })
 
  const getBackground = () =>{
    //api call to get background
       
    let backgroundTemp = BackgroundAPI.getBackground()
    console.log(backgroundTemp)
    let url = 'https://momentum.photos/img/3c7c426c-4763-4452-8fd1-6d6d8eafde76.jpg?momo_cache_bg_uuid=29f19086-4db4-45eb-b314-bed96e63394f'
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
      <Row className='bottom-center  fixed-bottom'>
        <Stack
        direction='vertical'
        >
          <Quote
            quote='quote'></Quote>
        </Stack>
        
        
       
      </Row>
      <Row className='bottom-row fixed-bottom'>
        <Col >
          {/* settings */}
          {/* photo info/ next image */}
          <PhotoCard
          name={background.name}
          location= {background.location}
          ></PhotoCard>
        </Col>
       
         
        
        <Col >
          
        </Col>
      </Row>




    </Container>
  )
}

export default Home
