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
import UserAPI from '../../utils/UserAPI';

const Home = () => {
  const [background, setBackground] = useState({
    url: '',
    userLink: '',
    width: "100%",
    height: "400px",
    backgroundImage: '',
    name: 'Gilberto',
    location: '',
    unslpashLink: 'https://unsplash.com/?utm_source=glance&utm_medium=referral',
  })
  const [loaded, setLoaded] = useState(false)
  const [user, setUser] = useState({})


  const getBackground = () => {
    //api call to get background

    let backgroundTemp = BackgroundAPI.getBackground()
    backgroundTemp.then(response => {

      let name = response.response[0].user.name
      console.log(response.response[0].user.name)
      let userLink = response.response[0].user.links.html
      let backgroundUrls = (response.response[0].urls)
      let backgroundData = {
        background: backgroundUrls,

        userLink: userLink,
        user: name,

      }
      console.log(backgroundData)
      let url = backgroundData.background.raw
      setBackground({ ...background, url: url, backgroundImage: "url(" + url + ")", name: backgroundData.user, location: 'Woods', userLink: userLink })

    })




  }

  useEffect(() => {
    if (!loaded) {
      getBackground()

      setLoaded(true)
      UserAPI.getUser()
        .then(({ data }) => {
          console.log(data)
        })
    }


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
        <Col>
          <LinksDropdown></LinksDropdown>
        </Col>
        <Col>
          <Row></Row>
        </Col>
        <Col >
          <Weather></Weather>
        </Col>
      </Row>
      <Row className='top-center'>

      </Row>
      <Row className='center fl' >
      <Col>
        <Clock></Clock>
        <Greeting
          name='Gilberto'
          ></Greeting>
          </Col>

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
            userLink={background.userLink}
            unslpashLink={background.unslpashLink}
            location={background.location}
          ></PhotoCard>
        </Col>



        <Col >

        </Col>
      </Row>




    </Container>
  )
}

export default Home
